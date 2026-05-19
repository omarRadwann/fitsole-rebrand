# Runtime Facts Snapshot

This file records the runtime assumptions used by the pack. Claude Code must verify current docs when internet access is available because Claude Code, Next.js, Three.js, browser tooling, and package versions can change.

## Claude Code Skills

- Repository skills are stored under `.claude/skills/**/SKILL.md`.
- A skill directory contains `SKILL.md` plus optional `scripts/`, `references/`, `assets/`, and `agents/openai.yaml`.
- `SKILL.md` must include `name` and `description` frontmatter.

## Claude Code Agents

- Project custom agents are standalone YAML frontmatter Markdown files in `.claude/agents/`.
- Each runtime YAML frontmatter Markdown agent must include `name` and `description`; the Markdown body is the system prompt.
- Subagents should be requested explicitly.

## Claude Code Hooks

- Project hooks are configured in `.claude/settings.json`; executable hook scripts live under `.claude/hooks/`.
- Project hooks may require trust review before they run.
- Scripts must be runnable manually because hooks are not guaranteed to fire in every environment.

## Starter Dependencies

The starter uses exact package versions, not `latest`, `^`, or `~`. Claude Code must check for newer breaking changes before upgrading.
