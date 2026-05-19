import Image from 'next/image'
import Link from 'next/link'

// Three named looks tied to Cairo neighborhoods — replaces the live site's
// generic "Shop the Look" with cultural specificity per docs/visual-review.md § Section 3 Repair.
const LOOKS = [
  {
    slug: 'maadi-friday',
    name: 'Maadi Friday',
    blurb: 'Weekend brunch on Road 9. Loose fit, the Samba, the brown house tee.',
    image:
      'https://fitsole.shop/cdn/shop/files/KE2940_2_APPAREL_On_Model_Standard_View_transparent.png?v=1777466618&width=1200',
    alt: 'Maadi Friday look — Adidas Firebird LO TP',
  },
  {
    slug: 'zamalek-weekend',
    name: 'Zamalek Weekend',
    blurb: 'Café-to-evening through 26th of July. The Premium Essentials run.',
    image:
      'https://fitsole.shop/cdn/shop/files/JD4763_3_APPAREL_On_Model_Standard_View_transparent_be3ab639-8067-4b35-b56a-0a7c86b78adc.webp?v=1757648377&width=1200',
    alt: 'Zamalek Weekend look — Nike Premium Essentials',
  },
  {
    slug: 'heliopolis-morning',
    name: 'Heliopolis Morning',
    blurb: 'Early run along Salah Salem. Cloudmonster + the lighter Adidas tee.',
    image:
      'https://fitsole.shop/cdn/shop/files/KE0399_2_APPAREL_On_Model_Standard_View_transparent.png?v=1777466638&width=1200',
    alt: 'Heliopolis Morning look — light Adidas tee',
  },
]

export function ShopTheLook() {
  return (
    <section className="max-w-editorial mx-auto px-6 py-24 md:py-32">
      <header className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-12 md:mb-16">
        <div className="md:col-span-7">
          <p className="font-mono text-eyebrow tracking-[0.18em] mb-4">Shop the look · three from Cairo</p>
          <h2 className="font-display text-h2 font-semibold leading-[1.02] max-w-3xl">
            Three looks, three <em className="not-italic text-accent">neighborhoods</em>.
          </h2>
        </div>
        <p className="md:col-span-5 max-w-content text-fg-muted text-sm leading-relaxed">
          The way our buyers actually pair pieces — not algorithmic outfits, not influencer collages. What walks out of each branch most weeks.
        </p>
      </header>
      <ul className="grid md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12">
        {LOOKS.map((l, i) => (
          <li key={l.slug}>
            <Link href={`/looks/${l.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-elevated">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 90%, oklch(89% 0.014 80) 0%, oklch(96% 0.008 80) 65%, transparent 100%)',
                  }}
                  aria-hidden
                />
                <Image
                  src={l.image}
                  alt={l.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-[--dur-slow] ease-smooth group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 font-mono text-eyebrow text-fg-muted tracking-[0.18em]">
                  {String(i + 1).padStart(2, '0')} / 03
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight group-hover:text-accent transition-colors duration-[--dur-base] ease-smooth">
                  {l.name}
                </h3>
                <p className="mt-2 text-sm text-fg-muted leading-relaxed max-w-content">{l.blurb}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
