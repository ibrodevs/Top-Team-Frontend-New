"use client";

import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import { partnerBenefits, partnerFormats } from "../../data/siteData";

const filters = ["Все", "Ценность", "Форматы"];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [sent, setSent] = useState(false);
  const cards = [
    ...partnerBenefits.map((item) => ({ ...item, type: "Ценность" })),
    ...partnerFormats.map((item) => ({ ...item, type: "Форматы" })),
  ];
  const filteredCards = activeFilter === "Все" ? cards : cards.filter((item) => item.type === activeFilter);

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(400px,50vh,580px)] items-end">
        <div className="tt-container w-full pb-[clamp(44px,6vh,76px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">PARTNERS</div>
          <h1 className="font-display text-[clamp(44px,8vw,120px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            <span className="block">Партнерство</span>
            <span className="block" style={{ color: "var(--volt)" }}>
              Top Team
            </span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[clamp(15px,1.3vw,19px)] leading-[1.6] text-white/78">
            Здесь только реальные форматы сотрудничества, которые клуб уже использует в своей коммуникации: без вымышленных логотипов и неподтвержденных брендов.
          </p>
        </div>
      </section>

      <section className="bg-white px-0 pb-[clamp(80px,10vw,140px)] pt-[clamp(60px,7vw,110px)]">
        <div className="tt-container">
          <div className="mb-[clamp(36px,4vw,56px)] flex flex-wrap gap-[10px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-[22px] py-[11px] text-[13px] font-semibold uppercase tracking-[0.08em] ${
                  activeFilter === filter
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[var(--line)] bg-transparent text-[#111]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-[clamp(14px,1.6vw,22px)] md:grid-cols-3 xl:grid-cols-4">
            {filteredCards.map((item) => (
              <div key={item.title} className="flex aspect-[3/2] flex-col items-center justify-center border border-[var(--line)] bg-white p-5 text-center transition-colors hover:border-[#111]">
                <div className="font-display text-[clamp(18px,1.8vw,24px)] font-extrabold uppercase tracking-[-0.01em]">
                  {item.title}
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                  {item.type}
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-[var(--ink-soft)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(90px,11vw,160px)]">
        <div className="tt-container grid items-end gap-[clamp(32px,4vw,64px)] lg:grid-cols-2">
          <div>
            <div className="tt-eyebrow mb-5">COMMERCIAL</div>
            <h2 className="font-display text-[clamp(34px,5vw,68px)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em]">
              Поставьте свой бренд
              <br />
              рядом с Top Team
            </h2>
          </div>
          <div>
            <p className="max-w-[440px] text-[16px] leading-[1.7] text-white/72">
              От логотипа на форме до интеграций в Reels и матчдэй-форматов. Мы не публикуем вымышленные кейсы, а показываем реальные направления, в которых клуб уже работает.
            </p>
            <a href="#partner-form" className="tt-btn mt-7 bg-[var(--volt)] text-white">
              Оставить запрос
            </a>
          </div>
        </div>
      </section>

      <section id="partner-form" className="bg-[var(--bg-muted)] px-0 py-[clamp(70px,9vw,140px)]">
        <div className="tt-container">
          <div className="mx-auto max-w-[760px]">
            <div className="tt-eyebrow mb-[14px]">SEND A MESSAGE</div>
            <h2 className="mb-[clamp(36px,4vw,56px)] font-display text-[clamp(28px,4vw,52px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
              Обсудим сотрудничество
            </h2>
            {sent ? (
              <div className="border-t-2 pt-6" style={{ borderColor: "var(--volt)" }}>
                <div className="font-display text-[clamp(22px,2.4vw,34px)] font-extrabold uppercase tracking-[-0.01em]">
                  Спасибо, запрос отправлен.
                </div>
                <p className="mt-3 text-[16px] leading-[1.7] text-[var(--ink-soft)]">
                  Мы свяжемся с вами после просмотра деталей.
                </p>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="flex flex-col gap-[18px]">
                <div className="grid gap-[18px] md:grid-cols-2">
                  <input required placeholder="Имя" className="border border-[var(--line)] bg-white px-4 py-[14px] text-[15px] outline-none" />
                  <input required type="email" placeholder="Email" className="border border-[var(--line)] bg-white px-4 py-[14px] text-[15px] outline-none" />
                </div>
                <input placeholder="Компания / бренд" className="border border-[var(--line)] bg-white px-4 py-[14px] text-[15px] outline-none" />
                <textarea rows={5} required placeholder="Расскажите о задаче бренда" className="border border-[var(--line)] bg-white px-4 py-[14px] text-[15px] outline-none" />
                <button type="submit" className="tt-btn w-fit bg-[var(--volt)] text-white">
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
