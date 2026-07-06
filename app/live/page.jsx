import { ArrowUpRight, Radio, Video } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import MatchCard from "../../components/shared/MatchCard";
import MediaCard from "../../components/shared/MediaCard";
import NewsCard from "../../components/shared/NewsCard";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { getMatchesData, getMediaData, getNewsData } from "../../lib/api";

export default async function Page() {
  const [matchesData, mediaData, newsData] = await Promise.all([
    getMatchesData(),
    getMediaData(),
    getNewsData(),
  ]);

  const latestMatch =
    [...(matchesData.results || [])]
      .filter((match) => match.status === "finished")
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
  const featuredMedia = (mediaData.results || []).slice(0, 3);
  const latestArticle =
    [...(newsData.results || [])]
      .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))[0] || null;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Live"
        title="Смотреть Top Team вживую"
        description="Клуб публикует прямые эфиры, полные матчи, хайлайты и закулисье в YouTube и Instagram. Здесь собраны официальные входы в live-контент."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.youtube.com/@topteamkg" external>
              YouTube клуба <ArrowUpRight size={14} />
            </Button>
            <Button href="https://www.instagram.com/topteam.kg/" variant="secondary" external>
              Instagram клуба <ArrowUpRight size={14} />
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <Reveal>
              <div className="animated-border rounded-3xl p-8 md:p-10">
                <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.25em] text-electric">
                  <Radio size={15} />
                  Где смотреть эфиры
                </span>
                <p className="mt-5 text-lg leading-relaxed text-white">
                  У Top Team пока нет отдельного live-плеера на сайте. Официальные трансляции и премьеры
                  выходят на площадках клуба: YouTube для полных выпусков и матчей, Instagram для анонсов,
                  Reels и коротких включений в день игры.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {(mediaData.social_links || []).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-card rounded-2xl p-6 transition-all duration-500 hover:shadow-glow"
                    >
                      <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-electric">{item.label}</p>
                      <p className="mt-2 font-display text-2xl font-semibold uppercase text-white">{item.caption}</p>
                      <p className="mt-2 text-sm text-ash">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            {latestMatch && (
              <Reveal delay={0.1}>
                <MatchCard match={latestMatch} featured />
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Видео"
            title="Свежие видео клуба"
            description="Реальные ролики клуба с официальных площадок: матчи, шоу и контентные форматы."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredMedia.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08}>
                <MediaCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {latestArticle && (
        <section className="border-t border-electric/10 bg-navy-900 py-16 md:py-24">
          <Container>
            <SectionHeader
              eyebrow="Контекст"
              title="Что смотреть прямо сейчас"
              description="Последняя большая история клуба, чтобы быстро войти в контекст перед матчем или выпуском."
            />
            <Reveal>
              <NewsCard article={latestArticle} featured />
            </Reveal>
          </Container>
        </section>
      )}
    </SiteShell>
  );
}
