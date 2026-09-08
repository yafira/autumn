"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";

/**
 * A single-flap reveal reminiscent of an old hotel lobby departure board —
 * the value drops into place with a hinge-like rotation rather than fading in.
 */
export default function FlipReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} style={{ perspective: 240 }} className={className}>
      <motion.div
        initial={{ rotateX: -90, opacity: 0 }}
        animate={inView ? { rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.3, 0, 0.2, 1] }}
        style={{ transformOrigin: "top center" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
