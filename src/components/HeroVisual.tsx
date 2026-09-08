"use client";

import { useState } from "react";
import AutumnDashboard from "./AutumnDashboard";
import FlipReveal from "./FlipReveal";
import { motion } from "framer-motion";

function useReveal() {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const active = pinned || hovered;
  return {
    active,
    handlers: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onClick: () => setPinned((v) => !v),
    },
  };
}

export default function HeroVisual() {
  const peek = useReveal();
  const quote = useReveal();

  return (
    <div className="relative mb-10 ml-6 sm:mb-[220px]">
      {/* soft gradient-mesh backdrop */}
      <div className="pointer-events-none absolute -inset-10 -z-10">
        <div className="absolute -top-6 -right-6 h-56 w-56 rounded-full bg-rose/25 blur-3xl" />
        <div className="absolute bottom-0 -left-8 h-48 w-48 rounded-full bg-sage/25 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
      </div>

      {/* secondary peeking card — styled like a lobby arrivals board. Click or hover to see it fully. */}
      <motion.button
        type="button"
        {...peek.handlers}
        initial={{ opacity: 0, y: 16, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
        viewport={{ once: true }}
        animate={
          peek.active
            ? { x: -34, y: 22, scale: 1.05, rotate: -3 }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: peek.active ? 30 : 0 }}
        className="absolute -bottom-[64px] -left-[84px] hidden w-36 cursor-pointer rounded-sm border border-ink/15 bg-card p-3.5 text-left shadow-[0_25px_50px_-20px_rgba(43,32,41,0.35)] sm:block"
      >
        <div className="mb-1 text-[10.5px] tracking-wide text-ink-soft">
          THIS WEEK
        </div>
        <FlipReveal delay={0.3}>
          <span className="font-mono text-[32px] leading-none text-plum">
            14
          </span>
        </FlipReveal>
        <span className="text-[12px] text-ink-soft">direct bookings</span>
        <div className="mt-3 flex h-8 items-end gap-1">
          {[40, 55, 35, 70, 50, 85, 60].map((h, i) => (
            <span
              key={i}
              className="w-full rounded-[1px] bg-rose/60"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.button>

      {/* testimonial teaser — foreshadows the case study further down. Click or hover to see it fully. */}
      <motion.button
        type="button"
        {...quote.handlers}
        initial={{ opacity: 0, y: 16, rotate: 6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 4 }}
        viewport={{ once: true }}
        animate={
          quote.active
            ? { x: 34, y: 20, scale: 1.05, rotate: 2 }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
          delay: quote.active ? 0 : 0.15,
        }}
        style={{ zIndex: quote.active ? 30 : 0 }}
        className="absolute -bottom-28 right-2 hidden w-52 cursor-pointer rounded-sm border border-ink/15 bg-card p-4 text-left shadow-[0_25px_50px_-20px_rgba(43,32,41,0.35)] sm:block"
      >
        <div className="mb-1.5 text-rose text-[13px] tracking-wide">★★★★★</div>
        <p className="font-display text-[15px] leading-snug text-ink">
          &ldquo;Feels like Google is finally working for me.&rdquo;
        </p>
        <div className="mt-2.5 flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, browser-fetched to avoid Pexels' CDN blocking Next's server-side image proxy */}
          <img
            src="https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&w=64"
            alt=""
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-[11.5px] text-ink-soft">
            Don, Brass Lantern Inn
          </span>
        </div>
      </motion.button>

      {/* main card with corner brackets */}
      <div className="relative z-10 shadow-[0_30px_60px_-25px_rgba(43,32,41,0.3)]">
        <span className="pointer-events-none absolute -top-2.5 -left-2.5 h-4 w-4 border-t-2 border-l-2 border-ink/40" />
        <span className="pointer-events-none absolute -top-2.5 -right-2.5 h-4 w-4 border-t-2 border-r-2 border-ink/40" />
        <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-4 w-4 border-b-2 border-l-2 border-ink/40" />
        <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-4 w-4 border-b-2 border-r-2 border-ink/40" />
        <AutumnDashboard />
      </div>
    </div>
  );
}
