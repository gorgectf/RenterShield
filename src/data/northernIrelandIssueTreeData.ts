import { IssueTree } from "./issueTreeData";

export const northernIrelandIssueTrees: IssueTree[] = [
  {
    id: "deposit-ni",
    title: "Deposit Not Returned",
    description: "Your landlord has not returned your deposit after the tenancy ended",
    icon: "💷",
    startNodeId: "nid1",
    nodes: {
      nid1: {
        id: "nid1",
        question: "Was your deposit protected in an approved tenancy deposit scheme?",
        info: "In Northern Ireland, a deposit must be protected within 28 days and you should receive key information about the protection within 35 days. Since April 2023, a deposit for a new private tenancy cannot usually exceed one month's rent.",
        options: [
          { label: "Yes", nextId: "nid2" },
          { label: "No", nextId: "nid_unprotected" },
          { label: "I don't know", nextId: "nid_check" },
        ],
      },
      nid_check: {
        id: "nid_check",
        result: {
          title: "Check the deposit protection details first",
          summary: "Before taking further action, confirm whether the deposit was protected and which scheme was used.",
          steps: [
            "Check your tenancy paperwork for a deposit protection certificate or prescribed information",
            "Ask your landlord or letting agent to confirm the scheme name and deposit reference",
            "Check approved scheme information on nidirect and the scheme websites",
            "If you still cannot confirm protection, contact Housing Rights for advice",
            "Come back to RenterShield once you know whether the deposit was protected",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Sections 4-6; tenancy deposit scheme rules in Northern Ireland",
        },
      },
      nid_unprotected: {
        id: "nid_unprotected",
        result: {
          title: "Your deposit may not have been protected — act now",
          summary: "If your landlord failed to protect the deposit on time or failed to give you the required information, they may be in breach of Northern Ireland tenancy law.",
          steps: [
            "Write to your landlord requesting the full deposit back and asking for scheme details within 14 days",
            "Ask for written confirmation of when the deposit was protected and what information was served on you",
            "Keep copies of all messages, receipts, and your tenancy agreement",
            "Contact Housing Rights for advice on the best next step",
            "If the issue is not resolved, consider a county court claim for return of the deposit and any remedy available to you",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Return of tenancy deposit — [Property Address]

I am writing regarding the deposit of £[Amount] paid at the start of my tenancy on [Start Date].

Please confirm within 14 days whether my deposit was protected in an approved tenancy deposit scheme, the date it was protected, and provide the scheme details and prescribed information served on me.

If the deposit was not properly protected, or if the required information was not provided, I request the immediate return of my full deposit.

If I do not receive a satisfactory response by [Date + 14 days], I will seek advice about taking further action.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Sections 4-6",
        },
      },
      nid2: {
        id: "nid2",
        question: "Has it been more than 10 working days since the tenancy ended and deductions were agreed?",
        options: [
          { label: "No", nextId: "nid_wait" },
          { label: "Yes", nextId: "nid3" },
        ],
      },
      nid_wait: {
        id: "nid_wait",
        result: {
          title: "The scheme may still be processing the return",
          summary: "If the tenancy has only just ended, the deposit scheme may still be dealing with repayment or agreed deductions.",
          steps: [
            "Check the scheme portal or confirmation emails",
            "Make sure both sides have agreed any deductions",
            "Ask the landlord or agent to authorise repayment if they have not done so",
            "If the deadline passes without progress, return and follow the next escalation steps",
          ],
          legalRef: "Northern Ireland tenancy deposit scheme rules",
        },
      },
      nid3: {
        id: "nid3",
        question: "What is the problem with the deposit now?",
        options: [
          { label: "Unfair deductions", nextId: "nid_dispute" },
          { label: "Reasonable deductions only", nextId: "nid_partial" },
          { label: "The landlord is ignoring me", nextId: "nid_ignore" },
        ],
      },
      nid_dispute: {
        id: "nid_dispute",
        result: {
          title: "Dispute the deductions through the deposit scheme",
          summary: "If the deposit is protected, the quickest route is usually the scheme's dispute process.",
          steps: [
            "Gather photos, inventory/check-in records, messages, and receipts",
            "Ask the scheme how to start a dispute or alternative dispute resolution process",
            "Set out clearly which deductions you dispute and why",
            "Keep to any scheme deadlines for submitting evidence",
            "Contact Housing Rights if you need help preparing your case",
          ],
          legalRef: "Northern Ireland tenancy deposit scheme rules",
        },
      },
      nid_partial: {
        id: "nid_partial",
        result: {
          title: "Agree the deductions and request the balance",
          summary: "If the deductions are fair, confirm this in writing and ask for the remaining balance to be released immediately.",
          steps: [
            "Confirm in writing which deductions you accept",
            "Ask the scheme or agent to release the remaining balance",
            "Keep a record of the agreement and payment date",
          ],
          legalRef: "Northern Ireland tenancy deposit scheme rules",
        },
      },
      nid_ignore: {
        id: "nid_ignore",
        result: {
          title: "No response — escalate formally",
          summary: "If the landlord or agent is ignoring you, use the scheme process and take advice quickly.",
          steps: [
            "Send one final written request for repayment within 14 days",
            "Raise the issue with the deposit scheme if the deposit was protected",
            "Keep a full record of all unanswered messages",
            "Contact Housing Rights for tenancy-specific advice",
            "If needed, consider county court action to recover the money",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Non-return of tenancy deposit — [Property Address]

My tenancy ended on [End Date] and I have not received the return of my deposit of £[Amount].

Please return the deposit or provide full written reasons for any deductions within 14 days of this letter.

If I do not receive a satisfactory response by [Date + 14 days], I will escalate the matter through the deposit scheme and seek further advice about legal action.

Yours sincerely,
[Your Name]
[Your Address]
[Date]`,
          legalRef: "Private Tenancies Act (Northern Ireland) 2022; Northern Ireland tenancy deposit scheme rules",
        },
      },
    },
  },
  {
    id: "repairs-ni",
    title: "Landlord Won't Fix Repairs",
    description: "Your landlord is ignoring repair requests or refusing to deal with hazards",
    icon: "🔧",
    startNodeId: "nir1",
    nodes: {
      nir1: {
        id: "nir1",
        question: "What type of repair problem are you dealing with?",
        info: "In Northern Ireland, rented homes must meet minimum fitness and safety standards. Serious hazards can be reported to the local council's Environmental Health team.",
        options: [
          { label: "Heating / hot water not working", nextId: "nir2" },
          { label: "Damp, mould, or leaks", nextId: "nir_damp" },
          { label: "Broken structure, windows, or roof", nextId: "nir2" },
          { label: "Electrical or gas danger", nextId: "nir_urgent" },
        ],
      },
      nir_urgent: {
        id: "nir_urgent",
        result: {
          title: "⚠️ Gas or electrical issues can be emergencies",
          summary: "Unsafe gas and electrical problems must be treated urgently and fully documented.",
          steps: [
            "If you smell gas, call the National Gas Emergency Service on 0800 111 999",
            "If there is immediate electrical danger, switch off the mains if safe to do so",
            "Tell your landlord or agent in writing straight away",
            "Ask for copies of safety certificates and inspection records",
            "If the danger is not dealt with promptly, contact your local council's Environmental Health team",
            "If you are in immediate danger, call 999",
          ],
          legalRef: "Private Tenancies (Northern Ireland) Order 2006; gas and electrical safety requirements in rented homes",
        },
      },
      nir_damp: {
        id: "nir_damp",
        question: "How long has the damp or mould problem been going on?",
        options: [
          { label: "Less than 2 weeks", nextId: "nir2" },
          { label: "2 weeks to 3 months", nextId: "nir2" },
          { label: "More than 3 months", nextId: "nir_damp_severe" },
        ],
      },
      nir_damp_severe: {
        id: "nir_damp_severe",
        result: {
          title: "Persistent damp or mould — escalate to the council",
          summary: "Long-running damp and mould may mean the property fails the fitness standard and needs enforcement.",
          steps: [
            "Take dated photos and keep a diary of symptoms and damage",
            "Send a formal written complaint to your landlord",
            "Allow a short, reasonable time for an action plan",
            "If ignored, contact your local council's Environmental Health team",
            "Ask the council to inspect if the property is unsafe or unfit",
            "Contact Housing Rights for help if the problem continues",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Damp and mould at [Property Address]

I am writing to formally report persistent damp and mould at the property, ongoing since [Date First Noticed].

Please inspect and arrange repair works urgently. If I do not receive a satisfactory response within 14 days, I will seek help from the local council and Housing Rights.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Northern Ireland fitness standard and housing condition enforcement rules",
        },
      },
      nir2: {
        id: "nir2",
        question: "Have you reported the issue in writing?",
        info: "A dated written complaint makes it much easier to prove delay or refusal.",
        options: [
          { label: "Yes, and there was no response", nextId: "nir_no_response" },
          { label: "Yes, and they refused", nextId: "nir_refused" },
          { label: "No, only verbally", nextId: "nir_write_first" },
        ],
      },
      nir_write_first: {
        id: "nir_write_first",
        result: {
          title: "Put the repair request in writing first",
          summary: "Before escalating, send a clear written request with dates, photos, and the impact on you.",
          steps: [
            "Write to your landlord or agent by email or letter",
            "Describe the issue clearly and attach photos",
            "Say when you first noticed the problem",
            "Ask for inspection and repair within a reasonable timeframe",
            "Keep copies of everything you send",
          ],
          letterTemplate: `Dear [Landlord Name],

Re: Repair request — [Property Address]

I am writing to report a repair issue at the above property.

Description: [Describe the problem]
Date first noticed: [Date]
Location: [Room / area]

Please arrange inspection and repair within a reasonable timeframe and confirm the next steps in writing.

Yours sincerely,
[Your Name]
[Date]`,
          legalRef: "Private Tenancies (Northern Ireland) Order 2006",
        },
      },
      nir_no_response: {
        id: "nir_no_response",
        result: {
          title: "No response — escalate the repair complaint",
          summary: "If your landlord ignores written reports, ask the council to look at hazards and get advice quickly.",
          steps: [
            "Send a final written reminder with a short deadline",
            "Contact your local council's Environmental Health team",
            "Ask for an inspection if the problem affects safety or fitness",
            "Keep records of all unanswered messages",
            "Contact Housing Rights for help with the next step",
          ],
          legalRef: "Northern Ireland housing conditions and fitness standard enforcement",
        },
      },
      nir_refused: {
        id: "nir_refused",
        result: {
          title: "Refused repairs — you still have options",
          summary: "A landlord cannot simply ignore serious repair duties where the property becomes unsafe or unfit.",
          steps: [
            "Keep the refusal in writing, or confirm it by email if it was verbal",
            "Report serious hazards to your local council",
            "Get medical evidence if damp, mould, cold, or disrepair is affecting your health",
            "Take advice from Housing Rights before spending your own money on repairs",
            "Keep a complete file of photos, dates, and communications",
          ],
          legalRef: "Private Tenancies (Northern Ireland) Order 2006; Northern Ireland fitness standard rules",
        },
      },
    },
  },
  {
    id: "eviction-ni",
    title: "Unfair Eviction Notice",
    description: "You have received a notice or threat and are not sure if it is valid",
    icon: "📋",
    startNodeId: "nie1",
    nodes: {
      nie1: {
        id: "nie1",
        question: "What have you received from your landlord?",
        info: "In Northern Ireland, private landlords usually start possession with a written Notice to Quit. They cannot lawfully evict you just by text, verbal threat, or changing the locks.",
        options: [
          { label: "A written Notice to Quit", nextId: "nie_notice" },
          { label: "A verbal threat / text only", nextId: "nie_verbal" },
          { label: "I'm not sure", nextId: "nie_identify" },
        ],
      },
      nie_identify: {
        id: "nie_identify",
        result: {
          title: "Identify whether it is a real Notice to Quit",
          summary: "A valid eviction usually starts with a formal written notice. Informal threats are not enough.",
          steps: [
            "Check whether the notice is in writing and clearly says when the tenancy must end",
            "Take a photo or scan of the full notice",
            "Check how long you have lived in the property before assessing the notice period",
            "If you are unsure, contact Housing Rights before moving out",
          ],
          legalRef: "Private Tenancies (Northern Ireland) Order 2006; Private Tenancies Act (Northern Ireland) 2022, Section 11",
        },
      },
      nie_verbal: {
        id: "nie_verbal",
        result: {
          title: "A verbal eviction threat is not enough",
          summary: "Your landlord cannot lawfully evict you by threat, text, or by trying to force you out without the proper process.",
          steps: [
            "Do not leave just because you were told to verbally",
            "Ask for everything in writing",
            "If the landlord harasses you or tries to lock you out, call the police",
            "Contact Housing Rights urgently for advice",
            "If you have nowhere safe to go, contact the Northern Ireland Housing Executive for homelessness help",
          ],
          legalRef: "Protection from Eviction (Northern Ireland) Order 1978",
        },
      },
      nie_notice: {
        id: "nie_notice",
        question: "How long have you lived in the property?",
        info: "Notice to Quit periods in Northern Ireland generally depend on the length of the tenancy.",
        options: [
          { label: "Less than 12 months", nextId: "nie_lt12" },
          { label: "1 year to 10 years", nextId: "nie_1to10" },
          { label: "More than 10 years", nextId: "nie_over10" },
          { label: "I'm not sure", nextId: "nie_check" },
        ],
      },
      nie_check: {
        id: "nie_check",
        result: {
          title: "Check your tenancy start date first",
          summary: "The amount of notice usually depends on how long the tenancy has existed.",
          steps: [
            "Check your tenancy agreement or first rent receipt for the start date",
            "Count the total time you have lived there, not just the latest fixed term",
            "Then compare the written notice period with the rules for your tenancy length",
            "Contact Housing Rights if the calculation is unclear",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 11",
        },
      },
      nie_lt12: {
        id: "nie_lt12",
        question: "Did the notice give you at least 4 weeks?",
        options: [
          { label: "Yes", nextId: "nie_valid" },
          { label: "No", nextId: "nie_invalid" },
          { label: "I'm not sure", nextId: "nie_notice_check" },
        ],
      },
      nie_1to10: {
        id: "nie_1to10",
        question: "Did the notice give you at least 8 weeks?",
        options: [
          { label: "Yes", nextId: "nie_valid" },
          { label: "No", nextId: "nie_invalid" },
          { label: "I'm not sure", nextId: "nie_notice_check" },
        ],
      },
      nie_over10: {
        id: "nie_over10",
        question: "Did the notice give you at least 12 weeks?",
        options: [
          { label: "Yes", nextId: "nie_valid" },
          { label: "No", nextId: "nie_invalid" },
          { label: "I'm not sure", nextId: "nie_notice_check" },
        ],
      },
      nie_notice_check: {
        id: "nie_notice_check",
        result: {
          title: "Check the notice dates carefully",
          summary: "Count the full notice period from when the written notice was served to the date it says the tenancy should end.",
          steps: [
            "Find the date the notice was given to you",
            "Find the date the notice says the tenancy ends",
            "Count the full weeks in between",
            "If the period is too short, the notice may be invalid",
            "Get advice before leaving the property",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 11",
        },
      },
      nie_invalid: {
        id: "nie_invalid",
        result: {
          title: "The notice may be invalid because the period is too short",
          summary: "If the Notice to Quit gives less than the required period for your tenancy length, you may have a defence.",
          steps: [
            "Do not leave just because the notice says so",
            "Write back saying you believe the notice period is invalid",
            "Keep the envelope, message trail, and a copy of the notice",
            "If court papers arrive, get advice immediately and respond on time",
            "Contact Housing Rights for help checking the notice",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 11",
        },
      },
      nie_valid: {
        id: "nie_valid",
        result: {
          title: "The notice period may be valid — but you still have rights",
          summary: "Even if the notice length looks correct, your landlord still needs to follow the legal process to recover possession.",
          steps: [
            "Check the notice is in writing and clearly dated",
            "Do not ignore any later court papers",
            "Start gathering documents about your tenancy and payments",
            "If you have nowhere to go, contact the Northern Ireland Housing Executive as early as possible",
            "Get advice from Housing Rights before moving out or agreeing anything",
          ],
          legalRef: "Private Tenancies (Northern Ireland) Order 2006; Private Tenancies Act (Northern Ireland) 2022",
        },
      },
    },
  },
  {
    id: "rent-increase-ni",
    title: "Unfair Rent Increase",
    description: "Your landlord wants to increase the rent and you are unsure if the process is legal",
    icon: "📈",
    startNodeId: "niri1",
    nodes: {
      niri1: {
        id: "niri1",
        question: "How was the rent increase given to you?",
        info: "In Northern Ireland, a private landlord can usually only increase rent once in a 12-month period and must give at least 2 months' written notice.",
        options: [
          { label: "Formal written notice", nextId: "niri2" },
          { label: "Verbally / text / informal message", nextId: "niri_informal" },
        ],
      },
      niri_informal: {
        id: "niri_informal",
        result: {
          title: "An informal rent increase is not valid",
          summary: "A verbal or text demand is not the proper way to increase rent in Northern Ireland.",
          steps: [
            "Keep paying the current rent unless and until valid written notice is served",
            "Reply in writing asking for the formal notice required by law",
            "Keep screenshots or copies of the message",
            "Contact Housing Rights if the landlord pressures you to pay more immediately",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri2: {
        id: "niri2",
        question: "Has the rent been increased in the last 12 months?",
        options: [
          { label: "Yes", nextId: "niri_too_soon" },
          { label: "No", nextId: "niri3" },
          { label: "I'm not sure", nextId: "niri_check" },
        ],
      },
      niri_check: {
        id: "niri_check",
        result: {
          title: "Check the last rent increase date first",
          summary: "You need to know when the current rent last changed before deciding if the new notice is lawful.",
          steps: [
            "Check your bank statements and tenancy paperwork",
            "Look for the date the current rent first started",
            "If the last increase was less than 12 months ago, the new increase may be invalid",
            "Contact Housing Rights if the timeline is unclear",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri_too_soon: {
        id: "niri_too_soon",
        result: {
          title: "The increase may be too soon",
          summary: "A landlord in Northern Ireland cannot usually increase rent more than once in a 12-month period.",
          steps: [
            "Write back explaining you believe the increase breaches the 12-month rule",
            "Keep paying the current rent while you seek advice",
            "Save the notice and proof of the previous increase date",
            "Contact Housing Rights before withholding or underpaying anything long-term",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri3: {
        id: "niri3",
        question: "Were you given at least 2 months' written notice before the new rent starts?",
        options: [
          { label: "Yes", nextId: "niri4" },
          { label: "No", nextId: "niri_short_notice" },
          { label: "I'm not sure", nextId: "niri_notice_check" },
        ],
      },
      niri_notice_check: {
        id: "niri_notice_check",
        result: {
          title: "Check the notice dates carefully",
          summary: "Count the time between the date the written notice was given and the date the higher rent starts.",
          steps: [
            "Find the date the notice was served",
            "Find the date the new rent is due to start",
            "Count the full two months between them",
            "If the period is shorter, the increase may not be valid",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri_short_notice: {
        id: "niri_short_notice",
        result: {
          title: "Insufficient notice — the increase may be invalid",
          summary: "If the landlord gave less than 2 months' written notice, the increase may not take effect when they say it does.",
          steps: [
            "Write back and explain you believe the notice period is too short",
            "Keep paying your current rent while taking advice",
            "Keep copies of the written notice and any responses",
            "Contact Housing Rights if the landlord threatens action",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri4: {
        id: "niri4",
        question: "Does the new rent seem much higher than similar properties nearby?",
        options: [
          { label: "Yes", nextId: "niri_high" },
          { label: "No", nextId: "niri_fair" },
          { label: "I'm not sure", nextId: "niri_research" },
        ],
      },
      niri_high: {
        id: "niri_high",
        result: {
          title: "Challenge it informally and get advice",
          summary: "Northern Ireland does not have the same tribunal route used elsewhere, so start by negotiating with evidence and getting advice.",
          steps: [
            "Collect comparable rents from similar local properties",
            "Write to your landlord asking them to justify the increase",
            "Propose a lower or phased increase if you want to stay",
            "Get advice from Housing Rights before refusing to pay the new amount",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri_fair: {
        id: "niri_fair",
        result: {
          title: "The increase may be lawful",
          summary: "If the 12-month rule and 2-month notice rule were followed, the increase may be valid even if it is unwelcome.",
          steps: [
            "Check your budget and payment date carefully",
            "Try negotiating if the increase is difficult to afford",
            "Ask about a phased increase or longer fixed term",
            "Seek benefits or debt advice early if affordability is a problem",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
      niri_research: {
        id: "niri_research",
        result: {
          title: "Research the local market first",
          summary: "Before you agree or object, compare the proposed rent with similar properties nearby.",
          steps: [
            "Check at least 5 comparable local listings",
            "Match by bedrooms, location, condition, and furnishing",
            "Keep screenshots of the best comparisons",
            "If the proposed rent looks high, write to the landlord and seek advice",
          ],
          legalRef: "Private Tenancies Act (Northern Ireland) 2022, Section 7",
        },
      },
    },
  },
  {
    id: "harassment-ni",
    title: "Landlord Harassment",
    description: "Your landlord or agent is intimidating, threatening, or interfering with your home",
    icon: "🚨",
    startNodeId: "nih1",
    nodes: {
      nih1: {
        id: "nih1",
        question: "What kind of behaviour are you experiencing?",
        info: "Harassment and illegal eviction are criminal offences in Northern Ireland. This can include conduct by a landlord, letting agent, or anyone acting for them.",
        options: [
          { label: "Entering without permission", nextId: "nih_entry" },
          { label: "Threats, intimidation, or abuse", nextId: "nih_threats" },
          { label: "Cutting off utilities or changing locks", nextId: "nih_utilities" },
          { label: "Constant unwanted contact or visits", nextId: "nih_contact" },
        ],
      },
      nih_entry: {
        id: "nih_entry",
        result: {
          title: "Unauthorised entry may be harassment",
          summary: "Your landlord should not keep entering without proper notice and your consent, except in genuine emergencies.",
          steps: [
            "Tell the landlord or agent in writing that entry without agreement must stop",
            "Keep a diary of every incident with dates and times",
            "Change the arrangement for inspections to written appointments only",
            "If it continues, contact Housing Rights or the police on 101",
          ],
          legalRef: "Protection from Eviction (Northern Ireland) Order 1978",
        },
      },
      nih_threats: {
        id: "nih_threats",
        result: {
          title: "Threats and intimidation are serious",
          summary: "Threatening messages, pressure to leave, and abusive conduct can amount to harassment.",
          steps: [
            "Save texts, emails, call logs, and voicemails",
            "Keep a written log of every incident",
            "If you feel unsafe, call 999",
            "For non-emergencies, report the conduct to police on 101",
            "Contact Housing Rights for urgent housing advice",
          ],
          legalRef: "Protection from Eviction (Northern Ireland) Order 1978",
        },
      },
      nih_utilities: {
        id: "nih_utilities",
        result: {
          title: "Changing locks or cutting off utilities is illegal",
          summary: "Lockouts and service cut-offs are classic signs of illegal eviction and need urgent action.",
          steps: [
            "Call 999 if you are locked out or in immediate danger",
            "Take photos and screenshots immediately",
            "Do not force entry unless advised by police or emergency services",
            "Contact Housing Rights urgently",
            "If you are homeless or at risk tonight, contact the Northern Ireland Housing Executive",
          ],
          legalRef: "Protection from Eviction (Northern Ireland) Order 1978",
        },
      },
      nih_contact: {
        id: "nih_contact",
        result: {
          title: "Constant pressure can still be harassment",
          summary: "Repeated messages, calls, or visits intended to make you leave can be unlawful.",
          steps: [
            "Set a clear written boundary for communication",
            "Keep a log of every call, text, and visit",
            "Ask the landlord or agent to contact you only in writing",
            "If it continues, contact Housing Rights and consider reporting it to police",
          ],
          legalRef: "Protection from Eviction (Northern Ireland) Order 1978",
        },
      },
    },
  },
  {
    id: "hmo-ni",
    title: "HMO & Licensing Issues",
    description: "Problems with shared housing, overcrowding, or unlicensed HMOs",
    icon: "🏠",
    startNodeId: "nihmo1",
    nodes: {
      nihmo1: {
        id: "nihmo1",
        question: "How many people from different households share the property?",
        info: "In Northern Ireland, many shared houses with 3 or more people from 2 or more households need an HMO licence from the local council.",
        options: [
          { label: "3 or more people from different households", nextId: "nihmo_hmo" },
          { label: "1-2 people only / family household", nextId: "nihmo_not" },
        ],
      },
      nihmo_not: {
        id: "nihmo_not",
        result: {
          title: "The property may not be an HMO",
          summary: "You may still have repair, safety, or tenancy rights even if the property is not classed as an HMO.",
          steps: [
            "Return to the homepage and choose the issue that best matches your problem",
            "If the property is unsafe, contact the local council",
            "Contact Housing Rights if you need help identifying the correct route",
          ],
          legalRef: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
        },
      },
      nihmo_hmo: {
        id: "nihmo_hmo",
        question: "Do you know if the property is licensed as an HMO?",
        options: [
          { label: "Yes", nextId: "nihmo_licensed" },
          { label: "No or not sure", nextId: "nihmo_unlicensed" },
        ],
      },
      nihmo_unlicensed: {
        id: "nihmo_unlicensed",
        result: {
          title: "The property may be operating without the right licence",
          summary: "Local councils license HMOs in Northern Ireland. If a licensable HMO is not licensed, the council should investigate.",
          steps: [
            "Contact your local council's HMO licensing team and ask if the property is licensed",
            "Keep records of the number of occupiers and shared facilities",
            "Report any safety or overcrowding concerns at the same time",
            "Contact Housing Rights if you need help making the complaint",
          ],
          legalRef: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
        },
      },
      nihmo_licensed: {
        id: "nihmo_licensed",
        question: "What issue are you facing in the shared property?",
        options: [
          { label: "Fire safety concerns", nextId: "nihmo_fire" },
          { label: "Overcrowding", nextId: "nihmo_overcrowding" },
          { label: "Licence conditions not being met", nextId: "nihmo_conditions" },
        ],
      },
      nihmo_fire: {
        id: "nihmo_fire",
        result: {
          title: "Fire safety standards are critical in HMOs",
          summary: "Shared properties should have working alarms, safe escape routes, and other precautions required by licence conditions and safety law.",
          steps: [
            "Check for working smoke alarms and clear escape routes",
            "Photograph missing alarms, blocked exits, or damaged fire doors",
            "Report the issue to the landlord or agent in writing",
            "Report urgent risks to the local council and, if necessary, the fire service",
            "If anyone is in immediate danger, call 999",
          ],
          legalRef: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
        },
      },
      nihmo_overcrowding: {
        id: "nihmo_overcrowding",
        result: {
          title: "Overcrowding may breach the licence",
          summary: "Too many occupants in a shared home can create serious safety and management problems.",
          steps: [
            "Count how many people are living there and which rooms are being used as bedrooms",
            "Check if the number seems higher than the licence should allow",
            "Report overcrowding to the local council's HMO team",
            "Keep a note of dates, room use, and any related safety issues",
          ],
          legalRef: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
        },
      },
      nihmo_conditions: {
        id: "nihmo_conditions",
        result: {
          title: "Report licence breaches to the council",
          summary: "If the landlord is not complying with HMO licence conditions, the council can investigate and enforce.",
          steps: [
            "Request details of the HMO licence if possible",
            "Document the problems with photos and dates",
            "Report the breaches to the local council's HMO licensing team",
            "Contact Housing Rights if the problems continue or affect your tenancy",
          ],
          legalRef: "Houses in Multiple Occupation Act (Northern Ireland) 2016",
        },
      },
    },
  },
];