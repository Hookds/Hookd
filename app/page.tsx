import Link from "next/link";
import { AuditToolSection } from "@/components/AuditToolSection";
import { BrainGraphic } from "@/components/BrainGraphic";
import { BrandBookingLink } from "@/components/BrandCta";
import { IconCloser, IconContent, IconPulse } from "@/components/ServiceIcons";

const logoStrip = [
  "Chicago Home Heroes",
  "North Side HVAC",
  "Realtors United",
  "Vasco's Kitchen",
];

/** Full passes of `logoStrip` per half of the marquee track (mirrored for seamless loop). */
const TRUSTED_BY_STRIP_CYCLES = 12;
const trustedByHalfStrip = Array.from({ length: TRUSTED_BY_STRIP_CYCLES }, () => logoStrip).flat();

const caseSpotlights = [
  {
    align: "left" as const,
    tag: "Organic · hospitality",
    brandName: "Vasco's Restaurant",
    brandSubtitle: "9 million organic views",
    lines: [
      "Legendary plates were invisible past the neighborhood scroll until hooks led with craving, not coupons.",
      "Short-form ladders rewrote saves into compound reach: nine million organic views without buying oxygen.",
      "Proof lives in the queue outside now: curiosity engineered to fork toward reservations, not one-hit vanity.",
    ],
  },
  {
    align: "right" as const,
    tag: "Paid media · positioning",
    brandName: "Ivygro",
    brandSubtitle: "Sharper funnel, same media budget",
    lines: [
      "Premium positioning drowned in sameness until proof-led clips and tighter headline symmetry stopped cold exits.",
      "Paid paths were rebuilt around hesitation-aware sequencing; fewer clicks thrown away after the first frame.",
      "Pipeline climbed double digits in ninety days because psychology showed up between click and calendar.",
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hookd-border bg-hookd-bg">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[min(440px,50vw)] w-[min(440px,50vw)] rounded-full bg-hookd-icon-bg blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:gap-14 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
              Homepage
            </p>
            <h1 className="mt-5 font-serif text-[2.125rem] font-semibold leading-[1.18] tracking-tight text-hookd-navy sm:text-[2.75rem] lg:text-[3.125rem]">
              “The human brain is{" "}
              <span className="font-sans font-semibold italic text-hookd-rose-strong">
                embarrassingly easy to manipulate.”
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-hookd-body">
              We made you come to this site, didn&apos;t we? Let&apos;s point that psychology at
              leads that actually cash out, not vibes.
            </p>
            <div className="mt-10">
              <BrandBookingLink wide>Make me money</BrandBookingLink>
              <p className="mt-4 text-xs text-hookd-body/80">
                Set your calendar URL in <span className="font-mono">lib/constants.ts</span>.
              </p>
            </div>
          </div>
          <BrainGraphic />
        </div>
      </section>

      {/* Social proof: bold marquee (static grid when reduced motion) */}
      <section className="border-b border-hookd-border bg-gradient-to-b from-hookd-muted/35 via-hookd-bg to-hookd-bg pb-12 pt-12 sm:pb-14 sm:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-hookd-rose-strong/80 to-transparent sm:w-14"
              aria-hidden
            />
            <p className="text-[11px] font-extrabold uppercase tracking-[0.42em] text-hookd-navy">
              Trusted by
            </p>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden motion-reduce:hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-hookd-bg via-hookd-bg to-transparent sm:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-hookd-bg via-hookd-bg to-transparent sm:w-24"
            aria-hidden
          />
          <div className="hookd-logo-marquee-track motion-safe:hover:[animation-play-state:paused]">
            {[...trustedByHalfStrip, ...trustedByHalfStrip].map((brand, i) => (
              <span
                key={`trusted-marquee-${i}`}
                className="shrink-0 whitespace-nowrap px-4 py-2 text-center font-sans text-base font-black uppercase tracking-[0.14em] text-hookd-navy sm:px-8 sm:text-lg sm:tracking-[0.16em] lg:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 hidden flex-wrap justify-center gap-x-10 gap-y-4 px-4 motion-reduce:flex sm:gap-x-14 sm:px-6">
          {logoStrip.map((brand) => (
            <span
              key={brand}
              className="text-center font-sans text-base font-black uppercase tracking-[0.14em] text-hookd-navy sm:text-lg sm:tracking-[0.16em] lg:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Services: matches brand reference */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex max-w-3xl flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-gradient-to-r from-hookd-rose-strong/70 to-transparent sm:w-14" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
              What we do
            </p>
          </div>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-hookd-navy sm:text-[2.5rem] sm:leading-snug lg:text-[2.75rem]">
            Three ways to make your customer&apos;s brain{" "}
            <span className="font-sans text-[1.05em] font-semibold italic text-hookd-rose-strong">
              say yes.
            </span>
          </h2>
          <p className="max-w-2xl border-l-2 border-hookd-rose-strong/35 pl-5 text-base leading-relaxed text-hookd-body">
            We don&apos;t guess. We apply psychology to everything we touch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <Link
            href="/services/content-creation"
            className="group/card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-hookd-border bg-hookd-muted p-8 shadow-[var(--shadow-hookd-soft)] transition-[transform,box-shadow,border-color,ring-width] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-2 motion-safe:hover:border-hookd-rose-strong/45 motion-safe:hover:shadow-[0_26px_56px_-14px_rgba(15,23,42,0.22)] motion-safe:hover:ring-2 motion-safe:hover:ring-hookd-rose-strong/35 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0"
          >
            <div className="transition-transform duration-300 motion-safe:group-hover/card:-translate-y-1">
              <IconContent />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-hookd-navy">
              Content Creation
            </h3>
            <p className="mt-4 font-sans text-base font-semibold italic leading-snug text-hookd-rose-strong">
              &ldquo;Pattern interrupts aren&apos;t a trend; they&apos;re the law.&rdquo;
            </p>
            <p className="mt-6 flex-1 text-base leading-relaxed text-hookd-body">
              Full scripting through upload, hooks engineered for second zero so the algorithm and
              the amygdala both lean in.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hookd-navy transition-colors duration-300 group-hover/card:text-hookd-rose-strong">
              Explore
              <span aria-hidden className="transition-transform duration-300 ease-out group-hover/card:translate-x-1">
                →
              </span>
            </span>
          </Link>

          {/* Featured Paid Ads: full-card link so hover matches side cards */}
          <Link
            href="/services/paid-ads"
            className="group/card relative flex h-full flex-col rounded-[1.75rem] bg-hookd-navy p-8 text-hookd-bg shadow-[var(--shadow-hookd-card)] ring-2 ring-hookd-navy/25 transition-[transform,box-shadow,ring-color] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_32px_64px_-12px_rgba(15,23,42,0.55)] motion-safe:hover:ring-hookd-rose/55 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0"
          >
            <div className="transition-transform duration-300 motion-safe:group-hover/card:-translate-y-1">
              <IconPulse />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold">Paid Ads</h3>
            <p className="mt-4 font-sans text-base font-semibold italic leading-snug text-hookd-rose-on-dark">
              &ldquo;Small budget. Big-category flex.&rdquo;
            </p>
            <p className="mt-6 flex-1 text-base leading-relaxed text-white/92">
              Meta + Google setups where creative carries the funnel, engineered for local and
              home-service buyers who ghost generic agencies.
            </p>
            <span className="mt-8 inline-flex w-fit rounded-full border border-hookd-bg px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-bg transition-all duration-300 group-hover/card:bg-hookd-bg/18 group-hover/card:shadow-[0_10px_28px_-6px_rgba(248,249,250,0.35)]">
              Learn more
            </span>
          </Link>

          <Link
            href="/services/hookd-closers"
            className="group/card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-hookd-border bg-hookd-muted p-8 shadow-[var(--shadow-hookd-soft)] transition-[transform,box-shadow,border-color,ring-width] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-2 motion-safe:hover:border-hookd-rose-strong/45 motion-safe:hover:shadow-[0_26px_56px_-14px_rgba(15,23,42,0.22)] motion-safe:hover:ring-2 motion-safe:hover:ring-hookd-rose-strong/35 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0"
          >
            <div className="transition-transform duration-300 motion-safe:group-hover/card:-translate-y-1">
              <IconCloser />
            </div>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-hookd-navy">
              Hookd Closers
            </h3>
            <p className="mt-4 font-sans text-base font-semibold italic leading-snug text-hookd-rose-strong">
              &ldquo;Your leads cool off in five minutes. We stop that.&rdquo;
            </p>
            <p className="mt-6 flex-1 text-base leading-relaxed text-hookd-body">
              Dedicated outbound pros + optional CRM choreography so speed-to-contact becomes a moat, not chaos.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-hookd-navy transition-colors duration-300 group-hover/card:text-hookd-rose-strong">
              Explore
              <span aria-hidden className="transition-transform duration-300 ease-out group-hover/card:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>

        {/* Hookd AI: light banner + rose rail (distinct from navy Audit workspace) */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-hookd-border bg-gradient-to-br from-hookd-bg via-hookd-muted/40 to-hookd-bg shadow-[var(--shadow-hookd-soft)] ring-1 ring-hookd-border/80">
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-hookd-icon-bg blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col sm:flex-row">
            <div
              className="h-1 w-full shrink-0 bg-gradient-to-r from-hookd-rose-strong via-hookd-rose to-hookd-rose-strong sm:h-auto sm:w-2 sm:bg-gradient-to-b sm:from-hookd-rose-strong sm:via-hookd-rose sm:to-hookd-rose-strong sm:self-stretch sm:min-h-[140px]"
              aria-hidden
            />
            <div className="relative flex flex-1 flex-col gap-8 px-6 py-9 md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-11">
              <div className="max-w-xl space-y-3 md:text-left">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-hookd-muted ring-1 ring-hookd-border"
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-5 text-hookd-rose-strong"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.75}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.666 15.916 3 13.854 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                      />
                    </svg>
                  </span>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-hookd-navy">
                    Hookd AI
                  </p>
                </div>
                <p className="font-serif text-xl font-bold leading-snug tracking-tight text-hookd-navy sm:text-[1.625rem] sm:leading-[1.2] lg:text-[1.875rem]">
                  Not sure what your business needs?{" "}
                  <span className="text-hookd-rose-strong">Ask Hookd AI.</span>
                </p>
                <p className="text-sm leading-relaxed text-hookd-body sm:text-[0.9375rem]">
                  Quick steer on paid vs content vs closers; then jump into audits or booking when
                  you&apos;re ready.
                </p>
              </div>

              <div className="flex w-full shrink-0 flex-col items-stretch gap-3 sm:max-w-[260px] md:items-end">
                <Link
                  href="/hookd-ai"
                  className="group/exploreai inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-hookd-navy bg-hookd-bg px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-navy transition-all duration-300 hover:bg-hookd-navy hover:text-hookd-bg motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0"
                >
                  Explore Hookd AI
                  <span
                    aria-hidden
                    className="text-lg font-light leading-none transition-transform duration-300 ease-out group-hover/exploreai:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/#audit"
                  className="text-center text-xs font-semibold text-hookd-body underline decoration-hookd-rose-strong/45 underline-offset-[6px] transition hover:text-hookd-navy md:text-right"
                >
                  Prefer a structured audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
        <AuditToolSection />
      </section>

      {/* Case spotlight: staggered cards (left Vasco, right Ivygro) */}
      <section className="relative isolate overflow-hidden border-y border-hookd-border bg-hookd-bg px-4 py-20 sm:px-6 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_0%_20%,rgba(217,137,156,0.11),transparent_52%),radial-gradient(ellipse_80%_45%_at_100%_75%,rgba(15,23,42,0.05),transparent_48%),linear-gradient(180deg,var(--color-hookd-muted)_0%,transparent_38%,transparent_62%,rgba(248,249,250,0.65)_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex max-w-2xl flex-col gap-4 lg:max-w-none">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-hookd-border bg-hookd-bg/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-hookd-rose-strong shadow-[var(--shadow-hookd-soft)] ring-1 ring-hookd-bg backdrop-blur-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hookd-rose-strong shadow-[0_0_12px_rgba(217,137,156,0.9)]" aria-hidden />
                Proof in the wild
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-hookd-navy sm:text-[2.125rem] sm:leading-snug lg:text-[2.375rem]">
              Brands that stopped whispering into busy feeds.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-hookd-body lg:text-lg">
              Two snapshots: organic ignition on the left, paid psychology tightening the funnel on the right.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-14 lg:mt-20 lg:gap-20 xl:gap-24">
            {caseSpotlights.map((cs) => (
              <article
                key={cs.brandName}
                className={`group/case relative overflow-hidden rounded-[2.25rem] border border-hookd-border bg-gradient-to-br from-hookd-bg via-hookd-muted to-hookd-muted p-10 shadow-[var(--shadow-hookd-card)] ring-1 ring-hookd-bg/70 backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-500 ease-out sm:p-12 lg:max-w-[min(100%,48rem)] lg:rounded-[3rem] lg:p-14 xl:p-16 motion-safe:hover:-translate-y-1 motion-safe:hover:border-hookd-rose-strong/25 motion-safe:hover:shadow-[var(--shadow-hookd-case-hover)] motion-reduce:hover:translate-y-0 ${cs.align === "right" ? "border-r-[4px] border-r-hookd-rose-strong/55 lg:ml-auto lg:border-r-[5px]" : "border-l-[4px] border-l-hookd-rose-strong/55 lg:border-l-[5px]"}`}
              >
                <div
                  className={`pointer-events-none absolute top-0 h-36 w-36 rounded-full bg-hookd-icon-bg blur-3xl opacity-70 transition-opacity duration-500 group-hover/case:opacity-100 ${cs.align === "right" ? "right-0 translate-x-1/4 -translate-y-1/4" : "left-0 -translate-x-1/4 -translate-y-1/4"}`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-hookd-navy/45">
                      Case spotlight
                    </p>
                    <span className="rounded-full bg-hookd-icon-bg px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-hookd-rose-strong ring-1 ring-hookd-rose-strong/15">
                      {cs.tag}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(11rem,13.5rem)] lg:items-center lg:gap-12 xl:gap-14">
                    <div className="space-y-5 lg:border-r lg:border-hookd-border/70 lg:pr-10 xl:pr-12">
                      {cs.lines.map((line, idx) => (
                        <p
                          key={idx}
                          className="font-bold leading-snug text-hookd-navy text-[1.0625rem] sm:text-lg lg:text-[1.0625rem] xl:text-lg"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center border-t border-hookd-border/80 pt-8 lg:border-t-0 lg:pt-0">
                      <h3 className="font-serif text-[1.75rem] font-bold leading-[1.15] tracking-tight text-hookd-navy sm:text-[2rem] lg:text-right xl:text-[2.125rem]">
                        {cs.brandName}
                      </h3>
                      <p className="mt-3 font-sans text-sm font-semibold leading-snug text-hookd-rose-strong sm:text-base lg:text-right">
                        {cs.brandSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
          The process
        </p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight text-hookd-navy sm:text-[2.25rem]">
          How engagements run
        </h2>
        <ol className="mt-10 grid gap-6 lg:grid-cols-4">
          {[
            ["01", "Neuro-mapping call", "Decode motivations, timelines, objections early."],
            ["02", "Creative lab", "Pattern interrupts scripted before lenses roll."],
            ["03", "Launch sprint", "Media + ops checks so nothing brittle ships."],
            ["04", "Reporting loop", "Plain-language numbers + iterative creative swaps."],
          ].map(([id, title, body]) => (
            <li
              key={id}
              className="group/process rounded-[1.75rem] border border-hookd-border bg-gradient-to-b from-hookd-bg to-hookd-muted p-6 text-base shadow-[var(--shadow-hookd-soft)] ring-1 ring-hookd-bg transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-2 motion-safe:hover:border-hookd-rose-strong/45 motion-safe:hover:shadow-[0_26px_56px_-14px_rgba(15,23,42,0.22)] motion-safe:hover:ring-2 motion-safe:hover:ring-hookd-rose-strong/35 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-hookd-icon-bg text-[11px] font-bold tracking-[0.12em] text-hookd-rose-strong ring-1 ring-hookd-rose-strong/15 transition-[transform,box-shadow,background-color] duration-300 motion-safe:group-hover/process:-translate-y-1 motion-safe:group-hover/process:bg-hookd-bg motion-safe:group-hover/process:shadow-[0_12px_28px_-10px_rgba(217,137,156,0.45)] motion-safe:group-hover/process:ring-hookd-rose-strong/40 motion-reduce:group-hover/process:translate-y-0">
                {id}
              </span>
              <p className="mt-4 font-serif text-lg font-semibold text-hookd-navy transition-colors duration-300 group-hover/process:text-hookd-rose-strong">
                {title}
              </p>
              <p className="mt-2 leading-relaxed text-hookd-body">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section className="border-y border-hookd-border bg-hookd-bg px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_min(340px)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
              About Hookd
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-hookd-navy sm:text-[2.25rem]">
              Confidence without fluff.
            </h2>
            <p className="mt-10 font-sans text-xl font-semibold italic leading-snug text-hookd-rose-strong lg:text-[1.625rem]">
              &ldquo;We didn&apos;t start in an office. We started at people&apos;s front
              doors.&rdquo;
            </p>
            <p className="mt-4 text-base leading-relaxed text-hookd-body">
              Door hangers returned 2× before we ported behavioral science where content moves
              faster than mail slots. Channels changed; incentives stayed irrational.
            </p>
            <div className="mt-10">
              <BrandBookingLink wide>Make me money</BrandBookingLink>
            </div>
          </div>
          <aside className="rounded-[1.75rem] border border-hookd-border bg-hookd-bg p-8 text-base leading-relaxed text-hookd-body shadow-[var(--shadow-hookd-soft)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-hookd-navy/55">
              Field notes
            </p>
            <ul className="mt-4 space-y-3">
              <li>Home services + Chicagoland real estate stay our bread and butter.</li>
              <li>Organic feeds and paid funnels overlap; excuses about silos don&apos;t survive here.</li>
              <li>We reject &ldquo;spend louder&rdquo; as a strategy when psychology can outperform it.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-hookd-border px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-hookd-rose/18 via-transparent to-hookd-muted" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
            Closing argument
          </p>
          <h2 className="font-serif text-[2rem] leading-tight tracking-tight text-hookd-navy sm:text-[2.875rem] sm:leading-[1.1]">
            Every swipe wages war for attention.<br />Make sure yours wins ethically.
          </h2>
          <p className="max-w-xl text-lg text-hookd-body">
            Free diagnostic call · no phantom contracts · just systems anchored in cognition.
          </p>
          <BrandBookingLink wide>Make me money</BrandBookingLink>
        </div>
      </section>
    </main>
  );
}
