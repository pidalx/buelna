import Image from "next/image";
import Link from "next/link";

// Swap in the real photo by setting this to e.g. "/images/hero.jpg".
const HERO_IMAGE: string | null = "/HERO_IMAGE.png";
const HERO_ALT =
  "Saguaro cactus and red rock mountain in the Sonoran Desert at golden hour";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-end overflow-hidden bg-bgInverse bg-[radial-gradient(ellipse_at_top_right,#2A2018,#1B1712)]"
    >
      {HERO_IMAGE && (
        <Image
          src={HERO_IMAGE}
          alt={HERO_ALT}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      <div
        aria-hidden="true"
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(27,23,18,0.8),rgba(27,23,18,0.35)_45%,transparent_75%),linear-gradient(to_bottom,rgba(27,23,18,0.45),transparent_25%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-8 pb-28 pt-32 text-center md:px-16 md:pb-36 md:text-left lg:px-24">
        <span
          aria-hidden="true"
          className="mx-auto mb-5 block h-0.5 w-12 bg-rust md:mx-0"
        />
        <p className="font-body text-xs uppercase tracking-wide text-inkInverse/85">
          Sonora, Mexico · Est. 2022
        </p>

        <h1 className="motion-safe:animate-fade-up mt-4 mx-auto max-w-4xl font-display text-3xl leading-[0.95] tracking-tight text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:mx-0 md:text-6xl lg:text-7xl">
          Free-Range Hunting
          <br />
          in the Sonoran Desert
        </h1>

        <p
          className="motion-safe:animate-fade-up mt-5 mx-auto max-w-[45ch] font-body text-lg text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:mx-0"
          style={{ animationDelay: "150ms" }}
        >
          Coues deer, mule deer, and desert bighorn sheep. 100% free range,
          family-owned since 1976.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-sm border border-inkInverse/25 bg-rust px-6 py-3 font-body text-sm font-medium uppercase tracking-wide text-inkInverse transition duration-200 ease-out hover:scale-[1.03] hover:bg-rustHover hover:shadow-soft"
        >
          Plan Your Hunt
        </Link>
      </div>

      <a
        href="#hunts"
        aria-label="Scroll to hunts"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-body text-xs uppercase tracking-wide text-inkInverse/70 transition-colors hover:text-inkInverse sm:flex"
      >
        Scroll
        <span
          aria-hidden="true"
          className="motion-safe:animate-scroll-cue block h-8 w-px bg-current"
        />
      </a>
    </section>
  );
}
