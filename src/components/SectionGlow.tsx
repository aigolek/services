"use client";

import { motion } from "framer-motion";

export default function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,162,39,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(201,162,39,0.10),transparent_55%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-glow" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-glow)" />
      </svg>
      <motion.div
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.4, scale: 1.1 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 }}
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
    </div>
  );
}
