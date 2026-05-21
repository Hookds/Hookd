import type { ReactNode } from "react";
import { BOOKING_URL } from "@/lib/constants";

type Props = {
  children: ReactNode;
  wide?: boolean;
  variant?: "primary" | "outline-light";
  className?: string;
};

export function BrandBookingLink({
  children,
  wide,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] transition";

  const styles =
    variant === "primary"
      ? "bg-hookd-rose text-white hover:brightness-[0.95] shadow-[0_10px_30px_-8px_rgba(217,137,156,0.48)]"
      : "border border-white text-white hover:bg-white/10";

  return (
    <a
      href={BOOKING_URL}
      className={`${base} ${styles} ${wide ? "w-full sm:w-auto" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
