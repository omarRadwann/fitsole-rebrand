# 48 — Claude Code Agent Spawn Playbook

Custom agents exist under `.claude/agents/*.YAML frontmatter Markdown`, but serious tasks should explicitly request delegation.

Recommended prompt pattern:

```txt
Spawn market-researcher, creative-director, art-director, ux-copy-strategist, master-technical-director, frontend-engineer, screenshot-critic, and release-qa-master. Wait for all reports, cite which evidence files each agent updated, then consolidate into the build plan.
```

Use read-only agents for research and critique. Use workspace-write agents only for implementation tasks.
