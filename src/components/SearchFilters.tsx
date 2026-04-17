import { motion, useReducedMotion } from 'framer-motion'
import { PROPERTIES, PROPERTY_KIND_LABELS, type PropertyKind } from '../data/properties'
import type { ListingFilters } from '../lib/filterProperties'
import { uniqueAreas } from '../lib/filterProperties'

const PRICE_MAX = 3_50_00_000
const PRICE_MIN = 0

function formatInrShort(n: number): string {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(1)} Cr`
  if (n >= 1_00_000) return `₹${Math.round(n / 1_00_000)} L`
  return `₹${n.toLocaleString('en-IN')}`
}

interface SearchFiltersProps {
  value: ListingFilters
  onChange: (next: ListingFilters) => void
}

export function SearchFilters({ value, onChange }: SearchFiltersProps) {
  const reduce = useReducedMotion()
  const areas = uniqueAreas(PROPERTIES)

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-6xl rounded-3xl border border-white/40 bg-white/70 p-6 shadow-glass backdrop-blur-xl sm:p-8"
    >
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Refine your search
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Adjust price, location, and property type — results update the
            listings above.
          </p>
        </div>
        <button
          type="button"
          className="self-start rounded-full border border-ink/10 bg-page px-4 py-2 text-sm font-medium text-ink-muted transition hover:border-accent-blue/30 hover:text-ink"
          onClick={() =>
            onChange({
              minPrice: PRICE_MIN,
              maxPrice: PRICE_MAX,
              areaKey: 'all',
              kind: 'all',
            })
          }
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <label className="mb-3 block text-sm font-semibold text-ink">
            Price range
          </label>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span className="font-medium text-ink">
              {formatInrShort(value.minPrice)}
            </span>
            <span aria-hidden>—</span>
            <span className="font-medium text-ink">
              {formatInrShort(value.maxPrice)}
            </span>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-ink-muted">
                Minimum
              </span>
              <input
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={5_00_000}
                value={value.minPrice}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  onChange({
                    ...value,
                    minPrice: Math.min(v, value.maxPrice - 5_00_000),
                  })
                }}
                className="h-2 w-full cursor-pointer accent-accent-blue"
              />
            </div>
            <div>
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-ink-muted">
                Maximum
              </span>
              <input
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={5_00_000}
                value={value.maxPrice}
                onChange={(e) => {
                  const v = Number(e.target.value)
                  onChange({
                    ...value,
                    maxPrice: Math.max(v, value.minPrice + 5_00_000),
                  })
                }}
                className="h-2 w-full cursor-pointer accent-accent-gold"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <label
              htmlFor="filter-location"
              className="mb-2 block text-sm font-semibold text-ink"
            >
              Location
            </label>
            <select
              id="filter-location"
              value={value.areaKey}
              onChange={(e) =>
                onChange({ ...value, areaKey: e.target.value })
              }
              className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm font-medium text-ink shadow-sm transition focus:border-accent-blue/40"
            >
              <option value="all">All areas</option>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="filter-type"
              className="mb-2 block text-sm font-semibold text-ink"
            >
              Property type
            </label>
            <select
              id="filter-type"
              value={value.kind}
              onChange={(e) =>
                onChange({
                  ...value,
                  kind: e.target.value as PropertyKind | 'all',
                })
              }
              className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm font-medium text-ink shadow-sm transition focus:border-accent-blue/40"
            >
              <option value="all">All types</option>
              {(Object.keys(PROPERTY_KIND_LABELS) as PropertyKind[]).map(
                (k) => (
                  <option key={k} value={k}>
                    {PROPERTY_KIND_LABELS[k]}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
