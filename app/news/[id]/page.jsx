import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import SiteShell from "../../../components/layout/SiteShell";
import { getArticleDetail } from "../../../lib/api";

export default async function Page({ params }) {
  const { id } = await params;
  const article = await getArticleDetail(id);
  if (!article) notFound();

  const related = article.related_news || [];

  return (
    <SiteShell>
      <article className="bg-white text-[#111]">
        <section className="tt-section-dark relative min-h-[clamp(420px,60vh,720px)] overflow-hidden">
          {article.cover_image_url ? (
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover opacity-55"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/92" />

          <div className="tt-container relative flex min-h-[clamp(420px,60vh,720px)] flex-col justify-end pb-[clamp(44px,6vh,80px)] pt-28 text-white">
            <Link
              href="/news"
              className="mb-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              ← Все новости
            </Link>

            <span
              className="mb-4 inline-block w-fit px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              style={{ background: "var(--volt)" }}
            >
              {article.category}
            </span>
            <h1 className="max-w-[980px] font-display text-[clamp(2.4rem,6.5vw,6.5rem)] font-black uppercase tracking-[-0.02em] leading-[0.9]">
              {article.title}
            </h1>
            {article.subtitle ? (
              <p className="mt-5 max-w-[760px] text-[clamp(16px,1.5vw,22px)] leading-[1.6] text-white/78">
                {article.subtitle}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-5 text-[13px] text-white/60">
              <span>{article.author || "Пресс-служба Top Team KG"}</span>
              <span>
                {new Date(article.created_date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white px-0 py-[clamp(60px,7vw,110px)]">
          <div className="tt-container">
            <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[0.78fr_0.22fr]">
              <div className="max-w-[820px]">
                <div className="article-body">
                  <ReactMarkdown>{article.body || article.body_markdown || "Текст статьи скоро появится."}</ReactMarkdown>
                </div>
              </div>

              <aside className="border-t-2 pt-5 lg:border-t-0 lg:border-l lg:border-[var(--line)] lg:pl-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                  Материал
                </div>
                <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-[var(--ink-soft)]">
                  <p>Категория: {article.category}</p>
                  <p>Автор: {article.author || "Пресс-служба Top Team KG"}</p>
                  <p>
                    Дата:{" "}
                    {new Date(article.created_date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="tt-section-dark px-0 py-[clamp(70px,9vw,140px)]">
            <div className="tt-container">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div className="tt-eyebrow mb-4">NEWSROOM</div>
                  <h2 className="font-display text-[clamp(28px,3.5vw,48px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.94]">
                    Читать дальше
                  </h2>
                </div>
                <Link href="/news" className="tt-link-line text-[14px] font-semibold tracking-[0.04em]">
                  Все новости →
                </Link>
              </div>

              <div className="grid gap-[clamp(14px,1.6vw,20px)] md:grid-cols-3">
                {related.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className={`relative overflow-hidden ${index === 0 ? "aspect-[1.2/1] bg-[#111]" : "aspect-[1/1] bg-[#141414]"}`}
                  >
                    {item.cover_image_url ? (
                      <img src={item.cover_image_url} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-50" />
                    ) : (
                      <div className="absolute inset-0 tt-dark-grid" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--volt)" }}>
                        {item.category}
                      </span>
                      <h3 className="mt-3 font-display text-[clamp(18px,2vw,28px)] font-extrabold uppercase tracking-[-0.01em] leading-[0.98]">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
