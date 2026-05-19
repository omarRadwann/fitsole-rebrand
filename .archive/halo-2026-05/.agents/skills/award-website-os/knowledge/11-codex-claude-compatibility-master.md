# 11 — Codex / Claude Compatibility Master

## Goal

The OS should work with both Codex and Claude Code style workflows.

## Codex Setup

Use:
- `AGENTS.md` as the top-level project instruction loader.
- `.agents/skills/award-website-os/SKILL.md` as the reusable skill.
- `.codex/agents/*.md` for custom agent definitions when supported by the user's environment.
- `.codex/hooks.json` as example hook config if the environment supports hooks.

## Claude Code Setup

Use:
- `CLAUDE.md` as project instruction loader.
- `.claude/agents/*.md` for subagents.
- `.claude/settings.json` for hooks.
- `.claude/skills/` can be used depending on local Claude Code skill configuration.
- MCP tools should be configured outside this pack.

## Important Compatibility Note

Different agent environments evolve quickly. Treat this pack as:
- prompts
- agent definitions
- reference knowledge
- operating workflows
- QA policies

The exact loading path may need minor adjustment depending on the installed Codex/Claude version.

## Tool Reality

The agents can only use tools actually connected.

To achieve the full vision, connect:
- browser/screenshot/computer use
- web search
- image generation
- file system
- shell
- Blender
- Figma if needed
- Playwright
- Lighthouse
- axe
- deployment tool
- stock/image APIs if needed

## Paid Tool Rule

The agent may recommend paid tools but cannot spend money without approval.

Required paid-tool approval message:
- tool name
- why needed
- free alternative
- estimated cost
- exact action requested
