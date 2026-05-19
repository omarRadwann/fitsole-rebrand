'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { getSoundManager } from '@/lib/audio/SoundManager'

/*
 * Cross-document View Transitions for App Router.
 *
 * Chromium 126+: same-document transitions opt-in via document.startViewTransition.
 * Other browsers: opacity fade fallback handled by globals.css [data-pt] keyframe.
 *
 * App Router navigations are SPA — we use document.startViewTransition on
 * pathname change. SSR-safe via dynamic check.
 *
 * Also: fires a quiet page-navigate sfx if sound is enabled.
 */
export function PageTransition() {
  const pathname = usePathname()
  const first = useRef(true)

  useEffect(() => {
    if (typeof document === 'undefined') return
    // Always tag a transition; CSS fallback applies if View Transitions unavailable.
    const html = document.documentElement
    html.setAttribute('data-pt', 'enter')
    const t = setTimeout(() => html.removeAttribute('data-pt'), 420)

    // Skip sfx on first paint (we don't ring on mount).
    if (!first.current) {
      const s = getSoundManager()
      if (s.isEnabled) s.play('pageNavigate')
    } else {
      first.current = false
    }
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
