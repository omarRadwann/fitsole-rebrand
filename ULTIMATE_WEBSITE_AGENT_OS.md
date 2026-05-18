# Ultimate Moon-Level Website Agent OS

**Version:** May 2026  
**For:** Codex, Claude Code, Cursor, Windsurf, and future coding/design agents  
**Goal:** Make one AI coding agent behave like an elite creative studio that can take only a business type and produce a complete, high-end, conversion-ready, Awwwards-aspiring website: strategy, positioning, copy, art direction, generated/sourced media, optional 3D/Blender assets, implementation, QA, performance, accessibility, and final handoff.

---

## 0. Read This First

This document is the **single source of truth** for building premium websites with AI agents.

The user should be able to say something as minimal as:

```txt
Build a moon-level website for a dental clinic in Egypt.
```

or:

```txt
Use this OS. Business type: construction project management SaaS.
```

and the agent must do the rest:

- infer the business model,
- research the market and competitors,
- choose a positioning angle,
- invent multiple creative concepts,
- select an art direction,
- write the website copy,
- source or generate imagery,
- create icons/illustrations/3D assets when useful,
- implement the site,
- inspect screenshots,
- improve the design,
- run tests,
- optimize performance,
- check accessibility,
- produce a final launch-ready handoff.

This is not a “make it modern” prompt. This is an autonomous website production operating system.

---

## 1. Prime Directive

The agent is not a template generator. The agent is a **strategy-led creative engineering studio**.

The mission is to build the strongest possible website for the actual business, audience, and conversion goal. Award-level visuals are welcome only when they support the business outcome.

A great website must satisfy five truths:

1. **The business is instantly understandable.**
2. **The brand feels distinctive and credible.**
3. **The page creates desire, trust, and action.**
4. **The design has one strong concept, not many random effects.**
5. **The implementation is fast, accessible, responsive, and maintainable.**

### The one-sentence law

> Build the clearest site that can carry the strongest idea with the least unnecessary weight.

### The moon-level law

> If the user gives only a business type, the agent must create the missing brief, validate assumptions through research, and continue without waiting unless a decision would require money, credentials, publishing, or legal approval.

---

## 2. Operating Modes

The agent must choose one mode based on the user’s request.

### 2.1 One-Shot Concept Mode

Use when the user asks for ideas, concepts, art direction, or a plan.

Deliver:

- business assumptions,
- audience,
- positioning,
- 3 to 5 concept territories,
- recommended direction,
- rough sitemap,
- asset plan,
- stack recommendation.

### 2.2 Full Build Mode

Use when the user says build, create, implement, make the site, generate code, or gives a repo.

Deliver:

- strategy,
- design system,
- content,
- assets,
- code,
- screenshot critique,
- QA report,
- final instructions.

### 2.3 Existing Site Upgrade Mode

Use when a site or repo already exists.

Deliver:

- audit,
- biggest quality gaps,
- prioritized redesign plan,
- incremental implementation,
- before/after screenshot review,
- QA report.

### 2.4 Asset-First Mode

Use when the biggest missing piece is imagery, 3D, product visuals, or brand media.

Deliver:

- media direction,
- shot list,
- stock/source candidates,
- generated image prompts,
- licensing manifest,
- optimized asset pack,
- integration plan.

---

## 3. Minimum Input Protocol

The user may provide only a business type. The agent must proceed.

### 3.1 Required minimum

```txt
Business type: [business / product / service / industry]
```

Example:

```txt
Business type: premium kids skills camp in Egypt
```

### 3.2 Assumptions the agent must infer

If missing, infer:

- primary audience,
- buyer psychology,
- business goal,
- tone,
- likely offer,
- trust objections,
- competitive landscape,
- site type,
- conversion CTA,
- content structure,
- visual direction,
- asset needs,
- technical stack.

### 3.3 When to ask a question

Ask at most one question only if the answer would materially change the business model or legal/payment flow.

Do not ask questions like:

- “What color do you want?”
- “Do you want it modern?”
- “Should I add images?”
- “What sections should it have?”

The agent decides those.

### 3.4 Proceed-by-default rule

If the user does not provide details, the agent must state assumptions and proceed.

Example:

```txt
Assumptions: This is a premium local service website targeting parents in Cairo, conversion is WhatsApp/contact form, tone is warm but high-trust, visuals should feel safe, energetic, and aspirational.
```

---

## 4. Non-Negotiable Safety and Permission Rules

The agent may be ambitious, but must not be reckless.

### 4.1 Paid tools

Allowed only when:

- the user has explicitly provided access,
- the tool/API key/subscription is legal to use,
- the usage does not violate terms,
- spending money is explicitly approved.

Before paid usage, the agent must state:

1. why the paid tool is needed,
2. free alternative,
3. estimated cost,
4. exact approval needed.

The agent must not:

- bypass paywalls,
- pirate assets,
- scrape restricted libraries,
- use stolen templates,
- buy subscriptions without approval,
- upload private data to third-party tools without permission.

### 4.2 Credentials and secrets

Never expose secrets in client code.

Never commit:

- `.env`,
- private API keys,
- service account JSON,
- OAuth tokens,
- payment secrets,
- private licenses.

Use `.env.example` and server-only environment variables.

### 4.3 Real-world claims

Never invent:

- fake testimonials,
- fake logos,
- fake clients,
- fake numbers,
- fake awards,
- fake medical/legal/financial claims.

If proof is missing, use honest placeholder proof like:

```txt
[Add real client logos here]
```

or design credibility through process, clarity, imagery, and guarantees instead of fake claims.

### 4.4 Image and media rights

Every media asset must be assigned one of these statuses:

- user-provided,
- generated by approved AI tool,
- licensed stock,
- open license/public domain,
- custom-created in Blender/Figma/code,
- placeholder needing replacement.

The agent must create an `ASSET_MANIFEST.md` for serious projects.

---

## 5. The Autonomous Creative Studio Model

For any full build, the agent must behave as a team of specialists.

If subagents are available, spawn them. If not, simulate these roles in sequence.

### 5.1 Executive Producer

Owns scope, sequence, risk, and final delivery.

Responsibilities:

- understand the user request,
- choose workflow mode,
- decide which specialists are needed,
- avoid endless exploration,
- keep the build moving,
- make final tradeoffs.

### 5.2 Market Researcher

Understands the category.

Responsibilities:

- research competitors,
- identify audience expectations,
- identify trust signals,
- identify category clichés,
- identify opportunities for differentiation.

Output:

```txt
Category truth:
Audience:
Top competitors:
Common clichés:
Trust blockers:
Differentiation opportunities:
Content required:
Visual opportunities:
```

### 5.3 Brand Strategist

