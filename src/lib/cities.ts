export type CityRegion = "marmara" | "icAnadolu" | "ege" | "akdeniz";

export type CityInfo = {
  slug: string;
  name: string;
  region: CityRegion;
};

export const FEATURED_CITIES: CityInfo[] = [
  { slug: "istanbul", name: "İstanbul", region: "marmara" },
  { slug: "bursa", name: "Bursa", region: "marmara" },
  { slug: "ankara", name: "Ankara", region: "icAnadolu" },
  { slug: "izmir", name: "İzmir", region: "ege" },
  { slug: "aydin", name: "Aydın", region: "ege" },
  { slug: "mugla", name: "Muğla", region: "ege" },
  { slug: "antalya", name: "Antalya", region: "akdeniz" },
  { slug: "mersin", name: "Mersin", region: "akdeniz" },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return FEATURED_CITIES.find((c) => c.slug === slug);
}

export function getNearbyCities(city: CityInfo): CityInfo[] {
  return FEATURED_CITIES.filter(
    (c) => c.region === city.region && c.slug !== city.slug
  );
}
