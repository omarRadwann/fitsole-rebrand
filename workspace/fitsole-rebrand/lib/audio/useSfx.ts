'use client'

import { useCallback } from 'react'
import { getSoundManager, type SfxName } from './SoundManager'

/*
 * React hook — call sfx by name. Fire-and-forget; quietly no-ops if sound
 * is disabled or AudioContext hasn't been unlocked yet.
 */
export function useSfx() {
  return useCallback((name: SfxName) => {
    const s = getSoundManager()
    // ensureContext is async but we don't await; user may click before context
    // resolves and that's fine — the next click will catch up.
    void s.ensureContext().then(() => s.play(name))
  }, [])
}
