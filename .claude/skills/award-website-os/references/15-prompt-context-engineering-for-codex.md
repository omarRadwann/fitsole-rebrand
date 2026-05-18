# 15 — Prompt and Context Engineering for Codex

## Mission

Make Codex use the OS correctly without drowning it in context.

## Important Rule

Keep `AGENTS.md` short. Put long knowledge in skills/references.

Codex skills are designed as a directory with `SKILL.md` plus optional scripts, references, assets, and agents. Codex uses progressive disclosure: it sees skill metadata first and loads the full skill when needed.

## Best Prompt Pattern

```txt
Use the $award-website-os skill.

Business type: [business type]
Target quality: premium / Awwwards-aspiring / cinematic / conversion-first
Assume missing details and document assumptions.
Use subagents for research, creative direction, art direction, copy, assets, implementation, screenshot critique, performance, accessibility, and release QA.
Do not ask questions unless payment, credentials, legal claims, or publishing approval is required.
Build the full website and run the ship gates.
```

## One-Input Prompt

```txt
Use the Award Website OS Real Masters workflow.
Business type: [business type].
Build the full website from zero to ship-ready.
Infer the business, audience, positioning, copy, art direction, assets, stack, and QA plan.
Research competitors.
Generate/source/create assets if needed.
Use master specialist agents.
Inspect screenshots.
Run QA gates.
```

## Stronger Prompt With Constraints

```txt
Use the Award Website OS.
Business type: boutique architecture studio in Cairo.
Goal: attract premium residential clients.
Style: quiet luxury, editorial, material-focused.
Avoid: generic black/gold luxury, stock construction photos, template grids.
Use generated/abstract visuals only if legally safe and clearly not fake proof.
Build with Next.js + Tailwind unless research suggests another stack.
Run screenshot critique and QA before final handoff.
```

## How to Ask for Iteration

Bad:
"Make it better."

Good:
```txt
Do a ruthless anti-template pass.
Keep the concept, but improve typography, composition, mobile hero, CTA clarity, and one signature interaction.
Do not add new libraries unless necessary.
Show what you changed and why.
```

## How to Force Tool Use

```txt
Do not judge visually from code only.
Open the rendered site, capture screenshots at 1440, 1024, and 390 widths, then run the screenshot critic.
```

## How to Force Research

```txt
Before concepting, research 5 competitors and 5 visual references.
Extract what to borrow, avoid, and differentiate.
Do not copy layouts.
```

## How to Force Asset Legality

```txt
Create an asset ledger.
For every image/video/font/model, list source, license/permission status, usage, optimization, and fallback.
Do not use any asset with unclear commercial rights.
```

## How to Force Final QA

```txt
Before final response, run:
- typecheck
- lint
- build
- responsive screenshot review
- accessibility review
- performance review
If a command is unavailable, state why and provide the closest manual check.
```

## Context Hygiene

Do:
- keep project instructions short
- store long playbooks in skill references
- use subagents for isolated deep work
- ask Codex to summarize assumptions
- keep asset ledger
- keep QA report

Do not:
- paste 50k words into every prompt
- ask all agents to read everything
- mix art direction and implementation too early
- let final answer claim checks that were not run