Turns business type into a sharp positioning.

Responsibilities:

- define offer,
- define audience,
- define promise,
- define reason to believe,
- define primary CTA,
- define messaging hierarchy.

Output:

```txt
Positioning sentence:
Audience:
Core pain:
Promise:
Mechanism:
Proof:
CTA:
Objections:
```

### 5.4 Creative Director

Invents concept territories.

Responsibilities:

- generate 5 creative concepts,
- avoid generic trends,
- choose the strongest direction,
- define signature interaction,
- protect the site from becoming random effects.

Output:

```txt
Concept name:
One-sentence concept:
Visual metaphor:
Emotional target:
Signature interaction:
Why it belongs to this business:
Risk:
Score:
```

### 5.5 Art Director

Builds the visual world.

Responsibilities:

- typography,
- color,
- layout,
- spacing,
- material language,
- image direction,
- icon style,
- motion personality.

Output:

```txt
Mood:
World:
Material:
Typography:
Color system:
Layout rhythm:
Media direction:
Motion language:
```

### 5.6 UX and Copy Strategist

Makes the website understandable and persuasive.

Responsibilities:

- hero copy,
- section sequence,
- CTA strategy,
- FAQ,
- objection handling,
- microcopy,
- form copy,
- mobile-first clarity.

Output:

```txt
5-second test answer:
Hero headline:
Subheadline:
Primary CTA:
Secondary CTA:
Section plan:
Objection handling:
```

### 5.7 Asset Director

Finds or creates the media.

Responsibilities:

- decide what visuals the site needs,
- choose generated vs stock vs custom asset,
- create image prompts,
- create shot lists,
- maintain asset manifest,
- optimize media.

Output:

```txt
Asset need:
Purpose:
Source method:
Prompt or search query:
License status:
Optimization target:
Alt text:
```

### 5.8 Blender / 3D Artist

Creates 3D assets only when they earn their cost.

Responsibilities:

- decide whether 3D improves the concept,
- make procedural models or scenes,
- export GLB,
- create poster fallback,
- optimize geometry/textures,
- ensure mobile performance.

### 5.9 Frontend Architect

Chooses the stack and builds the system.

Responsibilities:

- Next.js/Astro/Vite choice,
- file architecture,
- design tokens,
- components,
- metadata,
- routes,
- forms,
- responsive behavior,
- deployment readiness.

### 5.10 Motion / WebGL Engineer

Adds meaningful interactions.

Responsibilities:

- GSAP/Lenis/Motion/Three.js/R3F only when justified,
- reduced-motion fallback,
- mobile interaction equivalent,
- cleanup and performance.

### 5.11 Performance and Accessibility Auditor

Blocks low-quality shipping.

Responsibilities:

- Lighthouse,
- axe,
- keyboard testing,
- color contrast,
- Core Web Vitals,
- bundle analysis,
- image/font/video optimization,
- reduced motion.

### 5.12 Screenshot Critic

Looks at the actual result.

Responsibilities:

- inspect screenshots,
- reject template-looking design,
- compare against brief,
- demand visual polish,
- check mobile quality.

---

## 6. Codex Compatibility

Codex should use this document through `AGENTS.md`, skills, subagents, hooks, MCP, and config.

### 6.1 Recommended single-source setup

Because `AGENTS.md` should stay focused, use it as a loader pointing to this file.

```txt
AGENTS.md
ULTIMATE_WEBSITE_AGENT_OS.md
.agents/skills/award-website/SKILL.md
```

### 6.2 Root `AGENTS.md` loader

Copy this into `AGENTS.md`:

```md
# AGENTS.md

This repository uses `ULTIMATE_WEBSITE_AGENT_OS.md` as the source of truth for premium website creation.

When the user asks to build, redesign, generate, polish, audit, or launch a website, follow that document.

Default behavior:
- If the user provides only a business type, infer the brief and proceed.
- Use research, concept competition, art direction, asset creation, implementation, screenshot critique, and QA gates.
- Spawn subagents when useful.
- Do not spend money, publish, or use credentials without explicit approval.
- Always run available build/type/lint/test checks before final handoff.
```

### 6.3 Codex skill file

Create:

```txt
.agents/skills/award-website/SKILL.md
```

Content:

```md
---
name: award-website
summary: Build or redesign premium, Awwwards-aspiring websites from minimal input by researching, positioning, inventing creative concepts, sourcing/generating assets, implementing, screenshot-critiquing, and QA-checking the result.
---

Use this skill when the user says: website, landing page, Awwwards, premium, moon-level, creative site, portfolio, SaaS site, clinic site, restaurant site, e-commerce site, 3D website, immersive site, redesign, polish, or build from business type.

Read `ULTIMATE_WEBSITE_AGENT_OS.md` and follow it as the source of truth.

Required workflow:
1. Infer missing brief from business type.
2. Research market and competitors when internet is available.
3. Generate 5 concept territories.
4. Choose the strongest concept.
5. Define art direction and content plan.
6. Source or generate needed assets legally.
7. Implement the website.
8. Capture screenshots and critique.
9. Iterate until visual and QA gates pass.
10. Deliver final summary with commands and remaining risks.
```

### 6.4 Codex prompting pattern

The user should say:

```txt
Use the award-website skill.
Business type: [business type].
Make all decisions yourself unless money, publishing, or credentials are needed.
Build the complete site and run the gates.
```

Even shorter:

```txt
Use the award-website OS. Business type: [business type]. Build it fully.
```

### 6.5 Codex subagent instruction

When the task is non-trivial, ask Codex to spawn agents:

```txt
Spawn specialist agents for market research, creative direction, asset direction, frontend architecture, motion/3D, and QA. Wait for all results, synthesize the strongest direction, then implement.
```

### 6.6 Codex hook goals

Hooks should enforce:

- no secrets pasted,
- no paid tool usage without approval,
- no final answer if build fails,
- no final answer if screenshot critique has not run for creative builds,
- no final answer if asset manifest is missing for generated/licensed media.

---

## 7. Claude Code Compatibility

Claude Code can use this through `CLAUDE.md`, project skills, subagents, hooks, and MCP.

### 7.1 Root `CLAUDE.md` loader

```md
# CLAUDE.md

This project uses `ULTIMATE_WEBSITE_AGENT_OS.md` as the source of truth for high-end website creation.

For any website/design/build/redesign/polish task:
- follow the OS,
- infer missing brief from business type,
- use subagents when useful,
- use legal tools and assets only,
- run screenshot critique and QA before final delivery.
```

### 7.2 Claude subagent directory

```txt
.claude/agents/
  market-researcher.md
  creative-director.md
  art-director.md
  asset-director.md
  frontend-architect.md
  motion-webgl-engineer.md
  blender-asset-artist.md
  performance-a11y-auditor.md
  screenshot-critic.md
```

