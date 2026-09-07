"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AutumnDashboard from "./AutumnDashboard";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative mb-10 ml-6">
      {/* soft gradient-mesh backdrop */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute -top-6 -right-6 h-56 w-56 rounded-full bg-rose/25 blur-3xl" />
        <div className="absolute bottom-0 -left-8 h-48 w-48 rounded-full bg-sage/25 blur-3xl" />
      </div>

      {/* secondary peeking card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -12 }}
        whileInView={{ opacity: 1, y: 0, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-16 -left-16 z-0 w-44 rounded-sm border border-ink/15 bg-card p-4 shadow-[0_25px_50px_-20px_rgba(43,32,41,0.35)]"
      >
        <div className="mb-1.5 text-[11px] text-ink-soft">This week</div>
        <div className="font-display text-lg font-bold text-plum">14 direct bookings</div>
        <div className="mt-2.5 flex h-8 items-end gap-1">
          {[40, 55, 35, 70, 50, 85, 60].map((h, i) => (
            <span key={i} className="w-full rounded-[1px] bg-rose/60" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      {/* main card with corner brackets + tilt */}
      <div className="relative z-10">
        <span className="pointer-events-none absolute -top-2.5 -left-2.5 h-4 w-4 border-t-2 border-l-2 border-ink/40" />
        <span className="pointer-events-none absolute -top-2.5 -right-2.5 h-4 w-4 border-t-2 border-r-2 border-ink/40" />
        <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-4 w-4 border-b-2 border-l-2 border-ink/40" />
        <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-4 w-4 border-b-2 border-r-2 border-ink/40" />

        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="shadow-[0_30px_60px_-25px_rgba(43,32,41,0.3)]"
        >
          <AutumnDashboard />
        </motion.div>
      </div>
    </div>
  );
}
