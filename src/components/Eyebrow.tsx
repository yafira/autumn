export default function Eyebrow({
  n,
  label,
  dark = false,
}: {
  n: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 ${
        dark ? "border-linen/30" : "border-ink/20"
      }`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dark ? "bg-[#e08fa0]" : "bg-rose"}`} />
      <span
        className={`text-[12px] font-semibold tracking-wide ${
          dark ? "text-linen/80" : "text-ink-soft"
        }`}
      >
        {n} · {label}
      </span>
    </div>
  );
}
