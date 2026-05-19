'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { SplitText } from './motion/SplitText'
import { MagneticCTA } from './motion/MagneticCTA'
import { HeroShader } from './three/HeroShader'

const HERO = {
  src: '/images/branch/hero-v4.webp',
  alt: 'Interior of the Fitsole branch — warm tungsten light, Adidas Samba boxes lining the left wall, glass counter on the right, street view through the entrance.',
}

/*
 * 4-act scroll cinematography (no pin, native scroll preserved):
 *   Act 1 (p 0.00–0.25)  Entry swell. Photo settles in, type cascades.
 *   Act 2 (p 0.25–0.55)  Push-in. Photo gains scale, eyebrow rule grows.
 *   Act 3 (p 0.55–0.85)  Peak. Vignette deepens, type drifts up subtly.
 *   Act 4 (p 0.85–1.00)  Departure. Photo desaturates, body fades into next act.
 *
 * Progress 0..1 is driven by `window.scrollY / window.innerHeight` and written
 * to `--p` on the .hero-act root. The CSS rules in globals.css consume that
 * single token, so there are no per-frame DOM writes beyond one property set.
 *
 * Reduce-motion: the effect is neutralized at the CSS layer.
 */
export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9)))
        el.style.setProperty('--p', p.toFixed(3))
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" ref={rootRef} className="hero-act relative">
      {/* Desktop hero — full-bleed branch photo + soft scrim + type bottom-left */}
      <div className="hidden md:block relative h-screen min-h-[680px] overflow-hidden bg-[oklch(14%_0.02_60)]">
        {/* Cairo Evening signature shader — sits behind the photo. As scroll
            progresses, the photo opacity drops and the warm terracotta haze
            bleeds through. Reduce-motion + mobile fall back to the static
            gradient poster baked into .hero-shader__poster. */}
        <HeroShader />
        <div className="hero-photo absolute inset-0">
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
        {/* Editorial scrim — strong at bottom-left for type, transparent elsewhere.
            The hero photograph has a bright open-door area on the lower-left
            (Cairo street outside) that fights white H1 text. We need a darker
            scrim there so text is always legible regardless of which hero
            variant ships. */}
        <div
          className="hero-vignette absolute inset-0 pointer-events-none"
          style={{
            background: [
              // Vertical: deep darkening at the bottom for type contrast
              'linear-gradient(to top, oklch(6% 0.02 70 / 0.92) 0%, oklch(8% 0.02 70 / 0.72) 22%, oklch(8% 0.02 70 / 0.30) 48%, transparent 70%)',
              // Horizontal: secondary darkening from the left so the type block
              // gets a calm reading surface independent of street brightness
              'linear-gradient(to right, oklch(6% 0.02 70 / 0.65) 0%, oklch(8% 0.02 70 / 0.30) 40%, transparent 70%)',
            ].join(', '),
          }}
        />
        {/* Top eyebrow lockup */}
        <div className="absolute top-8 left-0 right-0 z-10 max-w-editorial mx-auto px-6 flex items-center gap-3 text-[oklch(96%_0_0_/_0.8)]">
          <span className="font-mono text-eyebrow tracking-[0.18em]">01 / 09</span>
          <span className="hero-eyebrow-rule h-px bg-[oklch(96%_0_0_/_0.45)]" />
          <span className="font-mono text-eyebrow tracking-[0.18em]">CAIRO · SS26</span>
          <span className="ml-auto font-mono text-eyebrow tracking-[0.18em] text-[oklch(96%_0_0_/_0.65)]">
            ZAMALEK · 18:42
          </span>
        </div>
        {/* Bottom type block */}
        <div className="hero-type absolute bottom-0 left-0 right-0 z-10 max-w-editorial mx-auto px-6 pb-14 lg:pb-20">
          <div className="max-w-3xl">
            <p className="font-mono text-eyebrow tracking-[0.18em] text-[oklch(96%_0_0_/_0.8)]">
              <span className="inline-block mr-3 align-middle h-px w-8 bg-accent" />
              Authorized retailer · 3 branches in Cairo
            </p>
            <h1 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[-0.03em] text-[oklch(98%_0_0)] mt-6">
              <SplitText className="block" stagger={26} delay={140}>
                The shop you
              </SplitText>
              <SplitText className="block" stagger={26} delay={520}>
                {'can '}
              </SplitText>
              <em className="not-italic text-accent inline-block">
                <SplitText className="inline" stagger={26} delay={720}>
                  walk into.
                </SplitText>
              </em>
            </h1>
            <p className="text-body-lg lg:text-xl text-[oklch(96%_0_0_/_0.9)] mt-6 max-w-xl leading-relaxed">
              Authorized sportswear, picked by us, in stock at our Cairo branches today.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <MagneticCTA strength={0.28} radius={140}>
                <Link
                  href="#picked"
                  data-cursor="Browse"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
                >
                  Browse what&apos;s in stock
                  <span aria-hidden className="transition-transform duration-[--dur-base] ease-smooth group-hover:translate-x-1">→</span>
                </Link>
              </MagneticCTA>
              <MagneticCTA strength={0.18} radius={140}>
                <Link
                  href="#branches"
                  data-cursor="Locate"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-[oklch(98%_0_0_/_0.35)] text-[oklch(98%_0_0)] font-medium hover:bg-[oklch(98%_0_0_/_0.1)] transition-colors duration-[--dur-micro] ease-smooth backdrop-blur-sm"
                >
                  Find a branch
                </Link>
              </MagneticCTA>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hero — distinct composition: photo first (60vh), type below */}
      <div className="md:hidden">
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
            <span>01 / 09</span>
            <span>CAIRO · SS26</span>
          </div>
        </div>
        <div className="px-5 pt-10 pb-2">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
            <span className="inline-block mr-3 align-middle h-px w-8 bg-accent" />
            Authorized retailer · 3 branches
          </p>
          <h1 className="font-display font-bold text-[clamp(2.5rem,10vw,3.75rem)] leading-[0.9] tracking-[-0.025em] mt-4">
            <SplitText className="block" stagger={22} delay={120}>
              The shop you can
            </SplitText>{' '}
            <em className="not-italic text-accent inline-block">
              <SplitText className="inline" stagger={22} delay={520}>
                walk into.
              </SplitText>
            </em>
          </h1>
          <p className="text-body-lg text-fg-muted mt-5 leading-relaxed">
            Authorized sportswear, picked by us, in stock at our Cairo branches today.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#picked"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
            >
              Browse what&apos;s in stock
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#branches"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-rule font-medium hover:bg-bg-elevated transition-colors duration-[--dur-micro] ease-smooth"
            >
              Find a branch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
