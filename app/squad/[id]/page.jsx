import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/layout/SiteShell";
import { getPlayerDetail } from "../../../lib/api";

export default async function Page({ params }) {
  const { id } = await params;
  const player = await getPlayerDetail(id);
  if (!player) notFound();

  const teammates = player.related_players || [];

  return (
    <SiteShell>
      <section className="tt-section-dark relative overflow-hidden">
        {player.number != null && (
          <span className="pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2 select-none font-display text-[10rem] font-black leading-none text-white/5 md:text-[18rem]">
            {player.number}
          </span>
        )}
        <div className="tt-container relative pb-[clamp(56px,7vh,92px)] pt-28 text-white md:pt-36">
          <Link
            href="/squad"
            className="mb-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            ← Состав команды
          </Link>

          <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/4.8] max-w-md overflow-hidden bg-[#141414]">
              {player.photo_url ? (
                <img src={player.photo_url} alt={player.name} className="h-full w-full object-cover object-top" />
              ) : (
                <>
                  <div className="absolute inset-0 tt-dark-grid" />
                  <img
                    src="/logo.png"
                    alt=""
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 object-contain opacity-25"
                  />
                </>
              )}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent" />
              <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                PLAYER FILE
              </span>
            </div>

            <div>
              <div className="tt-eyebrow mb-5">FIRST TEAM</div>
              <h1 className="font-display text-[clamp(2.7rem,7vw,6.6rem)] font-black uppercase tracking-[-0.02em] leading-[0.88]">
                {player.name}
              </h1>
              <p className="mt-6 max-w-[720px] text-[18px] leading-[1.7] text-white/78">
                {player.bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {player.number != null && (
                  <div className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                    Номер · {player.number}
                  </div>
                )}
                <div className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                  Позиция · {player.position_label}
                </div>
                {player.nationality && (
                  <div className="rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
                    Страна · {player.nationality}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(60px,7vw,110px)]">
        <div className="tt-container">
          <div className="grid gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="tt-eyebrow mb-5">ROLE</div>
              <h2 className="font-display text-[clamp(28px,3.6vw,52px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
                Роль в команде
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.8] text-[var(--ink-soft)]">
                {player.role}
              </p>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.8] text-[var(--ink-soft)]">
                {player.name.split(" ")[0]} входит в число лиц, которые формируют и спортивный, и медийный образ Top Team:
                каждая игра, каждое появление в контенте и каждый большой матч усиливают его роль внутри проекта.
              </p>
            </div>

            {player.stats?.length ? (
              <div>
                <div className="tt-eyebrow mb-5">DATA</div>
                <div className="grid grid-cols-2 gap-4">
                  {player.stats.map((stat) => (
                    <div key={stat.label} className="border border-[var(--line)] bg-[var(--bg-muted)] p-6">
                      <div className="font-display text-[clamp(34px,4vw,56px)] font-extrabold leading-[0.9] tracking-[-0.02em]">
                        {stat.value}
                      </div>
                      <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-faint)]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-[var(--line)] bg-[var(--bg-muted)] p-8">
                <div className="tt-eyebrow mb-5">STATUS</div>
                <h3 className="font-display text-[clamp(22px,2.4vw,34px)] font-extrabold uppercase tracking-[-0.01em]">
                  Профиль игрока обновлен
                </h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-[var(--ink-soft)]">
                  Подробная сезонная статистика добавляется по мере обновления данных клуба и турниров. Биография,
                  позиция и роль уже подключены из backend.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(70px,9vw,140px)]">
        <div className="tt-container">
          <div className="grid items-end gap-[clamp(32px,4vw,64px)] lg:grid-cols-2">
            <div>
              <div className="tt-eyebrow mb-5">MEDIA</div>
              <h2 className="font-display text-[clamp(30px,4vw,54px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
                Игрок в контенте клуба
              </h2>
            </div>
            <div>
              <p className="max-w-[460px] text-[16px] leading-[1.7] text-white/72">
                Матчи, хайлайты, backstage и появление {player.name.split(" ")[0]} в медиа-историях клуба доступны
                через официальные площадки Top Team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/topteam.kg/"
                  target="_blank"
                  rel="noreferrer"
                  className="tt-btn bg-[var(--volt)] text-white"
                >
                  Instagram клуба
                </a>
                <Link href="/media" className="tt-btn tt-btn-secondary">
                  Медиа-раздел
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {teammates.length > 0 && (
        <section className="bg-white px-0 py-[clamp(60px,7vw,110px)] border-t border-[var(--line)]">
          <div className="tt-container">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="tt-eyebrow mb-4">SQUAD</div>
                <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
                  Другие игроки
                </h2>
              </div>
              <Link href="/squad" className="tt-link-line text-[14px] font-semibold tracking-[0.04em]">
                Весь состав →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-[clamp(12px,1.5vw,20px)] md:grid-cols-4">
              {teammates.map((teammate) => (
                <Link key={teammate.id} href={`/squad/${teammate.id}`} className="group relative aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
                  {teammate.photo_url ? (
                    <img
                      src={teammate.photo_url}
                      alt={teammate.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 tt-grid-lines transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white/92 via-white/88 to-transparent p-4">
                    <div>
                      <div className="font-display text-[clamp(15px,1.4vw,20px)] font-extrabold uppercase tracking-[-0.01em] text-[#111]">
                        {teammate.name}
                      </div>
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#707072]">
                        {teammate.position_label}
                      </div>
                    </div>
                    <span className="font-display text-[clamp(24px,2.8vw,38px)] font-extrabold leading-[0.8] text-[#dcdcdc]">
                      {teammate.number || "--"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
