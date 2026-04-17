import { motion, useReducedMotion } from 'framer-motion'
import { COMPANY_NAME } from '../config'

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue">
              About us
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
              Built for families who expect more
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {COMPANY_NAME} – Helping families find their perfect homes with
              trust and transparency for over 10 years.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { n: '10+', l: 'Years of excellence' },
              { n: '500+', l: 'Families served' },
              { n: '120+', l: 'Premium partners' },
              { n: '4.9', l: 'Avg. client rating' },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-ink/5 bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <p className="font-heading text-3xl font-bold text-ink">{s.n}</p>
                <p className="mt-1 text-sm text-ink-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
