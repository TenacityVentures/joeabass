import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "./ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speaking invitations, partnerships, media and general enquiries for Joe Abass Bangura.",
};

const reasons = [
  { title: "Speaking", body: "Keynotes, panels and executive sessions." },
  { title: "Partnerships", body: "Ventures, boards and collaborations." },
  { title: "Media", body: "Interviews, press and the JAB Podcast." },
  { title: "General", body: "Everything else — say hello." },
];

export default function ContactPage() {
  return (
    <section className="py-20 mt-10 md:py-28">
      <Container className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="eyebrow">Get in touch</p>
          <h1 className="h-display mt-5 text-5xl leading-[1.04] md:text-6xl">
            Let&apos;s build <span className="text-forest">something.</span>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-stone-500">
            One message is all it takes. Every enquiry is read.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="card p-5">
                <p className="font-semibold">{r.title}</p>
                <p className="mt-1 text-sm text-stone-500">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-stone-500">
            Prefer email?{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-ink underline decoration-forest underline-offset-4 hover:text-forest">
              {site.email}
            </a>
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </Container>
    </section>
  );
}
