import { ReactNode } from "react";
import { Home, Shield, Banknote, Scale, BookOpen, Users, Wrench, FileCheck, ClipboardList } from "lucide-react";
import type { Region } from "@/contexts/RegionContext";

export interface RightItem {
  icon: ReactNode;
  title: string;
  summary: string;
  law: string;
}

const englandRights: RightItem[] = [
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

const walesRights: RightItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Right to a Safe Home",
    summary: "Your landlord must ensure the dwelling is fit for human habitation and maintain the structure, exterior, heating, water, gas, and electrics throughout your occupation contract.",
    law: "Renting Homes (Wales) Act 2016, Sections 91-97",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protection from Illegal Eviction",
    summary: "Your landlord cannot evict you without a court order. Illegal eviction (changing locks, cutting utilities) is a criminal offence. Wales requires 6 months' notice for no-fault eviction.",
    law: "Renting Homes (Wales) Act 2016, Section 173; Protection from Eviction Act 1977",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Deposit Protection",
    summary: "Your deposit must be protected in an approved scheme. If not, you can claim 1-3x compensation and your landlord cannot serve a valid Section 173 notice.",
    law: "Renting Homes (Wales) Act 2016, Sections 43-45",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Fair Rent Increases",
    summary: "Rent can only be increased via the formal process. You can challenge excessive increases at the Residential Property Tribunal Wales.",
    law: "Renting Homes (Wales) Act 2016, Sections 102-104",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Written Statement of Contract",
    summary: "Your landlord must provide a written statement of your occupation contract within 14 days. Without it, they cannot serve a Section 173 no-fault notice.",
    law: "Renting Homes (Wales) Act 2016, Sections 31-35",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Quiet Enjoyment",
    summary: "You have the right to live without interference. Your landlord must give 24 hours' notice before visiting and can only enter with your consent.",
    law: "Renting Homes (Wales) Act 2016; Common law covenant",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Right to Repairs",
    summary: "Your landlord must carry out repairs promptly. You can escalate to Environmental Health if they refuse. Landlords must be registered with Rent Smart Wales.",
    law: "Renting Homes (Wales) Act 2016, Sections 91-97; Housing (Wales) Act 2014",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Anti-Retaliatory Eviction",
    summary: "If you make a legitimate complaint, your landlord cannot serve a Section 173 notice in retaliation. The court can refuse possession if retaliation is proven.",
    law: "Renting Homes (Wales) Act 2016, Section 217",
  },
];

const scotlandRights: RightItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Right to a Safe Home",
    summary: "Your landlord must ensure the property meets the 'repairing standard' — covering structure, installations, fixtures, furnishings, and freedom from damp.",
    law: "Housing (Scotland) Act 2006, Sections 13-14",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No 'No-Fault' Eviction (PRT)",
    summary: "Under a Private Residential Tenancy, there is no no-fault eviction. Your landlord must prove one of 18 specific grounds and get a Tribunal order.",
    law: "Private Housing (Tenancies) (Scotland) Act 2016, Part 5",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Deposit Protection",
    summary: "Your deposit must be protected in an approved scheme within 30 working days. If not, the Tribunal can award up to 3x the deposit amount.",
    law: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Fair Rent Increases",
    summary: "Rent can only be increased once per year with 3 months' notice (PRT). You can refer excessive increases to Rent Service Scotland.",
    law: "Private Housing (Tenancies) (Scotland) Act 2016, Sections 22-25",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Landlord Registration",
    summary: "All private landlords in Scotland must be registered on the Scottish Landlord Register. Unregistered landlords face prosecution.",
    law: "Antisocial Behaviour etc. (Scotland) Act 2004, Part 8",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Quiet Enjoyment",
    summary: "You have the right to live without interference. Your landlord must give reasonable notice before visiting and needs your consent to enter.",
    law: "Common law; Housing (Scotland) Act 1988",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Right to Repairs (Tribunal Route)",
    summary: "You can apply directly to the First-tier Tribunal for a Repairing Standard Enforcement Order if your landlord won't fix repairs. Applications are free.",
    law: "Housing (Scotland) Act 2006, Sections 22-26",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Interlinked Fire Alarms",
    summary: "All rented properties in Scotland must have interlinked fire alarms (smoke alarms in living rooms and hallways, heat detectors in kitchens).",
    law: "Housing (Scotland) Act 2014; Fire Safety (Scotland) Regulations",
  },
];

const northernIrelandRights: RightItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Right to a Fit and Safe Home",
    summary: "Private rented homes in Northern Ireland must meet minimum fitness and safety standards. Serious hazards and unsafe conditions can be reported to the local council.",
    law: "Private Tenancies (Northern Ireland) Order 2006; Northern Ireland fitness standard rules",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protection from Illegal Eviction",
    summary: "Your landlord cannot lawfully remove you by threat, lock change, or cutting services. Harassment and illegal eviction are criminal offences.",
    law: "Protection from Eviction (Northern Ireland) Order 1978",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Deposit Protection",
    summary: "A deposit must be protected in an approved tenancy deposit scheme within 28 days, and you should receive key information within 35 days. New deposits are generally capped at one month's rent.",
    law: "Private Tenancies Act (Northern Ireland) 2022, Sections 4-6",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Notice to Quit Rules",
    summary: "If your landlord wants possession, they usually need to serve a written Notice to Quit. The notice period depends on how long you have lived there.",
    law: "Private Tenancies Act (Northern Ireland) 2022, Section 11; Private Tenancies (Northern Ireland) Order 2006",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Rent Increase Limits",
    summary: "Private rents in Northern Ireland can usually only be increased once every 12 months and require at least 2 months' written notice.",
    law: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Right to Tenancy Information",
    summary: "Your landlord should give you key written tenancy information, and cash payments should be receipted. Keep all notices and tenancy paperwork safely.",
    law: "Private Tenancies Act (Northern Ireland) 2022, Sections 1-3",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Right to Report Unsafe Repairs",
    summary: "If the landlord ignores hazards or serious disrepair, you can escalate to the local council's Environmental Health team and get advice from Housing Rights.",
    law: "Private Tenancies (Northern Ireland) Order 2006; Northern Ireland housing condition enforcement rules",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "HMO Licensing Protections",
    summary: "Shared homes that meet the HMO definition usually need a local council licence. Overcrowding, fire safety issues, and licence breaches can be reported.",
    law: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
  },
];

export function getRights(region: Region): RightItem[] {
  if (region === "northern-ireland") return northernIrelandRights;
  if (region === "scotland") return scotlandRights;
  if (region === "wales") return walesRights;
  return englandRights;
}

export function getRightsDescription(region: Region): string {
  if (region === "northern-ireland")
    return "As a private renter in Northern Ireland, you have important protections around notices to quit, deposit protection, rent increases, harassment, and minimum housing standards. Understanding these rights is the first step to defending them.";
  if (region === "scotland")
    return "As a private renter in Scotland, you have strong legal protections — including no 'no-fault' evictions under the Private Housing (Tenancies) (Scotland) Act 2016. Understanding these rights is the first step to defending them.";
  if (region === "wales")
    return "As a private renter in Wales, you have significant legal protections under the Renting Homes (Wales) Act 2016. Understanding these rights is the first step to defending them.";
  return "As a private renter in England, you have significant legal protections. Understanding these rights is the first step to defending them.";
}
