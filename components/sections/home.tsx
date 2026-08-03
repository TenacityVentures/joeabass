import Image from "next/image";
import Link from "next/link";
import {
  Compass, TrendingUp, Radio, Lightbulb, Cpu, Rocket, Users, Landmark, Globe, ArrowRight, ArrowDown, ArrowDownRight, Play,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { Counter } from "@/components/motion/Counter";
import { Parallax } from "@/components/motion/Parallax";
import { RevealImage } from "@/components/motion/RevealImage";
import { Marquee } from "@/components/motion/Marquee";
import { TimelineTrack } from "@/components/motion/TimelineTrack";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  site, images, metrics, logos, timeline, expertise, testimonials, speakingTopics, companies, audienceSegments,
} from "@/content/site";

const icons = { Compass, TrendingUp, Radio, Lightbulb, Cpu, Rocket, Users, Landmark, Globe } as const;

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden font-helvetica bg-ink text-stone-25 md:min-h-[80vh]">
      <div className="absolute inset-0">
        <Parallax className="absolute inset-x-0 -top-[15%] -left-[50%] md:left-0 md:-right-[10%] h-[150%]" speed={0.18}>
          <Image
            src={images.hero}
            alt="Joe Abass Bangura"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/75 to-transparent" />
      </div>

      <Container className="relative z-10 pb-20 pt-40 md:pb-28">
        <FadeIn>
          <p className="text-base text-green-400 tracking-[0.22em] text-forest-light">
            Entrepreneur, executive, mentor and...
          </p>
          <h1 className="h-display mt-6 max-w-2xl text-5xl uppercase leading-[1.03] md:text-7xl">
            Africa's <span className="text-forest-light">biggest believer.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-stone-300">
            I'm a living proof. Where you start doesn't decide where you finish.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ---------------- Logo strip ---------------- */
