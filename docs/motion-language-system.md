# Motion Language System

Inherits motion personality from [art-direction.md](art-direction.md) § Motion language. Methodology: `references/07-motion-gsap-master.md`, `references/62-motion-as-product-language.md`.

## Personality

**Editorial.** Not luxury, not technical, not cinematic, not playful. Motion supports product and product context; motion never becomes the experience.

Three rules that follow from the personality:

1. **Restraint is the default.** A static frame is preferred unless motion clarifies meaning.
2. **Motion respects the user's pace.** No scroll-jacking. No auto-rotating carousels. No forced reveals.
3. **The site reads as designed at any moment of scroll.** Pausing the page never reveals an in-progress animation seam.

## Easing tokens

Authored for this project (not GSAP defaults). Implemented in `app/lib/easings.ts` of the scaffolded workspace:

```ts
export const easings = {
  // Editorial — for content reveals, page transitions, sheet open/close.
  smooth: 'cubic-bezier(0.45, 0, 0.15, 1)',
  // Long-arc, low-impulse — for the hero slow-pan over scroll. Reads as drift.
  dramatic: 'cubic-bezier(0.85, 0, 0.15, 1)',
  // Precise, slightly-snappy — for product card hover-reveal cross-fade.
  snap: 'cubic-bezier(0.32, 0.72, 0.0, 1.0)',
} as const
```

**Primary easing: `smooth`.** Used unless a specific motion calls for `dramatic` (hero scroll-pan only) or `snap` (card reveals only).

**Reason:** A long-tail editorial ease (low impulse, gradual settle) matches the "knowledgeable shop staff" tone — confident, unhurried, never bouncing. Rejecting GSAP's `power2.out` / spring defaults specifically because they read as toy-like in a retail context where customers want certainty.

## Duration tokens

```ts
export const durations = {
  micro: 100,     // ms — icon state, focus ring, button-press tactility
  fast: 200,      // ms — product card hover-reveal cross-fade
  base: 350,      // ms — sheet/modal open, branch-pin expand
  slow: 600,      // ms — page-level reveals (rare)
  hero: 8000,     // ms — hero photograph slow-pan over scroll
} as const
```

## Distance tokens

| Token | px or vh | Use |
|---|---|---|
| S | 4px | micro-state transitions (focus ring offset, icon shift) |
| M | 12px | hero slow-pan total translate; small reveal offsets |
| L | 24px | page-section reveal offsets (rare — most reveals are opacity-only) |

## Reveal patterns

| Pattern | Where used | Reduced-motion equivalent |
|---|---|---|
| Opacity-only | Page-section enters on scroll into view (~rare; used sparingly) | Same; opacity instant to 1 |
| Mask reveal | **Banned for this project** — too "design system showcase" for editorial register | N/A |
| Clip-path | **Banned** — same reason | N/A |
| Split-text (line-by-line) | **Banned** — type already does the heavy lifting; line-stagger would compete | N/A |
| Cross-fade | Product card hover (primary flat → secondary shelf-context shot) | No transition; primary flat only |
| Slow-pan / parallax-like translate | Hero photograph only (8s scroll-tied lateral pan, ≤12px total) | Static photograph |

## Stagger rules

- **Default stagger:** 60ms between items.
- **Maximum cascade length:** 6 items.
- **When to refuse stagger entirely:**
  - Lists > 8 items (becomes noise).
  - Body copy paragraphs (text already has its own reading rhythm).
  - Product cards on scroll-into-view (cards appear all-at-once when in view; staggering 20+ cards is theater, not motion-as-language).
  - Navigation items (instant — users want to read the IA, not watch it cascade).

Stagger may only be used on: the homepage's small ≤6-item "Picked this week" grid (subtle, 60ms between cards) — and even there, only if it visibly helps comprehension; otherwise instant.

## Motion-as-language audit

Every motion on the site does one of four jobs (per `references/62-motion-as-product-language.md`):

