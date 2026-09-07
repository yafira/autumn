import Eyebrow from "./Eyebrow";

const SERVICES = [
  {
    title: "Email marketing",
    body: "Beautiful, hyper-personalized emails to past guests and site visitors. You approve once a month, we handle the rest — with clear attribution on every booking.",
    tag: "Guest retention",
  },
  {
    title: "Social media",
    body: "A polished, on-brand presence across feed, Stories and Reels — built from real performance data, not guesswork. One approval a month.",
    tag: "Awareness",
  },
  {
    title: "Website, SEO & AI search",
    body: "Fast, conversion-built websites with visibility across Google, ChatGPT and Gemini — up to 4x higher conversion than a standard hotel site.",
    tag: "Your front door",
  },
  {
    title: "Dynamic pricing & length of stay",
    body: "A pricing model built for your specific property, adjusting rates and stay restrictions in real time — while keeping your best rate on your own site.",
    tag: "Revenue",
  },
  {
    title: "Reputation management",
    body: "Every review, across every platform, in one place — with on-brand responses drafted in seconds and root causes flagged before they hurt your rating.",
    tag: "Trust",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-linen-deep py-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mb-11 max-w-[60ch]">
          <Eyebrow n="04" label="Beyond search" />
          <h2 className="font-display text-[30px] font-bold">Everything else runs quietly in the background</h2>
          <p className="mt-3 text-[15.5px] text-ink-soft">
            Search marketing is the core of what we do. These round it out — pick them up whenever you&apos;re ready.
          </p>
        </div>

        <div className="border-t border-ink/15">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="grid grid-cols-1 gap-1.5 border-b border-ink/15 py-6 transition-colors hover:bg-linen/60 sm:grid-cols-[220px_1fr_140px] sm:items-center sm:gap-6"
            >
              <h3 className="text-[18px] font-semibold">{s.title}</h3>
              <p className="max-w-[62ch] text-sm text-ink-soft">{s.body}</p>
              <div className="text-[12.5px] font-semibold text-rose-deep sm:text-right">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
