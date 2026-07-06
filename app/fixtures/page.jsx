"use client";

import { useEffect, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import { getMatchesData } from "../../lib/api";
import { matches, tournaments } from "../../data/siteData";

const tabs = [
  { id: "fixtures", label: "Fixtures" },
  { id: "results", label: "Results" },
  { id: "tournaments", label: "Tournaments" },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("fixtures");
  const [matchesData, setMatchesData] = useState({
    results: matches,
    tournaments,
    competitions: ["Все турниры", ...new Set(matches.map((match) => match.competition))],
  });

  useEffect(() => {
    let active = true;
    getMatchesData().then((data) => {
      if (active) setMatchesData(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const nextMatch =
    [...matchesData.results]
      .filter((match) => match.status === "upcoming")
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
  const results = [...matchesData.results]
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  const fixtures = [...matchesData.results]
    .filter((match) => match.status !== "finished")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(380px,48vh,560px)] items-end">
        <div className="tt-container w-full pb-[clamp(44px,6vh,72px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">MATCHES · TOP TEAM</div>
          <h1 className="font-display text-[clamp(46px,9vw,132px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            <span className="block">Матчи</span>
            <span className="block" style={{ color: "var(--volt)" }}>
              и результаты
            </span>
          </h1>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(64px,7vw,110px)]">
        <div className="tt-container">
          <div className="tt-eyebrow mb-[34px]">NEXT UP</div>
          <div className="grid gap-[clamp(40px,5vw,72px)] lg:grid-cols-2">
            <div>
              <div className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--volt)" }}>
                {nextMatch ? `${nextMatch.date_label} · ${nextMatch.stadium}` : "Следующий матч появится здесь"}
              </div>
              {nextMatch ? (
                <>
                  <div className="flex items-center gap-[clamp(20px,4vw,54px)]">
                    <div className="text-center">
                      <div className="mx-auto mb-[14px] flex h-[92px] w-[92px] items-center justify-center border-[1.5px] border-white font-display text-[34px] font-extrabold">
                        TT
                      </div>
                      <div className="text-[14px] font-bold tracking-[0.06em]">TOP TEAM</div>
                    </div>
                    <div className="font-display text-[30px] font-extrabold text-[#707072]">VS</div>
                    <div className="text-center">
                      <div className="mx-auto mb-[14px] flex h-[92px] w-[92px] items-center justify-center border-[1.5px] border-[#707072] font-display text-[34px] font-extrabold text-[#9e9ea0]">
                        {nextMatch.opponent?.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="text-[14px] font-bold tracking-[0.06em] text-[#9e9ea0]">{nextMatch.opponent}</div>
                    </div>
                  </div>
                  <div className="mt-8 text-[15px] leading-[1.7] text-white/65">{nextMatch.summary}</div>
                </>
              ) : (
                <div className="text-white/72">Новые анонсы будут опубликованы после обновления календаря в backend.</div>
              )}
            </div>
            <div className="border border-white/10 p-8">
              <div className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/50">Матч-центр</div>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-white/72">
                <p>Раздел использует реальные данные API `matches` и показывает только подтвержденные игры клуба.</p>
                <p>Предстоящие матчи, результаты и турниры собраны ниже в трёх вкладках, как в исходном HTML-макете.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 pb-[clamp(80px,10vw,140px)] pt-[clamp(60px,7vw,110px)]">
        <div className="tt-container max-w-[1180px]">
          <div className="mb-[clamp(36px,4vw,52px)] flex flex-wrap gap-[10px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-6 py-[11px] text-[13px] font-semibold uppercase tracking-[0.08em] ${
                  activeTab === tab.id
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[var(--line)] bg-transparent text-[#111]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "fixtures" && (
            <div>
              {fixtures.map((match) => (
                <div key={match.id} className="flex flex-wrap items-center gap-[clamp(16px,3vw,40px)] border-b border-[var(--line)] py-6">
                  <div className="min-w-24">
                    <div className="font-display text-[16px] font-extrabold uppercase tracking-[0.02em]">{match.date_label}</div>
                    <div className="mt-1 text-[13px] text-[var(--ink-soft)]">
                      {new Date(match.date).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  <div className="min-w-[140px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                    {match.competition}
                  </div>
                  <div className="min-w-[200px] flex-1 text-[clamp(16px,1.6vw,22px)] font-bold">
                    Top Team vs {match.opponent}
                  </div>
                  <div className="text-[13px] text-[var(--ink-soft)]">{match.stadium}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "results" && (
            <div>
              {results.map((match) => (
                <div key={match.id} className="flex flex-wrap items-center gap-[clamp(16px,3vw,40px)] border-b border-[var(--line)] py-6">
                  <div className="min-w-24 text-[13px] text-[var(--ink-soft)]">{match.date_label}</div>
                  <div className="min-w-[140px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                    {match.competition}
                  </div>
                  <div className="min-w-[200px] flex-1 text-[clamp(16px,1.6vw,22px)] font-bold">
                    Top Team vs {match.opponent}
                  </div>
                  <div className="font-display text-[24px] font-extrabold tracking-[0.04em]">
                    {match.team_score}-{match.opponent_score}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tournaments" && (
            <div className="grid gap-5 md:grid-cols-2">
              {matchesData.tournaments.map((tournament) => (
                <div key={tournament.name} className="border border-[var(--line)] p-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                    {tournament.season}
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(22px,2vw,30px)] font-extrabold uppercase tracking-[-0.01em]">
                    {tournament.name}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-[var(--ink-soft)]">{tournament.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
