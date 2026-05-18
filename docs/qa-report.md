# QA Report — Caliper (stage 2/3 checkpoint)

Per V7 `10-qa-screenshot-release-master.md`. This is a stage-checkpoint QA, not a ship QA — sections 03–09 + method/work/studio pages remain to be built. Labels follow the V7 truthfulness gate: Verified / Manual review / Not run / Blocked.

## Commands Run

```
python ops/validate_pack.py                           # OS pack integrity — last run pre-Caliper, passed structurally
python -m http.server 8768                            # local preview
curl /caliper/ /caliper/blender/caliper.glb /caliper/caliper-core.js  # all 200
E:\blender.exe -b -P caliper/blender/caliper_instrument.py  # bake — exit 0
npx playwright screenshot http://localhost:8768/caliper/    # captured twice
```

## Build

**Verified** — `caliper/blender/caliper_instrument.py` exits 0 and writes `caliper/blender/caliper.glb` (14.94 KB Draco-compressed, well under the 80 KB budget). Re-runnable / idempotent (clears scene via `read_factory_settings(use_empty=True)` first).

## Typecheck

**Not run** — no TypeScript / type checker on this stack (plain ES module + importmap, matching Halo). N/A.

## Lint

**Not run** — no ESLint config landed. Will add if/when JS exceeds 2 files. N/A for stage 2/3.

## Accessibility

**Manual review**:
- `[data-measure-value]` has `role="spinbutton"`, `tabindex="0"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`. Verified via reading caliper-core.js.
- `#measurement-announce` is `aria-live="polite"`, throttled via rAF. Updates each scroll/keyboard tick. Verified.
- All schematic dim-lines / rulers are decorative (`aria-hidden="true"`). Verified in index.html.
- The Three.js canvas has `aria-hidden="true"` and the SVG fallback has `aria-label="Static caliper schematic at 28 millimetres"`. The `<h2>` for the instrument is `.sr-only`.
- Skip-link to main: **NOT YET ADDED** — flagged for the section-3-to-9 stage.
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
- Desktop 1440×900 — screenshot at `upgrade-diffs/smoke/caliper-stage2-home-v2.png` confirms layout and instrument framing.
- Tablet / phone — **Not run**. The `@media (max-width: 960px)` block in `caliper-core.css` switches to single-column and stacks the instrument below the hero. Vertical caliper rotation per `art-direction.md §The caliper instrument · Mobile` is **NOT YET WIRED** in caliper-core.js — flagged for stage 4.
- `prefers-reduced-motion: reduce` — the caliper-core.js path forks to SVG fallback. Spot-verified via code reading.

## Console Errors

**Manual review** — no errors observed in the Playwright screenshot run. (`console.log` signature line from caliper-core.js is informational.) `read_console_messages` not yet checked via Chrome MCP.

## Asset Legality

**Verified**:
- All in-repo assets generated locally (Blender + hand-coded SVG + CSS-only schematics).
- Fonts: Inter, Source Serif 4, JetBrains Mono — Google Fonts CDN, SIL OFL / Apache 2.0, commercial-use OK. Declared in `docs/asset-ledger.csv`.
- No stock photography, no AI-generated imagery, no audio.
- Berkeley Mono substituted with JetBrains Mono per `docs/art-direction.md §Typography` — documented in `asset-ledger.csv`.

## Known Limitations

1. Caliper home sections 03–09 not yet built — only § 01 (hero) and § 02 (spread test) ship.
2. Mobile vertical-caliper rotation not wired.
3. `method.html`, `work.html`, `studio.html` not yet created. `/work.html` will apply the luxury-alcove pattern per `knowledge/36-community-techniques-may-2026.md §B.1`.
4. Lighthouse / axe / live accessibility QA not yet run.
5. JS budget per `docs/art-direction.md` is unrealistic for Three.js — needs revision.
6. Skip-link to main content not yet added.
7. The Three.js scene currently scrubs the "measuring" animation manually; the "seeking" and "disengaged" clips are exported but not yet triggered. They'll come online with `/work.html` when scroll moves between case-study alcoves.

## Final Ship Decision

**NO SHIP** — stage 2/3 checkpoint only. Hero + Three.js instrument + Blender pipeline all verified. Sections 03–09 and pages 2–4 must land before any ship decision can move past NO SHIP.

Tag: `caliper-stage-2-3-checkpoint` to be set after the commit.
