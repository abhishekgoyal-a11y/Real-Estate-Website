export type PropertyKind =
  | 'apartment'
  | 'villa'
  | 'studio'
  | 'penthouse'
  | 'flat'
  | 'farmhouse'

export interface Property {
  id: string
  title: string
  priceDisplay: string
  /** Price in INR for filtering */
  priceInr: number
  locationLabel: string
  /** Short area for filter dropdown */
  areaKey: string
  beds: number
  baths: number
  sqft: number
  kind: PropertyKind
  image: string
  description?: string
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment in Gurgaon',
    priceDisplay: '₹85 Lakhs',
    priceInr: 85_00_000,
    locationLabel: 'Gurgaon, Sector 57',
    areaKey: 'Gurgaon',
    beds: 3,
    baths: 2,
    sqft: 1500,
    kind: 'apartment',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description:
      'Sun-filled corners, premium fittings, and skyline views in a gated community.',
  },
  {
    id: '2',
    title: 'Signature Villa with Private Garden',
    priceDisplay: '₹2.5 Crore',
    priceInr: 2_50_00_000,
    locationLabel: 'Noida Extension',
    areaKey: 'Noida',
    beds: 5,
    baths: 4,
    sqft: 4200,
    kind: 'villa',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description:
      'Expansive living with landscaped outdoors and smart-home ready infrastructure.',
  },
  {
    id: '3',
    title: 'Designer Studio Apartment',
    priceDisplay: '₹35 Lakhs',
    priceInr: 35_00_000,
    locationLabel: 'Delhi',
    areaKey: 'Delhi',
    beds: 1,
    baths: 1,
    sqft: 520,
    kind: 'studio',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    description:
      'Efficient layout with full-height windows and boutique lobby access.',
  },
  {
    id: '4',
    title: '4BHK Sky Penthouse',
    priceDisplay: '₹3.2 Crore',
    priceInr: 3_20_00_000,
    locationLabel: 'South Delhi',
    areaKey: 'South Delhi',
    beds: 4,
    baths: 4,
    sqft: 3400,
    kind: 'penthouse',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    description:
      'Private terraces, double-height living, and uninterrupted city panoramas.',
  },
  {
    id: '5',
    title: 'Modern 2BHK Flat',
    priceDisplay: '₹60 Lakhs',
    priceInr: 60_00_000,
    locationLabel: 'Ghaziabad',
    areaKey: 'Ghaziabad',
    beds: 2,
    baths: 2,
    sqft: 1100,
    kind: 'flat',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    description:
      'Family-friendly tower with clubhouse, ample parking, and metro connectivity.',
  },
  {
    id: '6',
    title: 'Serene Farmhouse Retreat',
    priceDisplay: '₹1.8 Crore',
    priceInr: 1_80_00_000,
    locationLabel: 'Faridabad',
    areaKey: 'Faridabad',
    beds: 4,
    baths: 3,
    sqft: 4800,
    kind: 'farmhouse',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description:
      'Sprawling greens, pool-ready plot, and weekend-living calm minutes from the city.',
  },
]

export const PROPERTY_KIND_LABELS: Record<PropertyKind, string> = {
  apartment: 'Apartment',
  villa: 'Villa',
  studio: 'Studio',
  penthouse: 'Penthouse',
  flat: 'Flat',
  farmhouse: 'Farmhouse',
}

export function propertyFeatures(p: Property): string {
  return `${p.beds} Beds • ${p.baths} Baths • ${p.sqft.toLocaleString('en-IN')} sq.ft`
}
