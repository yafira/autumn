"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { label: "Historic inn, Stowe VT", from: "#a8455c", to: "#3d2036" },
  { label: "Adobe courtyard, Santa Fe", from: "#d4a574", to: "#833449" },
  { label: "Coastal B&B, Outer Banks", from: "#6f8f6e", to: "#3d2036" },
  { label: "Mountain lodge, Aspen", from: "#833449", to: "#2b2029" },
  { label: "Colonial inn, New Orleans", from: "#a8455c", to: "#6f8f6e" },
  { label: "Beach house, Montauk", from: "#d4a574", to: "#a8455c" },
  { label: "Boutique hotel, Charleston", from: "#6f8f6e", to: "#833449" },
  { label: "Ranch stay, Big Bear", from: "#a8455c", to: "#d4a574" },
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-ink/15 bg-linen py-5">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
            <span
              className="h-7 w-7 shrink-0 rounded-full"
              style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
            />
            <span className="text-[15px] text-ink-soft">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
