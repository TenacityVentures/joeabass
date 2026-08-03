"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Beehiiv integration:
 * Replace the form submit with your beehiiv embed, or POST to
 * beehiiv API via a route handler. UI is production-ready.
 */
export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className={cn("text-lg font-semibold", dark ? "text-forest-light" : "text-forest")}>
        You&apos;re in. Check your inbox to confirm.
      </p>
    );
  }

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={dark ? "email-dark" : "email-light"} className="sr-only">
          Email address
        </label>
        <input
          id={dark ? "email-dark" : "email-light"}
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          className={cn(
            "w-full rounded-full border px-6 py-3.5 text-sm outline-none transition-colors",
            dark
              ? "border-white/15 bg-white/5 text-stone-25 placeholder:text-stone-400 focus:border-forest-light"
              : "border-stone-200 bg-white text-ink placeholder:text-stone-400 focus:border-forest"
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            dark
              ? "bg-stone-25 text-ink hover:bg-forest-light focus-visible:outline-stone-25"
              : "bg-ink text-stone-25 hover:bg-forest focus-visible:outline-forest"
          )}
        >
          Subscribe
        </button>
      </div>
      <p className={cn("mt-4 text-xs", dark ? "text-stone-400" : "text-stone-400")}>
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
