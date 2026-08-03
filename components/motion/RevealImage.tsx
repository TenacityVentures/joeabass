"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/** Curtain-lift scroll reveal for editorial images: a panel slides up while the photo settles from a slow zoom. */
export function RevealImage({ children, className }: { children: React.ReactNode; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    const curtain = curtainRef.current;
    if (!wrap || !img || !curtain) return;

    if (prefersReducedMotion()) {
      gsap.set(curtain, { scaleY: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(img, { scale: 1.15 });
      gsap.set(curtain, { scaleY: 1, transformOrigin: "top" });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: wrap, start: "top 78%", once: true },
      });
      tl.to(curtain, { scaleY: 0, duration: 0.9, ease: "power4.inOut" }).to(
        img,
        { scale: 1, duration: 1.3, ease: "power3.out" },
        "-=0.65"
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden rounded-2xl bg-stone-200", className)}>
      <div ref={imgRef} className="absolute inset-0">
        {children}
      </div>
      <div ref={curtainRef} className="absolute inset-0 z-10 bg-ink" />
    </div>
  );
}
