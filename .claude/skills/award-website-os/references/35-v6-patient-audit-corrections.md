# 35 — Claude Code Runtime Corrections

This file replaces older mixed-runtime notes.

## Current Active Runtime

The active package is Claude Code-only.

## Correct Locations

- Skill: `.claude/skills/award-website-os/SKILL.md`
- Agents: `.claude/agents/*.YAML frontmatter Markdown`
- Hooks: `.claude/settings.json` with scripts under `.claude/hooks/`
- Config: `.claude/settings.json`
- Evidence: `docs/`

## Correction Rule

If any old instruction references a different runtime folder, ignore it and update the active source to the Claude Code locations above.
