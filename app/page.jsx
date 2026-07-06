import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import SiteShell from "../components/layout/SiteShell";
import { communityBlock, homeHero, homeStats } from "../data/siteData";
import { getClubData, getMatchesData, getMediaData, getNewsData, getPlayersData } from "../lib/api";

const heroImage = "/media/Hero.png";

export default async function Page() {
  const [clubData, matchesData, newsData, playersData, mediaData] = await Promise.all([
    getClubData(),
    getMatchesData(),
    getNewsData(),
    getPlayersData(),
    getMediaData(),
  ]);

  const matchList = matchesData.results || [];
  const newsList = newsData.results || [];
  const lastMatch =
    [...matchList]
      .filter((match) => match.status === "finished")
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
  const nextMatch =
    [...matchList]
      .filter((match) => match.status === "upcoming")
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
  const latestNews = [...newsList]
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, 4);
  const featuredPlayers = (playersData.results || []).slice(0, 6);
  const featuredMedia = (mediaData.results || []).slice(0, 6);
  const platformLinks = mediaData.social_links || clubData.social_links || [];
  const pillars = clubData.about_pillars || [];
  const liveBadge =
    lastMatch && `${lastMatch.team_score} - ${lastMatch.opponent_score} ${lastMatch.opponent}`;

  return (
    <SiteShell>
      <section className="tt-section-dark tt-grain relative min-h-[100vh]" style={{ ["--volt"]: "var(--volt-home)" }}>
        <img src={heroImage} alt="Top Team KG" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/90" />
        <div className="tt-container relative flex min-h-[100vh] flex-col justify-end pb-[clamp(48px,8vh,88px)] pt-28 text-white">
          {liveBadge && (
            <div className="absolute left-[clamp(20px,5vw,72px)] top-[clamp(90px,11vh,120px)] flex items-center gap-3 rounded-full border border-white/30 px-4 py-2 backdrop-blur-sm">
              <span className="tt-live-dot" />
              <span className="text-[12px] font-bold uppercase tracking-[0.16em]">Последний матч</span>
              <span className="h-[14px] w-px bg-white/30" />
              <span className="text-[13px] font-semibold tracking-[0.04em]">{liveBadge}</span>
            </div>
          )}

          <div className="tt-eyebrow mb-6">СЕЗОН 2025 / 26</div>
          <h1 className="font-display text-[clamp(52px,11vw,164px)] font-black uppercase leading-[0.86] tracking-[-0.02em]">
            <span className="block">{homeHero.title}</span>
            <span className="block" style={{ color: "var(--volt-home)" }}>
              {homeHero.accent}
            </span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[clamp(15px,1.3vw,19px)] leading-[1.6] text-white/80">
            {homeHero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-[14px]">
            <Link href={homeHero.primaryCta.href} className="tt-btn tt-btn-primary">
              <Play size={15} fill="currentColor" />
              {homeHero.primaryCta.label}
            </Link>
            <Link href={homeHero.secondaryCta.href} className="tt-btn tt-btn-secondary">
              {homeHero.secondaryCta.label}
            </Link>
          </div>
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/55">SCROLL</span>
            <span className="tt-scroll-cue h-[34px] w-px bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(80px,10vw,150px)] text-[#111]">
        <div className="tt-container">
          <h2 className="max-w-[1050px] font-display text-[clamp(28px,4.4vw,64px)] font-extrabold uppercase tracking-[-0.02em] leading-[1.02]">
            {clubData.hero?.title || "Больше чем футбольный клуб"}
          </h2>
          <div className="mt-[clamp(48px,6vw,88px)] grid gap-[clamp(28px,3vw,48px)] md:grid-cols-3">
            {pillars.slice(0, 3).map((pillar, index) => (
              <div
                key={pillar.title}
                className="border-t-2 pt-[22px]"
                style={{ borderColor: index === 2 ? "var(--volt-home)" : "#111111" }}
              >
                <div
                  className="font-display text-[clamp(22px,2vw,30px)] font-extrabold uppercase tracking-[-0.01em]"
                  style={{ color: index === 2 ? "var(--volt-home)" : "#111111" }}
                >
                  {pillar.title}
                </div>
                <p className="mt-[14px] text-[16px] leading-[1.7] text-[var(--ink-soft)]">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-[clamp(70px,9vw,120px)] text-white overflow-hidden">
        <div className="tt-container flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="tt-eyebrow mb-[18px]">01 — LIVE MOMENTS</div>
            <h2 className="font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase leading-[0.92] tracking-[-0.015em]">
              Клуб,
              <br />
              как он есть
            </h2>
          </div>
          <Link href="/media" className="tt-link-line text-[14px] font-semibold tracking-[0.04em]">
            Смотреть все →
          </Link>
        </div>
        <div className="mt-[clamp(40px,5vw,64px)] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
          <div className="tt-marquee flex w-max pl-[clamp(20px,5vw,72px)]">
            {[...featuredMedia, ...featuredMedia].map((item, index) => (
              <div key={`${item.id}-${index}`} className="mr-[22px] w-[clamp(260px,24vw,340px)] flex-none">
                <Link href={item.href || "/media"}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#191919]">
                    <img src={item.image_url} alt={item.title} className="h-full w-full object-cover opacity-75" />
                    <span className="absolute left-[14px] top-[14px] text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--volt-home)" }}>
                      {item.type}
                    </span>
                    <span className="absolute bottom-[14px] right-[14px] font-mono text-[12px] tracking-[0.08em] text-white/60">
                      {item.platform}
                    </span>
                  </div>
                  <div className="mt-[14px] text-[16px] leading-[1.35]">{item.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(80px,10vw,140px)]" style={{ ["--volt"]: "var(--volt-home)" }}>
        <div className="tt-container relative">
          <div className="tt-eyebrow mb-[34px]">02 — NEXT MATCH</div>
          <div className="grid gap-[clamp(40px,5vw,72px)] lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="mb-[22px] text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--volt-home)" }}>
                {nextMatch ? `${nextMatch.competition} · ${nextMatch.stage}` : "Матч-центр клуба"}
              </div>
              {nextMatch ? (
                <>
                  <div className="flex items-center gap-[clamp(20px,4vw,54px)]">
                    <div className="text-center">
                      <div className="mx-auto mb-[14px] flex h-[clamp(64px,8vw,96px)] w-[clamp(64px,8vw,96px)] items-center justify-center border-[1.5px] border-white font-display text-[clamp(24px,3vw,38px)] font-extrabold">
                        TT
                      </div>
                      <div className="text-[15px] font-bold tracking-[0.06em]">TOP TEAM</div>
                    </div>
                    <div className="font-display text-[clamp(20px,3vw,32px)] font-extrabold text-[#707072]">VS</div>
                    <div className="text-center">
                      <div className="mx-auto mb-[14px] flex h-[clamp(64px,8vw,96px)] w-[clamp(64px,8vw,96px)] items-center justify-center border-[1.5px] border-[#707072] font-display text-[clamp(24px,3vw,38px)] font-extrabold text-[#9e9ea0]">
                        {nextMatch.opponent?.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="text-[15px] font-bold tracking-[0.06em] text-[#9e9ea0]">{nextMatch.opponent}</div>
                    </div>
                  </div>
                  <div className="mt-[30px] text-[15px] leading-[1.7] text-white/65">
                    {nextMatch.stadium} · {nextMatch.date_label}
                    <br />
                    {nextMatch.summary || "Следите за матчем и всеми обновлениями клуба в официальных соцсетях."}
                  </div>
                </>
              ) : (
                <p className="max-w-[520px] text-[16px] leading-[1.7] text-white/72">
                  Ближайший официальный матч появится здесь сразу после публикации в backend.
                </p>
              )}
            </div>
            <div>
              <div className="mb-[18px] text-[12px] font-semibold uppercase tracking-[0.24em] text-white/50">
                {nextMatch ? "MATCH CENTER" : "LATEST RESULT"}
              </div>
              {lastMatch && (
                <div className="border border-white/10 p-8">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--volt-home)" }}>
                    {lastMatch.competition}
                  </div>
                  <div className="mt-6 flex items-end gap-3">
                    <span className="tt-count font-display text-[clamp(46px,7vw,92px)] font-extrabold leading-[0.9] text-white">
                      {lastMatch.team_score}
                    </span>
                    <span className="font-display text-[clamp(38px,6vw,72px)] font-extrabold leading-[0.9] text-[#333]">:</span>
                    <span className="tt-count font-display text-[clamp(46px,7vw,92px)] font-extrabold leading-[0.9] text-white">
                      {lastMatch.opponent_score}
                    </span>
                  </div>
                  <div className="mt-3 text-[15px] font-bold tracking-[0.06em]">{lastMatch.opponent}</div>
                  <div className="mt-6 text-[15px] leading-[1.7] text-white/62">{lastMatch.summary}</div>
                  <Link href="/fixtures" className="tt-btn tt-btn-primary mt-8">
                    Все матчи
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(80px,10vw,140px)]">
        <div className="tt-container">
          <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="tt-eyebrow mb-[18px]">03 — THE SQUAD</div>
              <h2 className="font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase leading-[0.92] tracking-[-0.015em]">
                Состав,
                <br />
                который не ломается
              </h2>
            </div>
            <Link href="/squad" className="rounded-full border border-[#111] px-6 py-3 text-[14px] font-semibold tracking-[0.04em] transition-colors hover:bg-[#111] hover:text-white">
              Полный состав
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,22px)] lg:grid-cols-3">
            {featuredPlayers.map((player) => (
              <Link key={player.id} href={`/squad/${player.id}`} className="group relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                {player.photo_url ? (
                  <img src={player.photo_url} alt={player.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="tt-grid-lines absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                )}
                <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9e9ea0]">
                  PLAYER · {player.number || "--"}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white/90 via-white/88 to-transparent p-4">
                  <div>
                    <div className="font-display text-[clamp(16px,1.5vw,21px)] font-extrabold uppercase tracking-[-0.01em]">
                      {player.name}
                    </div>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#707072]">
                      {player.position_label}
                    </div>
                  </div>
                  <span className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[0.8] text-[#dcdcdc]">
                    {player.number || "--"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-muted)] px-0 py-[clamp(80px,10vw,140px)] border-t border-[var(--line)]">
        <div className="tt-container">
          <div className="tt-eyebrow mb-[14px]">04 — THE SEASON SO FAR</div>
          <h2 className="mb-[clamp(44px,5vw,68px)] font-display text-[clamp(34px,5vw,60px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.92]">
            Цифры не
            <br />
            врут
          </h2>
          <div className="grid grid-cols-2 gap-[clamp(28px,3vw,48px)] lg:grid-cols-4">
            {homeStats.map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline">
                  <span className="tt-count font-display text-[clamp(56px,8vw,104px)] font-extrabold leading-[0.85] tracking-[-0.02em]">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="ml-1 font-display text-[clamp(20px,2.4vw,34px)] font-extrabold" style={{ color: "var(--volt-home)" }}>
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="my-[18px] h-1 w-11" style={{ background: "var(--volt-home)" }} />
                <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(80px,10vw,140px)]">
        <div className="tt-container grid items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
            <img
              src={latestNews[0]?.cover_image_url || "/media/team-emotions-2025.jpg"}
              alt={latestNews[0]?.title || "Top Team"}
              className="h-full w-full object-cover opacity-70"
            />
            <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.18em] text-white/50">
              EDITORIAL PHOTO
            </span>
          </div>
          <div>
            <div className="tt-eyebrow mb-5">05 — INSIDE THE CLUB</div>
            <h2 className="font-display text-[clamp(30px,4vw,54px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
              {latestNews[0]?.title || "Жизнь клуба"}
            </h2>
            <p className="mt-6 max-w-[460px] text-[16px] leading-[1.7] text-white/70">
              {latestNews[0]?.subtitle || "Последние материалы клуба, собранные в одном месте."}
            </p>
            <Link href={latestNews[0] ? `/news/${latestNews[0].id}` : "/news"} className="tt-btn tt-btn-secondary mt-[30px]">
              Читать материал
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(90px,12vw,170px)] text-center">
        <div className="tt-container">
          <h2 className="font-display text-[clamp(44px,8vw,120px)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
            {communityBlock.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.7] text-[var(--ink-soft)]">
            {communityBlock.text}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={communityBlock.cta.href} target="_blank" rel="noreferrer" className="tt-btn tt-btn-primary">
              {communityBlock.cta.label}
            </a>
            <Link href="/news" className="tt-btn border border-[#111] text-[#111]">
              Новости клуба <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-5 text-[13px] font-semibold tracking-[0.08em] text-[var(--ink-soft)]">
            {platformLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
