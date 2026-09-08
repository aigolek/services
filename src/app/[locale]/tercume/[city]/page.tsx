import { MapPin, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import { routing } from "@/i18n/routing";
import { FEATURED_CITIES, getCityBySlug, getNearbyCities } from "@/lib/cities";

const WHATSAPP_NUMBER = "905387442235";

export function generateStaticParams() {
  return FEATURED_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  const t = await getTranslations({ locale, namespace: "cityPage" });
  const title = t("title", { city: city.name });
  const description = t("intro", { city: city.name });

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/tercume/${city.slug}`,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `/${loc}/tercume/${city.slug}`])
      ),
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/tercume/${city.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const t = await getTranslations({ locale, namespace: "cityPage" });
  const nearby = getNearbyCities(city);
  const steps = [t("how1"), t("how2"), t("how3", { city: city.name })];

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
          <div className="relative mx-auto max-w-4xl px-6">
            <Reveal>
              <Link
                href={`/${locale}#translation`}
                className="text-sm font-medium text-navy/60 transition-colors hover:text-gold"
              >
                {t("backLink")}
              </Link>
              <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-gold">
                {t("eyebrow")}
              </span>
              <h1 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
                {t("title", { city: city.name })}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/80 sm:text-lg">
                {t("intro", { city: city.name })}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10 rounded-3xl border border-navy/10 bg-white p-8 sm:p-10">
                <h2 className="text-lg font-semibold text-navy sm:text-xl">
                  {t("regionHeading")}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-navy/70">
                  {t(`regions.${city.region}`)}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 text-lg font-semibold text-navy sm:text-xl">
                {t("howHeading")}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    <span className="text-4xl font-semibold text-navy/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-navy/70">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {nearby.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-14">
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-navy sm:text-xl">
                    <MapPin size={18} className="text-gold" />
                    {t("nearbyHeading")}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {nearby.map((n) => (
                      <Link
                        key={n.slug}
                        href={`/${locale}/tercume/${n.slug}`}
                        className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-navy"
                      >
                        {n.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <div className="mt-14 flex flex-col items-start gap-6 rounded-3xl border border-gold/25 bg-gold/[0.06] px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
                <p className="max-w-xl text-base font-medium text-navy sm:text-lg">
                  {t("ctaText")}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark hover:shadow-xl hover:shadow-whatsapp/20"
                >
                  <MessageCircle size={16} />
                  {t("ctaButton")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
