# Submission Readiness and Risk Guide

Fill only if submitting to Awwwards or similar. See `.claude/skills/award-website-os/references/55-project-ship-gate.md` and `64-awwwards-jury-and-scoring-master.md`.

## Submission target

<FILL IN — Awwwards SOTD / Honorable Mention / Developer Award / Mobile Excellence / CSSDA / FWA / SiteInspire>

## Pre-submission checklist

- [ ] Site is live on production domain (not a Vercel preview URL).
- [ ] Final URL is the canonical one (no /preview, no staging subdomain).
- [ ] Real assets in place (no placeholders, no Lorem Ipsum, no `/api/placeholder/`).
- [ ] Real copy in place (no draft or template language).
- [ ] Asset rights confirmed for everything on the live site.
- [ ] Mobile experience is its own designed version (not a stack).
- [ ] Reduced-motion path is implemented and verified.
- [ ] Accessibility passes WCAG 2.2 AA on key journeys.
- [ ] Performance: LCP < 2.5s mobile, CLS < 0.1, INP < 200ms.
- [ ] 3D / WebGL (if any) has a working poster fallback.
- [ ] Site survives a hard refresh and a back-button navigation.
- [ ] All forms submit successfully end-to-end.
- [ ] CTA actions actually work (call dialer, WhatsApp link, booking URL).
- [ ] Analytics installed (privacy-respecting) if intended.
- [ ] OG image renders correctly on Twitter / LinkedIn / Slack preview.
- [ ] Favicon and Apple touch icons present.
- [ ] Sitemap and robots.txt configured.

## Submission materials

- [ ] Site title and tagline (in the submission language)
- [ ] Cover image (16:9 or 1:1 depending on platform)
- [ ] Description (under 300 chars, in the submission language)
- [ ] Tags / categories
- [ ] Credits — agency / team / specific roles
- [ ] Tech stack disclosure
- [ ] Optional: dedicated case study URL

## Risk register

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | <FILL IN — e.g. 3D scene fails to load on iOS Safari> | <L/M/H> | <L/M/H> | <FILL IN> |
| 2 | <FILL IN — e.g. jury views site on slow connection> |  |  | <FILL IN> |
| 3 | <FILL IN — e.g. copyright claim on imagery> |  |  | <FILL IN> |
| 4 | <FILL IN — e.g. brand-of-the-day glitch on jury day> |  |  | <FILL IN> |

## Domain / hosting risk

- DNS propagation: <FILL IN>
- Hosting SLA: <FILL IN>
- Burst-traffic plan (if a feature day brings spike traffic): <FILL IN>
- 24-hour status monitoring on submission day: <FILL IN>

## Last-mile polish checks

- [ ] All `console.log` removed.
- [ ] All `// TODO` comments resolved or escalated to a follow-up task.
- [ ] All test data replaced with real content.
- [ ] All `alert()` / debug UI removed.
- [ ] Lazy-loaded routes prefetch on hover.
- [ ] Images have `width`/`height` (or aspect-ratio CSS) to avoid CLS.
- [ ] Fonts have `font-display: optional` or `swap` per the type system.
- [ ] No mixed-content warnings.
- [ ] HTTPS valid for at least 30 days into the future.

## After submission

- Day 1: monitor server, error tracking, hot path UX.
- Day 1–7: respond to jury comments if applicable.
- Day 7+: capture results (HM / SOTD / nothing) and add to `ship-decision.md` as evidence.

## Honesty note

The award is not the product. If the site honestly serves the business, getting an award is bonus; missing one doesn't invalidate the work. If the work doesn't honestly serve the business, an award is unlikely to come anyway. Don't submit a hollow site.
