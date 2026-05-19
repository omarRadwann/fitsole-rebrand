# Ship Decision

The final, truth-labeled handoff. See the `ship-gate` skill at `.claude/skills/ship-gate/SKILL.md` and `VALIDATION_PROTOCOL.md`.

Use the four labels exactly: `Verified`, `Manual review`, `Not run`, `Blocked`.

## Business clarity

Result: <FILL IN — one sentence on what this site is and what it does>
Label: <FILL IN>
Evidence: <FILL IN — screenshot ref, command output, or note>

## Concept and signature

- Selected concept: <FILL IN>
- Signature idea: <FILL IN>
- Signature visual: <FILL IN — screenshot ref>
- Signature interaction: <FILL IN — link to `signature-interaction-spec.md`>
- Memorable screenshot reference: <FILL IN>
- Brave decision: <FILL IN — name it; if none exists, the project is not award-capable>

Label: <FILL IN>
Evidence: <FILL IN>

## Build checks

| Gate | Result | Label | Evidence |
|---|---|---|---|
| typecheck | <FILL IN> | <FILL IN> | <FILL IN> |
| lint | <FILL IN> | <FILL IN> | <FILL IN> |
| build | <FILL IN> | <FILL IN> | <FILL IN> |
| test | <FILL IN> | <FILL IN> | <FILL IN> |

## Visual QA

| Gate | Result | Label | Evidence |
|---|---|---|---|
| Desktop screenshots captured | <FILL IN> | <FILL IN> | <FILL IN — screenshot-matrix.md ref> |
| Mobile screenshots captured | <FILL IN> | <FILL IN> | <FILL IN> |
| Reduced-motion screenshots | <FILL IN> | <FILL IN> | <FILL IN> |
| Taste rubric average ≥ 8.5 | <FILL IN> | <FILL IN> | <FILL IN — design-red-team-rubric.md> |
| No category < 7.5 | <FILL IN> | <FILL IN> | <FILL IN> |
| Anti-genericity checks all pass | <FILL IN> | <FILL IN> | <FILL IN> |

## Accessibility

| Gate | Result | Label | Evidence |
|---|---|---|---|
| Keyboard navigation | <FILL IN> | <FILL IN> | <FILL IN — qa-report.md> |
| Focus visibility | <FILL IN> | <FILL IN> | <FILL IN> |
| Contrast pass | <FILL IN> | <FILL IN> | <FILL IN> |
| Reduced-motion path | <FILL IN> | <FILL IN> | <FILL IN> |

## Performance

| Metric | Target | Measured | Label | Evidence |
|---|---|---|---|---|
| LCP mobile | < 2.5s | <FILL IN> | <FILL IN> | <FILL IN> |
| CLS | < 0.1 | <FILL IN> | <FILL IN> | <FILL IN> |
| INP | < 200ms | <FILL IN> | <FILL IN> | <FILL IN> |
| 3D / WebGL fps (if any) | <FILL IN> | <FILL IN> | <FILL IN> | <FILL IN> |

## Assets and rights

| Gate | Result | Label | Evidence |
|---|---|---|---|
| Asset ledger complete | <FILL IN> | <FILL IN> | <FILL IN — asset-ledger.csv> |
| No AI-generated person presented as real | <FILL IN> | <FILL IN> | <FILL IN> |
| Fonts licensed | <FILL IN> | <FILL IN> | <FILL IN> |
| Imagery rights cleared | <FILL IN> | <FILL IN> | <FILL IN> |
| Paid tools logged | <FILL IN> | <FILL IN> | <FILL IN — tool-use-log.md> |

## No-ship blockers

Numbered list, or "None":

<FILL IN>

## Recommendation

Pick one: `Ship` / `Hold` / `Disclose limitations and ship`

<FILL IN — one paragraph explaining the recommendation. If "Disclose limitations and ship", list which limitations the user must accept.>

## Label totals

- Verified: <FILL IN>
- Manual review: <FILL IN>
- Not run: <FILL IN>
- Blocked: <FILL IN>

A ship recommendation requires:

- Zero items labeled `Not run` in the gates that block ship (build, visual QA, a11y, performance, assets).
- Every `Blocked` item is acknowledged in `Disclose limitations and ship`.
- Verified count ≥ 70% of total labeled items.

## What the user must do post-launch

<FILL IN — analytics access, sales-script update, customer-comms, monitoring, rollback triggers>

## Signed

Orchestrator: <FILL IN — date and Claude Code session ID if recorded>
