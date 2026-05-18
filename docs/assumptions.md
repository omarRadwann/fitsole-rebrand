# One-Input Website Brief — Caliper

Per V7 `01-business-research-master.md`. The user said: "this is a website for a marketing agency." Halo already exists at the root as a *fictional* growth-marketing practice; this build must be deliberately differentiated so the two coexist as distinct portfolio pieces. Choices below were inferred via the V7 protocol; any can be challenged.

**Business type:** marketing agency (fictional, used as a portfolio piece in this repo)
**Working name:** **Caliper** — a precision instrument metaphor; opposite pole to Halo's ethereal "field/gravity" metaphor. Short, distinctive, mechanical.
**Assumed business model:** small operator-led studio. Mixed-engagement fee model (project + retainer, no hourly). 4 named operators, not 9 (smaller than Halo deliberately).
**Primary audience:** product-led B2B founders (Series A → Series C) who have hired and fired one or more performance-marketing agencies because the math stopped working. Not enterprise CMOs.
**Secondary audience:** SaaS marketing leads inheriting a stalled pipeline, who need a partner to diagnose first and execute second.
**Tertiary audience:** the studio's own next hire — engineers who can write, writers who can ship.
**Primary conversion:** "Run a diagnostic" — a defined 2-week paid engagement, $9,500 fixed fee, that ends with a written brief, not a pitch deck.
**Audience fears:**
- "I'm going to get an agency that confuses 'creative' with 'expensive.'"
- "Three months in, the deliverables will be slides, not shipped."
- "I'll pay for a strategy I'll have to translate into work myself."
- "The case studies will be from companies that were going to grow anyway."
**Required trust signals:**
- A real diagnostic methodology, written publicly. Not a brochure.
- Engagement outcomes named in shipped artifacts (a landing page, a sequence, a pricing change) — not in lift percentages.
- Public refusals: what kinds of engagements the studio turns down.
- Pricing on the page. No "let's chat."
**Category cliches to avoid (from `14-ai-anti-genericity-protocol.md`):**
- "Powerful, scalable marketing." — banned.
- "Trusted by teams at..." logo wall. — banned.
- Hockey-stick growth graph as hero visual. — banned.
- Stock photos of "the team in a meeting." — banned.
- Animated gradient blob. — banned.
- "Book a discovery call" as the only CTA. — banned (we have a $9,500 fixed-fee diagnostic instead).
- Generic 3-card "services" grid. — banned.
- Testimonial cards with stock-photo people. — banned (we'll use named quotes with role+company only, or none).
**Creative opportunity:** the marketing-agency website category is exhausted with two failure modes — gallery-pretty (no proof of method) and dashboard-cold (no taste). Caliper can occupy the gap: **a working tool, not a brochure.** The site itself behaves like the diagnostic — measurable, opinionated, and shipping.
**Site type:** four-page brand-led studio site with a working interactive diagnostic preview as the signature interaction. Editorial but not Halo-editorial — schematic / engineering-drawing aesthetic.
**Stack assumption:** plain HTML/CSS/JS (matches Halo so the workbench stays consistent). Three.js for the signature interactive instrument. GSAP + Lenis on the home only. View Transitions for navigation. Type system: Berkeley Mono + Times New Roman variant + Inter. No frameworks.
**Asset assumption:** all assets generated in-repo. Blender for the central instrument (a kinetic caliper that opens/closes against a measured line as scroll progresses). All other visuals: SVG schematics drawn in code, not images. No stock photography. No image-gen API used (per user's tool selection).
**Legal/payment/credential blockers:**
- Fictional studio — must be clearly framed as such on the site so it's not mistaken for a real entity.
- Fictional client outcomes — must be plausibly attributed but flagged as illustrative.
- No fictional named individuals impersonating real people; only generic role labels or invented names.
- No fake awards, certifications, or proof-of-trust.
- No newsletter signup that promises a real product unless we wire a no-op.
