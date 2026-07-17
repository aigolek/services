import {
  Briefcase,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Home,
  Laptop,
  Plane,
  Stamp,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

const CATEGORY_ICONS = [Home, Stamp, FileCheck2];
const VISA_ICONS = [Briefcase, GraduationCap, Users, Laptop, Plane, Plane];

type ChecklistItem = { text: string; children?: string[] };
type DetailCategory = {
  title: string;
  items: { title: string; description: string }[];
};

export default function Services() {
  const t = useTranslations("services");
  const checklist = t.raw("checklist") as ChecklistItem[];
  const categories = t.raw("categories") as DetailCategory[];
  const visaItem = checklist.find((item) => item.children);
  const plainItems = checklist.filter((item) => !item.children);

  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <SectionGlow />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
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
        <div className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {plainItems.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.05}>
              <div className="flex gap-3">
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-gold"
                />
                <p className="text-base font-medium text-navy sm:text-lg">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Visa types — highlighted */}
        {visaItem && (
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-3xl border-2 border-gold/30 bg-gold/5 p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <Plane className="text-gold" size={28} />
                <h3 className="text-xl font-semibold text-navy sm:text-2xl">
                  {visaItem.text}
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {visaItem.children?.map((child, i) => {
                  const Icon = VISA_ICONS[i] ?? Plane;
                  return (
                    <div
                      key={child}
                      className="flex items-center gap-3 rounded-2xl border border-gold/25 bg-white px-4 py-4 shadow-sm"
                    >
                      <Icon className="shrink-0 text-gold" size={22} />
                      <span className="text-sm font-semibold text-navy sm:text-base">
                        {child}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <p className="mt-16 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
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
                  <h3 className="mt-6 text-lg font-semibold text-navy sm:text-xl">
                    {title}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.title}>
                        <p className="text-base font-semibold text-gold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-navy/70 sm:text-base">
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
