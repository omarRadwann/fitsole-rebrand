# Install — V4 Zero-Gap Website Agent OS

## 1. Copy into your website repository

Copy all files/folders from this package into the root of the repo.

Required:
- `AGENTS.md`
- `.agents/skills/award-website-os/`
- `.codex/`
- `.claude/` if using Claude Code

## 2. Verify Codex setup

Run from repo root:

```bash
codex --ask-for-approval never "Summarize the current instructions and available skills."
```

Expected:
- Codex mentions `AGENTS.md`.
- Codex can see `$award-website-os`.
- Codex can see `.codex/agents/*.toml`.

## 3. Verify Claude Code setup

Run:

```bash
claude "Summarize project instructions and available subagents."
```

Expected:
- Claude sees `CLAUDE.md`.
- Claude sees `.claude/agents/*.md`.
- Claude sees hooks in `.claude/settings.json`.

## 4. Run local readiness

```bash
bash .agents/skills/award-website-os/scripts/tool-readiness-check.sh
bash .agents/skills/award-website-os/scripts/create-evidence-files.sh
```

## 5. Use prompt

```txt
Use the $award-website-os skill.
Business type: [your business type].
Use the Real Masters specialist agents.
Infer missing details, research, concept, art-direct, copywrite, source/generate legal assets, build, inspect screenshots, run QA, and return a truthful ship decision.
```

## V6 Patient Audit Corrections

This package now includes both skill locations:

- Codex: `.agents/skills/award-website-os/`
- Claude Code: `.claude/skills/award-website-os/`

Claude subagents now preload the `award-website-os` skill, and hook commands have safer root fallbacks. Windows PowerShell companion scripts are included for evidence creation and final checks.

## Optional companion installs (Anthropic-official, community-recommended)

Both are documented in `.agents/skills/award-website-os/knowledge/36-community-techniques-may-2026.md`.

### A. Frontend-design skill

Forces commit to an aesthetic direction before code (brutalist / editorial / retro-futuristic / luxurious / maximalist). Complements this OS's art-direction discipline.

```bash
npx skills add github.com/anthropics/skills --skill frontend-design
```

Verified `npx skills` CLI is functional and `github.com/anthropics/skills` resolves (2026-05-18). Install requires your authorization.

### B. claude-code-setup plugin

Scans the project and recommends hooks / skills / MCP servers / subagents / automations. Read-only (recommends, does not install — community note confirms). Useful as a sanity check after every major OS upgrade.

```
/plugin install claude-code-setup@claude-plugins-official
```

Run this as a slash command inside Claude Code.
