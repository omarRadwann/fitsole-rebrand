import Link from 'next/link'
import { BRANDS } from '@/lib/data/products'

export function BrandsIndex() {
  return (
    <section className="bg-fg text-bg">
      <div className="max-w-editorial mx-auto px-6 py-24 md:py-32">
        <header className="grid md:grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-7">
            <p className="font-mono text-eyebrow text-bg/60 mb-4 tracking-[0.18em]">Brands we carry · {BRANDS.length} picked · 3 rejected</p>
            <h2 className="font-display text-h2 font-semibold leading-[0.98] max-w-3xl">
              Six brands we picked.<br />
              <span className="text-accent">Three more we said no to.</span>
            </h2>
          </div>
          <p className="md:col-span-5 max-w-content text-bg/65 leading-relaxed text-sm self-end">
            We don&apos;t carry everything; we carry what fits. Each brand has a page with our notes on which of their models we actually keep in the branches — and which ones we passed on, and why.
          </p>
        </header>
        <ul>
          {BRANDS.map((b, i) => (
            <li key={b.slug} className="border-t border-bg/15 last:border-b">
              <Link
                href={`/brands/${b.slug}`}
                className="group grid md:grid-cols-12 gap-4 md:gap-12 items-baseline py-8 md:py-10 hover:bg-bg/[0.03] transition-colors duration-[--dur-base] ease-smooth"
              >
                <div className="md:col-span-1 font-mono text-eyebrow text-bg/40 tracking-[0.18em]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="md:col-span-4 font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-none tracking-[-0.02em] group-hover:text-accent transition-colors duration-[--dur-base] ease-smooth">
                  {b.name}
                </h3>
                <p className="md:col-span-6 text-bg/70 text-sm leading-relaxed max-w-content">
                  {b.note}
                </p>
                <span aria-hidden className="md:col-span-1 hidden md:inline-block text-bg/30 group-hover:text-accent transition-colors duration-[--dur-base] ease-smooth text-right">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-12">
          <Link
            href="/brands"
            className="font-mono text-eyebrow text-bg/65 hover:text-bg transition-colors duration-[--dur-micro] ease-smooth tracking-[0.18em]"
          >
            See the full brand list →
          </Link>
        </p>
      </div>
    </section>
  )
}
