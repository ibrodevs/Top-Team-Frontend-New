import Reveal from "../shared/Reveal";
import SplitTitle from "../shared/SplitTitle";
import Container from "./Container";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="grain-overlay relative overflow-hidden border-b border-electric/10 bg-navy-950 pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="stadium-glow pointer-events-none absolute inset-x-0 top-0 h-full" />
      <div className="pitch-lines pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative">
        {eyebrow && (
          <Reveal y={16}>
            <span className="mb-5 inline-flex items-center gap-3 font-heading text-xs font-medium uppercase tracking-[0.3em] text-electric">
              <span className="h-px w-10 bg-electric/60" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <SplitTitle
          text={title}
          as="h1"
          className="text-display max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)] uppercase text-white"
        />
        {description && (
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ash">{description}</p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
