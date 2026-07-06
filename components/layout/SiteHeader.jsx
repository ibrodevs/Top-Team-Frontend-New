"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "О клубе", href: "/club" },
  { label: "Состав", href: "/squad" },
  { label: "Матчи", href: "/fixtures" },
  { label: "Новости", href: "/news" },
  { label: "Партнеры", href: "/partners" },
  { label: "Контакты", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        compact
          ? "border-b border-[#e5e5e5] bg-white/90 text-[#111] backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div
        className="tt-container flex items-center justify-between gap-6"
        style={{ paddingTop: compact ? 13 : 22, paddingBottom: compact ? 13 : 22 }}
      >
        <Link href="/" className="flex items-center gap-3 text-inherit no-underline">
          <img src="/logo.png" alt="Top Team KG" className="h-[34px] w-[34px] object-contain" />
          <span
            className="font-display text-[17px] font-extrabold uppercase tracking-[0.14em]"
            style={{ lineHeight: 1 }}
          >
            TOP TEAM
          </span>
        </Link>

        <nav className="hidden items-center gap-[clamp(20px,2.4vw,38px)] lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-semibold tracking-[0.03em] transition-colors"
                style={{ color: active ? "var(--volt)" : "inherit" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-[14px]">
          <div
            className={`hidden items-center gap-2 rounded-full px-4 py-[9px] xl:flex ${
              compact ? "bg-[#f5f5f5] text-[#111]" : "bg-white/15 text-white"
            }`}
          >
            <Search size={16} />
            <span className="text-[14px] font-medium opacity-80">Поиск</span>
          </div>
          <Link
            href="/tickets"
            className="rounded-full px-[22px] py-[11px] text-[13px] font-bold uppercase tracking-[0.08em] text-[#111] transition-[filter] duration-200"
            style={{ background: "var(--volt)" }}
          >
            Билеты
          </Link>
        </div>
      </div>
    </header>
  );
}
