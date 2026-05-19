# VALIDATION_PROTOCOL.md

Two distinct validation levels. Do not confuse them.

## Level 1 — Pack Health (run on the pack itself)

```bash
make validate-everything
```

This runs `ops/validate_pack.py`, which checks:

- All anchor files exist (`CLAUDE.md`, `SOURCE_OF_TRUTH.md`, `CLAUDE_FLOWCHART.md`, `VALIDATION_PROTOCOL.md`, `START_HERE.md`, `AGENTS.md`, `README.md`).
- `.claude/settings.json` is valid JSON and references hook scripts that exist and are executable.
- Every `.claude/agents/*.md` has YAML frontmatter with `name` and `description`.
- Every reference cited in `SKILL.md` and every agent exists in `.claude/skills/award-website-os/references/`.
- Every `docs/*` path referenced anywhere in the pack has either a template at `docs/_templates/` or a generator step in `make evidence`.
- The four slash-command skills named in `.claude/commands/README.md` (`/award-start`, `/design-red-team`, `/reference-mining`, `/threejs-r3f-production`, `/ship-gate`) each exist as `.claude/skills/<name>/SKILL.md`.

Pack health must pass before any project work. Run it again after editing the pack itself.

## Level 2 — Project Ship Gate (run after building a real site)

```bash
make project-ship-check
```

This runs `ops/project_ship_check.py`, which fails when project-specific evidence is still baseline or empty. It requires:

- `docs/one-input-brief.md` is filled (business type, audience, conversion).
- `docs/assumptions.md` is non-empty.
- `docs/research-brief.md` has a `Status:` line.
- `docs/concept-scorecard.md` has three concepts scored and a selected one named.
- `docs/art-direction.md` has project-specific decisions (not the template defaults).
- `docs/copy-system.md` has final hero and CTA drafts.
- `docs/asset-ledger.csv` has at least one row with a `license/permission` value.
- `docs/tech-stack-decision.md` names stack and 3D route.
- `docs/screenshot-matrix.md` lists desktop + mobile + reduced-motion shots OR explains why blocked.
- `docs/qa-report.md` has a status row for each required command.
- `docs/ship-decision.md` has a truth label (`Verified` / `Manual review` / `Not run` / `Blocked`) for every gate below.

## The implementation gates (must pass before writing site code)

### Gate 0 — Pack health
`make validate-everything` exits 0.

### Gate 1 — Evidence before code
These are project-specific (not template stubs):

- `docs/one-input-brief.md`
- `docs/assumptions.md`
- `docs/research-brief.md`
- `docs/concept-scorecard.md`
- `docs/art-direction.md`
- `docs/copy-system.md`
- `docs/asset-ledger.csv`
- `docs/tech-stack-decision.md`

### Gate 2 — 3D before code (if 3D is on the table)

- `docs/web-native-3d-pipeline.md`
- `docs/webgl-3d-budget.md`
- `docs/spline-scene-brief.md` (if Spline)
- `docs/blender-asset-brief.md` (if Blender)

## The build gates (must pass inside the actual app)

### Gate 3 — Build checks

```bash
npm run typecheck
npm run lint
npm run build
npm run test
```

### Gate 4 — Visual QA

```bash
npm run screenshots
```

Then fill:
- `docs/screenshot-matrix.md`
- `docs/visual-review.md`
- `docs/design-red-team-rubric.md`

### Gate 5 — Asset and design readiness

```bash
npm run analyze:assets
npm run design:readiness
```

### Gate 6 — Final truth handoff

Fill:
- `docs/qa-report.md`
- `docs/agent-court-report.md`
- `docs/ship-decision.md`

Then:
```bash
make strict-check
make project-ship-check
```

## Evidence rule

A claim is not verified because Claude believes it. A claim is **Verified** only when a command result, screenshot, file, browser observation, or measurable artifact supports it. Otherwise label it `Manual review`, `Not run`, or `Blocked` — with a one-line reason.

## No-ship conditions

The site is not shippable if any of these are true:

- Pack validation fails.
- Build / typecheck / lint fails.
- No mobile screenshot in `docs/screenshot-matrix.md`.
- No reduced-motion path captured.
- 3D / WebGL is present without justification, budget, and fallback.
- External or generated assets are not tracked in `docs/asset-ledger.csv`.
- Fake proof, fake metrics, fake testimonials, or AI-generated people-as-real exist anywhere on the site.
- Final claims in `docs/ship-decision.md` are unlabeled.
- Average taste-rubric score < 8.5, or any category < 7.5.

## Soft commands during iteration

```bash
make strict-check    # stricter than validate-everything; doesn't require project completion
make final-check     # convenience wrapper for the last-mile checks
make evidence        # (re)scaffold any missing docs/ templates
```
