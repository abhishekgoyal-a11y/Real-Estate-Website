import { useMemo, useState } from 'react'
import { PROPERTIES } from './data/properties'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { FeaturedProperty } from './components/FeaturedProperty'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PropertyGrid } from './components/PropertyGrid'
import { SearchFilters } from './components/SearchFilters'
import { Testimonials } from './components/Testimonials'
import { filterProperties, type ListingFilters } from './lib/filterProperties'

const INITIAL_FILTERS: ListingFilters = {
  minPrice: 0,
  maxPrice: 3_50_00_000,
  areaKey: 'all',
  kind: 'all',
}

const FEATURED = PROPERTIES.find((p) => p.id === '4')!

export default function App() {
  const [filters, setFilters] = useState<ListingFilters>(INITIAL_FILTERS)
  const filtered = useMemo(
    () => filterProperties(PROPERTIES, filters),
    [filters],
  )

  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        <Hero />
        <section
          id="listings"
          className="scroll-mt-20 py-20 sm:py-24"
          aria-labelledby="listings-heading"
        >
          <h2 id="listings-heading" className="sr-only">
            Property listings
          </h2>
          <PropertyGrid properties={filtered} />
        </section>

        <section
          id="search"
          className="scroll-mt-20 px-4 pb-20 sm:px-6"
          aria-labelledby="search-heading"
        >
          <h2 id="search-heading" className="sr-only">
            Search and filters
          </h2>
          <SearchFilters value={filters} onChange={setFilters} />
        </section>

        <FeaturedProperty property={FEATURED} />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