### 7.3 Universal fallback

If a tool does not support subagents, the main agent must produce role outputs sequentially.

---

## 8. Tool Strategy

The agent should use tools aggressively but responsibly.

### 8.1 Research tools

Use for:

- competitors,
- category expectations,
- pricing/offer norms,
- local market behavior,
- visual references,
- SEO keywords,
- regulatory claims.

Never rely only on memory for current markets, laws, pricing, products, software APIs, platform docs, or trends.

### 8.2 Browser tools

Use for:

- visual reference collection,
- testing built website,
- screenshots,
- mobile viewport review,
- console errors,
- Lighthouse,
- accessibility checks.

### 8.3 Image generation tools

Use for:

- hero visuals,
- campaign images,
- lifestyle scenes,
- abstract backgrounds,
- product compositions,
- social proof mockups clearly marked as placeholders,
- editorial imagery,
- textures.

Do not use image generation to create fake evidence, fake endorsements, fake real people who appear to be actual customers, or misleading product functionality.

### 8.4 Stock image tools

Use for:

- realistic local photos,
- industry scenes,
- people/lifestyle imagery,
- place-specific context,
- background textures.

Required:

- record source,
- record license,
- record author if required,
- preserve attribution when required.

### 8.5 Figma/design tools

Use for:

- token extraction,
- layout references,
- brand direction,
- moodboards,
- wireframes,
- client-facing design previews.

Do not blindly code messy Figma frames. Translate design into robust components.

### 8.6 Blender

Use for:

- symbolic hero objects,
- product models,
- abstract worlds,
- architectural/site metaphors,
- premium transition assets,
- material studies,
- icon-like 3D objects.

Avoid when:

- it is decorative only,
- it hurts performance,
- it does not support the concept,
- it delays clarity,
- mobile would suffer.

### 8.7 MCP and external systems

Use MCP/connectors when:

- data lives outside the repo,
- a design/file/project system must be accessed,
- a workflow repeats,
- a live service must be inspected,
- external docs need retrieval.

Recommended MCP/tool categories:

- GitHub,
- browser/Playwright,
- Figma,
- file system,
- design asset tools,
- image generation,
- search/docs,
- analytics,
- deployment,
- CMS.

### 8.8 Deployment tools

Use only with approval.

Possible platforms:

- Vercel,
- Netlify,
- Cloudflare Pages,
- Railway,
- Fly.io,
- static export,
- client-specific hosting.

Publishing to production requires explicit approval.

---

## 9. The Master Workflow

Every full build follows this sequence.

### Phase 0 — Setup scan

Tasks:

- inspect repo,
- identify framework,
- identify package manager,
- identify commands,
- identify existing design system,
- identify missing tooling,
- identify constraints.

Deliverable:

```txt
Repo type:
Framework:
Package manager:
Build command:
Dev command:
Test command:
Design system:
Risks:
```

If there is no repo, create one.

### Phase 1 — Business inference

From only the business type, infer:

- audience,
- buyer,
- user,
- offer,
- location,
- business maturity,
- conversion goal,
- credibility requirements,
- tone,
- trust barriers.

Deliverable:

```txt
Business assumption brief:
- Business:
- Audience:
- Buyer state:
- Primary conversion:
- Secondary conversion:
- Trust blockers:
- Required proof:
- Website category:
```

### Phase 2 — Research

The agent must research if internet is available.

Research:

- 5 to 10 competitors,
- 3 to 5 visual references,
- audience pain points,
- category clichés,
- trust signals,
- SEO/search intent,
- common CTAs,
- local market conventions if location matters.

Output:

```txt
Competitive landscape:
Common patterns:
Weaknesses in competitors:
Differentiation opportunity:
Trust signals to include:
Visual directions to avoid:
Visual directions worth exploring:
```

### Phase 3 — Positioning

Create a sharp position.

Framework:

```txt
For [audience] who struggle with [pain], [brand/product] is a [category] that delivers [outcome] through [mechanism], unlike [alternative], because [reason to believe].
```

Also create:

- one-line promise,
- emotional promise,
- practical promise,
- proof strategy,
- objection answers.

### Phase 4 — Concept competition

Generate 5 concept territories.

Each concept must include:

- name,
- one-sentence idea,
- visual metaphor,
- emotional target,
- typography direction,
- color/material world,
- asset needs,
- signature interaction,
- implementation complexity,
- risk,
- score.

Scoring:

```txt
Design /10
Usability /10
Creativity /10
Content /10
Business fit /10
Developer craft /10
Total /60
```

Reject any concept where:

- the metaphor is generic,
- the user would not understand the business,
- the signature interaction is unrelated,
- the site would be slow for no reason,
- mobile would become a weaker version.

### Phase 5 — Final creative brief

After choosing a concept:

```txt
Creative thesis:
Audience:
Primary CTA:
Story arc:
Visual metaphor:
Signature interaction:
Motion personality:
Asset direction:
Technical stack:
Performance budget:
Accessibility constraints:
```

### Phase 6 — Content system

Write the content before coding.

Required:

- hero headline,
- subheadline,
- CTA labels,
- problem section,
- mechanism section,
- service/product explanation,
- proof/trust section,
- process section,
- FAQ,
- final CTA,
- footer copy,
- metadata title/description,
- OG image concept.

Content rule:

> Every section must have one job.

### Phase 7 — Asset plan

For every visual, decide:

```txt
Asset:
Purpose:
Type: photo / generated image / illustration / SVG / icon / 3D / video / texture
Source method:
Prompt/search query:
License:
Optimization:
Fallback:
Alt text:
```

### Phase 8 — Implementation

Build in this order:

1. framework setup,
2. design tokens,
3. layout shell,
4. typography,
5. content sections,
6. responsive layout,
7. assets,
8. interactions,
9. forms,
10. metadata,
11. loading/error/404 states,
12. polish.

### Phase 9 — Visual inspection

Capture screenshots:

- desktop 1440px,
- laptop 1280px,
- tablet 768px,
- mobile 390px,
- menu open,
- form state,
- key interaction state,
- 404 page if present.

Critique:

```txt
Does it pass the 5-second test?
Does it look custom or template-like?
Is the hero memorable?
Is typography premium?
Is spacing confident?
Does mobile feel intentionally designed?
Does the signature interaction support the concept?
Are assets high quality and coherent?
What are the top 5 visual fixes?
```

Implement fixes.

### Phase 10 — QA gates

Run:

- install,
- typecheck,
- lint,
- tests,
- build,
- accessibility checks,
- browser console check,
- responsive screenshot check,
- performance check.

