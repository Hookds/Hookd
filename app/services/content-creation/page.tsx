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
  title: "Content Creation",
  description:
    "Daily short-form engineered for retention: hooks, scripting, shoots, edits, uploads.",
};

export default function ContentCreationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · Content Creation"
        title={
          <>
            Your competitors are posting.{" "}
            <span className="font-sans font-semibold italic text-hookd-rose-strong">
              You&apos;re being forgotten.
            </span>
          </>
        }
      >
        <p className="mt-6 text-lg leading-relaxed text-hookd-body sm:text-xl">
          We&apos;d feel bad for them if they weren&apos;t stealing your customers.
        </p>
        <div className="mt-10 space-y-4">
          <BrandBookingLink wide className="sm:w-auto">
            Make me money
          </BrandBookingLink>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-hookd-rose-strong">
            Aim this button at GoHighLevel (or whichever calendar stack you swear by).
          </p>
        </div>
      </ServiceHero>

      <ServiceMain>
        <ServiceInsetPanel eyebrow="How we ship" title="We engineer the first three seconds.">
          <p>
            Humans bounce or stay in microseconds. Hooks yank thumbs out of autopilot, layered proof
            keeps watch time sticky, and CTAs compound instead of plead, mirrored from your deeper
            scripting packet.
          </p>
        </ServiceInsetPanel>

        <ServicePricingCards
          eyebrow="Plans"
          title="Cadence at a glance"
          tiers={[
            {
              name: "Starter",
              price: "$1,000/mo",
              detail: "16 videos · scripting through upload tailored to your lane.",
            },
            {
              name: "Growth ⭐",
              price: "$1,500/mo",
              detail: "20 videos · faster iteration loops against retention leaks.",
              featured: true,
            },
            {
              name: "Scale",
              price: "$1,999/mo",
              detail: "30 videos · daily tempo when feeds punish inconsistency.",
            },
          ]}
        />
      </ServiceMain>

      <ServiceClosingBand
        eyebrow="Pattern interrupts"
        title="Turn scroll autopilot into engineered curiosity."
        subtitle="Hooks, scripting, uploads, aligned with how your homepage story sells."
      />

      <ServiceBackLink />
    </>
  );
}
