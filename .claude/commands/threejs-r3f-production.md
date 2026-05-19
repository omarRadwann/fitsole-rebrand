---
name: threejs-r3f-production
description: Plan, build, and ship a production-grade R3F or Three.js 3D scene with mobile + reduced-motion fallback.
---

# /threejs-r3f-production

See `.claude/skills/threejs-r3f-production/SKILL.md` for the full protocol.

## Step 1 — confirm the 3D route is earned

Open `docs/tech-stack-decision.md` § 3D route. The justification must answer:
1. Why is 3D necessary for this site's concept?
2. What does 3D do that 2D/video/illustration could not?
3. What is the cost (KB, GPU, mobile risk) and is it earned?

Any weak answer → stop. Use a 2D/illustration/video route instead.

## Step 2 — define the budget

Open `docs/webgl-3d-budget.md`. Fill every target cell. Concrete numbers, not vibes.

## Step 3 — author the scene

For R3F: implement in `workspace/<slug>/components/Scene*.tsx` with Suspense, `frameloop="demand"` where possible, and `frameloop="never"` for `prefers-reduced-motion`.

For Blender→GLB: see `references/05-blender-production-master.md` and `references/42-gltf-optimization-pipeline.md`. Use `gltf-transform` with Draco + Meshopt + KTX2.

For Spline: see `references/41-spline-integration-recipes.md`. Optimize via Spline's hosted runtime export.

## Step 4 — capture poster fallback

Render the strongest frame as a WebP/AVIF poster ≤ 350 KB. Wire it as the visible content when:
- `prefers-reduced-motion: reduce`
- Mobile (if mobile policy = poster-only)
- Before scene is ready
- WebGL context lost

## Step 5 — measure

Run `npm run analyze:assets` and Chrome DevTools Performance trace. Fill every `Measured` cell in `webgl-3d-budget.md`. If any cell is over budget, downgrade and re-measure.

## Step 6 — pass to ship-gate

When budget passes and screenshots are captured, hand off to `/ship-gate`.
