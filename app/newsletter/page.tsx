import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Weekly Letter",
  description:
    "Weekly insights from Joe Abass Bangura on leadership, business, entrepreneurship, and Africa. Read in under five minutes.",
};

const receives = [
  {
    title: "Leadership",
    body: "What it takes to lead institutions and teams through change — from someone doing it now.",
  },
  {
    title: "Business",
    body: "Frameworks and hard-won lessons on building companies that survive African markets.",
  },
  {
    title: "Entrepreneurship",
    body: "The honest version of the founder journey: sacrifice, resilience, and what success costs.",
  },
  {
    title: "Africa",
    body: "A continent-first view of the opportunities being built right now — and who is building them.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="py-20 mt-12 md:py-28">
        <Container className="max-w-3xl text-center">
          <FadeIn>
            <p className="eyebrow justify-center">The weekly letter</p>
            <h1 className="h-display mt-5 text-5xl leading-[1.04] md:text-6xl">
              Lessons from <span className="text-forest">the arena.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-stone-500">
              Weekly insights on leadership, business, entrepreneurship, and Africa — written for
              people doing the work. Read in under five minutes.
            </p>
            <div className="mx-auto mt-10 max-w-md">
              {/* Beehiiv: swap NewsletterForm for your beehiiv embed when ready */}
              <NewsletterForm />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-stone-100 bg-stone-50 py-24 md:py-32">
        <Container>
          <FadeIn className="mb-14 max-w-2xl">
            <p className="eyebrow">Every week</p>
            <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl">
              What subscribers receive.
            </h2>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {receives.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.06}>
                <div className="card h-full p-9">
                  <h3 className="text-xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone-500">{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-14 text-center">
            <p className="text-sm text-stone-400">
              No spam. No noise. One letter a week. Unsubscribe anytime.
            </p>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
