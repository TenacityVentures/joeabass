import {
  Hero, LogoStrip, AudienceSegments, AboutPreview, Metrics, Timeline, Expertise,
  PodcastSection, Testimonials, SpeakingPreview, Companies, NewsletterCTA,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <AudienceSegments />
      <AboutPreview />
      {/*<Metrics />*/}
      {/*<Timeline />*/}
      {/*<Expertise />*/}
      <PodcastSection />
      <Testimonials />
      <SpeakingPreview />
      <Companies />
      <NewsletterCTA />
    </>
  );
}
