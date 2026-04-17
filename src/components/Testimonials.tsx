import { motion, useReducedMotion } from 'framer-motion'

const reviews = [
  {
    quote: 'Amazing experience, found my dream home quickly!',
    name: 'Rahul Sharma',
    role: 'Homebuyer, Gurgaon',
  },
  {
    quote: 'Highly professional and trustworthy service.',
    name: 'Neha Verma',
    role: 'Investor, Delhi NCR',
  },
  {
    quote: 'Best real estate platform I’ve used.',
    name: 'Aman Gupta',
    role: 'First-time buyer',
  },
]

export function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-t border-ink/5 bg-ink py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-gold-soft">
            Testimonials
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Clients who moved with confidence
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: reduce ? 0 : i * 0.08, duration: 0.4 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[var(--shadow-glass)] backdrop-blur-md"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-white/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-heading font-semibold text-white">{r.name}</p>
                <p className="text-sm text-white/60">{r.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
