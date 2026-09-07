"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Historic inn, Stowe VT",
  "Adobe courtyard, Santa Fe",
  "Coastal B&B, Outer Banks",
  "Mountain lodge, Aspen",
  "Colonial inn, New Orleans",
  "Beach house, Montauk",
  "Boutique hotel, Charleston",
  "Ranch stay, Big Bear",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-ink/15 bg-linen py-5">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-display text-[15px] font-bold uppercase tracking-wide text-ink-soft"
          >
            {item}
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-rose" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
