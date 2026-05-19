# Strict QA Gates Master

Soft checks help iteration. Strict checks decide if the work can be called complete.

## Required final labels

- Verified: command, screenshot, rendered artifact, or file evidence exists.
- Manual review: inspected directly but no automated proof.
- Not run: not executed; reason stated.
- Blocked: cannot execute because tool, credential, approval, or asset is missing.

## No-ship if

- build fails
- no mobile screenshot/review
- no reduced-motion path
- external/generated assets are untracked
- 3D/WebGL lacks reason, budget, and fallback
- final QA report is empty
- ship decision is vague
- Claude Code claims a result it did not verify

## Commands

```bash
make final-check
make strict-check
```
