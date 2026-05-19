# Moon-Level Claude Code Awwwards Agency OS

A Claude Code-native operating system that turns a one-line business input ("luxury dental clinic", "B2B fintech SaaS", "architecture studio") into a moonshot-grade website by forcing the senior-studio workflow that AI normally skips.

**Single source of truth:** [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md). Authority order, the five signature requirements, ship gates, truth-label vocabulary, and what's forbidden regardless of who asks. Every other file in this pack is subordinate to it.

## What's in this pack

- **8 root anchors** — `SOURCE_OF_TRUTH.md`, `CLAUDE.md`, `00_CLAUDE_RUN_FIRST.md`, `AGENTS.md`, `CLAUDE_FLOWCHART.md`, `VALIDATION_PROTOCOL.md`, `START_HERE.md`, `README.md`.
- **1 Makefile** with 6 working targets: `validate-everything`, `evidence`, `clean-evidence`, `scaffold NAME=<slug>`, `project-ship-check`, and `help`.
- **6 skills** in `.claude/skills/` — `award-website-os` (main) + `award-start`, `design-red-team`, `reference-mining`, `threejs-r3f-production`, `ship-gate` (workflows).
- **5 slash commands** in `.claude/commands/` — `/award-start`, `/design-red-team`, `/reference-mining`, `/threejs-r3f-production`, `/ship-gate`. Real Claude Code commands, not pretend.
- **22 specialist subagents** in `.claude/agents/` — each with a distinct, role-specific system prompt (44–126 lines each, not boilerplate clones).
- **3 wired hooks** in `.claude/hooks/` — `protect-files.py` (PreToolUse), `log-edits.py` (PostToolUse), `inject-context.py` (SessionStart). All referenced in `.claude/settings.json`.
- **70 reference files** in `.claude/skills/award-website-os/references/` covering taste, anti-genericity, motion, 3D, performance, a11y, business-type playbooks, asset legality, 2026 patterns, jury scoring, rebrand operating system.
- **40 evidence-doc templates** in `docs/_templates/` — every gate from intake → concept → art/copy/3D → QA → ship-decision → awards submission, each with `<FILL IN>` markers.
- **4 ops scripts** in `ops/` — `validate_pack.py`, `scaffold_evidence.py`, `project_ship_check.py`, `create_project.py`.
- **`starter-next-awwwards/`** — production-grade Next.js 15 + React 18 + TypeScript strict + Tailwind + R3F + GSAP + Playwright starter. All 8 npm scripts work: `dev`, `build`, `typecheck`, `lint`, `test`, `screenshots`, `analyze:assets`, `design:readiness`. Verified: typecheck/lint/build/test all pass; analyze:assets reports gzipped sizes against budget.
- **`examples/`** — `GOLDEN_PROMPTS.md` (prompt patterns by business type) + `SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md` (full worked example from one-line input to ship decision).
- **`tooling/MCP_AND_TOOLING_SETUP.md`** — recommended MCP servers, paid-tool categories, credentials hygiene.
- **`workspace/`** — empty placeholder. Per-project sites land here via `make scaffold NAME=<slug>`.

## Install

```bash
unzip MOON_LEVEL_CLAUDE_CODE_AWWWARDS_OS_V6.zip
cd MOON_LEVEL_CLAUDE_CODE_AWWWARDS_OS_V6
make validate-everything
```

Expected output: `PASS — pack is healthy.` (no warnings.)

## Use

In Claude Code, at the pack root:

```
/award-start luxury dental clinic in Madrid
```

Claude will:

1. Read the anchor files (`SOURCE_OF_TRUTH.md`, `CLAUDE.md`, `00_CLAUDE_RUN_FIRST.md`, `CLAUDE_FLOWCHART.md`, `VALIDATION_PROTOCOL.md`, `AGENTS.md`, the skill).
2. Run `make validate-everything` then `make evidence` (copies the 40 templates into `docs/`).
3. Open `examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md` for the worked-example pattern.
4. Fill `docs/one-input-brief.md` and `docs/assumptions.md` from inference.
5. Spawn the agent court: `market-researcher` + `reference-mining` (parallel) → `creative-director` (gated) → `art-director` + `ux-copy-strategist` + `asset-pipeline-master` + `master-technical-director` (parallel) → specialists as needed → `frontend-engineer` → `screenshot-critic` (loop) → `accessibility-ux-master` + `gpu-performance-master` → `release-qa-master`.
6. Scaffold (`make scaffold NAME=<slug>`) and build inside `workspace/<slug>/`.
7. Capture screenshots, red-team, repair, run QA — typically 2–5 build/critique loops.
8. Write `docs/ship-decision.md` with truth labels (`Verified` / `Manual review` / `Not run` / `Blocked`).
9. Run `make project-ship-check`.

## Hard guarantees

- **No fake proof** ever — no invented metrics, testimonials, logos, awards, before/after.
- **No template feel** — every site must pass the "would still make sense after swapping the logo" test (anti-genericity protocol).
- **No unjustified 3D** — Three.js / Spline / Blender must earn its place per the decision matrix and have mobile + reduced-motion fallback.
- **No unverified claims** — every ship-decision item is truth-labeled with evidence path.
- **No deploy without approval** — pack produces a launchable build and a launch checklist; user owns deploy.

## What this pack is for

- **Awwwards-grade marketing sites** (the most-tested path).
- **Local service businesses** (clinics, studios, restaurants, agencies) needing a one-shot premium presence.
- **B2B SaaS marketing sites** that want to look like a category leader, not a template.
- **Webapp / tool / dashboard projects** — see `docs/_templates/webapp-experience-playbook.md` and `examples/GOLDEN_PROMPTS.md § Webapp mode`.
- **Rebrands** — see `docs/_templates/rebrand-or-idea-master-protocol.md` and `examples/GOLDEN_PROMPTS.md § Rebrand mode`.

## What this pack is NOT for

- Building a CMS-driven content site with hundreds of pages (use a CMS).
- Sites where SEO long-tail content is the primary value (the pack optimizes for craft over volume).
- Building an internal admin UI (the rubric over-optimizes for taste in that context).

## Where things are

See [`START_HERE.md`](START_HERE.md) for the file tree and quickstart, and [`CLAUDE_FLOWCHART.md`](CLAUDE_FLOWCHART.md) for the full flow.

## The standard

> Do not produce the most likely website. Produce the strongest website that this specific business deserves.

## License & rights

This pack is the operating-system layer (instructions, prompts, scripts). Any site built with it inherits the rights of whatever assets you (the operator) provide or generate. The pack will refuse to ship if asset rights are unclear; see `.claude/skills/award-website-os/references/32-real-world-asset-legal-governance.md`.

## V6 changelog

- Fixed the `SKILL.md` first-action circular dependency (read root → run make evidence → read project docs).
- Replaced the lying `.claude/commands/README.md` with 5 real slash command files.
- Built and verified the `starter-next-awwwards/` project — all 8 npm scripts pass (typecheck, lint, build, test, screenshots, analyze:assets, design:readiness).
- De-boilerplated all 22 specialist agents with distinct, role-specific system prompts.
- Added `examples/` directory with prompt patterns and a full worked run.
- Added `tooling/MCP_AND_TOOLING_SETUP.md`.
- Added `workspace/` placeholder.
- Extended `ops/validate_pack.py` to check the new pieces.
- Fixed `analyze:assets` to measure gzipped sizes (matching Next.js' First Load JS display).
- Fixed the smoke-test runner to use a proper glob.
