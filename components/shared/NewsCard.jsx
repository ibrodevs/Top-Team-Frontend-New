import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

export default function NewsCard({ article, featured = false }) {
  if (featured) {
    return (
      <Link href={`/news/${article.id}`} className="group block h-full">
        <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl md:min-h-[520px]">
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent transition-colors duration-500 group-hover:from-navy-950" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-royal px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-ash">
                <CalendarDays size={12} />
                {formatDate(article.created_date)}
              </span>
            </div>
            <h3 className="text-display max-w-2xl text-3xl uppercase text-white transition-colors group-hover:text-electric-light md:text-5xl">
              {article.title}
            </h3>
            {article.subtitle && (
              <p className="mt-4 line-clamp-2 max-w-xl text-base text-ash md:text-lg">{article.subtitle}</p>
            )}
            <span className="mt-5 inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-electric transition-all duration-300 group-hover:gap-3">
              Читать <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.id}`} className="group block h-full">
      <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-glow">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.cover_image_url}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy-950/20 transition-colors duration-500 group-hover:bg-navy-950/0" />
          <span className="absolute left-3 top-3 rounded-full bg-navy-900/75 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.2em] text-electric backdrop-blur-sm">
            {article.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="flex items-center gap-1.5 text-xs text-ash">
            <CalendarDays size={12} className="text-electric" />
            {formatDate(article.created_date)}
          </span>
          <h3 className="mt-3 line-clamp-2 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-electric">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ash">{article.subtitle}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 font-heading text-xs uppercase tracking-[0.2em] text-electric opacity-0 transition-all duration-300 group-hover:opacity-100">
            Читать <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
