"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import SiteShell from "../../components/layout/SiteShell";
import MediaCard from "../../components/shared/MediaCard";
import Reveal from "../../components/shared/Reveal";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { getMediaData } from "../../lib/api";
import { mediaCategories, mediaItems, socialLinks } from "../../data/siteData";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [mediaData, setMediaData] = useState({
    results: mediaItems,
    categories: mediaCategories,
    social_links: socialLinks,
  });

  useEffect(() => {
    let active = true;
    getMediaData().then((data) => {
      if (active) setMediaData(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const filteredItems =
    activeCategory === "Все"
      ? mediaData.results
      : mediaData.results.filter((item) => item.type === activeCategory);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Медиа"
        title="Контент, который двигает клуб"
        description="Reels, хайлайты, интервью и backstage. Top Team — там, где футбол становится контентом, а болельщики — частью команды."
      />

      {/* Категории */}
      <section className="sticky top-14 z-30 border-b border-electric/10 bg-navy-950/90 py-5 backdrop-blur-xl md:top-16">
        <div className="no-scrollbar mx-auto flex max-w-site items-center gap-2.5 overflow-x-auto px-5 md:px-10">
          {mediaData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 font-heading text-xs font-medium uppercase tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "border-royal bg-royal text-white shadow-glow"
                  : "border-white/12 text-ash hover:border-electric/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-сетка: вертикальные Reels + горизонтальные хайлайты */}
      <section className="relative bg-navy-900 py-14 md:py-20">
        <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-96" />
        <Container className="relative">
          {filteredItems.length === 0 ? (
            <div className="py-24 text-center text-ash">Контента в этой категории пока нет.</div>
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 xl:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
              {filteredItems.map((item, index) => (
                <Reveal key={item.id} delay={(index % 3) * 0.06}>
                  <MediaCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Платформы */}
      <section className="relative border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <div className="stadium-glow-bottom pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Платформы"
            title="Где смотреть Top Team"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {mediaData.social_links.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card group flex h-full flex-col rounded-2xl p-8 transition-all duration-500 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-heading text-[11px] uppercase tracking-[0.25em] text-electric">
                      {item.label}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:border-electric group-hover:bg-royal">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-white transition-colors group-hover:text-electric">
                    {item.caption}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{item.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
