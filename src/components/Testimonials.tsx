import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import LogoWatermark from "./LogoWatermark";
import Reveal from "./Reveal";

type Testimonial = { quote: string; name: string; origin: string };

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <LogoWatermark className="pointer-events-none absolute -left-28 -bottom-20 h-[480px] w-[480px] opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map(({ quote, name, origin }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
                <Quote className="text-gold transition-transform duration-300 group-hover:scale-110" size={28} />
                <p className="mt-6 flex-1 text-sm leading-relaxed text-navy/80 sm:text-base">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-navy/10 pt-4">
                  <p className="text-sm font-semibold text-navy">{name}</p>
                  <p className="text-xs text-navy/60">{origin}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
