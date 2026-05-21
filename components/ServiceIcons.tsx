import type { ReactNode } from "react";

const iconWrap =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-hookd-icon-bg";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-5 w-5 text-hookd-rose"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconContent() {
  return (
    <div className={iconWrap}>
      <Svg>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </Svg>
    </div>
  );
}

export function IconPulse() {
  return (
    <div className={iconWrap}>
      <Svg>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75l10.5-11.25Z" />
      </Svg>
    </div>
  );
}

export function IconCloser() {
  return (
    <div className={iconWrap}>
      <Svg>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.964 3.852A1.125 1.125 0 0 0 5.873 3H4.25A2.25 2.25 0 0 0 2.25 4.5v2.25z"
        />
      </Svg>
    </div>
  );
}
