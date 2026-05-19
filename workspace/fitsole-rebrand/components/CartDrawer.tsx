'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { CartIcon, CloseIcon } from './ui/Icon'
import { useSfx } from '@/lib/audio/useSfx'

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const [count] = useState(0) // Placeholder until Shopify Storefront API wires in.
  const sfx = useSfx()

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        sfx(o ? 'cartOpen' : 'cartClose')
      }}
    >
      <Dialog.Trigger asChild>
        <button
          aria-label={`Cart · ${count} items`}
          data-cursor="Cart"
          className="hover:opacity-70 transition-opacity focus:outline-none focus-visible:opacity-70 relative"
        >
          <CartIcon className="w-5 h-5" />
          {count > 0 && (
            <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 bg-accent text-[oklch(98%_0_0)] font-mono text-[10px] leading-4 text-center rounded-full">
              {count}
            </span>
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[oklch(8%_0_0_/_0.5)] data-[state=open]:animate-in data-[state=closed]:animate-out fade-in-0 fade-out-0 duration-[--dur-base]" />
        <Dialog.Content
          className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-bg shadow-2xl flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right duration-[--dur-base]"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-rule">
            <div>
              <Dialog.Title className="font-display text-lg font-bold tracking-tight">
                Your cart
              </Dialog.Title>
              <Dialog.Description className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
                {count === 0 ? 'Empty — start picking' : `${count} item${count > 1 ? 's' : ''}`}
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="hover:opacity-70 transition-opacity focus:outline-none focus-visible:opacity-70"
              aria-label="Close cart"
            >
              <CloseIcon className="w-5 h-5" />
            </Dialog.Close>
          </div>

          {count === 0 ? (
            <EmptyCart onClose={() => setOpen(false)} />
          ) : (
            <FilledCart />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex-1 flex flex-col px-6 py-10 overflow-y-auto">
      <div className="flex-1 flex items-center justify-center text-center">
        <div className="max-w-xs">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-4">
            [ NOTHING IN THE BASKET YET ]
          </p>
          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">
            Pick the size you actually wear.
          </h3>
          <p className="mt-4 text-sm text-fg-muted leading-relaxed">
            Reserve at a branch if you want to try it on first. We hold sizes under your name for 24 hours.
          </p>
        </div>
      </div>
      <div className="border-t border-rule pt-6 space-y-3">
        <button
          type="button"
          onClick={onClose}
          className="w-full py-4 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
        >
          Browse what&apos;s in stock
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-4 border border-rule font-medium hover:bg-bg-elevated transition-colors duration-[--dur-micro] ease-smooth"
        >
          Find a branch
        </button>
        <p className="text-eyebrow text-fg-muted leading-relaxed pt-3">
          14-day returns at any branch · Buy now, pay later · Same return policy on sale items
        </p>
      </div>
    </div>
  )
}

function FilledCart() {
  // Placeholder for the real Shopify cart integration.
  return (
    <div className="flex-1 px-6 py-8 overflow-y-auto">
      <p className="text-sm text-fg-muted">Cart items render here once Shopify Storefront API is wired.</p>
    </div>
  )
}