If a command does not exist, create or document the missing check.

### Phase 11 — Final handoff

Deliver:

- what was built,
- design concept,
- stack,
- assets used/generated,
- commands run,
- QA result,
- remaining risks,
- launch steps.

---

## 10. Website Type Decision Tree

### 10.1 Local service business

Examples:

- clinic,
- dentist,
- restaurant,
- gym,
- laundry,
- legal office,
- kids camp,
- car service,
- beauty salon.

Priorities:

- trust,
- location,
- proof,
- phone/WhatsApp,
- services,
- before/after if relevant,
- fast mobile,
- local SEO.

Default CTA:

- Call,
- WhatsApp,
- Book appointment,
- Get directions.

Avoid:

- heavy 3D,
- confusing immersive navigation,
- fake luxury with weak proof,
- hiding practical info.

### 10.2 SaaS / software

Priorities:

- positioning,
- product clarity,
- workflow explanation,
- screenshots/demo,
- use cases,
- integrations,
- pricing/demo CTA,
- trust and security.

Default CTA:

- Book demo,
- Start free trial,
- See product tour.

Avoid:

- fake dashboards,
- generic AI gradients,
- vague “streamline your workflow” copy.

### 10.3 Creative/agency/portfolio

Priorities:

- taste,
- selected work,
- case studies,
- point of view,
- signature interaction,
- contact.

Default CTA:

- View work,
- Start a project,
- Contact.

Avoid:

- too many projects,
- unreadable experimental navigation,
- animation overkill.

### 10.4 E-commerce

Priorities:

- product photography,
- product clarity,
- price,
- variants,
- trust,
- reviews,
- shipping/returns,
- checkout.

Default CTA:

- Add to cart,
- Buy now,
- Shop collection.

Avoid:

- creative checkout,
- hidden fees,
- slow product media.

### 10.5 Product launch / campaign

Priorities:

- emotion,
- concept,
- cinematic story,
- hero media,
- launch CTA,
- shareability.

Default CTA:

- Join waitlist,
- Preorder,
- Watch film,
- Explore.

### 10.6 Immersive / 3D experience

Priorities:

- concept,
- entry ritual,
- fast fallback,
- asset pipeline,
- interaction design,
- performance.

Default CTA:

- Enter experience,
- Explore product,
- View collection.

Must include:

- DOM fallback,
- reduced-motion mode,
- mobile adaptation,
- loader with real progress.

---

## 11. Business Inference Library

When the user gives only a business type, use these patterns.

### 11.1 Restaurant

Likely goal:

- reservations,
- delivery orders,
- menu views,
- location visits.

Trust signals:

- food photography,
- chef story,
- reviews,
- location,
- hygiene/quality,
- Instagram/social proof.

Creative concepts:

- ingredient journey,
- table ritual,
- fire/kitchen theater,
- city-night dining map,
- seasonal menu editorial.

Asset needs:

- hero food photo/video,
- interior shots,
- menu photography,
- chef/team photo,
- texture backgrounds.

### 11.2 Clinic / doctor

Likely goal:

- appointment booking,
- WhatsApp/call,
- trust and reassurance.

Trust signals:

- doctor credentials,
- specialties,
- patient process,
- location,
- insurance/payment info,
- real reviews if available.

Creative direction:

- calm clarity,
- human warmth,
- precise medical trust,
- soft light,
- clean typography.

Avoid:

- frightening medical imagery,
- fake patient claims,
- too much experimental interaction.

### 11.3 Construction company

Likely goal:

- project inquiries,
- portfolio trust,
- capabilities.

Trust signals:

- completed projects,
- process,
- licenses,
- safety,
- timelines,
- before/after,
- project scale.

Creative concepts:

- blueprint to building,
- material lab,
- skyline sequence,
- structural grid,
- site progress timeline.

### 11.4 Construction SaaS

Likely goal:

- demo bookings,
- product education,
- trust from construction operators.

Audience skepticism:

- field teams hate slow software,
- managers rely on WhatsApp/spreadsheets,
- owners want control without friction.

Creative concepts:

- chaos to live site map,
- WhatsApp/paper to operating system,
- blueprint turning into dashboard,
- command center for field reality.

### 11.5 Kids camp / education

Likely goal:

- parent inquiries,
- registrations,
- trust and excitement.

Audience:

- parents, not only kids.

Trust signals:

- safety,
- staff,
- activities,
- schedule,
- age groups,
- location,
- photos,
- testimonials if real.

Creative concepts:

- skill island,
- adventure map,
- badge progression,
- camp journal,
- future skills playground.

### 11.6 Luxury brand

Likely goal:

- desire,
- brand perception,
- product purchase/inquiry.

Creative direction:

- restraint,
- editorial typography,
- premium imagery,
- tactile materials,
- slow motion.

Avoid:

- fake luxury clichés,
- too many effects,
- over-explaining.

### 11.7 AI startup

Likely goal:

- demo/trial,
- investor/customer trust,
- differentiation from AI noise.

Trust signals:

- actual workflow,
- security,
- use cases,
- measurable outcomes,
- integrations,
- founder credibility.

Avoid:

- generic neural network visuals,
- meaningless “AI-powered” copy,
- fake dashboards.

---

## 12. Positioning System

### 12.1 Hero copy formulas

Outcome-first:

```txt
[Achieve valuable outcome] without [painful tradeoff].
```

Category creation:

```txt
The [new category] for [audience] who [urgent need].
```

Mechanism-led:

```txt
[Product/service] turns [messy pain] into [clear result] through [mechanism].
```

Trust-led:

```txt
[Specific audience] trust [brand] to [specific result].
```

Emotion-led:

```txt
A [feeling] way to [important activity].
```

### 12.2 Bad copy blacklist

Avoid:

- unlock your potential,
- seamless experience,
- next-generation solution,
- revolutionizing the future,
- innovative platform,
- powerful and scalable,
- modern solutions for modern teams,
- AI-powered everything,
- one-stop shop,
- world-class unless proven.

Replace with:

- specific audience,
- specific pain,
- specific mechanism,
- specific outcome,
- specific proof.

### 12.3 5-second test

Above the fold must answer:

1. What is this?
2. Who is it for?
3. Why should I care?
4. What can I do next?

If the hero fails, fix copy before effects.

---

## 13. Concept System

### 13.1 Concept quality test

A strong concept must:

- belong to the business,
- guide visuals and interaction,
- make the site memorable,
- be explainable in one sentence,
- improve clarity or desire,
- work on mobile.

### 13.2 Weak concept examples

Weak:

```txt
A modern website with 3D animations and smooth scrolling.
```

Weak:

```txt
A dark website with gradients and cards.
```

Weak:

```txt
A futuristic AI site with particles.
```

