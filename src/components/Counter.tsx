"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function Counter({
  prefix = "",
  target,
  suffix = "",
  decimals = 0,
  className = "",
}: {
  prefix?: string;
  target: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
    });
    return () => controls.stop();
  }, [inView, target, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : value}
      {suffix}
    </span>
  );
}
