import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FloatingOrbs } from './FloatingOrbs'

const HERO_BG =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 72],
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 36],
  )
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-105"
        aria-hidden
      >
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/25 via-transparent to-accent-gold/20" />
      </motion.div>

      <FloatingOrbs />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-24 pt-32 sm:px-6 sm:pt-36"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur-md"
          >
            Premium listings
            <span className="h-1 w-1 rounded-full bg-accent-gold" />
            Trusted agents
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Find Your Dream Home Today
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-5 max-w-xl text-lg text-white/80 sm:text-xl"
          >
            Explore premium properties in top locations with trusted agents.
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#listings"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-ink shadow-lg transition hover:bg-white/95"
          >
            Browse Properties
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            Contact Agent
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
          className="mt-4 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { k: '500+', l: 'Homes placed' },
            { k: '10 yrs', l: 'Market trust' },
            { k: '24/7', l: 'Concierge' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 text-left shadow-glass backdrop-blur-md"
            >
              <p className="font-heading text-2xl font-semibold text-white">
                {s.k}
              </p>
              <p className="text-sm text-white/70">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
