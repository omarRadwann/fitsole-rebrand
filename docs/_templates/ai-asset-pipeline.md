# AI Asset Pipeline

How AI-generated assets are produced, reviewed, and licensed on this project. See `.claude/skills/award-website-os/references/22-ai-image-generation-master-prompting.md` and `32-real-world-asset-legal-governance.md`.

## Which assets will be AI-generated

| Asset | Where used | Generator | Reason for AI (vs photography / stock / illustration) |
|---|---|---|---|
| <FILL IN> | <FILL IN> | <FILL IN — Midjourney / SDXL / Flux / DALL·E / etc.> | <FILL IN> |

## Hard "no" list (must NOT be AI-generated on this project)

Default no-list:

- People depicted as real customers, doctors, lawyers, founders, or staff.
- Logos for the client or any third party.
- Testimonial portraits.
- Product photography for a real product.
- Editorial / journalistic context where authenticity is implied.
- Anything where a legal claim hangs on the image being real.

Project-specific additions to the no-list: <FILL IN — or "None">

## Prompt and revision style

- Style anchor: <FILL IN — e.g. "Editorial cinematography, 35mm, neutral palette, single-source side light, no subject smiling.">
- Negative prompts: <FILL IN — what to suppress every time>
- Seed strategy: <FILL IN — fixed seed for consistency / varied seed for diversity>
- Iteration policy: <FILL IN — max iterations per asset before swapping approach>

## Approval flow

1. Generated → review by art-director.
2. If approved → asset-pipeline-master logs in `asset-ledger.csv` with `generated_or_real=generated` and `commercial_use=<licensed tool>/research-only/uncertain`.
3. Release QA confirms commercial-use terms of the generator at time of generation.

## Generator licensing

For each generator used, record:

| Generator | License at time of use | Commercial use allowed? | Output ownership | Source link |
|---|---|---|---|---|
| <FILL IN> | <FILL IN> | <FILL IN — yes / no / restricted> | <FILL IN> | <FILL IN> |

If commercial use is uncertain, the asset is `Blocked` until clarified.

## Style sheet (so different operators get consistent outputs)

- Color palette to keep: <FILL IN>
- Color palette to avoid: <FILL IN>
- Camera / framing: <FILL IN>
- Light direction / quality: <FILL IN>
- Material treatment: <FILL IN>
- Forbidden subjects: <FILL IN>

## Pre-launch sanity check

- [ ] No generated person is presented as a real person.
- [ ] Every generated asset is in `asset-ledger.csv`.
- [ ] Commercial-use status for every generator is `yes`.
- [ ] Style is consistent across generated assets (a single visual world).
