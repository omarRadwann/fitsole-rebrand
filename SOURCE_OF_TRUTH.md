# SOURCE_OF_TRUTH.md

This is the highest-authority document in the pack. If any other file disagrees with this one, follow this one and log the conflict in `docs/assumptions.md`.

## Authority order

1. `SOURCE_OF_TRUTH.md` (this file)
2. Explicit user instructions in the current Claude Code session
3. `CLAUDE.md`
4. `.claude/skills/award-website-os/SKILL.md`
5. `AGENTS.md`
6. `VALIDATION_PROTOCOL.md`
7. `CLAUDE_FLOWCHART.md`
8. `.claude/skills/award-website-os/references/*.md`
9. `.claude/agents/*.md`

Lower authority documents may add specifics but may not override higher ones.

## Identity

This pack is **Claude Code-only**. Skills live under `.claude/skills/<name>/SKILL.md`, subagents live under `.claude/agents/*.md`, hooks are configured in `.claude/settings.json` with scripts in `.claude/hooks/`, evidence lives in `docs/`. Ignore any historical mention of other runtimes.

## The one-input rule

The user may provide only a business type. Proceed by inference and research, not interrogation. See `CLAUDE.md` for the short list of things you may ask about.

## The five signature requirements

A site is not award-level unless it has all five:

1. **Signature idea** — one sentence: "This business is *[truth]*, so the site behaves like *[metaphor]* and proves it through *[interaction/proof]*."
2. **Signature visual** — one image/composition that could be the brand's identity post.
3. **Signature interaction** — concept-tied, mobile-capable, reduced-motion-fallback-capable.
4. **Signature proof** — real or honest quiet proof. Not invented.
5. **Signature screenshot** — the frame the founder would actually share.

If any one is missing, the site is not done.

## Ship gates

A site may be called shipped only when all of these are true:

- `make validate-everything` passes.
- `make project-ship-check` passes.
- Every gate listed in `VALIDATION_PROTOCOL.md` has a truth label in `docs/ship-decision.md`.
- No item in `.claude/skills/award-website-os/references/00-master-operating-protocol.md` § "Hard Ship Gates" is failing.

## Forbidden, regardless of who asks

- Fake metrics, fake testimonials, fake logos, fake awards, fake before/after.
- Presenting AI-generated people as real customers, doctors, founders, or staff without explicit user approval.
- Using copyrighted images, fonts, music, or shaders without rights.
- Bypassing paywalls or scraping protected content.
- Publishing or deploying without explicit user approval.
- Hiding failed checks behind passing language.

## Truth-label vocabulary

Use exactly these four labels in `docs/ship-decision.md` and `docs/qa-report.md`:

- **Verified** — command output, screenshot, or rendered artifact exists as evidence.
- **Manual review** — Claude inspected directly but no automated proof was produced.
- **Not run** — not executed; the reason is stated.
- **Blocked** — could not execute because a tool, credential, approval, or asset is missing.

Anything else (e.g. "looks good", "should work", "probably fine") is not acceptable in ship documentation.

## Pack edits

Edits to this pack itself (anything inside `.claude/`, `ops/`, root anchors, or `Makefile`) require `make validate-everything` to still pass afterward. If a pack edit breaks pack validation, revert or fix before proceeding with project work.
