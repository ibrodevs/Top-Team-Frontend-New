"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import { contactCards, contactTopics } from "../../data/siteData";

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(340px,42vh,500px)] items-end">
        <div className="tt-container w-full pb-[clamp(40px,5vh,68px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">CONTACT</div>
          <h1 className="font-display text-[clamp(44px,8vw,120px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            <span className="block">Найти нас.</span>
            <span className="block" style={{ color: "var(--volt)" }}>
              Написать нам.
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-0 py-[clamp(60px,7vw,110px)]">
        <div className="tt-container grid items-start gap-[clamp(32px,4vw,64px)] lg:grid-cols-2">
          <div>
            <div className="tt-eyebrow mb-7">DIRECT LINES</div>
            <div className="grid gap-[clamp(24px,2.5vw,40px)] sm:grid-cols-2">
              {contactCards.map((item) => (
                <div key={item.label} className="border-t-2 border-[#111] pt-[18px]">
                  <div className="font-display text-[clamp(16px,1.4vw,20px)] font-extrabold uppercase tracking-[-0.01em]">
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-3 block w-fit border-b pb-[2px] text-[15px]"
                    style={{ borderColor: "var(--volt)" }}
                  >
                    {item.value}
                  </a>
                  <div className="mt-2 text-[15px] text-[var(--ink-soft)]">Официальный канал клуба</div>
                </div>
              ))}
            </div>
            <div className="mt-[clamp(32px,3.5vw,52px)] border-t-2 pt-[18px]" style={{ borderColor: "var(--volt)" }}>
              <div className="font-display text-[clamp(16px,1.4vw,20px)] font-extrabold uppercase tracking-[-0.01em]">
                Быстрее всего отвечает Instagram
              </div>
              <div className="mt-3 text-[15px] leading-[1.7] text-[var(--ink-soft)]">
                Для сотрудничества, медиа и матчевых вопросов самый живой канал клуба сейчас — Direct в Instagram.
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[#f5f5f5]">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#e9e9e9_0_1px,transparent_1px_46px),repeating-linear-gradient(90deg,#e9e9e9_0_1px,transparent_1px_46px)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(28deg,#ededed_0_6px,transparent_6px_60px)] opacity-70" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(61,123,255,0.14)]" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--volt)] shadow-[0_0_0_4px_#fff]" />
            <div className="absolute bottom-4 left-4 border border-[var(--line)] bg-white px-[14px] py-[10px] text-[12px] font-semibold tracking-[0.04em]">
              TOP TEAM · Бишкек · online-first
            </div>
          </div>
        </div>
      </section>

      <section className="tt-section-dark px-0 py-[clamp(70px,9vw,140px)]">
        <div className="tt-container max-w-[760px]">
          <div className="tt-eyebrow mb-[14px]">SEND A MESSAGE</div>
          <h2 className="mb-[clamp(36px,4vw,56px)] font-display text-[clamp(28px,4vw,52px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94] text-white">
            Мы читаем всё
          </h2>
          {sent ? (
            <div className="border-t-2 pt-6 text-white" style={{ borderColor: "var(--volt)" }}>
              <div className="flex items-center gap-3">
                <Check size={22} />
                <div className="font-display text-[clamp(22px,2.4vw,34px)] font-extrabold uppercase tracking-[-0.01em]">
                  Спасибо, сообщение отправлено.
                </div>
              </div>
              <p className="mt-3 text-[16px] leading-[1.7] text-white/72">
                Ответим, как только сможем. Для срочного контакта лучше писать в Direct.
              </p>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="flex flex-col gap-[18px]">
              <div className="grid gap-[18px] md:grid-cols-2">
                <input required placeholder="Имя" className="border border-[#2a2a2a] bg-[#141414] px-4 py-[14px] text-[15px] text-white outline-none" />
                <input required type="email" placeholder="Email" className="border border-[#2a2a2a] bg-[#141414] px-4 py-[14px] text-[15px] text-white outline-none" />
              </div>
              <select className="border border-[#2a2a2a] bg-[#141414] px-4 py-[14px] text-[15px] text-white outline-none">
                {contactTopics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
              <textarea rows={5} required placeholder="Ваше сообщение" className="border border-[#2a2a2a] bg-[#141414] px-4 py-[14px] text-[15px] text-white outline-none" />
              <button type="submit" className="tt-btn w-fit bg-[var(--volt)] text-white">
                Отправить
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
