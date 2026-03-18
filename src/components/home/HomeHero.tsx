import { Link } from "react-router-dom";
import { Shield, Phone, Scale, ArrowRight, MessageSquareText } from "lucide-react";
import { regionLabels, type Region } from "@/contexts/RegionContext";

interface HomeHeroProps {
  region: Region;
}

export function HomeHero({ region }: HomeHeroProps) {
  return (
    <header className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.22),transparent_45%)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 py-14 md:py-24 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
          <span>Free UK renter help</span>
          <span className="hidden sm:inline text-primary-foreground/45">•</span>
          <span>Region-specific guidance for {regionLabels[region]}</span>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mt-6 mb-6 shadow-lg shadow-accent/25">
          <Shield size={32} className="text-accent-foreground" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto text-balance">
          Clear renter rights help when your home feels at risk.
        </h1>

        <p className="text-primary-foreground/75 mt-5 text-lg max-w-2xl mx-auto leading-relaxed text-balance">
          Built for students, young renters, and anyone facing landlord pressure, RenterShield turns confusing housing law into fast, practical next steps for {regionLabels[region]}.
        </p>

        <div className="grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto mt-8 text-left">
          {[
            "Choose your issue and get guided answers in minutes",
            "See legal references and support routes for your region",
            "Use template letters, AI guidance, and emergency contacts when things escalate",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-sm leading-relaxed">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href="#issue-explorer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowRight size={16} /> Get help now
          </a>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageSquareText size={16} /> Ask AI guide
          </Link>
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/10 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
          >
            <Scale size={16} /> Know your rights
          </Link>
          <Link
            to="/emergency"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-foreground/10 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
          >
            <Phone size={16} /> Emergency contacts
          </Link>
        </div>
      </div>
    </header>
  );
}
