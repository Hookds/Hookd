import Link from "next/link";
import type { ReactNode } from "react";
import { BrandBookingLink } from "@/components/BrandCta";

const hoverCard =
  "group/sc rounded-[1.75rem] border border-hookd-border bg-gradient-to-b from-hookd-bg to-hookd-muted p-6 shadow-[var(--shadow-hookd-soft)] ring-1 ring-hookd-bg transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform motion-safe:hover:-translate-y-2 motion-safe:hover:border-hookd-rose-strong/45 motion-safe:hover:shadow-[0_26px_56px_-14px_rgba(15,23,42,0.22)] motion-safe:hover:ring-2 motion-safe:hover:ring-hookd-rose-strong/35 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0";

export function ServiceHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hookd-border bg-hookd-bg">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[min(440px,50vw)] w-[min(440px,50vw)] rounded-full bg-hookd-icon-bg blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-hookd-rose-strong/70 to-transparent sm:w-14"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-5 font-serif text-[2.125rem] font-semibold leading-[1.18] tracking-tight text-hookd-navy sm:text-[2.75rem] lg:text-[3.125rem]">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}

export function ServiceMain({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6 lg:space-y-20 lg:py-20 ${className}`}
    >
      {children}
    </div>
  );
}

export function ServiceInsetPanel({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-[2.25rem] border border-hookd-border bg-gradient-to-br from-hookd-bg via-hookd-muted to-hookd-muted p-8 shadow-[var(--shadow-hookd-card)] ring-1 ring-hookd-bg/70 sm:p-10 lg:rounded-[3rem] lg:p-12 xl:p-14">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-hookd-icon-bg blur-3xl opacity-70"
        aria-hidden
      />
      <div className="relative">
        {eyebrow ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-hookd-navy/45">{eyebrow}</p>
        ) : null}
        <h2 className={`font-serif text-2xl font-semibold tracking-tight text-hookd-navy sm:text-[1.75rem] ${eyebrow ? "mt-4" : ""}`}>
          {title}
        </h2>
        <div className="mt-6 text-base leading-relaxed text-hookd-body">{children}</div>
      </div>
    </section>
  );
}

export function ServiceHoverCards({
  intro,
  items,
}: {
  intro?: ReactNode;
  items: { title: string; body: string }[];
}) {
  return (
    <section>
      {intro}
      <div className={`grid gap-6 ${items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((item) => (
          <div key={item.title} className={hoverCard}>
            <p className="font-serif text-lg font-semibold text-hookd-navy transition-colors duration-300 group-hover/sc:text-hookd-rose-strong">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-hookd-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicePricingCards({
  eyebrow,
  title,
  tiers,
}: {
  eyebrow?: string;
  title: ReactNode;
  tiers: { name: string; price: string; detail: string; featured?: boolean }[];
}) {
  return (
    <section>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">{eyebrow}</p>
      ) : null}
      <h2 className={`font-serif text-2xl font-semibold tracking-tight text-hookd-navy sm:text-[2.25rem] ${eyebrow ? "mt-2" : ""}`}>
        {title}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-[1.75rem] border bg-hookd-bg p-6 shadow-[var(--shadow-hookd-soft)] ring-1 ring-hookd-bg transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-[0_26px_56px_-14px_rgba(15,23,42,0.22)] motion-safe:hover:ring-2 motion-safe:hover:ring-hookd-rose-strong/35 motion-safe:hover:ring-offset-2 motion-safe:hover:ring-offset-hookd-bg motion-reduce:hover:translate-y-0 ${
              tier.featured
                ? "border-hookd-rose-strong/45 ring-2 ring-hookd-rose-strong/25 md:scale-[1.02]"
                : "border-hookd-border"
            }`}
          >
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.35em] ${tier.featured ? "text-hookd-rose-strong" : "text-hookd-body"}`}
            >
              {tier.name}
            </p>
            <p className="mt-4 font-serif text-2xl font-semibold text-hookd-navy">{tier.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-hookd-body">{tier.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceClosingBand({
  eyebrow = "Next step",
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-t border-hookd-border px-4 py-16 sm:px-6 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-hookd-rose/18 via-transparent to-hookd-muted" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">{eyebrow}</p>
        <h2 className="font-serif text-[1.875rem] leading-tight tracking-tight text-hookd-navy sm:text-[2.25rem]">{title}</h2>
        {subtitle ? <p className="max-w-xl text-lg text-hookd-body">{subtitle}</p> : null}
        <BrandBookingLink wide>Make me money</BrandBookingLink>
      </div>
    </section>
  );
}

export function ServiceBackLink() {
  return (
    <div className="border-t border-hookd-border bg-hookd-bg px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-semibold text-hookd-navy underline decoration-hookd-rose-strong/45 underline-offset-4 transition hover:text-hookd-rose-strong"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
