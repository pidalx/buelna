import Image from "next/image";
import Link from "next/link";

// Swap in the real photo by setting this to e.g. "/images/heritage.jpg".
const HERITAGE_IMAGE: string | null = "/ranch.jpg";
const HERITAGE_ALT =
  "Family-owned Sonoran desert ranch land south of Hermosillo";

export default function Heritage() {
  return (
    <section
      id="ranch"
      aria-labelledby="heritage-heading"
      className="bg-bgAlt py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-[45fr_55fr] md:px-8 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-bgInverse md:aspect-[4/5]">
          {HERITAGE_IMAGE && (
            <Image
              src={HERITAGE_IMAGE}
              alt={HERITAGE_ALT}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
            Our Story
          </p>
          <h2
            id="heritage-heading"
            className="mt-3 font-display text-2xl text-ink md:text-3xl"
          >
            Family Land Since 1976
          </h2>

          <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-inkMuted md:text-lg">
            <p>
              Long before Buelna Outfitters welcomed its first hunters, this
              land belonged to our family. Since 1976, we&rsquo;ve worked and
              cared for 19,000 hectares of Sonoran desert 30 miles south of
              Hermosillo — land we know intimately, in every canyon and ridge.
            </p>
            <p>
              In 2022, we opened that land to a limited number of hunters each
              season. It&rsquo;s still a working family property, not a
              commercial operation dressed up as one. That&rsquo;s exactly why the
              hunting here stays genuinely free range and fair chase.
            </p>
          </div>

          <blockquote className="mt-8 border-l-2 border-rust pl-4 font-display text-xl text-leather">
            Still a working family property, not a commercial operation dressed
            up as one.
          </blockquote>

          <Link
            href="/the-ranch"
            className="group mt-8 inline-block rounded-sm font-body text-sm text-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rust"
          >
            Learn more about the ranch{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
