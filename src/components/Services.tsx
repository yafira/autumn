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
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-1">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
            <span className="text-[12px] font-semibold tracking-wide text-ink-soft">
              AI drafts everything. A person approves before it goes out.
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="relative border-l-2 border-ink/15 pl-9"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative transition-transform duration-300 ease-out hover:translate-x-1.5 ${
                  i === 0 ? "pb-10" : i === SERVICES.length - 1 ? "pt-10" : "py-10"
                }`}
              >
                <span className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full bg-ink/25 ring-4 ring-linen-deep transition-all duration-300 group-hover:scale-125 group-hover:bg-rose" />
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-[18px] font-semibold transition-colors duration-300 group-hover:text-rose-deep">
                    {s.title}
                  </h3>
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
