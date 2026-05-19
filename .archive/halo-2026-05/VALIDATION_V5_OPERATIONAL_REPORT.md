# V5 Operational Validation Report

Generated: 2026-05-18T12:35:19.708415+00:00

## What V5 Fixed

V5 adds the operational layer that was still missing after V4:

1. **Install helpers**
   - `ops/install.sh`
   - `ops/install.ps1`

2. **Pack validation**
   - `ops/validate_pack.py`

3. **Integrity**
   - `ops/generate_integrity_manifest.py`
   - `ops/verify_integrity_manifest.py`
   - `ops/package-integrity.json`

4. **Tool wiring**
   - `tooling/MCP_AND_TOOLING_SETUP.md`
   - `tooling/MCP_CONFIG_TEMPLATE.md`

5. **Security and paid tools**
   - `tooling/SECURITY_SECRETS_POLICY.md`
   - `tooling/PAID_TOOLS_APPROVAL_TEMPLATE.md`

6. **Real usage examples**
   - `examples/GOLDEN_PROMPTS.md`
   - `examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md`

7. **Convenience**
   - `START_HERE.md`
   - `Makefile`
   - `docs/ship-decision.md`
   - `docs/agent-court-report.md`

## Current Stats

```json
{
  "total_files": 177,
  "codex_toml_agents": 19,
  "claude_md_agents": 19,
  "references": 35,
  "scripts": 8,
  "ops_files": 6,
  "tooling_files": 4,
  "examples": 2,
  "asset_templates": 8
}
```

## Remaining Honest Limits

- The package still cannot connect tools by itself.
- External APIs, paid tools, deployment accounts, and image generators require user authorization/configuration.
- Future Codex/Claude changes may require small path/schema updates.
- "Zero gaps" means known operational gaps are closed and unknowns are surfaced.
