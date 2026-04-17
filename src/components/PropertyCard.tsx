import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useCallback, useRef } from 'react'
import type { Property } from '../data/properties'
import { propertyFeatures } from '../data/properties'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 320, damping: 28, mass: 0.6 }
  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], reduce ? [0, 0] : [8, -8]),
    spring,
  )
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], reduce ? [0, 0] : [-8, 8]),
    spring,
  )

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce || !ref.current) return
      const r = ref.current.getBoundingClientRect()
      mx.set((e.clientX - r.left) / r.width - 0.5)
      my.set((e.clientY - r.top) / r.height - 0.5)
    },
    [mx, my, reduce],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      style={{
        perspective: 900,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-[var(--shadow-card)] ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur">
          {property.kind}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold leading-snug text-ink group-hover:text-accent-blue">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{property.locationLabel}</p>
        </div>
        <p className="font-heading text-xl font-bold text-accent-gold">
          {property.priceDisplay}
        </p>
        <p className="text-sm text-ink-muted">{propertyFeatures(property)}</p>
      </div>
    </motion.article>
  )
}
