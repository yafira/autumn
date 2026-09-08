"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What is \"SEM,\" really?",
    a: "Search engine marketing means paid placements on Google — the sponsored result at the top of a search, the pin on Google Maps, and the rate comparison box on Google Hotel Ads. We write, target and manage all of it for you.",
  },
  {
    q: "I don't have a marketing budget. Can I still start?",
    a: "Yes — in the Flagship Program, we cover the ad spend. There's no fixed fee to begin; we're paid a percentage of the bookings we bring you.",
  },
  {
    q: "Do I need to already be running Google Ads?",
    a: "No. Most of our owners have never touched Google Ads. We set everything up, and you'll see it summarized in one plain dashboard.",
  },
  {
    q: "Will this replace the OTAs I'm already on?",
    a: "You can keep your OTA listings — we simply win back the guests who would have booked direct anyway, so fewer of them pay the OTA a commission first.",
  },
  {
    q: "How much of my time does this take?",
    a: "Under an hour a month for most owners — one review and approval. We handle strategy, setup and daily optimization.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-10 max-w-[56ch]">
          <Eyebrow n="06" label="In plain language" />
          <h2 className="font-display text-[30px] font-bold">Questions we get from owners, not marketers</h2>
        </Reveal>

        <div className="border-t border-ink/15">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ink/15 py-5.5">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-display text-[19px] font-bold"
                >
                  {item.q}
                  <motion.span
                    className="shrink-0 text-xl font-bold text-rose-deep"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3.5 max-w-[66ch] text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
