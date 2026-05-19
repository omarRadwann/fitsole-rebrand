import Link from 'next/link'
import { CartDrawer } from './CartDrawer'
import { Wordmark } from './brand/Wordmark'
import { SearchIcon, AccountIcon } from './ui/Icon'
import { SoundToggle } from './SoundToggle'

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
          <Link
            href="/"
            aria-label="Fitsole — home"
            data-cursor="Home"
            className="block text-fg hover:opacity-90 transition-opacity"
          >
            <Wordmark className="h-7 md:h-8 w-auto" />
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm">
            <Link href="/collections/best-sellers" className="hover:opacity-70 transition-opacity">Best sellers</Link>
            <Link href="/collections/men" className="hover:opacity-70 transition-opacity">Men</Link>
            <Link href="/collections/women" className="hover:opacity-70 transition-opacity">Women</Link>
            <Link href="/collections/kids" className="hover:opacity-70 transition-opacity">Kids</Link>
            <Link href="/brands" className="hover:opacity-70 transition-opacity">Brands</Link>
            <Link href="/journal" className="hover:opacity-70 transition-opacity">Inside Fitsole</Link>
            <Link href="/collections/sale" className="hover:opacity-70 transition-opacity">Sale</Link>
          </nav>
          <div className="flex items-center gap-5">
            <SoundToggle />
            <button
              aria-label="Search"
              data-cursor="Search"
              className="hover:opacity-70 transition-opacity focus:outline-none focus-visible:opacity-70"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <Link
              href="/account"
              aria-label="Account"
              data-cursor="Account"
              className="hover:opacity-70 transition-opacity"
            >
              <AccountIcon className="w-5 h-5" />
            </Link>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}
