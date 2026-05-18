# 31 — Zero-Gap Governance

## Why This Exists

"Zero gaps" cannot mean infinite knowledge. It means:
- every known operating gap is closed
- every required artifact has a place
- every advanced feature has a gate
- every final claim has evidence
- every missing tool/credential/asset is disclosed

## Evidence Standard

Final claims must be labeled:

| Label | Meaning |
|---|---|
| Verified | A command/tool/screenshot proves it |
| Manual review | Human-style inspection was performed |
| Not run | The check was not run |
| Blocked | A missing tool/permission/asset prevented it |

## Tool Dependency Matrix

| Capability | Minimum Tool | Optional Pro Tool | Evidence |
|---|---|---|---|
| Web research | browser/search | Docs MCP | research-brief.md |
| Screenshot review | browser screenshots | Playwright | visual-review.md |
| Image generation | approved image tool/API | GPT Image / other licensed tool | asset-ledger.csv |
| 3D asset creation | Blender | Blender + gltf-transform | asset-ledger.csv + model files |
| WebGL integration | Three/R3F | profiler/devtools | qa-report.md |
| Accessibility | manual keyboard | axe/Lighthouse | qa-report.md |
| Performance | build + manual | Lighthouse/WebPageTest | qa-report.md |
| Deployment | hosting account | Vercel/Cloudflare/etc. | ship-decision.md |

## Final Ship Decision

Allowed:
- PASS
- PASS WITH LIMITATIONS
- NO SHIP

Never use "done" when the proper status is "pass with limitations."
