/*
 * Branch-mark — terracotta dot + stem. The smallest brand element; used as:
 *   - list marker (replaces ul li::marker)
 *   - branch pin on the Cairo map (Branches section)
 *   - editorial flourish next to specific stat lines
 */
export function BranchMark({ className = '', tone = 'accent' }: { className?: string; tone?: 'accent' | 'ink' }) {
  const color = tone === 'accent' ? 'oklch(54% 0.13 35)' : 'currentColor'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden className={`branch-mark ${className}`}>
      <circle cx="12" cy="6" r="5" fill={color} />
      <rect x="11" y="11" width="2" height="11" fill={color} opacity="0.55" rx="0.4" />
    </svg>
  )
}
