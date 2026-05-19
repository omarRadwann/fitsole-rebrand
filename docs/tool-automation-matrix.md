# Tool Automation Matrix

What was done by Claude, what by a paid tool, what manually, and what was skipped. The release-qa-master reads this before ship.

| Task | Done by | Tool used | Cost | Output location | Verified? |
|---|---|---|---|---|---|
| Research | <FILL IN — Claude / human / paid tool> | <FILL IN> | <FILL IN> | <FILL IN — `research-brief.md`> | <FILL IN — Verified / Manual review / Not run> |
| Concept generation | <FILL IN> | <FILL IN> | <FILL IN> | `concept-scorecard.md` | <FILL IN> |
| Art direction | <FILL IN> | <FILL IN> | <FILL IN> | `art-direction.md` | <FILL IN> |
| Copy | <FILL IN> | <FILL IN> | <FILL IN> | `copy-system.md` | <FILL IN> |
| Imagery (hero) | <FILL IN> | <FILL IN> | <FILL IN> | `asset-ledger.csv` | <FILL IN> |
| Imagery (sections) | <FILL IN> | <FILL IN> | <FILL IN> | `asset-ledger.csv` | <FILL IN> |
| 3D modeling | <FILL IN> | <FILL IN> | <FILL IN> | `blender-asset-brief.md` / `spline-scene-brief.md` | <FILL IN> |
| 3D integration | <FILL IN> | <FILL IN> | <FILL IN> | code | <FILL IN> |
| Motion implementation | <FILL IN> | <FILL IN> | <FILL IN> | code | <FILL IN> |
| Frontend implementation | <FILL IN> | <FILL IN> | <FILL IN> | code | <FILL IN> |
| Screenshots | <FILL IN> | <FILL IN — Playwright / Puppeteer / manual> | <FILL IN> | `screenshot-matrix.md` | <FILL IN> |
| Visual red team | <FILL IN> | — | — | `visual-review.md` | <FILL IN> |
| Accessibility audit | <FILL IN> | <FILL IN — axe / manual> | <FILL IN> | `qa-report.md` | <FILL IN> |
| Performance audit | <FILL IN> | <FILL IN — lighthouse / webpagetest> | <FILL IN> | `qa-report.md` | <FILL IN> |
| Asset audit | <FILL IN> | — | — | `asset-ledger.csv` | <FILL IN> |
| Ship gate | <FILL IN> | — | — | `ship-decision.md` | <FILL IN> |
| Deploy | <FILL IN — owner is always the user> | <FILL IN — hosting platform> | <FILL IN> | live URL | <FILL IN> |

## Tasks deliberately not automated

<FILL IN — work the operator could have automated but didn't, with reason. E.g. "Hero copy was hand-written rather than generated because brand voice was paramount.">

## Tasks that were attempted to automate and failed

<FILL IN — useful signal for the next project. E.g. "Tried to generate the case-study illustrations via Flux; rejected output for inconsistency; fell back to typography-only sections.">

## Automation cost summary (if costs matter)

- Claude time / tokens: <FILL IN>
- Paid tool seats / credits: <FILL IN>
- Human time (operator / designer / developer): <FILL IN>
- Total external spend: <FILL IN>
