"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Play, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { episodes, episodeCategories } from "@/content/site";

export function PodcastGrid() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () =>
      episodes.filter(
        (e) =>
          (cat === "All" || e.category === cat) &&
          (e.title + e.guest).toLowerCase().includes(q.toLowerCase())
      ),
    [q, cat]
  );

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {episodeCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                cat === c
                  ? "border-ink bg-ink text-stone-25"
                  : "border-stone-200 text-stone-500 hover:border-ink hover:text-ink"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search episodes</span>
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search episodes"
            className="w-full rounded-full border border-stone-200 bg-white py-2.5 pl-11 pr-5 text-sm outline-none transition-colors focus:border-forest"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-stone-500">
          No episodes match yet. Try a different search or category.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <a
              key={e.title}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-interactive group overflow-hidden p-4"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-stone-200">
                <Image
                  src={e.thumb}
                  alt={e.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/35" />
                <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 group-hover:scale-110">
                  <Play size={16} className="ml-0.5" />
                </span>
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                  {e.category}
                </p>
                <h3 className="mt-2 font-semibold leading-snug">{e.title}</h3>
                <p className="mt-1 text-sm text-stone-500">with {e.guest}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
