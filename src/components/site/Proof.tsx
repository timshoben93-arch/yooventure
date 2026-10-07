import { SectionHeading } from "@/components/site/SectionHeading";

const surfaces = [
  ["Identity", "Accreditation, KYC, and allowlists that match the offering documents."],
  ["Custody", "MPC or HSM partners, with operational controls the client chooses."],
  ["Servicing", "Coupons, NAV, and redemptions treated as events the operator can run."],
  ["Counsel", "Transfer rules written so legal review can follow them, before the contracts harden."],
  ["Operations", "Runbooks for launch and the day after, handed to the team that keeps the issuance."],
  ["Scope", "A written sequence of contracts, identity, and custody. An email does not start that work."],
];

export const Proof = () => {
  return (
    <section className="border-b border-border py-20 md:py-28" aria-labelledby="proof-heading">
      <div className="container">
        <SectionHeading
          eyebrow="How an engagement is structured"
          title={<span id="proof-heading">Built for people who already have an asset, a counsel, and a deadline</span>}
          description="These are the surfaces we expect to specify with you. They are not quotations from clients."
        />

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {surfaces.map(([title, body]) => (
            <li key={title} className="bg-card p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
