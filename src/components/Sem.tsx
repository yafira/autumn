import FunnelDiagram from "./FunnelDiagram";

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
        <div className="mb-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-3.5 text-[13px] font-semibold text-[#e08fa0]">
              № 02 · Search engine marketing
            </div>
            <h2 className="max-w-[15ch] font-display text-[32px] font-bold leading-tight text-linen sm:text-[40px]">
              One engine across Google Ads, Maps and Hotel Ads
            </h2>
            <p className="mt-5 max-w-[60ch] text-[18px] leading-relaxed text-linen/80">
              We put your property in front of the right guests at exactly the right moment — the ones most likely to book, and most likely to love it. Most properties see 10–20% more direct website traffic within the first months.
            </p>
          </div>
          <div className="rounded-sm border border-linen/30 p-6">
            <p className="text-[16.5px] leading-relaxed text-linen">
              &ldquo;We put our own skin in the game — covering your ad spend, and only getting paid when we deliver bookings.&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-linen/15 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-plum p-6.5">
              <h4 className="mb-2 font-display text-[17px] font-bold text-linen">{f.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-linen/75">{f.body}</p>
            </div>
          ))}
        </div>

        <FunnelDiagram />
      </div>
    </section>
  );
}
