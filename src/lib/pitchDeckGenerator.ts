import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import PptxGenJS from "pptxgenjs";

const palette = {
  background: "0B132B",
  surface: "131C3A",
  surfaceAlt: "1C2541",
  accent: "18B8A5",
  accentSoft: "D8F3EF",
  text: "F8FAFC",
  muted: "C9D1E0",
  warm: "F59E0B",
  alert: "F97316",
  line: "314167",
};

const deckTitle = "RenterShield Pitch Deck (Revised)";
export const DEFAULT_PITCH_DECK_OUTPUT = "public/RenterShield_PitchDeck_Revised.pptx";

function addSlideChrome(slide: any, slideNumber: number) {
  slide.background = { color: palette.background };
  slide.addText("", {
    x: 0,
    y: 0,
    w: 13.333,
    h: 0.12,
    fill: { color: palette.accent },
    line: { color: palette.accent },
  });
  slide.addText(String(slideNumber).padStart(2, "0"), {
    x: 12.45,
    y: 7.04,
    w: 0.45,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 11,
    color: palette.muted,
    align: "right",
  });
}

function addHeadline(slide: any, kicker: string, title: string, subtitle?: string) {
  slide.addText(kicker.toUpperCase(), {
    x: 0.72,
    y: 0.45,
    w: 5.6,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 12,
    bold: true,
    color: palette.accent,
    charSpace: 1.4,
  });

  slide.addText(title, {
    x: 0.72,
    y: 0.82,
    w: 8.9,
    h: 0.95,
    fontFace: "Aptos Display",
    fontSize: 24,
    bold: true,
    color: palette.text,
    breakLine: false,
    fit: "shrink",
    margin: 0,
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.72,
      y: 1.8,
      w: 10.9,
      h: 0.45,
      fontFace: "Aptos",
      fontSize: 12,
      color: palette.muted,
      margin: 0,
      breakLine: false,
      fit: "shrink",
    });
  }
}

function addPanel(slide: any, x: number, y: number, w: number, h: number, title: string, body: string, options?: { titleColor?: string; bodyColor?: string; fill?: string }) {
  slide.addText("", {
    x,
    y,
    w,
    h,
    fill: { color: options?.fill ?? palette.surface },
    line: { color: palette.line, pt: 1 },
    radius: 0.18,
  });

  slide.addText(title, {
    x: x + 0.22,
    y: y + 0.18,
    w: w - 0.44,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 13,
    bold: true,
    color: options?.titleColor ?? palette.text,
    margin: 0,
    fit: "shrink",
  });

  slide.addText(body, {
    x: x + 0.22,
    y: y + 0.55,
    w: w - 0.44,
    h: h - 0.72,
    fontFace: "Aptos",
    fontSize: 11,
    color: options?.bodyColor ?? palette.muted,
    valign: "top",
    margin: 0,
    breakLine: false,
    fit: "shrink",
  });
}

function addMetric(slide: any, x: number, value: string, label: string) {
  slide.addText("", {
    x,
    y: 2.3,
    w: 3.7,
    h: 1.15,
    fill: { color: palette.surfaceAlt },
    line: { color: palette.line, pt: 1 },
    radius: 0.18,
  });
  slide.addText(value, {
    x: x + 0.22,
    y: 2.52,
    w: 3.2,
    h: 0.34,
    fontFace: "Aptos Display",
    fontSize: 24,
    bold: true,
    color: palette.text,
    margin: 0,
  });
  slide.addText(label, {
    x: x + 0.22,
    y: 2.95,
    w: 3.2,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 11,
    color: palette.muted,
    margin: 0,
    fit: "shrink",
  });
}

function addBullets(slide: any, bullets: string[], x: number, y: number, w: number, h: number) {
  const text = bullets.map((bullet) => `• ${bullet}`).join("\n");
  slide.addText(text, {
    x,
    y,
    w,
    h,
    fontFace: "Aptos",
    fontSize: 12,
    color: palette.text,
    breakLine: false,
    fit: "shrink",
    margin: 0,
    valign: "top",
  });
}

