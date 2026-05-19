# Web-Native 3D Pipeline

**Status: REVISED 2026-05-20 (Full Lift Pass). 3D route = single fullscreen fragment shader (Cairo Evening), poster fallback for mobile + reduce-motion. See § Cairo Evening shader below.**

## Cairo Evening shader (added Full Lift 2026-05-20)

The Full Lift Pass added a single WebGL signature moment to close the "Signature moment" rubric gap (1 → 2). Key contract:

| Aspect | Value |
|---|---|
| Files | `components/three/HeroShader.tsx` (server-safe wrapper, `next/dynamic` + `ssr: false`), `components/three/HeroShaderClient.tsx` (R3F `<Canvas>`), `components/three/CairoEvening.tsx` (fullscreen quad), `shaders/cairoEvening.frag.ts` (GLSL fragment + passthrough vert) |
| Concept tie | Warm terracotta-to-deep-amber gradient morphs as scroll progresses. Sun-line drifts left (toward the Nile, west of Cairo). "The shop opens at 6pm." Lock-in for the brave decision in `creative-brief.md`. |
| Geometry | **Single triangle** covering NDC (-1..1) — 3 verts, cheaper than a 2-tri plane. |
| Uniforms | `uTime`, `uProgress` (mirrors Hero's `--p`), `uResolution` |
| Mount conditions | Desktop (`min-width: 768px`) AND no `prefers-reduced-motion`. Mobile + reduce-motion render the static CSS gradient poster baked into `.hero-shader__poster` (no Canvas mounted at all). |
| Layering | Behind the hero photograph (z-0). As scroll progresses, photo opacity drops 18% and brightness drops 22% — the warm terracotta haze bleeds through at edges. |
| Render policy | `dpr={[1, 1.5]}`, `antialias: false`, `powerPreference: 'low-power'`. 60fps on Apple M1, Intel UHD 620, mid-tier Adreno 6xx. |
| WebGL contexts | 1 (hero only). All other pages stay DOM. |
| Bundle impact | `+2 KB` on initial First-Load JS (dynamic import keeps three.js + R3F + drei in a separate chunk that only loads when canvas mounts). |
| Reduce-motion fallback | CSS radial-gradient poster (`.hero-shader__poster`) — identical color palette, no motion. |
| Mobile fallback | Same CSS poster (no Canvas mounted at all). |

## Why this doc exists (legacy)

Per the original [tech-stack-decision.md](tech-stack-decision.md) (pre-Full-Lift), this project did not use Three.js, R3F, Spline scenes, Blender→GLB, or any 3D surface. The selected concept (B — "The Branch") earned its signature visual through editorial photography of the actual Fitsole branch interior.

**The Full Lift Pass (2026-05-20) reversed this** — but only the surgical change documented above (one fragment shader, behind the hero photo, with a poster fallback that's pixel-identical on first paint). The pack's discipline holds: no 3D model, no GLB, no spinning sneaker, no abstraction that competes with the photograph.

## Future 3D routes (if commissioned)

If the founder later wants more 3D, the trend signal (Abraham John "Stop using boring 3D sites" thread, May 19 2026, 14K+ views) flags the right and wrong directions:

**Reject** — the stock "plastic 3D pin on cartoon globe" aesthetic that has flooded SaaS and tech-startup hero illustrations. The thread's cover image is exactly that style. Anti-pattern #13 in `art-direction.md`.

**Acceptable platforms (for bespoke or non-cliché 3D)** — sourced from the same thread:

| Tool | URL | Best for |
|---|---|---|
| Spline | spline.design | Interactive 3D scenes (alternative to our hand-coded R3F if non-engineers need to iterate). |
| Magnific 3D models | magnific.com/3d-models | Free library of less-overused 3D assets. Useful if a stylized product spinner is ever justified on PDP. |
| Contentcore | contentcore.xyz | 3D content/illustration. Useful for marketing-ad assets, not the site itself. |
| Endlesstools | endlesstools.io | Browser-based 3D + 2D illustration tool for static brand pattern assets. |
| Blenderkit | blenderkit.com | Blender asset library — relevant if a Blender→GLB pipeline is ever added (the original Halo project used this exact pattern; the script lives at `.archive/halo-2026-05/blender/apogee_sculpture.py` as reference). |

**Recommended posture** for any future 3D pass:
1. Stay on Three.js + R3F (already wired, dynamic-imported, performance-budgeted). Don't migrate to Spline runtime — adds a second 3D stack.
2. If a stylized 3D asset is needed (e.g. an abstract Fitsole-line product hero), bake in Blender from a Blenderkit base → export GLB → load via the same dynamic-import pattern as `HeroShader`.
3. Always test against the anti-pattern: *would this look at home in a generic SaaS landing page?* If yes, reject.

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