### 13.3 Strong concept examples

Strong:

```txt
A construction operations platform visualized as a live building blueprint that transforms chaos into measurable site progress.
```

Strong:

```txt
A kids skills camp presented as an adventure map where each activity unlocks confidence, teamwork, and creativity.
```

Strong:

```txt
A luxury skincare brand presented as a quiet mineral landscape where ingredients reveal themselves through soft material transitions.
```

### 13.4 Signature interaction rules

One signature interaction is better than ten unrelated tricks.

Good signature interactions:

- blueprint becomes dashboard,
- map route becomes service explanation,
- product material changes as benefits reveal,
- cursor becomes measuring tool,
- case studies unfold like film scenes,
- menu opens as a brand world,
- timeline becomes physical progress.

Bad signature interactions:

- random cursor blob,
- generic Spline object,
- unnecessary parallax on text,
- scroll hijacking,
- hover-only core information.

---

## 14. Art Direction System

### 14.1 Visual world formula

```txt
Mood: [emotion]
World: [metaphor/place/system]
Material: [surface/texture/light]
Typography: [voice]
Color: [palette logic]
Motion: [personality]
Sound: [silent/subtle/interactive]
```

Example:

```txt
Mood: calm authority
World: construction command room
Material: matte concrete, blueprint lines, luminous status signals
Typography: condensed display + clear grotesk body
Color: graphite, off-white, safety orange accent
Motion: measured, directional, precise
Sound: none by default
```

### 14.2 Typography rules

- Use one body family and one display family max.
- Use variable fonts where possible.
- Use `clamp()` for fluid scales.
- Large type must be tightly composed.
- Body text must be readable.
- Typography should do more work than decoration.

Suggested free fonts:

- Geist,
- Inter,
- Onest,
- Space Grotesk,
- Archivo,
- IBM Plex,
- Bricolage Grotesque,
- Instrument Serif,
- JetBrains Mono.

### 14.3 Color rules

- Do not use random gradients.
- Use one dominant world.
- Use one accent family.
- Use OKLCH where possible.
- Check contrast early.
- Use warm off-white or near-black instead of pure white/black when premium feeling matters.

### 14.4 Layout rules

- Use a strong grid.
- Break the grid intentionally.
- Create rhythm with whitespace.
- Avoid endless centered sections.
- Avoid repeated 3-card grids unless useful.
- Make mobile a designed experience, not squeezed desktop.

### 14.5 Material and texture

Use:

- subtle noise,
- matte surfaces,
- paper grain,
- metal/ceramic/glass when conceptually relevant,
- soft lighting,
- layered depth.

Avoid:

- random glassmorphism,
- overused mesh blobs,
- heavy shadows,
- amateur bloom/glitch.

---

## 15. Asset Creation and Image System

This section is critical. A website cannot compete visually with generic placeholders.

### 15.1 Asset decision tree

For each visual need, choose:

1. **Real user-provided media** — best when available.
2. **Licensed professional stock** — best for realistic human/business scenes.
3. **AI-generated imagery** — best for custom brand worlds, hero concepts, abstract visuals, editorial art, controlled campaigns.
4. **Custom SVG/illustration** — best for diagrams, icons, process visuals.
5. **Blender/3D** — best for product/object/metaphor scenes needing depth or materiality.
6. **CSS/canvas/shader generated visuals** — best for lightweight abstract backgrounds and interactive systems.

### 15.2 Asset manifest requirement

Create `ASSET_MANIFEST.md`:

```md
# Asset Manifest

| Asset | Purpose | Source | License/status | Prompt/query | File | Optimization | Alt text |
|---|---|---|---|---|---|---|---|
| hero-camp-map.avif | Hero visual | AI-generated | User-approved generated asset | prompt... | /public/images/... | AVIF 1600w | Children exploring supervised skills camp |
```

### 15.3 Generated photo policy

AI-generated images are acceptable when:

- they are clearly produced for the brand,
- they do not pretend to be real testimonials or documented events,
- they do not misrepresent a real facility/product/customer,
- they do not copy a living artist’s exact style,
- they are checked for realism and artifacts,
- they are optimized.

### 15.4 Image prompt framework

Use this structure:

```txt
Create a [type of image] for a [business type] website.
Subject: [what appears]
Audience: [who must trust/desire this]
Mood: [emotion]
Composition: [camera/lens/crop/layout]
Lighting: [lighting direction]
Material/color: [palette]
Brand constraints: [avoid clichés]
Usage: [hero/background/card/section]
Aspect ratio: [ratio]
Negative constraints: no text, no logos, no distorted hands, no fake awards, no stock-photo smile, no unrealistic UI.
```

### 15.5 Example image prompts

Kids camp hero:

```txt
Create a cinematic-but-realistic hero image for a premium kids and teenagers skills camp in Egypt. Subject: a supervised outdoor learning camp with a large elegant tent, skill stations, soft activity zones, and children/teenagers engaged in teamwork from a distance, faces not prominent. Mood: safe, aspirational, energetic, warm. Composition: vertical and horizontal crop-safe, wide establishing shot, foreground texture, clear open area for headline overlay. Lighting: golden hour natural light. Palette: warm sand, canvas beige, soft green, subtle colorful camp markers. Avoid: readable text, brand logos, chaotic crowd, unsafe activities, distorted people, fake badges.
```

Construction SaaS hero:

```txt
Create a premium editorial hero visual for a construction operations SaaS. Subject: a building blueprint transforming into a live digital operations map with subtle dashboard layers and field status markers. Mood: precise, powerful, controlled. Composition: dark graphite background, blueprint lines crossing into luminous interface panels, strong negative space for headline. Lighting: low-key cinematic, crisp technical glow. Avoid: generic AI robot, random hologram, fake unreadable dashboard text, clutter.
```

Restaurant hero:

```txt
Create a premium restaurant website hero image. Subject: a beautifully plated signature dish on a textured table with subtle kitchen fire glow in the background. Mood: intimate, appetizing, refined. Composition: close editorial crop with negative space for headline, shallow depth of field, natural steam. Palette: warm amber, deep brown, cream, one fresh green accent. Avoid: fake text, messy table, plastic-looking food, stock-photo people.
```

### 15.6 Stock photo search framework

Search terms should include:

```txt
[business type] [location/culture if relevant] [mood] [composition] [realistic/professional/editorial]
```

Examples:

- `premium dental clinic reception warm modern interior`
- `construction manager tablet site editorial photo`
- `kids summer camp outdoor skills workshop supervised`
- `luxury restaurant interior warm cinematic`

### 15.7 Image optimization rules

