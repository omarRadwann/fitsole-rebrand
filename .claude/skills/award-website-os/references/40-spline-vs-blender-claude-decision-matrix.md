# 40 — Spline vs Blender vs R3F Decision Matrix

## Short answer

- Use **Spline** for fast web-native interactive 3D when the scene is provided or easy to export.
- Use **R3F/Three.js** when Claude Code must own the scene in code.
- Use **Blender** when Claude Code must generate or process 3D assets locally.

## Matrix

| Requirement | Best route | Why |
|---|---|---|
| Claude Code creates everything inside repo | R3F/Three.js | Fully local, inspectable, testable |
| Designer has Spline scene | Spline React integration | Fastest path to polished web-native 3D |
| Custom procedural mesh | Blender Python | Reproducible GLB generation |
| Product model viewer | R3F + optimized GLB | More control over loading, camera, materials |
| Abstract interactive hero | Spline or R3F | Choose based on whether a scene export exists |
| Complex animation timeline | Theatre.js/R3F or GSAP | Editable timing and playback control |
| High-end motion graphics | Cinema 4D export | Strong external art pipeline |
| Massive procedural effects | Houdini export | Specialist pipeline, not default |
| Photoreal world | Unreal source/render/pixel stream | Too heavy for normal website runtime |

## No wrong default

Spline is often better than Blender for web-native visual iteration. Blender is often better than Spline for scriptable asset generation. R3F is often better than both when Claude Code must maintain the runtime code and debug production issues.

## Required documentation

Every 3D decision must update:

- `docs/tech-stack-decision.md`
- `docs/web-native-3d-pipeline.md`
- `docs/webgl-3d-budget.md`
- `docs/asset-ledger.csv`
- `docs/screenshot-matrix.md`
