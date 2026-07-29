import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { routing, type Locale } from "@/i18n/routing";
import { BASE_URL } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const OG_LOCALES: Record<Locale, string> = {
  ru: "ru_RU",
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
};

const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Global Consulting Group",
  image: `${BASE_URL}/logo-full-dark.jpg`,
  url: BASE_URL,
  telephone: "+905387442235",
  email: "info@globalconsulting.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manavgat",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7861343,
    longitude: 31.4471349,
  },
  sameAs: ["https://www.instagram.com/global.consulting.group"],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((loc) => [loc, `/${loc}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Global Consulting Group",
      locale: OG_LOCALES[locale as Locale],
      alternateLocale: routing.locales
        .filter((loc) => loc !== locale)
        .map((loc) => OG_LOCALES[loc]),
      images: [{ url: "/logo-full-dark.jpg", width: 640, height: 640 }],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/logo-full-dark.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BUSINESS_JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
