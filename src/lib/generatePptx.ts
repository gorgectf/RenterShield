import pptxgen from "pptxgenjs";

const DARK = "1B2A4A";
const SURFACE = "243356";
const ACCENT = "2BB5A0";
const ACCENT_WARM = "E08A2E";
const WHITE = "FFFFFF";
const MUTED = "8899B3";
const HIGHLIGHT = "66D9C5";

function addTag(slide: pptxgen.Slide, text: string, y: number, x = 0.8) {
  slide.addText(text, { x, y, w: 3, h: 0.4, fontSize: 11, fontFace: "Arial", color: ACCENT, bold: true });
}

function addTitle(slide: pptxgen.Slide, text: string, y: number, x = 0.8, w = 8) {
  slide.addText(text, { x, y, w, h: 1, fontSize: 32, fontFace: "Arial", color: WHITE, bold: true, lineSpacingMultiple: 1.1 });
}

function addBody(slide: pptxgen.Slide, text: string, y: number, x = 0.8, w = 7.5) {
  slide.addText(text, { x, y, w, h: 0.8, fontSize: 14, fontFace: "Arial", color: MUTED, lineSpacingMultiple: 1.4 });
}

function addBullet(slide: pptxgen.Slide, title: string, desc: string, y: number, x = 0.8, w = 7) {
  slide.addText([
    { text: `● ${title}  `, options: { bold: true, color: WHITE, fontSize: 14 } },
    { text: desc, options: { color: MUTED, fontSize: 13 } },
  ], { x, y, w, h: 0.5, fontFace: "Arial" });
}

