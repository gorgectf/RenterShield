import { Link } from "react-router-dom";
import { ArrowLeft, Scale, BookOpen, Shield, Home, Banknote, Wrench, Users } from "lucide-react";

const rights = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Right to a Safe Home",
    summary: "Your landlord must keep the property safe, warm, and free from serious hazards. This includes the structure, exterior, heating, water, gas, and electrics.",
    law: "Landlord and Tenant Act 1985, Section 11; Homes (Fitness for Human Habitation) Act 2018",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protection from Illegal Eviction",
    summary: "Your landlord cannot evict you without a court order. Changing locks, removing belongings, or cutting off utilities to force you out is a criminal offence.",
    law: "Protection from Eviction Act 1977",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Deposit Protection",
    summary: "Your deposit must be placed in a government-approved scheme within 30 days. If not, you can claim 1-3x compensation and the landlord cannot serve a Section 21 notice.",
    law: "Housing Act 2004, Sections 212-215",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Fair Rent Increases",
    summary: "Rent can only be increased at the end of a fixed term, or via a Section 13 notice on a periodic tenancy. You can challenge excessive increases at the First-tier Tribunal.",
    law: "Housing Act 1988, Section 13",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Right to Information",
    summary: "Your landlord must provide: the 'How to Rent' guide, an Energy Performance Certificate, a Gas Safety Certificate, and deposit protection details.",
    law: "Deregulation Act 2015; Gas Safety Regulations 1998; Energy Performance of Buildings Regulations 2012",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Quiet Enjoyment",
    summary: "You have the right to live in your home without interference. Your landlord must give at least 24 hours' notice before visiting and can only enter with your consent (except emergencies).",
    law: "Common law covenant of quiet enjoyment",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Right to Repairs",
    summary: "Your landlord must carry out repairs to the structure, exterior, and installations within a reasonable time. You can escalate to the council's Environmental Health team if they refuse.",
    law: "Landlord and Tenant Act 1985, Section 11; Housing Act 2004",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protection from Retaliatory Eviction",
    summary: "If you make a legitimate complaint about the property's condition, your landlord cannot serve a Section 21 notice in retaliation (for 6 months after a council improvement notice).",
    law: "Deregulation Act 2015, Section 33",
  },
];

export default function RightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-display font-bold text-foreground text-lg">Know Your Rights</h1>
            <p className="text-muted-foreground text-sm">Key legal rights every private renter in England should know</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
          <p className="text-foreground leading-relaxed">
            As a private renter in England, you have significant legal protections. Understanding these rights is the first step to defending them. Below is a summary of your key rights — select any issue on the <Link to="/" className="text-accent font-semibold underline">homepage</Link> for step-by-step guidance.
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
          <p>RenterShield provides guidance based on English tenancy law. This is not legal advice.</p>
        </div>
      </footer>
    </div>
  );
}
