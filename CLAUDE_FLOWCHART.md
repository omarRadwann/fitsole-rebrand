# CLAUDE_FLOWCHART.md — The No-Skip Build Flow

Use this for every new site, rebrand, Three.js app, Spline integration, or visual polish task. Do not skip steps; if a step is genuinely not applicable, mark it `Not run` in `docs/ship-decision.md` with a one-line reason.

## Master flow

```
USER INPUT (business type / brief / existing repo)
   │
   ▼
READ ANCHORS   ──►  SOURCE_OF_TRUTH.md, CLAUDE.md, START_HERE.md,
                    AGENTS.md, VALIDATION_PROTOCOL.md, SKILL.md
   │
   ▼
PACK HEALTH    ──►  make validate-everything   (must pass before project work)
   │
   ▼
EVIDENCE SCAFFOLD ─►  make evidence            (creates docs/ templates)
   │
   ▼
BRIEF CAPTURE  ──►  docs/one-input-brief.md
   │
   ▼
ASSUMPTIONS    ──►  docs/assumptions.md        (everything you inferred)
   │
   ▼
RESEARCH       ──►  docs/research-brief.md     (category, audience, cliches)
   │
   ▼
AGENT COURT    ──►  spawn market-researcher, creative-director, art-director,
                    typography-layout-master, ux-copy-strategist,
                    asset-pipeline-master, master-technical-director.
                    Add web-native-3d-master if 3D is considered.
                    Write docs/agent-court-report.md
   │
   ▼
THREE CONCEPTS ──►  docs/concept-scorecard.md  (safe / experimental / moonshot)
   │
   ▼
SELECT CONCEPT ──►  one named; rejected concepts and reasons recorded
   │
   ▼
ART + COPY + ASSET + STACK DECISIONS
                    docs/art-direction.md
                    docs/copy-system.md
                    docs/asset-ledger.csv
                    docs/ai-asset-pipeline.md
                    docs/tech-stack-decision.md
                    docs/signature-interaction-spec.md
                    docs/motion-language-system.md
   │
   ▼
3D DECISION    ──►  docs/web-native-3d-pipeline.md + docs/webgl-3d-budget.md
                    (R3F / Spline / Blender / static fallback)
   │
   ▼
IMPLEMENTATION GATE   ──► VALIDATION_PROTOCOL.md Gate 1 + Gate 2 must pass
   │
   ▼
SCAFFOLD APP   ──►  python ops/create_project.py --name <slug>
                    (only if no app exists; otherwise work in current repo)
   │
   ▼
BUILD          ──►  semantic HTML, design tokens, type system, hero,
                    sections, signature interaction, mobile composition
   │
   ▼
BUILD CHECKS   ──►  npm run typecheck && npm run lint && npm run build && npm run test
   │
   ▼
SCREENSHOTS    ──►  npm run screenshots
                    docs/screenshot-matrix.md
   │
   ▼
VISUAL RED TEAM ─►  docs/visual-review.md + docs/design-red-team-rubric.md
                    apply 13-awwwards-quality-taste-rubric.md
                    apply 14-ai-anti-genericity-protocol.md
   │
   ▼
REPAIR LOOP    ──►  fix until taste rubric average ≥ 8.5,
                    no category below 7.5
   │
   ▼
QA             ──►  npm run analyze:assets && npm run design:readiness
                    accessibility-ux-master + gpu-performance-master reports
                    docs/qa-report.md
   │
   ▼
SHIP DECISION  ──►  docs/ship-decision.md with truth labels for every gate
   │
   ▼
make project-ship-check                       (must exit 0)
   │
   ▼
HANDOFF
```

## Branch: existing repo

If the user points at an existing site or repo:

1. Inspect current structure first; do not bulk-rewrite.
2. Run pack health and evidence scaffold as usual.
3. Fill `docs/visual-review.md` with current-state critique before changing anything.
4. Improve in slices: strategy → layout → copy → assets → motion → 3D → QA.

## Branch: 3D / WebGL project

1. Justify 3D in `docs/tech-stack-decision.md` (business value, not decoration).
2. Set budget in `docs/webgl-3d-budget.md` (DPR cap, draw calls, textures, postprocessing).
3. Define fallback in `docs/web-native-3d-pipeline.md` (poster image + reduced-motion path).
4. Build with R3F if React; vanilla Three.js if isolated; Spline if scene is supplied; OGL/Pixi if lightweight 2D effect.
5. Capture mobile and reduced-motion screenshots before handoff.

## Exit criteria

A project may be called complete **only when `docs/ship-decision.md` names every gate's pass / blocked / not-run with evidence, and `make project-ship-check` exits 0**.
