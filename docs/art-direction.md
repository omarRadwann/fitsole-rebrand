# Art Direction — Caliper

Concept: **The Diagnostic Instrument** (per `concept-scorecard.md`). Reference frameworks: V7 `02-concept-art-direction-master.md`, `13-awwwards-quality-taste-rubric.md`, `16-visual-composition-cheats.md`. Halo's art direction (in `DESIGN_BRIEF.md`) defines the **opposite** pole — Caliper must visibly diverge.

## One-sentence direction

Caliper looks like an engineering blueprint that became a working website — measurement-grid layouts, schematic line work, a single fluorescent measurement-mark color, and a kinetic caliper instrument that participates in every page.

## Palette — OKLCH

Differentiated from Halo's editorial-dark-with-amber-accent.

| Token | Value | Use |
|---|---|---|
| `--paper`            | `oklch(96% 0.015 85)` | page background — warm cream blueprint paper, slight yellow cast |
| `--paper-deep`       | `oklch(90% 0.018 80)` | section bands |
| `--ink`              | `oklch(20% 0.020 250)` | body text — cool ink-blue-black, not pure black |
| `--ink-mute`         | `oklch(45% 0.018 250)` | secondary text |
| `--rule`             | `oklch(55% 0.04 245)` | schematic line work, dim lines, grid |
| `--rule-faint`       | `oklch(75% 0.03 245)` | secondary grid, calibration ticks |
| `--measure`          | `oklch(62% 0.27 0)` | the single accent — fluorescent magenta for measurement marks, dimension values, hover states. Used sparingly. |
| `--caliper-steel`    | `oklch(72% 0.012 250)` | the caliper instrument's brushed steel |
| `--caliper-shadow`   | `oklch(35% 0.020 250)` | the caliper's cast shadow on paper |

The contrast plan: ink-on-paper for legibility (passes WCAG 2.2 AA at body sizes), with the single fluorescent magenta as the only "look at this" color in the entire palette. Restraint is the brief.

## Typography

| Role | Family | Weight | Tracking | Notes |
|---|---|---|---|---|
| Display | **Inter** at very large sizes, treated like signage | 400, semi-condensed via `font-stretch: 87.5%` | -0.02em | Restrained — the visual does the work, not the type. (Anti-Halo: Halo runs Instrument Serif italic for display.) |
| Body | **Times New Roman** variant (`Source Serif 4` for fallback) | 400, 500 for emphasis | normal | Reads as documentation, not editorial. |
| Measurements / labels | **Berkeley Mono** (fallback: `JetBrains Mono`) | 400, 500 | -0.01em | Used for every numeric value, dimension callout, and methodology label. This is the signature voice. |
| Footnotes | Inter | 400 | normal | Small, scientific-paper feel. |

Type hierarchy ratio: 4.5 — large but not gigantic. Hero display ≈ 72px at desktop / 48px at mobile. Body 17px. Mono labels 13px with letter tracking adjusted optically.

## Composition system (the schematic grid)

The page is treated as a sheet of A1 blueprint paper rotated landscape-then-portrait. Every section is laid out within a 12-column grid that exposes its rules — not hidden under a frame:

- A persistent **left margin** carries a vertical ruler (mm marks every 80px scroll) with the current section's depth annotated.
- A persistent **top edge** carries a horizontal ruler that ticks at section transitions.
- **Dim lines** (V7 `16-visual-composition-cheats.md` recommends "rules that show layout") connect related content — e.g., a callout to the diagram element it labels — using the same conventions as engineering drawings: thin solid line with a small arrowhead and a value-tag with the relationship.
- **Leader lines** appear on hover for any case-study artifact, exposing the measurement annotations on the artifact (width, conversion delta, audience).
- No drop shadows. No card containers. Sections separate by horizontal rule + section number ("§ 02 / 04") in mono.

Banned (per `14-ai-anti-genericity-protocol.md`): centered hero, 3-card grid, rounded corners > 2px, glassmorphism, animated gradient, glowing border, generic full-bleed photo.

## The caliper instrument (Blender + Three.js)

The signature object. Built in Blender, exported as Draco-compressed GLB.

