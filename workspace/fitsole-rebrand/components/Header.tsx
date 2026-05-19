import Link from 'next/link'
import { CartDrawer } from './CartDrawer'

export function Header() {
  return (
    <header>
      <div className="bg-fg text-bg">
        <div className="max-w-editorial mx-auto px-6 py-2.5 font-mono text-eyebrow flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span>3 branches in Cairo · open today</span>
          <span aria-hidden>·</span>
          <span>Buy now, pay later</span>
          <span aria-hidden>·</span>
          <span>14-day returns at any branch</span>
        </div>
      </div>
      <div className="border-b border-rule">
        <div className="max-w-editorial mx-auto px-6 py-5 flex items-center justify-between gap-6">
          <Link href="/" className="font-display text-xl md:text-2xl font-bold tracking-[-0.03em]">
            Fitsole
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm">
            <Link href="/collections/best-sellers" className="hover:opacity-70 transition-opacity">Best sellers</Link>
            <Link href="/collections/men" className="hover:opacity-70 transition-opacity">Men</Link>
            <Link href="/collections/women" className="hover:opacity-70 transition-opacity">Women</Link>
            <Link href="/collections/kids" className="hover:opacity-70 transition-opacity">Kids</Link>
            <Link href="/brands" className="hover:opacity-70 transition-opacity">Brands</Link>
            <Link href="/editorial" className="hover:opacity-70 transition-opacity">Inside Fitsole</Link>
            <Link href="/collections/sale" className="hover:opacity-70 transition-opacity">Sale</Link>
          </nav>
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="hover:opacity-70 transition-opacity focus:outline-none focus-visible:opacity-70">
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link href="/account" aria-label="Account" className="hover:opacity-70 transition-opacity">
              <AccountIcon className="w-5 h-5" />
            </Link>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5l4 4" strokeLinecap="round" />
    </svg>
  )
}
function AccountIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
    </svg>
  )
}
