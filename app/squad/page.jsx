"use client";

import { useEffect, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import { getPlayersData } from "../../lib/api";
import { players, squadFilters } from "../../data/siteData";

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [playersData, setPlayersData] = useState({ results: players, filters: squadFilters });

  useEffect(() => {
    let active = true;
    getPlayersData().then((data) => {
      if (active) setPlayersData(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const filteredPlayers =
    activeFilter === "Все"
      ? playersData.results
      : playersData.results.filter((player) => player.position === activeFilter);

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(420px,54vh,620px)] items-end">
        <div className="tt-container w-full pb-[clamp(48px,7vh,84px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">THE SQUAD · 2025/26</div>
          <h1 className="font-display text-[clamp(46px,9vw,132px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            <span className="block">Состав</span>
            <span className="block" style={{ color: "var(--volt)" }}>
              Top Team
            </span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[clamp(15px,1.3vw,19px)] leading-[1.6] text-white/78">
            Игроки и медиа-персоны клуба. Фильтр ниже повторяет логику исходного HTML-макета, но работает уже на реальных данных.
          </p>
        </div>
      </section>

      <section className="bg-white px-0 pb-[clamp(80px,10vw,140px)] pt-[clamp(60px,7vw,110px)]">
        <div className="tt-container">
          <div className="mb-[clamp(36px,4vw,56px)] flex flex-wrap gap-[10px]">
          {playersData.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full border px-[22px] py-[11px] text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                activeFilter === filter
                  ? "border-[#111] bg-[#111] text-white"
                  : "border-[var(--line)] bg-transparent text-[#111]"
              }`}
            >
              {filter}
            </button>
          ))}
          </div>
          {filteredPlayers.length === 0 ? (
            <div className="py-24 text-center text-[var(--ink-soft)]">В этой категории пока нет игроков.</div>
          ) : (
            <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] md:grid-cols-3 xl:grid-cols-5">
              {filteredPlayers.map((player) => (
                <a key={player.id} href={`/squad/${player.id}`} className="group relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                  {player.photo_url ? (
                    <img src={player.photo_url} alt={player.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="tt-grid-lines absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <span className="absolute left-[14px] top-[14px] text-[11px] font-semibold tracking-[0.16em] text-[#9e9ea0]">
                    #{player.number || "--"}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white/92 via-white/88 to-transparent p-4">
                    <div>
                      <div className="font-display text-[clamp(15px,1.4vw,20px)] font-extrabold uppercase tracking-[-0.01em] text-[#111]">
                        {player.name}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#707072]">
                        {player.position_label}
                      </div>
                    </div>
                    <span className="font-display text-[clamp(26px,3vw,40px)] font-extrabold leading-[0.8] text-[#dcdcdc]">
                      {player.number || "--"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
