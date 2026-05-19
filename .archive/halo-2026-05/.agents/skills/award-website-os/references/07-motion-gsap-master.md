# 07 — Motion / GSAP Master

## Mission

Design motion that feels premium and meaningful.

## Motion Roles

Motion must do at least one:
- confirm
- guide
- reward
- reveal hierarchy
- dramatize story
- connect cause/effect

Cut motion that only decorates.

## Motion Personalities

### Luxury
slow, heavy, quiet, low bounce, long ease-out

### Technical
precise, mechanical, small distances, crisp timing

### Playful
elastic, responsive, higher bounce, tactile

### Cinematic
longer sequencing, scale, parallax, masked reveals

### Editorial
type reveals, image wipes, restrained transitions

## Tools

CSS:
- simple hover/focus
- opacity/transform reveals
- reduced-motion baseline

Motion:
- component-level React animation
- layout transitions
- simple interactive states

GSAP:
- timelines
- scroll choreography
- pinned scenes
- SVG
- text splitting
- WebGL sync
- FLIP-like transitions

## GSAP Rules

- Register plugins once.
- Clean up timelines/ScrollTriggers on unmount.
- Respect reduced motion.
- Do not scroll-jack.
- Refresh after images/fonts load.
- Use one easing vocabulary.
- Avoid animating layout properties.
- Use transforms/opacity.

## Motion Tokens

```ts
export const easings = {
  smooth: [0.22, 1, 0.36, 1],
  dramatic: [0.76, 0, 0.24, 1],
  snap: [0.2, 0.8, 0.2, 1],
}

export const durations = {
  micro: 0.15,
  fast: 0.25,
  base: 0.4,
  slow: 0.7,
  hero: 1.2,
}
```

## Reduced Motion

Reduced motion does not mean ugly. Replace:
- parallax with static hierarchy
- long reveal with instant opacity
- scrubbed camera with poster image
- smooth scroll with native scroll
- hover motion with focus styling

## Signature Motion Examples

- blueprint line draws as section explains construction process
- product object rotates only when feature changes
- grid resolves from chaos to ordered system
- typography reveals by meaning units, not random letters
