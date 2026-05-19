# AGENTS.md — Studio Roster

This pack ships 22 specialist subagents under `.claude/agents/`. They are real Claude Code project subagents; verify with `/agents` inside Claude Code.

## Roster

| Agent | Role | Mode |
|---|---|---|
| `claude-orchestrator` | Runs the full build, coordinates the others, owns ship decision. | write |
| `market-researcher` | Category, audience, competitors, clichés, opportunities. | read-only |
| `creative-director` | Concept competition (3 territories), strategic recommendation. | read-only |
| `art-director` | Visual system, references, image direction, mood. | read-only |
| `typography-layout-master` | Type scale, grid, spacing, responsive rules. | write |
| `ux-copy-strategist` | Hero, sections, proof, CTA, objections. | read-only |
| `asset-pipeline-master` | Asset plan, rights, sourcing/generation route, ledger. | write |
| `image-generation-director` | Prompts and direction for generated imagery. | read-only |
| `master-technical-director` | Stack, architecture, risks, build plan. | read-only |
| `web-native-3d-master` | 3D route (R3F / Spline / Blender / static), budget, fallback. | write |
| `threejs-r3f-master` | R3F or vanilla Three.js implementation. | write |
| `shader-webgl-master` | Shaders, postprocessing, particles, custom materials. | write |
| `spline-integration-master` | Spline scene import, optimization, integration. | write |
| `blender-production-master` | Procedural GLB, lighting, baked assets, poster renders. | write |
| `gsap-animation-master` | Timeline motion, scroll choreography, micro-interactions. | write |
| `creative-technologist-master` | Non-standard interactions, installation-feel features. | write |
| `frontend-engineer` | Production HTML/CSS/TS, semantic structure, components. | write |
| `accessibility-ux-master` | a11y risks and fixes (WCAG 2.2, focus, ARIA, contrast). | read-only |
| `gpu-performance-master` | WebGL/GPU budget, mobile constraints, runtime risk. | read-only |
| `screenshot-critic` | Brutal screenshot critique; gates visual ship. | read-only |
| `release-qa-master` | Final QA, evidence labels, no-ship risks. | read-only |

## Full-project order (the "agent court")

For a complete new-site project run:

1. `market-researcher` — read-only
2. `creative-director` — read-only
3. `art-director` — read-only
4. `typography-layout-master` — write (type scale + grid)
5. `ux-copy-strategist` — read-only
6. `asset-pipeline-master` — write (asset ledger)
7. `master-technical-director` — read-only
8. `web-native-3d-master` — only if 3D is on the table
9. `frontend-engineer` — write (implementation)
10. `accessibility-ux-master` — read-only
11. `gpu-performance-master` — only if heavy motion / 3D exists
12. `screenshot-critic` — read-only
13. `release-qa-master` — read-only

The orchestrator collects every report and writes `docs/agent-court-report.md` with:
- agents spawned
- per-agent summary
- conflicts between agents
- decisions made by the orchestrator
- rejected recommendations
- implementation tasks created
- unresolved risks

## Conditional agents

Spawn these only when the selected concept needs them:

- `threejs-r3f-master` — if R3F or custom Three.js code is in scope.
- `shader-webgl-master` — if shaders, postprocessing, particles.
- `spline-integration-master` — if a Spline scene is supplied / chosen.
- `blender-production-master` — if procedural GLB or poster rendering is justified.
- `gsap-animation-master` — if timeline motion or scroll choreography is used.
- `creative-technologist-master` — if a signature, non-standard interaction is part of the concept.
- `image-generation-director` — if generated imagery is needed.

## Collaboration patterns

See `.claude/skills/award-website-os/references/28-agent-collaboration-patterns.md`. Quick summary:

- **Parallel concept pressure** — researcher + creative + art directors run in parallel, orchestrator reconciles.
- **Build then brutal critique** — frontend builds → screenshot-critic rejects → typography-layout-master fixes hierarchy → frontend reapplies. Loop until visual passes.
- **Motion safety** — creative-technologist proposes → gsap implements → a11y defines fallback → gpu audits.
- **3D sanity** — creative-director justifies → tech-director approves → blender or threejs implements → gpu audits → screenshot-critic confirms the site is better with 3D than without.
- **Asset legality loop** — asset-pipeline ledgers → image-gen-director provides prompts → orchestrator checks rights → release-qa blocks if unclear.
- **Final ship court** — screenshot-critic, a11y-master, gpu-master, release-qa, orchestrator each give PASS / NO-SHIP. Any NO-SHIP blocks the ship.

## If subagent spawning is not available in the runtime

Read the matching `.claude/agents/*.md` body as a simulated specialist system prompt and produce the same `## <agent> Report` block. Mark that section as `Manual review` in `docs/agent-court-report.md`.

## Handoff template

```md
## Handoff to [agent]

Context:
- business: ...
- selected concept: ...
- relevant docs: ...

Decisions already made:
- ...

Your task:
- ...

Constraints:
- ...

Do not change:
- ...

Return:
- decisions
- reasoning
- risks
- next specialist needed
- no-ship blockers
```

## Anti-chaos rules

- Do not ask every agent everything.
- Do not let agents contradict each other without the orchestrator resolving in `docs/agent-court-report.md`.
- Do not spawn the 3D agent before the concept is approved.
- Do not spawn the implementation agent before art direction + copy.
- Do not accept QA without evidence.
- Do not bury no-ship blockers in long prose; list them.


## V6 — Agent depth

All 22 specialist agents have distinct, role-specific system prompts (44–126 lines each, validated by `diff` to be substantively different). The system prompts in `.claude/agents/*.md` carry:

- The required reading list for that role.
- The decisions the agent owns.
- The rejection rules (what the agent refuses to do).
- The output specification.
- The handoff: which agent comes next, with what artifact.

The deeper domain expertise lives in `.claude/skills/award-website-os/references/` and is loaded by each agent on demand. The agent prompts are the orchestration layer; the references are the encyclopedia.

If you spawn an agent and the work output reads generic, the most likely cause is the agent didn't read its required references. Check the report's `Inputs Understood` field.
