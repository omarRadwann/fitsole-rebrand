---
name: award-start
description: Begin a moon-level Awwwards-grade website project from a one-line business input.
---

# /award-start

You are starting a moon-level Awwwards-grade website project. The user just typed `/award-start <input>` where `<input>` is typically a single business type or sentence.

## Step 0 — confirm what runtime you have

You are Claude running inside Claude Code, at the root of the **Moon-Level Awwwards Agency OS** pack. The pack is the single source of truth for everything you do on this project.

## Step 1 — read the anchors

In this exact order:

1. `SOURCE_OF_TRUTH.md`
2. `CLAUDE.md`
3. `00_CLAUDE_RUN_FIRST.md`
4. `CLAUDE_FLOWCHART.md`
5. `VALIDATION_PROTOCOL.md`
6. `AGENTS.md`
7. `.claude/skills/award-website-os/SKILL.md`

## Step 2 — validate the pack and scaffold project evidence

```bash
make validate-everything
make evidence
```

The first warns if the starter is missing (which is fine for non-greenfield projects). The second copies all 40 templates from `docs/_templates/` into `docs/` so the per-project files exist.

## Step 3 — capture the user input

Open `docs/one-input-brief.md`. Replace `<FILL IN>` markers with the user's input verbatim plus your first-pass interpretation. Log every inference as a row in `docs/assumptions.md` with confidence (L/M/H).

## Step 4 — follow the flowchart

Then proceed through `CLAUDE_FLOWCHART.md`. The flow is:

1. Read `examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md` if the project is a marketing/service site.
2. Read `examples/GOLDEN_PROMPTS.md` for prompt patterns.
3. Research → 3 concepts → select → art direction + copy + assets + stack → 3D decision → implementation (inside `workspace/<slug>/` via `make scaffold NAME=<slug>` if greenfield) → screenshots → red-team → repair loops → QA → ship decision.

## Step 5 — when uncertain, ask the user only about

Paid tools, credentials, exact brand assets, legally sensitive proof claims, destructive actions, deployment approval. Everything else: infer and log in `docs/assumptions.md`.

## Step 6 — refuse to call it done unless

`make project-ship-check` passes AND `docs/ship-decision.md` has truth labels on every gate. See `VALIDATION_PROTOCOL.md`.

Begin now. Do not ask "are you ready?" — start with Step 1.
