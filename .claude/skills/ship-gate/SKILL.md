---
name: ship-gate
description: Run the final ship gate. Use only when the site is built, screenshots are captured, and QA reports are filled.
when_to_use: At the end of the project, after the red-team / repair loop has converged and the QA report has command outputs in it.
effort: medium
---

# Ship Gate

The last check before declaring a project shipped. Produces `docs/ship-decision.md` with truth labels and confirms `make project-ship-check` exits 0.

## First action

Read:

1. `SOURCE_OF_TRUTH.md` (the truth-label vocabulary)
2. `VALIDATION_PROTOCOL.md` (the full gate list)
3. `.claude/skills/award-website-os/references/37-strict-qa-gates-master.md`
4. `.claude/skills/award-website-os/references/55-project-ship-gate.md`
5. `.claude/skills/award-website-os/references/64-awwwards-jury-and-scoring-master.md`

## Required inputs (must already exist, filled, project-specific)

- `docs/one-input-brief.md`
- `docs/assumptions.md`
- `docs/research-brief.md`
- `docs/concept-scorecard.md` (with selected concept)
- `docs/art-direction.md`
- `docs/copy-system.md`
- `docs/asset-ledger.csv` (with license/permission for each row)
- `docs/tech-stack-decision.md`
- `docs/screenshot-matrix.md` (desktop + mobile + reduced-motion)
- `docs/visual-review.md`
- `docs/design-red-team-rubric.md` (avg ≥ 8.5, no category < 7.5)
- `docs/qa-report.md` (with command outputs)
- `docs/agent-court-report.md`

If any is missing or templated, return to that step. Do not write `docs/ship-decision.md` from a templated state.

## Write `docs/ship-decision.md`

Use the truth-label vocabulary exactly: `Verified`, `Manual review`, `Not run`, `Blocked`.

Required sections:

```
## Business clarity
Result: <one sentence on what this site is and what it does>
Label: Verified | Manual review | Not run | Blocked
Evidence: <screenshot ref, command output, or note>

## Concept and signature
Selected concept:
Signature idea:
Signature visual:
Signature interaction:
Memorable screenshot reference:
Brave decision:
Label:
Evidence:

## Build checks
- typecheck:    <result>   Label:    Evidence:
- lint:         <result>   Label:    Evidence:
- build:        <result>   Label:    Evidence:
- test:         <result>   Label:    Evidence:

## Visual QA
- desktop screenshots:        Label:    Evidence:
- mobile screenshots:         Label:    Evidence:
- reduced-motion screenshots: Label:    Evidence:
- taste rubric average:       Label:    Evidence:

## Accessibility
- keyboard navigation:        Label:    Evidence:
- focus visibility:           Label:    Evidence:
- contrast (axe / manual):    Label:    Evidence:
- reduced-motion path:        Label:    Evidence:

## Performance
- LCP (mobile):               Label:    Evidence:
- CLS:                        Label:    Evidence:
- INP / TBT:                  Label:    Evidence:
- 3D / WebGL fps (if any):    Label:    Evidence:

## Assets and rights
- asset ledger complete:      Label:    Evidence:
- generated-people not used as real:  Label:    Evidence:
- fonts licensed:             Label:    Evidence:
- imagery rights cleared:     Label:    Evidence:

## No-ship blockers
<numbered list, or "None">

## Recommendation
Ship | Hold | Disclose limitations and ship

## What is Verified, what is Manual review, what is Not run, what is Blocked
<counts>
```

## Run the gate

```bash
make strict-check
make project-ship-check
```

Both must exit 0. If either fails, do not write "Ship" in the recommendation.

## Award candidacy (optional, only if applicable)

If pursuing Awwwards / SOTD / Developer Award / Mobile Excellence, also fill `docs/awwwards-jury-scorecard.md` per reference `64-awwwards-jury-and-scoring-master.md`. Note: not every project should pursue awards; do this only if the user has explicitly opted in or the project is genuinely award-capable.

## Honesty rule

If the rubric average is 8.0, do not write 9.0. If the test suite has 3 skipped tests, do not write `Verified`. If the asset ledger has one row without a license, do not write `Verified`. The whole pack exists so the operator and the user can trust the ship decision; do not undermine it at the last gate.

Arguments:

$ARGUMENTS
