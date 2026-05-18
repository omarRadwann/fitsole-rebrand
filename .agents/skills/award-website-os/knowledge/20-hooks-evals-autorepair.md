# 20 — Hooks, Evals, and Auto-Repair Loops

## Mission

Turn quality standards into repeatable checks.

## Smart Principle

Do not rely on the agent "remembering" quality. Use scripts, hooks, and templates.

## Hook Strategy

### After Edits
Run cheap checks:
- typecheck if available
- lint if available
- format check if available
- generic phrase smell check

### Before Final
Run heavier checks:
- build
- tests
- screenshot review
- asset audit
- accessibility review
- performance review

## Generic Phrase Smell Check

Flag:
- seamless
- innovative
- next-gen
- unlock
- cutting-edge
- streamline
- robust
- empower
- transform your business
- tailored solutions
- world-class

Do not automatically ban forever, but require justification.

## Auto-Repair Loop

1. Build.
2. Capture errors.
3. Fix errors.
4. Rebuild.
5. Screenshot.
6. Critique.
7. Fix visual issues.
8. QA.
9. Final report.

Never stop at "implemented" if the build fails.

## Evaluation Files

Maintain:
- `docs/creative-brief.md`
- `docs/concept-scorecard.md`
- `docs/asset-ledger.csv`
- `docs/visual-review.md`
- `docs/qa-report.md`
- `docs/assumptions.md`

## Ship Decision Format

```md
## Ship Decision

Status: PASS / NO SHIP / PASS WITH LIMITATIONS

Why:
...

Evidence:
- build:
- typecheck:
- lint:
- screenshots:
- accessibility:
- performance:
- asset legality:

Limitations:
...
```

## Stop Hooks Should Block Weak Final Answers

If available, a stop hook should warn when:
- no QA report exists
- no asset ledger exists for asset-heavy project
- no screenshot review exists after UI work
- build failed
- generic smell check fails heavily
- TODOs remain in critical files
