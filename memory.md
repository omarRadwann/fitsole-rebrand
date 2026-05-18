# Halo — Project Memory

Long-form learnings, decisions, and gotchas from the build. Skim this before you re-do anything that the previous session already settled.

## Decisions, on the record

### Vanilla Three.js, not R3F

Considered but rejected. The moon-level guide §11.2 and §2.8 explicitly recommend vanilla Three.js for "experiences that are mostly a custom engine." Halo's 3D state is imperative (scroll timelines, hero choreography), there's no React anywhere else, and adding R3F would mean a Vite/Next.js setup + ~120KB of React + a 1–2 day refactor for marginal benefit at this scope. If the project ever graduates to Next.js (per HANDOVER §9), R3F is the right move at that point.

### Multi-page, not SPA

Static HTML files with cross-document View Transitions. Browser back/forward works naturally, no router needed, Pages serves it for free. Persistent canvas across navigations was considered (§11.3) but rejected because the no-build-step constraint makes it complex; cross-doc VT + per-page mini-canvas was the moon-level alternative.

### One signature interactive page (home), quiet inner pages

Internal pages get a *single* 3D moment in their hero, no postprocessing, no scroll cinematography. The home is the flagship — it carries the gravity field, particle reactivity, story-mode acts, per-act audio chord. This is the moon-level pattern for editorial agency sites: one signature, then prose.

### Each page self-contained (inlined CSS/JS)

Yes, there's duplication. The duplication is *intentional*. Each file is portable, the deploy has zero build dependencies, GitHub Pages serves it verbatim. If the project graduates to a build system, extract to `halo-core.css` + `halo-core.js`; until then, copy-paste is the right call.

### Apogee → Halo

Project filename history: started as a creative studio called *Apogee* on a single-file site (`apogee.html`). The single file's variable names, localStorage keys, console messages, and the Blender script's GLB filenames still use `apogee` as internal stable identifiers. The user-visible brand is *Halo*. Don't rename the internal references — `localStorage.getItem('apogee:audio')` would lose user mute preferences on any rename.

When the home was deployed to Pages, `apogee.html` → `index.html` (so `/` serves the home). Internal pages' nav links were updated en bloc.

## Gotchas the last session hit and resolved

### Lenis intercepts native scroll events

`addEventListener('scroll', handler)` on `window` misses programmatic scrolls when Lenis is active — Lenis transforms the body and emits its own scroll event. The fix is to also poll on `gsap.ticker.add()` and trigger the handler when `window.scrollY` changes. Without this, the sticky-active capability item and the live scroll cue both go stale on programmatic scrolls.

### `MeshPhysicalMaterial.transmission` requires `alpha: false`

The dispersion-glass material renders nearly black if the WebGL renderer is initialized with `alpha: true` — the transmission shader samples an empty backbuffer. Either init with `alpha: false` and set an opaque `scene.background`, or use a lower-quality material without transmission. The home renderer is `alpha: false` for this reason. The per-page 3D moments on internal pages use `alpha: true` because they need the page background to show through, so they accept slightly reduced transmission quality.

### Six WebGL contexts evicted the main scene

Attempted to give each of the 6 bento cards its own per-card WebGL canvas with custom shaders (per moon-level §11.4). The 6 contexts + main scene context exceeded Chromium's per-tab limit and the main scene started losing context with shader-validation errors. Reverted; the CSS gradients on the cards are sufficient. Future: single shared canvas with scissor regions per card.

### Cross-origin `gh` git push

The `gh` CLI is authenticated as `omarRadwann` via keyring. The local git config (`user.name`, `user.email`) is `omarmcrocosoft` — a different identity. Per the harness rules, we never mutate git config. Commits authored as `omarmcrocosoft`, repo owned by `omarRadwann`. GitHub Pages serves from the repo owner's account regardless of commit author.

### Blender 5.1 dropped `MusgraveTexture.noise_depth`

The sculpture script originally hard-set `tex.noise_depth = noise_depth` and crashed on Blender 5.x. Fix was to guard every Musgrave attribute with `hasattr()` before setting, matching the script's existing `auto_smooth_angle` guard pattern. Same approach should be used for any Blender API access — defensive `hasattr` everywhere.

### Per-page importmap = ~140KB Three.js per page

Each internal page loads Three.js + DRACOLoader + GLTFLoader + RoomEnvironment via CDN importmap. Browser caches after the first hit, so it's a one-time cost per visitor. Acceptable for the moon-level signature. If the per-page weight became a problem, move the per-page 3D into a deferred ESM module loaded only after the page settles.

## Things that are *not* bugs but read like bugs

- The 78 "THREE.WebGLProgram: Shader Error 1282" entries in the preview console are stale from the per-card WebGL experiment. Count hasn't grown across reloads since the experiment was reverted. They're historical, not active.
- The preview's `screenshot` tool times out intermittently on the wider viewport (1100×700+). The page is fine; the screenshot capture pipeline just chokes occasionally. Verify with `preview_eval` instead.
- The manifesto h2 wraps to 6 lines on a 454px column. That's the editorial wrap for Instrument Serif at 68px in that grid column — *intentional*, not a layout bug.

## Useful incantations

```powershell
# Re-bake all 4 Blender variants
& 'E:\blender.exe' -b -P 'C:\Users\acer\Desktop\test1\blender\apogee_sculpture.py'

# Local preview server
cd 'C:\Users\acer\Desktop\test1'; python -m http.server 8765
# Open http://localhost:8765/

# Push (Pages auto-rebuilds in ~30-60s)
cd 'C:\Users\acer\Desktop\test1'; git add -A; git commit -m '...'; git push

# Check Pages build status
gh api repos/omarRadwann/halo/pages/builds/latest --jq '{status,duration}'
```

## Brand voice — preserved verbatim

- "We build the field, not the funnel — the gravity behind durable growth."
- "Most marketing is the sound of yelling at strangers."
- "Strategy is the only compound interest left in marketing."
- "Owned compounds, rented evaporates."
- "Brand is a system, not a logo."
- "Quarterly thinking beats sprint thinking."

If new copy is being written for this project, it should sound like these. Avoid: *seamless*, *innovative*, *powerful*, *next-generation*, *world-class*, *AI-powered*, *one-stop shop*, *unleash your potential*.