export function LogoStrip() {
  return (
    <section className="border-y border-stone-100 bg-stone-25 py-9">
      <Container>
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-400">
          Trusted across
        </p>
      </Container>
      <Marquee>
        {logos.map((l) => (
          <span key={l} className="mx-8 shrink-0 font-display text-2xl text-stone-300">
            {l}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- Audience segments ---------------- */
export function AudienceSegments() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="h-display text-4xl uppercase leading-[1.05] text-stone-25 md:text-5xl lg:text-6xl">
            For the hungry ones...
          </h2>
          <p className="mt-3 text-lg font-medium text-forest-light md:text-xl">
            ...who know they&apos;re meant for more.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audienceSegments.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.06}>
              <Link
                href={a.href}
                {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl p-6"
              >
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/2 bg-cover" />

                {/*
                  <span className="relative shrink-0 z-10 mb-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-forest-light backdrop-blur-sm">
                    <ArrowDownRight size={16} />
                  </span>
                */}


                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold leading-tight text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">{a.body}</p>
                  <span className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-ink transition-colors group-hover:bg-forest-light">
                    {a.cta ?? "Learn more"}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- About preview ---------------- */
export function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <RevealImage className="aspect-[4/5] w-full">
            <Image
              src={images.about}
              alt="Joe Abass Bangura in conversation"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </RevealImage>
        </FadeIn>
        <FadeIn delay={0.1}>
          {/*<p className="eyebrow">His story</p>*/}
          <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            EVERYONE ELSE MOVED ON.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-stone-500">
            <p>
              I stayed behind.

              They went to university.

              I sold palm oil.

              I avoided old classmates because I didn't want them to ask what happened.

              For a while, I believed failure was my identity.

              It wasn't.


            </p>
            <p>
              I made a decision that year.

              I decided to bet on myself.

              I studied harder than I'd ever studied. I sat the exams again. I passed.

              Earned a scholarship. Study in an unimaginable country, America.

              Build organizations from scratch, including one of Sierra Leone's first business accelerator.

              Shared my journey through Life by Design.
            </p>
            <p>
              Today I don't tell my story because it's extraordinary.

              I tell it because someone reading this may be where I once was.

              And I want you to know:

              Your next decision matters more than your last mistake.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-forest"
          >
            Read the full story <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ---------------- Metrics ---------------- */
export function Metrics() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="Why listen" title="The record speaks first." />
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.06}>
              <p className="h-display text-5xl text-ink md:text-6xl">
                <Counter value={m.value} suffix={m.suffix} display={m.display} />
              </p>
              <p className="mt-3 text-base text-stone-500">{m.label}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
export function Timeline() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="The journey"
          title="Five chapters, one thread."
          lede="Every chapter of Joe's journey points the same direction: build things that outlast you."
        />
        <TimelineTrack items={timeline} />
      </Container>
    </section>
  );
}

/* ---------------- Expertise ---------------- */
export function Expertise() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="Areas of expertise" title="Ideas worth building on." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => {
            const Icon = icons[e.icon as keyof typeof icons];
            return (
              <FadeIn key={e.title} delay={i * 0.04}>
                <div className="card card-interactive h-full p-8">
                  <Icon size={22} className="text-forest" strokeWidth={1.75} />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-500">{e.body}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Podcast ---------------- */
export function PodcastSection() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <FadeIn>
          <p className="eyebrow">The JAB Podcast</p>
          <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Conversations that build.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-500">
            Every episode, Joe sits down with the entrepreneurs, executives and change-makers
            shaping Africa&apos;s future — and asks the questions that matter.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={site.youtube} external>
              <Play size={16} /> Watch on YouTube
            </Button>
            {/*<Button href="/podcast" variant="secondary">
              Browse episodes
            </Button>*/}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video overflow-hidden rounded-2xl bg-stone-200"
            aria-label="Watch the featured JAB Podcast episode on YouTube"
          >
            <Image
              src={images.podcast}
              alt="The JAB Podcast — featured episode"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/30 transition-colors duration-300 group-hover:bg-ink/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 group-hover:scale-110">
                <Play size={22} className="ml-0.5" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                Featured episode
              </span>
            </div>
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="In their words" title="People Joe has backed." />
        <div className="grid gap-20 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.07}>
              <figure className="card flex h-[450px] flex-col">
                <div className="w-full h-[250px] relative overflow-hidden rounded-t-2xl">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover object-top  w-full" />
                </div>
                <blockquote className="text-[17px] leading-relaxed text-ink p-8 pb-0 pt-5 ">
                  <span aria-hidden className="font-display text-3xl leading-none text-forest">
                    &ldquo;
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 px-8 pb-8 pt-0">

                  <span>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section >
  );
}

/* ---------------- Speaking preview ---------------- */
export function SpeakingPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <FadeIn>
          <p className="eyebrow">Speaking</p>
          <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl">
            Invite Joe to your stage.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-500">
            Keynotes, panels and executive sessions for organisations serious about leadership and
            growth in Africa.
          </p>
          <ul className="mt-8 grid gap-2.5">
            {speakingTopics.slice(0, 4).map((t) => (
              <li key={t.title} className="flex items-center gap-2.5 text-sm text-stone-500">
                <span className="h-1 w-1 shrink-0 rounded-full bg-forest" />
                {t.title}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/speaking">Request Joe to speak</Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <RevealImage className="aspect-[4/5] w-full md:aspect-[4/5]">
            <Image
              src={images.speaking}
              alt="Joe Abass Bangura speaking on stage"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </RevealImage>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ---------------- Companies ---------------- */
export function Companies() {
  return (
    <section className="border-y border-stone-100 bg-stone-50 py-24 md:py-32">
      <Container>
        <SectionHeader eyebrow="The portfolio" title="Where the work happens." />
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-stretch">
          <FadeIn>
            <RevealImage className="h-full min-h-[280px] w-full">
              <Image
                src={images.companies}
                alt="Africell and SierraTel offices"
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {companies.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.06}>
                <div className="card h-full p-8">
                  <p className="eyebrow">{c.role}</p>
                  <h3 className="h-display mt-3 text-2xl">{c.name}</h3>
                  <p className="mt-3 leading-relaxed text-stone-500">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Newsletter CTA ---------------- */
export function NewsletterCTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-stone-25 md:px-16 md:py-20">
            <div className="absolute inset-0 opacity-[0.14]">
              <Image
                src={images.mentorship}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-light">
                  The weekly letter
                </p>
                <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl">
                  Lessons from the arena.
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-400">
                  Weekly insights on leadership, business, entrepreneurship, and Africa — written
                  for people doing the work. Read in under five minutes.
                </p>
              </div>
              <NewsletterForm dark />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
