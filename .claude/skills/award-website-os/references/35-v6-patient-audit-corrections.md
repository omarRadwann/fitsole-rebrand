# 35 — V6 Patient Audit Corrections

## Main Correction

Codex and Claude Code do not use exactly the same extension folders.

- Codex repo skill: `.agents/skills/award-website-os/`
- Claude Code repo skill: `.claude/skills/award-website-os/`

Keep both when you want compatibility.

## Claude Subagent Corrections

Claude Code subagents use Markdown with YAML frontmatter. Tool allowlists should use Claude tool names such as `Read`, `Grep`, `Glob`, `Bash`, `Edit`, `Write` if you restrict tools. If unsure, omit `tools` so the parent session controls tools.

This pack removes arbitrary tool names and preloads the domain skill:

```yaml
skills:
  - award-website-os
memory: project
```

## Hook Correction

Do not assume the agent starts in the repository root. Hook commands should resolve root with a fallback:

```bash
ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
```

## Windows Correction

Bash scripts are primary, but PowerShell companions are included for Windows users.
