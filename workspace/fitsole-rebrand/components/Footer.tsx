import Link from 'next/link'
import { BRANCHES } from '@/lib/data/branches'
import { Wordmark } from './brand/Wordmark'
import { BranchMark } from './brand/BranchMark'

export function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t border-rule relative">
      {/* Cairo skyline ornament — sits as a thin band above the main footer. */}
      <div
        aria-hidden
        className="pattern-cairo h-12 md:h-14 opacity-60"
      />

      <div className="max-w-editorial mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <p className="eyebrow mb-5">Branches</p>
          <ul className="space-y-5">
            {BRANCHES.map((b) => (
              <li key={b.id} className="grid grid-cols-[auto_1fr] gap-3">
                <BranchMark className="w-3 h-3 mt-1.5" />
                <div>
                  <p className="font-display text-lg font-semibold leading-none">{b.name}</p>
                  <p className="text-fg-muted text-sm mt-1.5 leading-snug">{b.address}</p>
                  <p className="font-mono text-eyebrow mt-1.5">{b.hours}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Shop</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/collections/new-arrivals" className="hover:underline underline-offset-4">New arrivals</Link></li>
            <li><Link href="/collections/best-sellers" className="hover:underline underline-offset-4">Best sellers</Link></li>
            <li><Link href="/brands" className="hover:underline underline-offset-4">Brands</Link></li>
            <li><Link href="/collections/sale" className="hover:underline underline-offset-4">Sale</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Trust</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/returns" className="hover:underline underline-offset-4">Returns &amp; exchanges</Link></li>
            <li><Link href="/shipping" className="hover:underline underline-offset-4">Shipping</Link></li>
            <li><Link href="/bnpl" className="hover:underline underline-offset-4">Buy now, pay later</Link></li>
            <li><Link href="/authenticity" className="hover:underline underline-offset-4">Authenticity</Link></li>
            <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">About</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/journal" className="hover:underline underline-offset-4">Inside Fitsole</Link></li>
            <li><Link href="/about" className="hover:underline underline-offset-4">Our story</Link></li>
            <li><Link href="/press" className="hover:underline underline-offset-4">Press</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="max-w-editorial mx-auto px-6 py-10 flex flex-wrap items-end gap-x-8 gap-y-5">
          <Wordmark className="h-10 md:h-12 text-fg w-auto" />
          <p className="font-display text-h3 leading-tight max-w-2xl">
            A real shop with a website. Cairo, Egypt.
          </p>
          <p className="font-mono text-eyebrow ml-auto">© {new Date().getFullYear()} · Fitsole</p>
        </div>
      </div>
    </footer>
  )
}
