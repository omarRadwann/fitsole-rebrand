# 66 — Agency Rebrand Business OS

When the project is a **rebrand**, not a greenfield site. Different gates, different risks, different politics.

## What a rebrand actually is

A rebrand is a translation: the business has existed, has customers, has SEO, has a tone, has assets, has a CMS, has integrations. The job is to evolve the brand without breaking what currently works commercially.

Three rebrand modes, from lowest to highest risk:

1. **Visual refresh** — same IA, same copy structure, new look. Lowest risk; lowest creative ambition.
2. **Reposition** — same offer, new audience or new angle. Mid risk; usually the right answer.
3. **Full rebrand** — new name, new voice, new offer. Highest risk; requires founder/CMO authority.

Identify the mode in `docs/rebrand-or-idea-master-protocol.md` before doing anything else. The mode determines which gates apply.

## Mandatory rebrand audit (before any design)

For each, ask the user (or their analytics) directly:

- **Conversion drivers** — which pages, words, and CTAs currently produce most of the conversion?
- **Traffic sources** — where do customers actually arrive? (Organic / direct / paid / partner.)
- **SEO weight** — which URLs rank for which queries? Which deserve to be preserved verbatim?
- **Brand recognition** — what part of the current identity (name, mark, color, voice) is doing work for customers?
- **Failed attempts** — what has the team tried that didn't work, and why?

Log answers in `docs/agency-rebrand-operating-system.md`. If the user can't answer half of these, the project is at higher risk than they think; record that as an assumption.

## Preservation list

Before the new direction is set, fix the preservation list:

| Asset | Preserve / Evolve / Drop | Reason |
|---|---|---|
| Name |  |  |
| Wordmark |  |  |
| Primary color |  |  |
| Tone of voice |  |  |
| Top 5 URLs |  |  |
| Specific copy phrases that convert |  |  |
| Existing case studies |  |  |
| Testimonials / reviews |  |  |
| SEO meta on ranking pages |  |  |

A rebrand that drops everything is a relaunch in disguise; charge accordingly and make it explicit to the user.

## Risk register (`docs/agency-rebrand-operating-system.md` § Risks)

Standard rebrand risks to enumerate:

- SEO regression on high-traffic URLs (redirects map?).
- Conversion regression because a CTA or layout that was working got "cleaned up".
- Sales-team confusion about how to describe the new positioning.
- Customer confusion about whether this is still the same company.
- Integrations that hardcode old paths / IDs.
- Legal review on changed claims.
- Domain / DNS / email continuity.

For each, name the mitigation and the owner. If the owner is "us," own it.

## The rebrand-specific concept rule

For rebrands, the concept must answer two questions, not one:

1. What is this brand now?
2. **How do we get the existing audience there without losing them?**

A rebrand concept that ignores Q2 is a portfolio piece, not a delivered project.

## Politics

Rebrands fail more often for political reasons than design reasons. Pre-build defenses:

- **Founder ego** — get the founder's hands on the work as early as possible. Show three concepts, not one. Let them reject.
- **Internal stakeholders** — name them before concept. Each gets one structured feedback round, not unlimited DMs.
- **Sales / CS** — get their language into the copy. They are the ones who'll defend or undermine the launch.
- **Legal** — flag claims early. Lawyer comments arriving the day before launch are the most common cause of last-minute compromise.

## Rebrand-specific ship gates

In addition to the standard gates, a rebrand cannot ship without:

- Old → new URL redirect map captured in `docs/rebrand-or-idea-master-protocol.md`.
- "Why did we change?" page or section (even if minimal).
- Internal launch kit: one-pager for the team, FAQ, sales-script update.
- A rollback plan if conversion drops below a defined threshold in the first 14 days.

## What this looks like in workflow

When the project is a rebrand:

1. After `docs/one-input-brief.md`, immediately fill `docs/rebrand-or-idea-master-protocol.md` (mode + preservation list).
2. Pre-concept agent court: `market-researcher` reads the rebrand mode and audits the existing site.
3. Concepts must include their preservation/evolution stance, not just visual direction.
4. Ship gate adds the redirect map and rollback plan to the truth-labeled list.
