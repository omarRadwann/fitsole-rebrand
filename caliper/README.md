# Caliper — sub-site

A fictional precision-marketing studio used as the second portfolio piece in this repo. Coexists with Halo at the repo root (Halo is the editorial-dark agency; Caliper is the mechanical-instrument agency — deliberate opposite poles).

## Build status — stage 2/3 checkpoint

| Stage | Status |
|---|---|
| Assumptions | **Verified** — `../docs/assumptions.md` |
| Research | **Manual review** — `../docs/research-brief.md` (live competitor scan: Not run) |
| Concept territories scored | **Verified** — `../docs/concept-scorecard.md` — Concept A "The Diagnostic Instrument" selected |
| Art direction | **Verified** — `../docs/art-direction.md` — schematic blueprint aesthetic locked |
| Copy system | **Verified** — `../docs/copy-system.md` — voice + banned words + headlines locked; `/work.html` spec updated with alcove pattern from `knowledge/36-community-techniques-may-2026.md` |
| Asset ledger | **Verified** — `../docs/asset-ledger.csv` |
| Build — index hero + § 02 spread test | **Verified** — `./index.html` |
| Build — Blender caliper instrument | **Verified** — `./blender/caliper_instrument.py` builds idempotently; outputs `./blender/caliper.glb` at 14.94 KB Draco-compressed (budget 80 KB) |
| Build — Three.js scene wired to scroll + keyboard | **Verified** — `./caliper-core.js` loads Three.js via importmap, mounts GLB, scrubs `measuring` animation by scroll/keyboard, falls back to SVG when WebGL fails or reduced-motion is set |
| Build — § 03–09 (diagnostic, engagements, refusals, work, studio, CTA, footer) | **Not run** — next stages |
| Build — method.html, work.html (alcove pattern), studio.html | **Not run** — next stages |
| Mobile vertical-caliper rotation | **Not run** — flagged in `../docs/qa-report.md` |
| QA — Playwright screenshot | **Verified** — `../upgrade-diffs/smoke/caliper-stage2-home-v2.png` |
| QA — Lighthouse, axe live runs | **Not run** — pending full build |
| Ship decision | **NO SHIP — stage checkpoint only** per `../docs/qa-report.md` |

## Path

`/caliper/` is served at `http://localhost:8766/caliper/` when running the repo's `python -m http.server`. On GitHub Pages it would serve at `omarradwann.github.io/halo/caliper/` (the user has NOT decided yet whether to push the os-upgrade-v7 branch to that remote).

## Why a sub-site instead of a separate repo

- Keeps the Moon-Level Website Agent OS V7 install singular — no duplicate `.claude/`, `.codex/`, knowledge files
- Lets Halo + Caliper be reviewed and compared as a pair
- Costs only a path segment; can be migrated to its own repo later if/when commercial

## Source map

```
caliper/
  index.html              hero + first content section (stage 1 foundation)
  caliper-core.css        the schematic-grid token system (palette, type, rules)
  caliper-core.js         caliper instrument loader, scroll handler, reduced-motion fallback
  assets/                 generated SVGs (caliper-static.svg, schematics, og-image)
  blender/
    caliper_instrument.py  Blender 5.1 baking script (idempotent) — exports caliper.glb
    caliper.glb            baked output (gitignored if size grows; budgeted <=80KB Draco)
  README.md               this file
```

## Build commands

From the repo root:

```powershell
# Local preview
python -m http.server 8766
# Then http://localhost:8766/caliper/

# Bake the caliper instrument GLB (writes caliper/blender/caliper.glb)
& 'E:\blender.exe' -b -P caliper/blender/caliper_instrument.py
```
