# START_HERE.md

Read this first if you (Claude Code or human user) have just opened this repo.

## What this is

A self-contained operating system that turns Claude Code into a senior creative-technical studio for building Awwwards-level websites. Strategy → concept → art direction → copy → assets → tech → implementation → motion → 3D (when justified) → QA → ship, with truth-labeled handoff.

## What it is NOT

It is not a no-touch button. It is a discipline scaffold. It produces award-capable sites because it forces the operator (Claude or human) through the senior-studio steps that AI normally skips.

## 60-second tour

```
/CLAUDE.md                ← project instructions Claude reads first
/SOURCE_OF_TRUTH.md       ← the law
/AGENTS.md                ← the studio roster
/CLAUDE_FLOWCHART.md      ← the no-skip flow
/VALIDATION_PROTOCOL.md   ← what passes, what blocks
/Makefile                 ← validate, scaffold, ship-check
/.claude/skills/          ← award-website-os (main brain) + award-start (entry)
/.claude/agents/          ← 22 specialists
/.claude/hooks/           ← protection, audit log, session greeting
/docs/                    ← per-project evidence (created by `make evidence`)
/docs/_templates/         ← the doc templates `make evidence` copies from
/ops/                     ← create_project.py, validate_pack.py, project_ship_check.py
/starter-next-awwwards/   ← Next.js + R3F + GSAP + Tailwind starter
/workspace/               ← actual built sites live here, one folder per project
```

## Five-step quickstart for a human

1. `make validate-everything` → confirms the pack is healthy.
2. Open Claude Code in this directory.
3. Type: `/award-start luxury dental clinic` (or your business type / brief).
4. Let Claude run the flow. Approve only the things `CLAUDE.md` says you should be asked about.
5. At the end, read `docs/ship-decision.md` and act on its truth labels.

## Five-step quickstart for Claude Code

1. Read `SOURCE_OF_TRUTH.md`, `CLAUDE.md`, `AGENTS.md`, `CLAUDE_FLOWCHART.md`, `VALIDATION_PROTOCOL.md`, and `.claude/skills/award-website-os/SKILL.md`.
2. Run `make validate-everything`. If it fails, fix the pack first.
3. Run `make evidence`. Fill `docs/one-input-brief.md` and `docs/assumptions.md`.
4. Spawn the agent court (`AGENTS.md` § "Full-project order"). Consolidate to `docs/agent-court-report.md`.
5. Pass implementation gates → scaffold → build → screenshot → red-team → repair → QA → ship-decision → `make project-ship-check`.

## When you only have a business type

This is the normal case. Do not interrogate the user. Make assumptions, document them in `docs/assumptions.md`, and proceed. Ask the user **only** for: paid-tool / credential approval, exact brand assets, legally-sensitive proof, destructive actions, deployment approval.

## Where the actual taste lives

The 60 reference files under `.claude/skills/award-website-os/references/` are the design brain. Some you read on every project:

- `13-awwwards-quality-taste-rubric.md` — the 10-point taste test
- `14-ai-anti-genericity-protocol.md` — the anti-default protocol
- `44-super-strong-design-playbook.md` — the senior-design discipline
- `50-no-skip-claude-flowchart.md` — the operational flow
- `52-agent-orchestration-protocol.md` — how agents coordinate

Others you load only when relevant (shaders, GSAP, Blender, Spline, etc.).

## When to ship

When `docs/ship-decision.md` has truth labels for every gate, `make project-ship-check` exits 0, and the taste rubric average is ≥ 8.5 with no category below 7.5.

If you cannot reach those, do not say the project is done. Say what is `Blocked`, what is `Not run`, what is `Manual review`, and what is `Verified`. Be precise. The user can act on precision; they cannot act on "looks good".

## The standard

> Do not produce the most likely website. Produce the strongest website that this specific business deserves.
