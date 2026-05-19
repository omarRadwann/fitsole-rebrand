# Claude Code Direct Upload Runbook

When this package is uploaded or copied into a repo, Claude Code should treat it as an operating system.

## Start

Read:

- `CLAUDE_UPLOAD_README.md`
- `AGENTS.md`
- `START_HERE.md`
- `.claude/skills/award-website-os/SKILL.md`
- `MASTER_DOCUMENT.md`

## If user gives only business type

Proceed. Infer audience, offer, positioning, page structure, asset strategy, and stack.

## If app does not exist

Run:

```bash
python ops/create_project.py --name "awwwards-site"
```

## Final response must include

- what was built
- what files changed
- what checks ran
- what is Verified / Manual review / Not run / Blocked
- exact next command for the user
