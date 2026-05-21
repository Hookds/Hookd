import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

/** Body: Inter. Default for Stripe/Notion-style UI. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/** Headings: Plus Jakarta Sans. Common on modern product & agency sites vs. editorial serifs. */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hookd.example.com"),
  title: {
    default: "Hookd: Psychology-driven ads, content & closers",
    template: "%s · Hookd",
  },
  description:
    "Hookd specializes in psychology-driven creative for paid ads, daily content systems, and professional closers for local brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="min-h-full bg-hookd-bg font-sans antialiased selection:bg-hookd-rose/25 selection:text-hookd-navy">
        <SiteHeader />
        <div className="flex min-h-[calc(100vh-56px)] flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
