const TERMS = [
  "We cover the ad spend — you take on no upfront cost.",
  "13% only on the bookings we actually deliver.",
  "Each cohort is small, so every property gets real attention.",
];

export default function Flagship() {
  return (
    <section id="flagship" className="py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="relative grid grid-cols-1 gap-10 overflow-hidden rounded-sm border border-ink/30 bg-card p-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(560px 260px at 88% 12%, rgba(168,69,92,0.12), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="mb-3.5 text-[13px] font-semibold text-rose-deep">
              № 05 · By invitation, this season
            </div>
            <h2 className="max-w-[12ch] font-display text-[32px] font-bold leading-tight sm:text-[36px]">
              The Flagship Program
            </h2>
            <p className="mt-4.5 max-w-[48ch] text-base leading-relaxed text-ink-soft">
              A risk-free way to trial Autumn&apos;s search marketing on your own property. No fixed fees, no long contract — we take 13% of the bookings we drive, and nothing when we don&apos;t.
            </p>
            <div className="mt-7 flex flex-col gap-3.5">
              {TERMS.map((t) => (
                <div key={t} className="flex items-start gap-3 text-[14.5px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                    <path d="M4 12l5 5 11-11" stroke="#833449" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-sm bg-plum p-8 text-linen">
            <div className="mb-2.5 text-[13px] text-linen/70">Winter cohort — limited spots</div>
            <h3 className="mb-5 font-display text-2xl font-bold">Tell us about your property</h3>
            <a
              href="mailto:hello@autumnplatform.com?subject=Flagship%20Program%20application"
              className="flex w-full items-center justify-center rounded-sm bg-rose px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-100 hover:bg-rose-deep active:scale-95"
            >
              Apply for the Flagship Program
            </a>
            <p className="mt-4 text-xs leading-relaxed text-linen/55">
              Takes about 4 minutes. We reply personally within 2 business days — no auto-drip sequence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
