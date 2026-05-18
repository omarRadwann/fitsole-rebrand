# Caliper — sub-site

A fictional precision-marketing studio used as the second portfolio piece in this repo. Coexists with Halo at the repo root (Halo is the editorial-dark agency; Caliper is the mechanical-instrument agency — deliberate opposite poles).

## Build status — stage 4 (home complete)

| Stage | Status |
|---|---|
| Assumptions | **Verified** — `../docs/assumptions.md` |
| Research | **Manual review** — `../docs/research-brief.md` (live competitor scan: Not run) |
| Concept territories scored | **Verified** — `../docs/concept-scorecard.md` — Concept A "The Diagnostic Instrument" selected |
| Art direction | **Verified** — `../docs/art-direction.md` — schematic blueprint aesthetic locked |
| Copy system | **Verified** — `../docs/copy-system.md` — voice + banned words + headlines locked; `/work.html` spec uses alcove pattern from `knowledge/36-community-techniques-may-2026.md` |
| Asset ledger | **Verified** — `../docs/asset-ledger.csv` |
| Build — index home (all 9 sections) | **Verified** — `./index.html`. § 01 hero, § 02 spread test, § 03 twelve measurements, § 04 three engagements with pricing, § 05 four refusals, § 06 three work specimens, § 07 four operators, § 08 diagnostic form + anti-fits, § 09 colophon block |
| Build — Blender caliper instrument | **Verified** — `./blender/caliper_instrument.py` idempotent, exports `./blender/caliper.glb` at 14.94 KB Draco (budget 80 KB) |
| Build — Three.js scene wired to scroll + keyboard | **Verified** — `./caliper-core.js`. Scroll coupling anchored to spread section's bottom; caliper holds at 1.0 mix past § 02; ArrowKeys + PageUp/Down + Home/End on the live readout drive the same mix factor; mobile vertical-caliper rotation wired (`max-width: 960px`). |
| Build — form submit | **Verified** — no-op handler with required-field validation; success and error microcopy match `docs/copy-system.md §Microcopy locks` |
| Build — skip-link | **Verified** — first focusable element on body, visible only on focus, jumps to `#main` |
| Build — method.html, work.html, studio.html | **Not run** — next stages |
| QA — Playwright screenshot (hero + full page) | **Verified** — `../upgrade-diffs/smoke/caliper-stage4-hero.png`, `caliper-stage4-full.png` |
| QA — Lighthouse, axe live runs | **Not run** — pending stage 6 |
| QA — mobile responsive at 390px | **Manual review** — media-query rules in place; needs Playwright run at 390px |
| Ship decision | **NO SHIP — stage 4 checkpoint** per `../docs/qa-report.md` |

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
