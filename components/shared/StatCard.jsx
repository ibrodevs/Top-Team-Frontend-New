import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function StatCard({ stat, index = 0 }) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-glow md:p-10">
        <span className="pointer-events-none absolute -right-6 -top-10 font-display text-9xl font-bold text-electric/5 transition-colors duration-500 group-hover:text-electric/10">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative">
          <span className="font-display text-6xl font-bold leading-none text-white md:text-7xl">
            <CountUp value={stat.value} />
            {stat.suffix && <span className="gradient-text">{stat.suffix}</span>}
          </span>
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {stat.label}
          </p>
          <p className="mt-1.5 text-sm text-ash">{stat.note}</p>
        </div>
      </div>
    </Reveal>
  );
}
