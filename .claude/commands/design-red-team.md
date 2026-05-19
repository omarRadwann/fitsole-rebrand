---
name: design-red-team
description: Score the current site against the 10-point taste rubric and produce a priority-ordered fix list.
---

# /design-red-team

Run the brutal taste audit. See `.claude/skills/design-red-team/SKILL.md` for the full protocol.

## Step 1 — confirm screenshots exist

Open `docs/screenshot-matrix.md`. Confirm desktop, mobile, and reduced-motion screenshots are captured for every section. If any are missing, capture them via `npm run screenshots` inside `workspace/<slug>/` before scoring.

## Step 2 — score the 10 categories

Open `docs/design-red-team-rubric.md`. Score each of:
1. Idea clarity 2. Typography 3. Composition 4. Color 5. Imagery 6. Signature moment 7. Motion 8. Mobile-as-its-own-design 9. Detail consistency 10. Restraint / bravery

Each score 1–10 with one decimal, citing a specific screenshot. "Looks good" is not a score.

## Step 3 — run the anti-genericity check

Six binary boxes in `docs/design-red-team-rubric.md`. Any unchecked box = generic. Loop.

## Step 4 — produce the fix list

Open `docs/visual-review.md`. List fixes in priority order. Items below the "line" are nice-to-have; items above are required before re-scoring.

## Step 5 — return verdict

- Average ≥ 8.5 AND no category < 7.5 AND all anti-genericity boxes checked → PASS.
- Otherwise → loop with the fix list. Maximum 5 loops before escalating to the user.

Do not edit code; only score and produce the fix list. The next pass acts on it.
