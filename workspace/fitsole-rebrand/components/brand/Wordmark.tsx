'use client'

/*
 * Wordmark — inline SVG for the Fitsole geometric wordmark.
 *
 * Inlined (not <img src>) so:
 *   1. We can style with currentColor — works on light and dark backgrounds.
 *   2. We can animate individual letterforms (e.g. the i-dot pulse).
 *   3. No network request — wordmark prints at <1KB inline.
 *
 * Sizing: container height drives scale; viewBox is 320x80.
 */
type WordmarkProps = {
  /** Class on the SVG. Use h-* utilities for sizing. */
  className?: string
  /** Animated entrance — per-letter cascade on mount. */
  animated?: boolean
  /** Pulse the i-dot continuously (e.g. on the loading screen). */
  pulse?: boolean
  /** Aria label override (default 'Fitsole'). */
  label?: string
}

export function Wordmark({ className = '', animated = false, pulse = false, label = 'Fitsole' }: WordmarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
      role="img"
      aria-label={label}
      className={`wordmark ${animated ? 'wordmark--animated' : ''} ${pulse ? 'wordmark--pulse' : ''} ${className}`}
    >
      <title>{label}</title>
      {/* F */}
      <g className="wordmark__glyph wordmark__glyph--f">
        <rect x="6" y="10" width="9" height="60" rx="0.5" />
        <rect x="6" y="10" width="38" height="9" rx="0.5" />
        <rect x="6" y="36" width="28" height="9" rx="0.5" />
      </g>
      {/* i */}
      <g className="wordmark__glyph wordmark__glyph--i">
        <rect x="50" y="28" width="9" height="42" rx="0.5" />
      </g>
      <circle className="wordmark__idot" cx="54.5" cy="16.5" r="6.5" />
      {/* t */}
      <g className="wordmark__glyph wordmark__glyph--t">
        <rect x="76" y="10" width="9" height="60" rx="0.5" />
        <rect x="68" y="22" width="26" height="8" rx="0.5" />
      </g>
      {/* s */}
      <g className="wordmark__glyph wordmark__glyph--s">
        <rect x="103" y="22" width="30" height="9" rx="0.5" />
        <rect x="103" y="22" width="9" height="22" rx="0.5" />
        <rect x="103" y="36" width="30" height="9" rx="0.5" />
        <rect x="124" y="36" width="9" height="25" rx="0.5" />
        <rect x="103" y="52" width="30" height="9" rx="0.5" />
      </g>
      {/* o — hexagonal silhouette */}
      <g className="wordmark__glyph wordmark__glyph--o">
        <path d="M 152 22 L 168 22 L 175 41 L 168 60 L 152 60 L 145 41 Z M 152 31 L 165 31 L 169 41 L 165 51 L 152 51 L 148 41 Z" />
      </g>
      {/* l */}
      <g className="wordmark__glyph wordmark__glyph--l">
        <rect x="185" y="10" width="9" height="60" rx="0.5" />
      </g>
      {/* e */}
      <g className="wordmark__glyph wordmark__glyph--e">
        <rect x="208" y="22" width="9" height="39" rx="0.5" />
        <rect x="208" y="22" width="28" height="9" rx="0.5" />
        <rect x="208" y="36" width="22" height="8" rx="0.5" />
        <rect x="208" y="52" width="28" height="9" rx="0.5" />
      </g>
    </svg>
  )
}
