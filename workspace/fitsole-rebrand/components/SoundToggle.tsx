'use client'

import { useEffect, useState } from 'react'
import { getSoundManager } from '@/lib/audio/SoundManager'

/*
 * Header-mounted sound toggle.
 * - Persisted via SoundManager (localStorage).
 * - On enable: also unlocks AudioContext via user gesture (the click).
 * - Default muted — explicit per the rebrand discipline.
 */
export function SoundToggle() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const s = getSoundManager()
    setEnabled(s.isEnabled)
    return s.subscribe(setEnabled)
  }, [])

  return (
    <button
      type="button"
      onClick={() => getSoundManager().toggle()}
      aria-pressed={enabled}
      aria-label={enabled ? 'Sound on — click to mute' : 'Sound off — click to enable'}
      data-cursor={enabled ? 'Mute' : 'Sound'}
      className="hover:opacity-70 transition-opacity focus:outline-none focus-visible:opacity-70 inline-flex items-center gap-1.5 font-mono text-eyebrow tracking-[0.18em] text-fg-muted"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 9v6h4l5 4V5L8 9H4z" />
        {enabled ? (
          <>
            <path d="M16 8a5 5 0 0 1 0 8" />
            <path d="M19 5a9 9 0 0 1 0 14" />
          </>
        ) : (
          <path d="M16 9l5 6M21 9l-5 6" />
        )}
      </svg>
      <span className="hidden sm:inline">{enabled ? 'ON' : 'OFF'}</span>
    </button>
  )
}
