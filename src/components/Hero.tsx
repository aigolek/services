"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");
  const countries = t.raw("countries") as string[];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-navy"
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

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 pt-28 pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold uppercase"
        >
          {t("badge")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
          >
            {t("ctaPrimary")}
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
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute inset-x-0 bottom-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <motion.div
          className="flex w-max items-center gap-10 text-white/60"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...countries, ...countries].map((country, i) => (
            <span
              key={`${country}-${i}`}
              className="text-xs font-medium uppercase tracking-widest"
            >
              {country}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
