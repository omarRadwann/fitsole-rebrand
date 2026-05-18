# 28 — Agent Collaboration Patterns

## Mission

Use agents like a real studio, not as isolated prompts.

## Pattern 1 — Parallel Concept Pressure

Run:
- market-researcher
- creative-director
- art-director

Then orchestrator compares:
- market truth
- creative ambition
- visual feasibility

Output:
- selected concept
- rejected concepts
- why

## Pattern 2 — Build Then Brutal Critique

Run:
- frontend-engineer builds
- screenshot-critic rejects/approves
- typography-layout-master fixes visual hierarchy
- frontend-engineer applies fixes

Repeat until screenshot score passes.

## Pattern 3 — Motion Safety

Before adding motion:
- creative-technologist proposes interaction
- gsap-animation-master implements motion plan
- accessibility-ux-master defines reduced-motion fallback
- gpu-performance-master checks runtime risk

## Pattern 4 — 3D Sanity

Before 3D:
- creative-director explains why 3D matters
- master-technical-director approves/rejects
- blender-production-master creates asset
- threejs-r3f-master integrates
- gpu-performance-master audits
- screenshot-critic judges if it improved the site

If not improved, remove 3D.

## Pattern 5 — Asset Legality Loop

- asset-pipeline-master creates asset ledger
- image-generation-director creates prompts if needed
- orchestrator checks licensing risk
- release-qa-master blocks if unclear

## Pattern 6 — Final Ship Court

Final decision requires:
- screenshot-critic: visual PASS
- accessibility-ux-master: accessibility PASS
- gpu-performance-master: performance PASS
- release-qa-master: release PASS
- orchestrator: business clarity PASS

If any says NO SHIP, fix or disclose limitations.

## Agent Handoff Template

```md
## Handoff to [agent]

Context:
...

Decision already made:
...

Your task:
...

Constraints:
...

Do not change:
...

Return:
...
```

## Avoid Agent Chaos

Do not:
- ask every agent everything
- let agents contradict without resolution
- use 3D agent before concept approval
- use implementation agent before copy/art direction
- accept QA without evidence
- bury no-ship blockers in long prose
