# 🛡️ RenterShield

RenterShield is a free, mobile-first web app that helps private renters across the UK understand their rights, explore issue-specific guidance, and take practical next steps.

## What the prototype does

The current prototype gives renters a fast, no-login way to move from uncertainty to action.

Users can:

- **Choose an issue** such as repairs, deposit disputes, eviction, rent increases, or emergency housing problems
- **Answer guided questions** through interactive decision-tree flows
- **Get tailored action steps** based on their situation
- **Copy template letters** for common landlord and tenancy disputes
- **Read region-specific rights guidance** for England, Wales, Scotland, and Northern Ireland
- **Access emergency and support contacts** when urgent help is needed
- **Use an AI housing guide** on its own page for region-aware informational guidance grounded in RenterShield’s existing rights, issue-tree, and support content

## Why it exists

Renter rights information often exists, but it is scattered across official websites, advice organisations, and legal guidance pages that can be hard to navigate under stress.

RenterShield is designed to make that first step easier by giving renters clear, practical, plain-English guidance they can use immediately.

## Current coverage

The prototype currently includes:

- **Interactive issue flows**
- **Rights summaries by region**
- **Emergency and support contacts**
- **Template letters and legal references**
- **AI legal guidance chat page**
- **Public access with no login required**

## Live prototype

- **Published app:** https://rentershield.lovable.app

## AI chatbot usage limits

The AI Housing Guide is powered by Lovable Cloud and Lovable AI.

Important notes:

- **Chat usage is limited by Lovable’s monthly Cloud and AI allowance** for the workspace running this project.
- There is **not a fixed number of chats or prompts** because cost depends on message length, conversation history, response length, and model usage.
- If the monthly free allowance is exhausted, the chatbot may stop working until the allowance resets or the workspace is topped up.
- Usage and charges can be monitored in **Settings → Cloud & AI balance**.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS + shadcn/ui |
| Build | Vite |
| Testing | Vitest + Playwright |
| Hosting | Lovable |
| Backend | Lovable Cloud edge functions |
| AI | Lovable AI |

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Run unit tests
npm run test
```

## Project structure

```text
src/
├── components/       # Reusable UI components
├── contexts/         # Shared app state such as selected region
├── data/             # Issue trees, rights data, and emergency contacts
├── hooks/            # Custom React hooks
├── lib/              # Utilities and shared legal chat knowledge
├── pages/            # Route-level screens
└── test/             # Test setup and specs

supabase/
└── functions/        # Lovable Cloud edge functions, including the AI legal chat endpoint
```

## Main routes

- `/` — homepage and issue selection
- `/issue/:issueId` — guided issue flow
- `/rights` — region-specific renter rights
- `/emergency` — emergency and support contacts
- `/chat` — AI housing guide

## How it works

1. **Select your issue** or open the AI guide
2. **Answer guided questions** or ask a tenancy question directly
3. **Review your action plan or AI response**
4. **Use template letters, issue flows, or support links if needed**

## Disclaimer

RenterShield provides general guidance based on tenancy law and housing support information for different UK regions. It is **not legal advice** and should not replace professional legal support for complex or urgent cases.

The AI Housing Guide also provides **informational guidance only** and may refer users to external support services or emergency contacts when a situation appears urgent.

If someone is in immediate danger, they should call **999** first.
