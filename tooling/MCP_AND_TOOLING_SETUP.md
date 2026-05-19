# MCP and Tooling Setup

This document explains how to wire the pack's tooling for full automation. Skipping these is allowed — the pack runs without them — but specialist coverage tightens with each one configured.

## What this pack assumes by default

- **Claude Code** is the runtime. Skills auto-trigger from descriptions; slash commands live in `.claude/commands/`.
- **Node.js 20+** is installed (the starter's `package.json` engines have not been pinned to allow flexibility, but Next.js 15 requires Node 18.18+).
- **Playwright** is the screenshot tool. Auto-installed when the starter's deps install.

## MCP servers — recommended (optional)

The pack does not require any MCP servers, but the following sharpen specialist work:

| Server | Specialist that benefits | Purpose |
|---|---|---|
| `playwright-mcp` | screenshot-critic, accessibility-ux-master | Lets specialists capture screenshots and inspect DOM live, not from static files. |
| `puppeteer-mcp` | screenshot-critic | Alternative to Playwright; lighter for simple captures. |
| `filesystem-mcp` | all | Faster file inspection across the pack. |
| `fetch-mcp` | market-researcher, reference-mining | Reads competitor sites and reference sites end-to-end. |
| Vendor MCPs (Vercel, Stripe, Sanity, etc.) | release-qa-master, master-technical-director | Read deploy state, payment integration health, CMS data. |

Add them in Claude Code's MCP config (typically `~/.config/claude-code/mcp.json` or via the Claude Desktop settings UI). The pack does not ship MCP configuration files — those are user-account-scoped, not project-scoped.

## Paid tools — when used

Paid tools are logged in `docs/tool-use-log.md` and `docs/paid-tools-and-apis-runbook.md`. Common categories:

| Category | Tools commonly used | When |
|---|---|---|
| Image generation | Midjourney, Flux, SDXL, Recraft, Krea | Hero / section imagery when real photography isn't sourced. |
| 3D | Spline (Pro), Polycam, Tripo, Luma | Concept-tied 3D scenes. |
| 3D rendering | Blender (free) | Poster renders, GLB optimization. |
| Motion / video | Runway, Pika, Sora, Veo | Short cinematic moments. |
| Fonts | Pangram Pangram, Klim, Commercial Type, Adobe Fonts | Display + body type. |
| Stock | Pexels (free), Unsplash (free), Adobe Stock, Getty | Real imagery when generated won't serve. |
| Analytics | Plausible, Fathom (privacy-respecting) | Conversion tracking. |
| Hosting | Vercel, Netlify, Cloudflare Pages | Deploy targets. |

**Approval flow**: any paid tool use requires the user to explicitly approve it (or have pre-approved a category in their first turn). The asset-pipeline-master will block on tools not explicitly approved.

## Credentials

- All credentials go in `workspace/<slug>/.env.local` (gitignored by the starter).
- The starter ships `.env.example` to document what's needed without leaking values.
- The release-qa-master verifies no credentials are committed before ship.

## CI / hosting integration (out of scope for the pack)

The pack does not configure CI / deploy pipelines. The user owns:

- Domain / DNS.
- Hosting account.
- Production secret storage (Vercel/Netlify env vars, etc.).
- GitHub / GitLab repo creation and access.

The orchestrator never deploys; it produces a launchable build and a launch checklist.

## When something is missing

If a specialist needs an MCP / paid tool / credential the user hasn't supplied:
- The work item is labeled `Blocked` in `docs/ship-decision.md`.
- The blocker is named plainly (which tool, why, what's the fallback).
- The pack will refuse to call the project `Ship` until the block is either resolved or explicitly disclosed.
