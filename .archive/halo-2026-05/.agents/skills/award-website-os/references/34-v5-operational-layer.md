# 34 — V5 Operational Layer

## Purpose

V5 turns the OS from instructions into an installable, checkable operating layer.

## New Files

- `START_HERE.md`
- `ops/install.sh`
- `ops/install.ps1`
- `ops/validate_pack.py`
- `ops/generate_integrity_manifest.py`
- `ops/verify_integrity_manifest.py`
- `tooling/MCP_AND_TOOLING_SETUP.md`
- `tooling/MCP_CONFIG_TEMPLATE.md`
- `tooling/SECURITY_SECRETS_POLICY.md`
- `tooling/PAID_TOOLS_APPROVAL_TEMPLATE.md`
- `examples/GOLDEN_PROMPTS.md`
- `examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md`

## V5 Required Flow

1. Read `START_HERE.md`.
2. Run install helper.
3. Run validator.
4. Create evidence files.
5. Use Real Masters agents.
6. Build.
7. Run final smart checks.
8. Produce ship decision.

## New No-Ship Conditions

- Pack validation fails.
- Evidence docs missing.
- Asset ledger missing for generated/external assets.
- Paid-tool use unapproved.
- Secrets are exposed.
- Final claims are unlabeled.
