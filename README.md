# BetterPlace One — Enterprise Sales Studio

A hosted, clickable group pitch deck for BetterPlace. Open it before any client meeting,
brand it with the client's logo and colour, and present the group story or drill as deep
as the room wants into any product — like a PPT, but alive in the browser.

**Live:** https://website684.github.io/bp-group-deck/

## What's inside
- **Setup screen** — client name, logo upload, brand colour, industry lens. Branding
  persists locally and appears on every slide (`BetterPlace ✕ Client` strip).
- **Hub** — present the full group story (21 slides), or open any drill-down:
  AI Labs (flagship) · skillBetter LMS · Hire & Onboard · verifyBetter BGV ·
  Attendance · Payroll & Compliance · goBetter HRIS · staffBetter & gigBetter ·
  5 industry lenses (Retail/Q-commerce, Manufacturing, Logistics, BFSI, Tech & Services).
- **Custom flow** — pick modules; the app stitches group opening + modules + proof close.
- **Deck player** — keyboard (←/→/space/Esc), click, swipe, dot nav, count-ups,
  choreographed entrances. Deep-link any slide: `#/deck/ai-labs?s=4`.

## Develop
```bash
npm install
npm run dev          # local
npm run build        # production → dist/
rm -rf docs && cp -R dist docs   # Pages serves /docs on main
git add -A && git commit -m "update" && git push
```

## Editing content
Slides are HTML strings in `src/decks/*.ts` using the proven Palette A class vocabulary
(`src/styles/legacy-deck.css`, extracted from the studio's betterplace-group sample deck,
plus new components in `src/styles/app.css`: `.bframe` browser frames, `.vs` compare
strips, `.tiers`, `.chat`, `.mdcover`). Knowledge sources live in the Deck Studio
`knowledge/` pack — keep facts in sync with it.
