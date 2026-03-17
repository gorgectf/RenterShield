import SlideLayout from "./SlideLayout";
import { Shield, Users, Target, Lightbulb, TrendingUp, DollarSign, Megaphone, Rocket, UserCircle, Wallet, Globe, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="font-display font-bold slide-hero text-slide-accent">{value}</span>
    <span className="slide-body text-slide-muted mt-2">{label}</span>
  </div>
);

const Bullet = ({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) => (
  <div className="flex gap-6 items-start">
    <div className="w-16 h-16 rounded-2xl bg-slide-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <div className="font-display font-semibold slide-subtitle">{title}</div>
      <div className="slide-body text-slide-muted mt-1">{desc}</div>
    </div>
  </div>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="inline-block px-6 py-2 rounded-full bg-slide-accent/15 text-slide-accent slide-small font-semibold">
    {children}
  </span>
);

export const slides = [
  // 01 — Title
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center items-center h-full px-40 text-center">
        <div className="w-28 h-28 rounded-3xl bg-slide-accent flex items-center justify-center mb-12">
          <Shield size={64} className="text-slide-bg" />
        </div>
        <h1 className="font-display font-bold slide-hero tracking-tight">RenterShield</h1>
        <p className="slide-subtitle text-slide-muted mt-8 max-w-[1000px]">
          Know your rights. Take action. Protect your home.
        </p>
        <div className="mt-16 flex gap-4">
          <Tag>AI.Challenges Hackathon 2025</Tag>
        </div>
        <p className="slide-small text-slide-muted mt-10">Built with Lovable</p>
      </div>
    </SlideLayout>
  ),

  // 02 — The Problem
  () => (
    <SlideLayout>
      <div className="flex h-full">
        <div className="w-[1100px] flex flex-col justify-center px-28">
          <Tag>The Problem</Tag>
          <h2 className="font-display font-bold slide-title mt-8">
            Tenants are unaware of<br />their legal rights
          </h2>
          <div className="flex gap-20 mt-16">
            <Stat value="4.6M" label="UK private renter households" />
            <Stat value="£700M+" label="Lost in unfair deposit deductions yearly" />
            <Stat value="57%" label="Don't know how to challenge landlords" />
          </div>
          <p className="slide-body text-slide-muted mt-14 max-w-[900px]">
            Shelter reports that 1 in 3 renters have experienced at least one legal housing issue in the past year. Information exists but is buried across gov.uk, Citizens Advice, and Shelter in dense legal jargon.
          </p>
        </div>
        <div className="flex-1 bg-slide-surface flex items-center justify-center">
          <Users size={200} className="text-slide-accent/30" />
        </div>
      </div>
    </SlideLayout>
  ),

  // 03 — The Solution
  () => (
    <SlideLayout>
      <div className="flex h-full">
        <div className="w-[960px] flex flex-col justify-center px-28">
          <Tag>The Solution</Tag>
          <h2 className="font-display font-bold slide-title mt-8">
            An interactive rights<br />navigator for renters
          </h2>
          <p className="slide-body text-slide-muted mt-8 max-w-[800px]">
            RenterShield guides tenants through their specific problem with a simple decision-tree flow, delivering personalised legal steps, template letters, and relevant legislation — all in plain English.
          </p>
          <div className="flex flex-col gap-8 mt-14">
            <Bullet icon={<Target size={28} className="text-slide-accent" />} title="Situation-specific guidance" desc="Answer a few questions, get tailored legal steps" />
            <Bullet icon={<Lightbulb size={28} className="text-slide-accent" />} title="Template letters included" desc="Ready-to-send letters for deposit disputes, repairs & more" />
            <Bullet icon={<Shield size={28} className="text-slide-accent" />} title="No login required" desc="100% free, instant access, mobile-first" />
          </div>
        </div>
        <div className="flex-1 bg-slide-surface flex items-center justify-center px-12">
          <div className="bg-slide-bg rounded-3xl p-10 w-full max-w-[600px]">
            <div className="text-slide-accent slide-small font-semibold mb-4">▶ Live Demo</div>
            <div className="slide-body text-slide-text">rentershield.lovable.app</div>
            <div className="mt-6 flex flex-col gap-3">
              {["Deposit not returned", "Landlord won't fix repairs", "Unfair eviction notice"].map((t) => (
                <div key={t} className="bg-slide-surface rounded-xl px-6 py-4 slide-small flex justify-between items-center">
                  {t} <ArrowRight size={18} className="text-slide-accent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  ),

  // 04 — Market Potential
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>Market Potential</Tag>
        <h2 className="font-display font-bold slide-title mt-8">A large, underserved market</h2>
        <div className="flex gap-16 mt-16">
          {[
            { label: "TAM", value: "£2.1B", desc: "UK legal services for housing disputes" },
            { label: "SAM", value: "£340M", desc: "Self-service legal tools for private renters" },
            { label: "SOM", value: "£8.5M", desc: "First-year target: 50K premium users at £14/mo" },
          ].map((m) => (
            <div key={m.label} className="flex-1 bg-slide-surface rounded-3xl p-12">
              <div className="slide-small text-slide-accent font-semibold">{m.label}</div>
              <div className="font-display font-bold slide-hero mt-4">{m.value}</div>
              <div className="slide-body text-slide-muted mt-4">{m.desc}</div>
            </div>
          ))}
        </div>
        <p className="slide-body text-slide-muted mt-12">Sources: UK Government English Housing Survey 2023, IBISWorld UK Legal Services Report, Shelter Annual Review</p>
      </div>
    </SlideLayout>
  ),

  // 05 — UVP
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>Unique Value Proposition</Tag>
        <h2 className="font-display font-bold slide-title mt-8 max-w-[1400px]">
          "Unlike Citizens Advice, we give renters<br />
          <span className="text-slide-accent">instant, personalised action plans</span> — not generic articles."
        </h2>
        <div className="grid grid-cols-3 gap-10 mt-20">
          {[
            { icon: <Target size={36} className="text-slide-accent" />, title: "Personalised, not generic", desc: "Decision-tree logic tailors guidance to each user's exact situation and jurisdiction." },
            { icon: <Lightbulb size={36} className="text-slide-accent" />, title: "Action-oriented output", desc: "Template letters, deadline calculators, and step-by-step checklists — not just information." },
            { icon: <Shield size={36} className="text-slide-accent" />, title: "Zero friction access", desc: "No login, no cost for core features. Mobile-first, loads in under 2 seconds." },
          ].map((item) => (
            <div key={item.title} className="bg-slide-surface rounded-3xl p-10">
              {item.icon}
              <div className="font-display font-semibold slide-subtitle mt-6">{item.title}</div>
              <div className="slide-body text-slide-muted mt-3">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  ),

  // 06 — Business Model
  () => (
    <SlideLayout>
      <div className="flex h-full">
        <div className="w-[960px] flex flex-col justify-center px-28">
          <Tag>Business Model</Tag>
          <h2 className="font-display font-bold slide-title mt-8">Freemium SaaS</h2>
          <p className="slide-body text-slide-muted mt-6 max-w-[800px]">
            Core guidance is always free. Premium tier unlocks advanced tools for power users.
          </p>
          <div className="flex flex-col gap-8 mt-14">
            <Bullet icon={<DollarSign size={28} className="text-slide-accent" />} title="Free tier" desc="Decision-tree guidance, basic template letters, rights information" />
            <Bullet icon={<TrendingUp size={28} className="text-slide-accent" />} title="Premium — £14/month" desc="AI-powered letter drafting, deadline tracking, landlord communication log, priority support" />
            <Bullet icon={<Users size={28} className="text-slide-accent" />} title="B2B — £499/mo per org" desc="White-label for housing associations, councils, and tenant unions" />
          </div>
        </div>
        <div className="flex-1 bg-slide-accent flex flex-col items-center justify-center px-16 text-slide-bg">
          <DollarSign size={80} />
          <div className="font-display font-bold slide-title mt-8">£14</div>
          <div className="slide-subtitle mt-2">per user / month</div>
          <div className="slide-body mt-8 text-center opacity-80">
            Target: 5% free-to-paid<br />conversion rate
          </div>
        </div>
      </div>
    </SlideLayout>
  ),

  // 07 — Go-to-Market
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>Go-to-Market Strategy</Tag>
        <h2 className="font-display font-bold slide-title mt-8">Three channels to early adopters</h2>
        <div className="grid grid-cols-3 gap-10 mt-16">
          {[
            { icon: <Megaphone size={40} className="text-slide-accent" />, title: "Reddit & Forums", desc: "r/LegalAdviceUK, r/HousingUK, MoneySavingExpert forums. Answer real questions with links to the tool. Organic, trust-based acquisition.", num: "01" },
            { icon: <Users size={40} className="text-slide-accent" />, title: "Partner with Shelter & CAB", desc: "Offer as a free self-service supplement. They handle volume; we handle personalisation. Co-marketing with trusted brands.", num: "02" },
            { icon: <TrendingUp size={40} className="text-slide-accent" />, title: "SEO & Content", desc: "Long-tail content: 'landlord won't return deposit UK'. High-intent searches with clear conversion path to the tool.", num: "03" },
          ].map((ch) => (
            <div key={ch.num} className="bg-slide-surface rounded-3xl p-10 flex flex-col">
              <div className="slide-small text-slide-accent font-bold">{ch.num}</div>
              <div className="mt-4">{ch.icon}</div>
              <div className="font-display font-semibold slide-subtitle mt-6">{ch.title}</div>
              <div className="slide-body text-slide-muted mt-3">{ch.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  ),

  // 08 — MVP Plan
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>MVP Plan</Tag>
        <h2 className="font-display font-bold slide-title mt-8">What we built in 24 hours</h2>
        <div className="flex gap-12 mt-16">
          <div className="flex-1 bg-slide-surface rounded-3xl p-10">
            <div className="text-slide-accent font-display font-bold slide-subtitle">Built ✓</div>
            <ul className="mt-6 flex flex-col gap-4">
              {["Interactive decision-tree for 3 core issues", "Template letter generator", "Mobile-responsive, no-login design", "This pitch deck as a web app"].map((item) => (
                <li key={item} className="slide-body flex items-start gap-3">
                  <span className="text-slide-accent mt-1">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slide-surface rounded-3xl p-10">
            <div className="text-slide-accent-warm font-display font-bold slide-subtitle">Riskiest Assumptions</div>
            <ul className="mt-6 flex flex-col gap-4">
              {["Renters will self-serve rather than call helplines", "Template letters are 'good enough' without solicitor review", "Free users convert to premium at 5%+"].map((item) => (
                <li key={item} className="slide-body flex items-start gap-3">
                  <span className="text-slide-accent-warm mt-1">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-slide-surface rounded-3xl p-10">
            <div className="text-slide-highlight font-display font-bold slide-subtitle">Early Signals</div>
            <ul className="mt-6 flex flex-col gap-4">
              {["Tested with 3 renters — all completed flow in <2 min", "2/3 said they'd share with friends", "'This is what I needed last year' — tester feedback"].map((item) => (
                <li key={item} className="slide-body flex items-start gap-3">
                  <span className="text-slide-highlight mt-1">●</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  ),

  // 09 — Team
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center items-center h-full px-28 text-center">
        <Tag>Team</Tag>
        <h2 className="font-display font-bold slide-title mt-8">The team behind RenterShield</h2>
        <div className="flex gap-16 mt-20">
          <div className="bg-slide-surface rounded-3xl p-12 w-[500px]">
            <div className="w-32 h-32 rounded-full bg-slide-accent/20 mx-auto flex items-center justify-center">
              <UserCircle size={80} className="text-slide-accent" />
            </div>
            <div className="font-display font-bold slide-subtitle mt-8">[Your Name]</div>
            <div className="slide-body text-slide-muted mt-2">Solo Founder</div>
            <div className="slide-body text-slide-muted mt-6">
              Background in [your background]. Experienced renter who has personally faced deposit disputes and repair issues. Passionate about accessible legal tech.
            </div>
          </div>
        </div>
        <p className="slide-body text-slide-muted mt-14 max-w-[900px]">
          "I built RenterShield because I've been the tenant who didn't know their rights. Nobody should lose money because the law is hard to read."
        </p>
      </div>
    </SlideLayout>
  ),

  // 10 — Budget
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>Budget Breakdown</Tag>
        <h2 className="font-display font-bold slide-title mt-8">£50K seed — 12 month runway</h2>
        <div className="grid grid-cols-2 gap-10 mt-16">
          {[
            { cat: "Product & Engineering", amount: "£20,000", pct: "40%", desc: "Full-time development, legal content review, UX improvements" },
            { cat: "Legal & Compliance", amount: "£10,000", pct: "20%", desc: "Solicitor review of template letters, regulatory compliance" },
            { cat: "Marketing & Acquisition", amount: "£12,000", pct: "24%", desc: "SEO, content, community partnerships, Reddit/forum presence" },
            { cat: "Operations & Hosting", amount: "£8,000", pct: "16%", desc: "Infrastructure, customer support tooling, analytics" },
          ].map((row) => (
            <div key={row.cat} className="bg-slide-surface rounded-3xl p-10 flex gap-8 items-start">
              <div className="font-display font-bold slide-title text-slide-accent">{row.pct}</div>
              <div>
                <div className="font-display font-semibold slide-subtitle">{row.cat}</div>
                <div className="font-display font-bold slide-subtitle text-slide-accent mt-1">{row.amount}</div>
                <div className="slide-body text-slide-muted mt-2">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  ),

  // 11 — Impact & Scalability
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-28">
        <Tag>Impact & Scalability</Tag>
        <h2 className="font-display font-bold slide-title mt-8">What happens at scale</h2>
        <div className="flex gap-12 mt-16">
          <div className="flex-1">
            <div className="flex flex-col gap-10">
              <Bullet icon={<Globe size={28} className="text-slide-accent" />} title="Expand to Scotland, Wales, NI" desc="Tenant law varies by jurisdiction — we modularise by region, then go international" />
              <Bullet icon={<TrendingUp size={28} className="text-slide-accent" />} title="Network effects" desc="Every shared template letter brings new users. Community-reported outcomes improve guidance for everyone." />
              <Bullet icon={<Rocket size={28} className="text-slide-accent" />} title="Platform play" desc="Become the Duolingo of tenant rights — gamified learning, community support, verified landlord ratings" />
            </div>
          </div>
          <div className="flex-1 bg-slide-surface rounded-3xl p-12 flex flex-col justify-center">
            <div className="font-display font-bold slide-hero text-slide-accent">10M+</div>
            <div className="slide-subtitle text-slide-muted mt-2">UK renters who could benefit</div>
            <div className="mt-10 font-display font-bold slide-title text-slide-highlight">£700M</div>
            <div className="slide-subtitle text-slide-muted mt-2">Unfair deposit deductions prevented annually</div>
            <div className="mt-10 font-display font-bold slide-title text-slide-accent-warm">3X</div>
            <div className="slide-subtitle text-slide-muted mt-2">More likely to win disputes with proper guidance</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  ),

  // 12 — Next Steps
  () => (
    <SlideLayout>
      <div className="flex flex-col justify-center items-center h-full px-28 text-center">
        <Tag>Next Steps</Tag>
        <h2 className="font-display font-bold slide-title mt-8">The next 30 days</h2>
        <div className="flex gap-10 mt-16">
          {[
            { num: "01", title: "Launch on Reddit & forums", desc: "Post to r/LegalAdviceUK, r/HousingUK, MoneySavingExpert. Target: 500 users in week 1." },
            { num: "02", title: "Expand to 10 issue types", desc: "Add mould, harassment, rent increases, Section 21 notices, and more." },
            { num: "03", title: "Partner with Shelter", desc: "Pitch as a free self-service tool to reduce their helpline volume. Begin pilot conversation." },
          ].map((step) => (
            <div key={step.num} className="flex-1 bg-slide-surface rounded-3xl p-10 text-left">
              <div className="font-display font-bold slide-hero text-slide-accent">{step.num}</div>
              <div className="font-display font-semibold slide-subtitle mt-6">{step.title}</div>
              <div className="slide-body text-slide-muted mt-3">{step.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="font-display font-bold slide-subtitle">Let's talk</div>
          <div className="slide-body text-slide-muted mt-3">[your@email.com] · [twitter/linkedin]</div>
        </div>
      </div>
    </SlideLayout>
  ),
];
