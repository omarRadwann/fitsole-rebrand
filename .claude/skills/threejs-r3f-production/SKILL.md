---
name: threejs-r3f-production
description: Build production-grade Three.js / R3F scenes with performance, accessibility, and mobile fallback. Use only when 3D is justified.
when_to_use: After tech-stack-decision.md has chosen R3F or vanilla Three.js, and only when a poster fallback and reduced-motion path are defined.
effort: high
---

# Three.js / R3F Production

This skill is for actually building the 3D scene, not for deciding whether to use 3D. By the time it runs, the decision must already be in `docs/tech-stack-decision.md` and the budget must already be in `docs/webgl-3d-budget.md`.

## Pre-flight check (do not skip)

Before any code:

1. `docs/tech-stack-decision.md` names R3F or Three.js and justifies why.
2. `docs/webgl-3d-budget.md` exists with DPR cap, max draw calls, texture limits, mobile policy.
3. `docs/web-native-3d-pipeline.md` defines the static poster fallback and the reduced-motion path.
4. `docs/signature-interaction-spec.md` ties the 3D to the business concept.

If any of these is missing or templated, stop and fill it first.

## First action

Read:

1. `.claude/skills/award-website-os/references/06-three-r3f-webgl-shader-master.md`
2. `.claude/skills/award-website-os/references/18-webgl-3d-performance-tricks.md`
3. `.claude/skills/award-website-os/references/26-threejs-r3f-code-recipes.md`
4. `.claude/skills/award-website-os/references/39-web-native-3d-toolchain-2026.md`
5. `.claude/skills/award-website-os/references/42-gltf-optimization-pipeline.md`
6. `.claude/skills/award-website-os/references/59-signature-interaction-and-game-feel-master.md`

## Required structure

```
components/three/
  SceneCanvas.tsx       ← Canvas + DPR + camera config
  Experience.tsx        ← scene graph
  CameraRig.tsx         ← camera animations
  Lights.tsx
  Model.tsx             ← GLB loader + lod
  Materials.ts          ← shared materials
  useSceneStore.ts      ← Zustand or context for cross-component state
  performance.ts        ← visibility pause, dpr clamp, mobile switch
  PosterFallback.tsx    ← static image used before scene ready and on reduced motion
```

## Mandatory production patterns

- Lazy-load the canvas with `next/dynamic` and `ssr: false`.
- DPR clamped to `[1, 1.5]` desktop, `[1, 1]` mobile.
- Pause `useFrame` work when the page is hidden (`document.hidden`) or canvas is offscreen.
- Dispose geometries, materials, and textures on unmount.
- No state set inside `useFrame` — mutate refs.
- Provide a `prefers-reduced-motion` path that swaps the canvas for the poster.
- Provide a mobile path that either swaps the canvas for the poster or strips effects.
- Keep DOM hero content accessible (real text, focusable CTA) *behind* or *beside* the canvas, never inside it.

## GLB rules

- Compress with Draco or Meshopt.
- Keep total GLB weight ≤ 1.2MB before texture compression.
- Use KTX2/Basis for textures.
- Maximum 4096×4096 hero textures, downsampled to 2048 for tablet, 1024 for mobile.
- Bake what can be baked; avoid runtime AO / SSAO unless the scene demands it.
- Instance repeated meshes.

## Shader rules

- Every shader has `uTime`, `uProgress`, `uPointer`, `uResolution`, and `uReducedMotion` uniforms.
- No full-screen postprocessing on mobile unless explicitly approved by `gpu-performance-master`.
- Test in Safari and iOS Safari before declaring the shader done.

## Performance gates (must pass before ship)

- Initial canvas paint: < 2s on mid-tier mobile.
- Steady-state FPS: 60 desktop, 30+ mobile (or scene downgraded).
- JS heap during interaction: < 250MB on mobile.
- No memory growth after 60s of idle.

## Output

Updates to:
- `docs/web-native-3d-pipeline.md` (with the actual implementation route confirmed).
- `docs/webgl-3d-budget.md` (with measured numbers, not estimates).
- `docs/qa-report.md` (with each gate result truth-labeled).

Arguments:

$ARGUMENTS
