import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  tone?: "light" | "dark";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", tone = "light", className, external }: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
    variant === "primary" && tone === "light" && "bg-ink text-stone-25 hover:bg-forest",
    variant === "primary" && tone === "dark" && "bg-white text-ink hover:bg-forest hover:text-white",
    variant === "secondary" && tone === "light" && "border border-stone-200 text-ink hover:border-ink",
    variant === "secondary" && tone === "dark" && "border border-white/30 text-white hover:border-white hover:bg-white/10",
    className
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
