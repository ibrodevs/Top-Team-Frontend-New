"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Силуэт игрока для карточек без фото
function PlayerSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true">
      <ellipse cx="100" cy="72" rx="32" ry="36" fill="url(#silhouette-gradient)" />
      <path
        d="M100 118c-16 0-27 8-33 14-20 20-33 58-37 108h140c-4-50-17-88-37-108-6-6-17-14-33-14Z"
        fill="url(#silhouette-gradient)"
      />
      <defs>
        <linearGradient id="silhouette-gradient" x1="100" y1="34" x2="100" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E5EFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0D1B36" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function PlayerCard({ player, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link href={`/squad/${player.id}`} className="group block h-full">
        <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-glow">
          {/* Визуальная зона: фото или премиальный плейсхолдер */}
          <div className="player-placeholder relative aspect-[4/4.4] overflow-hidden">
            {player.photo_url ? (
              <img
                src={player.photo_url}
                alt={player.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <PlayerSilhouette className="absolute inset-x-0 bottom-0 mx-auto h-[85%] w-auto transition-transform duration-700 group-hover:scale-105" />
            )}
            {player.number != null && (
              <span className="pointer-events-none absolute -right-2 top-2 font-display text-[7rem] font-bold leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-electric/15 md:text-[8.5rem]">
                {player.number}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-850 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full border border-electric/25 bg-navy-900/70 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-electric backdrop-blur-sm">
              {player.position_label}
            </span>
          </div>

          <div className="relative flex flex-1 flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold uppercase leading-none text-white transition-colors group-hover:text-electric">
                {player.name}
              </h3>
              {player.number != null && (
                <span className="gradient-text shrink-0 font-display text-3xl font-bold leading-none">
                  {player.number}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ash">{player.role}</p>

            {/* Статистика появляется на hover (на десктопе) */}
            {player.stats && (
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 opacity-100 transition-opacity duration-500 lg:opacity-60 lg:group-hover:opacity-100">
                {player.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-lg font-semibold text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-wide text-ash">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-[0.2em] text-electric opacity-0 transition-all duration-300 group-hover:opacity-100">
              Подробнее <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
