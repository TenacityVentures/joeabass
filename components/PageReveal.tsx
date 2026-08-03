"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * One-time brand moment on a fresh page load: holds the screen behind the
 * wordmark, then curtain-lifts away. Lives in the root layout, so it only
 * plays on a hard load/refresh — client-side navigations don't remount it.
 */
export function PageReveal() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const mark = markRef.current;
    if (!overlay || !mark) return;

    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setDone(true),
    });

    tl.fromTo(mark, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5 })
      .to(mark, { opacity: 0, y: -10, duration: 0.35, ease: "power2.in" }, "+=0.35")
      .to(overlay, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.1");

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-ink"
    >
      <div ref={markRef} className="font-display text-3xl tracking-tight text-stone-25 opacity-0 md:text-4xl">
        Joe Abass<span className="text-forest-light">.</span>
      </div>
    </div>
  );
}
