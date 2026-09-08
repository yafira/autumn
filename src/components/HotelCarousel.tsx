"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HOTELS = [
  { label: "Historic inn, Stowe VT", src: "https://images.pexels.com/photos/8092379/pexels-photo-8092379.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { label: "Adobe courtyard, Santa Fe", src: "https://images.pexels.com/photos/34648646/pexels-photo-34648646/free-photo-of-rustic-log-cabin-in-podgaric-croatia.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { label: "Coastal B&B, Outer Banks", src: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { label: "Mountain lodge, Aspen", src: "https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { label: "Colonial inn, New Orleans", src: "https://images.pexels.com/photos/976919/pexels-photo-976919.jpeg?auto=compress&cs=tinysrgb&w=900" },
  { label: "Beach house, Montauk", src: "https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&w=900" },
];

const AUTO_ADVANCE_MS = 4000;

export default function HotelCarousel() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const paused = useRef(false);

  function paginate(dir: number) {
    setState(([i]) => [(i + dir + HOTELS.length) % HOTELS.length, dir]);
  }

  function goTo(i: number) {
    setState(([cur]) => [i, i > cur ? 1 : -1]);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) paginate(1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const hotel = HOTELS[index];

  return (
    <div className="border-y border-ink/15 bg-linen py-8">
      <div className="mx-auto max-w-[1180px] px-8">
        <div
          className="group relative h-[220px] overflow-hidden rounded-sm border border-ink/15 sm:h-[260px]"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0.4 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0.4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, browser-fetched to avoid Pexels' CDN blocking Next's server-side image proxy */}
              <img
                src={hotel.src}
                alt={hotel.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/10 to-transparent" />
              <div className="absolute bottom-5 left-6 font-display text-[22px] text-linen sm:text-[26px]">
                {hotel.label}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous property"
            className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-linen/85 text-ink transition-transform hover:scale-105 active:scale-95"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next property"
            className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-linen/85 text-ink transition-transform hover:scale-105 active:scale-95"
          >
            ›
          </button>

          <div className="absolute right-6 bottom-5 z-10 flex gap-1.5">
            {HOTELS.map((h, i) => (
              <button
                key={h.label}
                onClick={() => goTo(i)}
                aria-label={`Go to ${h.label}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-linen" : "w-1.5 bg-linen/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
