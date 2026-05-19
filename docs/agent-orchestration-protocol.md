# Agent Orchestration Protocol (Per Project)

The project-specific record of how the agent court was actually run. Reference doc: `.claude/skills/award-website-os/references/52-agent-orchestration-protocol.md`. Pattern reference: `28-agent-collaboration-patterns.md`.

## Spawn mode

- [ ] Native Claude Code subagents (via `/agents` and prompts).
- [ ] Simulated (agent body read as system prompt within the orchestrator).

If simulated, mark affected sections of `agent-court-report.md` as `Manual review`.

## Spawn order (this project)

The default order is in `AGENTS.md`. Record any deviation and the reason:

| Step | Agent | Mode | Why this position |
|---|---|---|---|
| 1 | <FILL IN> | <FILL IN — read-only / write> | <FILL IN> |
| 2 |  |  |  |
| 3 |  |  |  |
| ... |  |  |  |

## Pattern usage

Which collaboration patterns from reference 28 were activated:

- [ ] Pattern 1 — Parallel concept pressure (researcher + creative + art)
- [ ] Pattern 2 — Build then brutal critique (frontend ↔ screenshot-critic ↔ typography)
- [ ] Pattern 3 — Motion safety (creative-tech → gsap → a11y → gpu)
- [ ] Pattern 4 — 3D sanity (creative-director → tech-director → 3D agents → gpu → critic)
- [ ] Pattern 5 — Asset legality loop (asset-pipeline → image-gen → orchestrator → release-qa)
- [ ] Pattern 6 — Final ship court (visual + a11y + perf + release + orchestrator each give PASS / NO-SHIP)

## Iterations

How many build → critique → repair loops were run?

- Loop 1 outcome: <FILL IN — what the rubric average was, what was repaired>
- Loop 2 outcome: <FILL IN>
- Loop 3 outcome: <FILL IN>
- ...

If only 1 loop ran and the site shipped, the result is suspect — most award-grade sites need 2–5 loops.

## Orchestrator decisions log

Decisions the orchestrator made over the lifetime of the project that were not in the original brief:

| # | Decision | Reason | Reversal cost |
|---|---|---|---|
| 1 | <FILL IN> | <FILL IN> | <FILL IN — low / medium / high> |
| 2 |  |  |  |

## Handoff template used

Confirm every handoff used the `AGENTS.md § Handoff template` block. If not, list the exceptions:

<FILL IN — or "All handoffs used the template.">

## Anti-chaos compliance

- [ ] No agent was asked everything.
- [ ] No agent contradiction was left unresolved.
- [ ] 3D agent was not spawned before concept approval.
- [ ] Implementation agent was not spawned before art-direction + copy.
- [ ] No QA was accepted without evidence.
- [ ] All no-ship blockers were listed, not buried.

If any box is unchecked, write a one-line explanation:

<FILL IN — or "All boxes checked.">
