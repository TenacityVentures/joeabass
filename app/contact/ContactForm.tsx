"use client";

import { useState } from "react";

/**
 * Wire this to your preferred backend: a Next.js route handler,
 * Supabase table, or an n8n webhook that routes to WhatsApp/email.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card flex h-full min-h-[320px] items-center justify-center p-10 text-center">
        <div>
          <p className="text-2xl font-semibold">Message sent.</p>
          <p className="mt-2 text-stone-500">Thank you — you will hear back soon.</p>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-stone-200 bg-white px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-stone-400 focus:border-forest";

  return (
    <form
      className="card grid gap-4 p-8 md:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Name</span>
          <input required name="name" autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Reason</span>
        <select name="reason" className={field} defaultValue="Speaking">
          <option>Speaking</option>
          <option>Partnership</option>
          <option>Media</option>
          <option>General</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea required name="message" rows={5} placeholder="How can Joe help?" className={field} />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-stone-25 transition-colors hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        Send message
      </button>
    </form>
  );
}
