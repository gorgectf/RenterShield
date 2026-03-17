import type { Region } from "@/contexts/RegionContext";

export interface EmergencyContact {
  name: string;
  phone: string;
  description: string;
  urgent: true;
}

export interface SupportContact {
  name: string;
  phone: string | null;
  website: string;
  description: string;
  tags: string[];
}

const sharedEmergency: EmergencyContact[] = [
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

const englandSupport: SupportContact[] = [
  { name: "Shelter", phone: "0808 800 4444", website: "https://www.shelter.org.uk", description: "Free housing advice and support. Helpline open Mon-Fri 8am-8pm, Sat-Sun 9am-5pm.", tags: ["Housing advice", "Homelessness", "Legal help"] },
  { name: "Citizens Advice", phone: "0800 144 8848", website: "https://www.citizensadvice.org.uk", description: "Free, confidential advice on housing, benefits, debt, and legal issues.", tags: ["Benefits", "Legal rights", "Debt"] },
  { name: "Samaritans", phone: "116 123", website: "https://www.samaritans.org", description: "Emotional support 24/7. Free to call from any phone.", tags: ["Mental health", "Crisis support"] },
  { name: "National Domestic Abuse Helpline", phone: "0808 2000 247", website: "https://www.nationaldahelpline.org.uk", description: "24-hour support for domestic abuse.", tags: ["Domestic abuse", "Safety"] },
  { name: "Electrical Safety First", phone: null, website: "https://www.electricalsafetyfirst.org.uk", description: "Report electrical safety concerns in rented properties.", tags: ["Electrical safety"] },
  { name: "Environmental Health (Local Council)", phone: null, website: "https://www.gov.uk/find-local-council", description: "Report housing hazards, disrepair, or HMO issues.", tags: ["Disrepair", "Hazards", "HMO"] },
  { name: "Legal Aid", phone: null, website: "https://www.gov.uk/legal-aid", description: "Check if you qualify for free legal representation for housing cases.", tags: ["Legal aid", "Court"] },
  { name: "Acas (Employment)", phone: "0300 123 1100", website: "https://www.acas.org.uk", description: "If housing issues are linked to employment (e.g. tied accommodation).", tags: ["Employment", "Tied housing"] },
];

const walesSupport: SupportContact[] = [
  { name: "Shelter Cymru", phone: "0800 495 495", website: "https://www.sheltercymru.org.uk", description: "Free housing advice and support for people in Wales. Helpline open Mon-Fri 9am-5pm.", tags: ["Housing advice", "Homelessness", "Legal help"] },
  { name: "Citizens Advice Wales", phone: "0800 702 2020", website: "https://www.citizensadvice.org.uk/wales", description: "Free, confidential advice on housing, benefits, debt, and legal issues in Wales.", tags: ["Benefits", "Legal rights", "Debt"] },
  { name: "Rent Smart Wales", phone: "029 2105 0440", website: "https://rentsmart.gov.wales", description: "Check if your landlord is registered. Report unregistered landlords.", tags: ["Landlord registration", "Licensing", "Enforcement"] },
  { name: "Samaritans", phone: "116 123", website: "https://www.samaritans.org", description: "Emotional support 24/7. Free to call from any phone.", tags: ["Mental health", "Crisis support"] },
  { name: "Live Fear Free (Wales)", phone: "0808 80 10 800", website: "https://www.gov.wales/live-fear-free", description: "Welsh Government helpline for domestic abuse and violence. 24/7 support.", tags: ["Domestic abuse", "Safety"] },
  { name: "Environmental Health (Local Council)", phone: null, website: "https://www.gov.wales/find-your-local-authority", description: "Report housing hazards, disrepair, or HMO issues to your local authority in Wales.", tags: ["Disrepair", "Hazards", "HMO"] },
  { name: "Legal Aid", phone: null, website: "https://www.gov.uk/legal-aid", description: "Check if you qualify for free legal representation.", tags: ["Legal aid", "Court"] },
];

const scotlandSupport: SupportContact[] = [
  { name: "Shelter Scotland", phone: "0808 800 4444", website: "https://www.shelterscotland.org", description: "Free housing advice for people in Scotland. Helpline open Mon-Fri 9am-5pm.", tags: ["Housing advice", "Homelessness", "Legal help"] },
  { name: "Citizens Advice Scotland", phone: "0800 028 1456", website: "https://www.cas.org.uk", description: "Free, confidential advice on housing, benefits, debt, and legal issues in Scotland.", tags: ["Benefits", "Legal rights", "Debt"] },
  { name: "Scottish Landlord Register", phone: null, website: "https://www.landlordregistrationscotland.gov.uk", description: "Check if your landlord is registered. Report unregistered landlords to your local council.", tags: ["Landlord registration", "Enforcement"] },
  { name: "First-tier Tribunal (Housing)", phone: null, website: "https://www.housingandpropertychamber.scot", description: "Apply for repair orders, deposit disputes, eviction challenges, and rent increase referrals. Applications are free.", tags: ["Tribunal", "Repairs", "Disputes"] },
  { name: "Rent Service Scotland", phone: null, website: "https://www.rentservice.gov.scot", description: "Refer rent increases for assessment. A Rent Officer will determine the open market rent.", tags: ["Rent increases", "Valuation"] },
  { name: "Samaritans", phone: "116 123", website: "https://www.samaritans.org", description: "Emotional support 24/7. Free to call from any phone.", tags: ["Mental health", "Crisis support"] },
  { name: "Scottish Women's Aid", phone: "0800 027 1234", website: "https://womensaid.scot", description: "Support for domestic abuse in Scotland. 24-hour helpline.", tags: ["Domestic abuse", "Safety"] },
  { name: "Legal Aid (Scotland)", phone: null, website: "https://www.slab.org.uk", description: "Check if you qualify for free legal representation through the Scottish Legal Aid Board.", tags: ["Legal aid", "Court"] },
];

export function getEmergencyContacts(_region: Region): EmergencyContact[] {
  return sharedEmergency;
}

export function getSupportContacts(region: Region): SupportContact[] {
  if (region === "scotland") return scotlandSupport;
  if (region === "wales") return walesSupport;
  return englandSupport;
}
