import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "İkamet başvurum boyunca her adımda bilgilendirildim. Belgelerim eksiksiz ve zamanında hazırlandı. Kesinlikle tavsiye ederim.",
    name: "Elena K.",
    origin: "Letonya 🇱🇻",
  },
  {
    quote:
      "Noter tasdikli tercüme ihtiyacımızı çok hızlı ve profesyonel şekilde çözdüler. İletişim her zaman net ve samimiydi.",
    name: "Marc D.",
    origin: "Fransa 🇫🇷",
  },
  {
    quote:
      "Türkiye'de yeni bir hayat kurarken en çok güvendiğimiz ekip oldular. Teşekkürler Global Consulting Group!",
    name: "Olena P.",
    origin: "Ukrayna 🇺🇦",
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Müşteri Yorumları
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            Bize güvenen müşterilerimiz ne diyor?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, origin }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
                <Quote className="text-gold" size={28} />
                <p className="mt-6 flex-1 text-sm leading-relaxed text-navy/70 sm:text-base">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-navy/10 pt-4">
                  <p className="text-sm font-semibold text-navy">{name}</p>
                  <p className="text-xs text-navy/50">{origin}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
