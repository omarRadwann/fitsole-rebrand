# Motion Language System

See `.claude/skills/award-website-os/references/07-motion-gsap-master.md` and `.claude/skills/award-website-os/references/62-motion-as-product-language.md`.

## Personality

<FILL IN — Luxury / Technical / Editorial / Cinematic / Playful / Industrial>

## Easing tokens

```ts
export const easings = {
  smooth: <FILL IN — cubic-bezier>,
  dramatic: <FILL IN — cubic-bezier>,
  snap: <FILL IN — cubic-bezier>,
} as const
```

Primary easing: <FILL IN>
Reason: <FILL IN — why this easing matches the brand>

## Duration tokens

```ts
export const durations = {
  micro: <FILL IN>,
  fast: <FILL IN>,
  base: <FILL IN>,
  slow: <FILL IN>,
  hero: <FILL IN>,
} as const
```

## Distance tokens

| Token | px or vh | Use |
|---|---|---|
| S |  |  |
| M |  |  |
| L |  |  |

## Reveal patterns

| Pattern | Where used | Reduced-motion equivalent |
|---|---|---|
| Opacity-only | <FILL IN> | (same; instant) |
| Mask reveal | <FILL IN> | Opacity instant |
| Clip-path | <FILL IN> | Opacity instant |
| Split-text | <FILL IN> | Full line, opacity 1 |
| 3D camera | <FILL IN> | Poster image at strongest frame |

## Stagger rules

- Default stagger: <FILL IN — ms>
- Maximum cascade length: <FILL IN — items>
- When to refuse stagger: <FILL IN — e.g. lists > 8, body copy, all body paragraphs>

## Motion-as-language audit

For each piece of motion on the site, name which of the four jobs it does:

| Component / section | Motion | Job (confirm / guide / reveal / dramatize) |
|---|---|---|
|  |  |  |

Any motion that does not pass this audit is cut.

## Forbidden patterns (this project)

- <FILL IN — e.g. "no parallax on body images", "no count-up numbers", "no scroll-jacking">

## Reduced-motion policy

Pattern: <FILL IN — global rule when prefers-reduced-motion is true>

For each animation, the reduced-motion equivalent is filled above. Validate by toggling the OS setting and re-shooting the affected screenshots.

## Implementation tools

- CSS transitions for: <FILL IN>
- Framer Motion for: <FILL IN>
- GSAP for: <FILL IN>
- Theatre.js for: <FILL IN — only if non-trivial scene>

## QA checks

- [ ] All motion respects reduced-motion media query.
- [ ] No motion delays LCP / first interaction.
- [ ] Mobile motion is its own design where it differs from desktop.
- [ ] Cleanup on unmount verified (timelines, ScrollTriggers).
- [ ] Layout-affecting properties are not animated (only transform / opacity).
