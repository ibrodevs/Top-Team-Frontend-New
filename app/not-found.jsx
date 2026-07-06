import Link from "next/link";
import SiteShell from "../components/layout/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="grain-overlay relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 px-6 pt-24">
        <div className="stadium-glow pointer-events-none absolute inset-0" />
        <div className="relative w-full max-w-lg text-center">
          <p className="gradient-text font-display text-[8rem] font-bold leading-none md:text-[11rem]">404</p>
          <h1 className="text-display mt-4 text-3xl uppercase text-white">Мяч ушел за пределы поля</h1>
          <p className="mt-4 leading-relaxed text-ash">
            Такой страницы нет. Вернись на главную — игра продолжается.
          </p>
          <Link
            href="/"
            className="accent-glow accent-glow-hover mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-electric hover:text-navy-950"
          >
            На главную
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
