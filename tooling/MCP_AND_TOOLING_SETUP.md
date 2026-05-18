# MCP and Tooling Setup

This package defines workflows. It does not magically connect external tools.

## Tooling Matrix

| Need | Minimum | Better | Evidence |
|---|---|---|---|
| Web/category research | browser/search | browser MCP/search API | docs/research-brief.md |
| Rendered screenshots | manual browser | Playwright/browser MCP | docs/visual-review.md |
| Image generation | approved image tool | image API/workflow | docs/asset-ledger.csv |
| 3D assets | Blender installed | Blender + gltf-transform | asset-ledger + model files |
| Accessibility | manual keyboard | axe + Lighthouse | docs/qa-report.md |
| Performance | build + manual | Lighthouse/WebPageTest | docs/qa-report.md |
| Deployment | none | Vercel/Cloudflare/Railway | docs/ship-decision.md |

## Recommended Local Tools

Install as needed:
- Node.js LTS
- pnpm/npm
- Git
- Playwright
- Lighthouse CLI
- axe CLI
- Blender
- gltf-transform

## Approval Boundaries

The agent must ask before:
- spending money
- using paid credits
- publishing/deploying
- connecting real customer data
- using private credentials
- sending emails/forms to real users
- using copyrighted/unclear assets
