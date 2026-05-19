# Implementation Gates

This file prevents Claude Code from coding too early or shipping too casually.

## Gate 0 — Pack Health

Required command:

```bash
make validate-everything
```

## Gate 1 — Evidence Before Code

The following files must be project-specific before serious implementation:

- `docs/one-input-brief.md`
- `docs/assumptions.md`
- `docs/research-brief.md`
- `docs/concept-scorecard.md`
- `docs/art-direction.md`
- `docs/copy-system.md`
- `docs/asset-ledger.csv`
- `docs/tech-stack-decision.md`

## Gate 2 — 3D Before Code

If 3D is considered, fill:

- `docs/web-native-3d-pipeline.md`
- `docs/webgl-3d-budget.md`
- `docs/spline-scene-brief.md` when Spline is used
- `docs/blender-asset-brief.md` when Blender Python or GLB generation is used

## Gate 3 — Build Checks

Inside the real app:

```bash
npm run typecheck
npm run lint
npm run build
npm run test
```

## Gate 4 — Visual QA

Capture screenshots and fill:

- `docs/screenshot-matrix.md`
- `docs/visual-review.md`
- `docs/design-red-team-rubric.md`

## Gate 5 — Final Truth Handoff

Fill:

- `docs/qa-report.md`
- `docs/agent-court-report.md`
- `docs/ship-decision.md`

Then run:

```bash
make strict-check
make project-ship-check
```
