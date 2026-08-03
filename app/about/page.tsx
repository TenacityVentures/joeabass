import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Portrait } from "@/components/Portrait";
import { Timeline, NewsletterCTA } from "@/components/sections/home";
import { images } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Joe Abass Bangura — entrepreneur, executive and mentor building businesses and growing leaders from Sierra Leone.",
};

const values = [
  { title: "Build to last", body: "Companies, institutions and people — the work is only finished when it outlasts you." },
  { title: "People are the point", body: "Businesses are vehicles. The destination is always people — customers, teams, communities." },
  { title: "Start where you are", body: "Circumstances describe where you begin, never where you finish." },
  { title: "Give the ladder back", body: "Every door that opens is an obligation to hold it open for the next person." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 mt-16 md:mt-0 md:py-28">
        <Container className="grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <p className="eyebrow">About Joe</p>
            <h1 className="h-display mt-5 text-5xl leading-[1.04] md:text-6xl">
              A builder of businesses.
              <br />
              <span className="text-forest">A builder of people.</span>
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-500">
              <p>
                Joe Abass Bangura&apos;s career spans two decades of building — ventures founded
                from scratch, national institutions led through transformation, and a generation
                of founders mentored along the way.
              </p>
              <p>
                He believes Sierra Leone&apos;s greatest untapped resource is its builders. That
                conviction runs through everything: the companies, the JAB Podcast, the mentorship,
                and the weekly letter.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Portrait
              src={images.about}
              alt="Joe Abass Bangura, professional portrait"
              className="aspect-[4/5] w-full"
              priority
            />
          </FadeIn>
        </Container>
      </section>

      <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
        <Container>
          <SectionHeader eyebrow="What he stands for" title="Four convictions." />
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="card h-full p-9">
                  <h3 className="text-xl font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone-500">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <Timeline />
      <NewsletterCTA />
    </>
  );
}
