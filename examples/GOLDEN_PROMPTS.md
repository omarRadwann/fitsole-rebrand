# Golden Prompts

Patterns that have produced strong runs of this pack. Copy, replace the bracketed bits, paste into Claude Code at the pack root.

## The bare minimum

```
/award-start luxury dental clinic in Madrid
```

That's it. The orchestrator runs everything else from inference + research.

## With brand assets supplied

```
/award-start [business type] — [city / region]

Brand assets in repo root:
  brand/logo.svg
  brand/colors.txt (hex / OKLCH list)
  brand/fonts.txt (named + licensed)
  brand/photos/  (folder of real, owned imagery)

Conversion goal: [book appointment / call / WhatsApp / buy]
Hard deadline: [date or "soft"]
```

## With explicit constraints

```
/award-start [business] in [geo]

Constraints:
- Must integrate with [existing CMS / booking system]
- Cannot use [3D / video / animation] for [reason]
- Must preserve current URLs: [list of URLs]
- Available budget for paid tools: [yes any / yes ≤ $200 / no]
- Approved generators: [Midjourney Pro / Flux / none]

Tone: [editorial / industrial / warm / clinical / playful]
Anti-references (sites we do NOT want to look like): [URLs]
```

## Rebrand mode

```
/award-start rebrand of [existing site URL]

Mode: [visual refresh / reposition / full rebrand / idea-pivot]

Preserve:
- Domain
- [Top URLs that rank for SEO — list them]
- [Specific copy that's known to convert]

Drop:
- [Specific things to drop]

Rollback trigger: [e.g. if conversion drops >25% sustained over 5 days]
```

## Webapp / tool mode

```
/award-start [tool name] — a [one-line of what it does]

Project shape: webapp / hybrid (marketing + product)

Primary tasks (top 3):
1. [Task A] — target [N] seconds, success = [definition]
2. [Task B]
3. [Task C]

First useful state: [seeded sample data / smart empty / guided onboarding]
```

## Award-target mode

```
/award-start [business]

Target award candidacy:
- [SOTD / SOTY / Honorable Mention / Developer Award / Mobile Excellence]

I accept:
- Tighter performance budget (LCP < 2.0s, INP < 150ms, JS < 200KB)
- Required: 1 brave decision the average client would reject
- Required: mobile is its own design
- Required: 1 concept-tied signature interaction
- Extra loops (up to 5 build → critique → repair cycles)
```

## Specialty pulls

### Just run the design red-team on what already exists

```
/design-red-team

The site is already at workspace/[slug]/. Score it against the 10-point rubric. Don't change anything; just produce the fix list.
```

### Just mine references for a moodboard

```
/reference-mining

Category: [luxury watches / B2B fintech / mid-tier SaaS / architecture studio / etc.]
Geography: [global / US / EU / specific country]
What we want to avoid: [list anti-reference URLs if known]
```

### Just decide the 3D route

```
/threejs-r3f-production

Concept (locked): [the signature idea from creative-brief.md]
The signature interaction this needs to enable: [description]
Mobile policy preference: [same / downgraded / poster-only]
Performance target: [standard / award-grade tighter]
```

### Just run the ship gate

```
/ship-gate

The work in workspace/[slug]/ is complete. Run the truth-labeled gate.
```

## What NOT to write

These prompts will produce worse output, not better:

- "Make it look like [specific awards site URL]" — the pack will refuse to clone; this is also a copyright risk.
- "Don't ask any questions, just build it" — the pack already won't ask except for the 6 hard categories. Saying this just removes useful escalations.
- "Be creative" — the pack already insists on a brave decision. Saying this dilutes the directive.
- "Move fast" — the rubric and ship gate exist for a reason. The pack will not skip them.
- "Just give me three options" — the creative-director's job is to pick. If you want to see the three, you'll see them in `docs/concept-scorecard.md` but the orchestrator will not present them as a user-choice menu.
