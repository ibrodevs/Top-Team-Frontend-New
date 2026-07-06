import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SplitTitle from "../shared/SplitTitle";
import Reveal from "../shared/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  align = "left",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "flex flex-wrap items-end justify-between gap-6"} ${className}`}>
      <div className={centered ? "mx-auto max-w-3xl" : "max-w-3xl"}>
        {eyebrow && (
          <Reveal y={16}>
            <span className="mb-4 inline-flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-[0.3em] text-electric">
              <span className="h-px w-8 bg-electric/60" />
              {eyebrow}
              {centered && <span className="h-px w-8 bg-electric/60" />}
            </span>
          </Reveal>
        )}
        <SplitTitle
          text={title}
          as="h2"
          className="text-display text-4xl uppercase text-white md:text-6xl"
        />
        {description && (
          <Reveal delay={0.2} y={20}>
            <p className="mt-5 text-base leading-relaxed text-ash md:text-lg">{description}</p>
          </Reveal>
        )}
      </div>
      {ctaLabel && ctaHref && !centered && (
        <Link
          href={ctaHref}
          className="group hidden items-center gap-2 font-heading text-sm uppercase tracking-wide text-ash transition-colors hover:text-electric md:inline-flex"
        >
          {ctaLabel}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