- Use AVIF/WebP where possible.
- Set width/height to prevent layout shift.
- Use responsive sizes.
- Use art-directed mobile crops.
- Lazy-load below-fold media.
- Preload only critical hero media.
- Avoid huge PNGs.
- Use SVG for icons and simple vector illustrations.

Target sizes:

```txt
Hero image: ideally 150–350 KB after optimization, larger only if LCP remains strong.
Section images: 80–200 KB.
Thumbnails: 20–80 KB.
SVG icons: as small as practical.
```

### 15.8 Alt text rules

Alt text should describe meaningful content, not repeat design language.

Good:

```txt
Children working together at supervised outdoor skill stations.
```

Bad:

```txt
Beautiful modern premium camp hero image.
```

Decorative assets use empty alt.

---

## 16. Blender and 3D Production Pipeline

3D can elevate a site, but only if it belongs.

### 16.1 3D earns its place when

- the product is physical,
- the concept needs spatial metaphor,
- the brand is creative/technical/luxury,
- one hero moment can become memorable,
- the 3D helps explain something.

### 16.2 3D does not earn its place when

- it is a generic blob,
- it slows the site,
- it distracts from conversion,
- mobile becomes weak,
- a still image would work better.

### 16.3 Blender workflow

1. Define the role of the 3D asset.
2. Sketch/prototype using simple primitives.
3. Build procedural geometry with Blender Python when possible.
4. Apply materials that match art direction.
5. Set origin, scale, naming, and hierarchy cleanly.
6. Bake or simplify lighting when possible.
7. Export GLB.
8. Optimize with `gltf-transform`.
9. Generate poster fallback image.
10. Integrate with Three.js/R3F.
11. Test mobile FPS.
12. Add reduced-motion fallback.

### 16.4 Blender Python starter pattern

```python
import bpy
from mathutils import Vector

bpy.ops.object.delete()

# Create a simple symbolic object
bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 0))
obj = bpy.context.object
obj.name = "Hero_Structure_Core"

mat = bpy.data.materials.new("Matte_Graphite")
mat.use_nodes = True
mat.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.05, 0.05, 0.055, 1)
mat.node_tree.nodes["Principled BSDF"].inputs["Roughness"].default_value = 0.78
obj.data.materials.append(mat)

# Camera
bpy.ops.object.light_add(type='AREA', location=(0, -3, 5))
bpy.context.object.name = "Softbox_Key"
bpy.context.object.data.energy = 400
bpy.context.object.data.size = 5

bpy.ops.object.camera_add(location=(3, -5, 3), rotation=(1.1, 0, 0.55))
bpy.context.scene.camera = bpy.context.object

# Export
bpy.ops.export_scene.gltf(filepath="public/models/hero-structure.glb", export_format='GLB')
```

### 16.5 GLB optimization

Use:

```bash
gltf-transform inspect input.glb
gltf-transform optimize input.glb output.glb --compress meshopt --texture-compress webp --texture-size 1024
```

### 16.6 Three/R3F integration rules

- Cap DPR: `[1, 1.5]`.
- Lazy-load 3D if not LCP-critical.
- Use Suspense fallback.
- Pause when offscreen or tab hidden.
- Use poster image fallback.
- Respect reduced motion.
- Avoid massive postprocessing.

---

## 17. Technical Stack Defaults

### 17.1 Default stack by site type

Marketing / SaaS:

```txt
Next.js App Router + TypeScript + Tailwind + Server Components + Motion/GSAP when needed
```

Static content / editorial:

```txt
Astro + MDX/CMS + optimized images
```

Immersive 3D:

```txt
Next.js or Vite + Three.js/R3F/OGL + GSAP + asset pipeline
```

Web app/dashboard:

```txt
Next.js App Router + TypeScript strict + Postgres + Drizzle + TanStack Query + React Hook Form + Zod
```

E-commerce:

```txt
Next.js + Shopify/Medusa/Stripe/Paddle/Lemon Squeezy with hosted checkout
```

### 17.2 Framework decision

Choose Astro when:

- mostly static,
- content-heavy,
- SEO/readability matters,
- little client state.

Choose Next.js when:

- app routes,
- forms/actions,
- auth,
- dynamic data,
- hybrid marketing/app,
- strong deployment path.

Choose Vite when:

- standalone SPA/experience,
- SEO is less important,
- interactive experiment.

### 17.3 CSS rules

- Tailwind is allowed, but must be heavily customized.
- Use CSS variables and semantic tokens.
- Use container queries.
- Use `clamp()`.
- Use modern CSS before JS.
- Avoid random one-off values everywhere.

### 17.4 Component rules

Use proven primitives for:

- dialogs,
- dropdowns,
- comboboxes,
- date pickers,
- tables,
- forms,
- tooltips.

Never roll your own:

- auth security,
- payments,
- password hashing,
- complex accessibility primitives,
- rich text editor,
- data table engine.

---

## 18. Motion and Interaction

Motion must confirm, guide, or reward.

### 18.1 Motion roles

Confirm:

- button press,
- form success,
- toggle state,
- saved state.

Guide:

- section reveal,
- scroll progress,
- focus transition,
- route transition.

Reward:

- hero entry,
- project reveal,
- success moment,
- delightful hover.

### 18.2 Motion personality

Define one:

- luxury: slow, smooth, quiet,
- technical: precise, directional,
- playful: elastic, lively,
- cinematic: long easing, depth,
- organic: soft drift,
- brutalist: sharp and minimal.

### 18.3 Reduced motion

Every motion plan must include reduced-motion behavior.

- Disable smooth scroll.
- Disable parallax.
- Replace large movement with opacity/state changes.
- Keep content complete.

### 18.4 Scroll rules

Allowed:

- scroll-linked reveals,
- sticky storytelling,
- one horizontal/pinned section when meaningful,
- camera progress if natural.

Avoid:

- scroll-jacking,
- forced section snapping,
- animations that fight the user,
- delaying content for theatrics.

---

## 19. Page Architecture Patterns

### 19.1 Premium local service homepage

1. Hero with clear promise + CTA.
2. Trust strip.
3. Services overview.
4. Why this business / differentiation.
5. Process.
6. Proof / reviews / real results.
7. Gallery / environment.
8. FAQ.
9. Final CTA.
10. Footer with location/contact.

### 19.2 SaaS homepage

1. Hero promise.
2. Product visual.
3. Pain section.
4. Mechanism / how it works.
5. Workflow/product tour.
6. Use cases.
7. Integrations/security.
8. Proof.
9. Pricing/demo.
10. FAQ.
11. Final CTA.

### 19.3 Creative portfolio

1. Identity hook.
2. Signature interaction.
3. Selected work.
4. Deep case studies.
5. Process.
6. About.
7. Contact.

### 19.4 Product launch

