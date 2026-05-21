import type { Metadata } from "next";
import Link from "next/link";
import { BrandBookingLink } from "@/components/BrandCta";
import {
  ServiceBackLink,
  ServiceClosingBand,
  ServiceHero,
  ServiceHoverCards,
  ServiceInsetPanel,
  ServiceMain,
  ServicePricingCards,
} from "@/components/ServiceMarketing";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paid Ads",
  description:
    "Low-budget, psychology-forward Meta & Google creatives that punch above massive agency retainers.",
};

export default function PaidAdsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Service · Paid Ads"
        title={
          <>
            You don&apos;t need a $50,000 ad budget.{" "}
            <span className="font-sans font-semibold italic text-hookd-rose-strong">
              You need better creative.
            </span>
          </>
        }
      >
        <p className="mt-6 text-lg leading-relaxed text-hookd-body sm:text-xl">
          Hookd specializes in low-budget ads that generate major leads, because when the psychology
          is right the money doesn&apos;t need to be.
        </p>
        <p className="mt-6 max-w-2xl border-l-2 border-hookd-rose-strong/35 pl-5 font-semibold text-hookd-navy">
          Helping small and local businesses compete with brands spending 100× more, and winning.
        </p>
        <div className="mt-10 space-y-4">
          <BrandBookingLink wide className="sm:w-auto">
            Make me money
          </BrandBookingLink>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-hookd-rose-strong">
            Free call · No contracts · Just results.
          </p>
          <p className="text-sm text-hookd-body">
            Wire{" "}
            <span className="rounded-md bg-hookd-muted px-1.5 py-0.5 font-mono text-[0.8125rem] text-hookd-navy ring-1 ring-hookd-border">
              {BOOKING_URL}
            </span>{" "}
            to your live calendar whenever Ops is ready.
          </p>
        </div>
      </ServiceHero>

      <ServiceMain>
        <ServiceInsetPanel eyebrow="Reality check" title="Here's what big agencies won't tell you.">
          <ul className="space-y-4">
            <li>Majors prioritize $50k+ budgets, everyone else inherits junior templated creatives.</li>
            <li>Boosting clicks without psychology still loses, CPC doesn&apos;t fix broken hooks.</li>
            <li>
              Outspending only matters until pattern-aware creative reframes perception, then budget
              stops being the bottleneck.
            </li>
          </ul>
        </ServiceInsetPanel>

        <ServiceHoverCards
          intro={
            <div className="mb-10 flex max-w-3xl flex-col gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-10 shrink-0 bg-gradient-to-r from-hookd-rose-strong/70 to-transparent sm:w-14"
                  aria-hidden
                />
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
                  Pillars
                </p>
              </div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-hookd-navy sm:text-[2.25rem]">
                Psychology-led paid media, engineered like our homepage bets.
              </h2>
            </div>
          }
          items={[
            {
              title: "Creative carries the funnel",
              body: "Hooks and framing do the heavy lifting before bidding wars steal margin.",
            },
            {
              title: "Built for real SMB math",
              body: "Spend ladders that survive messy CRM reality, not slide decks for pitch rooms.",
            },
            {
              title: "Reporting you can act on",
              body: "Plain-language cadence so swaps ship faster than quarterly agency theater.",
            },
          ]}
        />

        <ServicePricingCards
          eyebrow="Pricing"
          title="Real results without $50k spend"
          tiers={[
            {
              name: "Starter",
              price: "$699",
              detail: "Strategy cadence + psychology-led creatives and targeting fundamentals.",
            },
            {
              name: "Growth ⭐",
              price: "$1,200",
              detail: "More iterative swaps + tighter creative QA against wasted impressions.",
              featured: true,
            },
            {
              name: "Scale",
              price: "$1,999",
              detail: "Volume-friendly rhythms + deeper reporting loops as spend climbs.",
            },
          ]}
        />

        <p className="text-center text-xs text-hookd-body/85">
          Long-form FAQs + stat bars mirror your briefing doc when you migrate copy.{" "}
          <Link
            className="font-semibold text-hookd-rose-strong underline decoration-hookd-rose-strong/35 underline-offset-4 hover:text-hookd-navy"
            href="/"
          >
            Back home
          </Link>
        </p>
      </ServiceMain>

      <ServiceClosingBand
        eyebrow="Closing argument"
        title="Ready to punch above brands spending 100× more?"
        subtitle="Free diagnostic call · no phantom contracts · psychology-forward creative."
      />

      <ServiceBackLink />
    </>
  );
}
