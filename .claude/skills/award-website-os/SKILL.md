---
name: award-website-os
description: Premium website operating system for Claude Code. Use for rebrands, Awwwards-style sites, Three.js/R3F/WebGL, Spline, motion, asset strategy, visual QA, and launch handoff.
when_to_use: Use when the user asks Claude to create, redesign, rebrand, improve, or audit a website; build immersive 3D web experiences; create premium landing pages; or turn a business type into a complete site.
effort: high
---

# Award Website OS — Claude Code Skill

Use this skill for premium websites, rebrands, cinematic landing pages, conversion-focused brand sites, Three.js/R3F/WebGL experiences, Spline scenes, motion systems, and high-polish UI.

## First action

Step 1 — read the root anchors (these always exist):

1. `CLAUDE.md`
2. `00_CLAUDE_RUN_FIRST.md`
3. `SOURCE_OF_TRUTH.md`
4. `CLAUDE_FLOWCHART.md`
5. `VALIDATION_PROTOCOL.md`
6. `AGENTS.md`

Step 2 — validate the pack and scaffold project evidence:

```bash
make validate-everything
make evidence
```

`make evidence` copies all 40 templates from `docs/_templates/` into `docs/`. After this step the per-project files exist.

Step 3 — read the per-project operating docs (now they exist in `docs/`):

1. `docs/agent-orchestration-protocol.md`
2. `docs/super-design-playbook.md`
3. `docs/reference-mining-guide.md`
4. `docs/rebrand-or-idea-master-protocol.md`
5. `docs/tool-automation-matrix.md`
6. `docs/awwwards-output-spec.md`
7. `docs/paid-tools-and-apis-runbook.md`
8. `docs/thread-insights-2026.md`
9. `docs/webapp-experience-playbook.md`
10. `docs/deep-awwwards-investigation-2026.md`
11. `docs/soty-sotd-pattern-library.md`
12. `docs/agency-rebrand-operating-system.md`
13. `docs/submission-readiness-and-risk-guide.md`

Step 4 — open the worked example for the closest project type:

- `examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md` for marketing / service projects.
- `examples/GOLDEN_PROMPTS.md` for prompt patterns by business type.

## Authority

`SOURCE_OF_TRUTH.md` is highest authority. This skill activates the workflow, but it does not override project safety, legal, or user instructions.

## Main rule

The user may give only a business type. Proceed by making reasonable assumptions and documenting them. Ask only for paid tools, credentials, exact brand assets, legally sensitive proof claims, destructive actions, or deployment approval.

## Required evidence before implementation

- `docs/client-intake-master-brief.md`
- `docs/one-input-brief.md`
- `docs/assumptions.md`
- `docs/business-case-and-conversion-map.md`
- `docs/awwwards-jury-scorecard.md`
- `docs/research-brief.md`
- `docs/benchmark-reference-board.md`
- `docs/concept-scorecard.md`
- `docs/art-direction.md`
- `docs/signature-interaction-spec.md`
- `docs/motion-language-system.md`
- `docs/copy-system.md`
- `docs/asset-ledger.csv`
- `docs/ai-asset-pipeline.md`
- `docs/tech-stack-decision.md`
- `docs/tool-use-log.md`
- `docs/web-native-3d-pipeline.md` when 3D or motion route matters
- `docs/webgl-3d-budget.md` when WebGL, R3F, Spline, GLB, or shaders are used

## Required evidence before handoff

- `docs/screenshot-matrix.md`
- `docs/visual-review.md`
- `docs/design-red-team-rubric.md`
- `docs/qa-report.md`
- `docs/agent-court-report.md`
- `docs/ship-decision.md`

## Required subagent sequence

For full projects, use these project subagents:

1. `market-researcher`
2. `creative-director`
3. `art-director`
4. `typography-layout-master`
5. `ux-copy-strategist`
6. `asset-pipeline-master`
7. `master-technical-director`
8. `web-native-3d-master` when 3D may be used
9. `frontend-engineer`
10. `accessibility-ux-master`
11. `gpu-performance-master` when heavy motion or 3D exists
12. `screenshot-critic`
13. `release-qa-master`

Add specialist agents for R3F, shaders, Spline, Blender, GSAP, creative technology, and image generation when the selected concept needs them.

## Strong design rule

A site is not strong enough if the concept could fit any business after swapping the logo. Define the signature idea, signature visual, signature interaction, signature proof, and signature screenshot before coding.

## 3D rule

Use R3F, Spline, Blender, shaders, or static fallback based on business value and performance. Do not use 3D as decoration. No 3D may ship without mobile and reduced-motion fallback.

## No-ship rule

Do not call the project complete if evidence docs are missing, design is generic, mobile is weak, 3D is unjustified, performance is poor, accessibility is ignored, asset rights are unclear, fake proof is used, build or QA fails, screenshots are missing, or blocked checks are hidden.

## Truth labels

Every final claim must be labeled as `Verified`, `Manual review`, `Not run`, or `Blocked`.

## Additional references

Load supporting references only when needed:

- `references/13-awwwards-quality-taste-rubric.md`
- `references/14-ai-anti-genericity-protocol.md`
- `references/44-super-strong-design-playbook.md`
- `references/45-reference-mining-and-moodboards.md`
- `references/57-claude-code-runtime-guide.md`
- `references/58-thread-derived-ai-awwwards-patterns-2026.md`
- `references/59-signature-interaction-and-game-feel-master.md`
- `references/60-ai-3d-and-asset-generation-tool-radar.md`
- `references/61-current-awwwards-benchmark-mining.md`
- `references/62-motion-as-product-language.md`
- `references/63-webapp-experience-patterns.md`
- `references/39-web-native-3d-toolchain-2026.md`
- `references/42-gltf-optimization-pipeline.md`

- `references/64-awwwards-jury-and-scoring-master.md`
- `references/65-soty-sotd-patterns-master.md`
- `references/66-agency-rebrand-business-os.md`
- `references/67-award-winning-case-study-patterns.md`
- `references/68-client-conversion-vs-award-taste.md`
