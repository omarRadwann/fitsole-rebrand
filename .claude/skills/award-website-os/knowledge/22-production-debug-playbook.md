# 22 — Production Debug Playbook

## Mission

When things break, debug like a senior engineer.

## Build Fails

Steps:
1. Read first real error, not all noise.
2. Identify file/line.
3. Check recent changes.
4. Fix root cause.
5. Re-run build.
6. If dependency issue, inspect package/version.
7. Avoid random package upgrades unless necessary.

## Hydration Errors

Common causes:
- random values during render
- date/time during render
- client-only APIs on server
- mismatched theme
- window/document usage
- animation measuring before mount

Fix:
- move to client effect
- use mounted state
- avoid non-deterministic render
- server-render stable fallback

## Layout Broken

Check:
- container max width
- overflow-x
- absolute positioning
- z-index
- mobile breakpoint
- image dimensions
- long text wrapping
- fixed heights
- viewport units

## Animation Broken

Check:
- element exists before animation
- cleanup on unmount
- reduced motion
- ScrollTrigger refresh
- image/font load timing
- CSS transform conflicts
- mobile disabled state

## 3D Broken

Check:
- GLB path
- public folder path
- model scale
- camera position
- lights
- material compatibility
- texture path
- Suspense fallback
- canvas z-index/pointer events

## Performance Bad

Check:
- huge images
- huge videos
- too much JS
- too many client components
- Three.js loaded too early
- expensive shadows/postprocessing
- layout thrashing scroll handlers
- fonts too heavy

## Accessibility Broken

Check:
- div used as button
- focus not visible
- menu not keyboard reachable
- dialog lacks focus trap
- form labels missing
- contrast too low
- hover-only info
- reduced motion ignored

## Deployment Broken

Check:
- env variables
- build command
- Node version
- missing public assets
- case-sensitive file paths
- API routes
- dynamic/static rendering mismatch
- image domain config
