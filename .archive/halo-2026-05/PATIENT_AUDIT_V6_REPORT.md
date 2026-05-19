# Patient Audit V6 Report

Generated: 2026-05-18T12:38:14.108829+00:00

## What I fixed after slowing down

1. **Claude Code skills mirror added**
   - Added `.claude/skills/award-website-os/` as a full mirror of the Codex skill.
   - Kept `.agents/skills/award-website-os/` for Codex.

2. **Claude agent frontmatter corrected**
   - Removed vague/non-Claude tool names like `filesystem` and `browser` from `.claude/agents/*.md`.
   - Added `skills: [award-website-os]` so subagents preload the domain skill.
   - Added `memory: project` for persistent specialist learning where Claude supports it.

3. **Hook paths hardened**
   - Replaced hook commands that assumed Git root with fallback commands using `git rev-parse ... || pwd`.
   - Claude hooks now use `${CLAUDE_PROJECT_DIR:-$(pwd)}` fallback.

4. **Windows operational scripts added**
   - `create-evidence-files.ps1`
   - `smart-smell-check.ps1`
   - `asset-ledger-check.ps1`
   - `final-smart-check.ps1`

5. **Security layer strengthened**
   - Added deny permissions to `.claude/settings.json` for env/secrets files and dangerous commands.
   - Added `.codex/rules/safety.rules` as an experimental safety rules template.

6. **Validator upgraded**
   - Now checks `.claude/skills/award-website-os/SKILL.md`.
   - Checks Codex TOML agents.
   - Checks Claude agent skill preload.
   - Checks PowerShell companion scripts.

## Remaining honest limits

- Project-local Codex hooks/rules only load when the project is trusted.
- Some Codex rules behavior is experimental and may change.
- MCP/image/Blender/deployment tools still need user setup and approval.
- No package can guarantee future compatibility after tool vendors change schemas.
