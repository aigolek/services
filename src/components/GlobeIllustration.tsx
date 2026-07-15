"use client";

import { motion } from "framer-motion";

const DOTS = [
  { cx: 90, cy: 70, delay: 0 },
  { cx: 220, cy: 55, delay: 0.4 },
  { cx: 150, cy: 150, delay: 0.8 },
  { cx: 250, cy: 170, delay: 1.2 },
  { cx: 60, cy: 180, delay: 1.6 },
];

export default function GlobeIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 300 240" className="h-full w-full overflow-visible">
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 120px" }}
        >
          <circle cx="150" cy="120" r="95" fill="none" stroke="currentColor" strokeOpacity="0.15" />
          <ellipse cx="150" cy="120" rx="95" ry="38" fill="none" stroke="currentColor" strokeOpacity="0.15" />
          <ellipse cx="150" cy="120" rx="95" ry="38" fill="none" stroke="currentColor" strokeOpacity="0.15" transform="rotate(60 150 120)" />
          <ellipse cx="150" cy="120" rx="95" ry="38" fill="none" stroke="currentColor" strokeOpacity="0.15" transform="rotate(120 150 120)" />
        </motion.g>

        <circle cx="150" cy="120" r="95" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />

        {DOTS.map((d, i) => (
          <g key={i}>
            <motion.circle
              cx={d.cx}
              cy={d.cy}
              r="4"
              fill="currentColor"
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
              style={{ transformOrigin: `${d.cx}px ${d.cy}px` }}
            />
            {i < DOTS.length - 1 && (
              <line
                x1={d.cx}
                y1={d.cy}
                x2={DOTS[i + 1].cx}
                y2={DOTS[i + 1].cy}
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeDasharray="3 4"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
