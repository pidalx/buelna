import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "The Ranch", href: "/the-ranch" },
  { label: "Hunts", href: "/#hunts" },
  { label: "Lodge", href: "/#lodge" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/buelna_outfitters/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100088155687001",
  },
];

const linkClass = "hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bgInverse py-12 text-inkInverse">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-wide">
              BUELNA OUTFITTERS
            </p>
            <p className="mt-2 font-body text-sm text-inkInverse/70">
              Sonora, Mexico · Est. 2022
            </p>
          </div>

          <div>
            <h2 className="font-body text-xs uppercase tracking-wide text-inkInverse/70">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 font-body text-sm">
              <li>
                <a
                  href="mailto:buelnaoutfitters@gmail.com"
                  className={linkClass}
                >
                  buelnaoutfitters@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+525527113215" className={linkClass}>
                  +52 55 2711 3215
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="font-body text-xs uppercase tracking-wide text-inkInverse/70">
                Follow
              </h2>
              <ul className="mt-3 space-y-2 font-body text-sm">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <nav aria-label="Footer">
              <h2 className="font-body text-xs uppercase tracking-wide text-inkInverse/70">
                Explore
              </h2>
              <ul className="mt-3 space-y-2 font-body text-sm">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center font-body text-xs text-inkInverse/60">
          © 2026 Buelna Outfitters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
