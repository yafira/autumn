import Reveal from "./Reveal";

export default function Proof() {
  return (
    <section id="proof" className="py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <Reveal className="mb-13 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3.5 text-[13px] font-semibold text-rose-deep">№ 03 · Results</div>
            <h2 className="max-w-[13ch] font-display text-[34px] font-bold leading-tight">
              Independent hotels, measurably busier
            </h2>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="font-mono text-[38px] text-sage">+17%</div>
              <div className="mt-1 max-w-[16ch] text-[12.5px] text-ink-soft">avg. direct traffic in 90 days</div>
            </div>
            <div>
              <div className="font-mono text-[38px] text-sage">4x</div>
              <div className="mt-1 max-w-[16ch] text-[12.5px] text-ink-soft">website conversion vs. category norm</div>
            </div>
            <div>
              <div className="font-mono text-[38px] text-sage">13%</div>
              <div className="mt-1 max-w-[16ch] text-[12.5px] text-ink-soft">only paid on bookings we drive</div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal
            delay={0.1}
            className="relative flex flex-col gap-5.5 overflow-hidden rounded-sm border border-ink/15 bg-card p-9 transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, browser-fetched to avoid Pexels' CDN blocking Next's server-side image proxy */}
              <img
                src="https://images.pexels.com/photos/629168/pexels-photo-629168.jpeg?auto=compress&cs=tinysrgb&w=104"
                alt="Brass Lantern Inn, Stowe, Vermont"
                className="h-13 w-13 shrink-0 rounded-full object-cover"
              />
              <div>
                <div className="text-[15px] font-semibold">Don Whitfield</div>
                <div className="text-[13px] text-ink-soft">Owner, Brass Lantern Inn — Stowe, Vermont</div>
              </div>
            </div>
            <p className="font-display text-[25px] font-bold leading-[1.2]">
              &ldquo;I run the front desk, the marketing and the towel rack. Autumn is the first team that&apos;s ever made Google feel like it was working for me instead of the other way around.&rdquo;
            </p>
            <div className="flex gap-7 border-t border-ink/15 pt-4.5">
              <div>
                <div className="font-mono text-xl text-plum">+22%</div>
                <div className="text-xs text-ink-soft">direct bookings, 4 months</div>
              </div>
              <div>
                <div className="font-mono text-xl text-plum">−9%</div>
                <div className="text-xs text-ink-soft">OTA dependence</div>
              </div>
              <div>
                <div className="font-mono text-xl text-plum">4.9★</div>
                <div className="text-xs text-ink-soft">maintained across 312 reviews</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-4">
            <div className="rounded-sm border border-ink/15 bg-card p-5.5 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-2.5 text-xs text-ink-soft">Text from Marguerite, The Cormorant House</div>
              <div className="mb-2 max-w-[84%] rounded-2xl rounded-bl-sm bg-linen-deep px-3.5 py-2.5 text-sm">
                is this actually working or am I imagining it
              </div>
              <div className="mb-2 ml-auto max-w-[84%] rounded-2xl rounded-br-sm bg-plum px-3.5 py-2.5 text-sm text-linen">
                Checked this morning — 14 direct bookings from Google Ads this week, up from 6 last month 🍂
              </div>
              <div className="max-w-[84%] rounded-2xl rounded-bl-sm bg-linen-deep px-3.5 py-2.5 text-sm">
                ok wow. keep going
              </div>
            </div>

            <div className="flex items-center gap-6 rounded-sm bg-plum p-7 text-linen transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-linen/40 bg-linen/15">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f8ecd9">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">&ldquo;We finally show up before the big chains do.&rdquo;</div>
                <div className="mt-0.5 text-[13px] text-linen/70">2-min video — Priya Anand, The Wren &amp; Anchor Lodge</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
