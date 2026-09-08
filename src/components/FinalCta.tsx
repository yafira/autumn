import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="bg-plum py-16 text-linen">
      <Reveal
        y={16}
        className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-10 px-8"
      >
        <h2 className="max-w-[14ch] font-display text-[32px] font-bold leading-tight text-linen sm:text-[34px]">
          Let&apos;s get more of your guests booking direct.
        </h2>
        <a
          href="#flagship"
          className="rounded-sm bg-rose px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-100 hover:bg-rose-deep active:scale-95"
        >
          Apply to the Flagship Program
        </a>
      </Reveal>
    </section>
  );
}
