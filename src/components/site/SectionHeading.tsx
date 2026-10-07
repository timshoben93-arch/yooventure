import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "split";
  size?: "default" | "page";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  size = "default",
}: SectionHeadingProps) => {
  const page = size === "page";
  return (
    <div className={cn(!page && align === "split" && "grid gap-6 lg:grid-cols-2 lg:items-end", className)}>
      <div className={cn(!page && "max-w-3xl")}>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        <h2
          className={cn(
            "mt-4 font-display font-semibold tracking-tight text-foreground",
            page
              ? "text-[clamp(0.85rem,5.9cqw,3.75rem)] leading-[1.05]"
              : "text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.12]",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className={cn("max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", page ? "mt-5" : align === "split" && "lg:justify-self-end")}>
          {description}
        </p>
      ) : null}
    </div>
  );
};
