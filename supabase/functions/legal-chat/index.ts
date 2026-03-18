import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { z } from "npm:zod@3.25.76";
import { getLegalChatContext } from "../_shared/legalChatKnowledge.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT_MAX_REQUESTS = 12;
const RATE_LIMIT_WINDOW_SECONDS = 60;
const GENERIC_ERROR_MESSAGE = "An unexpected error occurred. Please try again.";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(4000),
});

const requestSchema = z.object({
  region: z.enum(["england", "wales", "scotland", "northern-ireland"]),
  messages: z.array(messageSchema).min(1).max(24),
});

const URGENT_KEYWORDS = [
  "immediate danger",
  "unsafe now",
  "violence",
  "abuse",
  "domestic abuse",
  "homeless tonight",
  "sleeping rough",
  "gas leak",
  "smell gas",
  "fire",
  "electrocution",
  "locked out",
  "illegal eviction",
  "suicidal",
  "self harm",
];

function buildSystemPrompt(region: string, groundingContext: string) {
  return `You are RenterShield's AI housing guide for ${region}. Your job is to give concise, calm, practical informational guidance for UK private renters.

Non-negotiable rules:
- You are NOT a lawyer and must never claim to provide legal advice.
- You must stay grounded in the provided RenterShield context only. If the answer is uncertain or not covered, say so clearly and direct the user to relevant support services or RenterShield issue flows.
- Prefer region-specific guidance from the supplied context. Do not mix laws across nations.
- If the user appears to face immediate danger, abuse, homelessness tonight, gas/electrical danger, or illegal lockout, prioritise emergency escalation first.
- Do not draft aggressive threats, fabricate law, or tell the user to ignore court notices.
- Keep the response practical and structured in markdown.
- Ask at most two clarifying questions if needed.
- End every answer with a short reminder that this is informational guidance, not legal advice.

When useful, structure answers with these sections:
## What this likely means
## What to do next
## Who to contact
## Sources from RenterShield

Grounding context:
${groundingContext}`;
}

function needsUrgentEscalation(messages: Array<{ role: "user" | "assistant"; content: string }>) {
  const combined = messages
    .filter((message) => message.role === "user")
    .map((message) => message.content.toLowerCase())
    .join(" \n ");

  return URGENT_KEYWORDS.some((keyword) => combined.includes(keyword));
}

function getClientIp(req: Request) {
  const trustedHeaders = ["cf-connecting-ip", "x-real-ip"];
  for (const header of trustedHeaders) {
    const value = req.headers.get(header)?.trim();
    if (value) return value;
  }

  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const forwardedIps = forwardedFor
      .split(",")
      .map((ip) => ip.trim())
      .filter(Boolean);
    const trustedIp = forwardedIps.at(-1);

    if (trustedIp) return trustedIp;
  }

  return null;
}

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function enforceRateLimit(req: Request) {
  const clientIp = getClientIp(req);
  if (!clientIp) {
    throw new Error("Unable to determine client IP for rate limiting");
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are not configured for rate limiting");
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const ipHash = await sha256Hex(clientIp);
  const { data, error } = await adminClient.rpc("check_legal_chat_rate_limit", {
    p_ip_hash: ipHash,
    p_max_requests: RATE_LIMIT_MAX_REQUESTS,
    p_window_seconds: RATE_LIMIT_WINDOW_SECONDS,
  });

  if (error) {
    console.error("legal-chat rate limit rpc error:", error);
    throw new Error("Rate limit validation failed");
  }

  const result = Array.isArray(data) ? data[0] : data;
  if (!result) {
    throw new Error("Rate limit validation returned no result");
  }

  return {
    allowed: Boolean(result.allowed),
    retryAfterSeconds: Number(result.retry_after_seconds ?? 0),
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rateLimit = await enforceRateLimit(req);
    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Retry-After": String(Math.max(1, rateLimit.retryAfterSeconds)),
          },
        },
      );
    }

    const json = await req.json();
    const parsed = requestSchema.safeParse(json);

    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten() }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { region, messages } = parsed.data;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const groundingContext = getLegalChatContext(region);
    const urgentPreamble = needsUrgentEscalation(messages)
      ? "The user's latest messages suggest urgency. Start with emergency or specialist support contacts before any wider explanation."
      : "";

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `${buildSystemPrompt(region, groundingContext)}\n\n${urgentPreamble}`,
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("legal-chat AI gateway error:", {
        status: response.status,
        body,
      });

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Lovable AI credits are unavailable right now. Please top up workspace usage and try again." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      throw new Error(`AI gateway request failed with status ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content;

    if (!answer || typeof answer !== "string") {
      throw new Error("AI gateway returned an empty answer");
    }

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("legal-chat error:", error);

    return new Response(JSON.stringify({ error: GENERIC_ERROR_MESSAGE }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
