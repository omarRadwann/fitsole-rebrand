# Web-Native 3D Pipeline

Fill this only if `tech-stack-decision.md` chose a 3D route other than "None".

See `.claude/skills/award-website-os/references/39-web-native-3d-toolchain-2026.md`, `42-gltf-optimization-pipeline.md`, and `40-spline-vs-blender-claude-decision-matrix.md`.

## 3D route chosen

<FILL IN — R3F / vanilla Three.js / Spline / Blender→GLB / hybrid>

## Why this route

<FILL IN — must address why this is the cheapest sufficient route. If R3F was chosen over Spline, justify; if Spline over R3F, justify.>

## Source authoring tool

<FILL IN — Blender / Spline / Houdini / pure code>

## Output format

- Format: <FILL IN — GLB / GLTF / proprietary>
- Compression: <FILL IN — Draco / Meshopt>
- Textures: <FILL IN — KTX2 / Basis / WebP>

## File size budget

| Asset | Target | Actual |
|---|---|---|
| Hero GLB | ≤ 1.2 MB | <FILL IN> |
| Hero textures (compressed) | ≤ 800 KB total | <FILL IN> |
| Total 3D payload | ≤ 2 MB | <FILL IN> |
| Poster fallback image | ≤ 350 KB | <FILL IN> |

## Loading strategy

<FILL IN — `next/dynamic` ssr:false / Suspense / progressive>

## Poster fallback

- File: <FILL IN — path>
- When shown: <FILL IN — before scene ready / on reduced motion / on mobile if applicable>
- How captured: <FILL IN — Blender render of the strongest frame; or first-frame screenshot of the scene>

## Reduced-motion path

<FILL IN — what the user sees with prefers-reduced-motion: reduce. Usually the poster, plus accessible DOM content.>

## Mobile path

Pick one:

- [ ] Same scene with reduced DPR and effects.
- [ ] Downgraded scene (fewer meshes, no postprocessing).
- [ ] Poster only (no canvas on mobile).

Justify the choice: <FILL IN>

## Acceptance criteria

The 3D pipeline is implemented correctly when:

- [ ] Scene initial paint ≤ 2s on mid-tier mobile (3G fast or simulated).
- [ ] Steady-state 60fps desktop, 30fps+ mobile.
- [ ] JS heap during interaction ≤ 250 MB on mobile.
- [ ] No memory growth after 60s idle.
- [ ] Poster fallback is verified to ship without the canvas.
- [ ] Reduced-motion path is verified.
- [ ] Real DOM hero content (heading, sub, CTA) is accessible without the canvas.

## Risks

<FILL IN>

## Open questions

<FILL IN — or "None">
