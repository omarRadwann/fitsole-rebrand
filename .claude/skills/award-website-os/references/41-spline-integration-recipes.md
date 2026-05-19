# 41 — Spline Integration Recipes

## Use cases

Spline is appropriate for:

- premium hero scenes
- product storytelling
- interactive brand objects
- spatial navigation moments
- simple product configurators
- lightweight animated scene embeds

## Preferred Next.js integration

Use `@splinetool/react-spline` with dynamic import and no server-side rendering. Always provide a static or CSS fallback.

```tsx
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="hero-poster" aria-hidden="true" />
});
```

## Required production behavior

- Do not load Spline before critical content unless it is the central product experience.
- Hide or replace Spline on reduced-motion mode.
- Use a poster fallback on low-power mobile.
- Keep navigation and conversion actions outside the canvas.
- Record the scene source and asset rights.
- Capture screenshots before claiming visual quality.

## Claude Code limitation

Claude Code can integrate the exported scene. Claude Code cannot reliably edit a Spline design file unless the workflow provides authenticated browser/tool access and the user approves it. When no scene is supplied, Claude Code should either build a code-native R3F scene or create a precise Spline brief for a designer.

## Handoff brief

A Spline handoff should include:

- scene purpose
- camera behavior
- interaction events
- material direction
- exported URL/file
- fallback image
- asset rights
- performance budget
