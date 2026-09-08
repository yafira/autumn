const ITEMS = [
  { label: "Historic inn, Stowe VT", from: "#a8455c", to: "#d4a574" },
  { label: "Adobe courtyard, Santa Fe", from: "#d4a574", to: "#6f8f6e" },
  { label: "Coastal B&B, Outer Banks", from: "#6f8f6e", to: "#a8455c" },
  { label: "Mountain lodge, Aspen", from: "#833449", to: "#d4a574" },
  { label: "Colonial inn, New Orleans", from: "#6f8f6e", to: "#833449" },
  { label: "Beach house, Montauk", from: "#a8455c", to: "#6f8f6e" },
];

export default function Marquee() {
  return (
    <div className="border-y border-ink/15 bg-linen py-7">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-x-6 gap-y-5 px-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-2.5 lg:justify-start">
            <span
              className="h-7 w-7 shrink-0 rounded-full"
              style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
            />
            <span className="text-[14px] text-ink-soft">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
