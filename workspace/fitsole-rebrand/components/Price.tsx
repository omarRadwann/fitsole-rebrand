const FORMATTER = new Intl.NumberFormat('en-EG', {
  style: 'currency',
  currency: 'EGP',
  maximumFractionDigits: 0,
})

export function Price({
  egp,
  was,
  className = '',
}: {
  egp: number
  was?: number
  className?: string
}) {
  return (
    <span className={`font-mono inline-flex items-baseline gap-2 ${className}`}>
      {was && (
        <span className="text-sale line-through text-eyebrow" aria-label={`originally ${FORMATTER.format(was)}`}>
          {FORMATTER.format(was)}
        </span>
      )}
      <span>{FORMATTER.format(egp)}</span>
    </span>
  )
}
