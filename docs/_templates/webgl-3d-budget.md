# WebGL / 3D Budget

Numbers, not vibes. Every cell is a measurable target.

## Render settings

| Setting | Target | Measured |
|---|---|---|
| DPR cap (desktop) | [1, 1.5] | <FILL IN> |
| DPR cap (mobile) | [1, 1] | <FILL IN> |
| Antialiasing | <FILL IN — on / off / FXAA> | <FILL IN> |
| Shadows | <FILL IN — none / basic / soft> | <FILL IN> |
| Postprocessing | <FILL IN — list passes> | <FILL IN> |

## Scene complexity

| Metric | Target | Measured |
|---|---|---|
| Draw calls | <FILL IN, typically ≤ 80 mid-tier mobile> | <FILL IN> |
| Triangles in view | <FILL IN, typically ≤ 250k mobile, ≤ 1M desktop> | <FILL IN> |
| Materials | <FILL IN> | <FILL IN> |
| Active lights | <FILL IN — typically ≤ 3> | <FILL IN> |
| Texture units in use | <FILL IN> | <FILL IN> |

## Asset budget

| Asset | Target | Measured |
|---|---|---|
| Hero GLB (Draco/Meshopt) | ≤ 1.2 MB | <FILL IN> |
| Hero textures (compressed total) | ≤ 800 KB | <FILL IN> |
| HDR / IBL (compressed) | ≤ 400 KB | <FILL IN> |
| Total 3D payload | ≤ 2 MB | <FILL IN> |
| Poster fallback image | ≤ 350 KB | <FILL IN> |

## Runtime budget

| Metric | Target | Measured |
|---|---|---|
| Scene initial paint | ≤ 2 s on 4G fast | <FILL IN> |
| Steady FPS (desktop) | 60 | <FILL IN> |
| Steady FPS (mobile mid-tier) | ≥ 30 | <FILL IN> |
| JS heap during interaction (mobile) | ≤ 250 MB | <FILL IN> |
| Memory growth over 60s idle | 0 | <FILL IN> |

## Mobile policy

Choose one and justify:

- [ ] Same scene, reduced DPR
- [ ] Downgraded scene (fewer meshes / no postprocessing)
- [ ] Poster-only on mobile (no canvas)

Justification: <FILL IN>

## Postprocessing rules

- Postprocessing on mobile: <FILL IN — disabled by default; enable only with explicit approval>
- Bloom intensity cap: <FILL IN>
- Depth-of-field: <FILL IN — usually off on mobile>

## Reduced-motion rules

When `prefers-reduced-motion: reduce`:
- [ ] Scene replaced with poster.
- [ ] All ScrollTrigger-driven camera motion disabled.
- [ ] Particle / continuous animations paused.

## Measurement method

How each "Measured" value was captured:
<FILL IN — Chrome DevTools Performance panel / Three.js renderer.info / lighthouse / manual stopwatch / spector.js / etc.>

## Acceptance

The 3D budget is accepted when every Measured cell is filled and ≤ its Target, or the divergence is explicitly approved and documented in `assumptions.md`.

If any cell is over budget, either downgrade the scene or change the route in `tech-stack-decision.md`.
