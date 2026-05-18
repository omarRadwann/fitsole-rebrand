# Concept Scorecard — Caliper

Scored against the V7 `13-awwwards-quality-taste-rubric.md` 10-point taste test, plus business risk. Three differentiated territories. Selected concept is locked.

## The three territories

### A. "The Diagnostic Instrument" — mechanical/schematic

A working interactive caliper that opens and closes as scroll progresses, measuring an animated line of "category default" claims and outputting their actual values. Aesthetic: engineering blueprint. Cream paper, blueprint blue, single fluorescent magenta for measurement marks. Type: Berkeley Mono for measurements, Times New Roman variant for body. The site itself is the diagnostic — you can move the caliper jaws with your mouse on the home hero and see the spread between "what the agency says" and "what shipped."

### B. "The Specimen" — laboratory/specimen-jar

Each case study is a glass specimen jar containing a representative artifact (a screenshot, a sequence, a pricing table). Hover dissolves the glass with a refraction shader. Aesthetic: museum natural-history; cream, bone, ink-black, mercury silver. Type: a serif (Cormorant Garamond) + monospace labels. Slower, more contemplative, but the specimen-jar gimmick is single-note.

### C. "The Field Notebook" — handwritten/marginal

A personal letter from the founding partner, the whole site as a leather-bound notebook with marginalia. Aesthetic: warm cream paper, brown ink, pencil sketches, scanned-paper grain. Type: a letter-style serif + handwritten accent. Lowest tech ambition, fastest to ship, but risks "Founder Letter" trap (looks like a blog).

## Scorecard

Each row scored 1–10 against the V7 rubric. Threshold for award-readiness per `13-awwwards-quality-taste-rubric.md`: average ≥ 8.5, no category below 7.5, Memory ≥ 8.5, Mobile ≥ 8, Performance ≥ 8, Content Specificity ≥ 8.

| Rubric criterion | A. Diagnostic Instrument | B. Specimen | C. Field Notebook |
|---|---:|---:|---:|
| 1. Immediate Identity | 9 — caliper visual telegraphs "measurement studio" in 2 sec | 7 — specimen jar reads art-museum, less obvious | 6 — reads "blog" before "agency" |
| 2. Visual Ownership | 9 — engineering aesthetic uncommon in marketing-agency category | 8 — distinctive but seen in editorial/publishing | 5 — too close to Substack landing pages |
| 3. Typography Confidence | 9 — Berkeley Mono as measurement label is brave | 8 — Cormorant + mono pairing is safe-strong | 7 — letter-style serif is easy to underuse |
| 4. Composition | 9 — schematic-grid layout enables 2-col staircases, calibration ticks, asymmetric measure-lines | 7 — specimen grid risks 3-card monotony | 6 — single-column scroll = no composition |
| 5. Interaction Meaning | 10 — the caliper is the metaphor AND the navigation primitive AND the case-study viewer | 7 — glass-dissolve is decorative | 5 — page-turn page-curl is decorative |
| 6. Content Specificity | 9 — diagnostic methodology forces specifics ("we measure these 12 variables") | 8 — specimens still need labels | 7 — letter form invites generalities |
| 7. Mobile Integrity | 8 — caliper rotates to vertical, scroll-drives a single axis | 8 — specimens stack | 9 — vertical letter scrolls natively |
| 8. Performance Feel | 7.5 — one WebGL scene to budget; reduced-motion-fallback required | 7 — refraction shader is heavier | 9 — almost no JS |
| 9. Detail Consistency | 9 — schematic tokens (tick marks, dim lines, leader lines, dimension arrows) carry across all 4 pages | 8 — specimen-jar motif on case pages | 7 — marginalia is hard to reuse without becoming twee |
| 10. Memory | 10 — "the agency with the caliper that measures bullshit" | 8 — "the agency that displays cases as specimens" | 6 — "the agency that writes letters" |
| **Average** | **8.85** | **7.6** | **6.7** |
| Business Conversion Fit | 9 — methodology-led aesthetic matches a methodology-led offer | 7 — too brand-precious for B2B-SaaS founders | 6 — undersells the team to non-readers |
| Risk (lower is better) | medium — one heavy interactive needs to land | low — but yields a forgettable site | low — easy to ship, hard to win on |

## Selected Concept

**A. The Diagnostic Instrument** — locked.

## Why This Wins

- Hits the V7 award-readiness threshold (8.85 avg, no category below 7.5, Memory at 10, Mobile and Performance both at or near 8).
- The metaphor is **also** the product. The caliper measures the gap between what an agency says and what shipped — which is the studio's entire positioning. Per `13-awwwards-quality-taste-rubric.md` Memory rule: the user will remember one sentence + one visual, and "the agency with the caliper that measures bullshit" is sticky.
- Maximum differentiation from Halo (Halo: ethereal field, Caliper: mechanical instrument). The two pieces in the repo become a deliberate pair — opposite-pole studies.
- The diagnostic methodology has natural section divisions that map to the schematic-grid layout — the layout earns its complexity.

## What Was Rejected

- **B. Specimen** rejected: lab-museum aesthetic over-rotates into "we are storytellers." Loses the operator buyer in <5 seconds.
- **C. Field Notebook** rejected: reads as a blog before it reads as a studio. Worse: a notebook is a low-confidence container — the studio sells methodology, not memoir.

## Signature Interaction

A 3D caliper, top-anchored to the viewport, whose jaws open and close as the user scrolls. Between the jaws: a line of category claims ("strategic creative growth innovative") that gets visibly compressed and renamed as the caliper closes, ending at a single named methodology word. On the case-study page, the same caliper is repurposed: each case is a measurement (before / after / shift), and the caliper jaws expand to the measured delta. Mobile: caliper rotates to vertical orientation, drag-to-measure replaces scroll-to-measure. Reduced-motion: static SVG schematic with all four positions labeled.

One interaction, three contexts, one metaphor. Per `28-agent-collaboration-patterns.md`: the signature interaction must be reusable, not bolted-on.

## No-Ship Risks

| Risk | Mitigation |
|---|---|
| Caliper Three.js scene is too heavy for mobile / mid-range Android | Budget: ≤ 60 KB JS + ≤ 80 KB GLB Draco-compressed. Fall back to SVG schematic if `prefers-reduced-motion` or `navigator.connection.effectiveType` is slower than 4g. |
| The "measure" interaction is novel — risk of users not discovering it | Two reinforcements: an idle micro-animation on the caliper jaw every 8 seconds, and an explicit "drag to measure" label above the fold on first scroll only. |
| Schematic aesthetic is a graveyard if executed badly (becomes "fake blueprint") | Tokens defined in `art-direction.md`; commit to real schematic conventions (dim lines, leader lines, dimension arrows, ticks). Don't add decorative blueprint marks for blueprint's sake. |
| Fictional-studio framing is unclear | A footer "Fictional studio used as portfolio piece — see [repo](.)" disclosure on every page. |
| Diagnostic methodology must be written, not lorem'd | Methodology page must ship with all 12 sections filled. Build will fail QA if any section is under 100 words of real content. |
