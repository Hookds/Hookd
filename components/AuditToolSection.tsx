"use client";

import { useMemo, useState } from "react";

type Tab = "social" | "creative";

/** Front-end scaffolding; wire AI + persistence on the server later. Email must be collected before showing results per brief. */

function IconLinkTab({ active }: { active: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-hookd-bg" : "text-hookd-rose-strong"}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
}

function IconUploadTab({ active }: { active: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-hookd-bg" : "text-hookd-rose-strong"}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.75}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

export function AuditToolSection() {
  const [tab, setTab] = useState<Tab>("social");
  const [email, setEmail] = useState("");
  const [socialUrl, setSocialUrl] = useState("");
  const [creativeName, setCreativeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    const trimmed = email.trim();
    const hasEmail = /\S+@\S+\.\S+/.test(trimmed);
    if (!hasEmail) return false;
    if (tab === "social") return socialUrl.trim().length >= 8;
    return creativeName.trim().length > 0;
  }, [creativeName, email, socialUrl, tab]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    await new Promise((r) => setTimeout(r, 550));
    setSubmitted(true);
  }

  const bullets = [
    "Paste an organic profile or post URL, or upload ad creative.",
    "AI drafts tailored feedback when backend wiring lands.",
    "Your email unlocks results, required before output ships.",
  ];

  return (
    <section
      id="audit"
      className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-hookd-navy shadow-[0_24px_80px_-28px_rgba(15,23,42,0.65)] lg:rounded-[2rem]"
      aria-labelledby="audit-heading"
    >
      <div
        className="pointer-events-none absolute -left-[18%] -top-[20%] h-[min(420px,90vw)] w-[min(420px,90vw)] rounded-full bg-hookd-rose/18 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-40%] right-[-12%] h-[min(340px,78vw)] w-[min(340px,78vw)] rounded-full bg-hookd-bg/[0.06] blur-[72px]"
        aria-hidden
      />
      <div className="absolute inset-px rounded-[inherit] ring-1 ring-inset ring-white/[0.07]" aria-hidden />

      <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          {/* Intro: light copy on navy (distinct from Hookd AI white banner) */}
          <div className="flex flex-col justify-center lg:max-w-lg">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-hookd-bg">
              Audit tool
            </p>
            <h2
              id="audit-heading"
              className="mt-4 font-serif text-[1.875rem] font-bold leading-[1.15] tracking-tight text-hookd-bg [text-shadow:0_1px_28px_rgba(0,0,0,0.35)] sm:text-[2.25rem] lg:text-[2.5rem]"
            >
              See what&apos;s broken{" "}
              <span className="relative whitespace-nowrap font-semibold text-hookd-rose-on-dark after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-hookd-rose-on-dark/55 after:content-['']">
                before you spend.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-hookd-muted/90 sm:text-[1.0625rem]">
              Drop a social URL or creative, get structured AI feedback once email is verified.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-snug text-hookd-muted/85 sm:text-base">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-hookd-rose-on-dark"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Panel: crisp white workspace card */}
          <div className="rounded-2xl border border-hookd-border bg-hookd-bg p-6 shadow-[0_28px_70px_-24px_rgba(15,23,42,0.35)] ring-1 ring-hookd-navy/[0.04] sm:p-8 lg:rounded-[1.35rem]">
            {submitted ? (
              <div className="flex flex-col gap-5 rounded-xl border border-hookd-border bg-hookd-muted/70 px-5 py-8 text-hookd-body sm:flex-row sm:items-start sm:gap-6 sm:px-8">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-hookd-navy text-hookd-bg shadow-inner"
                  aria-hidden
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-hookd-navy">Audit queued</p>
                  <p className="mt-3 text-sm leading-relaxed sm:text-base">
                    Stub response, plug in{" "}
                    <code className="rounded-md bg-hookd-bg px-1.5 py-0.5 font-mono text-[0.8125rem] text-hookd-navy ring-1 ring-hookd-border">
                      /api/audit
                    </code>
                    , model calls, storage, and email drip here. Email-before-results UX is ready.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-hookd-navy/55">
                  Step 1 · Choose input
                </p>

                <div
                  className="mt-4 grid gap-2 rounded-2xl border border-hookd-border bg-hookd-muted/60 p-1.5 sm:grid-cols-2 sm:gap-1.5"
                  role="tablist"
                  aria-label="Audit input type"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === "social"}
                    onClick={() => {
                      setTab("social");
                      setSubmitted(false);
                      setSocialUrl("");
                    }}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 sm:justify-start sm:py-3 sm:text-[10px] sm:tracking-[0.18em] ${
                      tab === "social"
                        ? "bg-hookd-navy text-hookd-bg shadow-[0_10px_28px_-8px_rgba(15,23,42,0.35)] ring-2 ring-hookd-navy/25"
                        : "bg-transparent text-hookd-body hover:bg-hookd-bg hover:text-hookd-navy"
                    }`}
                  >
                    <IconLinkTab active={tab === "social"} />
                    Social link
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === "creative"}
                    onClick={() => {
                      setTab("creative");
                      setSubmitted(false);
                      setCreativeName("");
                    }}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 sm:justify-start sm:py-3 sm:text-[10px] sm:tracking-[0.18em] ${
                      tab === "creative"
                        ? "bg-hookd-navy text-hookd-bg shadow-[0_10px_28px_-8px_rgba(15,23,42,0.35)] ring-2 ring-hookd-navy/25"
                        : "bg-transparent text-hookd-body hover:bg-hookd-bg hover:text-hookd-navy"
                    }`}
                  >
                    <IconUploadTab active={tab === "creative"} />
                    Upload file
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="flex items-baseline justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-navy/75"
                    >
                      <span>Work email</span>
                      <span className="normal-case tracking-normal text-hookd-rose-strong">
                        Required <span aria-hidden>*</span>
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@business.com"
                      className="w-full rounded-xl border border-hookd-border bg-hookd-muted/40 px-4 py-3.5 text-base text-hookd-navy outline-none transition placeholder:text-hookd-body/45 focus:border-hookd-navy/35 focus:bg-hookd-bg focus:shadow-inner focus:ring-2 focus:ring-hookd-rose-strong/25"
                      required
                    />
                  </div>

                  {tab === "social" ? (
                    <div className="space-y-2">
                      <label
                        htmlFor="url"
                        className="text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-navy/75"
                      >
                        Profile or post URL
                      </label>
                      <input
                        id="url"
                        name="url"
                        type="url"
                        value={socialUrl}
                        onChange={(e) => setSocialUrl(e.target.value)}
                        placeholder="https://instagram.com/your-handle"
                        className="w-full rounded-xl border border-hookd-border bg-hookd-muted/40 px-4 py-3.5 text-base text-hookd-navy outline-none transition placeholder:text-hookd-body/45 focus:border-hookd-navy/35 focus:bg-hookd-bg focus:shadow-inner focus:ring-2 focus:ring-hookd-rose-strong/25"
                        required
                      />
                    </div>
                  ) : (
                    <div className="space-y-3 rounded-xl border border-dashed border-hookd-rose-strong/35 bg-hookd-muted/50 px-4 py-6">
                      <label
                        htmlFor="creative"
                        className="text-[11px] font-bold uppercase tracking-[0.22em] text-hookd-navy/75"
                      >
                        Creative file
                      </label>
                      <input
                        id="creative"
                        name="creative"
                        type="file"
                        accept="image/*,video/*"
                        onChange={(e) => setCreativeName(e.target.files?.[0]?.name ?? "")}
                        className="block w-full cursor-pointer text-sm text-hookd-body file:mr-4 file:cursor-pointer file:rounded-xl file:border-0 file:bg-hookd-navy file:px-5 file:py-2.5 file:text-[11px] file:font-bold file:uppercase file:tracking-wide file:text-hookd-bg hover:file:bg-hookd-navy/90"
                      />
                      <p className="text-xs leading-relaxed text-hookd-body">
                        Backend wiring for Supabase/S3 lands later, picker UX is ready now.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="group/auditcta relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-hookd-navy px-10 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-hookd-bg shadow-[0_14px_36px_-10px_rgba(15,23,42,0.38)] transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-hookd-bg/10 before:to-transparent before:opacity-0 motion-safe:before:transition-opacity motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_22px_44px_-12px_rgba(15,23,42,0.45)] motion-safe:hover:before:opacity-100 motion-safe:active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-35 disabled:motion-safe:hover:translate-y-0 disabled:before:hidden sm:w-auto"
                  >
                    Run audit
                    <span
                      aria-hidden
                      className="text-base font-light leading-none transition-transform duration-300 ease-out group-hover/auditcta:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                  <p className="text-center text-[11px] leading-relaxed text-hookd-body sm:text-left">
                    By submitting you agree results may arrive by email once verified, no spam,
                    Hookd-grade psychology only.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
