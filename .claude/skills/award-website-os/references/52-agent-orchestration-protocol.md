# Agent Orchestration Protocol

Claude Code must use specialist agents for serious website work. Do not assume agents run automatically. Ask Claude Code to spawn them explicitly and consolidate the reports.

## Required Full-Project Agent Court

| Order | Agent | Mode | Required output |
|---:|---|---|---|
| 1 | market-researcher | read-only | Category, audience, competitors, cliches, opportunities |
| 2 | creative-director | read-only | Three concept directions and strategic recommendation |
| 3 | art-director | read-only | Visual system, references, image direction, mood |
| 4 | typography-layout-master | workspace-write | Type scale, grid, spacing, responsive layout rules |
| 5 | ux-copy-strategist | read-only | Hero, sections, proof, CTA, objections |
| 6 | asset-pipeline-master | workspace-write | Asset plan, rights, generation/sourcing route, ledger updates |
| 7 | master-technical-director | read-only | Stack, architecture, risks, build plan |
| 8 | web-native-3d-master | workspace-write | 3D route, fallback, budget, risk decision when 3D is considered |
| 9 | frontend-engineer | workspace-write | Implementation plan and code changes |
| 10 | accessibility-ux-master | read-only | Accessibility risks and fixes |
| 11 | gpu-performance-master | read-only | Performance risks, WebGL budget, mobile constraints |
| 12 | screenshot-critic | read-only | Brutal screenshot critique and visual fixes |
| 13 | release-qa-master | read-only | Final QA, evidence labels, no-ship risks |

## Conditional Agents

- `threejs-r3f-master`: when R3F or custom Three.js is used.
- `shader-webgl-master`: when shaders, postprocessing, particles, or custom materials are used.
- `spline-integration-master`: when a Spline scene is supplied or chosen.
- `blender-production-master`: when procedural GLB/poster rendering is justified.
- `gsap-animation-master`: when timeline motion or scroll choreography is used.
- `creative-technologist-master`: when the site needs a non-standard interaction or installation-like experience.
- `image-generation-director`: when generated imagery is needed.

## Required Consolidation

Claude Code must write `docs/agent-court-report.md` with:

- agents spawned
- report summary per agent
- conflicts between agents
- decisions made by the parent Claude Code session
- rejected recommendations
- implementation tasks created from the reports
- unresolved risks

## When Runtime Subagents Are Not Available

If Claude Code cannot spawn named custom agents, it must manually read the matching `.claude/agents/*.YAML frontmatter Markdown` files and apply each Markdown body as a simulated specialist system prompt. Mark this as `Manual review` in `docs/agent-court-report.md`.
