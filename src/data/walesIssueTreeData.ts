import { IssueTree } from "./issueTreeData";

export const walesIssueTrees: IssueTree[] = [
  {
    id: "deposit-wales",
    title: "Deposit Not Returned",
    description: "Your landlord hasn't returned your deposit after moving out",
    icon: "💷",
    startNodeId: "wd1",
    nodes: {
      wd1: {
        id: "wd1",
        question: "Was your deposit protected in a government-approved scheme?",
        info: "Under the Renting Homes (Wales) Act 2016, landlords must protect deposits in DPS, MyDeposits, or TDS within 30 days of receiving them.",
        options: [
          { label: "Yes", nextId: "wd2" },
          { label: "No", nextId: "wd_unprotected" },
          { label: "I don't know", nextId: "wd_check" },
        ],
      },
      wd_check: {
        id: "wd_check",
        result: {
          title: "Check your deposit protection status first",
          summary: "Before taking further action, find out if your deposit was protected. This determines your legal options under Welsh law.",
          steps: [
            "Contact DPS at depositprotection.com or 0330 303 0030",
            "Contact MyDeposits at mydeposits.co.uk or 0333 321 9401",
            "Contact TDS at tenancydepositscheme.com or 0300 037 1000",
            "Provide your name, previous address, and occupation contract start date",
            "Come back to RenterShield once you have your answer",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45; Renting Homes (Deposit Schemes) (Wales) Regulations 2023",
        },
      },
      wd_unprotected: {
        id: "wd_unprotected",
        result: {
          title: "Your deposit was not protected — you may be owed up to 3x",
          summary: "Under the Renting Homes (Wales) Act 2016, if your landlord failed to protect your deposit, you can claim compensation of 1-3 times the deposit amount through the county court.",
          steps: [
            "Write to your landlord formally requesting the deposit back (use our template below)",
            "Give them 14 days to respond",
            "If no response, apply to your local county court",
            "The court can award 1x to 3x the deposit amount as compensation",
            "Your landlord cannot serve a valid section 173 no-fault notice without deposit protection",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Return of deposit — [Property Address]

I am writing regarding the deposit of £[Amount] paid at the start of my occupation contract on [Start Date].

I have confirmed that this deposit was not protected in a government-approved deposit scheme as required under the Renting Homes (Wales) Act 2016.

Under the Act, failure to protect a deposit entitles the contract-holder to compensation of between 1 and 3 times the deposit amount.

I am requesting the full return of my deposit within 14 days. If I do not receive payment by [Date + 14 days], I will apply to the county court.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45",
        },
      },
      wd2: {
        id: "wd2",
        question: "How long ago did your occupation contract end?",
        options: [
          { label: "Less than 10 days ago", nextId: "wd_wait" },
          { label: "10 days to 3 months ago", nextId: "wd3" },
          { label: "More than 3 months ago", nextId: "wd3" },
        ],
      },
      wd_wait: {
        id: "wd_wait",
        result: {
          title: "Your landlord still has time to return the deposit",
          summary: "The deposit scheme has 10 days to return your deposit after both parties agree on deductions. If there's a dispute, the scheme provides free resolution.",
          steps: [
            "Wait until 10 days after your occupation contract end date",
            "If the deposit isn't returned, raise a dispute with the scheme",
            "The dispute resolution is free and usually takes 4-6 weeks",
            "Come back to RenterShield if the deadline passes",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45",
        },
      },
      wd3: {
        id: "wd3",
        question: "Has your landlord proposed any deductions from the deposit?",
        options: [
          { label: "Yes, and they seem unfair", nextId: "wd_dispute" },
          { label: "Yes, but they're reasonable", nextId: "wd_partial" },
          { label: "No, they're just ignoring me", nextId: "wd_ignore" },
        ],
      },
      wd_dispute: {
        id: "wd_dispute",
        result: {
          title: "Dispute the unfair deductions through your deposit scheme",
          summary: "All three deposit schemes offer free Alternative Dispute Resolution. Your landlord must provide evidence for deductions — the burden of proof is on them.",
          steps: [
            "Gather your evidence: condition report, photos, communications",
            "Raise a formal dispute with your deposit scheme (free)",
            "The scheme will ask both parties to submit evidence",
            "An independent adjudicator will decide within 4-6 weeks",
            "If you disagree, you can still go to county court",
          ],
          legalRef: "Renting Homes (Wales) Act 2016; Deposit scheme rules",
        },
      },
      wd_partial: {
        id: "wd_partial",
        result: {
          title: "Accept the reasonable deductions and request the balance",
          summary: "If the deductions are fair, agree and request the remaining balance through the deposit scheme.",
          steps: [
            "Confirm your agreement to deductions in writing",
            "Request the balance through the deposit scheme",
            "Funds should be released within 10 days of agreement",
            "Keep all written agreements for your records",
          ],
          legalRef: "Renting Homes (Wales) Act 2016",
        },
      },
      wd_ignore: {
        id: "wd_ignore",
        result: {
          title: "Your landlord is not responding — escalate formally",
          summary: "If your landlord ignores your requests, use the deposit scheme's dispute process.",
          steps: [
            "Send a formal letter requesting the deposit return (use template below)",
            "Allow 14 days for a response",
            "Raise a dispute directly with the deposit protection scheme",
            "The scheme will contact the landlord — they must respond or lose by default",
            "If still not returned, apply to county court",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Non-return of deposit — [Property Address]

My occupation contract ended on [End Date] and I have yet to receive my deposit of £[Amount].

I am formally requesting the return of my full deposit within 14 days.

If I do not receive it by [Date + 14 days], I will raise a dispute with [Deposit Scheme Name] and apply to the county court if necessary.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Renting Homes (Wales) Act 2016, Sections 43-45",
        },
      },
    },
  },
  {
    id: "repairs-wales",
    title: "Landlord Won't Fix Repairs",
    description: "Your landlord is ignoring maintenance requests or refusing to repair",
    icon: "🔧",
    startNodeId: "wr1",
    nodes: {
      wr1: {
        id: "wr1",
        question: "What type of repair issue are you dealing with?",
        info: "Under the Renting Homes (Wales) Act 2016, your landlord must keep the property in a condition fit for human habitation and maintain the structure, exterior, and installations.",
        options: [
          { label: "Heating / hot water not working", nextId: "wr2" },
          { label: "Damp, mould, or leaks", nextId: "wr_damp" },
          { label: "Broken structure (roof, walls, windows)", nextId: "wr2" },
          { label: "Electrical or gas issues", nextId: "wr_urgent" },
        ],
      },
      wr_urgent: {
        id: "wr_urgent",
        result: {
          title: "⚠️ Gas or electrical issues — this may be an emergency",
          summary: "Gas and electrical faults can be life-threatening. Your landlord is legally required to maintain safety standards.",
          steps: [
            "If you smell gas: call the National Gas Emergency Service on 0800 111 999",
            "If there's a danger of electrocution: turn off the mains and call an electrician",
            "Notify your landlord immediately in writing",
            "Your landlord must hold a valid Gas Safety Certificate (annual check required)",
            "Electrical installations must be inspected every 5 years (EICR)",
            "If they refuse, report to your local council's Environmental Health team",
            "In Wales, landlords must also be registered with Rent Smart Wales",
          ],
          legalRef: "Renting Homes (Wales) Act 2016; Gas Safety (Installation and Use) Regulations 1998; Electrical Safety Standards",
        },
      },
      wr_damp: {
        id: "wr_damp",
        question: "How long have you been experiencing damp or mould?",
        options: [
          { label: "Less than 2 weeks", nextId: "wr2" },
          { label: "2 weeks to 3 months", nextId: "wr2" },
          { label: "Over 3 months", nextId: "wr_damp_severe" },
        ],
      },
      wr_damp_severe: {
        id: "wr_damp_severe",
        result: {
          title: "Persistent damp/mould — escalate to Environmental Health",
          summary: "Under the Renting Homes (Wales) Act 2016, your landlord has a duty to keep the dwelling fit for human habitation. Persistent damp and mould breaches this obligation.",
          steps: [
            "Document everything: photos with dates, medical symptoms, previous complaints",
            "Send a formal written complaint to your landlord",
            "Allow 14 days for a response and action plan",
            "If ignored, contact your local council's Environmental Health department",
            "The council can use the Housing Health and Safety Rating System (HHSRS) to force repairs",
            "If the mould is affecting your health, visit your GP and get it documented",
            "Contact Shelter Cymru for free advice: 0800 495 495",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Damp and mould — [Property Address]

I am writing to formally report a persistent damp and mould issue at the above property, ongoing since [Date First Noticed].

Under the Renting Homes (Wales) Act 2016, you are required to ensure the dwelling is fit for human habitation and to maintain the structure in a condition that prevents damp.

I request a written response within 14 days outlining your plan to resolve this issue. If I do not receive a satisfactory response, I will report the matter to the local council.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Renting Homes (Wales) Act 2016, Sections 91-97; Fitness for Human Habitation requirements",
        },
      },
      wr2: {
        id: "wr2",
        question: "Have you reported the issue to your landlord in writing?",
        info: "Always report repairs in writing so you have a dated record.",
        options: [
          { label: "Yes, and they haven't responded", nextId: "wr_no_response" },
          { label: "Yes, and they refused to fix it", nextId: "wr_refused" },
          { label: "No, only verbally", nextId: "wr_write_first" },
        ],
      },
      wr_write_first: {
        id: "wr_write_first",
        result: {
          title: "Put your repair request in writing first",
          summary: "Before escalating, you need a written record. This is essential under Welsh law.",
          steps: [
            "Send a formal repair request by email or letter",
            "Include photos and describe the issue clearly",
            "State the date you first noticed the problem",
            "Give your landlord a reasonable time to respond (14 days for non-urgent, 24 hours for emergencies)",
            "Keep copies of everything you send",
            "Check your landlord is registered with Rent Smart Wales — if not, report them",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Repair request — [Property Address]

I am writing to report a repair issue at the above property.

Description: [Describe the problem]
Date first noticed: [Date]
Location: [e.g. bathroom ceiling, kitchen wall]

Under the Renting Homes (Wales) Act 2016, you are responsible for keeping the dwelling fit for human habitation and maintaining the structure, exterior, and installations.

Please arrange for inspection and repair within a reasonable timeframe.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Renting Homes (Wales) Act 2016, Sections 91-97",
        },
      },
      wr_no_response: {
        id: "wr_no_response",
        result: {
          title: "No response — escalate to the council",
          summary: "If your landlord doesn't respond, your local council's Environmental Health team can inspect and force repairs.",
          steps: [
            "Send a final formal letter giving 14 days to respond",
            "Contact your local council's Environmental Health department",
            "They will inspect using the HHSRS",
            "The council can serve an Improvement Notice on your landlord",
            "Check your landlord is registered with Rent Smart Wales — unlicensed landlords face prosecution",
            "Contact Shelter Cymru for free advice: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016; Housing Act 2004, Part 1",
        },
      },
      wr_refused: {
        id: "wr_refused",
        result: {
          title: "Landlord refused repairs — you have legal options",
          summary: "A landlord cannot refuse repairs they're responsible for under the Renting Homes (Wales) Act 2016.",
          steps: [
            "Keep the refusal in writing — if verbal, confirm by email",
            "Contact your local council's Environmental Health team",
            "You may be able to claim compensation for disrepair through county court",
            "Contact Shelter Cymru: 0800 495 495",
            "If the property is unfit for habitation, the council can take enforcement action",
            "Report unregistered landlords to Rent Smart Wales",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 91-97; Housing Act 2004",
        },
      },
    },
  },
  {
    id: "eviction-wales",
    title: "Unfair Eviction Notice",
    description: "You've received an eviction notice and aren't sure if it's valid",
    icon: "📋",
    startNodeId: "we1",
    nodes: {
      we1: {
        id: "we1",
        question: "What type of notice did you receive?",
        info: "In Wales, the Renting Homes (Wales) Act 2016 replaced Section 21 with Section 173 (no-fault) and Section 8 with Section 181 (breach of contract).",
        options: [
          { label: "Section 173 notice (no fault)", nextId: "we_s173" },
          { label: "Section 181 notice (breach of contract)", nextId: "we_s181" },
          { label: "No formal notice — verbal threat", nextId: "we_verbal" },
          { label: "I'm not sure what type", nextId: "we_identify" },
        ],
      },
      we_identify: {
        id: "we_identify",
        result: {
          title: "Identify your notice type",
          summary: "In Wales, eviction notices are governed by the Renting Homes (Wales) Act 2016, not the Housing Act 1988.",
          steps: [
            "Look for 'Section 173' — this is a no-fault eviction notice (replacing the old Section 21)",
            "Look for 'Section 181' with specific grounds — this is a breach-based notice (replacing Section 8)",
            "If it references Section 21 or Section 8, it may be invalid under Welsh law since December 2022",
            "A text message or letter alone is NOT a valid notice",
            "Take a photo and call Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 173, 181",
        },
      },
      we_verbal: {
        id: "we_verbal",
        result: {
          title: "A verbal eviction threat is NOT a legal eviction",
          summary: "Your landlord cannot evict you verbally or by changing the locks. They must follow the legal process under the Renting Homes (Wales) Act 2016.",
          steps: [
            "Do NOT leave your home — you are legally protected",
            "Ask your landlord to put their request in writing",
            "If they threaten you, harass you, or try to change locks, call the police",
            "Illegal eviction is a criminal offence under the Protection from Eviction Act 1977",
            "Contact your local council's tenancy relations officer",
            "Call Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Protection from Eviction Act 1977; Renting Homes (Wales) Act 2016",
        },
      },
      we_s173: {
        id: "we_s173",
        question: "How much notice were you given?",
        info: "Under Section 173, your landlord must give you at least 6 months' notice (this increased from 2 months under the old law). The notice cannot be served in the first 6 months of the contract.",
        options: [
          { label: "6 months or more", nextId: "we_s173_valid" },
          { label: "Less than 6 months", nextId: "we_s173_short" },
          { label: "I'm not sure", nextId: "we_s173_check" },
        ],
      },
      we_s173_short: {
        id: "we_s173_short",
        result: {
          title: "Your Section 173 notice may be INVALID",
          summary: "Under the Renting Homes (Wales) Act 2016, a Section 173 notice must give at least 6 months' notice. If you received less, the notice is likely invalid.",
          steps: [
            "Do NOT leave your home",
            "Write to your landlord explaining the notice is invalid due to insufficient notice period",
            "Under the Act, the landlord cannot serve a Section 173 notice in the first 6 months",
            "The notice must also not be served as retaliation for a complaint (anti-retaliatory protection)",
            "Contact Shelter Cymru for free legal advice: 0800 495 495",
            "If your landlord applies to court, attend and raise the defence",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 173",
        },
      },
      we_s173_valid: {
        id: "we_s173_valid",
        result: {
          title: "The notice may be valid — but you still have rights",
          summary: "Even with a valid Section 173 notice, your landlord must apply to the court for a possession order. You do not have to leave on the date the notice expires.",
          steps: [
            "You do NOT have to leave on the date stated",
            "Your landlord must apply to court for a possession order",
            "Check that your deposit was protected — if not, the notice is invalid",
            "Check that you were given a written statement of your occupation contract",
            "The notice cannot be retaliatory (if you made a recent complaint, it may be invalid)",
            "Start looking for alternative accommodation — contact your council about housing options",
            "Contact Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 173, 175, 217",
        },
      },
      we_s173_check: {
        id: "we_s173_check",
        result: {
          title: "Check your notice carefully",
          summary: "Look at the date on the notice and count the months of notice given.",
          steps: [
            "Find the date on the notice and the date you must leave by",
            "Count the months between — it must be at least 6 months",
            "Check the notice was served after the first 6 months of your occupation contract",
            "Check you received a written statement of your contract (if not, the notice is invalid)",
            "Come back to RenterShield once you've checked, or call Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 173",
        },
      },
      we_s181: {
        id: "we_s181",
        question: "What ground is listed on the Section 181 notice?",
        info: "Section 181 notices are for breach of contract. The landlord must specify the ground and give you a chance to remedy the breach where possible.",
        options: [
          { label: "Rent arrears", nextId: "we_s181_rent" },
          { label: "Anti-social behaviour", nextId: "we_s181_asb" },
          { label: "Other breach of contract", nextId: "we_s181_breach" },
          { label: "Not sure / other", nextId: "we_s181_general" },
        ],
      },
      we_s181_rent: {
        id: "we_s181_rent",
        result: {
          title: "Section 181 for rent arrears — check the details",
          summary: "For rent arrears, the landlord must give at least 1 month's notice if arrears are 2+ months. The court can consider your circumstances.",
          steps: [
            "Check how much rent you actually owe — get bank statements",
            "Under the 2016 Act, the court has discretion to refuse possession if you can clear arrears",
            "Apply for Universal Credit or Housing Benefit if you haven't already",
            "Contact your council about Discretionary Housing Payments",
            "Attend the court hearing — tenants who attend get better outcomes",
            "Contact Shelter Cymru for advice: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 181; Schedule 8",
        },
      },
      we_s181_asb: {
        id: "we_s181_asb",
        result: {
          title: "Section 181 for anti-social behaviour",
          summary: "The court will consider whether eviction is proportionate. Your landlord must provide evidence.",
          steps: [
            "Request full details of the alleged behaviour",
            "Gather your own evidence: witness statements, diary entries",
            "The burden of proof is on the landlord",
            "The court considers proportionality under the Human Rights Act 1998",
            "Seek legal advice immediately — contact Shelter Cymru: 0800 495 495",
            "Attend the court hearing — this is crucial",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 181; Schedule 8",
        },
      },
      we_s181_breach: {
        id: "we_s181_breach",
        result: {
          title: "Section 181 for breach of contract",
          summary: "The court considers whether the breach is serious enough to warrant eviction and whether it can be remedied.",
          steps: [
            "Read your occupation contract to understand the alleged breach",
            "If the breach can be corrected, do so immediately",
            "The court may not grant possession for minor or remedied breaches",
            "Prepare your case with mitigating circumstances",
            "Get legal advice — contact Shelter Cymru: 0800 495 495",
            "Attend the hearing and present your defence",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 181",
        },
      },
      we_s181_general: {
        id: "we_s181_general",
        result: {
          title: "Get advice on your specific Section 181 grounds",
          summary: "The Renting Homes (Wales) Act 2016 has specific rules for different grounds. You need tailored legal advice.",
          steps: [
            "Take a photo of the full notice, especially the grounds listed",
            "Call Shelter Cymru: 0800 495 495",
            "Contact Citizens Advice Wales",
            "Check if you qualify for legal aid at gov.uk/legal-aid",
            "Do NOT ignore the notice — respond within the timeframe",
            "Attend any court hearing — tenants who don't attend almost always lose",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 181; Schedule 8",
        },
      },
    },
  },
  {
    id: "rent-increase-wales",
    title: "Unfair Rent Increase",
    description: "Your landlord wants to raise the rent and you're not sure if it's fair or legal",
    icon: "📈",
    startNodeId: "wri1",
    nodes: {
      wri1: {
        id: "wri1",
        question: "Are you on a fixed-term or periodic standard occupation contract?",
        info: "Under the Renting Homes (Wales) Act 2016, your tenancy is called an 'occupation contract'. Rent increase rules depend on whether you're in a fixed term.",
        options: [
          { label: "Fixed-term contract", nextId: "wri_fixed" },
          { label: "Periodic (rolling) contract", nextId: "wri_periodic" },
          { label: "I'm not sure", nextId: "wri_check" },
        ],
      },
      wri_fixed: {
        id: "wri_fixed",
        result: {
          title: "Rent cannot be increased during a fixed-term contract",
          summary: "Unless your occupation contract contains a specific rent variation clause, your landlord cannot increase the rent during the fixed term.",
          steps: [
            "Check your written statement for any rent variation clause",
            "If no such clause exists, the rent is fixed until the contract becomes periodic",
            "If there is a clause, it must specify how and when rent can be increased",
            "Do NOT pay a higher amount without a valid clause — continue paying agreed rent",
            "Contact Shelter Cymru if your landlord insists: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Section 102",
        },
      },
      wri_periodic: {
        id: "wri_periodic",
        question: "How is your landlord trying to increase the rent?",
        options: [
          { label: "Formal rent increase notice", nextId: "wri_formal" },
          { label: "Just told me verbally or by text", nextId: "wri_informal" },
        ],
      },
      wri_formal: {
        id: "wri_formal",
        question: "Do you think the proposed rent is above the market rate?",
        info: "Under the 2016 Act, you can challenge a rent increase at the Residential Property Tribunal Wales if it's above market rate.",
        options: [
          { label: "Yes, it seems too high", nextId: "wri_challenge" },
          { label: "No, it seems fair", nextId: "wri_fair" },
          { label: "I'm not sure", nextId: "wri_research" },
        ],
      },
      wri_challenge: {
        id: "wri_challenge",
        result: {
          title: "Challenge the rent increase at the Residential Property Tribunal Wales",
          summary: "You can apply to the Residential Property Tribunal Wales to challenge a rent increase. The Tribunal will assess the market rent.",
          steps: [
            "You must apply BEFORE the increase takes effect",
            "Research comparable rents in your area using Rightmove or Zoopla",
            "Apply to the Residential Property Tribunal Wales",
            "The Tribunal will set a fair market rent",
            "Continue paying your current rent until the Tribunal decides",
            "The Tribunal cannot increase rent above the proposed amount",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 102-104; Residential Property Tribunal Wales",
        },
      },
      wri_fair: {
        id: "wri_fair",
        result: {
          title: "The rent increase appears fair",
          summary: "If the proposed rent is at or below market rate, consider negotiating rather than challenging.",
          steps: [
            "You can still negotiate a smaller or phased increase",
            "Check if your income qualifies you for Housing Benefit or Universal Credit housing costs",
            "Look into Discretionary Housing Payments from your council",
            "The new rent takes effect on the date stated in the notice",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 102-104",
        },
      },
      wri_research: {
        id: "wri_research",
        result: {
          title: "Research the market rate before deciding",
          summary: "Before accepting or challenging, find out what similar properties rent for in your area.",
          steps: [
            "Search Rightmove, Zoopla, and OpenRent for similar properties",
            "Match by: bedrooms, property type, condition, and location",
            "Check at least 5-10 comparable properties",
            "If the proposed rent is above average, consider the Residential Property Tribunal Wales",
            "If in line with market, consider negotiating a smaller increase",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 102-104",
        },
      },
      wri_informal: {
        id: "wri_informal",
        result: {
          title: "An informal rent increase is not legally valid",
          summary: "Under the Renting Homes (Wales) Act 2016, your landlord must follow the formal procedure to increase rent. A verbal or text demand is not enforceable.",
          steps: [
            "You are NOT obliged to pay a higher rent without formal notice",
            "Continue paying your current agreed rent",
            "Write to your landlord explaining the legal process must be followed",
            "If they serve formal notice, you can then challenge it at the Tribunal",
            "Contact Shelter Cymru if pressured: 0800 495 495",
          ],
          legalRef: "Renting Homes (Wales) Act 2016, Sections 102-104",
        },
      },
      wri_check: {
        id: "wri_check",
        result: {
          title: "Check your occupation contract type",
          summary: "You need to know if you're on a fixed-term or periodic contract, as this affects rent increase rules.",
          steps: [
            "Find your written statement of occupation contract",
            "Check if it has a fixed end date — if so, you're on a fixed-term contract",
            "If the end date has passed and you haven't signed a new one, you're on a periodic contract",
            "Come back to RenterShield once you know your contract type",
          ],
          legalRef: "Renting Homes (Wales) Act 2016",
        },
      },
    },
  },
  {
    id: "harassment-wales",
    title: "Landlord Harassment",
    description: "Your landlord is intimidating, threatening, or interfering with your home",
    icon: "🚨",
    startNodeId: "wh1",
    nodes: {
      wh1: {
        id: "wh1",
        question: "What kind of behaviour is your landlord engaging in?",
        info: "Landlord harassment is a criminal offence in Wales, as it is across the UK. Landlords in Wales must also be registered and licensed with Rent Smart Wales.",
        options: [
          { label: "Entering without permission", nextId: "wh_entry" },
          { label: "Threats, intimidation, or abuse", nextId: "wh_threats" },
          { label: "Cutting off utilities or changing locks", nextId: "wh_utilities" },
          { label: "Constant unwanted contact or visits", nextId: "wh_contact" },
        ],
      },
      wh_entry: {
        id: "wh_entry",
        result: {
          title: "Your landlord must give 24 hours' notice and get your permission",
          summary: "Under your occupation contract, your landlord has no automatic right to enter. They must give at least 24 hours' notice and can only enter with your consent.",
          steps: [
            "Tell your landlord in writing that they must give 24 hours' notice",
            "You can refuse entry if proper notice isn't given",
            "Keep a log of every unauthorised entry: date, time, what happened",
            "If it continues, report to the police (non-emergency: 101)",
            "Report to your local council and to Rent Smart Wales",
            "An unregistered landlord committing harassment can face additional penalties",
          ],
          legalRef: "Renting Homes (Wales) Act 2016; Protection from Eviction Act 1977",
        },
      },
      wh_threats: {
        id: "wh_threats",
        result: {
          title: "Threats and intimidation are criminal offences",
          summary: "If your landlord is threatening or intimidating you, this is criminal. Report immediately.",
          steps: [
            "Keep a detailed log of every incident with dates, times, and witnesses",
            "Save all texts, emails, voicemails, and letters as evidence",
            "If in immediate danger, call 999",
            "For non-emergencies, report to police on 101",
            "Contact your local council's Tenancy Relations Officer",
            "Report the landlord to Rent Smart Wales — they can revoke their licence",
            "Call Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Protection from Eviction Act 1977; Housing (Wales) Act 2014 (Rent Smart Wales)",
        },
      },
      wh_utilities: {
        id: "wh_utilities",
        result: {
          title: "Cutting off utilities or changing locks is ILLEGAL",
          summary: "This is illegal eviction — a criminal offence. Call the police and your council immediately.",
          steps: [
            "Call the police on 999 if locked out",
            "Contact your local council's emergency housing team",
            "The council's Tenancy Relations Officer can prosecute",
            "Document everything: photos, timestamps",
            "Do NOT break back in — get police/council assistance",
            "Report to Rent Smart Wales — the landlord's licence can be revoked",
            "You can claim compensation through county court",
          ],
          legalRef: "Protection from Eviction Act 1977; Renting Homes (Wales) Act 2016",
        },
      },
      wh_contact: {
        id: "wh_contact",
        result: {
          title: "Excessive contact can amount to harassment",
          summary: "Persistent unwanted contact designed to pressure you is illegal harassment.",
          steps: [
            "Send a written request to limit contact to reasonable matters",
            "Keep a log of every unwanted visit, call, or message",
            "Set clear boundaries: preferred contact method and hours",
            "If it continues, report to your council's Tenancy Relations Officer",
            "Report to Rent Smart Wales for potential licence action",
            "You can also report persistent harassment to the police",
          ],
          legalRef: "Protection from Eviction Act 1977; Protection from Harassment Act 1997; Housing (Wales) Act 2014",
        },
      },
    },
  },
  {
    id: "hmo-wales",
    title: "HMO & Licensing Issues",
    description: "Problems with shared housing, overcrowding, or unlicensed properties",
    icon: "🏠",
    startNodeId: "whmo1",
    nodes: {
      whmo1: {
        id: "whmo1",
        question: "How many people from different households share your property?",
        info: "In Wales, all private landlords must register with Rent Smart Wales, and HMO licensing rules are similar to England but administered by Welsh local authorities.",
        options: [
          { label: "3-4 people from different households", nextId: "whmo_small" },
          { label: "5 or more people from different households", nextId: "whmo_large" },
          { label: "I live alone or with family only", nextId: "whmo_not" },
        ],
      },
      whmo_not: {
        id: "whmo_not",
        result: {
          title: "Your property probably isn't an HMO",
          summary: "However, your landlord must still be registered with Rent Smart Wales. You can check this online.",
          steps: [
            "Go back to the homepage and select the issue that best matches your situation",
            "Check your landlord is registered at rentsmart.gov.wales",
            "If they're not registered, report them — they face prosecution and fines",
          ],
          legalRef: "Housing (Wales) Act 2014; Renting Homes (Wales) Act 2016",
        },
      },
      whmo_small: {
        id: "whmo_small",
        question: "What issue are you experiencing?",
        options: [
          { label: "Fire safety concerns", nextId: "whmo_fire" },
          { label: "Overcrowding", nextId: "whmo_overcrowding" },
          { label: "Landlord not registered with Rent Smart Wales", nextId: "whmo_rentsmart" },
        ],
      },
      whmo_large: {
        id: "whmo_large",
        question: "Is the property licensed as an HMO?",
        info: "Properties with 5+ occupants from 2+ households need a mandatory HMO licence, and the landlord must be registered with Rent Smart Wales.",
        options: [
          { label: "Yes, it's licensed", nextId: "whmo_licensed" },
          { label: "No, or I don't know", nextId: "whmo_unlicensed" },
        ],
      },
      whmo_unlicensed: {
        id: "whmo_unlicensed",
        result: {
          title: "Your HMO may be unlicensed — you could claim rent back",
          summary: "Operating a licensable HMO without a licence is a criminal offence. You may be entitled to a Rent Repayment Order.",
          steps: [
            "Check with your local council whether the property has an HMO licence",
            "Also check if the landlord is registered at rentsmart.gov.wales",
            "If unlicensed, the landlord faces an unlimited fine",
            "Apply to the Residential Property Tribunal Wales for a Rent Repayment Order (up to 12 months' rent)",
            "Report the unlicensed HMO to your local council",
            "Contact Shelter Cymru: 0800 495 495",
          ],
          legalRef: "Housing Act 2004, Sections 72-73; Housing (Wales) Act 2014",
        },
      },
      whmo_licensed: {
        id: "whmo_licensed",
        question: "What issue are you experiencing?",
        options: [
          { label: "Fire safety concerns", nextId: "whmo_fire" },
          { label: "Overcrowding", nextId: "whmo_overcrowding" },
          { label: "Licence conditions not being met", nextId: "whmo_conditions" },
        ],
      },
      whmo_fire: {
        id: "whmo_fire",
        result: {
          title: "Fire safety in HMOs — strict obligations apply",
          summary: "HMOs in Wales must meet enhanced fire safety standards.",
          steps: [
            "Check for working smoke alarms on every floor and heat detectors in kitchens",
            "Fire doors should be fitted to bedrooms and kitchens (30-minute rated)",
            "Escape routes must be clear and well-lit",
            "Report concerns to your local council and/or the fire service",
            "In immediate danger? Call 999",
          ],
          legalRef: "Housing Act 2004; Management of Houses in Multiple Occupation (Wales) Regulations 2006",
        },
      },
      whmo_overcrowding: {
        id: "whmo_overcrowding",
        result: {
          title: "Overcrowding in your HMO",
          summary: "HMO licences specify maximum occupancy. Overcrowding is a breach of licence conditions.",
          steps: [
            "Check the HMO licence for maximum occupancy",
            "Minimum room sizes: 10.22m² for 2 adults, 6.51m² for 1 adult",
            "Report overcrowding to your local council's housing enforcement team",
            "The council can prosecute and impose fines",
            "You may also claim a Rent Repayment Order",
          ],
          legalRef: "Housing Act 2004; Licensing of HMOs (Mandatory Conditions) Regulations",
        },
      },
      whmo_conditions: {
        id: "whmo_conditions",
        result: {
          title: "Licence conditions not being met",
          summary: "Report breaches to your local council — they can prosecute or revoke the licence.",
          steps: [
            "Request a copy of the HMO licence from your landlord",
            "Document which conditions are not being met",
            "Report breaches to your local council's housing team",
            "Also report to Rent Smart Wales if the landlord is not complying",
            "The council can prosecute, fine, or revoke the licence",
          ],
          legalRef: "Housing Act 2004; Housing (Wales) Act 2014",
        },
      },
      whmo_rentsmart: {
        id: "whmo_rentsmart",
        result: {
          title: "Your landlord must be registered with Rent Smart Wales",
          summary: "All private landlords in Wales must be registered with Rent Smart Wales, and those who self-manage must also be licensed. Operating without registration is a criminal offence.",
          steps: [
            "Check if your landlord is registered at rentsmart.gov.wales",
            "If not registered, report them to Rent Smart Wales",
            "Unregistered landlords face prosecution and fines up to £150,000",
            "An unregistered landlord cannot serve a valid Section 173 eviction notice",
            "You may be entitled to a Rent Repayment Order",
            "Contact Shelter Cymru for advice: 0800 495 495",
          ],
          legalRef: "Housing (Wales) Act 2014, Parts 1-2",
        },
      },
    },
  },
];
