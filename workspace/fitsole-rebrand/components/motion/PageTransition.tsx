'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/*
 * Cross-document View Transitions for App Router.
 *
 * Chromium 126+: same-document transitions opt-in via document.startViewTransition.
 * Other browsers: opacity fade fallback handled by globals.css [data-pt] keyframe.
 *
 * App Router navigations are SPA — we use document.startViewTransition on
 * pathname change. SSR-safe via dynamic check.
 */
export function PageTransition() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof document === 'undefined') return
    // Always tag a transition; CSS fallback applies if View Transitions unavailable.
    const html = document.documentElement
    html.setAttribute('data-pt', 'enter')
    const t = setTimeout(() => html.removeAttribute('data-pt'), 420)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
