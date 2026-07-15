"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LABELS: Record<Locale, string> = {
  ru: "Русский",
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
};

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const textColor = dark ? "text-white/80 hover:text-gold" : "text-navy/70 hover:text-navy";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("changeLanguage")}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${textColor}`}
      >
        <Globe size={16} />
        {locale.toUpperCase()}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-10 cursor-default"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-navy/10 bg-white py-1 shadow-xl">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.replace(pathname, { locale: loc });
                }}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-navy/5 ${
                  loc === locale ? "font-semibold text-navy" : "text-navy/70"
                }`}
              >
                {LABELS[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
