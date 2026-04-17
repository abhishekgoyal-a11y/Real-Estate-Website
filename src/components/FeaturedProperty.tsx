import { motion, useReducedMotion } from 'framer-motion'
import type { Property } from '../data/properties'
import { propertyFeatures } from '../data/properties'

interface FeaturedPropertyProps {
  property: Property
}

export function FeaturedProperty({ property }: FeaturedPropertyProps) {
  const reduce = useReducedMotion()

  return (
    <section
      id="featured"
      className="scroll-mt-20 border-y border-ink/5 bg-gradient-to-b from-page via-white to-page py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-[var(--shadow-card-hover)] ring-1 ring-ink/5 backdrop-blur-xl lg:grid lg:grid-cols-12"
        >
          <div className="relative lg:col-span-7">
            <motion.img
              src={property.image}
              alt={property.title}
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[420px]"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent lg:bg-gradient-to-r" />
            <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink backdrop-blur">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 lg:col-span-5 lg:p-10">
            <div>
              <h2 className="font-heading text-2xl font-bold leading-tight text-ink sm:text-3xl">
                {property.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-accent-blue">
                {property.locationLabel}
              </p>
            </div>
            <p className="text-ink-muted leading-relaxed">
              {property.description}
            </p>
            <div className="flex flex-wrap items-end gap-4">
              <p className="font-heading text-3xl font-bold text-accent-gold">
                {property.priceDisplay}
              </p>
              <p className="text-sm text-ink-muted">
                {propertyFeatures(property)}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-ink/90"
            >
              View Details
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
