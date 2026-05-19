import Link from 'next/link'
import Image from 'next/image'

export function EditorialFeature() {
  return (
    <section className="border-y border-rule bg-bg-elevated overflow-hidden">
      <div className="max-w-editorial mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <p className="font-mono text-eyebrow tracking-[0.18em] mb-5">
            Inside Fitsole · this week
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[0.95] tracking-[-0.025em]">
            Why we kept the <em className="not-italic text-accent">Samba</em> in the front shelf for the fourth month running.
          </h2>
          <p className="mt-8 text-fg-muted leading-relaxed max-w-content">
            The Adidas Samba isn&apos;t the year&apos;s loudest release, but it&apos;s been the most-asked-for shoe in our Maadi branch since February. Here&apos;s what our staff have noticed about who&apos;s asking — and what they pair it with at checkout.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/journal/samba-fourth-month"
              data-cursor="Read"
              className="font-mono text-eyebrow tracking-[0.18em] hover:opacity-70 transition-opacity duration-[--dur-micro] ease-smooth"
            >
              Read this week&apos;s piece →
            </Link>
            <span className="font-mono text-eyebrow text-fg-muted tracking-[0.18em]">
              5 min · by Maadi staff
            </span>
          </div>
        </div>
        <div className="md:col-span-6 order-1 md:order-2 relative aspect-[4/5]">
          <Image
            src="/images/branch/detail-bench.webp"
            alt="A single Adidas Samba left on the fitting bench beside a Fitsole shopping bag — Maadi branch."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 70%, oklch(0% 0 0 / 0.2) 100%)',
            }}
            aria-hidden
          />
          <div className="absolute bottom-4 right-4 font-mono text-eyebrow tracking-[0.18em] text-[oklch(98%_0_0_/_0.9)] bg-[oklch(0%_0_0_/_0.5)] px-3 py-1.5 backdrop-blur-sm">
            EDITION 047 · MAY 2026
          </div>
        </div>
      </div>
    </section>
  )
}
