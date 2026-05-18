# 10 — Screenshot / QA / Release Master

## Mission

Stop bad work from shipping.

## Required Screenshots

Capture:
- desktop 1440
- laptop 1280
- tablet 1024
- mobile 390
- mobile menu open
- key hover/tap state
- form empty/error/success
- 404 page
- any 3D/signature interaction state

## Visual Review Questions

- Is the business clear in 5 seconds?
- Does it look custom?
- Is the hero memorable?
- Is typography premium?
- Is layout confident?
- Is spacing intentional?
- Is CTA obvious?
- Is mobile designed?
- Are images/assets high quality?
- Does motion support the story?
- Does anything feel like a template?
- Does it have one thing worth remembering?

## Brutal Reject List

Reject if:
- centered generic hero + gradient button + three cards
- random Spline/blob
- weak default typography
- stock photo cliché
- fake dashboard
- no visible CTA
- content says nothing specific
- mobile hero is broken
- nav hidden/confusing
- visual hierarchy unclear
- performance obviously poor
- accessibility obvious fail

## QA Commands

```bash
npm install
npm run typecheck --if-present
npm run lint --if-present
npm run build --if-present
npm run test --if-present
npx playwright test
npx lighthouse http://localhost:3000 --view
npx @axe-core/cli http://localhost:3000
```

Run only commands that exist/configured.

## Release Report Template

```md
# Release QA Report

## Commands Run
...

## Screenshots Reviewed
...

## Passed
...

## Failed
...

## Fixes Applied
...

## Remaining Limitations
...

## Ship Decision
PASS / NO SHIP
```

## Final Handoff Must Include

- concept
- stack
- pages built
- assets used/generated
- license notes
- commands run
- QA status
- limitations
- next real-world inputs needed
