import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import ClosingCta from "@/components/sections/ClosingCta";
import HuntGallery from "@/components/sections/HuntGallery";
import { getHuntGallery } from "@/lib/gallery";
import { HUNT_LIST, HUNTS } from "@/lib/hunts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return HUNT_LIST.map((h) => ({ slug: h.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const hunt = HUNTS[slug];
  if (!hunt) return {};
  return {
    title: `${hunt.name} Hunts | Buelna Outfitters`,
    description: hunt.tagline,
  };
}

export default async function HuntPage({ params }: { params: Params }) {
  const { slug } = await params;
  const hunt = Object.hasOwn(HUNTS, slug) ? HUNTS[slug] : undefined;
  if (!hunt) notFound();

  const gallery = getHuntGallery(hunt.slug, hunt.name);


  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-[60vh] md:min-h-[70vh] items-end overflow-hidden bg-bgInverse bg-[radial-gradient(ellipse_at_top_right,#2A2018,#1B1712)]">
          {hunt.heroImage && (
            <Image
              src={hunt.heroImage}
              alt={hunt.heroAlt}
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover"
              style={{ objectPosition: hunt.heroPosition }}
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
              The Hunts
            </p>
            <h1 className="motion-safe:animate-fade-up mt-4 font-display text-3xl leading-[0.95] tracking-tight text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl">
              {hunt.name}
            </h1>
            <p
              className="motion-safe:animate-fade-up mx-auto mt-5 max-w-[45ch] font-body text-lg text-inkInverse drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:mx-0"
              style={{ animationDelay: "150ms" }}
            >
              {hunt.tagline}
            </p>
          </div>
        </section>

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
              {hunt.facts.map((s) => (
                <div key={s.label} className="border-t-2 border-olive pt-4">
                  <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-body text-base text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-14 max-w-2xl font-body text-lg leading-relaxed text-inkMuted">
              {hunt.description}
            </p>
          </div>
        </section>

        <HuntGallery images={gallery} huntName={hunt.name} />

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
