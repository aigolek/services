import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "tr", "en", "de"],
  defaultLocale: "ru",
});

export type Locale = (typeof routing.locales)[number];
