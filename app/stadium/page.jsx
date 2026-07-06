import { CalendarDays, MapPin, Trophy } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { getMatchesData } from "../../lib/api";

export default async function Page() {
  const matchesData = await getMatchesData();
  const venues = [];
  const venueMap = new Map();

  for (const match of matchesData.results || []) {
    if (!match.stadium) continue;
    const existing = venueMap.get(match.stadium);
    if (existing) {
      existing.count += 1;
      existing.competitions.add(match.competition);
      existing.lastDate = existing.lastDate > match.date ? existing.lastDate : match.date;
      continue;
    }
    const item = {
      name: match.stadium,
      city: match.stadium.includes(",") ? match.stadium.split(",").slice(1).join(",").trim() : "Локация турнира",
      count: 1,
      competitions: new Set([match.competition]),
      lastDate: match.date,
    };
    venueMap.set(match.stadium, item);
    venues.push(item);
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Локации"
        title="Где играет Top Team"
        description="У клуба нет одной фиксированной медиа-арены: площадка зависит от турнира и организатора. Здесь собраны реальные стадионы и поля из официальных матчей команды."
      />

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Площадки"
            title="Подтвержденные локации матчей"
            description="Только те стадионы и арены, которые уже фигурируют в официальных играх и публикациях клуба."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {venues.map((venue, index) => (
              <Reveal key={venue.name} delay={(index % 3) * 0.08}>
                <div className="glass-card h-full rounded-2xl p-8 transition-all duration-500 hover:shadow-glow">
                  <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-electric">{venue.city}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-white">{venue.name}</h2>
                  <div className="mt-6 grid gap-3 text-sm text-ash">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={15} className="text-electric" />
                      {venue.count} матч(а) в базе сайта
                    </p>
                    <p className="flex items-center gap-2">
                      <Trophy size={15} className="text-electric" />
                      {Array.from(venue.competitions).join(", ")}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={15} className="text-electric" />
                      Последнее упоминание: {new Date(venue.lastDate).toLocaleDateString("ru-RU")}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Матчи"
            title="Локации в разрезе игр"
            description="Привязка к стадиону хранится прямо в матч-центре и используется на карточках матчей."
          />
          <div className="grid gap-4">
            {(matchesData.results || []).map((match, index) => (
              <Reveal key={match.id} delay={Math.min(index * 0.04, 0.24)}>
                <div className="glass-card flex flex-col gap-3 rounded-2xl p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-heading text-[11px] uppercase tracking-[0.22em] text-electric">
                      {match.competition} · {match.stage}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold uppercase text-white">
                      Top Team vs {match.opponent}
                    </h3>
                  </div>
                  <div className="text-sm text-ash md:text-right">
                    <p>{match.date_label || new Date(match.date).toLocaleDateString("ru-RU")}</p>
                    <p className="mt-1">{match.stadium || "Локация уточняется организатором"}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
