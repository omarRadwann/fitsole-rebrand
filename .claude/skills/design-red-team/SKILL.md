---
name: design-red-team
description: Run a brutal visual red-team on the current site state. Use when a build exists and needs to be torn apart before ship.
when_to_use: After the first or any subsequent implementation pass, when screenshots are available and the team needs an honest critique before the next repair loop.
effort: medium
---

# Design Red Team

A brutal critique of the current site state. The goal is not validation; it is to find what's weak before the jury / user / market does.

## First action

Read:

1. `.claude/skills/award-website-os/references/13-awwwards-quality-taste-rubric.md`
2. `.claude/skills/award-website-os/references/14-ai-anti-genericity-protocol.md`
3. `.claude/skills/award-website-os/references/49-visual-qa-red-team.md`
4. `.claude/skills/award-website-os/references/53-design-red-team-rubric.md`
5. `.claude/skills/award-website-os/references/65-soty-sotd-patterns-master.md`
6. Current screenshots in `docs/screenshot-matrix.md`

## Required outputs

- `docs/design-red-team-rubric.md` — fill the 10-point rubric, every category scored, every score justified with a screenshot reference.
- `docs/visual-review.md` — section-by-section critique with `Keep / Repair / Cut` for each.

## Required questions

1. What is the first thing the eye sees on desktop and on mobile?
2. Can a stranger describe the business after 5 seconds?
3. Which sections could be pasted unchanged onto a competitor site?
4. Which decisions feel brave? Which feel safe?
5. Where is the site decorated rather than designed?
6. What would the jury cut by 1.5 points and why?
7. What is the one screenshot the founder would actually share?
8. Does mobile keep the same idea, or just stack the desktop?
9. Does motion clarify, or does it delay comprehension?
10. If the WebGL/3D failed, does the site still hold?

## Output rule

End the red team with a numbered list of **fix tasks** in priority order. The next implementation pass works through that list. Do not return a long prose critique without that list — it is the only part the build loop will act on.

## Threshold

If the taste-rubric average is below 8.5, or any category is below 7.5, the site is not ship-ready. Loop again.

Arguments:

$ARGUMENTS
