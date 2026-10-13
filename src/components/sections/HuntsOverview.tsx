import Image from "next/image";
import Link from "next/link";
import { HUNT_LIST } from "@/lib/hunts";

// Swap in real photos by setting a path per species, e.g. "/images/coues-deer.jpg".
const HUNT_IMAGES: Record<string, string | null> = {
  "coues-deer": "/coueshome.jpeg",
  "mule-deer": "/muledeerhome.jpeg",
  "bighorn-sheep": "/bighornhome.jpeg",
};

export default function HuntsOverview() {
  return (
    <section
      id="hunts"
      aria-labelledby="hunts-heading"
      className="bg-bg py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
          The Hunts
        </p>
        <h2
          id="hunts-heading"
          className="mt-3 font-display text-2xl text-ink"
        >
          Three Hunts. One Private Ranch.
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {HUNT_LIST.map((hunt) => {
            const src = HUNT_IMAGES[hunt.slug];
            return (
              <li key={hunt.slug}>
                <Link
                  href={`/hunts/${hunt.slug}`}
                  className="group block rounded-md p-3 transition-shadow duration-300 hover:shadow-soft focus-visible:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-bgInverse">
                    {src && (
                      <Image
                        src={src}
                        alt={hunt.cardAlt ?? hunt.heroAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        style={{ objectPosition: hunt.cardPosition }}
                      />
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-xl text-ink">
                    {hunt.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-inkMuted">
                    {hunt.tagline}
                  </p>
                  <span className="mt-4 inline-block font-body text-sm text-rust">
                    Learn more{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
