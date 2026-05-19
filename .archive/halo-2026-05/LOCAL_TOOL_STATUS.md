# Local Tool Readiness — test1 (Halo + V7 OS workbench)

**Recorded:** 2026-05-18
**Branch:** os-upgrade-v7
**Machine:** Windows 11 Pro, PowerShell + Git Bash

## QA tool chain

| Tool | Version | Status | Path / Install |
|---|---|---|---|
| Node.js | v24.14.0 | **Verified** | system PATH |
| npm | 11.12.0 | **Verified** | system PATH |
| Playwright (`@playwright/test`) | 1.60.0 | **Verified** | local devDep + Chromium 148.0.7778.96 at `C:\Users\acer\AppData\Local\ms-playwright\chromium_headless_shell-1223` |
| Lighthouse CI (`@lhci/cli`) | 0.15.1 | **Verified** | local devDep |
| axe-core CLI (`@axe-core/cli`) | 4.11.3 | **Verified** | local devDep |
| Blender | 5.1.1 (build 2026-04-14) | **Verified** | `E:\blender.exe` |
| Image generation API | — | **Not run** — not requested by user, no key configured |

## What this satisfies in V7

- `screenshot-critic` — Playwright headless Chromium for repeatable screenshots
- `release-qa-master` — Playwright for end-to-end browser checks
- `gpu-performance-master` — Lighthouse Core Web Vitals + Performance audit
- `accessibility-ux-master` — axe-core for WCAG 2.2 AA gating
- `blender-production-master` — Blender 5.1.1 for the existing Halo sculpture pipeline (`blender/apogee_sculpture.py`) and any future 3D work
- `image-generation-director` — **degraded**: no paid API enabled. Per V7 truthfulness gate, any generated-asset claim must be labeled `Not run` or `Blocked` until a key is provided.

## Local-only (not in git)

`package.json`, `package-lock.json`, and `node_modules/` are gitignored. These tools are installed for this machine only. Re-running `npm i` reproduces them anywhere with the same `package.json` (regenerate via `npm i -D @playwright/test @lhci/cli @axe-core/cli`).

## How to run the tools

From `test1/` repo root:

```powershell
# Live preview (required before Playwright/Lighthouse/axe — they hit URLs, not files)
python -m http.server 8765

# Playwright screenshot
npx playwright screenshot http://localhost:8765 docs/visual-review-home.png --viewport-size=1440,900

# Lighthouse on home
npx lhci collect --url=http://localhost:8765/ --numberOfRuns=1

# axe a11y scan
npx axe http://localhost:8765/ --save=docs/axe-home.json

# Blender re-bake (writes the four GLBs into blender/)
& 'E:\blender.exe' -b -P blender/apogee_sculpture.py
```

## Reproducibility note

If `tooling/LOCAL_TOOL_STATUS.md` is missing on another machine, re-run:

```powershell
npm i -D @playwright/test @lhci/cli @axe-core/cli
npx playwright install --with-deps chromium
# Verify Blender at expected path; update LOCAL_TOOL_STATUS.md if it moved
```
