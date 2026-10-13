import Link from "next/link";

export default function ClosingCta() {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="bg-bgInverse py-20 text-center md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-body text-xs uppercase tracking-wide text-inkInverse/85">
          Ready to Go?
        </p>
        <h2
          id="closing-cta-heading"
          className="mt-3 font-display text-2xl text-inkInverse md:text-3xl"
        >
          Start Planning Your Hunt
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-inkInverse/85 md:text-lg">
          Coues deer, mule deer, and desert bighorn sheep on 19,000 hectares of
          private ranch in Sonora, Mexico.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-sm bg-rust px-6 py-3 font-body text-sm font-medium uppercase tracking-wide text-inkInverse transition-colors hover:bg-rustHover"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