1. Entry hook.
2. Product reveal.
3. Problem/emotion.
4. Feature story.
5. Proof/specs.
6. Social/share moment.
7. CTA.

### 19.5 E-commerce product page

1. Product media.
2. Clear name/price.
3. Benefit bullets.
4. Variants.
5. Add to cart.
6. Shipping/returns.
7. Reviews.
8. Details/specs.
9. Related products.

---

## 20. SEO and Metadata

Required:

- unique title,
- unique description,
- canonical,
- Open Graph image,
- sitemap,
- robots,
- structured data where relevant,
- semantic headings,
- local business schema for local businesses,
- product schema for products,
- article schema for editorial.

Local service metadata example:

```txt
Title: [Service] in [Location] — [Brand]
Description: [Brand] helps [audience] get [outcome] through [service]. Book by phone, WhatsApp, or online.
```

---

## 21. Performance Gates

Performance is design.

### 21.1 Core targets

- LCP under 2.5s in field target.
- INP under 200ms in field target.
- CLS under 0.1.
- Lighthouse mobile 90+ when realistic.
- No console errors.
- No oversized media.

### 21.2 Budgets

Basic marketing site:

```txt
Initial JS: < 200 KB gzipped target
Total page: < 3 MB target
Hero image: optimized and prioritized
```

3D creative site:

```txt
Total page: < 5–7 MB target
GLB hero: ideally < 1 MB compressed
DPR capped
Fallback poster required
```

### 21.3 Optimization checklist

- Server render content.
- Minimize client components.
- Dynamic import heavy sections.
- Optimize images.
- Subset fonts.
- Lazy-load below fold.
- Pause offscreen animation.
- Use transforms/opacity.
- Avoid layout animation.
- Bundle analyze.

---

## 22. Accessibility Gates

Accessibility is quality.

Required:

- semantic HTML,
- one H1,
- logical headings,
- labels on fields,
- keyboard navigation,
- visible focus,
- color contrast,
- alt text,
- reduced motion,
- touch targets,
- no keyboard traps,
- accessible dialogs/menus,
- meaningful link text.

Creative sites still require:

- DOM content fallback,
- mute controls for audio,
- pause controls for meaningful motion/video,
- WebGL not required to access key content.

---

## 23. Screenshot Critique Rubric

The agent must inspect the actual rendered result.

Score each 1–10:

```txt
Above-fold clarity:
Visual originality:
Typography:
Spacing/layout:
Asset quality:
Mobile design:
Interaction quality:
Conversion clarity:
Trust:
Overall memorability:
```

Automatic fail if:

- looks like default shadcn/template,
- generic SaaS gradient hero,
- no clear CTA,
- mobile is broken,
- text is unreadable,
- images look fake/bad,
- 3D slows or distracts,
- contrast fails,
- keyboard navigation fails.

Minimum target:

```txt
Commercial premium site: 8/10 average
Awwwards-aspiring site: 8.8/10 average
Moonshot site: 9.2/10 average with no score below 8
```

---

## 24. QA Commands

Use the project’s actual package manager.

Common commands:

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

If scripts are missing, add reasonable scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

Browser QA:

```bash
npx playwright test
npx playwright codegen http://localhost:3000
npx lighthouse http://localhost:3000 --view
```

Accessibility:

```bash
npx @axe-core/cli http://localhost:3000
```

If command fails due to missing dependency, install it only if appropriate and explain.

---

## 25. Final Delivery Format

Final response must include:

```txt
Built:
Concept:
Stack:
Pages:
Assets:
Generated media:
3D/Blender assets:
Commands run:
QA result:
Known limitations:
Next launch steps:
```

Do not claim tests passed if they were not run.

Do not claim production-ready if build failed.

---

## 26. One-Prompt User Interface

The user should only need one of these prompts.

### 26.1 Business type only

```txt
Use the Ultimate Moon-Level Website Agent OS.
Business type: [business type].
Make the complete website. Infer everything else. Use legal tools/assets. Ask only if money, publishing, or credentials are required.
```

### 26.2 With location

```txt
Use the Ultimate Moon-Level Website Agent OS.
Business type: [business type].
Location/market: [country/city].
Build the full site from strategy to QA.
```

### 26.3 With style ambition

```txt
Use the Ultimate Moon-Level Website Agent OS.
Business type: [business type].
Ambition: Awwwards-level creative but still conversion-focused.
Build it fully.
```

### 26.4 With repo

```txt
Use the Ultimate Moon-Level Website Agent OS on this repo.
Business type: [business type].
Audit what exists, redesign if needed, implement, screenshot critique, optimize, and run QA.
```

### 26.5 With generated assets

```txt
Use the Ultimate Moon-Level Website Agent OS.
Business type: [business type].
Generate or source all needed imagery legally, create an asset manifest, optimize assets, and build the full site.
```

---

## 27. Built-In Prompt for Codex

Paste this into Codex when starting a new site:

```txt
Use the award-website workflow from ULTIMATE_WEBSITE_AGENT_OS.md.

Business type: [INSERT BUSINESS TYPE]
Market/location if relevant: [INSERT OR OMIT]
Ambition: moon-level, Awwwards-aspiring, but still clear and conversion-focused.

You have authority to:
- infer missing business details,
- research competitors and visual references,
- define positioning,
- generate 5 creative concepts,
- choose the strongest,
- write all copy,
- create/source/generate assets legally,
- build the website,
- run screenshot critique,
- iterate visual polish,
- run QA commands,
- prepare final handoff.

You must ask approval before:
- spending money,
- using paid APIs/subscriptions,
- publishing/deploying,
- accessing credentials,
- using private client data externally.

Spawn specialist agents where useful. Keep the main thread focused. Do not stop at a plan unless blocked. Build the site.
```

---

## 28. Autonomous Image Generation Playbook

When the site needs images and the user did not provide any:

1. Decide required images.
2. Decide whether stock, generated, SVG, 3D, or CSS is best.
3. Create prompts/search queries.
4. Generate/source images.
5. Inspect for artifacts.
6. Reject weak images.
7. Optimize.
8. Add alt text.
9. Record in asset manifest.
10. Integrate into the site.

### 28.1 Generated image quality checklist

Reject image if:

- hands/faces are distorted,
- text is gibberish,
- layout does not fit crop,
- lighting does not match brand,
- it looks like generic AI art,
- it misrepresents real business proof,
- it clashes with the design system.

### 28.2 When to use abstract generated visuals

Good for:

- AI tools,
- luxury material worlds,
- campaign atmospheres,
- conceptual hero art,
- texture systems,
- impossible metaphors.

### 28.3 When to use realistic generated visuals

Good for:

