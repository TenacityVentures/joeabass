import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Editorial image frame. Swap `src` for Joe's real photography via content/site.ts
 * once available — everything else (framing, sizing, radius) stays the same.
 */
export function Portrait({ src, alt, className, priority, sizes = "(min-width: 768px) 50vw, 100vw" }: Props) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-stone-200", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
