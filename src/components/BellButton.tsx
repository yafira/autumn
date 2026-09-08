"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const bellWiggle = {
  rest: { rotate: 0 },
  hover: {
    rotate: [0, -18, 14, -10, 6, 0],
    transition: { duration: 0.55, ease: "easeInOut" as const },
  },
};

/**
 * A button with a small concierge-bell icon that rings on hover —
 * a nod to hospitality service rather than a generic UI affordance.
 */
export default function BellButton({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.a href={href} initial="rest" whileHover="hover" animate="rest" className={className}>
      <motion.svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        variants={bellWiggle}
        style={{ transformOrigin: "50% 15%" }}
      >
        <path
          d="M12 4c-3 0-5 2.2-5 5.4v2.4c0 1-.4 2-1.1 2.7L5 15.6h14l-.9-1.1c-.7-.7-1.1-1.7-1.1-2.7V9.4C17 6.2 15 4 12 4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9.5 18a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </motion.svg>
      {children}
    </motion.a>
  );
}
