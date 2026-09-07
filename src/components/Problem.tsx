"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "The OTAs take their cut, every time",
    body: "15–25% gone on every booking that could have come straight to you — for a guest who already wanted your property specifically.",
  },
  {
    title: "There's no time left for marketing",
    body: "You're the front desk, the housekeeper, the revenue manager and the person fixing the towel rack. Ad campaigns are the first thing to slip.",
  },
  {
    title: "Well-funded competitors are winning the search",
    body: "Big hotel groups outspend you on Google. Increasingly, even ChatGPT recommends them over you. Being wonderful isn't enough if guests can't find you.",
  },
];

export default function Problem() {
  return (
    <section className="bg-linen-deep py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="mb-3.5 text-[13px] font-semibold text-rose-deep">
            № 01 · The everyday reality
          </div>
          <h2 className="max-w-[11ch] font-display text-[34px] font-bold leading-tight">
            You didn&apos;t open an inn to become a marketing department
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-[44px_1fr] gap-5 border-t border-ink/15 py-6.5 ${
                i === ITEMS.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-display text-xl font-bold text-rose-deep">{i + 1}</div>
              <div>
                <h3 className="mb-1.5 text-[19px] font-semibold">{item.title}</h3>
                <p className="max-w-[52ch] text-[15px] text-ink-soft">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
