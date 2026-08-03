# Joe Abass — Digital Authority Platform

A production Next.js 14 (App Router) site built as an authority platform, not a brochure. Every page funnels toward two conversions: **the newsletter** and **speaking/partnership enquiries**.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18.17+.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS (custom token theme) |
| Motion | Framer Motion (reduced-motion respected) |
| Icons | lucide-react |
| Fonts | Fraunces (display) + Inter (body) via `next/font` |

All pages are React Server Components except four small client islands: `Navbar`, `NewsletterForm`, `ContactForm`, `PodcastGrid`, and the motion wrappers. First-load JS is ~132 kB.

---

## Design system

Defined in `tailwind.config.ts`:

- `ink` `#141613` — near-black type
- `stone-25 / 50 / 100 / 200 / 400 / 500` — warm neutral scale
- `forest` `#1E5C43` — the single accent, used sparingly
- `font-display` Fraunces, `font-sans` Inter

Rules the design follows: white/soft-grey sections alternate, no gradients as decoration, no glassmorphism, one accent colour, generous vertical rhythm (`py-24 md:py-32`).

---

## Editing content

**Almost everything lives in `content/site.ts`.** Metrics, timeline, expertise, testimonials, speaking topics, companies, episodes, and social links are all there. Change that one file and the whole site updates.

---

## Before launch — checklist

1. **Photography** — replace `components/Portrait.tsx` placeholders with real images.
   Add photos to `/public`, then swap the inner block for:
   ```tsx
   <Image src="/joe-portrait.jpg" alt="Joe Abass Bangura" fill className="object-cover" priority />
   ```
   Needed: hero portrait (4:5), editorial/about portrait, speaking photo (4:3).

2. **Testimonials** — three real quotes in `content/site.ts`. Suggested mix: a founder Joe mentored, an executive peer, a student/young professional.

3. **Metrics** — the numbers are conservative placeholders. Confirm real figures with Joe; specific numbers convert better than vague ones.

4. **Episodes** — replace placeholders in `content/site.ts` with real JAB Podcast titles, guests and YouTube links. Add real thumbnails to the podcast cards.

5. **Beehiiv** — `components/NewsletterForm.tsx` is UI-complete with a fake submit. Replace with your Beehiiv embed, or POST to the Beehiiv API from a route handler to keep the styling.

6. **Contact form** — `app/contact/ContactForm.tsx` also has a stub submit. Wire to a route handler, Supabase table, or an n8n webhook.

7. **Domain + metadata** — set `site.url` and `site.email` in `content/site.ts`. Add `/public/og.jpg` (1200×630) for social sharing.

8. **Bio copy** — the About page and timeline are written from general knowledge. Have Joe review, especially the "Beginnings" chapter, which needs his actual origin story.

---

## SEO

Per-page `metadata` exports, OpenGraph + Twitter cards, `Person` JSON-LD in the root layout, semantic HTML, `sitemap.ts` and `robots.ts`. Add the OG image and you're set.

---

## Deploy

Vercel, connected to the repo. Set the domain, done. Static prerendered pages mean it's fast and cheap.
