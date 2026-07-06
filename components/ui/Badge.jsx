const variants = {
  accent: "border-electric/25 bg-electric/10 text-electric",
  solid: "border-royal bg-royal text-white",
  outline: "border-white/20 bg-white/5 text-white/80",
  live: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function Badge({ children, variant = "accent", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-heading text-[10px] font-medium uppercase tracking-[0.2em] ${variants[variant] || variants.accent} ${className}`}
    >
      {children}
    </span>
  );
}
