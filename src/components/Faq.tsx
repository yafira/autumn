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
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-10 max-w-[56ch]">
          <div className="mb-3.5 text-[13px] font-semibold text-rose-deep">№ 06 · In plain language</div>
          <h2 className="font-display text-[30px] font-bold">Questions we get from owners, not marketers</h2>
        </div>

        <div className="border-t border-ink/15">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-ink/15 py-5.5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[19px] font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="shrink-0 text-xl font-normal text-rose-deep transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3.5 max-w-[66ch] text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
