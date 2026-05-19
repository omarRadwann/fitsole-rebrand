# Paid Tools and APIs Runbook

How paid tools and external APIs are used on this project. The release-qa-master reads this before ship to confirm rights and cost transparency.

## Paid tools in use

| Tool | Plan | Purpose | Account holder | Credentials location | Cost / month |
|---|---|---|---|---|---|
| <FILL IN — e.g. Midjourney> | <FILL IN> | <FILL IN — hero imagery> | <FILL IN — user / agency> | <FILL IN — never in repo> | <FILL IN> |
|  |  |  |  |  |  |

## APIs in use at runtime

| API | Endpoint | Purpose | Auth method | Rate limits | Failure path |
|---|---|---|---|---|---|
| <FILL IN — e.g. Calendly> | <FILL IN> | <FILL IN> | <FILL IN — key / OAuth> | <FILL IN> | <FILL IN — what happens when API is down> |
|  |  |  |  |  |  |

## Credentials hygiene

- Credentials must never be committed to the repo (verified by <FILL IN — git secrets / gitleaks / manual>).
- Env file template: `.env.example` lists every required var without values.
- Production secrets stored in: <FILL IN — Vercel / Netlify / 1Password / Doppler>.
- Local dev secrets stored in: <FILL IN — .env.local, gitignored>.
- Rotation plan: <FILL IN>.

## Approval audit

For each paid tool, confirm:

- [ ] User explicitly approved use, or it falls under a default-approved category.
- [ ] License covers the actual usage (commercial / non-commercial).
- [ ] Output usage rights are documented.
- [ ] Cost is transparent to the user.

## Failure modes

For each runtime API, what does the user experience when it's down or rate-limited?

- <FILL IN — API → user-visible behavior>
- <FILL IN>

## Cost ceiling

- Hard cap per month: <FILL IN — user-set>
- What happens at the cap: <FILL IN — degrade / disable / notify>
- Who owns monitoring: <FILL IN>

## At handoff

- [ ] All paid-tool accounts transferred to the user, or the user agreed to be the account holder from the start.
- [ ] User has admin / billing access on every paid tool needed to run the site.
- [ ] User has rotated keys / passwords for anything they didn't generate themselves.
- [ ] User has the runbook in their own systems (not just in this repo).
