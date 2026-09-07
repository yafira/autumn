"use client";

import { useEffect, useRef, useState } from "react";

const QUERY = "boutique inn stowe vermont";

export default function SearchMock() {
  const [typed, setTyped] = useState("");
  const [revealed, setRevealed] = useState(0); // how many result rows are shown
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    let cancelled = false;

    function clearAll() {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    }

    function schedule(fn: () => void, delay: number) {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timeouts.current.push(id);
    }

    function cycle() {
      setTyped("");
      setRevealed(0);
      let i = 0;
      function typeStep() {
        i++;
        setTyped(QUERY.slice(0, i));
        if (i < QUERY.length) {
          schedule(typeStep, 55);
        } else {
          // reveal results in sequence
          for (let r = 1; r <= 3; r++) {
            schedule(() => setRevealed(r), r * 380);
          }
          schedule(cycle, 3 * 380 + 3800);
        }
      }
      schedule(typeStep, 400);
    }

    cycle();
    return () => {
      cancelled = true;
      clearAll();
    };
  }, []);

  return (
    <div className="rounded-sm border border-ink/15 bg-card p-5" aria-hidden="true">
      <div className="mb-4 flex gap-1.5">
        <span className="block h-2.5 w-2.5 rounded-full bg-ink/25" />
        <span className="block h-2.5 w-2.5 rounded-full bg-ink/25" />
        <span className="block h-2.5 w-2.5 rounded-full bg-ink/25" />
      </div>

      <div className="flex items-center gap-2.5 rounded-sm border border-ink/30 px-4 py-2.5 text-[14.5px]">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-60">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="whitespace-nowrap border-r-2 border-ink-soft pr-0.5">{typed}</span>
      </div>

      <div className="mt-4 flex min-h-[210px] flex-col gap-3">
        <div
          className={`flex items-start gap-3 rounded-sm border border-dashed border-rose/40 bg-rose/8 p-3 transition-all duration-500 ${
            revealed >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
          }`}
        >
          <span className="mt-0.5 shrink-0 rounded-sm border border-rose/50 px-1 text-[10.5px] font-semibold text-rose-deep">
            Ad
          </span>
          <div>
            <div className="text-[14.5px] font-semibold text-[#1a5c3a]">
              Brass Lantern Inn — Book Direct &amp; Save
            </div>
            <div className="mt-0.5 text-[12.5px] text-ink-soft">brasslanterninn.com</div>
            <div className="mt-0.5 text-[13px] text-ink-soft">
              Historic Stowe inn, 5 min from the slopes. Best rate guaranteed when you book direct.
            </div>
          </div>
        </div>

        <div
          className={`flex items-center gap-2.5 rounded-sm p-3 transition-all duration-500 ${
            revealed >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
          }`}
        >
          <div className="h-[38px] w-[38px] shrink-0 rounded-sm bg-gradient-to-br from-[#c98fa0] to-rose-deep" />
          <div>
            <span className="rounded-sm border border-plum/35 px-1 text-[10.5px] font-semibold text-plum">
              Maps
            </span>
            <div className="text-[13.5px] font-semibold">Brass Lantern Inn · 4.9 ★ (312)</div>
            <div className="text-[12.5px] text-ink-soft">Open · Stowe, VT</div>
          </div>
        </div>

        <div
          className={`flex items-start gap-3 rounded-sm p-3 transition-all duration-500 ${
            revealed >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"
          }`}
        >
          <span className="mt-0.5 shrink-0 rounded-sm border border-plum/40 px-1 text-[10.5px] font-semibold text-plum">
            Hotel Ads
          </span>
          <div>
            <div className="text-[14.5px] font-semibold text-plum">
              Brass Lantern Inn — from $189/night
            </div>
            <div className="mt-0.5 text-[13px] text-ink-soft">
              Compare rates: Direct $189 · Booking.com $219 · Expedia $224
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
