"use client";

import { useState } from "react";

export default function TimelinePicker({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] || items[0];

  if (!active) return null;

  return (
    <div>
      <div className="relative mb-[clamp(44px,5vw,68px)]">
        <div className="absolute left-0 right-0 top-[6px] h-px bg-[#2a2a2a]" />
        <div className="relative flex gap-[clamp(20px,4vw,64px)] overflow-x-auto pb-2 no-scrollbar">
          {items.map((item, index) => {
            const activeYear = index === activeIndex;
            return (
              <button
                key={`${item.year}-${item.title}`}
                onClick={() => setActiveIndex(index)}
                className="flex flex-none flex-col items-start gap-4 bg-transparent pb-2 text-left transition-colors"
                style={{ color: activeYear ? "#ffffff" : "#707072" }}
              >
                <span
                  className="h-[13px] w-[13px] rounded-full transition-all"
                  style={{
                    background: activeYear ? "var(--volt)" : "#333333",
                    transform: activeYear ? "scale(1.5)" : "scale(1)",
                  }}
                />
                <span className="font-display text-[clamp(20px,2.2vw,30px)] font-extrabold tracking-[-0.01em]">
                  {item.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-[clamp(32px,4vw,64px)] md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#141414]">
          <div className="absolute inset-0 tt-dark-grid" />
          <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.18em] text-white/50">
            АРХИВ · {active.year}
          </span>
          <span className="absolute right-4 top-4 font-display text-[clamp(30px,4vw,56px)] font-extrabold text-white/10">
            {active.year}
          </span>
        </div>
        <div>
          <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--volt)" }}>
            {active.year} — Top Team KG
          </div>
          <h3 className="font-display text-[clamp(26px,3.2vw,46px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.98]">
            {active.title}
          </h3>
          <p className="mt-5 max-w-[440px] text-[16px] leading-[1.7] text-white/72">
            {active.text}
          </p>
        </div>
      </div>
    </div>
  );
}
