import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import ClosingCta from "@/components/sections/ClosingCta";

// Swap in the real header photo by setting this to e.g. "/ranch.jpg".
const RANCH_HERO_IMAGE: string | null = "/ranch0.jpg";
const RANCH_HERO_ALT =
  "Placeholder: aerial view of the Buelna Outfitters ranch property";

// Swap in real landscape/terrain shots per slot, same pattern as above.
// `wide` gives an entry extra rhythm in the grid (spans 2 columns, wider aspect).
// Five images lay out as: a wide lead shot, then two even rows of two —
// clean on both the 2-col mobile grid and the 3-col desktop grid.
const TERRAIN_IMAGES: { src: string | null; alt: string; wide?: boolean }[] = [
  {
    src: "/ranch1.jpg",
    alt: "Placeholder: canyon terrain on the property's northern range",
    wide: true,
  },
  { src: "/ranch2.jpg", alt: "Placeholder: open desert flats and rolling hills" },
  { src: "/ranch3.jpg", alt: "Placeholder: rocky ridgeline in the property's remote country" },
  { src: "/ranch4.jpg", alt: "Placeholder: working ranch buildings and corrals" },
  { src: "/ranch5.jpg", alt: "Placeholder: desert scrub at golden hour" },
];

// Lodge details come from the client's existing lodge page
// (buelnaoutfitters.com/hunting/lodge/). Do not add claims that aren't on it.
const LODGE_AMENITIES = [
  "Bar",
  "Terrace",
  "Jacuzzi",
  "Fire pit",
  "Comfortable seating area",
];

const LODGE_NOTES = [
  {
    label: "Guides",
    value: "Every hunter has at least one English-speaking guide at all times.",
  },
  {
    label: "Airport",
    value:
      "Transportation to and from Hermosillo airport. Hunters arrive and depart at the lodge's specified times.",
  },
  {
    label: "Rifles",
    value:
      "Bring your own rifle and we handle the weapon license process. A limited number of rifles are available on the ranches for clients who don't bring one.",
  },
];

const FACTS = [
  { label: "Size", value: "19,000 hectares (49,711 acres)" },
  { label: "Location", value: "30 miles south of Hermosillo, Sonora" },
  { label: "Family land since", value: "1976" },
  { label: "Outfitting since", value: "2022" },
];

export function generateMetadata(): Metadata {
  return {
    title: "The Ranch | Buelna Outfitters",
    description: "19,000 hectares of free-range Sonoran desert, family land since 1976.",
  };
}

export default function TheRanchPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-bgInverse bg-[radial-gradient(ellipse_at_top_right,#2A2018,#1B1712)]">
          {RANCH_HERO_IMAGE && (
            <Image
              src={RANCH_HERO_IMAGE}
              alt={RANCH_HERO_ALT}
              fill
              priority
              sizes="100vw"
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

          <div className="relative mx-auto w-full max-w-7xl px-8 pb-16 pt-40 text-center md:px-16 md:pb-20 md:text-left lg:px-24">
            <span
              aria-hidden="true"
              className="mx-auto mb-5 block h-0.5 w-12 bg-rust md:mx-0"
            />
            <p className="font-body text-xs uppercase tracking-wide text-inkInverse/85">
              Our Story
            </p>
            <h1 className="motion-safe:animate-fade-up mt-4 font-display text-3xl leading-[0.95] tracking-tight text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
              The Ranch
            </h1>
            <p
              className="motion-safe:animate-fade-up mx-auto mt-5 max-w-[45ch] font-body text-lg text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:mx-0"
              style={{ animationDelay: "150ms" }}
            >
              19,000 Hectares of Free-Range Sonoran Desert.
            </p>
          </div>
        </section>

        <section className="bg-bg py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
              {FACTS.map((f) => (
                <div key={f.label} className="border-t-2 border-olive pt-4">
                  <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                    {f.label}
                  </dt>
                  <dd className="mt-2 font-body text-base text-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="lodge-heading" className="bg-bgAlt py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
                The Lodge
              </p>
              <h2
                id="lodge-heading"
                className="mt-3 font-display text-2xl text-ink md:text-3xl"
              >
                Where You Stay
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-inkMuted md:text-lg">
                The lodge is 30 miles south of Hermosillo, Sonora. Hunters stay
                in three safari-style tent cabins with all the amenities. The
                main lodge was recently remodeled and has mountain views.
              </p>
            </div>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 font-body text-base text-ink">
              {LODGE_AMENITIES.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-olive"
                  />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-4 max-w-2xl text-center font-body text-sm italic text-inkMuted">
              Guests may see sheep and Coues deer from the pool terrace.
            </p>

            <dl className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {LODGE_NOTES.map((n) => (
                <div key={n.label} className="border-t-2 border-olive pt-4">
                  <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                    {n.label}
                  </dt>
                  <dd className="mt-2 font-body text-base text-ink">
                    {n.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-bg py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {TERRAIN_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-md bg-bgInverse ${
                    img.wide
                      ? "col-span-2 aspect-[16/9]"
                      : "aspect-[4/5]"
                  }`}
                >
                  {img.src && (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={
                        img.wide
                          ? "100vw"
                          : "(min-width: 768px) 33vw, 50vw"
                      }
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
