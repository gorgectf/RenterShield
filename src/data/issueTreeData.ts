export interface TreeNode {
  id: string;
  question?: string;
  info?: string;
  options?: { label: string; nextId: string }[];
  result?: {
    title: string;
    summary: string;
    steps: string[];
    letterTemplate?: string;
    legalRef?: string;
  };
}

export interface IssueTree {
  id: string;
  title: string;
  description: string;
  icon: string;
  startNodeId: string;
  nodes: Record<string, TreeNode>;
}

export const issueTrees: IssueTree[] = [
  {
    id: "deposit",
    title: "Deposit Not Returned",
    description: "Your landlord hasn't returned your deposit after moving out",
    icon: "💷",
    startNodeId: "d1",
    nodes: {
      d1: {
        id: "d1",
        question: "Was your deposit protected in a government-approved scheme?",
        info: "Since 2007, landlords in England and Wales must protect deposits in one of three schemes: DPS, MyDeposits, or TDS.",
        options: [
          { label: "Yes", nextId: "d2" },
          { label: "No", nextId: "d_unprotected" },
          { label: "I don't know", nextId: "d_check" },
        ],
      },
      d_check: {
        id: "d_check",
        question: "You can check if your deposit is protected by contacting all three schemes. Have you done this?",
        info: "Contact DPS (depositprotection.com), MyDeposits (mydeposits.co.uk), and TDS (tenancydepositscheme.com) with your tenancy details.",
        options: [
          { label: "Yes, it was protected", nextId: "d2" },
          { label: "Yes, it was NOT protected", nextId: "d_unprotected" },
          { label: "I haven't checked yet", nextId: "d_check_result" },
        ],
      },
      d_check_result: {
        id: "d_check_result",
        result: {
          title: "Check your deposit protection status first",
          summary: "Before taking further action, you need to find out if your deposit was protected. This determines your legal options.",
          steps: [
            "Contact DPS at depositprotection.com or 0330 303 0030",
            "Contact MyDeposits at mydeposits.co.uk or 0333 321 9401",
            "Contact TDS at tenancydepositscheme.com or 0300 037 1000",
            "Provide your name, previous address, and tenancy start date",
            "Come back to RenterShield once you have your answer",
          ],
          legalRef: "Housing Act 2004, Sections 212-215",
        },
      },
      d_unprotected: {
        id: "d_unprotected",
        result: {
          title: "Your deposit was not protected — you may be owed up to 3x",
          summary: "If your landlord failed to protect your deposit, you can claim compensation of 1-3 times the deposit amount through the county court, plus the return of your deposit.",
          steps: [
            "Write to your landlord formally requesting the deposit back (use our template letter below)",
            "Give them 14 days to respond",
            "If no response, apply to your local county court using Form N208",
            "Court fee is £308 (recoverable if you win)",
            "The court can award 1x to 3x the deposit amount as compensation",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Return of tenancy deposit — [Property Address]

I am writing regarding the deposit of £[Amount] paid at the start of my tenancy on [Start Date].

I have confirmed that this deposit was not protected in a government-approved tenancy deposit scheme as required under Sections 212-215 of the Housing Act 2004.

Under the Act, failure to protect a deposit entitles the tenant to compensation of between 1 and 3 times the deposit amount, in addition to the return of the deposit itself.

I am requesting the full return of my deposit within 14 days of this letter. If I do not receive payment by [Date + 14 days], I will apply to the county court for an order requiring repayment and compensation.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Housing Act 2004, Sections 212-215; Localism Act 2011",
        },
      },
      d2: {
        id: "d2",
        question: "How long ago did your tenancy end?",
        options: [
          { label: "Less than 10 days ago", nextId: "d_wait" },
          { label: "10 days to 3 months ago", nextId: "d3" },
          { label: "More than 3 months ago", nextId: "d3" },
        ],
      },
      d_wait: {
        id: "d_wait",
        result: {
          title: "Your landlord still has time to return the deposit",
          summary: "The deposit scheme has 10 days from the end of your tenancy to return your deposit after both parties agree on deductions. If there's a dispute, the scheme provides free resolution.",
          steps: [
            "Wait until 10 days after your tenancy end date",
            "If the deposit isn't returned, raise a dispute with the scheme that holds your deposit",
            "The dispute resolution is free and usually takes 4-6 weeks",
            "Come back to RenterShield if the deadline passes without action",
          ],
          legalRef: "Housing Act 2004, Section 214",
        },
      },
      d3: {
        id: "d3",
        question: "Has your landlord proposed any deductions from the deposit?",
        options: [
          { label: "Yes, and they seem unfair", nextId: "d_dispute" },
          { label: "Yes, but they're reasonable", nextId: "d_partial" },
          { label: "No, they're just ignoring me", nextId: "d_ignore" },
        ],
      },
      d_dispute: {
        id: "d_dispute",
        result: {
          title: "Dispute the unfair deductions through your deposit scheme",
          summary: "All three deposit schemes offer free Alternative Dispute Resolution (ADR). Your landlord must provide evidence for deductions — the burden of proof is on them.",
          steps: [
            "Gather your evidence: check-in/check-out inventory, photos, communications",
            "Raise a formal dispute with your deposit scheme (free of charge)",
            "The scheme will ask both parties to submit evidence",
            "An independent adjudicator will decide within 4-6 weeks",
            "If you disagree with the decision, you can still go to county court",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Disputed deposit deductions — [Property Address]

I am writing to formally dispute the deductions of £[Amount] from my deposit of £[Total Deposit].

I do not agree with the following deductions:
- [Deduction 1]: [Reason for disagreeing]
- [Deduction 2]: [Reason for disagreeing]

I have photographic evidence and the check-in inventory supporting the condition of the property at the start and end of the tenancy.

If we cannot resolve this within 14 days, I will raise a formal dispute with [Deposit Scheme Name] for independent adjudication.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing Act 2004; Tenancy Deposit Scheme rules",
        },
      },
      d_partial: {
        id: "d_partial",
        result: {
          title: "Accept the reasonable deductions and request the balance",
          summary: "If the deductions are fair, you can agree and request the remaining balance be returned promptly through the deposit scheme.",
          steps: [
            "Confirm your agreement to the proposed deductions in writing",
            "Request the balance through the deposit scheme portal or your landlord",
            "The scheme should release funds within 10 days of both parties agreeing",
            "Keep all written agreements for your records",
          ],
          legalRef: "Housing Act 2004, Section 214",
        },
      },
      d_ignore: {
        id: "d_ignore",
        result: {
          title: "Your landlord is not responding — escalate formally",
          summary: "If your landlord ignores your requests, use the deposit scheme's dispute process. They cannot hold the deposit indefinitely.",
          steps: [
            "Send a formal letter requesting the deposit return (use our template below)",
            "Allow 14 days for a response",
            "If no response, raise a dispute directly with the deposit protection scheme",
            "The scheme will contact the landlord — they must respond or lose by default",
            "If the deposit is still not returned, apply to county court",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Non-return of tenancy deposit — [Property Address]

My tenancy ended on [End Date] and I have yet to receive my deposit of £[Amount], despite previous requests.

I am formally requesting the return of my full deposit within 14 days of this letter.

If I do not receive the deposit or a written response with justification for any proposed deductions by [Date + 14 days], I will raise a dispute with [Deposit Scheme Name] and, if necessary, make an application to the county court.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Housing Act 2004, Sections 212-215",
        },
      },
    },
  },
  {
    id: "repairs",
    title: "Landlord Won't Fix Repairs",
    description: "Your landlord is ignoring maintenance requests or refusing to repair",
    icon: "🔧",
    startNodeId: "r1",
    nodes: {
      r1: {
        id: "r1",
        question: "What type of repair issue are you dealing with?",
        info: "Your landlord is legally responsible for the structure, exterior, heating, water, gas, and electricity in your home.",
        options: [
          { label: "Heating / hot water not working", nextId: "r2" },
          { label: "Damp, mould, or leaks", nextId: "r_damp" },
          { label: "Broken structure (roof, walls, windows)", nextId: "r2" },
          { label: "Electrical or gas issues", nextId: "r_urgent" },
        ],
      },
      r_urgent: {
        id: "r_urgent",
        result: {
          title: "⚠️ Gas or electrical issues — this may be an emergency",
          summary: "Gas and electrical faults can be life-threatening. Your landlord is legally required to maintain gas and electrical safety. If there's an immediate danger, call the emergency services.",
          steps: [
            "If you smell gas: call the National Gas Emergency Service on 0800 111 999",
            "If there's a danger of electrocution: turn off the mains and call an electrician",
            "Notify your landlord immediately in writing (email or text for a record)",
            "Your landlord must have an annual Gas Safety Certificate — request a copy",
            "Electrical installations must be inspected every 5 years — request the EICR",
            "If they refuse, report to your local council's Environmental Health team",
            "Contact the HSE (Health and Safety Executive) for serious gas safety breaches",
          ],
          legalRef: "Gas Safety (Installation and Use) Regulations 1998; Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020",
        },
      },
      r_damp: {
        id: "r_damp",
        question: "How long have you been experiencing damp or mould?",
        options: [
          { label: "Less than 2 weeks", nextId: "r2" },
          { label: "2 weeks to 3 months", nextId: "r2" },
          { label: "Over 3 months", nextId: "r_damp_severe" },
        ],
      },
      r_damp_severe: {
        id: "r_damp_severe",
        result: {
          title: "Persistent damp/mould — escalate to Environmental Health",
          summary: "Under Awaab's Law (2023), landlords must address damp and mould hazards promptly. Persistent issues can be reported to your council, who can force repairs.",
          steps: [
            "Document everything: photos with dates, medical symptoms, previous complaints",
            "Send a formal written complaint to your landlord (use our template below)",
            "Allow 14 days for a response and action plan",
            "If ignored, contact your local council's Environmental Health department",
            "The council can issue an Improvement Notice forcing repairs within 28 days",
            "If the mould is affecting your health, visit your GP and get it documented",
            "You may be entitled to rent reduction or compensation — seek legal advice",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Damp and mould — [Property Address]

I am writing to formally report a persistent damp and mould issue at the above property which has been ongoing since [Date First Noticed].

I have previously raised this matter on [Previous Dates] but the issue has not been resolved. The affected areas include [describe locations].

Under Section 11 of the Landlord and Tenant Act 1985, you are responsible for maintaining the structure and exterior of the property in a condition that prevents damp. Under Awaab's Law, you are required to address hazards caused by damp and mould promptly.

I request a written response within 14 days outlining your plan to resolve this issue. If I do not receive a satisfactory response, I will report the matter to the local council's Environmental Health department.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Landlord and Tenant Act 1985, Section 11; Homes (Fitness for Human Habitation) Act 2018; Social Housing (Regulation) Act 2023 (Awaab's Law)",
        },
      },
      r2: {
        id: "r2",
        question: "Have you reported the issue to your landlord in writing?",
        info: "Always report repairs in writing (email or letter) so you have a record with dates.",
        options: [
          { label: "Yes, and they haven't responded", nextId: "r_no_response" },
          { label: "Yes, and they refused to fix it", nextId: "r_refused" },
          { label: "No, only verbally", nextId: "r_write_first" },
        ],
      },
      r_write_first: {
        id: "r_write_first",
        result: {
          title: "Put your repair request in writing first",
          summary: "Before escalating, you need a written record. This is essential if you later need to involve the council or court.",
          steps: [
            "Send a formal repair request by email or letter (use our template below)",
            "Include photos and describe the issue clearly",
            "State the date you first noticed the problem",
            "Give your landlord a reasonable time to respond (14 days for non-urgent, 24 hours for emergencies)",
            "Keep copies of everything you send",
            "Come back to RenterShield if they don't respond",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Repair request — [Property Address]

I am writing to report a repair issue at the above property.

Description of the issue: [Describe the problem in detail]
Date first noticed: [Date]
Location in property: [e.g. bathroom ceiling, kitchen wall]

Please arrange for this to be inspected and repaired within a reasonable timeframe. I am available for access on [suggest dates].

Under Section 11 of the Landlord and Tenant Act 1985, you are responsible for keeping the structure, exterior, and installations for heating, water, and sanitation in repair.

Please confirm receipt and your intended action plan.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Landlord and Tenant Act 1985, Section 11",
        },
      },
      r_no_response: {
        id: "r_no_response",
        result: {
          title: "No response from landlord — escalate to the council",
          summary: "If your landlord doesn't respond to written repair requests, your local council's Environmental Health team can inspect and force repairs.",
          steps: [
            "Send a final formal letter giving 14 days to respond",
            "Contact your local council's Environmental Health department",
            "They will inspect using the Housing Health and Safety Rating System (HHSRS)",
            "If hazards are found, they can serve an Improvement Notice on your landlord",
            "Your landlord must comply or face prosecution and fines",
            "You can also seek legal advice about withholding rent (get advice first — this is risky without guidance)",
          ],
          legalRef: "Housing Act 2004, Part 1; Landlord and Tenant Act 1985, Section 11",
        },
      },
      r_refused: {
        id: "r_refused",
        result: {
          title: "Landlord refused repairs — you have legal options",
          summary: "A landlord cannot simply refuse to make repairs they're responsible for. You can escalate through the council or courts.",
          steps: [
            "Keep the refusal in writing — if it was verbal, follow up by email confirming what was said",
            "Contact your local council's Environmental Health team to request an inspection",
            "You may be able to claim compensation for disrepair through the county court",
            "Consider contacting Shelter's helpline (0808 800 4444) for free legal advice",
            "If the property is unfit for habitation, you may have a claim under the Homes Act 2018",
          ],
          legalRef: "Homes (Fitness for Human Habitation) Act 2018; Housing Act 2004",
        },
      },
    },
  },
  {
    id: "eviction",
    title: "Unfair Eviction Notice",
    description: "You've received an eviction notice and aren't sure if it's valid",
    icon: "📋",
    startNodeId: "e1",
    nodes: {
      e1: {
        id: "e1",
        question: "What type of notice did you receive?",
        info: "In England, landlords must follow strict legal procedures to evict. The most common notices are Section 21 (no-fault) and Section 8 (fault-based).",
        options: [
          { label: "Section 21 (no reason given)", nextId: "e_s21" },
          { label: "Section 8 (specific reason given)", nextId: "e_s8" },
          { label: "No formal notice — verbal threat", nextId: "e_verbal" },
          { label: "I'm not sure what type", nextId: "e_identify" },
        ],
      },
      e_identify: {
        id: "e_identify",
        result: {
          title: "Identify your notice type",
          summary: "Check the document your landlord gave you. The notice type should be printed on the form. Here's how to tell the difference.",
          steps: [
            "Look for 'Form 6A' or 'Section 21' — this is a no-fault eviction notice",
            "Look for 'Section 8' and specific 'grounds' listed — this is a fault-based notice",
            "If it's just a letter or text message, it is NOT a valid eviction notice",
            "Take a photo of the notice and come back to RenterShield",
            "If unsure, call Shelter's free helpline: 0808 800 4444",
          ],
          legalRef: "Housing Act 1988, Sections 8 and 21",
        },
      },
      e_verbal: {
        id: "e_verbal",
        result: {
          title: "A verbal eviction threat is NOT a legal eviction",
          summary: "Your landlord cannot evict you verbally, by text, or by changing the locks. They must follow a legal process through the courts. If they try to force you out, that is illegal eviction.",
          steps: [
            "Do NOT leave your home — you are legally protected",
            "Ask your landlord to put their request in writing",
            "If they threaten you, harass you, or try to change locks, call the police",
            "Illegal eviction is a criminal offence under the Protection from Eviction Act 1977",
            "Contact your local council's tenancy relations officer",
            "Call Shelter's emergency helpline: 0808 800 4444",
          ],
          legalRef: "Protection from Eviction Act 1977; Housing Act 1988",
        },
      },
      e_s21: {
        id: "e_s21",
        question: "When did your tenancy start?",
        info: "Section 21 rules changed significantly in October 2015 and again in 2023-2024.",
        options: [
          { label: "Before October 2015", nextId: "e_s21_old" },
          { label: "October 2015 or later", nextId: "e_s21_new" },
        ],
      },
      e_s21_old: {
        id: "e_s21_old",
        result: {
          title: "Check the validity of your Section 21 notice",
          summary: "For older tenancies, the rules are slightly different but your landlord must still meet key requirements.",
          steps: [
            "Check the notice gives you at least 2 months' warning",
            "Check your deposit was protected (if not, the Section 21 is invalid)",
            "Check you received an Energy Performance Certificate (EPC)",
            "Check you received the 'How to Rent' guide",
            "If ANY of these requirements are missing, the notice may be invalid",
            "The notice must be served correctly — by hand or by post",
            "Do NOT leave before the notice expires — your landlord must get a court order",
            "Get free legal advice from Shelter: 0808 800 4444",
          ],
          legalRef: "Housing Act 1988, Section 21; Deregulation Act 2015",
        },
      },
      e_s21_new: {
        id: "e_s21_new",
        question: "Has your landlord given you all of these documents?",
        info: "For tenancies starting after Oct 2015, ALL of these must be provided or the Section 21 is invalid.",
        options: [
          { label: "Yes, I received all of them", nextId: "e_s21_valid" },
          { label: "No, some are missing", nextId: "e_s21_invalid" },
          { label: "I'm not sure", nextId: "e_s21_checklist" },
        ],
      },
      e_s21_checklist: {
        id: "e_s21_checklist",
        result: {
          title: "Check your Section 21 validity checklist",
          summary: "Your landlord must meet ALL of these requirements for the Section 21 to be valid. If any are missing, the notice is likely invalid.",
          steps: [
            "✅ Deposit protected in a government scheme AND prescribed info provided",
            "✅ Energy Performance Certificate (EPC) provided",
            "✅ Gas Safety Certificate provided (if gas appliances present)",
            "✅ 'How to Rent' guide provided (current version at time of tenancy)",
            "✅ Notice given on the correct Form 6A",
            "✅ At least 2 months' notice given",
            "✅ Notice served within 4 months of the last day of the fixed term (if applicable)",
            "If ANY item is missing, contact Shelter to challenge the notice",
          ],
          legalRef: "Housing Act 1988, Section 21; Deregulation Act 2015",
        },
      },
      e_s21_invalid: {
        id: "e_s21_invalid",
        result: {
          title: "Your Section 21 may be INVALID — do not leave",
          summary: "If your landlord has not provided all required documents, the Section 21 notice is likely invalid and cannot be enforced by the court.",
          steps: [
            "Do NOT leave your home",
            "Write to your landlord explaining the notice appears invalid (use template below)",
            "Contact Shelter's helpline for free legal advice: 0808 800 4444",
            "If your landlord applies to court, attend and raise the defence",
            "You may qualify for free legal aid — check gov.uk/legal-aid",
            "Keep all documents and correspondence as evidence",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Validity of Section 21 notice — [Property Address]

I have received your Section 21 notice dated [Date on Notice].

I believe this notice is invalid for the following reason(s):
- [e.g. I was not provided with a copy of the Energy Performance Certificate]
- [e.g. My deposit was not protected in a government-approved scheme]
- [e.g. I did not receive the 'How to Rent' guide]

Under the Deregulation Act 2015, a Section 21 notice cannot be validly served unless all prescribed requirements have been met.

I will not be vacating the property based on this notice. If you wish to proceed, I would advise you to seek legal advice.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing Act 1988, Section 21; Deregulation Act 2015",
        },
      },
      e_s21_valid: {
        id: "e_s21_valid",
        result: {
          title: "The notice may be valid — but you have rights",
          summary: "Even with a valid Section 21, your landlord must apply to the court for a possession order. You do not have to leave on the date the notice expires.",
          steps: [
            "You do NOT have to leave on the date stated on the notice",
            "Your landlord must apply to court for a possession order after the notice expires",
            "The court process typically takes 2-4 months",
            "You can negotiate a longer move-out period with your landlord",
            "Start looking for alternative accommodation — contact your council about housing options",
            "If you have children or are vulnerable, you may get priority housing assistance",
            "You can stay until bailiffs arrive with a warrant (this adds more weeks)",
          ],
          legalRef: "Housing Act 1988, Section 21; Civil Procedure Rules Part 55",
        },
      },
      e_s8: {
        id: "e_s8",
        question: "What ground(s) are listed on the Section 8 notice?",
        info: "Section 8 requires specific 'grounds' (reasons). Some are mandatory (court must grant eviction) and some are discretionary.",
        options: [
          { label: "Rent arrears (Ground 8, 10, or 11)", nextId: "e_s8_rent" },
          { label: "Anti-social behaviour (Ground 14)", nextId: "e_s8_asb" },
          { label: "Breach of tenancy (Ground 12)", nextId: "e_s8_breach" },
          { label: "Other / not sure", nextId: "e_s8_general" },
        ],
      },
      e_s8_rent: {
        id: "e_s8_rent",
        result: {
          title: "Section 8 for rent arrears — check the details",
          summary: "Ground 8 (mandatory) requires at least 2 months' arrears at both the date of notice AND the court hearing. If you can reduce arrears below 2 months before the hearing, Ground 8 fails.",
          steps: [
            "Check how much rent you actually owe — get bank statements",
            "Ground 8 requires 2 full months of arrears at the notice date AND at the court hearing date",
            "If you can pay enough to get below 2 months' arrears before the hearing, Ground 8 cannot be used",
            "Grounds 10 and 11 are discretionary — the judge can decide not to evict",
            "Apply for Universal Credit or Housing Benefit if you haven't already",
            "Contact your council's housing team about Discretionary Housing Payments",
            "Attend the court hearing — tenants who attend get better outcomes",
          ],
          legalRef: "Housing Act 1988, Schedule 2, Grounds 8, 10, 11",
        },
      },
      e_s8_asb: {
        id: "e_s8_asb",
        result: {
          title: "Section 8 for anti-social behaviour",
          summary: "Ground 14 is discretionary — the court will consider whether eviction is reasonable. Your landlord must provide evidence.",
          steps: [
            "Request full details of the alleged anti-social behaviour",
            "Gather your own evidence: witness statements, recordings, diary entries",
            "The burden of proof is on the landlord — they must evidence the behaviour",
            "The court will consider whether eviction is proportionate",
            "Seek legal advice immediately — contact Shelter or a local law centre",
            "If the allegations are false, prepare your defence carefully",
            "Attend the court hearing — this is crucial",
          ],
          legalRef: "Housing Act 1988, Schedule 2, Ground 14",
        },
      },
      e_s8_breach: {
        id: "e_s8_breach",
        result: {
          title: "Section 8 for tenancy breach",
          summary: "Ground 12 covers breach of tenancy terms. It's discretionary — the court considers whether eviction is reasonable and if the breach can be remedied.",
          steps: [
            "Read your tenancy agreement to understand what you allegedly breached",
            "If the breach can be corrected (e.g. removing a pet), do so immediately",
            "A court may not grant eviction if the breach is minor or remedied",
            "Prepare your case: explain any mitigating circumstances",
            "Get legal advice — contact Shelter or Citizens Advice",
            "Attend the hearing and present your defence",
          ],
          legalRef: "Housing Act 1988, Schedule 2, Ground 12",
        },
      },
      e_s8_general: {
        id: "e_s8_general",
        result: {
          title: "Get advice on your specific Section 8 grounds",
          summary: "Section 8 has 17 possible grounds with different rules. You need specific legal advice for your situation.",
          steps: [
            "Take a photo of the full notice, especially the grounds listed",
            "Call Shelter's free helpline: 0808 800 4444",
            "Contact your local Citizens Advice bureau",
            "Check if you qualify for legal aid at gov.uk/legal-aid",
            "Do NOT ignore the notice — respond within the timeframe stated",
            "Attend any court hearing — tenants who don't attend almost always lose",
          ],
          legalRef: "Housing Act 1988, Section 8 and Schedule 2",
        },
      },
    },
  },
  {
    id: "rent-increase",
    title: "Unfair Rent Increase",
    description: "Your landlord wants to raise the rent and you're not sure if it's fair or legal",
    icon: "📈",
    startNodeId: "ri1",
    nodes: {
      ri1: {
        id: "ri1",
        question: "Are you still in your fixed-term tenancy (e.g. a 12-month contract)?",
        info: "During a fixed term, your landlord generally cannot increase the rent unless there's a rent review clause in your contract.",
        options: [
          { label: "Yes, I'm still in my fixed term", nextId: "ri_fixed" },
          { label: "No, I'm on a rolling/periodic tenancy", nextId: "ri2" },
          { label: "I'm not sure", nextId: "ri_check_term" },
        ],
      },
      ri_fixed: {
        id: "ri_fixed",
        question: "Does your tenancy agreement contain a rent review clause?",
        info: "A rent review clause allows the landlord to increase rent during the fixed term according to specific terms.",
        options: [
          { label: "Yes, there is a rent review clause", nextId: "ri_review_clause" },
          { label: "No rent review clause", nextId: "ri_fixed_no_clause" },
          { label: "I'm not sure", nextId: "ri_check_agreement" },
        ],
      },
      ri_fixed_no_clause: {
        id: "ri_fixed_no_clause",
        result: {
          title: "Your landlord cannot increase rent during a fixed term without a clause",
          summary: "Without a rent review clause in your tenancy agreement, your landlord cannot legally increase your rent until the fixed term ends.",
          steps: [
            "Check your tenancy agreement to confirm there is no rent review clause",
            "Write to your landlord explaining the rent cannot be increased during the fixed term",
            "If they insist, contact Citizens Advice or Shelter for support",
            "Do NOT pay the higher amount — continue paying your agreed rent",
            "Keep records of all rent payments made",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Proposed rent increase — [Property Address]

I am writing regarding your proposed rent increase from £[Current Rent] to £[Proposed Rent].

My tenancy agreement is a fixed-term contract running until [End Date]. There is no rent review clause in the agreement, which means the rent cannot be increased during this period.

I will continue to pay the agreed rent of £[Current Rent] as per our contract. Any increase can only be discussed when the fixed term ends.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing Act 1988; common law of contract",
        },
      },
      ri_review_clause: {
        id: "ri_review_clause",
        result: {
          title: "Check if the rent review clause is being followed correctly",
          summary: "If your agreement has a rent review clause, the landlord must follow its exact terms — including notice periods and how the new rent is calculated.",
          steps: [
            "Read the rent review clause carefully — note the notice period and method of calculation",
            "Check that your landlord has followed the clause exactly",
            "If the process wasn't followed correctly, the increase may not be enforceable",
            "Compare the proposed rent with similar local properties on Rightmove or Zoopla",
            "If you believe the increase is excessive, you can challenge it at a First-tier Tribunal",
          ],
          legalRef: "Housing Act 1988, Section 13",
        },
      },
      ri_check_term: {
        id: "ri_check_term",
        result: {
          title: "Check your tenancy status first",
          summary: "You need to know if you're in a fixed term or on a periodic (rolling) tenancy, as this changes your landlord's options for increasing rent.",
          steps: [
            "Find your original tenancy agreement and check the start and end dates",
            "If the end date has passed and you haven't signed a new agreement, you're likely on a periodic tenancy",
            "If you're still within the dates, you're in a fixed term",
            "Come back to RenterShield once you know your tenancy status",
          ],
          legalRef: "Housing Act 1988",
        },
      },
      ri_check_agreement: {
        id: "ri_check_agreement",
        result: {
          title: "Check your tenancy agreement for a rent review clause",
          summary: "Look through your tenancy agreement for any section titled 'rent review', 'rent increase', or 'variation of rent'.",
          steps: [
            "Search your tenancy agreement for terms like 'rent review', 'increase', or 'variation'",
            "If found, note the exact wording — especially notice periods and how the new rent is calculated",
            "If no such clause exists, your landlord cannot increase rent during the fixed term",
            "Come back to RenterShield once you've checked",
          ],
          legalRef: "Housing Act 1988",
        },
      },
      ri2: {
        id: "ri2",
        question: "How is your landlord trying to increase the rent?",
        options: [
          { label: "Section 13 notice (formal form)", nextId: "ri_s13" },
          { label: "Just told me verbally or by text", nextId: "ri_informal" },
          { label: "New tenancy agreement with higher rent", nextId: "ri_new_agreement" },
        ],
      },
      ri_s13: {
        id: "ri_s13",
        question: "Do you think the proposed rent is above the market rate for your area?",
        info: "You can challenge a Section 13 increase at the First-tier Tribunal if it's above market rate. The Tribunal can only reduce the rent, never increase it above the proposed amount.",
        options: [
          { label: "Yes, it seems too high", nextId: "ri_s13_challenge" },
          { label: "No, it seems fair for the area", nextId: "ri_s13_fair" },
          { label: "I'm not sure", nextId: "ri_s13_check" },
        ],
      },
      ri_s13_challenge: {
        id: "ri_s13_challenge",
        result: {
          title: "Challenge the rent increase at the First-tier Tribunal",
          summary: "You can apply to the First-tier Tribunal (Property Chamber) to challenge a Section 13 rent increase. The Tribunal will set the rent at market rate — it can only reduce the proposed rent, never increase it.",
          steps: [
            "You must apply BEFORE the proposed increase takes effect",
            "Research comparable rents in your area using Rightmove, Zoopla, or OpenRent",
            "Print or screenshot evidence of similar properties at lower rents",
            "Apply to the First-tier Tribunal (Property Chamber) — the application is free",
            "The Tribunal will assess the market rent and set a fair amount",
            "Important: the Tribunal cannot increase the rent above the proposed amount",
            "Continue paying your current rent until the Tribunal makes a decision",
          ],
          legalRef: "Housing Act 1988, Section 13; First-tier Tribunal (Property Chamber)",
        },
      },
      ri_s13_fair: {
        id: "ri_s13_fair",
        result: {
          title: "The Section 13 increase appears fair",
          summary: "If the proposed rent is at or below market rate, challenging it at a Tribunal is unlikely to succeed. However, you can still try to negotiate.",
          steps: [
            "Consider negotiating a smaller increase or a phased increase with your landlord",
            "Check if your income qualifies you for Housing Benefit or Universal Credit housing costs",
            "If the increase causes genuine hardship, explain this to your landlord in writing",
            "Look into Discretionary Housing Payments from your council for short-term help",
            "The new rent takes effect on the date stated in the Section 13 notice",
          ],
          legalRef: "Housing Act 1988, Section 13",
        },
      },
      ri_s13_check: {
        id: "ri_s13_check",
        result: {
          title: "Research the market rate before deciding",
          summary: "Before accepting or challenging the increase, find out what similar properties rent for in your area.",
          steps: [
            "Search Rightmove, Zoopla, and OpenRent for similar properties in your area",
            "Match by: number of bedrooms, property type, condition, and location",
            "Look at 'to let' prices, not sold prices",
            "Check at least 5-10 comparable properties",
            "If the proposed rent is above the average, consider challenging at the Tribunal",
            "If it's in line with the market, consider negotiating a smaller increase",
          ],
          legalRef: "Housing Act 1988, Section 13",
        },
      },
      ri_informal: {
        id: "ri_informal",
        result: {
          title: "An informal rent increase is not legally binding",
          summary: "For a periodic tenancy, your landlord must use a Section 13 notice or you must agree to the increase. A verbal demand is not enforceable.",
          steps: [
            "You are NOT obliged to pay an increased rent without a proper Section 13 notice",
            "Continue paying your current agreed rent",
            "Write to your landlord explaining that any increase must follow the legal process",
            "If they serve a Section 13 notice, you then have the right to challenge it at the Tribunal",
            "Do NOT agree verbally — any agreement should be in writing",
            "Contact Shelter if your landlord pressures or threatens you",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Proposed rent increase — [Property Address]

Thank you for your message regarding a rent increase. However, for a periodic assured shorthold tenancy, any rent increase must be made using the proper legal procedure — specifically a Section 13 notice under the Housing Act 1988.

Until I receive a valid Section 13 notice, I will continue to pay the currently agreed rent of £[Current Rent].

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing Act 1988, Section 13",
        },
      },
      ri_new_agreement: {
        id: "ri_new_agreement",
        result: {
          title: "You don't have to sign a new agreement with a higher rent",
          summary: "Your landlord cannot force you to sign a new tenancy agreement. If your fixed term has ended, you automatically continue on a periodic tenancy at the same rent.",
          steps: [
            "You are NOT obliged to sign a new agreement",
            "Your tenancy continues on a periodic basis at the same rent when the fixed term ends",
            "If you do want to sign, negotiate the terms — including the rent amount",
            "If you don't sign, the landlord must use a Section 13 notice to increase rent",
            "Never sign under pressure — take time to read and consider any new agreement",
          ],
          legalRef: "Housing Act 1988, Section 5",
        },
      },
    },
  },
  {
    id: "harassment",
    title: "Landlord Harassment",
    description: "Your landlord is intimidating, threatening, or interfering with your home",
    icon: "🚨",
    startNodeId: "h1",
    nodes: {
      h1: {
        id: "h1",
        question: "What kind of behaviour is your landlord engaging in?",
        info: "Landlord harassment is a criminal offence. It includes any behaviour designed to force you out or interfere with your right to live peacefully.",
        options: [
          { label: "Entering without permission", nextId: "h_entry" },
          { label: "Threats, intimidation, or abuse", nextId: "h_threats" },
          { label: "Cutting off utilities or changing locks", nextId: "h_utilities" },
          { label: "Constant unwanted contact or visits", nextId: "h_contact" },
        ],
      },
      h_entry: {
        id: "h_entry",
        result: {
          title: "Your landlord must give 24 hours' notice and get your permission",
          summary: "Your landlord has no automatic right to enter your home. They must give at least 24 hours' written notice and can only enter at a reasonable time with your consent (except in genuine emergencies).",
          steps: [
            "Tell your landlord in writing that they must give 24 hours' notice before visiting",
            "You can refuse entry if proper notice isn't given — it's your right",
            "Keep a log of every unauthorised entry: date, time, what happened",
            "If they enter without permission, this could be trespass or harassment",
            "If it continues, report it to the police (non-emergency: 101)",
            "Contact your local council's tenancy relations officer",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Unauthorised entry — [Property Address]

I am writing because you have entered the property without giving proper notice on [date(s)].

Under common law and the terms of my tenancy, you are required to give at least 24 hours' written notice before any visit, and you may only enter at a reasonable time with my consent.

Entry without permission constitutes trespass and may amount to harassment under the Protection from Eviction Act 1977.

Please ensure all future visits are arranged with proper notice. I am happy to accommodate reasonable access requests.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Protection from Eviction Act 1977; Landlord and Tenant Act 1985",
        },
      },
      h_threats: {
        id: "h_threats",
        result: {
          title: "Threats and intimidation are criminal offences",
          summary: "If your landlord is threatening, abusing, or intimidating you, this is a criminal offence under the Protection from Eviction Act 1977. You should report this immediately.",
          steps: [
            "Keep a detailed log of every incident: date, time, what was said, any witnesses",
            "Save all texts, emails, voicemails, and letters as evidence",
            "If you feel in immediate danger, call the police on 999",
            "For non-emergencies, report to the police on 101",
            "Contact your local council's Tenancy Relations Officer — they can prosecute",
            "Call Shelter's emergency line: 0808 800 4444",
            "Consider applying for a non-molestation order or injunction through the court",
          ],
          legalRef: "Protection from Eviction Act 1977, Section 1; Criminal Justice and Public Order Act 1994",
        },
      },
      h_utilities: {
        id: "h_utilities",
        result: {
          title: "Cutting off utilities or changing locks is ILLEGAL",
          summary: "If your landlord cuts off gas, electricity, water, or changes the locks to force you out, this is illegal eviction — a criminal offence. Call the police and your council immediately.",
          steps: [
            "This is a criminal offence — call the police on 999 if locked out",
            "Contact your local council's emergency housing team immediately",
            "The council's Tenancy Relations Officer can take criminal action against your landlord",
            "Document everything: photos of changed locks, utility meters, timestamps",
            "If locked out, do NOT break back in — get council/police assistance",
            "You may be entitled to emergency accommodation from the council",
            "You can claim compensation for illegal eviction through the county court",
          ],
          legalRef: "Protection from Eviction Act 1977, Sections 1 and 3",
        },
      },
      h_contact: {
        id: "h_contact",
        result: {
          title: "Excessive contact can amount to harassment",
          summary: "If your landlord is contacting you excessively, visiting unannounced, or making your life difficult to pressure you to leave, this is harassment and is illegal.",
          steps: [
            "Send a written request asking them to limit contact to reasonable matters only",
            "Keep a log of every unwanted visit, call, text, or message with dates and times",
            "Set clear boundaries: specify preferred contact methods and reasonable hours",
            "If the behaviour continues, report to your local council's Tenancy Relations Officer",
            "You can also report persistent harassment to the police",
            "Consider seeking an injunction through the county court if necessary",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Excessive contact and visits — [Property Address]

I am writing to request that you reduce the frequency of your visits and contact regarding the above property.

I have logged [number] visits/contacts in the past [time period], which I consider excessive and unreasonable. This behaviour is causing me distress and may constitute harassment under the Protection from Eviction Act 1977.

Going forward, please limit contact to genuine tenancy matters and provide at least 24 hours' written notice before any visit. My preferred contact method is [email/post].

If this behaviour continues, I will report the matter to the local council's Tenancy Relations Officer.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Protection from Eviction Act 1977; Protection from Harassment Act 1997",
        },
      },
    },
  },
  {
    id: "hmo",
    title: "HMO & Licensing Issues",
    description: "Problems with shared housing, overcrowding, or unlicensed properties",
    icon: "🏠",
    startNodeId: "hmo1",
    nodes: {
      hmo1: {
        id: "hmo1",
        question: "How many people from different households share your property?",
        info: "A House in Multiple Occupation (HMO) is a property shared by 3 or more tenants from 2 or more households. Large HMOs (5+ people) need a mandatory licence.",
        options: [
          { label: "3-4 people from different households", nextId: "hmo_small" },
          { label: "5 or more people from different households", nextId: "hmo_large" },
          { label: "I live alone or with family only", nextId: "hmo_not" },
        ],
      },
      hmo_not: {
        id: "hmo_not",
        result: {
          title: "Your property probably isn't an HMO",
          summary: "If you live alone or only with family members, your property is unlikely to be classified as an HMO. However, you may still have other issues we can help with.",
          steps: [
            "Go back to the homepage and select the issue that best matches your situation",
            "If you're unsure about your tenancy type, contact Citizens Advice",
          ],
          legalRef: "Housing Act 2004, Section 254",
        },
      },
      hmo_small: {
        id: "hmo_small",
        question: "What issue are you experiencing?",
        options: [
          { label: "Fire safety concerns", nextId: "hmo_fire" },
          { label: "Overcrowding", nextId: "hmo_overcrowding" },
          { label: "I think it should be licensed but isn't", nextId: "hmo_licence_check" },
        ],
      },
      hmo_large: {
        id: "hmo_large",
        question: "Is the property licensed as an HMO?",
        info: "Properties with 5+ occupants from 2+ households MUST have a mandatory HMO licence. Operating without one is a criminal offence.",
        options: [
          { label: "Yes, it's licensed", nextId: "hmo_licensed_issues" },
          { label: "No, or I don't know", nextId: "hmo_unlicensed" },
        ],
      },
      hmo_unlicensed: {
        id: "hmo_unlicensed",
        result: {
          title: "Your HMO may be unlicensed — you could claim up to 12 months' rent back",
          summary: "If your landlord is operating a licensable HMO without a licence, they are committing a criminal offence. You may be entitled to a Rent Repayment Order of up to 12 months' rent.",
          steps: [
            "Check with your local council whether the property has an HMO licence",
            "You can search your council's public HMO licence register online",
            "If unlicensed, the landlord faces an unlimited fine",
            "Apply to the First-tier Tribunal for a Rent Repayment Order (up to 12 months' rent)",
            "The landlord also CANNOT use a Section 21 notice while operating without a licence",
            "Report the unlicensed HMO to your local council's housing team",
            "Contact Shelter for help with the Rent Repayment Order application",
          ],
          legalRef: "Housing Act 2004, Sections 72, 73, 96; Housing and Planning Act 2016",
        },
      },
      hmo_licensed_issues: {
        id: "hmo_licensed_issues",
        question: "What issue are you experiencing?",
        options: [
          { label: "Fire safety concerns", nextId: "hmo_fire" },
          { label: "Overcrowding", nextId: "hmo_overcrowding" },
          { label: "Licence conditions not being met", nextId: "hmo_conditions" },
        ],
      },
      hmo_fire: {
        id: "hmo_fire",
        result: {
          title: "Fire safety in HMOs — your landlord has strict obligations",
          summary: "HMOs must meet enhanced fire safety standards including fire doors, alarms, and escape routes. Failures can be reported to the council and fire service.",
          steps: [
            "Check for working smoke alarms on every floor and heat detectors in kitchens",
            "Fire doors should be fitted to all bedrooms and kitchens (30-minute rated)",
            "Escape routes must be clear and well-lit at all times",
            "Fire extinguishers or fire blankets should be provided in communal areas",
            "If any of these are missing, report to your local council's housing team",
            "You can also contact your local fire service for a free safety inspection",
            "In immediate danger? Call 999",
          ],
          legalRef: "Housing Act 2004; Management of Houses in Multiple Occupation (England) Regulations 2006; Regulatory Reform (Fire Safety) Order 2005",
        },
      },
      hmo_overcrowding: {
        id: "hmo_overcrowding",
        result: {
          title: "Overcrowding in your HMO",
          summary: "HMO licences specify the maximum number of occupants. If the property is overcrowded, the landlord is breaching their licence conditions.",
          steps: [
            "Check the HMO licence (should be displayed in the property) for the max occupancy",
            "Count the actual number of occupants — include everyone living there",
            "Minimum room sizes: 10.22m² for 2 adults, 6.51m² for 1 adult",
            "If overcrowded, report to your local council's housing enforcement team",
            "The council can prosecute the landlord and impose fines up to £30,000",
            "You may also be able to claim a Rent Repayment Order",
          ],
          legalRef: "Housing Act 2004, Section 67; Licensing of Houses in Multiple Occupation (Mandatory Conditions of Licences) (England) Regulations 2018",
        },
      },
      hmo_conditions: {
        id: "hmo_conditions",
        result: {
          title: "Licence conditions not being met",
          summary: "HMO licences come with mandatory conditions. If your landlord isn't meeting them, report this to the council — it can lead to prosecution or licence revocation.",
          steps: [
            "Request a copy of the HMO licence from your landlord (they must display it)",
            "Common mandatory conditions include: annual gas safety checks, working smoke alarms, adequate waste disposal, and maximum occupancy limits",
            "Document which conditions are not being met with photos and dates",
            "Report breaches to your local council's housing team",
            "The council can prosecute, fine, or revoke the licence",
            "If the licence is revoked, you may be entitled to a Rent Repayment Order",
          ],
          legalRef: "Housing Act 2004, Sections 67, 72; Schedule 4",
        },
      },
      hmo_licence_check: {
        id: "hmo_licence_check",
        result: {
          title: "Check if your property needs an HMO licence",
          summary: "Some councils operate additional licensing schemes that cover smaller HMOs (3-4 people). Check with your local council.",
          steps: [
            "Search your council's website for 'additional HMO licensing' or 'selective licensing'",
            "Many councils require licences for all HMOs, not just those with 5+ people",
            "Contact your council's private sector housing team to check",
            "If a licence is required but not held, the landlord faces criminal prosecution",
            "You may be entitled to a Rent Repayment Order of up to 12 months' rent",
            "The landlord cannot serve a valid Section 21 notice without a required licence",
          ],
          legalRef: "Housing Act 2004, Sections 56, 72; Housing and Planning Act 2016",
        },
      },
    },
  },
];
