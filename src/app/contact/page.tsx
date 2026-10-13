import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

// Every detail below comes from the client's existing site (buelnaoutfitters.com),
// which lists two emails and two phone numbers. Confirm which to keep with the client.
const EMAILS = ["buelnaoutfitters@gmail.com", "info@buelnaoutfitters.com"];

const PHONES = [
  { display: "+52 55 2711 3215", tel: "+525527113215" },
  { display: "+52 166 219 059 72", tel: "+5216621905972" },
];

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/buelna_outfitters/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100088155687001",
  },
];

const linkClass = "underline-offset-4 hover:underline hover:text-rust";

export const metadata: Metadata = {
  title: "Contact | Buelna Outfitters",
  description:
    "For pricing and more information, contact Buelna Outfitters, 30 miles south of Hermosillo, Sonora, Mexico.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-bgInverse bg-[radial-gradient(ellipse_at_top_right,#2A2018,#1B1712)]">
          <div
            aria-hidden="true"
            className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]"
          />
          <div className="relative mx-auto w-full max-w-7xl px-8 pb-16 pt-40 text-center md:px-16 md:pb-20 md:text-left lg:px-24">
            <span
              aria-hidden="true"
              className="mx-auto mb-5 block h-0.5 w-12 bg-rust md:mx-0"
            />
            <p className="font-body text-xs uppercase tracking-wide text-inkInverse/85">
              Get in Touch
            </p>
            <h1 className="motion-safe:animate-fade-up mt-4 font-display text-3xl leading-[0.95] tracking-tight text-inkInverse sm:text-5xl md:text-6xl">
              Contact
            </h1>
            <p
              className="motion-safe:animate-fade-up mx-auto mt-5 max-w-[45ch] font-body text-lg text-inkInverse md:mx-0"
              style={{ animationDelay: "150ms" }}
            >
              For pricing and more information, please contact us.
            </p>
          </div>
        </section>

        <section className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
              <div className="border-t-2 border-olive pt-4">
                <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                  Email
                </dt>
                {EMAILS.map((e) => (
                  <dd key={e} className="mt-2 break-words font-body text-base text-ink">
                    <a href={`mailto:${e}`} className={linkClass}>
                      {e}
                    </a>
                  </dd>
                ))}
              </div>

              <div className="border-t-2 border-olive pt-4">
                <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                  Phone
                </dt>
                {PHONES.map((p) => (
                  <dd key={p.tel} className="mt-2 font-body text-base text-ink">
                    <a href={`tel:${p.tel}`} className={linkClass}>
                      {p.display}
                    </a>
                  </dd>
                ))}
              </div>

              <div className="border-t-2 border-olive pt-4">
                <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                  Location
                </dt>
                <dd className="mt-2 font-body text-base text-ink">
                  30 miles south of Hermosillo, Sonora, Mexico
                </dd>
              </div>

              <div className="border-t-2 border-olive pt-4">
                <dt className="font-body text-xs uppercase tracking-wide text-inkMuted">
                  Follow
                </dt>
                {SOCIAL.map((s) => (
                  <dd key={s.label} className="mt-2 font-body text-base text-ink">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {s.label}
                    </a>
                  </dd>
                ))}
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
