import { ArrowUpRight, CalendarDays, Info, Ticket } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import MatchCard from "../../components/shared/MatchCard";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { getMatchesData } from "../../lib/api";

const steps = [
  "Клуб анонсирует матч и формат доступа в Instagram.",
  "Если вход открыт, в публикации или stories появляется ссылка или адрес площадки.",
  "Если матч проходит в рамках турнира, правила прохода задает организатор соревнований.",
];

export default async function Page() {
  const matchesData = await getMatchesData();
  const nextMatch =
    [...(matchesData.results || [])]
      .filter((match) => match.status === "upcoming")
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0] || null;
  const fallbackMatch =
    [...(matchesData.results || [])]
      .filter((match) => match.status === "finished")
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
  const featuredMatch = nextMatch || fallbackMatch;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Билеты"
        title="Как попасть на матч Top Team"
        description="Сейчас клуб не ведет отдельную e-ticketing систему на сайте. Реальные анонсы входа, локации и условий посещения публикуются в официальных соцсетях и матчевых постах."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://www.instagram.com/topteam.kg/" external>
              Следить за анонсами <ArrowUpRight size={14} />
            </Button>
            <Button href="/fixtures" variant="secondary">
              Открыть матч-центр
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            <Reveal>
              <div className="animated-border rounded-3xl p-8 md:p-10">
                <span className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.25em] text-electric">
                  <Info size={15} />
                  Актуальный процесс
                </span>
                <div className="mt-6 space-y-4">
                  {steps.map((step, index) => (
                    <div key={step} className="glass-card rounded-2xl p-5">
                      <p className="font-heading text-[11px] uppercase tracking-[0.2em] text-electric">Шаг {index + 1}</p>
                      <p className="mt-2 text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {featuredMatch && (
              <Reveal delay={0.1}>
                <MatchCard match={featuredMatch} featured />
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Площадки"
            title="Куда смотреть перед матчем"
            description="Вход и схема прохода зависят от площадки. Поэтому перед поездкой важно сверить и анонс клуба, и турнирный пост."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <div className="glass-card rounded-2xl p-8">
                <Ticket className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Официальный анонс</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Первый источник для болельщиков — Instagram клуба. Там появляются точные правила посещения.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass-card rounded-2xl p-8">
                <CalendarDays className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Дата и время</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Часть матчей проводится в рамках турниров, поэтому время и формат входа могут обновляться организатором.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="glass-card rounded-2xl p-8">
                <ArrowUpRight className="text-electric" size={22} />
                <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">Если билетов нет</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  Даже без онлайн-продажи все матчи, хайлайты и контент клуба остаются доступны на YouTube и в медиа-разделе сайта.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
