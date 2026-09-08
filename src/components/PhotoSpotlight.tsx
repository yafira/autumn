import Reveal from "./Reveal";

export default function PhotoSpotlight() {
  return (
    <Reveal delay={0.15} className="relative mt-4">
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sage/20 blur-3xl" />
      </div>

      <div className="group relative overflow-hidden rounded-sm border border-ink/15 transition-shadow duration-300 hover:shadow-[0_30px_60px_-25px_rgba(43,32,41,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- external stock photo, browser-fetched to avoid Pexels' CDN blocking Next's server-side image proxy */}
        <img
          src="https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="A guest property surrounded by autumn forest"
          className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-[340px]"
        />

        <span className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-linen/80" />
        <span className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-linen/80" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-linen/80" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-linen/80" />

        <div className="absolute top-4 left-4 rounded-sm bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
          Reputation
        </div>

        <div className="absolute right-6 bottom-6 left-6 rounded-sm border border-ink/10 bg-card p-5 shadow-[0_25px_50px_-20px_rgba(43,32,41,0.4)] sm:right-auto sm:w-64">
          <div className="text-[10.5px] tracking-wide text-ink-soft">PENDING RESPONSES</div>
          <div className="font-mono text-[34px] leading-none text-plum">13</div>
          <div className="mt-1 text-[12px] text-ink-soft">1,145 replied this month</div>
          <div className="mt-3 rounded-sm bg-linen-deep px-3 py-2 text-[12.5px] font-semibold text-ink">
            Inbox zero. Every channel.
          </div>
        </div>
      </div>
    </Reveal>
  );
}