- **Geometry:** beam (140mm scale), fixed jaw, sliding jaw with vernier scale, depth probe. ≈ 8K polys (within `18-webgl-3d-performance-tricks.md` budget).
- **Materials:** brushed steel BSDF for body, dark gunmetal for vernier window, single emissive material at `--measure` magenta for the active measurement mark.
- **Lighting:** one soft top-key (paper-cream tinted), one rim from the right (cooler), one fill bouncing off the paper plane. Baked to vertex colors where possible.
- **Animation states (defined as exported clips, blended in Three.js):**
  - `idle` — slow breath, ±0.5mm
  - `measuring` — jaws close from open position to a target value, vernier slides, mark snaps to `--measure` color
  - `seeking` — fast 30-frame anticipation-overshoot-settle as the user scrubs
  - `disengaged` — fully open, dim
- **Mobile:** rotate 90°, present as vertical caliper. Drag-on-jaw replaces scroll-jaw-coupling.
- **Reduced-motion / WebGL-fail fallback:** static SVG schematic of the caliper at four labeled positions. No animation.

## Motion principles

Motion is **mechanical, not cinematic** (anti-Halo: Halo is cinematic). Easings:

- Default: `cubic-bezier(.5, 0, .2, 1)` — quick start, gentle settle. Reads as mechanical.
- The caliper jaw: `cubic-bezier(.3, .0, .15, 1.05)` — slight overshoot on close, like a real machinist setting a measurement.
- No parallax. No long fade-ins. No background video.
- Per-element entrance: 240ms, staggered 30ms. Sharp.

## Sound

None. Halo runs ambient pad + chord progression; Caliper is silent. (Per `13-awwwards-quality-taste-rubric.md` "brave decision" criterion: a major studio site with no audio at all reads as intentional restraint.)

## Iconography

No icons. Where Halo would put an icon, Caliper puts a numbered schematic callout. Where one is unavoidable (footer share/contact), draw it as a single-stroke 1px schematic line, never filled.

## Photography

None. Per the audit-style aesthetic, the only "imagery" on the site is:
- The caliper instrument (Blender)
- SVG schematics of case-study artifacts (rendered in code)
- Optional: heavily desaturated, paper-textured photographic crops behind one section of the Studio page — flagged in `asset-ledger.csv` as "DEFER" until concept-lock retrospective.

## Layout patterns to reuse

Per `16-visual-composition-cheats.md`:

- **Two-column staircase** — body left, mono annotation right; offsets shift by row to suggest movement.
- **Edge-anchored captions** — a callout floats to the page edge, connected to its target with a dim line + value tag.
- **Aligned-baseline measurement strip** — at the foot of any data block, a horizontal ruler with marked values.
- **Negative-space margins** — at least 40% of each section is intentionally empty. Confidence through restraint.

## Implementation budget (V7 `08-performance-core-web-vitals-master.md`)

- LCP ≤ 1.8s on Moto G4 over fast 3G — the hero must not depend on the caliper GLB loading.
- TBT ≤ 200ms — defer Three.js until the hero is painted; load the GLB in the `'load'` event.
- CLS ≤ 0.05 — every schematic dim-line has a reserved space.
- JS budget: 60KB (gzipped, total Three.js + GSAP + Lenis + scene code).
- Image/3D budget: 80KB Draco GLB for the caliper; nothing else above 4KB.
- Fonts: Inter, Source Serif 4, JetBrains Mono — Google Fonts swap with `display: swap`. Berkeley Mono is paid; we ship JetBrains Mono and document the trade-off.
- Mobile-first decisions documented in `04-image-generation-asset-sourcing-master.md` — Caliper has zero stock or generated photographic content; only Blender + SVG.

## Accessibility commitments (V7 `09-accessibility-wcag-master.md`)

- WCAG 2.2 AA contrast on all body text against `--paper`.
- The caliper instrument has a non-decorative role: its current measurement is announced via an `aria-live="polite"` region. Each measurement transition updates the announcement.
- Full keyboard navigation. Caliper jaws accept arrow-key adjustment with discrete steps.
- `prefers-reduced-motion: reduce` cuts the caliper to the static SVG fallback.
- Skip-link to main content present.
- All schematic dim-lines have an `aria-hidden="true"` attribute; the content they reference includes the relationship in plain text.
