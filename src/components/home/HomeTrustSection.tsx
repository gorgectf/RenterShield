import { ExternalLink, MapPinned, Scale, ShieldCheck } from "lucide-react";
import { regionLabels, type Region } from "@/contexts/RegionContext";

interface HomeTrustSectionProps {
  region: Region;
}

export function HomeTrustSection({ region }: HomeTrustSectionProps) {
  return (
    <section aria-labelledby="trust-heading" className="mt-14 md:mt-16">
      <div className="rounded-[2rem] border border-border bg-card p-6 md:p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Trust & credibility</p>
            <h2 id="trust-heading" className="font-display font-bold text-2xl text-foreground mt-2">
              Guidance grounded in real housing rules, not vague advice.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              RenterShield adapts content for {regionLabels[region]} and signposts users to recognised housing support and official guidance so they can act with more confidence.
            </p>
          </div>
          <div className="rounded-2xl bg-accent/10 px-4 py-3 text-sm font-medium text-foreground">
            Coverage: England, Wales, Scotland, Northern Ireland
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <div className="rounded-2xl bg-muted/50 p-5">
            <MapPinned className="text-accent mb-3" size={22} />
            <h3 className="font-display font-semibold text-foreground">Region-specific routes</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Support organisations and legal pathways change by nation, so the experience updates with the selected region.
            </p>
          </div>
          <div className="rounded-2xl bg-muted/50 p-5">
            <Scale className="text-accent mb-3" size={22} />
            <h3 className="font-display font-semibold text-foreground">Actionable legal context</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Users get practical next steps, template wording, and law references instead of needing to decode legal websites alone.
            </p>
          </div>
          <div className="rounded-2xl bg-muted/50 p-5">
            <ShieldCheck className="text-accent mb-3" size={22} />
            <h3 className="font-display font-semibold text-foreground">Transparent positioning</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              The site clearly states that guidance is informational only and encourages contact with specialist services for urgent or complex cases.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 text-sm text-muted-foreground">
          {[
            ["Shelter", "https://www.shelter.org.uk"],
            ["GOV.UK Renting", "https://www.gov.uk/private-renting"],
            ["TDS statistical briefing", "https://www.tenancydepositscheme.com/"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 hover:text-foreground transition-colors"
            >
              Source: {label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
