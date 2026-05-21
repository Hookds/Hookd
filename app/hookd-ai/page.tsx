import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hookd AI",
  description:
    "Conversational product surface that pairs with audits, strategy chat, or internal tooling.",
};

export default function HookdAiPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-hookd-body sm:px-6 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
        Hookd AI
      </p>
      <h1 className="mt-6 font-serif text-[2rem] font-semibold text-hookd-navy sm:text-[2.5rem]">
        Strategy copilot lane
      </h1>
      <p className="mt-6 text-base leading-relaxed">
        Homepage already nudges explorers here whenever they crave guidance before booking. Drop in
        the widget, streamed agent, authenticated workspace, whichever experience your product lane
        needs.
      </p>
      <div className="mt-12 rounded-[1.75rem] border border-hookd-border bg-hookd-muted p-8 text-sm leading-relaxed shadow-[var(--shadow-hookd-soft)]">
        <p>
          Shortcut: Vercel AI SDK + deterministic tools wired to auditing context, CRM lookups, or HubSpot routers, Ops picks the choke points.
        </p>
      </div>
      <Link
        href="/#audit"
        className="mt-10 inline-flex text-sm font-semibold text-hookd-navy underline decoration-hookd-rose-strong/45 underline-offset-4 hover:text-hookd-rose-strong"
      >
        Skip to Audit Tool ↓
      </Link>
      <div className="mt-12">
        <a
          href={BOOKING_URL}
          className="inline-flex rounded-full border border-hookd-border bg-hookd-bg px-8 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-navy shadow-[var(--shadow-hookd-soft)] transition hover:bg-hookd-muted"
        >
          Prefer humans? Book a call
        </a>
      </div>
    </main>
  );
}
