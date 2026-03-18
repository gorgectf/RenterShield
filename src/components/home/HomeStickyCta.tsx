import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export function HomeStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <a
          href="#issue-explorer"
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
        >
          <ArrowRight size={16} /> Get help
        </a>
        <Link
          to="/emergency"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Phone size={16} /> Emergency
        </Link>
      </div>
    </div>
  );
}
