import { Hero } from '@/components/Hero'
import { SceneClient } from '@/components/three/SceneClient'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SceneClient />
      {/* Sections go below. Each section earns its place per business-case-and-conversion-map.md */}
    </main>
  )
}
