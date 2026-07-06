import SiteShell from "../../components/layout/SiteShell";
import TimelinePicker from "../../components/club/TimelinePicker";
import { getClubData } from "../../lib/api";

export default async function Page() {
  const clubData = await getClubData();

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(440px,58vh,660px)] items-end">
        <div className="tt-container relative w-full pb-[clamp(48px,7vh,84px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">THE CLUB</div>
          <h1 className="font-display text-[clamp(46px,9vw,132px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            <span className="block">{clubData.hero?.title || "О клубе"}</span>
            <span className="block" style={{ color: "var(--volt)" }}>
              Top Team KG
            </span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[clamp(15px,1.3vw,19px)] leading-[1.6] text-white/78">
            {clubData.hero?.description}
          </p>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(80px,10vw,150px)]">
        <div className="tt-container">
          <h2 className="max-w-[1050px] font-display text-[clamp(28px,4.4vw,64px)] font-extrabold uppercase tracking-[-0.02em] leading-[1.02]">
            {clubData.club_quote?.text}
          </h2>
          <div className="mt-[clamp(48px,6vw,88px)] grid gap-[clamp(28px,3vw,48px)] md:grid-cols-3">
            {clubData.about_pillars.slice(0, 3).map((pillar, index) => (
              <div key={pillar.title} className="border-t-2 pt-[22px]" style={{ borderColor: index === 2 ? "var(--volt)" : "#111" }}>
                <div className="font-display text-[clamp(22px,2vw,30px)] font-extrabold uppercase tracking-[-0.01em]">
                  {pillar.title}
                </div>
                <p className="mt-[14px] text-[16px] leading-[1.7] text-[var(--ink-soft)]">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(80px,10vw,150px)]">
        <div className="tt-container">
          <div className="tt-eyebrow mb-[14px]">A HUNDRED-YEAR RUN</div>
          <h2 className="mb-[clamp(40px,5vw,64px)] font-display text-[clamp(34px,5vw,64px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.92]">
            Выбери год
          </h2>
          <TimelinePicker items={clubData.club_timeline} />
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-muted)] px-0 py-[clamp(80px,10vw,140px)]">
        <div className="tt-container">
          <div className="tt-eyebrow mb-[14px]">IN THE CABINET</div>
          <h2 className="mb-[clamp(44px,5vw,68px)] font-display text-[clamp(30px,4.4vw,58px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.92]">
            История в цифрах
          </h2>
          <div className="grid gap-[clamp(28px,3vw,48px)] md:grid-cols-4">
            {clubData.achievements.map((item) => (
              <div key={item.title}>
                <div className="font-display text-[clamp(42px,6vw,72px)] font-extrabold leading-[0.85] tracking-[-0.02em]">
                  {item.year}
                </div>
                <div className="my-[18px] h-1 w-11" style={{ background: "var(--volt)" }} />
                <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(70px,8vw,120px)]">
        <div className="tt-container text-center">
          <div className="tt-eyebrow mb-5 justify-center">ФИЛОСОФИЯ</div>
          <h2 className="font-display text-[clamp(28px,4vw,54px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.96]">
            {clubData.club_quote?.caption}
          </h2>
          <div className="mx-auto mt-8 grid max-w-[1000px] gap-5 md:grid-cols-3">
            {clubData.mission_vision.map((item) => (
              <div key={item.title} className="border border-[var(--line)] p-8 text-left">
                <h3 className="font-display text-[24px] font-extrabold uppercase tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-[var(--ink-soft)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
