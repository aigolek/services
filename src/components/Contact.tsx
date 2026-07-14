import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-white/60">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <a
              href="tel:+905387442235"
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]"
            >
              <Phone className="text-gold" size={22} />
              <div>
                <p className="text-sm text-white/50">{t("phoneLabel")}</p>
                <p className="mt-1 font-medium text-white">
                  +90 538 744 22 35
                </p>
                <p className="font-medium text-white">+90 537 989 92 21</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href="mailto:info@globalconsulting.com"
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]"
            >
              <Mail className="text-gold" size={22} />
              <div>
                <p className="text-sm text-white/50">{t("emailLabel")}</p>
                <p className="mt-1 font-medium text-white break-all">
                  info@globalconsulting.com
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <MapPin className="text-gold" size={22} />
              <div>
                <p className="text-sm text-white/50">{t("addressLabel")}</p>
                <p className="mt-1 font-medium text-white">
                  {t("addressValue")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-7">
              <p className="text-sm text-white/70">{t("quickLabel")}</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/905387442235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                >
                  <Send size={16} />
                  Telegram
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
