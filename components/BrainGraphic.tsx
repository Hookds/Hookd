import Image from "next/image";

/**
 * Hero brain: custom PNG in brand colors (`/public/hookd-brain-hero.png`).
 * Gentle float animation: reads cleaner than fast spin on detailed artwork.
 */

export function BrainGraphic() {
  return (
    <div className="relative mx-auto flex h-[min(400px,58vw)] w-full max-w-[min(540px,92vw)] items-center justify-center md:mx-0 md:max-w-none md:justify-end">
      <div
        className="pointer-events-none absolute inset-[4%] rounded-full bg-gradient-to-br from-hookd-rose/20 via-hookd-muted/40 to-hookd-navy/10 blur-3xl brain-glow-pulse"
        aria-hidden
      />
      <div className="brain-motion relative aspect-[1536/1024] w-full max-w-[min(520px,88vw)] drop-shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] md:max-w-[480px]">
        <Image
          src="/hookd-brain-hero.png"
          alt="Abstract stylized brain, Hookd brand illustration"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 88vw, 480px"
          className="h-auto w-full object-contain object-center"
        />
      </div>
    </div>
  );
}
