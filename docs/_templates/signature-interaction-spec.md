# Signature Interaction Spec

The one interaction this site does that no other site does the same way. Tied to the business concept, mobile-capable, reduced-motion-fallback-capable.

See `.claude/skills/award-website-os/references/59-signature-interaction-and-game-feel-master.md` and `.claude/skills/award-website-os/references/02-concept-art-direction-master.md` § Signature Interaction.

## The interaction

One sentence: <FILL IN — what it is, in user-facing language, not technical>

## Why this one (concept tie)

<FILL IN — link this interaction to the selected concept's metaphor>

## Where it lives on the site

- Page: <FILL IN>
- Section: <FILL IN>
- Trigger: <FILL IN — scroll progress / hover / click / load>

## Mechanics

- Input: <FILL IN — pointer / scroll / keyboard / touch>
- Output: <FILL IN — visual / motion / state / sound>
- State variables: <FILL IN>
- Boundaries: <FILL IN — start / end / reset conditions>

## Game feel

- Easing vocabulary: <FILL IN — refer to motion-language-system.md>
- Latency target: <FILL IN — ms from input to first response>
- Haptic / cursor / pointer feedback: <FILL IN>
- Failure / out-of-bounds behavior: <FILL IN>

## Mobile version (distinct, not a smaller copy)

<FILL IN — describe the mobile version. If the desktop interaction is pointer-based, what replaces it on touch?>

## Reduced-motion version

<FILL IN — describe what the user sees when prefers-reduced-motion is true. Must preserve the same hierarchy / meaning.>

## Performance budget

- JS heap added: <FILL IN — KB>
- GPU cost: <FILL IN — none / light / heavy>
- Mobile policy: <FILL IN — same / downgraded / replaced by poster>

## Discoverability

<FILL IN — how the user knows the interaction exists. The strongest interactions don't need a tooltip; they invite naturally.>

## Accessibility

- Keyboard alternative: <FILL IN>
- Screen reader behavior: <FILL IN — does the interaction need an aria-live region or announcement?>
- Focus behavior: <FILL IN>

## What this interaction is NOT

<FILL IN — the temptation to expand it into other parts of the site. The signature is the signature because it's used once.>

## Acceptance criteria

The interaction is implemented correctly when:

- [ ] It runs at 60fps on a mid-tier laptop, 30fps+ on a mid-tier phone.
- [ ] It has a reduced-motion equivalent with the same meaning.
- [ ] Mobile users get a designed version, not a degraded one.
- [ ] Keyboard users can reach the same outcome.
- [ ] It survives a hard refresh and a back-button navigation.
- [ ] It does not delay first paint or LCP.
- [ ] At least one screenshot of this interaction is in `screenshot-matrix.md`.
