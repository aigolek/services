import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { FEATURED_CITIES } from "@/lib/cities";
import { BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}`])
  );

  const homeEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: homeLanguages,
    },
  }));

  const cityEntries: MetadataRoute.Sitemap = FEATURED_CITIES.flatMap((city) => {
    const cityLanguages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${BASE_URL}/${locale}/tercume/${city.slug}`,
      ])
    );
    return routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/tercume/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: {
        languages: cityLanguages,
      },
    }));
  });

  return [...homeEntries, ...cityEntries];
}
