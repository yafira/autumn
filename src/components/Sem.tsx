import FunnelDiagram from "./FunnelDiagram";
import SearchMock from "./SearchMock";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const FEATURES = [
  {
    title: "Full-funnel strategy",
    body: "Builds awareness, captures new demand, and wins high-intent traffic back from OTAs and competitors.",
  },
  {
    title: "Precision targeting",
    body: "Location, interests, behaviour and custom audiences — tuned to the guests who actually fit your property.",
  },
  {
    title: "Continuous optimization",
    body: "Automated testing with daily bid and budget adjustments, always with a person reviewing the results.",
  },
  {
    title: "Reporting you'll actually read",
    body: "One simple dashboard tracking performance, insight and direct bookings — no jargon required.",
  },
];

export default function Sem() {
  return (
    <section id="sem" className="bg-plum py-24 text-linen">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-16 grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow n="02" label="Search engine marketing" dark />
            <h2 className="max-w-[15ch] font-display text-[32px] font-bold leading-tight text-linen sm:text-[40px]">
              One engine across Google Ads, Maps and Hotel Ads
            </h2>
            <p className="mt-5 max-w-[58ch] text-[18px] leading-relaxed text-linen/80">
              We put your property in front of the right guests at exactly the right moment — the ones most likely to book, and most likely to love it. Most properties see 10–20% more direct website traffic within the first months.
            </p>

            <div className="mt-8 divide-y divide-linen/15 border-t border-linen/15">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4 py-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linen/12">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5 5 11-11" stroke="#f2a765" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="mb-1 font-display text-[16px] font-bold text-linen">{f.title}</h4>
                    <p className="text-[13.5px] leading-relaxed text-linen/70">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6">
              <SearchMock />
              <div className="rounded-sm border border-linen/30 p-6">
                <p className="text-[16.5px] leading-relaxed text-linen">
                  &ldquo;We put our own skin in the game — covering your ad spend, and only getting paid when we deliver bookings.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FunnelDiagram />
      </div>
    </section>
  );
}
