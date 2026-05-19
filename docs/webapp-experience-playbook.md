# Webapp Experience Playbook (Per Project)

Fill this **only if the project is webapp-shaped** (dashboard, configurator, tool, viewer, planner). For marketing sites, mark "Not applicable".

Reference: `.claude/skills/award-website-os/references/63-webapp-experience-patterns.md`.

## Project shape

- [ ] Marketing site (use marketing-site evidence docs; skip this file)
- [ ] Hybrid (marketing + product) — both apply
- [ ] Webapp / tool — this file applies

## First useful state

What does the user see on first cold load?

- [ ] Seeded sample data with affordance to start own
- [ ] Smart empty state with primary action
- [ ] Guided onboarding (justify; usually adds friction)

Description: <FILL IN>

5-second cold-load test answers:
1. What is this thing? <FILL IN>
2. What can I do here? <FILL IN>
3. Where does my eye go first? <FILL IN>

## Primary tasks (top 3–5)

| Task | Target time | Steps | Acceptance |
|---|---|---|---|
| <FILL IN> | <FILL IN — seconds> | <FILL IN — number of clicks> | <FILL IN — what "success" looks like> |
|  |  |  |  |
|  |  |  |  |

## Spatial continuity decisions

For each primary navigation / view transition:

| From → To | Strategy | Implementation |
|---|---|---|
| <FILL IN> | Shared element / FLIP / fade / shift | <FILL IN> |
|  |  |  |

## State map

List the views and their transitions:

<FILL IN — bulleted or table form. Each transition's motion budget (ms) is named.>

## Density system

- Dominant type size: <FILL IN — px / rem>
- Baseline grid: <FILL IN — 4px / 8px>
- Card vs hairline rule: <FILL IN — when to use which>
- Affordance rule: <FILL IN — chrome only on actionable objects>

## Webapp motion budget

| Job | Pattern | Duration |
|---|---|---|
| Input confirm | <FILL IN> | 100–200ms |
| Object reveal | <FILL IN> | 250–400ms |
| Reposition | <FILL IN — FLIP/spring> | 300–500ms |
| Heavy view change | <FILL IN> | 400–600ms |
| Background data update | <FILL IN — crossfade> | 150ms |

## Performance budget (webapp-tighter)

| Metric | Target |
|---|---|
| First useful state visible | < 1.5s on 4G fast |
| Input → visible response | < 100ms |
| Heavy view transition | < 500ms |
| Memory ceiling on mobile | < 250 MB JS heap |

## Fresh-user task test

For each primary task, did an uninstructed fresh user complete it within target time?

| Task | Tested? | Pass / Fail | Notes |
|---|---|---|---|
|  |  |  |  |

## Webapp-specific risks

- Confusion between sample-data and real-data states.
- Drift between dev seed and prod seed.
- Lists past 200 items not virtualized.
- State lost on refresh / back navigation.
- Errors shown globally instead of near cause.

Mitigations: <FILL IN>
