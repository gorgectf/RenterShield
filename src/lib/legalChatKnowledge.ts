import { issueTrees, type IssueTree } from "../data/issueTreeData";
import { walesIssueTrees } from "../data/walesIssueTreeData";
import { scotlandIssueTrees } from "../data/scotlandIssueTreeData";
import { northernIrelandIssueTrees } from "../data/northernIrelandIssueTreeData";

export type LegalRegion = "england" | "wales" | "scotland" | "northern-ireland";

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
  issueTrees: IssueTree[];
}

const commonEmergencyContacts = [
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
    emergencyContacts: commonEmergencyContacts,
    issueTrees,
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
    emergencyContacts: commonEmergencyContacts,
    issueTrees: walesIssueTrees,
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
    emergencyContacts: commonEmergencyContacts,
    issueTrees: scotlandIssueTrees,
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
    emergencyContacts: commonEmergencyContacts,
    issueTrees: northernIrelandIssueTrees,
  },
};

function summariseIssueTrees(trees: IssueTree[]) {
  return trees.map((tree) => {
    const firstQuestion = tree.nodes[tree.startNodeId]?.question;
    const outcomes = Object.values(tree.nodes)
      .filter((node) => node.result)
      .slice(0, 4)
      .map((node) => ({
        title: node.result?.title,
        summary: node.result?.summary,
        legalRef: node.result?.legalRef,
      }));

    return {
      id: tree.id,
      title: tree.title,
      description: tree.description,
      firstQuestion,
      outcomes,
    };
  });
}

export function getLegalChatKnowledge(region: LegalRegion) {
  const knowledge = regionKnowledge[region];
  return {
    ...knowledge,
    issueSummaries: summariseIssueTrees(knowledge.issueTrees),
  };
}

export function getLegalChatContext(region: LegalRegion) {
  const knowledge = getLegalChatKnowledge(region);

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

  return `Region: ${knowledge.label}
Disclaimer: ${knowledge.disclaimer}

Core rights and rules:
${rightsBlock}

Support contacts:
${supportBlock}

Emergency escalation:
${emergencyBlock}

Issue-tree guidance already available in RenterShield:
${issueBlock}`;
}

export function getStarterPrompts(region: LegalRegion) {
  const knowledge = getLegalChatKnowledge(region);
  return knowledge.issueSummaries.slice(0, 4).map((issue) => `I’m in ${knowledge.label} and need help with ${issue.title.toLowerCase()}. What should I do first?`);
}
