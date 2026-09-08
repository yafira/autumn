const ITEMS = [
  { label: "Historic inn, Stowe VT", from: "#a8455c", to: "#3d2036" },
  { label: "Adobe courtyard, Santa Fe", from: "#d4a574", to: "#833449" },
  { label: "Coastal B&B, Outer Banks", from: "#6f8f6e", to: "#3d2036" },
  { label: "Mountain lodge, Aspen", from: "#833449", to: "#2b2029" },
  { label: "Colonial inn, New Orleans", from: "#a8455c", to: "#6f8f6e" },
  { label: "Beach house, Montauk", from: "#d4a574", to: "#a8455c" },
];

export default function Marquee() {
  return (
    <div className="overflow-x-auto border-y border-ink/15 bg-linen py-5">
      <div className="mx-auto flex w-max max-w-[1180px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-8">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 whitespace-nowrap">
            <span
              className="h-7 w-7 shrink-0 rounded-full"
              style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
            />
            <span className="text-[15px] text-ink-soft">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
