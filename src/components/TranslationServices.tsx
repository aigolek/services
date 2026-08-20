import {
  Briefcase,
  Code2,
  Gavel,
  Globe2,
  HeartPulse,
  IdCard,
  Languages,
  Layers,
  Lock,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const CATEGORY_ICONS = [Gavel, Wrench, HeartPulse, Briefcase, Code2, IdCard];
const WHY_US_ICONS = [Layers, Globe2, ShieldCheck, Lock];

const TURKISH_CITIES = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara",
  "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman",
  "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
  "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne",
  "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun",
  "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir",
  "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri",
  "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
  "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
  "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun",
  "Şanlıurfa", "Siirt", "Sinop", "Şırnak", "Sivas", "Tekirdağ", "Tokat",
  "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak",
];

export default function TranslationServices() {
  const t = useTranslations("translation");
  const categories = t.raw("categories") as { title: string; description: string }[];
  const whyUs = t.raw("whyUs") as { title: string; description: string }[];
  const steps = t.raw("steps") as { title: string; description: string }[];
  const languages = t.raw("languages") as string[];

  return (
    <section id="translation" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/80 sm:text-lg">
            {t("intro")}
          </p>
        </Reveal>

        {/* Languages bar */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-navy/10 bg-white p-5">
            <span className="flex items-center gap-2 text-sm font-semibold text-navy">
              <Languages size={18} className="text-gold" />
              {t("languagesTitle")}
            </span>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-1.5 text-sm font-medium text-navy"
                >
                  {lang}
                </span>
              ))}
              <span className="rounded-full px-4 py-1.5 text-sm font-medium text-navy/50">
                {t("languagesOthers")}
              </span>
            </div>
          </div>
        </Reveal>

        {/* What we translate */}
        <Reveal delay={0.1}>
          <h3 className="mt-16 text-lg font-semibold text-navy sm:text-xl">
            {t("whatWeTranslateTitle")}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ title, description }, i) => {
            const Icon = CATEGORY_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy">
                    <Icon size={20} />
                  </div>
                  <h4 className="mt-5 text-base font-semibold text-navy">
                    {title}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-navy/70">
                    {description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Why us */}
        <Reveal delay={0.1}>
          <h3 className="mt-16 text-lg font-semibold text-navy sm:text-xl">
            {t("whyUsTitle")}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ title, description }, i) => {
            const Icon = WHY_US_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 text-navy transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/10">
                  <Icon className="text-gold transition-transform duration-300 group-hover:scale-110" size={20} />
                  <h4 className="mt-4 text-base font-semibold">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* How we work */}
        <Reveal delay={0.1}>
          <h3 className="mt-16 text-lg font-semibold text-navy sm:text-xl">
            {t("howWeWorkTitle")}
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ title, description }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="relative h-full">
                <span className="text-4xl font-semibold text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 text-base font-semibold text-navy">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cities coverage */}
        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl border border-navy/10 bg-white p-8 sm:p-10">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-navy sm:text-xl">
                {t("citiesTitle")}
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/70">
              {t("citiesSubtitle")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TURKISH_CITIES.map((city) => (
                <a
                  key={city}
                  href="#contact"
                  className="rounded-full border border-navy/10 bg-cream px-3.5 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-navy"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-gold/25 bg-gold/[0.06] px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <p className="max-w-xl text-base font-medium text-navy sm:text-lg">
              {t("ctaText")}
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark hover:shadow-xl hover:shadow-whatsapp/20"
            >
              {t("ctaButton")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