export async function generateRenterShieldPitchDeck(outputPath = DEFAULT_PITCH_DECK_OUTPUT) {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Lovable";
  pptx.company = "RenterShield";
  pptx.subject = deckTitle;
  pptx.title = deckTitle;
  pptx.theme = {
    headFontFace: "Aptos Display",
    bodyFontFace: "Aptos",
  };

  let slide = pptx.addSlide();
  addSlideChrome(slide, 1);
  slide.addText("RenterShield", {
    x: 0.72,
    y: 1.08,
    w: 6.5,
    h: 0.85,
    fontFace: "Aptos Display",
    fontSize: 28,
    bold: true,
    color: palette.text,
    margin: 0,
  });
  slide.addText("Know your rights. Take action. Protect your home.", {
    x: 0.72,
    y: 2.02,
    w: 6.7,
    h: 0.4,
    fontFace: "Aptos",
    fontSize: 16,
    color: palette.muted,
    margin: 0,
  });
  addPanel(
    slide,
    0.72,
    3.05,
    6.2,
    2.1,
    "What this deck now does better",
    "Sharpens the problem, de-risks bold claims, shows what the prototype already proves, and frames RenterShield as a credible early-stage venture rather than just a useful project.",
    { fill: palette.surfaceAlt }
  );
  addPanel(
    slide,
    7.35,
    1.08,
    5.2,
    4.07,
    "Hackathon framing",
    "Built in Lovable as a public, no-login prototype.\n\nCurrent prototype strengths:\n• Interactive decision trees\n• Region-aware rights guidance\n• Emergency support links\n• Template letters and action steps",
    { fill: palette.surface }
  );
  slide.addText("AI.Challenges Hackathon 2025", {
    x: 0.72,
    y: 6.15,
    w: 4.6,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: palette.accent,
    margin: 0,
  });

  slide = pptx.addSlide();
  addSlideChrome(slide, 2);
  addHeadline(slide, "The Problem", "Renters hit legal problems fast — but the path to action is fragmented and intimidating.");
  addMetric(slide, 0.72, "4.6M", "UK private renter households");
  addMetric(slide, 4.18, "£700M+", "Estimated value tied up in unfair deposit disputes");
  addMetric(slide, 7.64, "57%", "Renters who do not know how to challenge a landlord issue");
  addPanel(
    slide,
    0.72,
    3.88,
    7.7,
    2.35,
    "Why this matters now",
    "People can usually find information somewhere — GOV.UK, Shelter, Citizens Advice, forums — but not in a form that quickly tells them what to do next in their exact situation. When the issue is urgent, legal jargon and fragmented guidance create delay, confusion, and avoidable losses.",
  );
  addPanel(
    slide,
    8.72,
    3.88,
    3.86,
    2.35,
    "Judge-friendly takeaway",
    "The problem is specific, painful, and time-sensitive: renters need clear next actions, not another article to read.",
    { titleColor: palette.accentSoft }
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 3);
  addHeadline(slide, "The Solution", "An interactive rights navigator that turns tenant confusion into a step-by-step action plan.");
  addPanel(slide, 0.72, 2.15, 3.8, 1.45, "1. Choose the issue", "Select the problem you are facing — deposit dispute, repairs, eviction, rent increase, and more.");
  addPanel(slide, 4.76, 2.15, 3.8, 1.45, "2. Answer simple questions", "Decision-tree logic narrows the situation using plain-English prompts instead of legal jargon.");
  addPanel(slide, 8.8, 2.15, 3.8, 1.45, "3. Get a usable next step", "Receive tailored actions, template letters, and relevant legal references without creating an account.");
  addBullets(
    slide,
    [
      "Public, no-login, mobile-friendly prototype already live",
      "Guidance is specific to issue type and UK jurisdiction",
      "Designed to get a renter from uncertainty to action in under two minutes",
    ],
    0.72,
    4.12,
    6.1,
    1.5,
  );
  addPanel(
    slide,
    7.2,
    4.05,
    5.38,
    1.75,
    "What makes it better than status quo",
    "RenterShield replaces generic reading with guided action. The product does not try to be a law library; it tries to be the clearest first step a renter can take.",
    { fill: palette.surfaceAlt }
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 4);
  addHeadline(slide, "Market Opportunity", "Big category, but the first wedge is a specific renter segment with a clearer path to revenue.");
  addPanel(slide, 0.72, 2.12, 3.9, 1.7, "TAM", "£2.1B\nUK housing-related legal support and adjacent consumer legal services.");
  addPanel(slide, 4.72, 2.12, 3.9, 1.7, "SAM", "£340M\nDigitally delivered guidance and workflow support for private renters facing deposit, repairs, eviction, or rent disputes.");
  addPanel(slide, 8.72, 2.12, 3.9, 1.7, "SOM", "~£840k ARR\nIllustrative first wedge: 5,000 paying users at £14/month after winning a narrow, high-intent segment.");
  addPanel(
    slide,
    0.72,
    4.15,
    7.0,
    1.7,
    "Initial wedge to win first",
    "Start with students and young professionals in private rentals: digitally native renters, high search intent, limited legal confidence, and strong need for fast self-serve support.",
    { fill: palette.surfaceAlt }
  );
  addPanel(
    slide,
    7.95,
    4.15,
    4.63,
    1.7,
    "Research to cite",
    "Support the story with English Housing Survey data, tenancy deposit dispute volumes, Shelter reporting, and UK private renter population figures.",
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 5);
  addHeadline(slide, "Unique Value Proposition", "Unlike generic legal content or overstretched helplines, we give renters immediate personalised next steps.");
  addPanel(slide, 0.72, 2.08, 3.9, 2.35, "Personalised", "Decision-tree logic adapts by issue and jurisdiction, so the user gets a relevant route instead of a generic article.", { titleColor: palette.accentSoft });
  addPanel(slide, 4.72, 2.08, 3.9, 2.35, "Action-oriented", "Outputs are built to be used immediately: action plans, letters, legal references, and practical next steps.", { titleColor: palette.accentSoft });
  addPanel(slide, 8.72, 2.08, 3.9, 2.35, "Zero-friction", "No account, no payment, no waiting for an appointment — which matters most when a housing issue is urgent.", { titleColor: palette.accentSoft });
  addPanel(
    slide,
    0.72,
    4.78,
    11.9,
    1.1,
    "Positioning line",
    "RenterShield is not trying to replace legal advice; it is trying to become the fastest, clearest self-serve starting point for renters who need to act now.",
    { fill: palette.surfaceAlt }
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 6);
  addHeadline(slide, "Business Model", "The end user is broad, but the first paying customers are renters in high-stress disputes and B2B pilot partners.");
  addPanel(slide, 0.72, 2.1, 4.0, 2.35, "Free core", "Decision-tree guidance, rights information, emergency contacts, and basic template letters remain free to maximise reach and trust.");
  addPanel(slide, 4.92, 2.1, 4.0, 2.35, "Premium renter plan (£14/month)", "AI-assisted letter drafting, deadline tracking, evidence logging, and a landlord communication timeline for urgent or ongoing disputes.");
  addPanel(slide, 9.12, 2.1, 3.46, 2.35, "Institutional buyer path", "University housing teams, student unions, councils, or advice organisations that want a self-serve triage layer before 1:1 support.");
  addPanel(
    slide,
    0.72,
    4.72,
    5.85,
    1.2,
    "Who pays first",
    "Likely early payer: renters with time-sensitive, evidence-heavy issues such as deposits, repairs escalation, or eviction pressure.",
    { fill: palette.surfaceAlt }
  );
  addPanel(
    slide,
    6.82,
    4.72,
    5.76,
    1.2,
    "How to explain monetisation",
    "Users do not pay for rights information; they pay for speed, structure, drafting support, and confidence during stressful cases.",
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 7);
  addHeadline(slide, "Go-to-Market", "Market to one renter segment first, prove trust there, then expand to adjacent users and organisations.");
  addPanel(slide, 0.72, 2.08, 3.9, 2.45, "1. Young renter channels", "Student housing groups, Reddit, MoneySavingExpert, tenant forums, and university communities where renters already share urgent problems.");
  addPanel(slide, 4.72, 2.08, 3.9, 2.45, "2. High-intent SEO", "Target searches like 'landlord won’t return deposit' and 'how long to fix damp' with pages that convert readers into guided flows.");
  addPanel(slide, 8.72, 2.08, 3.9, 2.45, "3. Pilot buyers", "Approach university housing teams, tenant unions, councils, and advice services with a lightweight self-serve pilot.");
  addPanel(
    slide,
    0.72,
    4.88,
    11.9,
    0.95,
    "Messaging discipline",
    "Be explicit: the core user is the renter, and the first paying customer is either a renter in a premium moment or an organisation buying triage capacity.",
    { fill: palette.surfaceAlt, titleColor: palette.warm }
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 8);
  addHeadline(slide, "MVP Plan", "The prototype proves usability; next validation should focus on trust, willingness to pay, and the best first segment.");
  addPanel(slide, 0.72, 2.08, 3.85, 2.65, "Built in the sprint", "• Public no-login prototype\n• Interactive issue flows\n• Region-aware guidance\n• Template letters and legal references\n• Mobile-friendly experience", { fill: palette.surfaceAlt });
  addPanel(slide, 4.74, 2.08, 3.85, 2.65, "Riskiest assumptions", "• Renters will self-serve before calling a helpline\n• Users trust the outputs enough to act\n• Students and young professionals are the easiest wedge to acquire first\n• Some users will pay for workflow support", { fill: palette.surfaceAlt });
  addPanel(slide, 8.76, 2.08, 3.82, 2.65, "Renter feedback (temporary)", "TEMP — Add 3–5 renter quotes showing whether users trusted the guidance, understood the disclaimer, and would pay for drafting, reminders, or evidence tracking in stressful disputes.", { fill: palette.surfaceAlt });
  addPanel(
    slide,
    0.72,
    5.0,
    11.9,
    0.9,
    "Most important learning",
    "This is strongest when framed as a renter action tool with a narrow first segment and clear premium moments — not a general legal information site.",
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 9);
  addHeadline(slide, "Team", "Founder with technical execution ability and strong user empathy for the problem space.");
  addPanel(slide, 0.72, 2.05, 4.2, 2.85, "Mason Preece", "Solo founder\n\nBackground in Computer Science, with direct awareness of how poor housing conditions and lack of clear guidance affect renters. Built the prototype rapidly and can continue iterating from user feedback.", { fill: palette.surfaceAlt });
  addPanel(slide, 5.18, 2.05, 7.4, 2.85, "Why this founder can build it", "• Can ship product quickly and turn feedback into working software\n• Understands the frustration renters face when the law is hard to navigate\n• Close enough to the problem to care, but technical enough to execute\n• Strong near-term advantage in prototyping, testing, and iteration", { fill: palette.surface });
  slide.addText("'Nobody should lose money or housing security because the right next step was too hard to find.'", {
    x: 0.72,
    y: 5.25,
    w: 11.1,
    h: 0.4,
    fontFace: "Aptos",
    fontSize: 15,
    italic: true,
    color: palette.accentSoft,
    margin: 0,
  });

  slide = pptx.addSlide();
  addSlideChrome(slide, 10);
  addHeadline(slide, "Budget Breakdown", "A modest 12-month seed budget focused on product quality, legal trust, and early distribution.");
  addPanel(slide, 0.72, 2.08, 3.9, 2.2, "40% Product & Engineering", "£20,000\nBuild trust features, improve UX, expand issue coverage, and refine the premium workflow layer.");
  addPanel(slide, 4.72, 2.08, 3.9, 2.2, "20% Legal & Compliance", "£10,000\nSolicitor review of templates and content, plus compliance work needed to keep guidance clear and responsible.");
  addPanel(slide, 8.72, 2.08, 3.9, 2.2, "24% Marketing & Acquisition", "£12,000\nCommunity-led growth, SEO content, testing channels, and early partner outreach.");
  addPanel(slide, 0.72, 4.62, 3.9, 1.55, "16% Operations & Hosting", "£8,000\nInfrastructure, analytics, customer support tooling, and experimentation costs.");
  addPanel(slide, 4.72, 4.62, 7.9, 1.55, "Investor / judge framing", "The budget is designed to unlock trust, retention, and repeatable distribution — not just more code. That makes it easier to defend as a realistic first raise.", { fill: palette.surfaceAlt });

  slide = pptx.addSlide();
  addSlideChrome(slide, 11);
  addHeadline(slide, "Impact & Scalability", "Start with renter confidence and prevent avoidable losses, then scale through repeatable issue playbooks.");
  addPanel(slide, 0.72, 2.08, 3.9, 2.35, "Immediate impact", "Helps renters understand what to do next faster, especially in issues involving deposits, repairs, eviction pressure, or unsafe conditions.");
  addPanel(slide, 4.72, 2.08, 3.9, 2.35, "Scalable model", "Expand issue coverage, improve trust signals, and add workflow tools that keep users engaged through a dispute lifecycle.");
  addPanel(slide, 8.72, 2.08, 3.9, 2.35, "Long-term vision", "Become the default self-serve platform for renter rights: practical guidance, outcome tracking, and eventually a trusted consumer legal brand.");
  addPanel(
    slide,
    0.72,
    4.8,
    11.9,
    1.05,
    "Feedback incorporated",
    "Unsupported claims have been removed. The slide now focuses on believable outcomes: faster action, higher confidence, broader issue coverage, and scalable product economics.",
    { fill: palette.surfaceAlt }
  );

  slide = pptx.addSlide();
  addSlideChrome(slide, 12);
  addHeadline(slide, "Next Steps", "The next 30 days should generate evidence, trust, and a clearer path to distribution.");
  addPanel(slide, 0.72, 2.08, 3.9, 2.45, "1. Run better validation", "Test the prototype with 10–15 renters, capture quotes and objections, and learn which issue journeys create the most trust and urgency.");
  addPanel(slide, 4.72, 2.08, 3.9, 2.45, "2. Expand high-value flows", "Add the next 5 priority issue types and improve trust markers such as disclaimers, source references, and better letter outputs.");
  addPanel(slide, 8.72, 2.08, 3.9, 2.45, "3. Start credibility conversations", "Open pilot discussions with housing support organisations and begin legal review of core templates before scaling claims.");
  addPanel(slide, 0.72, 4.9, 11.9, 0.92, "Contact", "mason.work.mmp@gmail.com  •  linkedin.com/in/mason-preece-a985593b3", { fill: palette.surfaceAlt });

  const absoluteOutputPath = resolve(process.cwd(), outputPath);
  mkdirSync(dirname(absoluteOutputPath), { recursive: true });
  await pptx.writeFile({ fileName: absoluteOutputPath });
  return absoluteOutputPath;
}
