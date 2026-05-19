import { PRODUCTS } from '@/lib/data/products'
import { ProductCard } from '../ProductCard'

export function Sale() {
  const onSale = PRODUCTS.filter((p) => p.wasPriceEgp)
  if (onSale.length === 0) return null

  return (
    <section className="max-w-editorial mx-auto px-6 py-24 md:py-32">
      <header className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-12 md:mb-16">
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">On sale · this month</p>
          <h2 className="font-display text-h2 font-semibold leading-[1.05] max-w-3xl">
            Last-season pieces at fair prices
          </h2>
        </div>
        <p className="md:col-span-5 max-w-content text-fg-muted leading-relaxed text-sm">
          No fake countdowns and no &ldquo;only 2 left&rdquo; theater. These are last-season sizes we&apos;re closing out. Same return policy. Same branch exchange.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
        {onSale.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
