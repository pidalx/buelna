// Real testimonials from the client's existing site (buelnaoutfitters.com).
// Quotes are kept in their original wording and language.
const TESTIMONIALS = [
  {
    quote:
      "Mi experiencia fue muy buena y por ello recomiendo ampliamente la cacería con Buelna Outfitters.",
    name: "Ernesto Soto Priante",
    detail: "January 2023",
    lang: "es",
  },
  {
    quote: "Una de mis mejores cacerías.",
    name: "Eduardo Baptista",
    detail: "Desert Bighorn Sheep and Mule Deer",
    lang: "es",
  },
  {
    quote:
      "I was blessed enough to harvest a desert bighorn sheep as well as my first coues deer!",
    name: "Koe Wetzel",
    detail: "Desert Bighorn Sheep and Coues Deer",
    lang: "en",
  },
  {
    quote: "The lodge was top class and the hospitality amazing.",
    name: "Paul Marquard",
    detail: "Coues Deer",
    lang: "en",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-bgAlt py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-2xl text-ink md:text-3xl"
          >
            Hunters Who&rsquo;ve Made the Trip
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} lang={t.lang} className="space-y-4">
              <span
                aria-hidden="true"
                className="block h-8 font-display text-5xl leading-none text-rust"
              >
                &ldquo;
              </span>
              <p className="font-display text-lg italic leading-relaxed text-ink">
                {t.quote}
              </p>
              <footer className="font-body text-sm text-inkMuted">
                <cite className="not-italic">
                  {t.name} · {t.detail}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
