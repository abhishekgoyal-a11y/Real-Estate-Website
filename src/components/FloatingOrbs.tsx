import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'

export function FloatingOrbs() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120])
  const y3 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60])

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl ring-1 ring-white/20"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-0 top-10 h-96 w-96 rounded-full bg-accent-blue/20 blur-3xl ring-1 ring-white/10"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-accent-gold/25 blur-2xl ring-1 ring-white/15"
      />
    </div>
  )
}
