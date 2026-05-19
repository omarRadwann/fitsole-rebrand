# 39 — Web-Native 3D Toolchain 2026

## Purpose

Give Claude Code a decision framework for modern Awwwards-style 3D websites. Do not make Blender the default for every 3D need. Do not make Spline the default when Claude Code needs full local control. Choose the tool that matches the production job.

## Recommended hierarchy

1. **R3F / Three.js** when the scene must be fully code-owned, responsive, stateful, inspectable, and testable inside the repo.
2. **Spline** when a web-native interactive scene is supplied or can be exported by the user/designer, and Claude Code mainly needs to integrate, fallback, and optimize the website around it.
3. **Blender Python** when procedural GLB assets, poster renders, or custom geometry can be generated reproducibly from scripts.
4. **Cinema 4D / Houdini / Unreal / Vectary / AI 3D** when the project has source files, exports, or approved external-tool access.

## Claude Code execution reality

Claude Code is strongest where files, scripts, package managers, tests, and screenshots exist. That makes code-native R3F and Blender automation highly compatible with Claude Code. Spline is excellent for web 3D, but Claude Code usually needs a supplied export URL or file because the visual editor is an external SaaS environment.

## Default production stack

- Next.js App Router
- TypeScript
- React Three Fiber
- Three.js
- Drei
- GSAP
- Framer Motion
- Theatre.js only for keyframed cinematic sequences
- Spline React integration when a scene export is supplied
- glTF/GLB with glTF-Transform optimization
- Playwright screenshots
- reduced-motion and mobile fallbacks

## Senior rule

The best tool is the one that makes the idea clearer, faster, and more memorable without damaging loading, accessibility, or conversion.
