'use client'

import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'
import { BRANCHES } from '@/lib/data/branches'
import type { ProductStock } from '@/lib/data/products'

export function BranchPin({ stock, productName }: { stock: ProductStock[]; productName: string }) {
  const [open, setOpen] = useState(false)

  if (stock.length === 0) {
    return (
      <p className="font-mono text-eyebrow text-fg-muted inline-flex items-center gap-1">
        <BranchPinIcon className="w-3 h-3" aria-hidden />
        Out of stock — notify me
      </p>
    )
  }

  const primary = stock[0]
  const branch = BRANCHES.find((b) => b.id === primary.branchId)
  if (!branch) return null

  const others = stock.slice(1)

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="font-mono text-eyebrow text-fg-muted text-left inline-flex items-center gap-1.5 hover:text-fg transition-colors duration-[--dur-micro] ease-smooth focus:outline-none focus-visible:text-fg"
          aria-label={`${productName}: in stock at ${branch.name} today. Expand for reservation.`}
        >
          <BranchPinIcon className="w-3 h-3 text-accent" aria-hidden />
          <span>
            In stock at <span className="text-fg">{branch.name}</span> today
          </span>
          <span aria-hidden className="text-fg-muted">
            →
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          align="start"
          className="z-50 bg-bg-elevated border border-rule shadow-lg p-5 max-w-xs animate-in fade-in zoom-in-95 duration-[--dur-base] ease-smooth"
        >
          <p className="font-display text-h3 leading-none">{branch.name}</p>
          <p className="text-sm text-fg-muted mt-2 leading-relaxed">{branch.address}</p>
          <p className="font-mono text-eyebrow mt-1">{branch.hours}</p>
          <div className="mt-4 pt-4 border-t border-rule">
            <p className="text-eyebrow">Sizes available today</p>
            <p className="font-mono mt-1 text-sm">{primary.sizes.join(' · ')}</p>
          </div>
          <button
            type="button"
            className="mt-5 w-full bg-accent text-bg py-3 font-medium text-sm hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
          >
            Reserve at {branch.name}
          </button>
          {others.length > 0 && (
            <p className="mt-4 text-eyebrow text-fg-muted leading-relaxed">
              Also at:{' '}
              {others
                .map((s) => BRANCHES.find((b) => b.id === s.branchId)?.name)
                .filter(Boolean)
                .join(' · ')}
            </p>
          )}
          <Popover.Arrow className="fill-bg-elevated" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

function BranchPinIcon({ className = '', ...props }: { className?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3 4.5 8 4.5 8s4.5-5 4.5-8c0-2.5-2-4.5-4.5-4.5z" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
    </svg>
  )
}
