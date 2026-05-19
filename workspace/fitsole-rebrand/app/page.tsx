import { Hero } from '@/components/Hero'
import { PickedThisWeek } from '@/components/sections/PickedThisWeek'
import { ShopTheLook } from '@/components/sections/ShopTheLook'
import { EditorialFeature } from '@/components/sections/EditorialFeature'
import { BrandsIndex } from '@/components/sections/BrandsIndex'
import { Sale } from '@/components/sections/Sale'
import { Branches } from '@/components/sections/Branches'
import { FounderNote } from '@/components/sections/FounderNote'
import { Newsletter } from '@/components/sections/Newsletter'
import { Reveal } from '@/components/motion/Reveal'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Reveal as="section" className="block" delay={40}><div id="picked"><PickedThisWeek /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="looks"><ShopTheLook /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="editorial"><EditorialFeature /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="brands"><BrandsIndex /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="sale"><Sale /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="branches"><Branches /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="founder"><FounderNote /></div></Reveal>
      <Reveal as="section" className="block" delay={40}><div id="newsletter"><Newsletter /></div></Reveal>
    </main>
  )
}
