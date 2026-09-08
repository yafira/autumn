"use client";

import { useState } from "react";

export default function RateToggle() {
  const [onOta, setOnOta] = useState(false);

  return (
    <div className="mt-8 border-t border-ink/15 pt-7">
      <div className="mb-3 text-[12.5px] text-ink-soft">A $220 booking, two ways</div>

      <button
        type="button"
        onClick={() => setOnOta((v) => !v)}
        aria-pressed={onOta}
        aria-label="Toggle between direct booking and OTA outcome"
        className="relative flex h-[46px] w-full max-w-[320px] rounded-sm border border-ink/30 bg-linen-deep"
      >
        <div
          className={`absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-[2px] transition-transform duration-300 ease-out ${
            onOta ? "translate-x-full bg-rose" : "translate-x-0 bg-plum"
          }`}
        />
        <span
          className={`relative z-10 flex flex-1 items-center justify-center text-[13px] font-semibold transition-colors duration-200 ${
            onOta ? "text-ink-soft" : "text-linen"
          }`}
        >
          Direct, via Autumn
        </span>
        <span
          className={`relative z-10 flex flex-1 items-center justify-center text-[13px] font-semibold transition-colors duration-200 ${
            onOta ? "text-white" : "text-ink-soft"
          }`}
        >
          Through an OTA
        </span>
      </button>

      <p className="mt-3 min-h-[18px] text-[13px] text-ink-soft">
        {onOta ? (
          <>The OTA keeps <b className="text-ink">$44–55</b> — you keep the rest.</>
        ) : (
          <>You keep <b className="text-ink">$220</b> — the whole booking.</>
        )}
      </p>
    </div>
  );
}
