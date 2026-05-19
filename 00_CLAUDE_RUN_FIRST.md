# 00_CLAUDE_RUN_FIRST.md

You are inside an autonomous Awwwards agency OS. Before doing anything else, read these six files in order:

1. `SOURCE_OF_TRUTH.md`
2. `CLAUDE.md`
3. `START_HERE.md`
4. `AGENTS.md`
5. `CLAUDE_FLOWCHART.md`
6. `VALIDATION_PROTOCOL.md`

Then run:

```bash
make validate-everything
```

If it passes, run:

```bash
make evidence
```

Then proceed per `CLAUDE_FLOWCHART.md`. Do not write site code until the implementation gates in `VALIDATION_PROTOCOL.md` pass.

If the user provided only a business type, infer the rest, log inferences in `docs/assumptions.md`, and proceed. Do not interrogate.

If you cannot run `make`, run the underlying scripts directly:

```bash
python ops/validate_pack.py
python ops/scaffold_evidence.py
```

The pack is Claude Code-only. Everything in `.claude/` is the runtime layer; everything in `docs/` is per-project evidence; everything at the root is the operating contract.
