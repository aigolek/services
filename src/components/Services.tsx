import { FileCheck2, FileText, Home, Stamp } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: FileText,
    title: "Resmî Belge Tercümesi",
    description:
      "Noter tasdikli tercümeler; vize, eğitim, evlilik ve iş belgeleri dahil olmak üzere tüm resmî evraklarınızın eksiksiz ve doğru şekilde tercümesi.",
  },
  {
    icon: Home,
    title: "İkamet ve Göç Danışmanlığı",
    description:
      "Türkiye'de ikamet izni, oturum başvurusu ve göç süreçlerinin her adımında yanınızdayız; başvurudan sonuçlanmasına kadar tam destek.",
  },
  {
    icon: Stamp,
    title: "Noter ve Konsolosluk İşlemleri",
    description:
      "Noter ve konsolosluklar için gerekli belge paketlerinin hazırlanması, apostil işlemleri ve resmî kurum takibi.",
  },
  {
    icon: FileCheck2,
    title: "Belge Hazırlama ve Danışmanlık",
    description:
      "Başvurunuz için gereken tüm belgelerin eksiksiz hazırlanması ve süreç boyunca uzman danışmanlık desteği.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Hizmetler
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl text-balance">
            İhtiyacınıza özel profesyonel çözümler
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
