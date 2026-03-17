import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Globe, ExternalLink, AlertTriangle } from "lucide-react";

const emergencyContacts = [
  {
    name: "Police / Fire / Ambulance",
    phone: "999",
    description: "For life-threatening emergencies, immediate danger, or crimes in progress.",
    urgent: true,
  },
  {
    name: "Gas Emergency",
    phone: "0800 111 999",
    description: "If you smell gas or suspect a gas leak. Available 24/7, free to call.",
    urgent: true,
  },
];

const supportContacts = [
  {
    name: "Shelter",
    phone: "0808 800 4444",
    website: "https://www.shelter.org.uk",
    description: "Free housing advice and support. Helpline open Mon-Fri 8am-8pm, Sat-Sun 9am-5pm.",
    tags: ["Housing advice", "Homelessness", "Legal help"],
  },
  {
    name: "Citizens Advice",
    phone: "0800 144 8848",
    website: "https://www.citizensadvice.org.uk",
    description: "Free, confidential advice on housing, benefits, debt, and legal issues.",
    tags: ["Benefits", "Legal rights", "Debt"],
  },
  {
    name: "Samaritans",
    phone: "116 123",
    website: "https://www.samaritans.org",
    description: "Emotional support 24/7. Free to call from any phone.",
    tags: ["Mental health", "Crisis support"],
  },
  {
    name: "National Domestic Abuse Helpline",
    phone: "0808 2000 247",
    website: "https://www.nationaldahelpline.org.uk",
    description: "24-hour support for domestic abuse, including from landlords or housemates.",
    tags: ["Domestic abuse", "Safety"],
  },
  {
    name: "Electrical Safety First",
    phone: null,
    website: "https://www.electricalsafetyfirst.org.uk",
    description: "Report electrical safety concerns in rented properties.",
    tags: ["Electrical safety"],
  },
  {
    name: "Environmental Health (Local Council)",
    phone: null,
    website: "https://www.gov.uk/find-local-council",
    description: "Report housing hazards, disrepair, or HMO issues. Search for your local council to find their Environmental Health team.",
    tags: ["Disrepair", "Hazards", "HMO"],
  },
  {
    name: "Legal Aid",
    phone: null,
    website: "https://www.gov.uk/legal-aid",
    description: "Check if you qualify for free legal representation for housing cases.",
    tags: ["Legal aid", "Court"],
  },
  {
    name: "Acas (Employment)",
    phone: "0300 123 1100",
    website: "https://www.acas.org.uk",
    description: "If housing issues are linked to employment (e.g. tied accommodation).",
    tags: ["Employment", "Tied housing"],
  },
];

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-display font-bold text-foreground text-lg">Emergency & Support Contacts</h1>
            <p className="text-muted-foreground text-sm">Who to call when you need help now</p>
          </div>
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
