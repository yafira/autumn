export default function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 20c0-8 4-14 15-16-1 10-6 15-15 16z"
        fill="currentColor"
      />
      <path
        d="M6 18c2.5-5 5.5-8.5 11.5-12"
        stroke="var(--color-linen)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
