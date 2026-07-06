"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

export default function MediaCard({ item }) {
  const reduceMotion = useReducedMotion();
  const vertical = item.format === "vertical";
  const isPhoto = item.type === "Фото";

  return (
    <motion.div
      whileHover={reduceMotion ? {} : { y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        className="group block h-full"
      >
        <div className={`relative overflow-hidden rounded-2xl ${vertical ? "aspect-[9/14]" : "aspect-video"}`}>
          <img
            src={item.image_url}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />

          {!isPhoto && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-navy-950/50 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-electric group-hover:bg-royal/70 group-hover:shadow-glow">
                <Play size={20} className="ml-0.5 fill-white text-white" />
              </span>
            </div>
          )}

          <span className="absolute left-3 top-3 rounded-full bg-navy-900/75 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-electric backdrop-blur-sm">
            {item.type}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="font-display text-xl font-semibold uppercase leading-tight text-white transition-colors group-hover:text-electric-light md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-ash">{item.description}</p>
            <p className="mt-3 font-heading text-[11px] uppercase tracking-[0.2em] text-electric opacity-80 transition-opacity group-hover:opacity-100">
              {item.link_label}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
