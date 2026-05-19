# Web-Native 3D Pipeline

**Status: NOT RUN — 3D route is None for this project.**

Per [tech-stack-decision.md](tech-stack-decision.md) § 3D route, this project does not use Three.js, R3F, vanilla Three.js, Spline scenes, Blender→GLB, lightweight shaders, or any other 3D / WebGL surface. The selected concept (B — "The Branch") earns its signature visual through editorial photography of the actual Fitsole branch interior, not through 3D.

## Why this doc exists in a non-3D project

The `project_ship_check.py` script keyword-detects 3D terminology in `tech-stack-decision.md` (where the decision is explicitly *rejected*) and asks for this doc to confirm the rejection is documented. This file is that confirmation.

## What was considered and rejected

| Considered | Reason rejected |
|---|---|
| R3F + GLB hero scene | Concept's hero is the actual branch interior — a real photograph, not an abstracted 3D space. R3F would compete with the concept. |
| Vanilla Three.js isolated scene (e.g. floating sneaker hero) | "Sneaker spin" / "floating product" is the category cliché. Anti-pattern per `art-direction.md`. |
| Spline scene for a 3D landing | No paid tools approved (per `one-input-brief.md`). Spline Pro license not approved. |
| Blender procedural → GLB | Concept does not demand 3D. Asset cost not earned. |
| Lightweight shader (OGL / Pixi) for surface ornament | Concept rejects ornament; type and photography do the work. |
| CSS / SVG illusion of 3D | Not needed. |

## What the project ships instead

- Editorial photography of the real branch interior as the signature visual.
- Two restrained signature motions (hero slow-pan + product card hover-reveal) implemented with GSAP or vanilla JS — see [motion-language-system.md](motion-language-system.md).
- Type as the primary design device per [art-direction.md](art-direction.md) § Typography.

## If the founder later asks for 3D

If a future iteration introduces 3D (e.g. a hero product spinner for the house "Fitsole" line, or a virtual try-on), this file becomes the entry point for the spec, and `web-native-3d-master`, `threejs-r3f-master`, and `gpu-performance-master` are spawned. As of `creative-brief.md` sign-off, none of the above is in scope.

**Truth label for `ship-decision.md`:** `Not run — 3D route = None per tech-stack-decision.md § 3D route.`
