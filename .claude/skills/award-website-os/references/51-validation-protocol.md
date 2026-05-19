# Validation Protocol

This pack has two different validation levels. Do not confuse them.

## Level 1 — Pack Health

Run this before using the OS or after editing the pack:

```bash
make validate-everything
```

This checks structure, Markdown subagents, hooks JSON, Claude Code followability, source-of-truth consistency, pinned starter dependencies, text formatting, line audit, and baseline strict gates.

## Level 2 — Real Project Ship Gate

Run this only after Claude Code has filled project-specific evidence and built or rebranded an actual website:

```bash
make project-ship-check
```

This fails when strategy, concepts, art direction, copy, assets, screenshots, QA, or ship labels are still baseline templates.

## Required App Checks

Inside the actual generated app or existing website repository, Claude Code must run these when available:

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run test
npm run screenshots
npm run analyze:assets
npm run design:readiness
```

If any command cannot run, Claude Code must write the reason in `docs/qa-report.md` and `docs/ship-decision.md` as `Not run` or `Blocked`.

## Evidence Rule

A claim is not verified because Claude Code believes it. A claim is verified only when a command result, screenshot, file, browser observation, or measurable artifact supports it.
