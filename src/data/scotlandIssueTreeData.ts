import { IssueTree } from "./issueTreeData";

export const scotlandIssueTrees: IssueTree[] = [
  {
    id: "deposit-scotland",
    title: "Deposit Not Returned",
    description: "Your landlord hasn't returned your deposit after moving out",
    icon: "💷",
    startNodeId: "sd1",
    nodes: {
      sd1: {
        id: "sd1",
        question: "Was your deposit placed in an approved tenancy deposit scheme?",
        info: "In Scotland, landlords must protect deposits in one of three approved schemes: SafeDeposits Scotland, Letting Protection Service Scotland, or mydeposits Scotland — within 30 working days of the tenancy start.",
        options: [
          { label: "Yes", nextId: "sd2" },
          { label: "No", nextId: "sd_unprotected" },
          { label: "I don't know", nextId: "sd_check" },
        ],
      },
      sd_check: {
        id: "sd_check",
        result: {
          title: "Check your deposit protection status first",
          summary: "Contact all three Scottish deposit schemes to find out if your deposit was protected.",
          steps: [
            "Contact SafeDeposits Scotland at safedepositsscotland.com",
            "Contact Letting Protection Service Scotland at lettingprotectionscotland.com",
            "Contact mydeposits Scotland at mydepositsscotland.co.uk",
            "Provide your name, previous address, and tenancy start date",
            "Come back to RenterShield once you have your answer",
          ],
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
        },
      },
      sd_unprotected: {
        id: "sd_unprotected",
        result: {
          title: "Your deposit was not protected — you may claim up to 3x",
          summary: "If your landlord failed to protect your deposit within 30 working days, you can apply to the First-tier Tribunal for Scotland for an order of up to 3 times the deposit amount.",
          steps: [
            "Write to your landlord requesting the deposit return (use template below)",
            "Give them 14 days to respond",
            "If no response, apply to the First-tier Tribunal for Scotland (Housing and Property Chamber)",
            "The Tribunal can award up to 3x the deposit amount as a sanction",
            "Applications to the Tribunal are free",
            "You can apply even if the tenancy is still ongoing",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Return of tenancy deposit — [Property Address]

I am writing regarding the deposit of £[Amount] paid at the start of my tenancy on [Start Date].

I have confirmed that this deposit was not protected in an approved tenancy deposit scheme within 30 working days as required under the Tenancy Deposit Schemes (Scotland) Regulations 2011.

Under the Regulations, failure to comply entitles me to apply to the First-tier Tribunal for an order of up to 3 times the deposit amount.

I am requesting the full return of my deposit within 14 days. If I do not receive payment by [Date + 14 days], I will make an application to the Tribunal.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011; Housing (Scotland) Act 2006, Section 120",
        },
      },
      sd2: {
        id: "sd2",
        question: "How long ago did your tenancy end?",
        options: [
          { label: "Less than 30 working days", nextId: "sd_wait" },
          { label: "More than 30 working days", nextId: "sd3" },
        ],
      },
      sd_wait: {
        id: "sd_wait",
        result: {
          title: "Your landlord still has time to return the deposit",
          summary: "The deposit scheme should return your deposit within a reasonable period after the tenancy ends, once any deductions are agreed.",
          steps: [
            "Contact the deposit scheme to check the status of your deposit",
            "If your landlord proposes deductions, you can accept or dispute them",
            "The scheme offers free dispute resolution",
            "Come back to RenterShield if the deposit isn't returned in time",
          ],
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
        },
      },
      sd3: {
        id: "sd3",
        question: "Has your landlord proposed any deductions?",
        options: [
          { label: "Yes, and they seem unfair", nextId: "sd_dispute" },
          { label: "Yes, but they're reasonable", nextId: "sd_partial" },
          { label: "No, they're ignoring me", nextId: "sd_ignore" },
        ],
      },
      sd_dispute: {
        id: "sd_dispute",
        result: {
          title: "Dispute the deductions through the deposit scheme",
          summary: "All three Scottish deposit schemes offer free independent adjudication. The burden of proof for deductions is on the landlord.",
          steps: [
            "Gather evidence: inventory, photos, communications",
            "Raise a formal dispute with the deposit scheme (free)",
            "Both parties submit evidence",
            "An independent adjudicator decides",
            "If you disagree, you can still apply to the First-tier Tribunal",
          ],
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
        },
      },
      sd_partial: {
        id: "sd_partial",
        result: {
          title: "Accept the deductions and request the balance",
          summary: "If deductions are fair, agree in writing and request the balance through the deposit scheme.",
          steps: [
            "Confirm agreement to deductions in writing",
            "Request the balance through the scheme",
            "Keep all written agreements for your records",
          ],
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
        },
      },
      sd_ignore: {
        id: "sd_ignore",
        result: {
          title: "Landlord not responding — escalate",
          summary: "If your landlord ignores your requests, use the deposit scheme's dispute process or apply to the Tribunal.",
          steps: [
            "Send a formal letter requesting the deposit return (use template below)",
            "Allow 14 days for a response",
            "Raise a dispute with the deposit scheme",
            "If unresolved, apply to the First-tier Tribunal for Scotland (free)",
            "Contact Shelter Scotland for advice: 0808 800 4444",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Non-return of tenancy deposit — [Property Address]

My tenancy ended on [End Date] and I have yet to receive my deposit of £[Amount].

I am formally requesting the full return within 14 days.

If I do not receive the deposit by [Date + 14 days], I will raise a dispute with [Deposit Scheme] and, if necessary, apply to the First-tier Tribunal for Scotland.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Tenancy Deposit Schemes (Scotland) Regulations 2011",
        },
      },
    },
  },
  {
    id: "repairs-scotland",
    title: "Landlord Won't Fix Repairs",
    description: "Your landlord is ignoring maintenance requests or refusing to repair",
    icon: "🔧",
    startNodeId: "sr1",
    nodes: {
      sr1: {
        id: "sr1",
        question: "What type of repair issue are you dealing with?",
        info: "Under the Housing (Scotland) Act 2006, your landlord must ensure the property meets the 'repairing standard' — including structure, installations, fixtures, and furnishings.",
        options: [
          { label: "Heating / hot water not working", nextId: "sr2" },
          { label: "Damp, mould, or leaks", nextId: "sr_damp" },
          { label: "Broken structure (roof, walls, windows)", nextId: "sr2" },
          { label: "Electrical or gas issues", nextId: "sr_urgent" },
        ],
      },
      sr_urgent: {
        id: "sr_urgent",
        result: {
          title: "⚠️ Gas or electrical issues — this may be an emergency",
          summary: "Gas and electrical faults can be life-threatening. Your landlord must maintain gas and electrical safety.",
          steps: [
            "If you smell gas: call the National Gas Emergency Service on 0800 111 999",
            "If there's electrical danger: turn off the mains",
            "Notify your landlord immediately in writing",
            "Your landlord must have an annual Gas Safety Certificate",
            "Electrical installations must be inspected every 5 years (EICR)",
            "If they refuse, apply to the First-tier Tribunal for Scotland (Housing and Property Chamber)",
            "You can also report to your local council's Environmental Health team",
          ],
          legalRef: "Housing (Scotland) Act 2006, Sections 13-14; Gas Safety (Installation and Use) Regulations 1998",
        },
      },
      sr_damp: {
        id: "sr_damp",
        question: "How long have you been experiencing damp or mould?",
        options: [
          { label: "Less than 2 weeks", nextId: "sr2" },
          { label: "2 weeks to 3 months", nextId: "sr2" },
          { label: "Over 3 months", nextId: "sr_damp_severe" },
        ],
      },
      sr_damp_severe: {
        id: "sr_damp_severe",
        result: {
          title: "Persistent damp/mould — apply to the Tribunal",
          summary: "Under the Housing (Scotland) Act 2006, your landlord must meet the 'repairing standard'. Persistent damp and mould likely means they're in breach.",
          steps: [
            "Document everything: photos with dates, medical symptoms, previous complaints",
            "Send a formal written complaint to your landlord",
            "Allow a reasonable time for response (14 days)",
            "If ignored, apply to the First-tier Tribunal for Scotland (Housing and Property Chamber)",
            "The Tribunal can issue a Repairing Standard Enforcement Order (RSEO)",
            "Your landlord must comply or face penalties",
            "If affecting your health, visit your GP and get documentation",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Damp and mould — [Property Address]

I am writing to formally report persistent damp and mould at the above property, ongoing since [Date First Noticed].

Under the Housing (Scotland) Act 2006, you are required to ensure the property meets the repairing standard, which includes keeping it free from rising or penetrating damp.

I request a written response within 14 days. If I do not receive a satisfactory response, I will apply to the First-tier Tribunal for Scotland for a Repairing Standard Enforcement Order.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing (Scotland) Act 2006, Sections 13-14; Repairing Standard",
        },
      },
      sr2: {
        id: "sr2",
        question: "Have you reported the issue to your landlord in writing?",
        info: "Always report repairs in writing (email or letter) to create a dated record.",
        options: [
          { label: "Yes, and they haven't responded", nextId: "sr_no_response" },
          { label: "Yes, and they refused", nextId: "sr_refused" },
          { label: "No, only verbally", nextId: "sr_write_first" },
        ],
      },
      sr_write_first: {
        id: "sr_write_first",
        result: {
          title: "Put your repair request in writing first",
          summary: "Before applying to the Tribunal, you must notify your landlord in writing.",
          steps: [
            "Send a formal repair request by email or letter (use template below)",
            "Include photos and describe the issue clearly",
            "Give your landlord a reasonable time to respond (14 days for non-urgent, 24 hours for emergencies)",
            "Keep copies of everything",
            "If they don't respond, you can then apply to the First-tier Tribunal",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Repair request — [Property Address]

I am writing to report a repair issue at the above property.

Description: [Describe the problem]
Date first noticed: [Date]
Location: [e.g. bathroom ceiling]

Under the Housing (Scotland) Act 2006, you are required to ensure the property meets the repairing standard.

Please arrange for inspection and repair within a reasonable timeframe.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Housing (Scotland) Act 2006, Sections 13-14",
        },
      },
      sr_no_response: {
        id: "sr_no_response",
        result: {
          title: "No response — apply to the First-tier Tribunal",
          summary: "In Scotland, the First-tier Tribunal (Housing and Property Chamber) handles repair disputes. You can apply directly — no need to go through the council first.",
          steps: [
            "Apply to the First-tier Tribunal for Scotland (Housing and Property Chamber)",
            "Applications are free — apply online at housingandpropertychamber.scot",
            "The Tribunal can inspect the property and issue a Repairing Standard Enforcement Order",
            "Your landlord must comply with the RSEO or face penalties",
            "You can also report to your local council's Environmental Health team",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 2006, Sections 22-26",
        },
      },
      sr_refused: {
        id: "sr_refused",
        result: {
          title: "Landlord refused — you have strong legal options in Scotland",
          summary: "Scotland's repairing standard gives tenants a direct route to the Tribunal to force repairs.",
          steps: [
            "Keep the refusal in writing — if verbal, confirm by email",
            "Apply to the First-tier Tribunal for Scotland (free)",
            "The Tribunal will inspect and can issue a Repairing Standard Enforcement Order",
            "If the landlord doesn't comply, the Tribunal can authorise the council to carry out repairs",
            "Contact Shelter Scotland: 0808 800 4444",
            "Check your landlord is registered with the Scottish Landlord Register",
          ],
          legalRef: "Housing (Scotland) Act 2006, Sections 22-26",
        },
      },
    },
  },
  {
    id: "eviction-scotland",
    title: "Unfair Eviction Notice",
    description: "You've received an eviction notice and aren't sure if it's valid",
    icon: "📋",
    startNodeId: "se1",
    nodes: {
      se1: {
        id: "se1",
        question: "What type of tenancy do you have?",
        info: "Since December 2017, most new private tenancies in Scotland are Private Residential Tenancies (PRTs) under the Private Housing (Tenancies) (Scotland) Act 2016. There are no 'no-fault' evictions — landlords must use one of 18 specific grounds.",
        options: [
          { label: "Private Residential Tenancy (PRT) — started after Dec 2017", nextId: "se_prt" },
          { label: "Short Assured Tenancy (SAT) — started before Dec 2017", nextId: "se_sat" },
          { label: "I'm not sure", nextId: "se_identify" },
          { label: "No formal notice — verbal threat", nextId: "se_verbal" },
        ],
      },
      se_identify: {
        id: "se_identify",
        result: {
          title: "Identify your tenancy type",
          summary: "If your tenancy started after 1 December 2017, you almost certainly have a Private Residential Tenancy (PRT). Earlier tenancies are likely Short Assured Tenancies (SATs).",
          steps: [
            "Check your tenancy agreement for the start date",
            "If it started after 1 December 2017, you have a PRT",
            "If before that date, you likely have a SAT (or possibly an Assured Tenancy)",
            "PRTs have stronger protections — there is no 'no-fault' eviction",
            "Contact Shelter Scotland if unsure: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016",
        },
      },
      se_verbal: {
        id: "se_verbal",
        result: {
          title: "A verbal eviction threat is NOT a legal eviction",
          summary: "Your landlord cannot evict you verbally, by text, or by changing locks. They must follow the legal process through the Tribunal.",
          steps: [
            "Do NOT leave your home — you are legally protected",
            "In Scotland, your landlord must serve a formal Notice to Leave",
            "They must then apply to the First-tier Tribunal for an eviction order",
            "If they try to force you out, call the police — illegal eviction is a criminal offence",
            "Contact your local council's Private Rented Housing Panel",
            "Call Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016; Housing (Scotland) Act 1988",
        },
      },
      se_prt: {
        id: "se_prt",
        question: "What ground has your landlord given for eviction?",
        info: "Under a PRT, there are 18 possible grounds for eviction. There is NO no-fault eviction in Scotland. Your landlord must prove a specific ground.",
        options: [
          { label: "Landlord wants to sell", nextId: "se_prt_sell" },
          { label: "Landlord or family wants to move in", nextId: "se_prt_movein" },
          { label: "Rent arrears", nextId: "se_prt_rent" },
          { label: "Other ground / not sure", nextId: "se_prt_general" },
        ],
      },
      se_prt_sell: {
        id: "se_prt_sell",
        result: {
          title: "Ground 1: Landlord intends to sell — check the requirements",
          summary: "Your landlord must give at least 84 days' notice (about 3 months) and genuinely intend to sell. The Tribunal must be satisfied the ground is met.",
          steps: [
            "Check the Notice to Leave gives at least 84 days' notice",
            "The landlord must provide evidence they genuinely intend to sell (e.g. estate agent valuation)",
            "The Tribunal must be satisfied — the landlord applies to the First-tier Tribunal",
            "You do NOT have to leave until the Tribunal grants an eviction order",
            "If the landlord doesn't sell within 3 months, you may have grounds to challenge",
            "Contact Shelter Scotland for advice: 0808 800 4444",
            "Check if you're entitled to help from your council with rehousing",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Schedule 3, Ground 1",
        },
      },
      se_prt_movein: {
        id: "se_prt_movein",
        result: {
          title: "Ground 4: Landlord or family want to live in the property",
          summary: "The landlord must give at least 84 days' notice and genuinely intend to use the property as their (or a family member's) home.",
          steps: [
            "Check the notice gives at least 84 days (3 months)",
            "The landlord must provide evidence of genuine intent to move in",
            "The Tribunal decides — you don't have to leave until an order is granted",
            "If the landlord doesn't move in within 3 months, you may be able to challenge",
            "Seek advice from Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Schedule 3, Ground 4",
        },
      },
      se_prt_rent: {
        id: "se_prt_rent",
        result: {
          title: "Ground 12: Rent arrears",
          summary: "For rent arrears, the landlord must give at least 28 days' notice. The Tribunal considers your circumstances and whether you can clear arrears.",
          steps: [
            "Check how much rent you actually owe — get bank statements",
            "The notice period is 28 days for rent arrears",
            "If arrears are over 3 months' worth, the Tribunal must grant eviction (mandatory ground)",
            "If less, the Tribunal has discretion — paying down arrears strengthens your position",
            "Apply for Universal Credit or Housing Benefit if eligible",
            "Contact your council about Discretionary Housing Payments",
            "Attend the Tribunal hearing — tenants who attend get better outcomes",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Schedule 3, Ground 12",
        },
      },
      se_prt_general: {
        id: "se_prt_general",
        result: {
          title: "Get advice on your specific eviction ground",
          summary: "There are 18 eviction grounds for PRTs, each with different rules and notice periods. You need specific advice for your situation.",
          steps: [
            "Check the Notice to Leave — it must specify the ground(s) being used",
            "Notice periods vary: 28 days for tenant conduct grounds, 84 days for landlord circumstance grounds",
            "Your landlord must apply to the First-tier Tribunal — you don't have to leave until they get an order",
            "Some grounds are mandatory (Tribunal must grant if proven), others are discretionary",
            "Call Shelter Scotland: 0808 800 4444",
            "Contact Citizens Advice Scotland",
            "Check if you qualify for legal aid at scotcourts.gov.uk",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Part 5; Schedule 3",
        },
      },
      se_sat: {
        id: "se_sat",
        question: "What type of notice did you receive?",
        info: "For Short Assured Tenancies (pre-December 2017), the eviction process uses the Housing (Scotland) Act 1988. Notices are served under Section 33 (no-fault) or Section 18 (fault-based).",
        options: [
          { label: "Section 33 (AT5) — no reason given", nextId: "se_sat_s33" },
          { label: "Section 18 — specific ground given", nextId: "se_sat_s18" },
          { label: "I'm not sure", nextId: "se_sat_check" },
        ],
      },
      se_sat_s33: {
        id: "se_sat_s33",
        result: {
          title: "Section 33 notice — check validity",
          summary: "For a Short Assured Tenancy, the landlord can serve a Section 33 notice (Form AT5) giving at least 40 days' notice after the fixed term ends.",
          steps: [
            "Check the notice gives at least 40 days' warning",
            "The notice can only take effect after the fixed term has ended",
            "Check you were given a valid AT5 form at the start of your tenancy",
            "If the AT5 wasn't served before the tenancy started, it may be an Assured Tenancy instead (much stronger protections)",
            "Your landlord must apply to the First-tier Tribunal for a possession order",
            "You don't have to leave until the Tribunal grants an order",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988, Sections 18, 33",
        },
      },
      se_sat_s18: {
        id: "se_sat_s18",
        result: {
          title: "Section 18 notice — fault-based eviction",
          summary: "Your landlord must specify grounds under Schedule 5 of the 1988 Act. Many grounds are discretionary.",
          steps: [
            "Check which ground(s) are listed in the notice",
            "The notice period depends on the ground — typically 2 weeks to 2 months",
            "Your landlord must apply to the First-tier Tribunal for a possession order",
            "Some grounds are mandatory, others discretionary — get advice on your specific ground",
            "Attend the Tribunal hearing",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988, Section 18; Schedule 5",
        },
      },
      se_sat_check: {
        id: "se_sat_check",
        result: {
          title: "Identify your notice type",
          summary: "Check the documents your landlord gave you to identify the notice type.",
          steps: [
            "Look for 'Section 33' or 'Form AT5' — this is a no-fault notice for SATs",
            "Look for 'Section 18' with specific 'grounds' — this is a fault-based notice",
            "If it's just a letter or text, it is NOT a valid notice",
            "Take a photo and contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988",
        },
      },
    },
  },
  {
    id: "rent-increase-scotland",
    title: "Unfair Rent Increase",
    description: "Your landlord wants to raise the rent and you're not sure if it's fair or legal",
    icon: "📈",
    startNodeId: "sri1",
    nodes: {
      sri1: {
        id: "sri1",
        question: "What type of tenancy do you have?",
        info: "Rent increase rules differ depending on whether you have a Private Residential Tenancy (PRT, after Dec 2017) or a Short Assured Tenancy (before Dec 2017).",
        options: [
          { label: "PRT (started after Dec 2017)", nextId: "sri_prt" },
          { label: "SAT (started before Dec 2017)", nextId: "sri_sat" },
          { label: "I'm not sure", nextId: "sri_check" },
        ],
      },
      sri_check: {
        id: "sri_check",
        result: {
          title: "Check your tenancy type first",
          summary: "If your tenancy started after 1 December 2017, you have a PRT. Earlier tenancies are likely SATs.",
          steps: [
            "Check your tenancy agreement for the start date",
            "PRTs have specific rent increase protections",
            "Come back to RenterShield once you know your tenancy type",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016",
        },
      },
      sri_prt: {
        id: "sri_prt",
        question: "How much notice has your landlord given for the rent increase?",
        info: "For a PRT, your landlord must give at least 3 months' written notice of a rent increase, and can only increase rent once every 12 months.",
        options: [
          { label: "3 months or more", nextId: "sri_prt_valid" },
          { label: "Less than 3 months", nextId: "sri_prt_short" },
          { label: "No formal notice — just verbal", nextId: "sri_prt_informal" },
        ],
      },
      sri_prt_short: {
        id: "sri_prt_short",
        result: {
          title: "Insufficient notice — the increase is not valid",
          summary: "Your landlord must give at least 3 months' notice for a rent increase under a PRT. Less notice makes the increase invalid.",
          steps: [
            "Write to your landlord explaining the notice is insufficient",
            "Continue paying your current rent",
            "The increase cannot take effect until 3 months after valid notice is given",
            "Contact Shelter Scotland if pressured: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Section 22",
        },
      },
      sri_prt_informal: {
        id: "sri_prt_informal",
        result: {
          title: "A verbal rent increase is not valid",
          summary: "Under a PRT, rent increases must be made using the proper form (prescribed notice). A verbal or text demand is not enforceable.",
          steps: [
            "You are NOT obliged to pay a higher rent without formal written notice",
            "Continue paying your current rent",
            "Write to your landlord explaining the legal process must be followed",
            "The increase must use the prescribed form and give 3 months' notice",
            "Contact Shelter Scotland if pressured: 0808 800 4444",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Section 22",
        },
      },
      sri_prt_valid: {
        id: "sri_prt_valid",
        question: "Do you think the proposed rent is above the open market rate?",
        info: "You can refer the increase to a Rent Officer at Rent Service Scotland, who will determine the open market rent. They can only reduce the proposed rent, not increase it.",
        options: [
          { label: "Yes, it seems too high", nextId: "sri_prt_challenge" },
          { label: "No, it seems fair", nextId: "sri_prt_fair" },
          { label: "I'm not sure", nextId: "sri_prt_research" },
        ],
      },
      sri_prt_challenge: {
        id: "sri_prt_challenge",
        result: {
          title: "Refer the rent increase to Rent Service Scotland",
          summary: "You can apply to a Rent Officer to determine the open market rent. They can only reduce the proposed rent — never increase it above the proposed amount.",
          steps: [
            "You must apply within 21 days of receiving the rent increase notice",
            "Apply to Rent Service Scotland (rentservice.gov.scot)",
            "The Rent Officer will determine the open market rent",
            "If you disagree with their decision, you can appeal to the First-tier Tribunal",
            "Continue paying your current rent until a decision is made",
            "Check if your area has a Rent Pressure Zone — caps may apply",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Sections 22-25",
        },
      },
      sri_prt_fair: {
        id: "sri_prt_fair",
        result: {
          title: "The rent increase appears fair",
          summary: "If the rent is at or below market rate, challenging it is unlikely to succeed. But you can still negotiate.",
          steps: [
            "Consider negotiating a smaller or phased increase",
            "Check if you qualify for Universal Credit housing costs or Housing Benefit",
            "Look into Discretionary Housing Payments from your council",
            "The new rent takes effect on the date stated in the notice (minimum 3 months)",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Section 22",
        },
      },
      sri_prt_research: {
        id: "sri_prt_research",
        result: {
          title: "Research the market rate before deciding",
          summary: "Check comparable rents before deciding whether to challenge.",
          steps: [
            "Search Rightmove, Zoopla, and Citylets for similar properties in your area",
            "Match by: bedrooms, property type, condition, and location",
            "Check at least 5-10 comparable properties",
            "If the proposed rent is above average, consider referring to Rent Service Scotland",
            "You have 21 days from receiving the notice to apply",
          ],
          legalRef: "Private Housing (Tenancies) (Scotland) Act 2016, Sections 22-25",
        },
      },
      sri_sat: {
        id: "sri_sat",
        result: {
          title: "Rent increases for Short Assured Tenancies",
          summary: "For SATs, rent can be increased at the end of the fixed term or by agreement. You can refer increases to a Rent Assessment Committee.",
          steps: [
            "During a fixed term, rent can only increase if the agreement allows it",
            "After the fixed term, the landlord can propose an increase",
            "You can refer the increase to a Rent Assessment Committee (part of the Tribunal)",
            "The Committee will determine a fair market rent",
            "Contact Shelter Scotland for advice: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988, Sections 24-25",
        },
      },
    },
  },
  {
    id: "harassment-scotland",
    title: "Landlord Harassment",
    description: "Your landlord is intimidating, threatening, or interfering with your home",
    icon: "🚨",
    startNodeId: "sh1",
    nodes: {
      sh1: {
        id: "sh1",
        question: "What kind of behaviour is your landlord engaging in?",
        info: "Landlord harassment is a criminal offence in Scotland. All private landlords must also be registered on the Scottish Landlord Register.",
        options: [
          { label: "Entering without permission", nextId: "sh_entry" },
          { label: "Threats, intimidation, or abuse", nextId: "sh_threats" },
          { label: "Cutting off utilities or changing locks", nextId: "sh_utilities" },
          { label: "Constant unwanted contact or visits", nextId: "sh_contact" },
        ],
      },
      sh_entry: {
        id: "sh_entry",
        result: {
          title: "Your landlord must give reasonable notice and get your permission",
          summary: "Your landlord has no automatic right to enter. They should give at least 24-48 hours' notice and can only enter with your consent.",
          steps: [
            "Tell your landlord in writing they must give reasonable notice",
            "You can refuse entry if proper notice isn't given",
            "Keep a log of every unauthorised entry",
            "If it continues, report to the police (101)",
            "Check your landlord is on the Scottish Landlord Register — if not, report to your council",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988; Antisocial Behaviour etc. (Scotland) Act 2004",
        },
      },
      sh_threats: {
        id: "sh_threats",
        result: {
          title: "Threats and intimidation are criminal offences",
          summary: "If your landlord is threatening or intimidating you, report immediately.",
          steps: [
            "Keep a detailed log of every incident",
            "Save all texts, emails, voicemails as evidence",
            "If in immediate danger, call 999",
            "For non-emergencies, report to police on 101",
            "Report to your local council — they can take action against the landlord's registration",
            "An unregistered or convicted landlord can be struck off the Scottish Landlord Register",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 1988, Section 22; Antisocial Behaviour etc. (Scotland) Act 2004",
        },
      },
      sh_utilities: {
        id: "sh_utilities",
        result: {
          title: "Cutting off utilities or changing locks is ILLEGAL",
          summary: "This is illegal eviction. Call the police and your council immediately.",
          steps: [
            "Call the police on 999 if locked out",
            "Contact your local council's housing team immediately",
            "Illegal eviction is a criminal offence — the landlord can be prosecuted",
            "Document everything: photos, timestamps",
            "Do NOT break back in — get police/council assistance",
            "The council can apply to have the landlord removed from the Landlord Register",
            "You can claim compensation through the courts",
          ],
          legalRef: "Housing (Scotland) Act 1988, Section 22; Rent (Scotland) Act 1984",
        },
      },
      sh_contact: {
        id: "sh_contact",
        result: {
          title: "Excessive contact can amount to harassment",
          summary: "Persistent unwanted contact designed to pressure you out is illegal.",
          steps: [
            "Send a written request to limit contact to reasonable matters",
            "Keep a log of every unwanted contact with dates and times",
            "Set clear boundaries: preferred method and hours",
            "If it continues, report to the police",
            "Report to your local council for action on landlord registration",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Protection from Harassment Act 1997; Housing (Scotland) Act 1988",
        },
      },
    },
  },
  {
    id: "hmo-scotland",
    title: "HMO & Licensing Issues",
    description: "Problems with shared housing, overcrowding, or unlicensed properties",
    icon: "🏠",
    startNodeId: "shmo1",
    nodes: {
      shmo1: {
        id: "shmo1",
        question: "How many unrelated people share your property?",
        info: "In Scotland, an HMO is a property occupied by 3 or more unrelated people who share facilities. ALL HMOs need a licence from the local council. All landlords must also be on the Scottish Landlord Register.",
        options: [
          { label: "3 or more unrelated people", nextId: "shmo_hmo" },
          { label: "I live alone or with family only", nextId: "shmo_not" },
        ],
      },
      shmo_not: {
        id: "shmo_not",
        result: {
          title: "Your property probably isn't an HMO",
          summary: "However, your landlord must still be on the Scottish Landlord Register. Check this online.",
          steps: [
            "Check your landlord is registered at landlordregistrationscotland.gov.uk",
            "If not registered, report to your local council",
            "Unregistered landlords face prosecution and fines",
            "Go back to the homepage to select the issue that matches your situation",
          ],
          legalRef: "Antisocial Behaviour etc. (Scotland) Act 2004, Part 8",
        },
      },
      shmo_hmo: {
        id: "shmo_hmo",
        question: "Is the property licensed as an HMO?",
        info: "In Scotland, ALL properties with 3+ unrelated occupants sharing facilities need an HMO licence. This is stricter than England where mandatory licensing only applies to 5+.",
        options: [
          { label: "Yes, it's licensed", nextId: "shmo_licensed" },
          { label: "No, or I don't know", nextId: "shmo_unlicensed" },
        ],
      },
      shmo_unlicensed: {
        id: "shmo_unlicensed",
        result: {
          title: "Your HMO may be unlicensed — your landlord faces prosecution",
          summary: "Operating an unlicensed HMO in Scotland is a criminal offence. You may be entitled to a Rent Repayment Order.",
          steps: [
            "Check with your local council whether the property has an HMO licence",
            "Also check the Scottish Landlord Register for the landlord's registration",
            "If unlicensed, the landlord faces prosecution and fines up to £50,000",
            "Apply to the First-tier Tribunal for a Rent Repayment Order (up to 12 months' rent)",
            "Report the unlicensed HMO to your local council",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 2006, Part 5; Civic Government (Scotland) Act 1982",
        },
      },
      shmo_licensed: {
        id: "shmo_licensed",
        question: "What issue are you experiencing?",
        options: [
          { label: "Fire safety concerns", nextId: "shmo_fire" },
          { label: "Overcrowding", nextId: "shmo_overcrowding" },
          { label: "Licence conditions not being met", nextId: "shmo_conditions" },
        ],
      },
      shmo_fire: {
        id: "shmo_fire",
        result: {
          title: "Fire safety in HMOs — strict standards apply in Scotland",
          summary: "Scottish HMOs must meet enhanced fire safety standards as conditions of their licence.",
          steps: [
            "Check for working smoke alarms in every room and heat detectors in kitchens",
            "Scotland requires interlinked fire alarms in all rented properties",
            "Fire doors should be fitted to bedrooms and kitchens",
            "Escape routes must be clear and well-lit",
            "Report concerns to your local council's HMO licensing team",
            "You can also contact the Scottish Fire and Rescue Service for a free home safety visit",
            "In immediate danger? Call 999",
          ],
          legalRef: "Housing (Scotland) Act 2006; Fire (Scotland) Act 2005; Housing (Scotland) Act 2014 (tolerable standard)",
        },
      },
      shmo_overcrowding: {
        id: "shmo_overcrowding",
        result: {
          title: "Overcrowding in your HMO",
          summary: "The HMO licence specifies maximum occupancy. Overcrowding is a licence breach.",
          steps: [
            "Check the HMO licence for maximum occupancy numbers",
            "Count actual occupants",
            "Report overcrowding to your local council's HMO licensing team",
            "The council can prosecute, fine, or revoke the licence",
            "You may be entitled to a Rent Repayment Order",
          ],
          legalRef: "Housing (Scotland) Act 2006, Part 5; Civic Government (Scotland) Act 1982",
        },
      },
      shmo_conditions: {
        id: "shmo_conditions",
        result: {
          title: "HMO licence conditions not being met",
          summary: "Report breaches to your council — they can prosecute or revoke the licence.",
          steps: [
            "Request a copy of the HMO licence from your landlord or the council",
            "Document which conditions are not being met with photos and dates",
            "Report to your local council's HMO licensing team",
            "The council can prosecute, fine, or revoke the HMO licence",
            "Check the landlord is also on the Scottish Landlord Register",
            "Contact Shelter Scotland: 0808 800 4444",
          ],
          legalRef: "Housing (Scotland) Act 2006, Part 5; Civic Government (Scotland) Act 1982",
        },
      },
    },
  },
];
