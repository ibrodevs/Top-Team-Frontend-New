import { ArrowUpRight, HeartHandshake, PlayCircle, Users } from "lucide-react";
import SiteShell from "../../components/layout/SiteShell";
import Reveal from "../../components/shared/Reveal";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import SectionHeader from "../../components/ui/SectionHeader";
import { communityBlock, socialLinks } from "../../data/siteData";

export default function Page() {
  const waysToJoin = [
    {
      title: "Следить за матчами",
      text: "Матч-центр, новости и официальные анонсы дают полный контекст по жизни команды.",
      icon: Users,
    },
    {
      title: "Смотреть контент",
      text: "YouTube и Instagram — главные каналы, где клуб ведет диалог с болельщиками каждый день.",
      icon: PlayCircle,
    },
    {
      title: "Поддерживать проект",
      text: "Репосты, посещение матчей и партнерские контакты реально усиливают клуб и его медиа-экосистему.",
      icon: HeartHandshake,
    },
  ];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Комьюнити"
        title="Быть ближе к Top Team"
        description="Отдельная membership-программа еще не оформлена как продукт, но реальное комьюнити клуба уже живет в соцсетях, на матчах и в медиа-контенте."
      >
        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={communityBlock.cta.href} external>
              {communityBlock.cta.label} <ArrowUpRight size={14} />
            </Button>
            <Button href="/media" variant="secondary">
              Смотреть контент
            </Button>
          </div>
        </Reveal>
      </PageHero>

      <section className="bg-navy-900 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Участие"
            title="Как уже сейчас быть частью клуба"
            description="Без абонемента и paywall: только реальные способы поддерживать команду и быть в курсе."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {waysToJoin.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="glass-card h-full rounded-2xl p-8 transition-all duration-500 hover:shadow-glow">
                    <Icon size={22} className="text-electric" />
                    <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-electric/10 bg-navy-950 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Площадки"
            title="Где живет комьюнити"
            description="Официальные площадки клуба, где выходят анонсы, видео и обратная связь."
          />
          <div className="grid gap-4">
            {socialLinks.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card flex items-center justify-between rounded-2xl p-6 transition-all duration-500 hover:shadow-glow"
                >
                  <div>
                    <p className="font-heading text-[11px] uppercase tracking-[0.22em] text-electric">{item.label}</p>
                    <p className="mt-2 font-display text-2xl font-semibold uppercase text-white">{item.caption}</p>
                    <p className="mt-2 text-sm text-ash">{item.description}</p>
                  </div>
                  <ArrowUpRight className="text-electric" size={18} />
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
