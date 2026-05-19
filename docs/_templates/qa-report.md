# QA Report

Command outputs and accessibility / performance / asset-readiness findings. Truth labels required.

## Build commands

| Command | Status | Label | Evidence (path / log ref) |
|---|---|---|---|
| `npm run typecheck` | <FILL IN — pass / fail / not run> | <FILL IN — Verified / Manual review / Not run / Blocked> | <FILL IN> |
| `npm run lint` | <FILL IN> | <FILL IN> | <FILL IN> |
| `npm run build` | <FILL IN> | <FILL IN> | <FILL IN> |
| `npm run test` | <FILL IN> | <FILL IN> | <FILL IN> |
| `npm run screenshots` | <FILL IN> | <FILL IN> | <FILL IN> |
| `npm run analyze:assets` | <FILL IN> | <FILL IN> | <FILL IN> |
| `npm run design:readiness` | <FILL IN> | <FILL IN> | <FILL IN> |

## Accessibility

| Check | Result | Label | Evidence |
|---|---|---|---|
| Keyboard nav reaches every interactive element | <FILL IN> | <FILL IN> | <FILL IN> |
| Focus state visible on every interactive element | <FILL IN> | <FILL IN> | <FILL IN> |
| Color contrast WCAG 2.2 AA | <FILL IN> | <FILL IN> | <FILL IN — axe report ref> |
| Heading hierarchy logical | <FILL IN> | <FILL IN> | <FILL IN> |
| Alt text on every meaningful image | <FILL IN> | <FILL IN> | <FILL IN> |
| Reduced-motion path verified | <FILL IN> | <FILL IN> | <FILL IN> |
| Forms have labels, errors are described | <FILL IN> | <FILL IN> | <FILL IN> |
| Screen reader can complete the primary action | <FILL IN> | <FILL IN> | <FILL IN> |

See `.claude/skills/award-website-os/references/10-a11y-ux-guardian-master.md`.

## Performance

| Metric | Target | Measured | Label | Evidence |
|---|---|---|---|---|
| LCP mobile (3G fast) | < 2.5s | <FILL IN> | <FILL IN> | <FILL IN — lighthouse run / webpagetest URL> |
| CLS | < 0.1 | <FILL IN> | <FILL IN> | <FILL IN> |
| INP | < 200ms | <FILL IN> | <FILL IN> | <FILL IN> |
| Total JS shipped | < 250 KB gz | <FILL IN> | <FILL IN> | <FILL IN> |
| Total CSS shipped | < 50 KB gz | <FILL IN> | <FILL IN> | <FILL IN> |
| Total image weight (hero pages) | < 800 KB | <FILL IN> | <FILL IN> | <FILL IN> |

## WebGL / 3D (if applicable)

| Metric | Target | Measured | Label | Evidence |
|---|---|---|---|---|
| Scene initial paint | < 2s | <FILL IN> | <FILL IN> | <FILL IN> |
| FPS desktop | 60 | <FILL IN> | <FILL IN> | <FILL IN> |
| FPS mobile | ≥ 30 | <FILL IN> | <FILL IN> | <FILL IN> |
| JS heap during interaction (mobile) | < 250 MB | <FILL IN> | <FILL IN> | <FILL IN> |
| Idle memory growth (60s) | 0 | <FILL IN> | <FILL IN> | <FILL IN> |

## Asset audit

| Check | Result | Label | Evidence |
|---|---|---|---|
| Every external/generated asset in `asset-ledger.csv` | <FILL IN> | <FILL IN> | <FILL IN> |
| Every asset has license/permission field filled | <FILL IN> | <FILL IN> | <FILL IN> |
| No AI-generated person presented as real | <FILL IN> | <FILL IN> | <FILL IN> |
| Fonts licensed for web | <FILL IN> | <FILL IN> | <FILL IN> |

## Cross-browser

| Browser | Render OK | Interaction OK | Label |
|---|---|---|---|
| Chrome (desktop) | <FILL IN> | <FILL IN> | <FILL IN> |
| Safari (macOS) | <FILL IN> | <FILL IN> | <FILL IN> |
| Firefox (desktop) | <FILL IN> | <FILL IN> | <FILL IN> |
| Safari (iOS) | <FILL IN> | <FILL IN> | <FILL IN> |
| Chrome (Android) | <FILL IN> | <FILL IN> | <FILL IN> |

## No-ship blockers (per `VALIDATION_PROTOCOL.md`)

<FILL IN — numbered list of any blocker that is still failing. If none, write "None.">

## Summary counts

- Verified: <FILL IN>
- Manual review: <FILL IN>
- Not run: <FILL IN>
- Blocked: <FILL IN>

Compute these honestly; the ship gate uses them.
