# 26 — Three.js / R3F Code Recipes

## Poster-to-Canvas Pattern

```tsx
"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const Scene = dynamic(() => import("./Scene").then(m => m.Scene), {
  ssr: false,
  loading: () => null,
})

export function HeroVisual() {
  const [ready, setReady] = useState(false)

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
      <Image
        src="/images/hero-poster.webp"
        alt=""
        fill
        priority
        className={`object-cover transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
        <Scene onReady={() => setReady(true)} />
      </div>
    </div>
  )
}
```

## Reduced Motion Hook

```tsx
import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(media.matches)
    const handler = () => setReduced(media.matches)
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])

  return reduced
}
```

## Visibility Pause

```tsx
import { useEffect, useState } from "react"

export function usePageVisible() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onChange = () => setVisible(!document.hidden)
    document.addEventListener("visibilitychange", onChange)
    return () => document.removeEventListener("visibilitychange", onChange)
  }, [])

  return visible
}
```

## R3F Frame Rule

Do not do this:
```tsx
useFrame(() => setState(x))
```

Prefer:
```tsx
const ref = useRef<THREE.Group>(null)

useFrame((state, delta) => {
  if (!ref.current) return
  ref.current.rotation.y += delta * 0.2
})
```

## Mobile Quality Switch

```tsx
const isMobile = typeof window !== "undefined" && window.innerWidth < 768

<Canvas
  dpr={isMobile ? [1, 1] : [1, 1.5]}
  shadows={!isMobile}
>
```

## Pointer Events

Canvas should not block DOM CTA unless it needs interaction.

```css
.canvasDecorative {
  pointer-events: none;
}
```

If interactive, keep CTA outside and above canvas.
