import LeafMark from "./LeafMark";

const LINKS = [
  { href: "#sem", label: "Search Marketing" },
  { href: "#proof", label: "Results" },
  { href: "#services", label: "All services" },
  { href: "#flagship", label: "Flagship Program" },
  { href: "#careers", label: "Careers" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-linen/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4.5">
        <div className="flex items-center gap-2 text-ink">
          <LeafMark className="h-5 w-5" />
          <span className="font-display text-2xl font-bold uppercase tracking-wide">Autumn</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative pb-1 text-[14.5px] text-ink-soft transition-colors after:absolute after:right-full after:bottom-0 after:left-0 after:h-0.5 after:bg-rose after:transition-[right] after:duration-200 hover:text-ink hover:after:right-0"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#flagship"
          className="rounded-sm bg-plum px-6 py-3 text-[15px] font-semibold text-linen transition-transform duration-100 hover:bg-plum-deep active:scale-95"
        >
          Get your free growth plan
        </a>
      </div>
    </header>
  );
}
