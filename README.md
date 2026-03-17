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

## Why it exists

Renter rights information often exists, but it is scattered across official websites, advice organisations, and legal guidance pages that can be hard to navigate under stress.

RenterShield is designed to make that first step easier by giving renters clear, practical, plain-English guidance they can use immediately.

## Current coverage

The prototype currently includes:

- **Interactive issue flows**
- **Rights summaries by region**
- **Emergency and support contacts**
- **Template letters and legal references**
- **Public access with no login required**

## Live prototype

- **Published app:** https://rentershield.lovable.app

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS + shadcn/ui |
| Build | Vite |
| Testing | Vitest + Playwright |
| Hosting | Lovable |

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
├── lib/              # Utilities
├── pages/            # Route-level screens
└── test/             # Test setup and specs
```

## Main routes

- `/` — homepage and issue selection
- `/issue/:issueId` — guided issue flow
- `/rights` — region-specific renter rights
- `/emergency` — emergency and support contacts

## How it works

1. **Select your issue**
2. **Answer a few guided questions**
3. **Review your action plan**
4. **Use the template letter or support links if needed**

## Disclaimer

RenterShield provides general guidance based on tenancy law and housing support information for different UK regions. It is **not legal advice** and should not replace professional legal support for complex or urgent cases.

If someone is in immediate danger, they should call **999** first.
