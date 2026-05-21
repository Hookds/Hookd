import type { Metadata } from "next";
import { BrandBookingLink } from "@/components/BrandCta";
import {
  ServiceBackLink,
  ServiceClosingBand,
  ServiceHero,
  ServiceInsetPanel,
  ServiceMain,
  ServicePricingCards,
} from "@/components/ServiceMarketing";

export const metadata: Metadata = {
  title: "Hookd Closers",
  description:
    "Full-time outbound closers, CRM optionally included, built for HVAC, plumbing, contracting, real estate.",
};

export default function HookdClosersPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · Hookd Closers"
        title={
          <>
            You&apos;re generating leads.{" "}
            <span className="font-sans italic text-hookd-rose-strong">You&apos;re not closing them.</span>{" "}
            That&apos;s just expensive charity.
          </>
        }
      >
        <p className="mt-6 text-lg leading-relaxed text-hookd-body sm:text-xl">
          Dedicated sales reps chase every inbound within minutes via call, SMS, and email , 
          locking real appointments onto your calendars.
        </p>
        <p className="mt-6 max-w-2xl border-l-2 border-hookd-rose-strong/35 pl-5 font-semibold text-hookd-navy">
          Trusted narrative for Chicago home-services + Realtor teams, localize further as proofs
          land.
        </p>
        <div className="mt-10 space-y-4">
          <BrandBookingLink wide className="sm:w-auto">
            Help me close
          </BrandBookingLink>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-hookd-rose-strong">
            Free call · No contracts · Just results.
          </p>
        </div>
      </ServiceHero>

      <ServiceMain>
        <ServicePricingCards
          eyebrow="Pricing"
          title="Closer packages"
          tiers={[
            {
              name: "Starter",
              price: "$1,280/mo",
              detail: "1 closer · 40 hrs, speed-to-contact without improvising scripts.",
            },
            {
              name: "Growth ⭐",
              price: "$2,000/mo",
              detail: "2 closers · 40 hrs each, redundancy when leads spike.",
              featured: true,
            },
            {
              name: "Scale",
              price: "$4,500/mo",
              detail: "5 closers · best per-seat ROI when pipeline volume demands coverage.",
            },
          ]}
        />

        <ServiceInsetPanel eyebrow="Operations" title="CRM optionally bundled">
          <p>
            Pipelines, automated follow-ups, and visibility post-lead rarely ship from one screen , 
            Hookd can own that stack when you choose the fuller closer package (wording trims to your
            Ops doc later).
          </p>
        </ServiceInsetPanel>
      </ServiceMain>

      <ServiceClosingBand
        eyebrow="Speed wins"
        title="Turn inbound spikes into booked appointments, before leads cool off."
        subtitle="Psychology-backed outbound rhythms aligned with how Hookd sells everywhere else."
      />

      <ServiceBackLink />
    </>
  );
}
