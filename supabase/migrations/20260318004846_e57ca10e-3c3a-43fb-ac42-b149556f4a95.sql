-- Add an explicit server-only policy to satisfy the linter while keeping public access denied.
CREATE POLICY "Service role can manage legal chat rate limits"
ON public.legal_chat_rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);