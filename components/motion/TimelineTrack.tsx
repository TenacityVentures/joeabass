"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { FadeIn } from "@/components/motion/FadeIn";

type Item = { era: string; title: string; body: string };

export function TimelineTrack({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line) return;

    if (prefersReducedMotion()) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    gsap.set(line, { scaleY: 0, transformOrigin: "top" });
    const ctx = gsap.context(() => {
      gsap.to(line, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: track, start: "top 75%", end: "bottom 65%", scrub: true },
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={trackRef} className="relative ml-2 md:ml-0">
      <div className="absolute left-0 top-0 h-full w-px bg-stone-200" aria-hidden />
      <div ref={lineRef} className="absolute left-0 top-0 h-full w-px bg-forest" aria-hidden />
      {items.map((t, i) => (
        <FadeIn key={t.era} delay={i * 0.05} className="relative pb-14 pl-10 last:pb-0 md:pl-14">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-forest" />
          <p className="eyebrow">{t.era}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{t.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-stone-500">{t.body}</p>
        </FadeIn>
      ))}
    </div>
  );
}
