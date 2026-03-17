import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Globe, AlertTriangle } from "lucide-react";
import { useRegion, regionLabels } from "@/contexts/RegionContext";
import { RegionSelector } from "@/components/RegionSelector";
import { getEmergencyContacts, getSupportContacts } from "@/data/emergencyData";

export default function EmergencyPage() {
  const { region } = useRegion();
  const emergencyContacts = getEmergencyContacts(region);
  const supportContacts = getSupportContacts(region);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex-1">
            <h1 className="font-display font-bold text-foreground text-lg">Emergency & Support Contacts</h1>
            <p className="text-muted-foreground text-sm">Who to call when you need help in {regionLabels[region]}</p>
          </div>
          <RegionSelector />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Emergency section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-destructive" size={22} />
            <h2 className="font-display font-bold text-xl text-foreground">Emergency Numbers</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {emergencyContacts.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 flex items-start gap-4 hover:border-destructive/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/20 text-destructive flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{c.name}</h3>
                  <p className="font-display font-bold text-destructive text-2xl">{c.phone}</p>
                  <p className="text-muted-foreground text-sm mt-1">{c.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Support organisations */}
        <h2 className="font-display font-bold text-xl text-foreground mb-4">Support Organisations</h2>
        <div className="grid gap-4">
          {supportContacts.map((c) => (
            <div key={c.name} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display font-bold text-foreground text-lg">{c.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{c.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {c.phone && (
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Phone size={14} /> Call
                    </a>
                  )}
                  {c.website && (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Globe size={14} /> Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>If you are in immediate danger, always call 999 first.</p>
        </div>
      </footer>
    </div>
  );
}
