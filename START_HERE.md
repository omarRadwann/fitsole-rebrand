# START HERE — V5 Operational Edition

This is the practical entry point.

## What this package is

A website-agent operating system that lets Codex/Claude take a business type and run a senior creative/technical workflow:
research, concept, art direction, copy, assets, implementation, screenshots, QA, and ship decision.

## What V5 adds

V5 adds the missing operational layer:
- one-command install helpers
- pack validator
- integrity manifest
- project evidence scaffolding
- MCP/tooling setup templates
- security and secrets policy
- operator runbook
- golden prompts
- sample golden run
- acceptance criteria
- recovery playbooks

## Fastest Use

1. Copy this package into a website repo.
2. Run:

```bash
bash ops/install.sh
python ops/validate_pack.py
bash .agents/skills/award-website-os/scripts/create-evidence-files.sh
```

3. Ask Codex:

```txt
Use the $award-website-os skill.
Business type: luxury dental clinic in Cairo.
Use the V5 operational workflow and Real Masters agents.
Create evidence files, research, concept, art-direct, copywrite, source/generate legal assets if needed, build, inspect screenshots, run final-smart-check.sh, and return a ship decision with Verified / Manual review / Not run / Blocked labels.
```

## Reality Rule

This package cannot magically connect tools. You must provide/enable:
- web search/browser
- shell/filesystem
- image generation if you want generated visuals
- Blender if you want 3D
- Playwright/Lighthouse/axe if you want automated QA
- deployment credentials if you want deployment
- paid API/stock accounts if you want paid assets

No spending, publishing, or credential use without explicit approval.

## V6 Patient Audit Corrections

This package now includes both skill locations:

- Codex: `.agents/skills/award-website-os/`
- Claude Code: `.claude/skills/award-website-os/`

Claude subagents now preload the `award-website-os` skill, and hook commands have safer root fallbacks. Windows PowerShell companion scripts are included for evidence creation and final checks.



## V7 Line-by-Line Audit Note

This package includes `MASTER_DOCUMENT.md`, `AUDIT_LINE_BY_LINE_REPORT.md`, and `AUDIT_LINE_BY_LINE_MAP.csv`. Use this package as the single source of truth. Run `python ops/validate_pack.py` after copying it into a repo.
