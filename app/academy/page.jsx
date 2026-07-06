import { ArrowUpRight, Goal, Sparkles, Users } from "lucide-react";
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
  const selectionVideo =
    (mediaData.results || []).find((item) => item.id === "team-selection") ||
    (mediaData.results || []).find((item) => item.type === "Шоу") ||
    null;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Отборы"
        title="Академия и путь в Top Team"
        description="Формальной академии с отдельным набором на сайте клуб пока не публиковал, но открытые просмотры и отборы уже были частью реальной жизни Top Team."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.instagram.com/topteam.kg/" external>
              Следить за наборами <ArrowUpRight size={14} />
            </Button>
            <Button href="/contact" variant="secondary">
              Связаться с клубом
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Реальный формат"
            title="Как клуб работает с новыми игроками"
            description="Без вымышленных программ: только то, что уже подтверждено контентом и активностями клуба."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <div className="glass-card h-full rounded-2xl p-8">
                <Users className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Открытые просмотры</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Клуб уже проводил форматы отбора и поиска игроков, а не только закрытый набор по приглашениям.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass-card h-full rounded-2xl p-8">
                <Goal className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Путь на поле</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Попасть в состав можно через реальные игровые качества, медийность и готовность к формату клуба.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="glass-card h-full rounded-2xl p-8">
                <Sparkles className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Медиа-среда</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Top Team ищет не только футболистов, но и личности, которые органично живут и в игре, и в контенте.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {selectionVideo && (
        <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
          <Container>
            <SectionHeader
              eyebrow="Видео"
              title="Открытый отбор в контенте клуба"
              description="Официальный ролик, который показывает формат набора и реальный путь игроков в проект."
            />
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <MediaCard item={selectionVideo} />
              </div>
            </Reveal>
          </Container>
        </section>
      )}
    </SiteShell>
  );
}
