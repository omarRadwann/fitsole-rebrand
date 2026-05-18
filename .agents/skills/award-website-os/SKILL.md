---
name: award-website-os
description: Real Masters operating system for autonomous premium website creation from only a business type.
---

# Award Website OS — Real Masters Skill

Use this skill for any premium website, Awwwards-level site, creative website, 3D/WebGL site, cinematic site, brand site, marketing site, or business website.

## Load These Knowledge Files

Read/reference the knowledge files under:

`.agents/skills/award-website-os/knowledge/`

Important files:
- `00-master-operating-protocol.md`
- `01-business-research-master.md`
- `02-concept-art-direction-master.md`
- `03-copy-conversion-master.md`
- `04-image-generation-asset-sourcing-master.md`
- `05-blender-production-master.md`
- `06-three-r3f-webgl-shader-master.md`
- `07-motion-gsap-master.md`
- `08-performance-core-web-vitals-master.md`
- `09-accessibility-wcag-master.md`
- `10-qa-screenshot-release-master.md`
- `11-codex-claude-compatibility-master.md`

## Main Rule

The user may give only a business type. Proceed anyway.

Infer:
- audience
- positioning
- offer
- conversion
- content
- art direction
- assets
- stack
- QA plan

Ask only for:
- payment approval
- credentials
- exact brand assets
- legal-sensitive claims
- deployment approval

## Required Agent Sequence

1. `codex-orchestrator`
2. `market-researcher`
3. `creative-director`
4. `art-director`
5. `ux-copy-strategist`
6. `asset-pipeline-master`
7. `image-generation-director` if generated visuals are needed
8. `master-technical-director`
9. `blender-production-master` if 3D asset creation is justified
10. `threejs-r3f-master` if 3D web scene is justified
11. `shader-webgl-master` if shaders are justified
12. `gsap-animation-master` if complex motion is justified
13. `frontend-engineer`
14. `typography-layout-master`
15. `accessibility-ux-master`
16. `gpu-performance-master`
17. `screenshot-critic`
18. `release-qa-master`

## Output Standard

The final result must include:
- business assumptions
- research summary
- selected concept
- art direction
- copy strategy
- asset strategy
- implementation summary
- QA results
- screenshots reviewed if possible
- ship decision
- limitations

## No-Ship Rule

Do not call the project complete if:
- business is unclear
- design is generic
- mobile is weak
- performance is poor
- accessibility fails
- generated/stock assets are legally unclear
- fake proof is used
- build fails
- QA was skipped without stating why


---

# Final Smart Pass

Before any final answer, load and apply the smart pass knowledge files:

- `12-smart-production-secrets.md`
- `13-awwwards-quality-taste-rubric.md`
- `14-ai-anti-genericity-protocol.md`
- `15-prompt-context-engineering-for-codex.md`
- `16-visual-composition-cheats.md`
- `17-motion-microinteractions-recipes.md`
- `18-webgl-3d-performance-tricks.md`
- `19-asset-generation-prompts-library.md`
- `20-hooks-evals-autorepair.md`
- `21-reference-mining-moodboard.md`
- `22-production-debug-playbook.md`
- `23-launch-postlaunch-growth.md`
- `24-localization-cultural-edge.md`
- `25-blender-procedural-recipes.md`
- `26-threejs-r3f-code-recipes.md`
- `27-no-template-checklist.md`
- `28-agent-collaboration-patterns.md`
- `29-smart-dependency-stack-decisions.md`
- `30-final-smart-os-addendum.md`
- `36-community-techniques-may-2026.md`  (snapshot of X-thread techniques — frontend-design skill, claude-code-setup plugin, luxury-3D-alcove pattern)

## Mandatory Smart Gates

Before final delivery:

1. Run anti-genericity review.
2. Run no-template checklist.
3. Confirm one memorable visual/interaction exists or explain why the site is intentionally restrained.
4. Confirm asset ledger exists for any external/generated assets.
5. Confirm mobile hero is designed.
6. Confirm 3D/WebGL is justified if used.
7. Confirm final QA report exists.
8. Run `smart-smell-check.sh` where possible.
9. Run `asset-ledger-check.sh` where possible.
10. State exactly which checks were actually run.

## Senior Rule

Do not produce the most likely website. Produce the strongest website this specific business deserves.


---

# V4 Zero-Gap Operational Patch

## Official Folder Mapping

- Official Codex skill references: `references/`
- Compatibility mirror: `knowledge/`
- Official templates/assets: `assets/templates/`
- Compatibility mirror: `templates/`
- Official scripts: `scripts/`
- Skill UI/tool metadata: `agents/openai.yaml`

## Codex Agent Format

Codex custom agents are TOML files in `.codex/agents/`.
Claude Code custom agents are Markdown files with YAML frontmatter in `.claude/agents/`.

When using Codex, refer to `.codex/agents/*.toml`.
When using Claude Code, refer to `.claude/agents/*.md`.

## Required Evidence Files

Before implementation, ensure these exist under `docs/`:
- `assumptions.md`
- `research-brief.md`
- `concept-scorecard.md`
- `art-direction.md`
- `copy-system.md`
- `asset-ledger.csv`
- `visual-review.md`
- `qa-report.md`
- `ship-decision.md`

Use `scripts/create-evidence-files.sh`.

## Truthfulness Gate

The agent must classify every final claim as:
- **Verified**: tool/command/screenshot evidence exists.
- **Manual review**: checked by visual/code inspection but no automated tool.
- **Not run**: explicitly not executed and reason stated.
- **Blocked**: missing tool, credentials, asset, or approval.

## Zero-Gap Loop

1. Run readiness check.
2. Create evidence docs.
3. Research and document assumptions.
4. Spawn specialist agents.
5. Build.
6. Inspect screenshots.
7. Run final smart check.
8. If a gate fails, fix and rerun.
9. If still blocked, report the blocker honestly.

No silent failures.


---

# V5 Operational Layer

Before any major build, use:

```bash
bash ops/install.sh
python ops/validate_pack.py
bash .agents/skills/award-website-os/scripts/create-evidence-files.sh
```

If Windows PowerShell is preferred:

```powershell
powershell -ExecutionPolicy Bypass -File ops/install.ps1
python ops/validate_pack.py
```

## Operational Requirements

- Read `START_HERE.md`.
- Use `examples/GOLDEN_PROMPTS.md` for prompt patterns.
- Use `tooling/SECURITY_SECRETS_POLICY.md` before touching credentials.
- Use `tooling/PAID_TOOLS_APPROVAL_TEMPLATE.md` before paid tools.
- Use `docs/agent-manifest.md` to see available agents.
- Use `docs/asset-ledger.csv` for every generated/external asset.
- Use `docs/ship-decision.md` for the final verdict.

## Final Claim Discipline

Every final result must say what is:
- Verified
- Manual review
- Not run
- Blocked

No vague "everything is done" claims.

---

# V6 Patient Audit Correction

Use `.agents/skills/award-website-os/` for Codex and `.claude/skills/award-website-os/` for Claude Code. Do not assume one path covers both. Claude subagents preload this skill via their `skills` frontmatter.
