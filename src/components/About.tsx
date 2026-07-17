import { Globe2, ShieldCheck, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Counter from "./Counter";
import Reveal from "./Reveal";

const STAT_ICONS = [Globe2, Users, ShieldCheck];

export default function About() {
  const t = useTranslations("about");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                {t("label")}
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
                {t("title")}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-navy/80 sm:text-lg">
                {t("paragraph1")}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 text-base leading-relaxed text-navy/80 sm:text-lg">
                {t("paragraph2")}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
                {stats.map(({ value, label }, i) => {
                  const Icon = STAT_ICONS[i];
                  return (
                    <div key={label} className="flex flex-col gap-2">
                      <Icon className="text-gold" size={22} />
                      <span className="text-2xl font-semibold text-navy sm:text-3xl">
                        <Counter value={value} />
                      </span>
                      <span className="text-sm text-navy/70">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-white p-10 shadow-xl shadow-navy/5 sm:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
              <p className="relative font-serif text-2xl italic leading-relaxed text-navy sm:text-3xl">
                &ldquo;{t("quote")}&rdquo;
              </p>
              <div className="relative mt-8 h-px w-16 bg-gold" />
              <p className="relative mt-6 text-base font-medium tracking-wide text-gold">
                {t("quoteOrg")}
              </p>
              <p className="relative text-base text-navy/60">
                {t("quoteLocation")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
