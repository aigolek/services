"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold font-serif text-lg font-semibold transition-transform group-hover:scale-105">
            G
          </span>
          <span className="text-white font-semibold tracking-wide text-sm sm:text-base">
            GLOBAL <span className="text-gold">CONSULTING</span> GROUP
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+905387442235"
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-gold transition-colors"
          >
            <Phone size={16} className="text-gold" />
            +90 538 744 22 35
          </a>
          <a
            href="#iletisim"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            İletişime Geçin
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur border-t border-white/10 px-6 py-6 flex flex-col gap-5">
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
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy"
          >
            İletişime Geçin
          </a>
        </div>
      )}
    </header>
  );
}
