import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-stone-50">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-xl tracking-tight">
            Joe Abass<span className="text-forest">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-500">
            Building businesses. Growing leaders. Shaping Africa&apos;s future.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-7 text-sm font-medium text-stone-500">
          <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-ink">YouTube</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <Link href="/newsletter" className="hover:text-ink">Newsletter</Link>
        </div>
      </div>
      <div className="border-t border-stone-100">
        <div className="mx-auto w-full max-w-content px-6 py-6 text-xs text-stone-400 md:px-10">
          © {new Date().getFullYear()} {site.name}. Built in Freetown, Sierra Leone.
        </div>
      </div>
    </footer>
  );
}
