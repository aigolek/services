import { CheckCircle2, FileCheck2, Home, Stamp } from "lucide-react";
import { useTranslations } from "next-intl";
import LogoWatermark from "./LogoWatermark";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

const CATEGORY_ICONS = [Home, Stamp, FileCheck2];

type ChecklistItem = { text: string; children?: string[] };
type DetailCategory = {
  title: string;
  items: { title: string; description: string }[];
};

export default function Services() {
  const t = useTranslations("services");
  const checklist = t.raw("checklist") as ChecklistItem[];
  const categories = t.raw("categories") as DetailCategory[];

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <SectionGlow />
      <LogoWatermark className="pointer-events-none absolute -right-24 top-10 h-[480px] w-[480px] opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        {/* Checklist */}
        <div className="mt-14 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {checklist.map((item, i) => (
            <Reveal
              key={item.text}
              delay={i * 0.05}
              className={item.children ? "sm:col-span-2" : undefined}
            >
              <div className="flex gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-gold"
                />
                <div>
                  <p className="text-sm font-medium text-navy sm:text-base">
                    {item.text}
                  </p>
                  {item.children && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {item.children.map((child) => (
                        <li
                          key={child}
                          className="rounded-full border border-navy/15 px-3 py-1 text-xs text-navy/70"
                        >
                          {child}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-2xl text-base leading-relaxed text-navy/70">
            {t("detailIntro")}
          </p>
        </Reveal>

        {/* Detailed categories */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map(({ title, items }, i) => {
            const Icon = CATEGORY_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-navy/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.title}>
                        <p className="text-sm font-semibold text-gold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-navy/70">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
