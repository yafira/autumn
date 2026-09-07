"use client";

import { motion } from "framer-motion";

export default function PriceCardStack() {
  return (
    <div className="relative h-[300px] w-full">
      <div className="absolute inset-8 rounded-full bg-rose/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-2 top-4 w-44 rounded-sm border border-linen/25 bg-card p-4 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.45)]"
      >
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-ink-soft">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose" /> GOOGLE ADS
        </div>
        <div className="font-display text-[15px] font-bold text-ink">Weekend Getaway</div>
        <div className="mt-1.5 text-[15px] font-bold text-rose-deep">$189/night</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-24 top-24 w-44 rounded-sm border border-linen/25 bg-card p-4 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.45)]"
      >
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-ink-soft">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-sage" /> HOTEL ADS
        </div>
        <div className="font-display text-[15px] font-bold text-ink">Stay 3, pay for 2</div>
        <div className="mt-1.5 text-[15px] font-bold text-plum">$219/night</div>
      </motion.div>
    </div>
  );
}
