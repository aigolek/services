"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { href: "#about", label: t("about") },
    { href: "#translation", label: t("translation") },
    { href: "#services", label: t("services") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-18 py-4">
        <a href="#hero" className="flex shrink-0 items-center gap-2.5 group">
          <Image
            src="/logo-icon.png"
            alt="Global Consulting Group"
            width={334}
            height={312}
            className="h-9 w-auto shrink-0 transition-transform group-hover:scale-105"
            priority
          />
          <span className="whitespace-nowrap text-white font-semibold tracking-wide text-sm sm:text-base">
            GLOBAL <span className="text-gold">CONSULTING</span> GROUP
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <LanguageSwitcher dark />
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            {t("ctaButton")}
          </a>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitcher dark />
          <button
            className="text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-navy/98 backdrop-blur border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-gold text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+905387442235"
            className="flex items-center gap-2 text-white/90 text-base font-medium"
          >
            <Phone size={18} className="text-gold" />
            +90 538 744 22 35
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
          >
            {t("ctaButton")}
          </a>
        </div>
      )}
    </header>
  );
}
