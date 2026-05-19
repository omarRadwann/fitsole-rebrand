# Claude Code Runtime Guide

## Skills

Project skills live in `.claude/skills/<skill-name>/SKILL.md`. A skill can be invoked directly as `/skill-name` and can also be loaded automatically when relevant. Keep `SKILL.md` concise and put long guidance in supporting files.

## Subagents

Project subagents live in `.claude/agents/*.md`. Each subagent uses YAML frontmatter with at least `name` and `description`, followed by the system prompt. Use subagents to isolate research, critique, visual QA, and specialist implementation planning.

## Hooks

Project hooks live inside `.claude/settings.json`. Hooks can run commands before/after tools, inject context, or block unsafe actions. Hook scripts in this pack live in `.claude/hooks/`.

## Commands

Custom command-style workflows should be implemented as skills. Invoke them with `/award-start`, `/design-red-team`, `/ship-gate`, `/threejs-r3f-production`, or `/reference-mining`.

## Verification commands

Inside Claude Code, run `/skills`, `/agents`, `/hooks`, `/permissions`, `/doctor`, `/diff`, and `/context` as needed.
