import { PRODUCTS } from '@/lib/data/products'
import { ProductCard } from '../ProductCard'

export function PickedThisWeek() {
  const picks = PRODUCTS.slice(0, 6)
  const today = new Date()
  const dateLabel = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })

  return (
    <section id="picked" className="max-w-editorial mx-auto px-6 py-24 md:py-32">
      <header className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-12 md:mb-16">
        <div className="md:col-span-7">
          <p className="eyebrow mb-4">Picked this week · {dateLabel}</p>
          <h2 className="font-display text-h2 leading-[1.05] font-semibold max-w-3xl">
            What we put on the shelf this week
          </h2>
        </div>
        <p className="md:col-span-5 text-fg-muted max-w-content text-sm leading-relaxed">
          Six pieces our buyers chose for the week. Sizes are limited to what&apos;s in the branches right now — when they&apos;re gone, they&apos;re gone. No restock alerts, no fake countdowns.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
        {picks.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <p className="mt-16">
        <a
          href="/collections/new-arrivals"
          className="font-mono text-eyebrow hover:opacity-70 transition-opacity duration-[--dur-micro] ease-smooth"
        >
          Show me everything new →
        </a>
      </p>
    </section>
  )
}