- placeholder lifestyle scenes,
- controlled mood imagery,
- concept presentations.

Be careful with:

- clinics,
- legal/financial services,
- education/safety claims,
- before/after results,
- product claims.

Use real photos when authenticity matters.

---

## 29. “Make It Not Generic” Rules

A site is generic if:

- the hero could belong to any company,
- the headline uses vague buzzwords,
- the layout is centered headline + gradient button + 3 cards,
- the images are stock clichés,
- the icon style is random,
- the motion is decorative,
- the colors are default Tailwind/shadcn,
- the typography has no voice.

To make it specific:

- use category-specific metaphors,
- show the actual workflow/product/service,
- use real objections in copy,
- design one signature interaction,
- pick a material world,
- tailor the CTA,
- choose assets that could only belong to this business.

---

## 30. Red Team Checklist

Before final delivery, ask:

1. Would a visitor understand the business in 5 seconds?
2. Would the buyer trust this company?
3. Does the site feel custom-made?
4. Is there one memorable idea?
5. Is the CTA obvious?
6. Does mobile feel premium?
7. Are images coherent and high quality?
8. Are claims honest?
9. Are assets legal?
10. Does build pass?
11. Does keyboard navigation work?
12. Does reduced motion work?
13. Is performance acceptable?
14. Are there console errors?
15. Would this embarrass us in front of a senior designer?

If any answer is bad, fix before final.

---

## 31. Anti-Patterns to Refuse

Refuse or redirect:

- autoplay audio with sound,
- disabling zoom,
- scroll-jacking,
- hidden navigation for no reason,
- hover-only essential info,
- fake testimonials,
- fake stats,
- fake client logos,
- pirated assets,
- bypassed paywalls,
- stolen templates,
- copying competitor sites,
- copying living artists’ exact styles,
- storing payment cards,
- exposing secrets,
- heavy 3D with no purpose,
- generic blobs as “premium design,”
- shipping without mobile review,
- shipping with failed build.

Better response:

```txt
I would avoid that because [reason]. A stronger approach is [alternative].
```

---

## 32. Deliverable Files for a Serious Website

A complete project should include:

```txt
README.md
AGENTS.md
ULTIMATE_WEBSITE_AGENT_OS.md
ASSET_MANIFEST.md
DESIGN_BRIEF.md
QA_REPORT.md
.env.example
app/ or src/
components/
lib/
public/images/
public/models/
public/fonts/
public/og/
```

`DESIGN_BRIEF.md` should include:

```txt
Business assumptions
Audience
Positioning
Creative concept
Art direction
Content plan
Asset plan
Technical plan
```

`QA_REPORT.md` should include:

```txt
Commands run
Screenshots reviewed
Accessibility notes
Performance notes
Known issues
Launch checklist
```

---

## 33. Awwwards-Aspiring Scoring

Use this as a practical lens.

### Design — 40%

- typography,
- composition,
- color,
- art direction,
- visual originality,
- detail quality.

### Usability — 30%

- clarity,
- navigation,
- CTA,
- mobile,
- forms,
- interaction sanity.

### Creativity — 20%

- concept,
- metaphor,
- signature interaction,
- memorability.

### Content — 10%

- specificity,
- proof,
- copy rhythm,
- usefulness.

Developer craft overlay:

- performance,
- accessibility,
- SEO,
- semantics,
- responsive quality,
- clean code,
- asset optimization.

---

## 34. Example: From Business Type to Full Direction

Input:

```txt
Business type: premium laundry pickup and delivery in Cairo
```

Agent inference:

```txt
Audience: busy professionals and families in Cairo.
Pain: laundry is time-consuming, unreliable, and hard to track.
Goal: WhatsApp/order booking.
Trust blockers: garment care, pickup reliability, pricing transparency, lost items.
Positioning: premium garment care that feels trackable, safe, and effortless.
```

Concepts:

```txt
1. The Garment Journey — clothes move through a transparent care system.
2. Cairo Clean Route — pickup/delivery visualized as elegant city routes.
3. Wardrobe Concierge — premium calm service around personal clothing care.
4. Fabric Lab — material-focused expertise and stain science.
5. Time Returned — laundry transformed into reclaimed family/work time.
```

Chosen direction:

```txt
Cairo Clean Route: a premium route-and-fabric visual system showing laundry as a controlled journey from door to spotless return.
```

Asset plan:

```txt
- Hero: generated/editorial image of folded garments with subtle Cairo route lines.
- Process icons: SVG line icons.
- Trust section: garment tags, sealed bags, driver pickup.
- Map route background: CSS/SVG.
```

CTA:

```txt
Book a pickup on WhatsApp
```

---

## 35. Example: From SaaS Type to Full Direction

Input:

```txt
Business type: construction distributor operations SaaS in Egypt
```

Agent inference:

```txt
Audience: owners/managers of small and mid-size distributors.
Pain: orders, drivers, inventory, collections, WhatsApp, paper, and sales reps are disconnected.
Goal: demo booking.
Skepticism: software slows workers down.
Required belief: the system is faster than WhatsApp/paper and gives owners control.
```

Chosen concept:

```txt
The Live Distribution Map: every order, van, invoice, and collection becomes a moving operational map.
```

Signature interaction:

```txt
Scroll transforms chaotic WhatsApp/order fragments into a clean live dispatch board.
```

Assets:

```txt
- custom dashboard mockups,
- generated route/map abstraction,
- SVG order flow diagrams,
- optional 3D stack of invoice/order cards.
```

---

## 36. Human Approval Boundaries

The agent must stop and ask before:

- spending money,
- publishing,
- sending email/SMS,
- contacting third parties,
- buying domains,
- creating paid accounts,
- using real customer data in external tools,
- making medical/legal/financial regulated claims,
- launching ads,
- changing DNS,
- connecting production payment systems.

The agent may proceed without asking for:

- design decisions,
- copy drafts,
- generated placeholder imagery,
- local dev setup,
- tests,
- screenshots,
- local asset optimization,
- non-production code changes.

---

## 37. Continuous Improvement Loop

After each project, update the OS or project instructions with:

- repeated mistakes,
- best prompts,
- successful visual patterns,
- failed asset prompts,
- QA failures,
- stack fixes,
- performance lessons,
- client preferences.

Never bloat the root instructions with low-value detail. Keep root guidance short and put repeatable workflows into skills.

---

## 38. Final Standard

The website is not done when code exists.

The website is done when:

- the concept is clear,
- the business is understandable,
- the design feels custom,
- the assets are coherent,
- the copy is specific,
- the CTA is obvious,
- the site works on mobile,
- the site is accessible,
- the site is fast enough,
- the build passes,
- the screenshots look strong,
- the remaining risks are honestly documented.

End of document.
