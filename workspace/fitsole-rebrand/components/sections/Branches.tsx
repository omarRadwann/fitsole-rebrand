'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BRANCHES } from '@/lib/data/branches'
import { CairoSkyline3DContainer } from '@/components/three/CairoSkyline3DContainer'

const MAP_PINS = [
  { id: 'br_zamalek', x: 305, y: 165, label: 'Zamalek' },
  { id: 'br_maadi', x: 360, y: 310, label: 'Maadi' },
  { id: 'br_heliopolis', x: 470, y: 130, label: 'Heliopolis' },
]

const BRANCH_DETAILS = [
  {
    src: '/images/branch/detail-shelf-samba.webp',
    alt: 'Sneakers on a wooden slatwall shelf with a paper price tag — Zamalek branch detail.',
    caption: 'Front shelf · Zamalek',
  },
  {
    src: '/images/branch/detail-counter.webp',
    alt: 'Glass counter detail — paper receipt pad and a brass cash register catching warm light.',
    caption: 'Counter · Maadi',
  },
  {
    src: '/images/branch/detail-bench.webp',
    alt: 'A single Adidas Samba on the fitting bench beside a Fitsole shopping bag.',
    caption: 'Fitting bench · Heliopolis',
  },
]

export function Branches() {
  return (
    <section id="branches" className="border-y border-rule bg-bg-elevated">
      {/* Blender-baked Cairo skyline — 3D signature for the section header.
          Concept tie: you land in Cairo before the map shows where in it. */}
      <CairoSkyline3DContainer />

      <div className="max-w-editorial mx-auto px-6 py-20 md:py-24">
        <header className="mb-14 md:mb-20 grid md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-8">
            <p className="font-mono text-eyebrow tracking-[0.18em] mb-4">Branches · Returns · BNPL</p>
            <h2 className="font-display text-h2 font-bold leading-[0.98] max-w-3xl">
              How buying from us <em className="not-italic text-accent">actually</em> works.
            </h2>
          </div>
        </header>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <CairoMap />
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Our branches</p>
            <ul className="space-y-6">
              {BRANCHES.map((b, i) => (
                <li key={b.id} className="border-t border-rule pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-eyebrow text-accent tracking-[0.18em] w-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-xl font-bold leading-none">{b.name}</p>
                  </div>
                  <p className="text-fg-muted text-sm mt-2 leading-snug ml-11">{b.address}</p>
                  <p className="font-mono text-eyebrow mt-1.5 ml-11">{b.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real branch interior detail strip — three frames per branch */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 gap-3 md:gap-5">
          {BRANCH_DETAILS.map((d) => (
            <figure key={d.src} className="relative aspect-[4/3] overflow-hidden bg-bg">
              <Image
                src={d.src}
                alt={d.alt}
                fill
                sizes="(max-width: 768px) 33vw, 25vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 font-mono text-eyebrow tracking-[0.18em] text-[oklch(98%_0_0)] bg-[oklch(0%_0_0_/_0.5)] px-2.5 py-1.5 backdrop-blur-sm">
                {d.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 border-t border-rule pt-12 md:pt-16">
          <div>
            <p className="eyebrow mb-4">Returns</p>
            <p className="leading-relaxed text-sm max-w-content">
              14 days, full refund if unworn. Bring it to any branch with the receipt or order number — done in under 5 minutes. Exchanges for different sizes don&apos;t restart the clock.
            </p>
            <p className="mt-5 leading-relaxed text-sm max-w-content text-fg-muted">
              Sneakers worn outside, or items with broken packaging seals, can&apos;t be returned — we&apos;re honest about that upfront so there&apos;s no argument at the counter.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Buy now, pay later</p>
            <p className="leading-relaxed text-sm max-w-content">
              We offer installment plans through Egyptian BNPL providers. The price you see is the price you split. We don&apos;t add hidden interest. If your plan&apos;s terms differ from what we list, screenshot us — we&apos;ll fix it.
            </p>
            <p className="mt-5 font-mono text-eyebrow text-fg-muted">
              Provider pending founder confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CairoMap() {
  const mapRef = useRef<SVGSVGElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true)
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.32 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="relative aspect-[5/4] bg-bg border border-rule overflow-hidden">
      <svg
        ref={mapRef}
        viewBox="0 0 600 480"
        className={`w-full h-full cairo-map ${inView ? 'cairo-map--in' : ''}`}
        role="img"
        aria-label="Stylized map of Cairo with three Fitsole branches"
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="oklch(85% 0.01 80)" strokeWidth="0.5" opacity="0.4" />
          </pattern>
          <linearGradient id="nile" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(70% 0.06 230)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(60% 0.08 220)" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <g className="cairo-map__layer">
          <rect width="600" height="480" fill="url(#grid)" />
          <path
            d="M 200 -10 C 230 80, 220 160, 260 220 S 295 320, 270 400 C 260 440, 240 470, 230 490"
            fill="none"
            stroke="url(#nile)"
            strokeWidth="44"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 200 -10 C 230 80, 220 160, 260 220 S 295 320, 270 400 C 260 440, 240 470, 230 490"
            fill="none"
            stroke="oklch(75% 0.05 220)"
            strokeWidth="22"
            strokeLinecap="round"
            opacity="0.45"
          />
          <ellipse cx="247" cy="160" rx="14" ry="62" fill="oklch(93% 0.012 80)" opacity="0.85" />
          <ellipse cx="380" cy="240" rx="220" ry="180" fill="none" stroke="oklch(80% 0.012 80)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.45" />
          <ellipse cx="380" cy="240" rx="155" ry="115" fill="none" stroke="oklch(80% 0.012 80)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.35" />
          <g fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2.5" fill="oklch(55% 0.01 80)">
            <text x="14" y="22">N ↑</text>
            <text x="14" y="468">CAIRO · EGYPT</text>
            <text x="500" y="468" textAnchor="end">SCALE · INDICATIVE</text>
          </g>
        </g>
        {MAP_PINS.map((p, i) => (
          <g
            key={p.id}
            className="cairo-map__pin"
            style={{ ['--pin-i' as never]: i }}
          >
            <circle cx={p.x} cy={p.y} r="18" fill="oklch(54% 0.13 35)" opacity="0.12" className="cairo-map__pin-ring" />
            <circle cx={p.x} cy={p.y} r="10" fill="oklch(54% 0.13 35)" opacity="0.22" />
            <circle cx={p.x} cy={p.y} r="4.5" fill="oklch(54% 0.13 35)" />
            <text
              x={p.x + 14}
              y={p.y - 8}
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              letterSpacing="1.5"
              fill="oklch(15% 0.008 80)"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
            <text
              x={p.x + 14}
              y={p.y + 6}
              fontFamily="Manrope, sans-serif"
              fontWeight="700"
              fontSize="16"
              fill="oklch(15% 0.008 80)"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <div className="absolute top-4 right-4 font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
        3 BRANCHES · CAIRO
      </div>
    </div>
  )
}
