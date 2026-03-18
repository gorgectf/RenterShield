export type LegalRegion = "england" | "wales" | "scotland" | "northern-ireland";

interface IssueSummary {
  title: string;
  description: string;
  firstQuestion?: string;
  outcomes: Array<{
    title: string;
    summary: string;
    legalRef?: string;
  }>;
}

interface RegionKnowledge {
  label: string;
  disclaimer: string;
  rightsSummary: string[];
  supportContacts: Array<{
    name: string;
    phone?: string;
    website: string;
    reason: string;
  }>;
  emergencyContacts: Array<{
    name: string;
    phone: string;
    reason: string;
  }>;
  issueSummaries: IssueSummary[];
}

const emergencyContacts = [
  {
    name: "Police / Fire / Ambulance",
    phone: "999",
    reason: "Immediate danger, violence, or life-threatening emergencies.",
  },
  {
    name: "Gas Emergency",
    phone: "0800 111 999",
    reason: "Suspected gas leak or urgent gas safety risk.",
  },
];

const regionKnowledge: Record<LegalRegion, RegionKnowledge> = {
  england: {
    label: "England",
    disclaimer: "RenterShield provides informational guidance based on tenancy law in England. It is not a solicitor-client service or personalised legal advice.",
    rightsSummary: [
      "Landlords must keep the home safe, warm, and free from serious hazards, including structure, heating, water, gas, and electrics.",
      "A landlord cannot lawfully evict you without a court order; lock changes, intimidation, or utility shutoffs to force you out can be criminal offences.",
      "Deposits should be protected in an approved scheme within 30 days, and tenants may be entitled to compensation if this was not done.",
      "Rent increases on periodic tenancies usually require the correct formal notice, and excessive increases can be challenged.",
      "Tenants have a right to quiet enjoyment and should usually receive at least 24 hours' notice before non-emergency visits.",
    ],
    supportContacts: [
      { name: "Shelter", phone: "0808 800 4444", website: "https://www.shelter.org.uk", reason: "Free housing advice, homelessness support, and legal guidance." },
      { name: "Citizens Advice", phone: "0800 144 8848", website: "https://www.citizensadvice.org.uk", reason: "Advice on housing, benefits, debt, and legal rights." },
      { name: "Environmental Health (Local Council)", website: "https://www.gov.uk/find-local-council", reason: "Report serious housing hazards, damp, mould, unsafe electrics, or HMO issues." },
      { name: "National Domestic Abuse Helpline", phone: "0808 2000 247", website: "https://www.nationaldahelpline.org.uk", reason: "24-hour support if housing problems overlap with domestic abuse or coercive control." },
    ],
    emergencyContacts,
    issueSummaries: [
      {
        title: "Deposit Not Returned",
        description: "Guidance for missing deposits, unfair deductions, and unprotected deposits.",
        firstQuestion: "Was your deposit protected in a government-approved scheme?",
        outcomes: [
          { title: "Check your deposit protection status first", summary: "Contact the approved schemes before taking further action.", legalRef: "Housing Act 2004, Sections 212-215" },
          { title: "Your deposit was not protected — you may be owed up to 3x", summary: "You may be able to claim compensation plus the deposit return.", legalRef: "Housing Act 2004, Sections 212-215; Localism Act 2011" },
          { title: "Dispute the unfair deductions through your deposit scheme", summary: "Use ADR and gather inventory, photos, and communications.", legalRef: "Housing Act 2004; Tenancy Deposit Scheme rules" },
        ],
      },
      {
        title: "Landlord Won't Fix Repairs",
        description: "Guidance for ignored repairs, damp and mould, and urgent gas/electrical issues.",
        firstQuestion: "What type of repair issue are you dealing with?",
        outcomes: [
          { title: "Gas or electrical issues — this may be an emergency", summary: "Urgent safety faults should be escalated immediately and reported in writing.", legalRef: "Gas Safety Regulations 1998; Electrical Safety Standards Regulations 2020" },
          { title: "Persistent damp/mould — escalate to Environmental Health", summary: "Document everything, write formally, and escalate if the landlord does not act.", legalRef: "Landlord and Tenant Act 1985; Housing Act 2004" },
        ],
      },
      {
        title: "Eviction / Notice Problems",
        description: "Guidance for notices, illegal eviction risks, and landlord harassment.",
        outcomes: [
          { title: "Check whether the notice and process are legally valid", summary: "Do not leave early without understanding your notice position.", legalRef: "Protection from Eviction Act 1977; Housing Act 1988" },
          { title: "Illegal eviction is a serious issue", summary: "Lock changes, threats, and utility shutoffs should be escalated urgently.", legalRef: "Protection from Eviction Act 1977" },
        ],
      },
    ],
  },
  wales: {
    label: "Wales",
    disclaimer: "RenterShield provides informational guidance based on housing law in Wales. It is not personalised legal advice.",
    rightsSummary: [
      "Occupation contracts in Wales are governed by the Renting Homes (Wales) Act 2016, including rules on fitness for human habitation and written statements.",
      "Landlords must protect deposits in an approved scheme and may be blocked from valid no-fault possession routes if they fail to comply.",
      "No-fault possession under section 173 has strict notice and compliance rules, and retaliation can be challenged.",
      "Landlords must usually provide a written statement of the occupation contract within 14 days.",
      "Contract-holders have a right to quiet enjoyment and can escalate serious repair issues to Environmental Health.",
    ],
    supportContacts: [
      { name: "Shelter Cymru", phone: "0800 495 495", website: "https://www.sheltercymru.org.uk", reason: "Free housing advice and homelessness support in Wales." },
      { name: "Citizens Advice Wales", phone: "0800 702 2020", website: "https://www.citizensadvice.org.uk/wales", reason: "Advice on housing, benefits, debt, and legal rights." },
      { name: "Rent Smart Wales", phone: "029 2105 0440", website: "https://rentsmart.gov.wales", reason: "Check landlord registration and licensing compliance." },
      { name: "Live Fear Free", phone: "0808 80 10 800", website: "https://www.gov.wales/live-fear-free", reason: "24/7 domestic abuse support in Wales." },
    ],
    emergencyContacts,
    issueSummaries: [
      {
        title: "Deposit Not Returned",
        description: "Guidance for protected and unprotected deposits under Welsh law.",
        firstQuestion: "Was your deposit protected in a government-approved scheme?",
        outcomes: [
          { title: "Check your deposit protection status first", summary: "Confirm whether the deposit was protected before taking further action.", legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45" },
          { title: "Your deposit was not protected — you may be owed up to 3x", summary: "Court action may be available if the landlord failed to comply.", legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45" },
        ],
      },
      {
        title: "Landlord Won't Fix Repairs",
        description: "Guidance for fitness for human habitation, damp, mould, and ignored repairs.",
        outcomes: [
          { title: "Use the formal repair route and escalate if needed", summary: "Write formally, document the issue, and involve the council if the landlord still refuses.", legalRef: "Renting Homes (Wales) Act 2016, Sections 91-97" },
        ],
      },
      {
        title: "Eviction / Section 173 concerns",
        description: "Guidance for possession notices and retaliatory eviction issues in Wales.",
        outcomes: [
          { title: "Check compliance before assuming the notice is valid", summary: "Deposit, written statement, and timing failures may matter.", legalRef: "Renting Homes (Wales) Act 2016, Sections 31-35, 43-45, 173, 217" },
        ],
      },
    ],
  },
  scotland: {
    label: "Scotland",
    disclaimer: "RenterShield provides informational guidance based on private rented sector rules in Scotland. It is not personalised legal advice.",
    rightsSummary: [
      "Private Residential Tenancies in Scotland do not have a general no-fault eviction route; landlords must prove a valid ground and obtain a tribunal order.",
      "Deposits must be protected in an approved scheme within 30 working days and can be challenged through the tribunal if not protected.",
      "Rent increases are usually limited to once a year with notice, and they can be referred for assessment if excessive.",
      "Tenants can apply directly to the First-tier Tribunal for repairing standard enforcement if serious repairs are ignored.",
      "Landlords should be registered, and rented homes must meet repairing standard and fire alarm rules.",
    ],
    supportContacts: [
      { name: "Shelter Scotland", phone: "0808 800 4444", website: "https://www.shelterscotland.org", reason: "Free housing advice and homelessness support in Scotland." },
      { name: "Citizens Advice Scotland", phone: "0800 028 1456", website: "https://www.cas.org.uk", reason: "Advice on housing, debt, and legal rights." },
      { name: "First-tier Tribunal (Housing and Property Chamber)", website: "https://www.housingandpropertychamber.scot", reason: "Route for repairs, deposit disputes, eviction challenges, and some rent issues." },
      { name: "Scottish Women's Aid", phone: "0800 027 1234", website: "https://womensaid.scot", reason: "Domestic abuse support if your safety is at risk." },
    ],
    emergencyContacts,
    issueSummaries: [
      {
        title: "Deposit Not Returned",
        description: "Guidance for missing deposits and tribunal routes in Scotland.",
        firstQuestion: "Was your deposit placed in an approved tenancy deposit scheme?",
        outcomes: [
          { title: "Check your deposit protection status first", summary: "Contact the Scottish deposit schemes to confirm protection.", legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011" },
          { title: "Your deposit was not protected — you may claim up to 3x", summary: "You may be able to apply to the First-tier Tribunal for a sanction.", legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011" },
        ],
      },
      {
        title: "Landlord Won't Fix Repairs",
        description: "Guidance for repairing standard breaches and tribunal escalation.",
        outcomes: [
          { title: "Escalate serious repair failures", summary: "Document the issue and consider the Housing and Property Chamber if your landlord refuses to act.", legalRef: "Housing (Scotland) Act 2006, Sections 13-26" },
        ],
      },
      {
        title: "Eviction / PRT concerns",
        description: "Guidance for eviction grounds, notices, and tribunal procedure under Scottish rules.",
        outcomes: [
          { title: "Check the eviction ground and tribunal route", summary: "There is no general no-fault eviction under a PRT.", legalRef: "Private Housing (Tenancies) (Scotland) Act 2016" },
        ],
      },
    ],
  },
  "northern-ireland": {
    label: "Northern Ireland",
    disclaimer: "RenterShield provides informational guidance based on tenancy rules in Northern Ireland. It is not personalised legal advice.",
    rightsSummary: [
      "Private tenants in Northern Ireland have protections around deposit handling, notices to quit, rent increases, harassment, and minimum housing standards.",
      "Illegal eviction and harassment are criminal offences; landlords cannot lawfully force you out by threats, lock changes, or cutting services.",
      "Deposits must be protected and accompanied by required information within the statutory time limits.",
      "Notice to Quit periods depend on the tenancy circumstances and how long you have been in the property.",
      "Dangerous disrepair and HMO licensing concerns can be escalated to local councils or Housing Rights.",
    ],
    supportContacts: [
      { name: "Housing Rights", phone: "028 9024 5640", website: "https://www.housingrights.org.uk", reason: "Specialist housing advice for private renters in Northern Ireland." },
      { name: "Advice NI", website: "https://www.adviceni.net", reason: "Advice on debt, benefits, and practical support." },
      { name: "Northern Ireland Housing Executive", website: "https://www.nihe.gov.uk", reason: "Support if you are homeless or threatened with homelessness." },
      { name: "Local Council Environmental Health", website: "https://www.nidirect.gov.uk/contacts/local-councils-in-northern-ireland", reason: "Report dangerous housing conditions or HMO issues." },
    ],
    emergencyContacts,
    issueSummaries: [
      {
        title: "Deposit Not Returned",
        description: "Guidance for deposit protection and recovery issues in Northern Ireland.",
        firstQuestion: "Was your deposit protected in an approved tenancy deposit scheme?",
        outcomes: [
          { title: "Check the deposit protection details first", summary: "Confirm protection, prescribed information, and scheme details.", legalRef: "Private Tenancies Act (Northern Ireland) 2022, Sections 4-6" },
          { title: "Your deposit may not have been protected — act now", summary: "Write formally, keep records, and seek specialist advice if needed.", legalRef: "Private Tenancies Act (Northern Ireland) 2022, Sections 4-6" },
        ],
      },
      {
        title: "Landlord Won't Fix Repairs",
        description: "Guidance for dangerous disrepair, unsafe homes, and escalation routes.",
        outcomes: [
          { title: "Escalate serious hazards", summary: "Document the issue, write to the landlord, and contact Environmental Health or Housing Rights if needed.", legalRef: "Private Tenancies (Northern Ireland) Order 2006" },
        ],
      },
      {
        title: "Notice to Quit / eviction concerns",
        description: "Guidance for notices, illegal eviction, and harassment issues.",
        outcomes: [
          { title: "Check the notice timing and process", summary: "Notice periods and process matter, and harassment or lockouts require urgent support.", legalRef: "Private Tenancies Act (Northern Ireland) 2022; Protection from Eviction (Northern Ireland) Order 1978" },
        ],
      },
    ],
  },
};

export function getLegalChatContext(region: LegalRegion) {
  const knowledge = regionKnowledge[region];

  const rightsBlock = knowledge.rightsSummary.map((item, index) => `${index + 1}. ${item}`).join("\n");
  const supportBlock = knowledge.supportContacts
    .map((contact) => `- ${contact.name}${contact.phone ? ` (${contact.phone})` : ""}: ${contact.reason}. ${contact.website}`)
    .join("\n");
  const emergencyBlock = knowledge.emergencyContacts
    .map((contact) => `- ${contact.name} (${contact.phone}): ${contact.reason}`)
    .join("\n");
  const issueBlock = knowledge.issueSummaries
    .map((issue) => {
      const outcomes = issue.outcomes
        .map((outcome) => `  • ${outcome.title}: ${outcome.summary}${outcome.legalRef ? ` [${outcome.legalRef}]` : ""}`)
        .join("\n");

      return `- ${issue.title}: ${issue.description}${issue.firstQuestion ? ` First question: ${issue.firstQuestion}` : ""}\n${outcomes}`;
    })
    .join("\n");

  return `Region: ${knowledge.label}\nDisclaimer: ${knowledge.disclaimer}\n\nCore rights and rules:\n${rightsBlock}\n\nSupport contacts:\n${supportBlock}\n\nEmergency escalation:\n${emergencyBlock}\n\nIssue-tree guidance already available in RenterShield:\n${issueBlock}`;
}
