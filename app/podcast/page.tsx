import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { NewsletterCTA } from "@/components/sections/home";
import { PodcastGrid } from "./PodcastGrid";
import { Parallax } from "@/components/motion/Parallax";
import { site, images } from "@/content/site";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "The JAB Podcast",
  description:
    "The JAB Podcast — Joe Abass Bangura in conversation with the entrepreneurs, executives and change-makers shaping the future of Africa.",
};

export default function PodcastPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Container className="relative z-10 pb-20 pt-40 md:pb-28">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow">The JAB Podcast</p>
            <h1 className="h-display mt-5 text-5xl text-white leading-[1.04] md:text-6xl">
              Conversations that <span className="">build.</span>
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-stone-400">
              Honest conversations with the entrepreneurs, executives and change-makers shaping
              Africa&apos;s future — hosted by Joe Abass Bangura.
            </p>
            <div className="mt-9">
              <Button href={site.youtube} external>
                <Play size={16} /> Watch on YouTube
              </Button>
            </div>
          </FadeIn>
        </Container>
        <div className="absolute inset-0">
          <Parallax className="absolute inset-x-0 -top-[15%] -left-[100%] md:left-0 md:-right-[5%] h-[150%]" speed={0.18}>
            <Image
              style={{ transform: 'rotate(10deg) scale(1.1)' }}
              src={images.podcast}
              alt="Joe Abass Bangura"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_32%] -mt-32"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/75 to-transparent" />
        </div>
      </section>

      {/*<section className="border-t border-stone-100 bg-stone-50 py-20 md:py-24">
        <Container>
          <PodcastGrid />
        </Container>
      </section>*/}

      <NewsletterCTA />
    </>
  );
}
