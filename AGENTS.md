# Moon-Level Website Agent OS — Real Masters Loader

This repo uses the Real Masters Website Agent OS.

When the user asks for a website, landing page, Awwwards-level site, premium site, 3D/WebGL site, cinematic site, or business site, load:

`.agents/skills/award-website-os/SKILL.md`

Then use the specialist agents in:
- `.codex/agents/` for Codex-style environments
- `.claude/agents/` for Claude Code-style environments

## Important

The user may provide only a business type. Do not get stuck asking for details. Research, infer, build, inspect, and QA.

## Prime Directive

Build the clearest site that can carry the strongest idea with the least unnecessary weight.

## Must Use Specialist Pressure

A moon-level site must be reviewed by:
- strategy
- creative direction
- art direction
- copy
- assets
- engineering
- motion/3D when justified
- accessibility
- performance
- screenshots
- release QA

## Paid / Legal Rule

Do not spend money, use subscriptions, publish, deploy to real accounts, or use external copyrighted assets without explicit authorization.


## Final Smart Pass

Before calling work complete, apply:
- anti-genericity protocol
- no-template checklist
- visual composition review
- smart content smell check
- asset ledger check
- screenshot critique
- accessibility/performance/release QA

Use `.agents/skills/award-website-os/scripts/final-smart-check.sh` when possible.

Senior rule: do not produce the most likely website; produce the strongest website this specific business deserves.


## Zero-Gap V4 Rules

This repository uses the V4 Zero-Gap Website Agent OS.

Before any serious website build:
1. Invoke `$award-website-os` explicitly.
2. Create evidence docs with `create-evidence-files.sh`.
3. Spawn or explicitly use the required specialist agents.
4. Use Codex `.toml` agents for Codex; use Claude Markdown/YAML agents for Claude Code.
5. Treat `references/` as the official skill reference folder; `knowledge/` is kept as a compatibility mirror.
6. Treat `assets/templates/` as the official template folder; `templates/` is kept as a compatibility mirror.
7. Run `zero-gap-preflight.sh` before implementation and `final-smart-check.sh` before final delivery.
8. Never claim a check passed unless it actually ran or was manually verified.
9. For 3D/WebGL, require a written justification, performance budget, mobile fallback, and reduced-motion fallback.
10. For generated/sourced assets, require `docs/asset-ledger.csv`.

The goal is not literal perfection; the goal is to close every known operational gap and surface any remaining unknowns honestly.


## V5 Operational Rules

Before a serious build:
1. Read `START_HERE.md`.
2. Run `python ops/validate_pack.py`.
3. Run `bash .agents/skills/award-website-os/scripts/create-evidence-files.sh`.
4. Use `examples/GOLDEN_PROMPTS.md` for the prompt pattern.
5. Use `tooling/SECURITY_SECRETS_POLICY.md` and `tooling/PAID_TOOLS_APPROVAL_TEMPLATE.md` for risky actions.
6. Maintain `docs/ship-decision.md` with evidence labels.
7. Do not use paid tools, credentials, deployment, or real external accounts without explicit approval.

## V6 Patient Audit Rules

- Codex uses `.agents/skills/award-website-os/` and `.codex/agents/*.toml`.
- Claude Code uses `.claude/skills/award-website-os/` and `.claude/agents/*.md`.
- Do not assume `.agents/skills` alone is enough for Claude Code.
- Claude subagents should preload the `award-website-os` skill.
- Use PowerShell scripts on Windows when Bash is unavailable.
- Treat `.codex/rules/safety.rules` as an experimental safety template; review before enabling.



## V7 Line-by-Line Audit Note

This package includes `MASTER_DOCUMENT.md`, `AUDIT_LINE_BY_LINE_REPORT.md`, and `AUDIT_LINE_BY_LINE_MAP.csv`. Use this package as the single source of truth. Run `python ops/validate_pack.py` after copying it into a repo.
