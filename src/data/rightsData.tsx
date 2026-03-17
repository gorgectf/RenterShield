import { ReactNode } from "react";
import { Home, Shield, Banknote, Scale, BookOpen, Users, Wrench, FileCheck } from "lucide-react";
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

export function getRights(region: Region): RightItem[] {
  return region === "wales" ? walesRights : englandRights;
}

export function getRightsDescription(region: Region): string {
  return region === "wales"
    ? "As a private renter in Wales, you have significant legal protections under the Renting Homes (Wales) Act 2016. Understanding these rights is the first step to defending them."
    : "As a private renter in England, you have significant legal protections. Understanding these rights is the first step to defending them.";
}
