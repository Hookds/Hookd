import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

const linkHover =
  "text-hookd-body underline-offset-[5px] decoration-hookd-rose-strong/35 transition hover:text-hookd-navy hover:decoration-hookd-rose-strong/60";

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden border-t border-hookd-border bg-gradient-to-b from-hookd-muted/45 via-hookd-bg to-hookd-bg">
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-hookd-icon-bg blur-3xl opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-44 w-44 rounded-full bg-hookd-navy/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:flex-row sm:items-start sm:justify-between sm:gap-16 sm:px-6 lg:py-14">
        <div className="relative max-w-sm">
          <div className="flex items-center gap-3">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-hookd-rose-strong via-hookd-rose to-transparent sm:w-12"
              aria-hidden
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-hookd-rose-strong">
              Hookd
            </span>
          </div>

          <Link
            href="/"
            className="group/wordmark mt-4 inline-flex flex-col gap-1 rounded-lg outline-none ring-hookd-rose-strong/30 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-hookd-bg"
          >
            <span className="font-serif text-[1.85rem] font-bold leading-none tracking-[0.14em] text-hookd-navy transition-colors duration-300 group-hover/wordmark:text-hookd-rose-strong sm:text-[2rem]">
              HOOKD
            </span>
            <span className="h-0.5 w-0 rounded-full bg-gradient-to-r from-hookd-rose-strong to-hookd-rose transition-all duration-300 group-hover/wordmark:w-full" aria-hidden />
          </Link>

          <p className="mt-5 font-sans text-sm font-semibold italic leading-snug text-hookd-rose-strong">
            Psychology that earns attention without the theatrics.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-hookd-body">
            Paid ads, daily content systems, and closers who chase inbound before it goes cold.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-14 gap-y-10 text-sm sm:pt-1">
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-hookd-navy/55">
              Services
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/paid-ads" className={`font-medium ${linkHover}`}>
                  Paid Ads
                </Link>
              </li>
              <li>
                <Link href="/services/content-creation" className={`font-medium ${linkHover}`}>
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services/hookd-closers" className={`font-medium ${linkHover}`}>
                  Hookd Closers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-hookd-navy/55">
              Explore
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/hookd-ai" className={`font-medium ${linkHover}`}>
                  Hookd AI
                </Link>
              </li>
              <li>
                <Link href="/skeptical" className={`font-medium ${linkHover}`}>
                  I&apos;m Skeptical
                </Link>
              </li>
              <li>
                <a href={BOOKING_URL} className={`font-semibold ${linkHover}`}>
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-hookd-border bg-hookd-muted/25 py-6 backdrop-blur-[2px]">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.22em] text-hookd-body">
          © {new Date().getFullYear()} Hookd · Psychology-forward growth studio
        </p>
      </div>
    </footer>
  );
}
