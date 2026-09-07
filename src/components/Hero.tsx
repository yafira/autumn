import HeroVisual from "./HeroVisual";
import RateToggle from "./RateToggle";

export default function Hero() {
  return (
    <section className="pt-19 pb-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-[11ch] font-display text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[64px]">
            Turn Google into your #1 direct-booking channel
          </h1>
          <p className="mt-6 max-w-[46ch] text-[18px] leading-relaxed text-ink-soft">
            Done-for-you search marketing for independent inns, B&amp;Bs and boutique hotels — built by hospitality people, run with AI, without lifting a finger.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#flagship"
              className="rounded-sm bg-plum px-6 py-3.5 text-[15px] font-semibold text-linen transition-transform duration-100 hover:bg-plum-deep active:scale-95"
            >
              Apply to the Flagship Program
            </a>
            <a
              href="#sem"
              className="rounded-sm border border-ink/30 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:border-ink hover:bg-linen-deep active:scale-95"
            >
              See how it works
            </a>
          </div>
          <p className="mt-7 text-[13.5px] text-ink-soft">
            No fixed fees to start — we cover the ad spend and get paid when we deliver bookings.
          </p>

          <RateToggle />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
