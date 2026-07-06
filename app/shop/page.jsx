import { ArrowUpRight, Shirt, Sparkles, Video } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import MediaCard from "../../components/shared/MediaCard";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { getMediaData } from "../../lib/api";

export default async function Page() {
  const mediaData = await getMediaData();
  const featuredMedia = (mediaData.results || []).slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Мерч"
        title="Форма и будущий мерч Top Team"
        description="Отдельный интернет-магазин клуб пока не открыл, поэтому на сайте нет вымышленных карточек товаров и неактуальных цен. Здесь только реальный статус и официальные каналы, где появятся новости о дропах."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.instagram.com/topteam.kg/" external>
              Следить за дропами <ArrowUpRight size={14} />
            </Button>
            <Button href="/partners" variant="secondary">
              Партнерство и экипировка
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Статус"
            title="Что уже есть сейчас"
            description="Клуб использует экипировку и брендинг в матчах и медиа, но публичный checkout еще не запущен."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <div className="glass-card h-full rounded-2xl p-8">
                <Shirt className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Игровая форма</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Клуб уже выходит в фирменной экипировке на официальные матчи и медиа-съемки.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass-card h-full rounded-2xl p-8">
                <Video className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Показы в контенте</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Новая визуальная айдентика клуба уже регулярно появляется в роликах, матчевых кадрах и backstage.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="glass-card h-full rounded-2xl p-8">
                <Sparkles className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Без фейкового магазина</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Пока нет подтвержденного запуска, сайт честно не показывает ненастоящие SKU, остатки и цены.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Визуалы"
            title="Актуальные кадры клуба"
            description="Пока магазин не открыт, официальный визуальный контент клуба лучше всего показывает текущий стиль Top Team."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredMedia.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 0.08}>
                <MediaCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
