"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/speaking", label: "Speaking" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        transparent ? "bg-transparent" : "border-b border-stone-100 bg-stone-25/85 backdrop-blur-md"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[76px] w-full container items-center justify-between px-6 md:px-10"
      >
        <Link
          href="/"
          className={cn(
            "font-display text-xl tracking-tight transition-colors",
            transparent ? "text-white" : "text-ink"
          )}
          onClick={() => setOpen(false)}
        >
          Joe Abass<span className="text-forest">.</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                transparent
                  ? "text-white/80 hover:text-white"
                  : pathname === l.href
                    ? "text-ink"
                    : "text-stone-500 hover:text-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors",
              transparent ? "bg-white text-ink hover:bg-forest hover:text-white" : "bg-ink text-stone-25 hover:bg-forest"
            )}
          >
            Subscribe
          </Link>
        </div>

        <button
          className={cn("md:hidden transition-colors", transparent ? "text-white" : "text-ink")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-100 bg-stone-25 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone-100 py-4 text-base font-medium text-ink last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-stone-25"
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
