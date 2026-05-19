# Halo — Design Brief

Per `ULTIMATE_WEBSITE_AGENT_OS.md` §3 (Minimum Input Protocol) and §32 (Deliverable Files).

## Business assumptions (inferred)

- **Business type:** growth-marketing practice / strategic consultancy (fictional case study, brand-system build)
- **Audience:** founders, growth leaders, and brand decision-makers at Series A → late-stage companies, plus institutional finance / luxury / professional-services principals
- **Buyer state:** comparing — has typically worked with one or more holding-co agencies and been disappointed; is intellectually persuaded that brand compounds; is looking for evidence that a smaller, slower, more deliberate practice exists
- **Primary conversion:** email enquiry to `hello@halo.studio` ("Brief the practice")
- **Secondary conversion:** newsletter signup (monthly "Field notes")
- **Trust blockers:** scale (only 9 people — can they handle our org?); pricing opacity; case-study credibility; relationship to the larger marketing-services landscape
- **Required proof:** quantified case study outcomes (CAC, AOV, share-of-voice, organic share); named testimonials with role + company; third-party media quotes
- **Website category:** ambitious creative-marketing site / agency-portfolio hybrid

## Audience

- **Primary:** founders and CMOs at brands $20M–$500M revenue who are intellectually post-funnel
- **Secondary:** CFOs and boards (who often initiate Halo-type engagements) and journalists/operators who circulate the firm's writing
- **Tertiary:** the practice's own future-hire candidates (the partners write to attract talent as much as clients)

## Positioning

```
For founders who suspect the funnel metaphor has been eating their marketing,
Halo is a growth practice that builds magnetic brand systems
that deliver durable demand through strategy, brand systems,
content engines, and quarterly recalibration —
unlike performance-only agencies, which chase a deteriorating curve.
Because brand is the only compound interest left in marketing.
```

- **One-line promise:** "We build the field, not the funnel — the gravity behind durable growth."
- **Emotional promise:** the relief of working with a practice that takes the long arc seriously
- **Practical promise:** measurable shifts in CAC, share-of-voice, and inbound pipeline within 12–18 months
- **Mechanism:** a 5-phase engagement (Field study → Positioning → System → Compounding loops → Quarterly recalibration)

## Creative concept

**The field, not the funnel.** Brands as gravitational. The work as the slow construction of mass. Visually expressed as a dispersion-glass sculpture surrounded by a halo ring and a particle field — *the brand field made literal* — with the cursor exerting gravity on type and particles alike.

### Signature interaction

The cursor *is* the field. Hovering hero characters bends them toward the pointer; the particle field clusters and brightens at the cursor; the warm-amber halo ring tilts in 3D. On mobile, a tap triggers a 720ms gravity burst that radiates outward from the touch point. One metaphor, expressed across DOM + WebGL + audio.

## Art direction

| Axis | Decision |
|---|---|
| Mood | Editorial dark, contrarian, slightly cinematic |
| World | A field, a halo, a gravitational presence — physics-as-metaphor |
| Material | Dispersion glass, warm amber light, fine grain noise, paper texture in body |
| Typography | Instrument Serif italic display, Inter Variable body, JetBrains Mono labels |
| Color | OKLCH palette — near-black paper `oklch(10% 0.014 260)`, warm amber accent `oklch(76% 0.18 70)`, cobalt counterweight `oklch(72% 0.16 245)` |
| Layout | Editorial; 2-col staircase grids; bento for casework; no centered-with-3-cards |
| Motion | Cinematic, slow easings (cubic-bezier(.22,1,.36,1)), reduce-motion safe |
| Sound | Optional ambient pad (Web Audio); per-act chord progression; quiet UI taps |

## Content plan

- **Home** — 10 sections: hero, proof, voices, press, manifesto, essay, engagement, work, capabilities, contact (per `index.html`)
- **Work** — 12 named case studies with quantified outcomes (per `work.html`)
- **Studio** — thesis essay + 9 named partners + 2 studios + 6 engagement criteria + 4 refusals on the record + 5 operating principles (per `studio.html`)
- **Journal** — featured essay ("The funnel was always a metaphor.") + 8-entry archive + monthly-letter signup (per `journal.html`)

## Asset plan

See `ASSET_MANIFEST.md`. Headline: **all 3D assets are baked from a single Blender script** that produces 4 variants in one headless run. No stock photography in v1.

## Technical plan

- Plain HTML/CSS/JS, no build step
- Three.js via importmap CDN (one importmap per page that needs 3D)
- GSAP + ScrollTrigger + Lenis on home only
- Cross-document View Transitions for navigation (Chromium); JS fade fallback elsewhere
- Static deploy on GitHub Pages from `main` branch root
