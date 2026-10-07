import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const CTA = () => {
  return (
    <section className="border-b border-border py-20 md:py-28" aria-labelledby="cta-heading">
      <div className="container">
        <div className="@container border border-border bg-card p-8 md:p-12 lg:p-16">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">Next step</p>
          <h2
            id="cta-heading"
            className="mt-4 whitespace-nowrap font-display text-[clamp(0.75rem,5.5cqw,3rem)] font-semibold leading-none tracking-tight"
          >
            Email the constraint in front of you
          </h2>
          <div className="mt-5 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Send the asset class, the jurisdiction, and what is blocking the issuance. We reply with whether we
              can help and what a first working session would cover. Writing to us does not start an engagement.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button variant="soft" size="lg" asChild>
                <a href={`mailto:${SITE.email}?subject=Issuance inquiry`}>{SITE.email}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
