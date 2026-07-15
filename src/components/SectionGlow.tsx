"use client";

import { motion } from "framer-motion";

export default function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,162,39,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,162,39,0.10),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0.25, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.15, scale: 1 }}
        animate={{ opacity: 0.3, scale: 1.1 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
      />
    </div>
  );
}