| Component / section | Motion | Job (confirm / guide / reveal / dramatize) |
|---|---|---|
| Hero slow-pan | 8s lateral translate over scroll (12px) | **Dramatize** — sells the "walking into the shop" metaphor. The only dramatize moment on the site. |
| Product card hover-reveal | 200ms cross-fade flat → shelf-context | **Reveal** — shows the in-context shot without consuming layout space. |
| Branch-pin expand | 350ms `smooth` ease, content opacity + 4px translate-y | **Confirm** — confirms the user's intent (they hovered/tapped; the system acknowledges). |
| Cart drawer open | 350ms `smooth` slide-from-right (desktop) / slide-from-bottom (mobile) | **Guide** — directs attention to the cart state. |
| Mobile menu open | 350ms `smooth` slide-from-top sheet | **Guide** — directs to navigation. |
| Newsletter input focus | 100ms `micro` border-color + focus-ring scale | **Confirm** — input is active, ready to receive. |
| Page-level scroll-into-view reveals | Opacity-only over 600ms `smooth`, threshold 0.2 viewport, used sparingly | **Reveal** — section gets the user's attention as it enters. Rare. |

Any motion not in this table is cut before implementation.

## Forbidden patterns (this project)

- **Scroll-jacking** of any kind. Native scroll, always.
- **Auto-rotating banner carousels.** Forbidden by concept (the current site's hero cliché).
- **Parallax on body images.** Reads as 2014.
- **Count-up animated numbers.** No "1,200+ products!" theater. The actual number doesn't matter; the fact does.
- **Bouncy spring physics.** Reads as toy-like; off-tone for editorial register.
- **Cursor-follower dots / custom cursor.** Service-business cliché; rejected by `SOURCE_OF_TRUTH.md`-aligned anti-pattern list.
- **Hero video.** No slow-motion-running-on-rocky-terrain footage.
- **Carousel-as-hero.** The current site does this. We cut it entirely.

## Reduced-motion policy

Global rule under `prefers-reduced-motion: reduce`:

- Hero slow-pan disabled — photograph is static.
- Product card hover-reveal disabled — card shows primary flat only (secondary shot accessible via tap → PDP).
- Branch-pin expand: opacity instant, no translate-y.
- Sheet / drawer opens: visible instantly (no slide).
- Page-section reveals: opacity instant to 1, no scroll-into-view delay.
- All durations effectively → 0.

Validation: toggle the OS reduced-motion setting and re-shoot the affected screenshots in `screenshot-matrix.md`. A reduced-motion screenshot of the hero, of a product card, and of the cart sheet open must all appear in the matrix before ship.

## Implementation tools

- **CSS transitions** for: hover-reveal cross-fade, focus rings, sheet/drawer opens, button-press micro-states, branch-pin expand.
- **Framer Motion** for: cart sheet / mobile menu sheet animation only (Radix primitives wrapped). ~35KB gz acceptable for the polish.
- **GSAP** for: hero slow-pan scroll-tied animation. **If GSAP commercial license is not approved** (per `tech-stack-decision.md` risk #8), fallback to vanilla JS with IntersectionObserver + `requestAnimationFrame` driving a CSS variable that the hero's `transform: translateX(var(--hero-pan))` reads. Equivalent result, ~5KB instead of 60KB.
- **Theatre.js:** Not used. No scene animation needed.

## QA checks

- [ ] All motion respects `prefers-reduced-motion: reduce`.
- [ ] No motion delays LCP / first interaction (hero slow-pan starts after first paint, not during).
- [ ] Mobile motion is its own design where it differs from desktop (verified: card hover doesn't exist on touch; tap goes to PDP).
- [ ] Cleanup on unmount verified (any GSAP timelines / ScrollTriggers / Framer animations).
- [ ] Layout-affecting properties NOT animated (only `transform`, `opacity`, and CSS-variable-driven properties).
- [ ] Hero slow-pan runs at 60fps desktop, 30fps+ mid-tier mobile.
- [ ] Product card hover-reveal does not trigger layout shift (CLS impact = 0).
