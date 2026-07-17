import {
  Briefcase,
  Code2,
  Gavel,
  Globe2,
  HeartPulse,
  IdCard,
  Layers,
  Lock,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const CATEGORY_ICONS = [Gavel, Wrench, HeartPulse, Briefcase, Code2, IdCard];
const WHY_US_ICONS = [Layers, Globe2, ShieldCheck, Lock];

export default function TranslationServices() {
  const t = useTranslations("translation");
  const categories = t.raw("categories") as { title: string; description: string }[];
  const whyUs = t.raw("whyUs") as { title: string; description: string }[];
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section id="translation" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/80 sm:text-lg">
            {t("intro")}
          </p>
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
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
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
                  <h4 className="mt-4 text-sm font-semibold">{title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-navy/70">
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
                <h4 className="mt-2 text-sm font-semibold text-navy">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-navy/70">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-gold/25 bg-gold/[0.06] px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <p className="max-w-xl text-base font-medium text-navy sm:text-lg">
              {t("ctaText")}
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
            >
              {t("ctaButton")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
