"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-28 pb-20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.10),transparent_55%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="h-[420px] w-[420px] rounded-full border border-gold/20" />
          <div className="absolute inset-8 rounded-full border border-gold/15" />
          <div className="absolute inset-16 rounded-full border border-gold/10" />
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold uppercase"
        >
          Antalya · Türkiye
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Global Consulting Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl"
        >
          Profesyonel Tercüme ve Danışmanlık — uluslararası müşteriler için
          güvenilir çözümler.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
          >
            Bizimle İletişime Geçin
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://wa.me/905387442235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} />
            Tercüme Talep Et
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/50"
        >
          {["Letonya", "Litvanya", "Estonya", "Fransa", "Almanya", "Rusya", "Ukrayna"].map(
            (country) => (
              <span
                key={country}
                className="text-xs font-medium uppercase tracking-widest"
              >
                {country}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
