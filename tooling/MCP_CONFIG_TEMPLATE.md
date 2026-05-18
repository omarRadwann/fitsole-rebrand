# MCP Config Template

Exact MCP syntax depends on your environment. Use this as a planning template.

## Recommended MCP Servers

```txt
filesystem
browser / playwright
figma
github
memory/documentation
image-generation
blender/shell
```

## Tool Permission Policy

```txt
filesystem: allow project workspace only
browser: allow public research and localhost screenshots
shell: allow npm/git/build/test commands; block destructive commands
image-generation: require asset ledger entry
blender: allow local project assets only
deployment: require explicit approval
payments/subscriptions: require explicit approval
```

## Important

Never store secrets in:
- AGENTS.md
- CLAUDE.md
- agent files
- skill references
- git-tracked docs
- screenshots
