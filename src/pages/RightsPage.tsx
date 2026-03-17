import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useRegion, regionLabels } from "@/contexts/RegionContext";
import { RegionSelector } from "@/components/RegionSelector";
import { getRights, getRightsDescription } from "@/data/rightsData";

export default function RightsPage() {
  const { region } = useRegion();
  const rights = getRights(region);
  const description = getRightsDescription(region);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex-1">
            <h1 className="font-display font-bold text-foreground text-lg">Know Your Rights</h1>
            <p className="text-muted-foreground text-sm">Key legal rights every private renter in {regionLabels[region]} should know</p>
          </div>
          <RegionSelector />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
          <p className="text-foreground leading-relaxed">
            {description} Below is a summary of your key rights — select any issue on the <Link to="/" className="text-accent font-semibold underline">homepage</Link> for step-by-step guidance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {rights.map((right, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                {right.icon}
              </div>
              <h2 className="font-display font-bold text-foreground text-lg mb-2">{right.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{right.summary}</p>
              <p className="text-xs text-muted-foreground/70 border-t border-border pt-3">
                <strong>Legal basis:</strong> {right.law}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>RenterShield provides guidance based on {regionLabels[region]} tenancy law. This is not legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
