import { Link } from "react-router-dom";
import { MessageSquareText, ArrowRight } from "lucide-react";

export function HomeChatPromo() {
  return (
    <section aria-labelledby="chat-promo-heading" className="mb-10">
      <div className="rounded-[2rem] border border-border bg-card p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">AI guidance</p>
            <h2 id="chat-promo-heading" className="font-display font-bold text-2xl text-foreground mt-2">
              Ask the AI housing guide a question.
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Get region-aware, source-grounded guidance based on the same RenterShield issue flows, rights summaries, and support pathways shown across the site.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Informational only — not legal advice. Urgent safety or homelessness risks should still be escalated to emergency and support services.
            </p>
          </div>

          <Link
            to="/chat"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity md:self-end"
          >
            <MessageSquareText size={18} /> Open AI guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
