"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Reveal from "./Reveal";

type Testimonial = { quote: string; name: string; avatar?: string };

const GROUP_SIZE = 3;
const ROTATE_MS = 7000;

const AVATAR_COLORS = [
  "bg-navy",
  "bg-gold",
  "bg-emerald-600",
  "bg-rose-500",
  "bg-sky-600",
  "bg-violet-600",
  "bg-amber-600",
  "bg-teal-600",
];

function avatarColor(name: string) {
  let sum = 0;
  for (const ch of name) sum += ch.charCodeAt(0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];
  const source = t("source");

  const groups = useMemo(() => {
    const chunks: Testimonial[][] = [];
    for (let i = 0; i < items.length; i += GROUP_SIZE) {
      chunks.push(items.slice(i, i + GROUP_SIZE));
    }
    return chunks;
  }, [items]);

  const [groupIndex, setGroupIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || groups.length <= 1) return;
    const id = setInterval(() => {
      setGroupIndex((i) => (i + 1) % groups.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, groups.length]);

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t("label")}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl text-balance">
            {t("title")}
          </h2>
        </Reveal>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-6 lg:grid-cols-3"
            >
              {groups[groupIndex]?.map(({ quote, name, avatar }) => (
                <div
                  key={name}
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
                >
                  <Quote className="text-gold transition-transform duration-300 group-hover:scale-110" size={28} />
                  <p className="mt-6 flex-1 text-base leading-relaxed text-navy/80">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-4">
                    {avatar ? (
                      <Image
                        src={avatar}
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarColor(name)}`}
                      >
                        {name.trim().charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-base font-semibold text-navy">{name}</p>
                      <p className="text-sm text-navy/60">{source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {groups.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              {groups.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}`}
                  onClick={() => setGroupIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === groupIndex ? "w-6 bg-gold" : "w-2 bg-navy/15 hover:bg-navy/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
