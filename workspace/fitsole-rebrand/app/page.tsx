import { Hero } from '@/components/Hero'
import { PickedThisWeek } from '@/components/sections/PickedThisWeek'
import { ShopTheLook } from '@/components/sections/ShopTheLook'
import { EditorialFeature } from '@/components/sections/EditorialFeature'
import { BrandsIndex } from '@/components/sections/BrandsIndex'
import { Sale } from '@/components/sections/Sale'
import { Branches } from '@/components/sections/Branches'
import { FounderNote } from '@/components/sections/FounderNote'
import { Newsletter } from '@/components/sections/Newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PickedThisWeek />
      <ShopTheLook />
      <EditorialFeature />
      <BrandsIndex />
      <Sale />
      <Branches />
      <FounderNote />
      <Newsletter />
    </main>
  )
}
