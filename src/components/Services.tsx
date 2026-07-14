import { CheckCircle2, FileCheck2, Home, Stamp } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

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
    <section id="services" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>

        {/* Checklist */}
        <div className="mt-14 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {checklist.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.05}>
              <div className="flex gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-gold"
                />
                <div>
                  <p className="text-sm font-medium text-white sm:text-base">
                    {item.text}
                  </p>
                  {item.children && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {item.children.map((child) => (
                        <li
                          key={child}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
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
          <p className="mt-16 max-w-2xl text-base leading-relaxed text-white/60">
            {t("detailIntro")}
          </p>
        </Reveal>

        {/* Detailed categories */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map(({ title, items }, i) => {
            const Icon = CATEGORY_ICONS[i];
            return (
              <Reveal key={title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.title}>
                        <p className="text-sm font-semibold text-gold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
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
