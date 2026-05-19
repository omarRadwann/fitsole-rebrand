/*
 * F+S monogram — inline SVG for use as social-card mark, footer ornament,
 * and favicon fallback. Same geometric language as the wordmark.
 */
export function Monogram({ className = '', plate = true }: { className?: string; plate?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Fitsole — F+S monogram"
      className={className}
    >
      <title>Fitsole — F+S monogram</title>
      {plate && <rect width="64" height="64" rx="6" fill="oklch(97% 0.008 80)" />}
      <g fill="currentColor">
        <rect x="10" y="10" width="6" height="44" rx="0.5" />
        <rect x="10" y="10" width="24" height="6" rx="0.5" />
        <rect x="10" y="28" width="18" height="6" rx="0.5" />
        <rect x="34" y="22" width="20" height="5" rx="0.5" />
        <rect x="34" y="22" width="5" height="11" rx="0.5" />
        <rect x="34" y="30" width="20" height="5" rx="0.5" />
        <rect x="49" y="30" width="5" height="12" rx="0.5" />
        <rect x="34" y="38" width="20" height="5" rx="0.5" />
      </g>
      <circle cx="58" cy="10" r="3" fill="oklch(54% 0.13 35)" />
    </svg>
  )
}
