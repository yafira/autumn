import LeafMark from "./LeafMark";

export default function Footer() {
  return (
    <footer id="careers" className="py-14">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-10 px-8">
        <div>
          <div className="mb-2.5 flex items-center gap-2 text-ink">
            <LeafMark className="h-5 w-5" />
            <span className="font-display text-2xl font-bold uppercase tracking-wide">Autumn</span>
          </div>
          <p className="max-w-[34ch] text-[13.5px] text-ink-soft">
            AI-enabled marketing for independent inns, B&amp;Bs and boutique hotels — built by people who know hospitality.
          </p>
        </div>
        <div className="flex flex-wrap gap-16">
          <div>
            <h4 className="mb-3.5 text-[12.5px] font-semibold text-ink-soft">Company</h4>
            <a href="#sem" className="mb-2.5 block text-sm hover:text-rose-deep">Search marketing</a>
            <a href="#services" className="mb-2.5 block text-sm hover:text-rose-deep">All services</a>
            <a href="#flagship" className="mb-2.5 block text-sm hover:text-rose-deep">Flagship Program</a>
          </div>
          <div>
            <h4 className="mb-3.5 text-[12.5px] font-semibold text-ink-soft">Careers</h4>
            <a href="mailto:careers@autumnplatform.com" className="mb-2.5 block text-sm hover:text-rose-deep">Join the team</a>
            <a href="mailto:careers@autumnplatform.com" className="mb-2.5 block text-sm hover:text-rose-deep">Open roles</a>
          </div>
          <div>
            <h4 className="mb-3.5 text-[12.5px] font-semibold text-ink-soft">Contact</h4>
            <a href="mailto:hello@autumnplatform.com" className="mb-2.5 block text-sm hover:text-rose-deep">hello@autumnplatform.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1180px] border-t border-ink/15 px-8 pt-6 text-[12.5px] text-ink-soft">
        © 2026 Autumn. Independent hotels, modernized — not homogenized.
      </div>
    </footer>
  );
}
