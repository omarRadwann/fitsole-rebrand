import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/lib/data/products'
import { BRANCHES } from '@/lib/data/branches'
import { Price } from '@/components/Price'
import { ProductCard } from '@/components/ProductCard'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) return notFound()

  const primaryBranch = BRANCHES.find((b) => b.id === product.inStock[0]?.branchId)
  const allSizes = Array.from(
    new Set(product.inStock.flatMap((s) => s.sizes))
  ).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b))
  const related = PRODUCTS.filter((p) => p.brand === product.brand && p.id !== product.id).slice(0, 4)

  return (
    <main>
      {/* Crumb + product header */}
      <nav className="max-w-editorial mx-auto px-6 pt-6 md:pt-8 font-mono text-eyebrow tracking-[0.18em] text-fg-muted flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link href="/" className="hover:text-fg transition-colors">Fitsole</Link>
        <span aria-hidden>/</span>
        <Link href={`/brands/${product.brand.toLowerCase()}`} className="hover:text-fg transition-colors">{product.brand}</Link>
        <span aria-hidden>/</span>
        <span className="text-fg">{product.name}</span>
      </nav>

      <section className="max-w-editorial mx-auto px-6 py-10 md:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Imagery */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <div className="relative aspect-square sm:col-span-2 bg-bg-elevated overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 90%, oklch(91% 0.012 80) 0%, oklch(96% 0.008 80) 65%, transparent 100%)',
                }}
                aria-hidden
              />
              <Image
                src={product.imagePrimary}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 md:p-12"
              />
            </div>
            <div className="relative aspect-square bg-bg-elevated overflow-hidden">
              <Image
                src={product.imageHover}
                alt={`${product.name} — alternate view`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-6"
              />
            </div>
            <div className="relative aspect-square bg-bg-elevated overflow-hidden">
              <Image
                src={product.imagePrimary}
                alt={`${product.name} — detail`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-6 scale-[1.4] origin-bottom"
              />
            </div>
          </div>
        </div>

        {/* Buy panel */}
        <aside className="lg:col-span-5 lg:sticky lg:top-6 lg:self-start">
          <p className="eyebrow mb-3">{product.brand}</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[0.95] tracking-[-0.025em]">
            {product.name}
          </h1>
          <div className="mt-5">
            <Price egp={product.priceEgp} was={product.wasPriceEgp} className="text-lg" />
            {product.wasPriceEgp && (
              <span className="ml-3 font-mono text-eyebrow tracking-[0.18em] text-accent">
                — {Math.round((1 - product.priceEgp / product.wasPriceEgp) * 100)}% off
              </span>
            )}
          </div>

          {primaryBranch && (
            <div className="mt-6 p-5 border border-rule bg-bg-elevated">
              <p className="eyebrow text-accent mb-2 flex items-center gap-2">
                <PinIcon className="w-3 h-3" /> In stock today
              </p>
              <p className="font-display text-lg font-bold">{primaryBranch.name}</p>
              <p className="text-sm text-fg-muted mt-1 leading-snug">{primaryBranch.address}</p>
              <p className="font-mono text-eyebrow tracking-[0.18em] mt-1">{primaryBranch.hours}</p>
            </div>
          )}

          <div className="mt-8">
            <p className="eyebrow mb-3">Pick a size</p>
            <ul className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {allSizes.length > 0 ? (
                allSizes.map((size) => (
                  <li key={size}>
                    <button
                      type="button"
                      className="w-full py-3 border border-rule font-mono text-sm hover:border-accent hover:text-accent transition-colors duration-[--dur-micro] ease-smooth focus:outline-none focus-visible:border-accent focus-visible:text-accent"
                    >
                      {size}
                    </button>
                  </li>
                ))
              ) : (
                <li className="col-span-full text-sm text-fg-muted">No sizes in stock — notify me below.</li>
              )}
            </ul>
          </div>

          <div className="mt-8 grid gap-3">
            <button
              type="button"
              className="w-full py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
            >
              Add to cart
            </button>
            {primaryBranch && (
              <button
                type="button"
                className="w-full py-4 border border-fg font-medium hover:bg-fg hover:text-bg transition-colors duration-[--dur-base] ease-smooth"
              >
                Reserve at {primaryBranch.name}
              </button>
            )}
          </div>

          <div className="mt-8 border-t border-rule pt-6 grid gap-4 text-sm text-fg-muted leading-relaxed">
            <p>
              <span className="text-fg font-medium">Authenticity.</span> Sourced through authorized distribution channels. Documentation available at any branch on request.
            </p>
            <p>
              <span className="text-fg font-medium">Returns.</span> 14 days, unworn, any branch. Exchange for size doesn&apos;t restart the clock.
            </p>
            <p>
              <span className="text-fg font-medium">Pay later.</span> Split into installments at checkout — the price you see is the price you split.
            </p>
          </div>
        </aside>
      </section>

      {/* Editorial pull — the buyer's note */}
      {product.editorialNote && (
        <section className="border-y border-rule bg-bg-elevated">
          <div className="max-w-editorial mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-8 items-center">
            <p className="md:col-span-2 eyebrow">Buyer&apos;s note</p>
            <blockquote className="md:col-span-9">
              <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.01em] max-w-[34ch]">
                <span className="text-accent">&ldquo;</span>
                {product.editorialNote}
                <span className="text-accent">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-editorial mx-auto px-6 py-20 md:py-28">
          <header className="mb-10">
            <p className="eyebrow mb-3">More from {product.brand}</p>
            <h2 className="font-display text-h2 font-bold leading-tight tracking-[-0.02em]">
              Other <em className="not-italic text-accent">{product.brand}</em> we picked.
            </h2>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3 4.5 8 4.5 8s4.5-5 4.5-8c0-2.5-2-4.5-4.5-4.5zM8 7.5A1.5 1.5 0 1 1 8 4.5a1.5 1.5 0 0 1 0 3z" />
    </svg>
  )
}
