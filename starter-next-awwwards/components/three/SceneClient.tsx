'use client'

import dynamic from 'next/dynamic'

export const SceneClient = dynamic(
  () => import('./Scene').then(m => m.Scene),
  { ssr: false, loading: () => null }
)
