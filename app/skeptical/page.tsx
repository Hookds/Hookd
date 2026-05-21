import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "I'm Skeptical",
  description: "Book a confrontation-friendly call: we'll dismantle fluff with receipts.",
};

export default function SkepticalPage() {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-2xl flex-col justify-center px-4 py-20 text-hookd-body sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-hookd-navy/55">
        Skeptics welcome
      </p>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-hookd-navy sm:text-[2.75rem]">
        Scrutiny is our favourite channel.
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        Challenge the playbook, dissect case studies, and pressure-test KPI math before anything
        is signed, principals jump on these calls intentionally.
      </p>
      <a
        href={BOOKING_URL}
        className="mt-10 inline-flex rounded-full bg-hookd-muted px-10 py-4 text-[11px] font-bold uppercase tracking-[0.35em] text-hookd-navy ring-2 ring-hookd-navy transition hover:bg-hookd-navy hover:text-white"
      >
        Put Hookd on trial →
      </a>
      <Link
        href="/"
        className="mt-10 text-sm font-semibold text-hookd-navy underline decoration-hookd-rose-strong/45 underline-offset-4 hover:text-hookd-rose-strong"
      >
        ← Back home
      </Link>
    </main>
  );
}
