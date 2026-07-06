"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Badge from "../ui/Badge";

const formatMatchDate = (match) => {
  if (match.date_label) return match.date_label;
  return new Date(match.date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

function TeamCrest({ name, isTopTeam }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border md:h-16 md:w-16 ${
          isTopTeam
            ? "border-electric/40 bg-royal/20 shadow-glow"
            : "border-white/15 bg-white/5"
        }`}
      >
        {isTopTeam ? (
          <img src="/logo.png" alt="Top Team KG" className="h-9 w-9 object-contain md:h-10 md:w-10" />
        ) : (
          <span className="font-display text-xl font-bold text-white/70 md:text-2xl">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span className={`max-w-[110px] font-display text-sm font-semibold uppercase leading-tight md:text-base ${isTopTeam ? "text-white" : "text-white/70"}`}>
        {name}
      </span>
    </div>
  );
}

export default function MatchCard({ match, featured = false }) {
  const reduceMotion = useReducedMotion();
  const isLive = match.status === "live";
  const isFinished = match.status === "finished";
  const isUpcoming = match.status === "upcoming";
  const won = isFinished && match.team_score > match.opponent_score;
  const home = match.venue === "home";

  const homeTeam = home ? "Top Team" : match.opponent;
  const awayTeam = home ? match.opponent : "Top Team";
  const homeScore = home ? match.team_score : match.opponent_score;
  const awayScore = home ? match.opponent_score : match.team_score;

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-glow ${featured ? "shadow-card" : ""}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
        <span className="font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-ash">
          {match.competition}
        </span>
        {isLive ? (
          <Badge variant="live">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-red-500" />
            Live
          </Badge>
        ) : isUpcoming ? (
          <Badge variant="accent">Скоро</Badge>
        ) : (
          <Badge variant="outline">Завершен</Badge>
        )}
      </div>

      <div className="flex flex-1 items-center justify-between gap-2 px-5 py-8 md:px-7">
        <TeamCrest name={homeTeam} isTopTeam={home} />
        <div className="flex flex-col items-center gap-1">
          {isFinished || isLive ? (
            <div className="flex items-baseline gap-2.5">
              <span className={`font-display text-5xl font-bold md:text-6xl ${home === won ? "text-white" : "text-white/60"}`}>
                {homeScore}
              </span>
              <span className="font-display text-2xl text-electric/50">:</span>
              <span className={`font-display text-5xl font-bold md:text-6xl ${home !== won ? "text-white" : "text-white/60"}`}>
                {awayScore}
              </span>
            </div>
          ) : (
            <span className="gradient-text font-display text-4xl font-bold md:text-5xl">VS</span>
          )}
          <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-ash">
            {match.stage}
          </span>
        </div>
        <TeamCrest name={awayTeam} isTopTeam={!home} />
      </div>

      {match.summary && (
        <div className="border-t border-white/10 px-5 py-4 md:px-7">
          <p className="text-sm leading-relaxed text-ash">{match.summary}</p>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3.5 text-xs text-ash md:px-7">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={12} className="text-electric" />
            {formatMatchDate(match)}
          </span>
          {match.stadium && (
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin size={12} className="text-electric" />
              {match.stadium}
            </span>
          )}
        </div>
        {match.cta_href && (
          <a
            href={match.cta_href}
            target={match.cta_href.startsWith("http") ? "_blank" : undefined}
            rel={match.cta_href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-1 font-heading uppercase tracking-wide text-electric transition-colors hover:text-electric-light"
          >
            {match.cta_label}
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
