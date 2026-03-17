# 🛡️ RenterShield

A free, mobile-first web app that helps UK private renters understand their legal rights and take action to protect their homes.

## What it does

RenterShield guides renters through common tenancy issues using interactive decision trees. Users select their problem, answer a few simple questions, and receive:

- **Personalised action plans** — step-by-step guidance tailored to their situation
- **Template letters** — ready-to-copy correspondence for landlords and agencies
- **Legal references** — links to relevant English tenancy law

## Covered issues

- 🔧 Repairs & maintenance
- 🏠 Deposit disputes
- 📜 Eviction & Section 21 notices
- *(and more as the project grows)*

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS + shadcn/ui |
| Build | Vite |
| Testing | Vitest + Playwright |
| Hosting | [Lovable](https://lovable.dev) |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run unit tests
npx vitest

# Run e2e tests
npx playwright test
```

## Project structure

```
src/
├── components/ui/   # Reusable UI components (shadcn/ui)
├── data/            # Issue tree decision data
├── hooks/           # Custom React hooks
├── pages/           # Route-level page components
│   ├── Index.tsx    # Landing page with issue cards
│   └── IssuePage.tsx # Interactive decision tree flow
└── lib/             # Utilities
```

## How it works

1. **Choose your issue** — select from guided categories on the home page
2. **Answer questions** — a decision tree narrows down your specific situation
3. **Get your action plan** — receive tailored steps, template letters, and legal references

## Disclaimer

RenterShield provides guidance based on English tenancy law. **This is not legal advice.** For urgent issues, contact [Shelter](https://www.shelter.org.uk) or [Citizens Advice](https://www.citizensadvice.org.uk).

## Live site

🌐 [rentershield.lovable.app](https://rentershield.lovable.app)
