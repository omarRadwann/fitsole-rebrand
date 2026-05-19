---
name: ship-gate
description: Run the final truth-labeled ship gate and decide ship / hold / disclose-and-ship.
---

# /ship-gate

See `.claude/skills/ship-gate/SKILL.md` for the full protocol.

## Step 1 — fill the QA report

Open `docs/qa-report.md`. Run every command. Truth-label every result: `Verified`, `Manual review`, `Not run`, `Blocked`.

```bash
cd workspace/<slug>
npm run typecheck
npm run lint
npm run build
npm run test
npm run screenshots
npm run analyze:assets
npm run design:readiness
```

## Step 2 — confirm screenshot matrix

Open `docs/screenshot-matrix.md`. Confirm desktop, mobile, reduced-motion are captured for every section. The "founder-share" frame must be named.

## Step 3 — confirm taste rubric passes

Open `docs/design-red-team-rubric.md`. Average ≥ 8.5 AND no category < 7.5 AND all 6 anti-genericity boxes checked.

## Step 4 — confirm asset rights

Open `docs/asset-ledger.csv`. Every row has license/permission filled. No AI-generated person presented as real.

## Step 5 — fill `docs/ship-decision.md`

Truth-label every gate. Recommendation must be one of: `Ship` / `Hold` / `Disclose limitations and ship`.

Ship is allowed only when:
- Zero `Not run` in blocking gates (build, visual QA, a11y, performance, assets).
- Every `Blocked` is explicitly disclosed in the recommendation.
- Verified count ≥ 70% of total labeled items.

## Step 6 — run the gate

```bash
make project-ship-check
```

If it fails, fix the issues and re-run. Do not edit the ship-decision to hide failures.

## Step 7 — if shipping, hand off

Tell the user exactly:
- What to do post-launch (analytics, sales-script, monitoring).
- The rollback trigger.
- Which items are `Manual review` they should personally verify.

Do not deploy without explicit user approval.
