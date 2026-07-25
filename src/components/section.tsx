import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section className={`container-x py-20 sm:py-24 ${className}`}>
      {(eyebrow || title || description) && (
        <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>}
          {description && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
