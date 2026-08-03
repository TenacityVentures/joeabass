import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, lede, align = "left" }: Props) {
  return (
    <FadeIn className={cn("mb-14 max-w-2xl md:mb-20", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-display mt-4 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{title}</h2>
      {lede && <p className="mt-5 text-lg leading-relaxed text-stone-500">{lede}</p>}
    </FadeIn>
  );
}
