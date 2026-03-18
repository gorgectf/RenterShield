import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Loader2, MessageSquareText, Send, Siren, ShieldAlert } from "lucide-react";
import { z } from "zod";
import { RegionSelector } from "@/components/RegionSelector";
import { useRegion, regionLabels } from "@/contexts/RegionContext";
import { SeoHead } from "@/components/SeoHead";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { supabase } from "@/integrations/supabase/client";
import { getStarterPrompts, type LegalRegion } from "@/lib/legalChatKnowledge";
import { toast } from "sonner";

const inputSchema = z.string().trim().min(5, "Please enter a fuller question.").max(1500, "Please keep your message under 1500 characters.");

type ChatRole = "user" | "assistant";
type ChatMessageItem = { role: ChatRole; content: string };

const initialAssistantMessage = (regionLabel: string) =>
  `Hi — I’m the RenterShield AI guide for **${regionLabel}**. I can help explain renter rights, repair issues, deposit disputes, eviction concerns, and where to escalate next.\n\n**Important:** I provide informational guidance only, not legal advice. If you are in immediate danger, call **999**. If there is a gas emergency, call **0800 111 999**.`;

export default function ChatPage() {
  const { region } = useRegion();
  const starterPrompts = useMemo(() => getStarterPrompts(region as LegalRegion), [region]);
  const [messages, setMessages] = useState<ChatMessageItem[]>([
    { role: "assistant", content: initialAssistantMessage(regionLabels[region]) },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (rawMessage?: string) => {
    const candidate = rawMessage ?? input;
    const parsed = inputSchema.safeParse(candidate);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your message.");
      return;
    }

    const userMessage: ChatMessageItem = { role: "user", content: parsed.data };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    const conversationForBackend = nextMessages.map(({ role, content }) => ({ role, content }));

    const { data, error } = await supabase.functions.invoke("legal-chat", {
      body: {
        region,
        messages: conversationForBackend,
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Could not reach the AI guide right now.");
      return;
    }

    if (data?.error) {
      toast.error(data.error);
      return;
    }

    if (!data?.answer) {
      toast.error("The AI guide returned an empty response.");
      return;
    }

    setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="AI Renter Guide | RenterShield"
        description="Ask RenterShield’s AI housing guide for region-aware UK renter guidance grounded in the app’s rights library, issue flows, and support resources."
        canonicalPath="/chat"
      />

      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors mt-1">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">AI Housing Guide</h1>
              <p className="text-muted-foreground text-sm mt-1 max-w-2xl">
                Ask questions about renting problems in {regionLabels[region]}. Answers are grounded in RenterShield’s existing legal rights and issue-tree guidance.
              </p>
            </div>
          </div>
          <RegionSelector />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid gap-6 lg:grid-cols-[320px,1fr]">
        <aside className="space-y-4 lg:sticky lg:top-6 self-start">
          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 text-foreground">
              <MessageSquareText className="text-accent" size={18} />
              <h2 className="font-display font-semibold">How to use it</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>• Mention your problem clearly, like repairs, deposit disputes, or eviction notices.</li>
              <li>• Include timing, what your landlord has done, and any written notices you received.</li>
              <li>• Use the region selector above if the law should change.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 text-foreground">
              <ShieldAlert className="text-accent" size={18} />
              <h2 className="font-display font-semibold">Important</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              This chatbot gives informational guidance only and cannot replace a solicitor or caseworker. If the law is unclear or your situation is complex, use the support links it gives you.
            </p>
          </div>

          <div className="rounded-[2rem] border border-destructive/20 bg-destructive/10 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-foreground">
              <Siren className="text-destructive" size={18} />
              <h2 className="font-display font-semibold">Urgent risks</h2>
            </div>
            <p className="mt-4 text-sm text-foreground leading-relaxed">
              If you are in immediate danger call <a href="tel:999" className="font-semibold text-destructive">999</a>. For gas emergencies call <a href="tel:0800111999" className="font-semibold text-destructive">0800 111 999</a>.
            </p>
          </div>
        </aside>

        <section className="rounded-[2rem] border border-border bg-card shadow-sm overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-display font-semibold text-foreground">Ask about your tenancy situation</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => void sendMessage(prompt)}
                  disabled={isLoading}
                  className="rounded-full border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground hover:text-foreground hover:border-accent transition-colors disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5 min-h-[460px] max-h-[65vh] overflow-y-auto bg-muted/20">
            {messages.map((message, index) => (
              <ChatMessage key={`${message.role}-${index}`} role={message.role} content={message.content} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="animate-spin" size={16} /> Thinking…
              </div>
            )}
          </div>

          <div className="border-t border-border p-5">
            <label htmlFor="legal-chat-input" className="sr-only">
              Ask your housing question
            </label>
            <div className="flex flex-col gap-3">
              <textarea
                id="legal-chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={`Ask a question about renting in ${regionLabels[region]}...`}
                className="min-h-[120px] rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                disabled={isLoading}
              />
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The AI uses the full conversation so far, plus RenterShield’s region-specific guidance, to answer.
                </p>
                <button
                  onClick={() => void sendMessage()}
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={16} /> Send question
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
