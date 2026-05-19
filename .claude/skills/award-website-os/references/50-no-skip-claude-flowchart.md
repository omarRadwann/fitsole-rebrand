# Claude Code Flowchart — No-Skip Website Build

Use this flow for every new site, rebrand, Three.js app, Spline integration, or visual polish task.

```txt
USER INPUT
  |
  v
READ SOURCE OF TRUTH + SKILL + THIS FLOW
  |
  v
PACK VALIDATION: make validate-everything
  |
  v
BRIEF CAPTURE: docs/one-input-brief.md
  |
  v
ASSUMPTIONS: docs/assumptions.md
  |
  v
RESEARCH: docs/research-brief.md + references
  |
  v
AGENT COURT: spawn specialists, collect reports
  |
  v
THREE CONCEPTS: docs/concept-scorecard.md
  |
  v
SELECT CONCEPT: reject generic directions
  |
  v
ART + COPY + ASSET + STACK DECISIONS
  |
  v
3D DECISION: R3F / Spline / Blender / static fallback
  |
  v
IMPLEMENTATION
  |
  v
SCREENSHOTS + VISUAL RED TEAM
  |
  v
REPAIR LOOP UNTIL DESIGN GATES PASS
  |
  v
PROJECT CHECKS: typecheck, lint, build, tests, screenshots, assets
  |
  v
SHIP DECISION WITH TRUTH LABELS
```

## Branches

### Existing Website or Repo

1. Inspect current structure before changing files.
2. Preserve working behavior unless the user requested a rebuild.
3. Map weak sections in `docs/visual-review.md`.
4. Improve in slices: strategy, layout, copy, assets, motion, 3D, QA.

### No Existing App

1. Run `make scaffold NAME=<project-name>`.
2. Work inside `workspace/<project-name>/`.
3. Copy or reference the root `docs/` evidence files.
4. Replace all starter copy, metadata, visuals, and placeholder routes.

### Three.js / WebGL Project

1. Justify 3D in `docs/tech-stack-decision.md`.
2. Budget it in `docs/webgl-3d-budget.md`.
3. Define fallback in `docs/web-native-3d-pipeline.md`.
4. Build with R3F only when the scene is meaningfully code-owned.
5. Capture reduced-motion and mobile screenshots before final handoff.

## Exit Criteria

A project may be called complete only when `docs/ship-decision.md` names every passed, blocked, and not-run check with evidence.
