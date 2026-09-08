"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const flowTransition = {
  duration: 1.6,
  ease: "linear" as const,
  repeat: Infinity,
};

export default function FunnelDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px" });

  return (
    <div className="mt-16">
      <svg
        ref={ref}
        viewBox="0 0 1000 220"
        width="100%"
        role="img"
        aria-label="Diagram showing a guest search leading either to a direct booking through Autumn or to an OTA that takes a commission"
      >
        <g fontFamily="Inter, sans-serif">
          <rect x="10" y="86" width="150" height="48" rx="6" fill="rgba(248,236,217,0.08)" stroke="rgba(248,236,217,0.35)" />
          <text x="85" y="115" fill="#f8ecd9" fontSize="14" textAnchor="middle">Guest searches</text>

          <rect x="340" y="26" width="180" height="48" rx="6" fill="rgba(204,91,44,0.18)" stroke="rgba(204,91,44,0.6)" />
          <text x="430" y="55" fill="#f8ecd9" fontSize="14" textAnchor="middle">Autumn SEM</text>

          <rect x="690" y="26" width="200" height="48" rx="6" fill="rgba(248,236,217,0.1)" stroke="rgba(248,236,217,0.4)" />
          <text x="790" y="49" fill="#f8ecd9" fontSize="13.5" textAnchor="middle">Direct booking</text>
          <text x="790" y="65" fill="#f2a765" fontSize="12" textAnchor="middle">Full rate, your site</text>

          <rect x="340" y="146" width="180" height="48" rx="6" fill="rgba(248,236,217,0.05)" stroke="rgba(248,236,217,0.2)" />
          <text x="430" y="175" fill="rgba(248,236,217,0.7)" fontSize="14" textAnchor="middle">OTA listing</text>

          <rect x="690" y="146" width="200" height="48" rx="6" fill="rgba(248,236,217,0.05)" stroke="rgba(248,236,217,0.2)" />
          <text x="790" y="169" fill="rgba(248,236,217,0.7)" fontSize="13.5" textAnchor="middle">Booking, minus 15–25%</text>
          <text x="790" y="185" fill="rgba(248,236,217,0.45)" fontSize="12" textAnchor="middle">OTA keeps the commission</text>

          <path d="M160 105 C 240 105, 240 50, 340 50" fill="none" stroke="rgba(204,91,44,0.5)" strokeWidth="2" />
          <motion.path
            d="M160 105 C 240 105, 240 50, 340 50"
            fill="none"
            stroke="#f2a765"
            strokeWidth="3"
            strokeDasharray="10 14"
            strokeLinecap="round"
            animate={inView ? { strokeDashoffset: [240, 0] } : { opacity: 0 }}
            transition={flowTransition}
          />
          <path d="M520 50 L690 50" fill="none" stroke="rgba(204,91,44,0.5)" strokeWidth="2" />
          <motion.path
            d="M520 50 L690 50"
            fill="none"
            stroke="#f2a765"
            strokeWidth="3"
            strokeDasharray="10 14"
            strokeLinecap="round"
            animate={inView ? { strokeDashoffset: [240, 0] } : { opacity: 0 }}
            transition={flowTransition}
          />

          <path d="M160 115 C 240 115, 240 170, 340 170" fill="none" stroke="rgba(248,236,217,0.25)" strokeWidth="2" />
          <motion.path
            d="M160 115 C 240 115, 240 170, 340 170"
            fill="none"
            stroke="rgba(248,236,217,0.5)"
            strokeWidth="3"
            strokeDasharray="8 12"
            strokeLinecap="round"
            animate={inView ? { strokeDashoffset: [160, 0] } : { opacity: 0 }}
            transition={flowTransition}
          />
          <path d="M520 170 L690 170" fill="none" stroke="rgba(248,236,217,0.25)" strokeWidth="2" />
          <motion.path
            d="M520 170 L690 170"
            fill="none"
            stroke="rgba(248,236,217,0.5)"
            strokeWidth="3"
            strokeDasharray="8 12"
            strokeLinecap="round"
            animate={inView ? { strokeDashoffset: [160, 0] } : { opacity: 0 }}
            transition={flowTransition}
          />
        </g>
      </svg>
      <p className="mt-3.5 text-center text-[13.5px] text-[rgba(248,236,217,0.7)]">
        The same guest, two outcomes — one where you keep the whole booking.
      </p>
    </div>
  );
}
