import Link from "next/link";

const sections = [
  {
    title: "Клуб",
    links: [
      { label: "О клубе", href: "/club" },
      { label: "Состав", href: "/squad" },
      { label: "История", href: "/club" },
      { label: "Партнеры", href: "/partners" },
    ],
  },
  {
    title: "Матчи",
    links: [
      { label: "Календарь", href: "/fixtures" },
      { label: "Результаты", href: "/fixtures" },
      { label: "Новости", href: "/news" },
      { label: "Билеты", href: "/tickets" },
    ],
  },
  {
    title: "Медиа",
    links: [
      { label: "Видео", href: "/media" },
      { label: "YouTube", href: "https://www.youtube.com/@topteamkg", external: true },
      { label: "Instagram", href: "https://www.instagram.com/topteam.kg/", external: true },
      { label: "Контакты", href: "/contact" },
    ],
  },
  {
    title: "Помощь",
    links: [
      { label: "Связаться", href: "/contact" },
      { label: "Партнерство", href: "/partners" },
      { label: "Live", href: "/live" },
      { label: "Академия", href: "/academy" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-white px-0 pb-10 pt-[clamp(56px,6vw,88px)] text-[#111]">
      <div className="tt-container">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-[var(--line)] pb-[clamp(40px,5vw,64px)]">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="flex h-[34px] w-[34px] items-center justify-center border-[1.5px] border-current font-display text-[15px] font-extrabold">
              TT
            </span>
            <span className="font-display text-[17px] font-extrabold uppercase tracking-[0.14em]">
              TOP TEAM
            </span>
          </Link>
          <div className="flex items-center gap-[10px] text-[14px] font-medium text-[var(--ink-soft)]">
            <span className="h-2 w-2 bg-[#111]" />
            Бишкек · Русский
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(28px,4vw,48px)] py-[clamp(40px,5vw,64px)] md:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-[18px] text-[14px] font-bold uppercase tracking-[0.1em]">
                {section.title}
              </div>
              <div className="flex flex-col gap-3">
                {section.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[15px] text-[var(--ink-soft)] transition-colors hover:text-[#111]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[15px] text-[var(--ink-soft)] transition-colors hover:text-[#111]"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--line)] pt-8">
          <div className="text-[13px] text-[var(--ink-faint)]">
            © 2026 Top Team KG. Официальная цифровая платформа клуба.
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/topteam.kg/"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold tracking-[0.08em] text-[var(--ink-soft)] transition-colors hover:text-[#111]"
            >
              IG
            </a>
            <a
              href="https://www.youtube.com/@topteamkg"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-semibold tracking-[0.08em] text-[var(--ink-soft)] transition-colors hover:text-[#111]"
            >
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
