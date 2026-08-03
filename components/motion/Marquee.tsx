"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; className?: string; speed?: number };

/** Seamless infinite horizontal scroll for logo/word strips. */
export function Marquee({ children, className, speed = 34 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const width = el.scrollWidth / 2;
      gsap.fromTo(el, { x: 0 }, { x: -width, duration: speed, ease: "none", repeat: -1 });
    }, trackRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max items-center">
        {children}
        {children}
      </div>
    </div>
  );
}
