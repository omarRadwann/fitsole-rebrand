'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const HERO = {
  src: '/images/branch/hero-v4.webp',
  alt: 'Interior of the Fitsole branch — warm tungsten light, Adidas Samba boxes lining the left wall, glass counter on the right, street view through the entrance.',
}

export function Hero() {
  const panRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = panRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight))
        el.style.setProperty('--hero-pan', `${-14 * progress}px`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Desktop hero — full-bleed branch photo + soft scrim + type bottom-left */}
      <section className="hidden md:block relative h-screen min-h-[680px] overflow-hidden bg-[oklch(14%_0.02_60)]">
        <div ref={panRef} className="hero-pan-target absolute inset-0">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Soft editorial scrim — strong at the bottom-left for type, transparent elsewhere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, oklch(8% 0.02 70 / 0.78) 0%, oklch(8% 0.02 70 / 0.45) 32%, transparent 65%), linear-gradient(to right, oklch(8% 0.02 70 / 0.5) 0%, transparent 55%)',
          }}
        />
        {/* Top eyebrow lockup */}
        <div className="absolute top-8 left-0 right-0 z-10 max-w-editorial mx-auto px-6 flex items-center gap-3 text-[oklch(96%_0_0_/_0.8)]">
          <span className="font-mono text-eyebrow tracking-[0.18em]">01 / 01</span>
          <span className="h-px w-12 bg-[oklch(96%_0_0_/_0.4)]" />
          <span className="font-mono text-eyebrow tracking-[0.18em]">CAIRO · SS26</span>
          <span className="ml-auto font-mono text-eyebrow tracking-[0.18em] text-[oklch(96%_0_0_/_0.65)]">
            ZAMALEK · 18:42
          </span>
        </div>
        {/* Bottom type block */}
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-editorial mx-auto px-6 pb-14 lg:pb-20">
          <div className="max-w-3xl">
            <p className="font-mono text-eyebrow tracking-[0.18em] text-[oklch(96%_0_0_/_0.8)]">
              <span className="inline-block mr-3 align-middle h-px w-8 bg-accent" />
              Authorized retailer · 3 branches in Cairo
            </p>
            <h1 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[-0.03em] text-[oklch(98%_0_0)] mt-6">
              The shop you<br />can <em className="not-italic text-accent">walk into.</em>
            </h1>
            <p className="text-body-lg lg:text-xl text-[oklch(96%_0_0_/_0.9)] mt-6 max-w-xl leading-relaxed">
              Authorized sportswear, picked by us, in stock at our Cairo branches today.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#picked"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
              >
                Browse what&apos;s in stock
                <span aria-hidden className="transition-transform duration-[--dur-base] ease-smooth group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#branches"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[oklch(98%_0_0_/_0.35)] text-[oklch(98%_0_0)] font-medium hover:bg-[oklch(98%_0_0_/_0.1)] transition-colors duration-[--dur-micro] ease-smooth backdrop-blur-sm"
              >
                Find a branch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile hero — distinct composition: photo first (60vh), type below */}
      <section className="md:hidden">
        <div className="relative h-[60vh] min-h-[440px] overflow-hidden bg-[oklch(14%_0.02_60)]">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, oklch(8% 0.02 70 / 0.45) 0%, transparent 35%, transparent 65%, oklch(5% 0.02 50 / 0.4) 100%)',
            }}
          />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[oklch(96%_0_0_/_0.78)] font-mono text-eyebrow tracking-[0.18em]">
            <span>01 / 01</span>
            <span>CAIRO · SS26</span>
          </div>
        </div>
        <div className="px-5 pt-10 pb-2">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
            <span className="inline-block mr-3 align-middle h-px w-8 bg-accent" />
            Authorized retailer · 3 branches
          </p>
          <h1 className="font-display font-bold text-[clamp(2.5rem,10vw,3.75rem)] leading-[0.9] tracking-[-0.025em] mt-4">
            The shop you can <em className="not-italic text-accent">walk into.</em>
          </h1>
          <p className="text-body-lg text-fg-muted mt-5 leading-relaxed">
            Authorized sportswear, picked by us, in stock at our Cairo branches today.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#picked"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
            >
              Browse what&apos;s in stock
              <span aria-hidden>→</span>
            </a>
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-rule font-medium hover:bg-bg-elevated transition-colors duration-[--dur-micro] ease-smooth"
            >
              Find a branch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
