import { Link } from "react-router-dom";
import { Shield, ArrowRight, Phone, Scale, HelpCircle, ExternalLink } from "lucide-react";
import { issueTrees } from "@/data/issueTreeData";
import { walesIssueTrees } from "@/data/walesIssueTreeData";
import { scotlandIssueTrees } from "@/data/scotlandIssueTreeData";
import { useRegion } from "@/contexts/RegionContext";
import { RegionSelector } from "@/components/RegionSelector";

const faqs = [
  {
    q: "Is RenterShield free?",
    a: "Yes — completely free. We believe every renter deserves access to clear legal guidance without cost.",
  },
  {
    q: "Is this legal advice?",
    a: "No. RenterShield provides guidance based on tenancy law, but it is not a substitute for professional legal advice. For complex cases, contact Shelter or a solicitor.",
  },
  {
    q: "Which regions are covered?",
    a: "We currently cover England and Wales with region-specific legal guidance. Use the region selector to switch between them. Scotland and Northern Ireland coming soon.",
  },
  {
    q: "What if my landlord retaliates?",
    a: "Retaliatory eviction is illegal. In England, the Deregulation Act 2015 protects you. In Wales, the Renting Homes (Wales) Act 2016 provides anti-retaliatory protections.",
  },
];

const Index = () => {
  const { region } = useRegion();
  const currentTrees = region === "scotland" ? scotlandIssueTrees : region === "wales" ? walesIssueTrees : issueTrees;

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="bg-primary text-primary-foreground border-b border-primary/80">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield size={20} />
            <span className="font-display font-bold">RenterShield</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/rights" className="hover:text-primary-foreground/80 transition-colors font-medium">
              Your Rights
            </Link>
            <Link to="/emergency" className="hover:text-primary-foreground/80 transition-colors font-medium">
              Get Help Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">RenterShield</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg max-w-lg mx-auto">
            Know your rights. Get personalised legal guidance. Take action to protect your home — all for free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              to="/rights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Scale size={16} /> Know Your Rights
            </Link>
            <Link
              to="/emergency"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-foreground/10 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
            >
              <Phone size={16} /> Emergency Contacts
            </Link>
          </div>
        </div>
      </header>

      {/* Emergency banner */}
      <div className="bg-destructive/10 border-b border-destructive/20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4 text-sm">
          <p className="text-foreground">
            <strong>In immediate danger?</strong> Call <a href="tel:999" className="text-destructive font-bold">999</a>. For housing emergencies, call {region === "scotland" ? "Shelter Scotland" : region === "wales" ? "Shelter Cymru" : "Shelter"}: <a href={region === "wales" ? "tel:08004954959" : "tel:08088004444"} className="text-destructive font-bold">{region === "wales" ? "0800 495 495" : "0808 800 4444"}</a>
          </p>
          <Link to="/emergency" className="text-accent font-semibold flex-shrink-0 hover:underline">
            All contacts →
          </Link>
        </div>
      </div>

      {/* Issue cards */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="font-display font-bold text-2xl text-foreground text-center mb-2">What's your issue?</h2>
        <p className="text-muted-foreground text-center mb-6">Select the problem you're facing and we'll guide you step by step.</p>

        {/* Region selector */}
        <div className="flex justify-center mb-8">
          <RegionSelector />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {currentTrees.map((issue) => (
            <Link
              key={issue.id}
              to={`/issue/${issue.id}`}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all group"
            >
              <span className="text-3xl">{issue.icon}</span>
              <h3 className="font-display font-bold text-lg text-foreground mt-4">{issue.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{issue.description}</p>
              <div className="flex items-center gap-1 text-accent text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Get help <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* How it works */}
        <section className="mt-20 text-center">
          <h2 className="font-display font-bold text-2xl text-foreground">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { step: "1", title: "Choose your issue", desc: "Select the problem you're facing from our guided categories." },
              { step: "2", title: "Answer a few questions", desc: "We'll ask simple questions to understand your exact situation." },
              { step: "3", title: "Get your action plan", desc: "Receive tailored steps, template letters, and legal references." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-bold flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mt-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="text-accent" size={22} />
            <h2 className="font-display font-bold text-2xl text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-16" />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-display font-bold text-foreground mb-3">RenterShield</h4>
              <p className="text-muted-foreground leading-relaxed">
                Free legal guidance for private renters in England, Wales, and Scotland. Know your rights, take action.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/rights" className="text-muted-foreground hover:text-foreground transition-colors">Know Your Rights</Link>
                <Link to="/emergency" className="text-muted-foreground hover:text-foreground transition-colors">Emergency Contacts</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-3">External Help</h4>
              <div className="flex flex-col gap-2">
                <a href={region === "scotland" ? "https://www.shelterscotland.org" : region === "wales" ? "https://www.sheltercymru.org.uk" : "https://www.shelter.org.uk"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  {region === "scotland" ? "Shelter Scotland" : region === "wales" ? "Shelter Cymru" : "Shelter"} <ExternalLink size={12} />
                </a>
                <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Citizens Advice <ExternalLink size={12} />
                </a>
                <a href="https://www.gov.uk/private-renting" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  GOV.UK Renting <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>RenterShield provides guidance based on tenancy law for England and Wales. This is not legal advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
