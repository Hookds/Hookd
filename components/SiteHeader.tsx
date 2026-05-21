"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

const services = [
  { href: "/services/paid-ads", label: "Paid Ads" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/hookd-closers", label: "Hookd Closers" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onPointerDown(ev: MouseEvent) {
      if (!panelRef.current?.contains(ev.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-hookd-border bg-hookd-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-hookd-navy">
          HOOKD
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-hookd-body hover:text-hookd-navy">
            Home
          </Link>

          <div className="relative" ref={panelRef}>
            <button
              type="button"
              aria-expanded={menuOpen}
              className="inline-flex items-center gap-1 text-sm font-medium text-hookd-body hover:text-hookd-navy"
              onClick={() => setMenuOpen((o) => !o)}
            >
              Services
              <span aria-hidden className="text-[10px] text-hookd-rose">
                ▾
              </span>
            </button>

            {menuOpen ? (
              <div className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-hookd-border bg-hookd-bg py-2 shadow-[var(--shadow-hookd-card)]">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-hookd-navy hover:bg-hookd-muted"
                    onClick={() => setMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/hookd-ai"
            className="text-sm font-medium text-hookd-body hover:text-hookd-navy"
          >
            Hookd AI
          </Link>

          <Link
            href="/skeptical"
            className="rounded-full border border-hookd-navy px-4 py-2 text-xs font-semibold uppercase tracking-wide text-hookd-navy hover:bg-hookd-muted"
          >
            I&apos;m Skeptical
          </Link>

          <a
            href={BOOKING_URL}
            className="rounded-full bg-hookd-rose px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_8px_24px_-6px_rgba(217,137,156,0.5)] hover:brightness-[0.95]"
          >
            Book a call
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BOOKING_URL}
            className="rounded-full bg-hookd-rose px-4 py-2 text-[11px] font-bold uppercase text-white"
          >
            Book
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <details open={open} onToggle={(e) => setOpen(e.currentTarget.open)} className="relative">
      <summary className="list-none cursor-pointer rounded-full border border-hookd-border bg-hookd-muted px-3 py-1.5 text-xs font-semibold uppercase text-hookd-navy">
        Menu
      </summary>
      <div className="absolute right-0 top-full z-50 mt-2 w-[min(90vw,16rem)] space-y-1 rounded-xl border border-hookd-border bg-hookd-bg p-3 shadow-[var(--shadow-hookd-card)]">
        <Link
          href="/"
          className="block rounded-lg px-2 py-2 text-sm text-hookd-navy hover:bg-hookd-muted"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block rounded-lg px-2 py-2 text-sm text-hookd-navy hover:bg-hookd-muted"
            onClick={() => setOpen(false)}
          >
            {s.label}
          </Link>
        ))}
        <Link
          href="/hookd-ai"
          className="block rounded-lg px-2 py-2 text-sm text-hookd-navy hover:bg-hookd-muted"
          onClick={() => setOpen(false)}
        >
          Hookd AI
        </Link>
        <Link
          href="/skeptical"
          className="block rounded-lg px-2 py-2 text-sm text-hookd-navy hover:bg-hookd-muted"
          onClick={() => setOpen(false)}
        >
          I&apos;m Skeptical
        </Link>
      </div>
    </details>
  );
}
