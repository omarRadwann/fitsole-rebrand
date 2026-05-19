import Link from 'next/link'
import Image from 'next/image'
import { Price } from './Price'
import { BranchPin } from './BranchPin'
import type { Product } from '@/lib/data/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link
        href={`/products/${product.slug}`}
        data-cursor="Open"
        className="block aspect-[4/5] relative overflow-hidden bg-bg-elevated focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        {/* Faint shelf-line backdrop so transparent-PNG products sit on something */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 110%, oklch(91% 0.012 80) 0%, oklch(96% 0.008 80) 60%, transparent 100%)',
          }}
          aria-hidden
        />
        <Image
          src={product.imagePrimary}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-6 transition-opacity duration-[--dur-fast] ease-snap group-hover:opacity-0"
        />
        <Image
          src={product.imageHover}
          alt=""
          fill
          aria-hidden
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-6 opacity-0 transition-opacity duration-[--dur-fast] ease-snap group-hover:opacity-100"
        />
        {product.wasPriceEgp && (
          <span className="absolute top-3 left-3 font-mono text-eyebrow text-fg-muted">
            On sale
          </span>
        )}
      </Link>
      <div className="mt-4 space-y-1.5">
        <p className="eyebrow">{product.brand}</p>
        <Link
          href={`/products/${product.slug}`}
          className="block font-display text-lg md:text-xl font-semibold leading-tight hover:underline underline-offset-4"
        >
          {product.name}
        </Link>
        <Price egp={product.priceEgp} was={product.wasPriceEgp} className="text-sm" />
      </div>
      <div className="mt-3">
        <BranchPin stock={product.inStock} productName={product.name} />
      </div>
      {product.editorialNote && (
        <p className="mt-3 text-eyebrow text-fg-muted italic leading-relaxed">
          {product.editorialNote}
        </p>
      )}
    </article>
  )
}
