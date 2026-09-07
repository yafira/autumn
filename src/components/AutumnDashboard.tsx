"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";

const TABS = ["Overview", "Campaigns", "Channels", "Reports"];

export default function AutumnDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className="rounded-sm border border-ink/15 bg-card p-5">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-display text-[15px] font-bold uppercase tracking-wide">Autumn</span>
          <span className="text-[13px] text-ink-soft">Marketing</span>
        </div>
        <div className="flex gap-4 text-[12.5px] text-ink-soft">
          {TABS.map((t, i) => (
            <span
              key={t}
              className={i === 0 ? "border-b-2 border-rose pb-1 font-semibold text-ink" : ""}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-7 grid grid-cols-3 gap-4">
        <div>
          <div className="mb-1 text-[10.5px] tracking-wide text-ink-soft">DIRECT REVENUE</div>
          <div className="font-display text-2xl font-bold text-ink">
            $<Counter target={248} suffix="K" />
          </div>
          <div className="mt-0.5 text-[11px] font-semibold text-sage">+12%</div>
        </div>
        <div>
          <div className="mb-1 text-[10.5px] tracking-wide text-ink-soft">DIRECT BOOKINGS</div>
          <div className="font-display text-2xl font-bold text-ink">
            <Counter target={312} />
          </div>
          <div className="mt-0.5 text-[11px] font-semibold text-sage">+18%</div>
        </div>
        <div>
          <div className="mb-1 text-[10.5px] tracking-wide text-ink-soft">ROAS</div>
          <div className="font-display text-2xl font-bold text-ink">
            <Counter target={5.2} decimals={1} suffix="x" />
          </div>
          <div className="mt-0.5 text-[11px] font-semibold text-sage">+0.4</div>
        </div>
      </div>

      <div className="relative h-28 w-full">
        <svg viewBox="0 0 300 100" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dashFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a8455c" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#a8455c" stopOpacity="0" />
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
            stroke="#a8455c"
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
