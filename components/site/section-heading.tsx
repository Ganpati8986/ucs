import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <p className="text-sm font-bold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className={cn('mt-3 text-balance text-3xl font-bold leading-tight md:text-4xl', light ? 'text-white' : 'text-navy')}>
        {title}
      </h2>
    </div>
  )
}
