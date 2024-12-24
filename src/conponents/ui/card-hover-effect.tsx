import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../../lib/utils'

export function HoverEffect({
  items,
  className,
}: {
  items: {
    title: string
    description: React.ReactNode
  }[]
  className?: string
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2  py-10', className)}>
      {items.map((item, idx) => (
        <div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="hover:bg-black">
            {hoveredIndex === idx
              ? (
                  <CardDescription>{item.description}</CardDescription>
                )
              : (
                  <CardTitle>{item.title}</CardTitle>
                )}
          </Card>
        </div>
      ))}
    </div>
  )
}

export function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl h-52 p-4 overflow-hidden bg-slate-200 border border-transparent group-hover:border-slate-300 relative z-20',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export function CardTitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h4 className={cn('text-black font-bold tracking-wide text-xl', className)}>{children}</h4>
  )
}
export function CardDescription({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('text-zinc-100 tracking-wide leading-relaxed text-sm', className)}>
      {children}
    </div>
  )
}
