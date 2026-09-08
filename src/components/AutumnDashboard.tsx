"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

export default function AutumnDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="rounded-sm border border-ink/15 bg-card p-6">
      <div className="mb-6 font-display text-[15px] font-semibold text-ink-soft">
        Your search campaign, this month
      </div>

      <div className="mb-7 grid grid-cols-3 gap-4">
        <div>
          <div className="mb-1 text-[12px] text-ink-soft">Direct revenue</div>
          <div className="font-mono text-2xl text-ink">
            $<Counter target={248} suffix="K" />
          </div>
          <div className="mt-0.5 font-mono text-[11px] font-semibold text-sage">+12%</div>
        </div>
        <div>
          <div className="mb-1 text-[12px] text-ink-soft">Direct bookings</div>
          <div className="font-mono text-2xl text-ink">
            <Counter target={312} />
          </div>
          <div className="mt-0.5 font-mono text-[11px] font-semibold text-sage">+18%</div>
        </div>
        <div>
          <div className="mb-1 text-[12px] text-ink-soft">Ad spend ROAS</div>
          <div className="font-mono text-2xl text-ink">
            <Counter target={5.2} decimals={1} suffix="x" />
          </div>
          <div className="mt-0.5 font-mono text-[11px] font-semibold text-sage">+0.4</div>
        </div>
      </div>

      <div className="relative h-28 w-full">
        <svg viewBox="0 0 300 100" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dashFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cc5b2c" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#cc5b2c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 82 L40 88 L80 68 L120 74 L160 50 L200 58 L240 30 L300 20 L300 100 L0 100 Z"
            fill="url(#dashFade)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path
            d="M0 82 L40 88 L80 68 L120 74 L160 50 L200 58 L240 30 L300 20"
            fill="none"
            stroke="#cc5b2c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    </div>
  );
}
