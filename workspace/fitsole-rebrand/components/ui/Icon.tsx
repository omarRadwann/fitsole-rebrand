/*
 * Fitsole custom icon set — 1.5px stroke, rounded terminals, 24x24 grid.
 *
 * Why custom: the previous inline SVG icons in Header.tsx and CartDrawer.tsx
 * read as default ecommerce icons — they could swap into any Shopify store
 * without anyone noticing. Brand identity is "the shop you can walk into" —
 * the icons should feel like signs in that shop, not e-commerce defaults.
 *
 * All icons share:
 *   - viewBox 0 0 24 24
 *   - stroke="currentColor"
 *   - strokeWidth=1.5
 *   - strokeLinecap="round"
 *   - strokeLinejoin="round"
 *   - fill="none"
 */

type IconProps = { className?: string; strokeWidth?: number; title?: string }

function Frame({
  children,
  className = '',
  strokeWidth = 1.5,
  title,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={!title}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function SearchIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M16 16l4.5 4.5" />
    </Frame>
  )
}

export function AccountIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20.5c0-4.4 3.6-7.5 7.5-7.5s7.5 3.1 7.5 7.5" />
    </Frame>
  )
}

/* Cart that reads as a shop tote, not an Amazon cart — straight sides, looped handles. */
export function CartIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M5 8h14l-1.5 12.5h-11L5 8z" />
      <path d="M9 8V5a3 3 0 0 1 6 0v3" />
    </Frame>
  )
}

export function CloseIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M6 6l12 12M6 18L18 6" />
    </Frame>
  )
}

/* Branch pin — geometric dot + stem (matches BranchMark). */
export function BranchIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <circle cx="12" cy="9" r="4" fill="currentColor" stroke="none" />
      <path d="M12 13v9" strokeWidth={p.strokeWidth ?? 1.5} />
    </Frame>
  )
}

/* Reserve at branch — a clipboard with a checkmark. Reads as 'we're holding it for you'. */
export function ReserveIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4h6v3H9z" />
      <path d="M8.5 13.5l2.5 2.5 4.5-5" />
    </Frame>
  )
}

export function ArrowIcon(p: IconProps & { dir?: 'right' | 'left' | 'up' | 'down' }) {
  const dir = p.dir ?? 'right'
  const r = dir === 'right' ? 0 : dir === 'down' ? 90 : dir === 'left' ? 180 : 270
  return (
    <Frame {...p}>
      <g transform={`rotate(${r} 12 12)`}>
        <path d="M4 12h16" />
        <path d="M14 6l6 6-6 6" />
      </g>
    </Frame>
  )
}

export function PlusIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M12 5v14M5 12h14" />
    </Frame>
  )
}

export function MinusIcon(p: IconProps) {
  return (
    <Frame {...p}>
      <path d="M5 12h14" />
    </Frame>
  )
}
