# 62 — Motion as Product Language

Motion is not a layer on top of a finished site. Motion is the way the product **speaks**. When motion is the product's language, every easing, duration, and choreography choice carries meaning. When motion is "polish," it gets cut at QA.

## The four jobs of motion

1. **Confirm** — the system heard you. Hover, focus, press, submit.
2. **Guide** — orient attention before the user has to ask.
3. **Reveal** — disclose information at the right scale at the right time.
4. **Dramatize** — give an idea memorability proportional to its strategic weight.

Motion that doesn't do at least one of these four jobs is decoration. Cut it.

## Personality → motion mapping

| Brand truth | Easing | Duration vocabulary | Distance | Bounce |
|---|---|---|---|---|
| Luxury / restraint | `cubic-bezier(0.22, 1, 0.36, 1)` | 700–1200ms hero, 250–400ms UI | Small | 0 |
| Technical / precise | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 150–250ms UI, 600ms hero | Crisp, small | 0 |
| Editorial / cinematic | `cubic-bezier(0.76, 0, 0.24, 1)` | Long sequences, 800–1400ms | Medium-large | 0 |
| Playful / tactile | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 200–500ms | Medium | Up to 1.06 scale overshoot |
| Industrial / heavy | Linear-ish ramps, weighty | 500–900ms | Medium | 0 |

Pick **one** vocabulary and use it everywhere. Mixing personalities is the most common motion-quality failure.

## The motion language doc (`docs/motion-language-system.md`)

```
Personality:
Primary easing (with cubic bezier):
Secondary easing (with cubic bezier):
Duration scale:        micro / fast / base / slow / hero
Distance scale:        S / M / L (in px or vh)
Stagger interval:      ms
Reveal pattern:        opacity / mask / clip-path / split-text / 3D
Reduced-motion policy: <how each pattern degrades>
Examples:              <component name → which tokens it uses>
```

If two team members can read this doc and produce motion that feels like the same designer made it, the language is strong enough.

## The motion-as-product test

Replace every animation with an instant cut. Ask:

1. Does the product still make sense?
2. Did we lose any meaning (not just delight)?
3. If we lost meaning, where?

The places where meaning was lost are the places motion is doing real work. Keep those. Cut the rest.

## Patterns that earn their cost

- **Pin + scrub** for a multi-step story (process, transformation, before/after). Cost: scroll-jacking risk. Earn it by making the scrub readable on mobile and reduced-motion-instant.
- **Split-text on hero** for a brand voice moment. Cost: layout shift, a11y. Earn it by reserving space and never animating font-size.
- **Magnetic CTA** for one primary action. Cost: focus management, mobile irrelevance. Earn it by keeping it desktop-only and tying it to the conversion.
- **Cursor as tool** (measuring tape for an architect, brush for an illustrator, x-ray for a clinic). Cost: discoverability, mobile fallback. Earn it by making it concept-tied.
- **Camera-on-scroll for 3D** when the story is spatial. Cost: GPU, mobile. Earn it with a poster fallback and clamp-aware DPR.

## Patterns that almost never earn their cost

- Numbers ticking up from zero (unless the number is the product).
- Letter-by-letter typewriter reveals on body copy.
- Every section fading in on scroll.
- Cards that flip on hover.
- Background video loops behind text.
- Parallax on every image.
- Custom smooth-scroll on a content-heavy page.

## The reduced-motion rule

Reduced motion is not "off." It is a parallel design with the same hierarchy and meaning, expressed without movement. For every motion choice, write the reduced-motion equivalent next to it. If you can't, the motion isn't earning its place.

| Motion | Reduced-motion equivalent |
|---|---|
| Parallax image | Static hero with stronger crop |
| Pinned scroll story | Anchor-linked numbered sections |
| Scrubbed 3D camera | Single poster image at strongest frame |
| Split-text reveal | Full line, opacity 1 from start |
| Smooth scroll | Native scroll |
| Magnetic cursor | Visible focus ring |

## What this looks like in `docs/`

When motion is treated as product language, `docs/motion-language-system.md` is written **before** `docs/signature-interaction-spec.md`, and every section in `docs/visual-review.md` references one of the four motion jobs. If your visual review uses words like "smooth" or "premium feel" without naming the job, the review hasn't actually critiqued the motion.

## The senior cut

After implementation, remove the bottom 30% of motion (by job-clarity). Strengthen what remains. A site with three pieces of meaningful motion will always feel more designed than a site with twelve pieces of decoration.
