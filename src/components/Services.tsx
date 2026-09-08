"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import PhotoSpotlight from "./PhotoSpotlight";

const SERVICES = [
  {
    title: "Email marketing",
    body: "Beautiful, hyper-personalized emails to past guests and site visitors. You approve once a month, we handle the rest.",
    tag: "Guest retention",
  },
  {
    title: "Social media",
    body: "A polished, on-brand presence across feed, Stories and Reels — built from real performance data, not guesswork.",
    tag: "Awareness",
  },
  {
    title: "Website, SEO & AI search",
    body: "Fast, conversion-built websites with visibility across Google, ChatGPT and Gemini.",
    tag: "Your front door",
  },
  {
    title: "Dynamic pricing & length of stay",
    body: "A pricing model built for your specific property, adjusting rates and stay restrictions in real time.",
    tag: "Revenue",
  },
  {
    title: "Reputation management",
    body: "Every review, across every platform, in one place — with on-brand responses drafted in seconds.",
    tag: "Trust",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-linen-deep py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-11 max-w-[60ch]">
          <Eyebrow n="04" label="Beyond search" />
          <h2 className="font-display text-[30px] font-bold">Everything else runs quietly in the background</h2>
          <p className="mt-3 text-[15.5px] text-ink-soft">
            Search marketing is the core of what we do. These round it out — pick them up whenever you&apos;re ready.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="border-t border-ink/15"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-ink/15 py-6 transition-colors duration-200 hover:bg-linen/60"
              >
                <div className="mb-1.5 flex items-center justify-between gap-4">
                  <h3 className="text-[18px] font-semibold">{s.title}</h3>
                  <div className="text-[12px] font-semibold text-rose-deep">{s.tag}</div>
                </div>
                <p className="max-w-[52ch] text-sm text-ink-soft">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <PhotoSpotlight />
        </div>
      </div>
    </section>
  );
}
