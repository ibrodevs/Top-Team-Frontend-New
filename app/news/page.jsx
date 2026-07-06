"use client";

import { useEffect, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import { getNewsData } from "../../lib/api";
import { news, newsCategories } from "../../data/siteData";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [newsData, setNewsData] = useState({
    results: news,
    categories: newsCategories,
    featured: news.find((article) => article.featured) || news[0] || null,
  });

  useEffect(() => {
    let active = true;
    getNewsData().then((data) => {
      if (active) setNewsData(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const filteredNews =
    activeCategory === "Все"
      ? newsData.results
      : newsData.results.filter((article) => article.category === activeCategory);
  const featured = filteredNews.find((article) => article.featured) || filteredNews[0] || newsData.featured;
  const rest = filteredNews.filter((article) => article.id !== featured?.id);

  return (
    <SiteShell>
      <section className="tt-section-dark relative flex min-h-[clamp(360px,46vh,540px)] items-end">
        <div className="tt-container w-full pb-[clamp(44px,6vh,72px)] pt-28 text-white">
          <div className="tt-eyebrow mb-[22px]">NEWSROOM</div>
          <h1 className="font-display text-[clamp(46px,9vw,132px)] font-black uppercase tracking-[-0.02em] leading-[0.86]">
            Последние
            <span className="block" style={{ color: "var(--volt)" }}>
              новости
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-0 pb-[clamp(70px,8vw,120px)] pt-[clamp(50px,6vw,90px)]">
        <div className="tt-container">
          <div className="mb-[clamp(32px,4vw,52px)] flex flex-wrap gap-[10px]">
            {newsData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-[22px] py-[11px] text-[13px] font-semibold uppercase tracking-[0.08em] ${
                  activeCategory === category
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[var(--line)] bg-transparent text-[#111]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredNews.length === 0 ? (
            <div className="py-24 text-center text-[var(--ink-soft)]">Новостей в этой категории пока нет.</div>
          ) : (
            <div className="grid auto-rows-[210px] grid-cols-1 gap-[clamp(14px,1.6vw,20px)] md:grid-cols-2 xl:grid-cols-4">
              {featured && (
                <a
                  href={`/news/${featured.id}`}
                  className="relative overflow-hidden bg-[#0a0a0a] md:col-span-2 md:row-span-2"
                >
                  <img src={featured.cover_image_url} alt={featured.title} className="absolute inset-0 h-full w-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                  <div className="absolute bottom-0 left-0 right-0 p-[clamp(22px,2.5vw,36px)] text-white">
                    <span className="mb-[14px] inline-block text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "var(--volt)" }}>
                      {featured.category}
                    </span>
                    <h2 className="max-w-[600px] font-display text-[clamp(24px,2.6vw,42px)] font-extrabold uppercase tracking-[-0.015em] leading-[0.98]">
                      {featured.title}
                    </h2>
                    <div className="mt-[14px] text-[13px] text-white/60">
                      {new Date(featured.created_date).toLocaleDateString("ru-RU")} · {featured.author}
                    </div>
                  </div>
                </a>
              )}

              {rest.slice(0, 5).map((article, index) => (
                <a
                  key={article.id}
                  href={`/news/${article.id}`}
                  className={`relative overflow-hidden ${index === 0 ? "bg-[#111] text-white md:row-span-2" : "bg-[#f0f0f0]"}`}
                >
                  {index !== 0 && article.cover_image_url ? (
                    <img src={article.cover_image_url} alt={article.title} className="absolute inset-0 h-full w-full object-cover opacity-55" />
                  ) : null}
                  {index !== 0 ? <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95" /> : null}
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: index === 0 ? "var(--volt)" : "#707072" }}>
                      {article.category}
                    </span>
                    <div>
                      <h3 className={`font-display uppercase tracking-[-0.01em] leading-[1] ${index === 0 ? "text-[clamp(20px,1.9vw,28px)]" : "text-[clamp(15px,1.3vw,19px)] text-[#111]"}`}>
                        {index === 0 ? `«${article.subtitle || article.title}»` : article.title}
                      </h3>
                      {index === 0 ? (
                        <div className="mt-4 text-[13px] text-white/65">{article.author || "Top Team KG"}</div>
                      ) : null}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
