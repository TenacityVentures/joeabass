import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/Portrait";
import { Testimonials } from "@/components/sections/home";
import { speakingTopics, audiences, images } from "@/content/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite Joe Abass Bangura to speak — keynotes, panels and executive sessions on leadership, entrepreneurship and Africa.",
};

export default function SpeakingPage() {
  return (
    <>
      <section className="py-20 mt-12 md:py-28">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <FadeIn>
            <p className="eyebrow">Speaking</p>
            <h1 className="h-display mt-5 text-5xl leading-[1.04] md:text-6xl">
              Rooms change when the <span className="text-forest">right story</span> is told.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-stone-500">
              Joe speaks from the arena, not the sidelines — on leadership, building in African
              markets, and the future being written by this generation of builders.
            </p>
            <div className="mt-9">
              <Button href="/contact">Invite Joe to speak</Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <Portrait
              src={images.speaking}
              alt="Joe Abass Bangura speaking on stage"
              className="aspect-[4/3] w-full"
              priority
            />
          </FadeIn>
        </Container>
      </section>

      <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
        <Container>
          <SectionHeader eyebrow="Topics" title="What Joe speaks about." />
          <div className="grid gap-3 md:grid-cols-2">
            {speakingTopics.map((t, i) => (
              <FadeIn key={t.title} delay={i * 0.04}>
                <div className="card flex items-center justify-between gap-6 px-6 py-5">
                  <span className="font-medium">{t.title}</span>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400">
                    {t.format}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-16">
            <p className="eyebrow">Audiences</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {audiences.map((a) => (
                <span key={a} className="rounded-full border border-stone-200 bg-stone-25 px-5 py-2 text-sm font-medium text-stone-500">
                  {a}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <Testimonials />

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <FadeIn>
            <h2 className="h-display mx-auto max-w-3xl text-4xl leading-[1.05] md:text-5xl">
              Bring this conversation to your organisation.
            </h2>
            <div className="mt-9">
              <Button href="/contact">Request availability</Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
