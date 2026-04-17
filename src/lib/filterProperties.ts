import type { Property, PropertyKind } from '../data/properties'

export interface ListingFilters {
  minPrice: number
  maxPrice: number
  areaKey: string
  kind: PropertyKind | 'all'
}

export function filterProperties(
  list: Property[],
  f: ListingFilters,
): Property[] {
  return list.filter((p) => {
    if (p.priceInr < f.minPrice || p.priceInr > f.maxPrice) return false
    if (f.areaKey !== 'all' && p.areaKey !== f.areaKey) return false
    if (f.kind !== 'all' && p.kind !== f.kind) return false
    return true
  })
}

export function uniqueAreas(properties: Property[]): string[] {
  return [...new Set(properties.map((p) => p.areaKey))].sort()
}