export function downloadPitchDeck() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "RenterShield";
  pptx.title = "RenterShield — Pitch Deck";

  const darkBg = { fill: { color: DARK } } as const;

  // 01 — Title
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    s.addShape(pptx.ShapeType.roundRect, { x: 4.2, y: 1.2, w: 1.1, h: 1.1, fill: { color: ACCENT }, rectRadius: 0.15 });
    s.addText("🛡️", { x: 4.2, y: 1.25, w: 1.1, h: 1, fontSize: 40, align: "center" });
    s.addText("RenterShield", { x: 1.5, y: 2.6, w: 6.5, h: 0.9, fontSize: 44, fontFace: "Arial", color: WHITE, bold: true, align: "center" });
    s.addText("Know your rights. Take action. Protect your home.", { x: 1.5, y: 3.5, w: 6.5, h: 0.6, fontSize: 18, fontFace: "Arial", color: MUTED, align: "center" });
    s.addText("AI.Challenges Hackathon 2025", { x: 2.5, y: 4.4, w: 4.5, h: 0.4, fontSize: 12, fontFace: "Arial", color: ACCENT, align: "center" });
    s.addText("Built with Lovable", { x: 3, y: 5, w: 3.5, h: 0.3, fontSize: 11, fontFace: "Arial", color: MUTED, align: "center" });
  }

  // 02 — The Problem
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "THE PROBLEM", 0.5);
    addTitle(s, "Tenants are unaware of their legal rights", 1.0);
    const stats = [
      { v: "4.6M", l: "UK private renter households" },
      { v: "£700M+", l: "Lost in unfair deposit deductions yearly" },
      { v: "57%", l: "Don't know how to challenge landlords" },
    ];
    stats.forEach((st, i) => {
      const x = 0.8 + i * 3;
      s.addText(st.v, { x, y: 2.4, w: 2.5, h: 0.7, fontSize: 36, fontFace: "Arial", color: ACCENT, bold: true, align: "center" });
      s.addText(st.l, { x, y: 3.1, w: 2.5, h: 0.5, fontSize: 12, fontFace: "Arial", color: MUTED, align: "center" });
    });
    addBody(s, "Shelter reports that 1 in 3 renters have experienced at least one legal housing issue in the past year. Information exists but is buried across gov.uk, Citizens Advice, and Shelter in dense legal jargon.", 4.0, 0.8, 8);
  }

  // 03 — The Solution
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "THE SOLUTION", 0.5);
    addTitle(s, "An interactive rights navigator for renters", 1.0);
    addBody(s, "RenterShield guides tenants through their specific problem with a simple decision-tree flow, delivering personalised legal steps, template letters, and relevant legislation — all in plain English.", 2.0, 0.8, 8);
    addBullet(s, "Situation-specific guidance", "Answer a few questions, get tailored legal steps", 3.2);
    addBullet(s, "Template letters included", "Ready-to-send letters for deposit disputes, repairs & more", 3.8);
    addBullet(s, "No login required", "100% free, instant access, mobile-first", 4.4);
  }

  // 04 — Market Potential
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "MARKET POTENTIAL", 0.5);
    addTitle(s, "A large, underserved market", 1.0);
    const markets = [
      { label: "TAM", value: "£2.1B", desc: "UK legal services for housing disputes" },
      { label: "SAM", value: "£340M", desc: "Self-service legal tools for private renters" },
      { label: "SOM", value: "£8.5M", desc: "First-year target: 50K premium users at £14/mo" },
    ];
    markets.forEach((m, i) => {
      const x = 0.5 + i * 3.2;
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.3, w: 3, h: 2.5, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(m.label, { x: x + 0.3, y: 2.5, w: 2.4, h: 0.3, fontSize: 12, fontFace: "Arial", color: ACCENT, bold: true });
      s.addText(m.value, { x: x + 0.3, y: 2.9, w: 2.4, h: 0.7, fontSize: 36, fontFace: "Arial", color: WHITE, bold: true });
      s.addText(m.desc, { x: x + 0.3, y: 3.6, w: 2.4, h: 0.8, fontSize: 12, fontFace: "Arial", color: MUTED });
    });
    addBody(s, "Sources: UK Government English Housing Survey 2023, IBISWorld UK Legal Services Report, Shelter Annual Review", 5.2, 0.8, 9);
  }

  // 05 — UVP
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "UNIQUE VALUE PROPOSITION", 0.5);
    s.addText([
      { text: '"Unlike Citizens Advice, we give renters ', options: { color: WHITE } },
      { text: "instant, personalised action plans", options: { color: ACCENT, bold: true } },
      { text: ' — not generic articles."', options: { color: WHITE } },
    ], { x: 0.8, y: 1.2, w: 8, h: 1, fontSize: 24, fontFace: "Arial", lineSpacingMultiple: 1.2 });
    const points = [
      { title: "Personalised, not generic", desc: "Decision-tree logic tailors guidance to each user's exact situation and jurisdiction." },
      { title: "Action-oriented output", desc: "Template letters, deadline calculators, and step-by-step checklists — not just information." },
      { title: "Zero friction access", desc: "No login, no cost for core features. Mobile-first, loads in under 2 seconds." },
    ];
    points.forEach((p, i) => {
      const x = 0.5 + i * 3.2;
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.8, w: 3, h: 2.2, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(p.title, { x: x + 0.3, y: 3.0, w: 2.4, h: 0.5, fontSize: 16, fontFace: "Arial", color: WHITE, bold: true });
      s.addText(p.desc, { x: x + 0.3, y: 3.5, w: 2.4, h: 1.2, fontSize: 12, fontFace: "Arial", color: MUTED });
    });
  }

  // 06 — Business Model
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "BUSINESS MODEL", 0.5);
    addTitle(s, "Freemium SaaS", 1.0);
    addBody(s, "Core guidance is always free. Premium tier unlocks advanced tools for power users.", 1.9, 0.8, 7);
    addBullet(s, "Free tier", "Decision-tree guidance, basic template letters, rights information", 2.8);
    addBullet(s, "Premium — £14/month", "AI-powered letter drafting, deadline tracking, landlord communication log", 3.4);
    addBullet(s, "B2B — £499/mo per org", "White-label for housing associations, councils, and tenant unions", 4.0);
    s.addShape(pptx.ShapeType.roundRect, { x: 8.2, y: 1.5, w: 3.8, h: 4, fill: { color: ACCENT }, rectRadius: 0.15 });
    s.addText("£14", { x: 8.2, y: 2.2, w: 3.8, h: 0.8, fontSize: 48, fontFace: "Arial", color: DARK, bold: true, align: "center" });
    s.addText("per user / month", { x: 8.2, y: 3.0, w: 3.8, h: 0.4, fontSize: 16, fontFace: "Arial", color: DARK, align: "center" });
    s.addText("Target: 5% free-to-paid\nconversion rate", { x: 8.2, y: 3.8, w: 3.8, h: 0.8, fontSize: 13, fontFace: "Arial", color: DARK, align: "center" });
  }

  // 07 — Go-to-Market
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "GO-TO-MARKET STRATEGY", 0.5);
    addTitle(s, "Three channels to early adopters", 1.0);
    const channels = [
      { num: "01", title: "Reddit & Forums", desc: "r/LegalAdviceUK, r/HousingUK, MoneySavingExpert forums. Answer real questions with links to the tool." },
      { num: "02", title: "Partner with Shelter & CAB", desc: "Offer as a free self-service supplement. They handle volume; we handle personalisation." },
      { num: "03", title: "SEO & Content", desc: "Long-tail content: 'landlord won't return deposit UK'. High-intent searches with clear conversion." },
    ];
    channels.forEach((ch, i) => {
      const x = 0.5 + i * 3.2;
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.3, w: 3, h: 3, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(ch.num, { x: x + 0.3, y: 2.5, w: 1, h: 0.3, fontSize: 12, fontFace: "Arial", color: ACCENT, bold: true });
      s.addText(ch.title, { x: x + 0.3, y: 2.9, w: 2.4, h: 0.5, fontSize: 16, fontFace: "Arial", color: WHITE, bold: true });
      s.addText(ch.desc, { x: x + 0.3, y: 3.5, w: 2.4, h: 1.5, fontSize: 12, fontFace: "Arial", color: MUTED });
    });
  }

  // 08 — MVP Plan
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "MVP PLAN", 0.5);
    addTitle(s, "What we built in 24 hours", 1.0);
    const cols = [
      { title: "Built ✓", color: ACCENT, items: ["Interactive decision-tree for 3 core issues", "Template letter generator", "Mobile-responsive, no-login design", "Pitch deck as a web app"] },
      { title: "Riskiest Assumptions", color: ACCENT_WARM, items: ["Renters will self-serve rather than call helplines", "Template letters are 'good enough' without solicitor review", "Free users convert to premium at 5%+"] },
      { title: "Early Signals", color: HIGHLIGHT, items: ["Tested with 3 renters — all completed flow in <2 min", "2/3 said they'd share with friends", "'This is what I needed last year' — tester feedback"] },
    ];
    cols.forEach((col, i) => {
      const x = 0.3 + i * 3.4;
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.2, w: 3.2, h: 3.5, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(col.title, { x: x + 0.3, y: 2.4, w: 2.6, h: 0.4, fontSize: 15, fontFace: "Arial", color: col.color, bold: true });
      col.items.forEach((item, j) => {
        s.addText(`● ${item}`, { x: x + 0.3, y: 3.0 + j * 0.55, w: 2.6, h: 0.5, fontSize: 11, fontFace: "Arial", color: MUTED });
      });
    });
  }

  // 09 — Team
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "TEAM", 0.5);
    addTitle(s, "The team behind RenterShield", 1.0);
    s.addShape(pptx.ShapeType.roundRect, { x: 3, y: 2.2, w: 4.5, h: 2.5, fill: { color: SURFACE }, rectRadius: 0.15 });
    s.addText("[Your Name]", { x: 3, y: 2.5, w: 4.5, h: 0.5, fontSize: 22, fontFace: "Arial", color: WHITE, bold: true, align: "center" });
    s.addText("Solo Founder", { x: 3, y: 3.0, w: 4.5, h: 0.3, fontSize: 14, fontFace: "Arial", color: MUTED, align: "center" });
    s.addText("Background in [your background]. Experienced renter who has personally faced deposit disputes and repair issues. Passionate about accessible legal tech.", { x: 3.3, y: 3.5, w: 3.9, h: 1, fontSize: 12, fontFace: "Arial", color: MUTED, align: "center" });
    s.addText('"I built RenterShield because I\'ve been the tenant who didn\'t know their rights. Nobody should lose money because the law is hard to read."', { x: 1.5, y: 5, w: 7, h: 0.6, fontSize: 14, fontFace: "Arial", color: MUTED, align: "center", italic: true });
  }

  // 10 — Budget
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "BUDGET BREAKDOWN", 0.5);
    addTitle(s, "£50K seed — 12 month runway", 1.0);
    const items = [
      { cat: "Product & Engineering", amount: "£20,000", pct: "40%", desc: "Full-time development, legal content review, UX improvements" },
      { cat: "Legal & Compliance", amount: "£10,000", pct: "20%", desc: "Solicitor review of template letters, regulatory compliance" },
      { cat: "Marketing & Acquisition", amount: "£12,000", pct: "24%", desc: "SEO, content, community partnerships, Reddit/forum presence" },
      { cat: "Operations & Hosting", amount: "£8,000", pct: "16%", desc: "Infrastructure, customer support tooling, analytics" },
    ];
    items.forEach((row, i) => {
      const col = i % 2;
      const rowIdx = Math.floor(i / 2);
      const x = 0.5 + col * 5;
      const y = 2.3 + rowIdx * 1.7;
      s.addShape(pptx.ShapeType.roundRect, { x, y, w: 4.7, h: 1.4, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(row.pct, { x: x + 0.2, y: y + 0.15, w: 1, h: 0.5, fontSize: 24, fontFace: "Arial", color: ACCENT, bold: true });
      s.addText(row.cat, { x: x + 1.3, y: y + 0.1, w: 3, h: 0.35, fontSize: 14, fontFace: "Arial", color: WHITE, bold: true });
      s.addText(row.amount, { x: x + 1.3, y: y + 0.45, w: 3, h: 0.3, fontSize: 13, fontFace: "Arial", color: ACCENT });
      s.addText(row.desc, { x: x + 1.3, y: y + 0.8, w: 3, h: 0.4, fontSize: 11, fontFace: "Arial", color: MUTED });
    });
  }

  // 11 — Impact & Scalability
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "IMPACT & SCALABILITY", 0.5);
    addTitle(s, "What happens at scale", 1.0);
    addBullet(s, "Expand to Scotland, Wales, NI", "Tenant law varies by jurisdiction — we modularise by region, then go international", 2.2);
    addBullet(s, "Network effects", "Every shared template letter brings new users. Community-reported outcomes improve guidance for everyone.", 2.8);
    addBullet(s, "Platform play", "Become the Duolingo of tenant rights — gamified learning, community support, verified landlord ratings", 3.4);
    s.addShape(pptx.ShapeType.roundRect, { x: 7.5, y: 2, w: 4.2, h: 3.5, fill: { color: SURFACE }, rectRadius: 0.15 });
    s.addText("10M+", { x: 7.5, y: 2.2, w: 4.2, h: 0.6, fontSize: 36, fontFace: "Arial", color: ACCENT, bold: true, align: "center" });
    s.addText("UK renters who could benefit", { x: 7.5, y: 2.8, w: 4.2, h: 0.3, fontSize: 12, fontFace: "Arial", color: MUTED, align: "center" });
    s.addText("£700M", { x: 7.5, y: 3.3, w: 4.2, h: 0.5, fontSize: 28, fontFace: "Arial", color: HIGHLIGHT, bold: true, align: "center" });
    s.addText("Unfair deposit deductions prevented annually", { x: 7.5, y: 3.8, w: 4.2, h: 0.3, fontSize: 12, fontFace: "Arial", color: MUTED, align: "center" });
    s.addText("3X", { x: 7.5, y: 4.3, w: 4.2, h: 0.5, fontSize: 28, fontFace: "Arial", color: ACCENT_WARM, bold: true, align: "center" });
    s.addText("More likely to win disputes with proper guidance", { x: 7.5, y: 4.8, w: 4.2, h: 0.3, fontSize: 12, fontFace: "Arial", color: MUTED, align: "center" });
  }

  // 12 — Next Steps
  {
    const s = pptx.addSlide();
    s.background = { fill: DARK };
    addTag(s, "NEXT STEPS", 0.5);
    addTitle(s, "The next 30 days", 1.0);
    const steps = [
      { num: "01", title: "Launch on Reddit & forums", desc: "Post to r/LegalAdviceUK, r/HousingUK, MoneySavingExpert. Target: 500 users in week 1." },
      { num: "02", title: "Expand to 10 issue types", desc: "Add mould, harassment, rent increases, Section 21 notices, and more." },
      { num: "03", title: "Partner with Shelter", desc: "Pitch as a free self-service tool to reduce their helpline volume. Begin pilot conversation." },
    ];
    steps.forEach((st, i) => {
      const x = 0.5 + i * 3.2;
      s.addShape(pptx.ShapeType.roundRect, { x, y: 2.3, w: 3, h: 3, fill: { color: SURFACE }, rectRadius: 0.15 });
      s.addText(st.num, { x: x + 0.3, y: 2.5, w: 1, h: 0.6, fontSize: 36, fontFace: "Arial", color: ACCENT, bold: true });
      s.addText(st.title, { x: x + 0.3, y: 3.2, w: 2.4, h: 0.5, fontSize: 16, fontFace: "Arial", color: WHITE, bold: true });
      s.addText(st.desc, { x: x + 0.3, y: 3.8, w: 2.4, h: 1.2, fontSize: 12, fontFace: "Arial", color: MUTED });
    });
    s.addText("Let's talk", { x: 2, y: 5.5, w: 6, h: 0.4, fontSize: 18, fontFace: "Arial", color: WHITE, bold: true, align: "center" });
    s.addText("[your@email.com] · [twitter/linkedin]", { x: 2, y: 5.9, w: 6, h: 0.3, fontSize: 13, fontFace: "Arial", color: MUTED, align: "center" });
  }

  pptx.writeFile({ fileName: "RenterShield-PitchDeck.pptx" });
}
