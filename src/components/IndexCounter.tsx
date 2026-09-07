"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function IndexCounter() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 220, damping: 32 });
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    function update() {
      const sections = Array.from(document.querySelectorAll("main > section"));
      if (!sections.length) return;
      setTotal(sections.length);
      const mid = window.scrollY + window.innerHeight * 0.4;
      let active = 0;
      sections.forEach((s, i) => {
        if ((s as HTMLElement).offsetTop <= mid) active = i;
      });
      setCurrent(active + 1);
    }
    update();
    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      document.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-7 z-[60] hidden items-center gap-2.5 rounded-full border border-ink/15 bg-linen/85 px-3 py-1.5 text-xs text-ink-soft backdrop-blur-sm sm:flex">
      <span className="font-semibold text-ink">{String(current).padStart(2, "0")}</span>
      <span className="relative h-0.5 w-9 overflow-hidden rounded-full bg-ink/30">
        <motion.span className="absolute inset-y-0 left-0 bg-rose" style={{ scaleX: smooth, transformOrigin: "left" }} />
      </span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  );
}
