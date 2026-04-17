import { AnimatePresence, motion } from 'framer-motion'
import type { Property } from '../data/properties'
import { PropertyCard } from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Curated listings
          </h2>
          <p className="mt-2 max-w-xl text-ink-muted">
            Handpicked homes across Delhi NCR — minimal noise, maximum clarity.
          </p>
        </div>
        <p className="text-sm font-medium text-ink-muted">
          Showing{' '}
          <span className="font-heading text-lg text-ink">
            {properties.length}
          </span>{' '}
          properties
        </p>
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {properties.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-dashed border-ink/15 bg-surface py-16 text-center text-ink-muted"
        >
          No homes match these filters. Try widening price or location.
        </motion.p>
      )}
    </div>
  )
}
