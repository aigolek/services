"use client";

import { ExternalLink, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <SectionGlow />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
          <p className="mt-4 text-navy/70">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <a
              href="tel:+905387442235"
              onClick={() => trackPhoneClick("contact_section")}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-cream p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <Phone className="text-gold" size={22} />
              <div>
                <p className="text-base text-navy/60">{t("phoneLabel")}</p>
                <p className="mt-1 font-medium text-navy">
                  +90 538 744 22 35
                </p>
                <p className="font-medium text-navy">+90 537 989 92 21</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <a
              href="mailto:info@globalconsulting.com"
              className="group flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-cream p-7 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <Mail className="text-gold" size={22} />
              <div>
                <p className="text-base text-navy/60">{t("emailLabel")}</p>
                <p className="mt-1 font-medium text-navy break-all">
                  info@globalconsulting.com
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-cream p-7">
              <MapPin className="text-gold" size={22} />
              <div>
                <p className="text-base text-navy/60">{t("addressLabel")}</p>
                <p className="mt-1 font-medium text-navy">
                  {t("addressValue")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-7">
              <p className="text-base text-navy/70">{t("quickLabel")}</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/905387442235"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contact_section")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/global.consulting.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.1}>
            <div className="h-80 overflow-hidden rounded-2xl border border-navy/10 lg:h-full">
              <iframe
                title="Global Consulting Group — Manavgat"
                src="https://www.google.com/maps?q=36.7861343,31.4471349&z=16&output=embed"
                className="h-full w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-navy/10 bg-cream p-7">
              <p className="text-base text-navy/70">{t("reviewsTitle")}</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.google.com/maps/place/MANAVGAT+GLOBAL+TERC%C3%9CME/@36.7861385,31.442264,17z/data=!4m8!3m7!1s0x14c3575de130dd09:0xafab967b91cd49ff!8m2!3d36.7861343!4d31.4471349!9m1!1b1!16s%2Fg%2F11zkwz15_8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3 transition-colors hover:border-gold/40"
                >
                  <span className="flex items-center gap-2 text-base text-navy">
                    <Star size={16} className="text-gold" />
                    {t("reviewsManavgat")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-navy/40 transition-colors group-hover:text-gold"
                  />
                </a>
                <a
                  href="https://www.google.com/maps/place/ANTALYA%2FMANAVGAT+DURU+TERC%C3%9CME+OF%C4%B0S%C4%B0%2F+YEM%C4%B0NL%C4%B0+TERC%C3%9CMAN/@36.7866085,31.4328431,17z/data=!3m1!4b1!4m6!3m5!1s0x14c357ad85aad53d:0x9ccd1a48f810e62c!8m2!3d36.7866042!4d31.435418!16s%2Fg%2F11lts41qg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3 transition-colors hover:border-gold/40"
                >
                  <span className="flex items-center gap-2 text-base text-navy">
                    <Star size={16} className="text-gold" />
                    {t("reviewsAntalya")}
                  </span>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-navy/40 transition-colors group-hover:text-gold"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
