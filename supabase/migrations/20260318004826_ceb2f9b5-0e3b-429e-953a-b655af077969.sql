-- Durable rate-limit storage for the public legal-chat endpoint
CREATE TABLE IF NOT EXISTS public.legal_chat_rate_limits (
  ip_hash TEXT PRIMARY KEY,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  request_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.legal_chat_rate_limits ENABLE ROW LEVEL SECURITY;

-- No public policies: default deny. This table is intended for server-side access only.

CREATE INDEX IF NOT EXISTS idx_legal_chat_rate_limits_window_started_at
  ON public.legal_chat_rate_limits (window_started_at);

CREATE OR REPLACE FUNCTION public.check_legal_chat_rate_limit(
  p_ip_hash TEXT,
  p_max_requests INTEGER DEFAULT 12,
  p_window_seconds INTEGER DEFAULT 60
)
RETURNS TABLE (
  allowed BOOLEAN,
  retry_after_seconds INTEGER,
  remaining INTEGER
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_now TIMESTAMPTZ := now();
  v_window_start TIMESTAMPTZ;
  v_request_count INTEGER;
BEGIN
  IF p_ip_hash IS NULL OR length(trim(p_ip_hash)) = 0 THEN
    RETURN QUERY SELECT false, p_window_seconds, 0;
    RETURN;
  END IF;

  INSERT INTO public.legal_chat_rate_limits AS rl (ip_hash, window_started_at, request_count, created_at, updated_at)
  VALUES (p_ip_hash, v_now, 1, v_now, v_now)
  ON CONFLICT (ip_hash)
  DO UPDATE SET
    window_started_at = CASE
      WHEN rl.window_started_at <= v_now - make_interval(secs => p_window_seconds)
        THEN v_now
      ELSE rl.window_started_at
    END,
    request_count = CASE
      WHEN rl.window_started_at <= v_now - make_interval(secs => p_window_seconds)
        THEN 1
      ELSE rl.request_count + 1
    END,
    updated_at = v_now
  RETURNING rl.window_started_at, rl.request_count
  INTO v_window_start, v_request_count;

  IF v_window_start <= v_now - make_interval(secs => p_window_seconds) THEN
    -- Defensive fallback; the UPSERT above should already reset the window.
    UPDATE public.legal_chat_rate_limits
    SET window_started_at = v_now,
        request_count = 1,
        updated_at = v_now
    WHERE ip_hash = p_ip_hash
    RETURNING window_started_at, request_count
    INTO v_window_start, v_request_count;
  END IF;

  IF v_request_count > p_max_requests THEN
    RETURN QUERY
    SELECT false,
           GREATEST(1, CEIL(EXTRACT(EPOCH FROM ((v_window_start + make_interval(secs => p_window_seconds)) - v_now)))::INTEGER),
           0;
    RETURN;
  END IF;

  RETURN QUERY
  SELECT true,
         0,
         GREATEST(0, p_max_requests - v_request_count);
END;
$$;