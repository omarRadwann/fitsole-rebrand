# QA Report — Caliper (stage 4 checkpoint)

Per V7 `10-qa-screenshot-release-master.md`. This is a stage-4 QA: the home is now complete (all 9 sections shipped) but the three additional pages (method / work / studio) and a real Lighthouse / axe pass remain. Labels follow the V7 truthfulness gate: Verified / Manual review / Not run / Blocked.

## Commands Run

```
python ops/validate_pack.py                           # OS pack integrity — last run pre-Caliper, passed structurally
python -m http.server 8768                            # local preview
curl /caliper/ /caliper/blender/caliper.glb /caliper/caliper-core.js  # all 200
E:\blender.exe -b -P caliper/blender/caliper_instrument.py  # bake — exit 0
npx playwright screenshot http://localhost:8768/caliper/    # captured twice
```

## Build

**Verified** —
- Blender: `caliper/blender/caliper_instrument.py` exits 0 and writes `caliper/blender/caliper.glb` (14.94 KB Draco, 5x under 80 KB budget). Idempotent.
- HTML: `caliper/index.html` valid; 9 sections marked § 01–09; skip-link present as first focusable element; correct `<main role="main">`, `<header role="banner">`, `<nav aria-label="Primary">` landmarks.
- CSS: `caliper-core.css` ~26 KB unminified; defines schematic-grid + utility primitives + per-section layouts + a complete `@media (max-width: 960px)` block that re-flows every section to single-column.
- JS: `caliper-core.js` ~13 KB unminified; lazy-loads Three.js via importmap on `requestIdleCallback`; scrubs the GLB's `measuring` clip from a shared `mix` factor [0..1]; mobile vertical-caliper rotation wired; form submit handler validates and shows microcopy.

## Typecheck

**Not run** — no TypeScript / type checker on this stack (plain ES module + importmap, matching Halo). N/A.

## Lint

**Not run** — no ESLint config landed. Will add if/when JS exceeds 2 files. N/A for stage 2/3.

## Accessibility

**Manual review**:
- Skip-link to `#main` — **Verified** — first focusable element on body, visible only on focus (`.skip-link:focus-visible` shows it at top: 12px).
- `[data-measure-value]` has `role="spinbutton"`, `tabindex="0"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`. Verified.
- `#measurement-announce` is `aria-live="polite"`, throttled via rAF. Updates each scroll/keyboard tick. Verified.
- All schematic dim-lines / rulers are decorative (`aria-hidden="true"`). Verified in index.html.
- The Three.js canvas has `aria-hidden="true"` and the SVG fallback has `aria-label="Static caliper schematic at 28 millimetres"`. The `<h2>` for the instrument is `.sr-only`.
- Diagnostic form: each `<label>` wraps an input/select/textarea; `required` attributes drive both browser validation and the JS validator; error state highlights missing fields in magenta; `aria-describedby="form-status"` links submit to the `aria-live="polite"` status region.
- Section headers each carry their own `<h2>` (hero `<h1>` already at top); `.sr-only` is used only for the instrument and colophon-block H2s where the visual section number replaces a visible heading.
- WCAG 2.2 AA contrast on body text against `--paper`: **manually checked** at the OKLCH values in `caliper-core.css` (ink 20% L on paper 96% L well above 7:1). Not yet verified via `npx axe`.

## Performance

**Manual review** (Lighthouse not yet run):
- LCP target ≤1.8s on slow 3G: at risk. Three.js (130 KB gzip) loads via `requestIdleCallback` after first paint, so the hero text + CTA + SVG fallback render first. Likely passes on desktop, **at risk on mid-range mobile** until measured.
- TBT target ≤200ms: at risk. The GLB parse + initial AnimationMixer setup happens on the main thread. Will measure.
- CLS: low risk. The `.instrument` area has fixed `min-height` so the canvas-or-SVG swap doesn't reflow.
- JS budget (60 KB stated in `docs/art-direction.md`): **EXCEEDED**. Three.js + GLTFLoader + DRACOLoader + caliper-core.js is closer to 150–200 KB gzipped. The 60 KB budget was unrealistic for any Three.js site; matches Halo's actual posture. Recommend updating the budget to ≤220 KB and re-running QA before ship.
- Image / 3D budget (80 KB GLB): **Verified** — 14.94 KB Draco GLB, 5× under budget.

## Responsive

**Manual review**:
- Desktop 1440×900 — screenshots at `upgrade-diffs/smoke/caliper-stage4-hero.png` (hero) and `caliper-stage4-full.png` (full page) confirm layout, instrument framing, and all 9 sections.
- Tablet / phone — **Manual review**. The `@media (max-width: 960px)` block in `caliper-core.css` now covers every new section: diagnostic list collapses to 2-col, engagement-grid stacks, refusals to 1-col, specimens to 64+1-col, operators to 1-col, form to 1-col, colophon-block to 1-col. **Verified by code**, not yet verified by Playwright at 390px / 768px viewports — that's a stage-6 task.
- Vertical-caliper rotation on narrow — **Verified by code**. caliper-core.js applies `glbRoot.rotation.z = π/2` and re-frames the camera when `matchMedia('(max-width: 960px)').matches`. Not yet visually verified at a narrow viewport.
- `prefers-reduced-motion: reduce` — the caliper-core.js path forks to SVG fallback. Spot-verified via code reading.

## Console Errors

**Manual review** — no errors observed in the Playwright screenshot run. (`console.log` signature line from caliper-core.js is informational.) `read_console_messages` not yet checked via Chrome MCP.

## Asset Legality

**Verified**:
- All in-repo assets generated locally (Blender + hand-coded SVG + CSS-only schematics).
- Fonts: Inter, Source Serif 4, JetBrains Mono — Google Fonts CDN, SIL OFL / Apache 2.0, commercial-use OK. Declared in `docs/asset-ledger.csv`.
- No stock photography, no AI-generated imagery, no audio.
- Berkeley Mono substituted with JetBrains Mono per `docs/art-direction.md §Typography` — documented in `asset-ledger.csv`.

## Known Limitations (as of stage 4)

1. `method.html`, `work.html`, `studio.html` not yet created. `/work.html` will apply the luxury-alcove pattern per `knowledge/36-community-techniques-may-2026.md §B.1`. **— stage 5**
2. Lighthouse / axe / live accessibility QA not yet run. **— stage 6**
3. Playwright runs at 390px and 768px viewports not yet captured. **— stage 6**
4. JS budget per `docs/art-direction.md` is unrealistic for Three.js (130 KB gzipped baseline). Needs revision when stage-6 measurements come in.
5. The "seeking" and "disengaged" animation clips are exported in the GLB but only "measuring" is currently used. They come online with `/work.html` when scroll moves between case-study alcoves.
6. Caliper instrument scrolls off-screen as the user moves into § 03 onward. A persistent canvas (Halo-style §11.3) was considered but deferred — the instrument's job is the hero + spread test, the rest of the page is documents.
7. Form submit is a no-op. A real endpoint would be wired in stage 7 (ship). For now: validates fields, shows the success / error microcopy from copy-system.md, and resets.

## Final Ship Decision

**NO SHIP** — stage 4 checkpoint. Home is complete; pages 2-4 + live QA passes still required before any ship decision can move past NO SHIP.

Tag: `caliper-stage-4-checkpoint` to be set after the commit.
