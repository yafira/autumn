"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import BellButton from "./BellButton";

const TERMS = [
  "We cover the ad spend — you take on no upfront cost.",
  "13% only on the bookings we actually deliver.",
  "Each cohort is small, so every property gets real attention.",
];

export default function Flagship() {
  return (
    <section id="flagship" className="py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="relative grid grid-cols-1 gap-10 overflow-hidden rounded-sm border border-ink/30 bg-card p-9 shadow-[0_10px_30px_-20px_rgba(28,17,10,0.15)] transition-shadow duration-300 hover:shadow-[0_35px_65px_-25px_rgba(28,17,10,0.3)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(560px 260px at 88% 12%, rgba(204,91,44,0.12), transparent 70%)",
            }}
          />
          <div className="relative">
            <Eyebrow n="05" label="By invitation, this season" />
            <h2 className="font-display text-[32px] font-bold leading-tight sm:text-[36px]">
              The Flagship Program
            </h2>
            <p className="mt-4.5 max-w-[48ch] text-base leading-relaxed text-ink-soft">
              A risk-free way to trial Autumn&apos;s search marketing on your
              own property. No fixed fees, no long contract — we take 13% of the
              bookings we drive, and nothing when we don&apos;t.
            </p>
            <motion.div
              className="mt-7 flex flex-col gap-3.5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {TERMS.map((t) => (
                <motion.div
                  key={t}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 text-[14.5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M4 12l5 5 11-11"
                      stroke="#a8461f"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="group relative overflow-hidden rounded-sm p-8 text-linen">
            {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, browser-fetched to avoid Pexels' CDN blocking Next's server-side image proxy */}
            <img
              src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-plum/60" />
            <div className="relative">
              <div className="mb-2.5 text-[13px] text-linen/70">
                Winter cohort — limited spots
              </div>
              <h3 className="mb-5 font-display text-2xl font-bold">
                Tell us about your property
              </h3>
              <BellButton
                href="mailto:hello@autumnplatform.com?subject=Flagship%20Program%20application"
                className="flex w-full items-center justify-center gap-2.5 rounded-sm bg-rose px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-100 hover:bg-rose-deep active:scale-95"
              >
                Apply for the Flagship Program
              </BellButton>
              <p className="mt-4 text-xs leading-relaxed text-linen/55">
                Takes about 4 minutes. We reply personally within 2 business
                days — no auto-drip sequence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
