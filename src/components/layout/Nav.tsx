"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "The Ranch", href: "/the-ranch" },
  { label: "Hunts", href: "/#hunts" },
  { label: "Lodge", href: "/#lodge" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_THRESHOLD = 80;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Solid when scrolled, or when the mobile menu is open (so the panel is legible).
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        solid
          ? "border-border bg-bg text-ink"
          : "border-transparent bg-transparent text-inkInverse"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg font-semibold tracking-wide whitespace-nowrap"
        >
          {/* Dark deer on the solid nav, cream deer over the hero photo. */}
          <span aria-hidden="true" className="relative block h-9 w-12">
            <Image
              src="/logodeer.png"
              alt=""
              fill
              sizes="48px"
              className={`object-contain transition-opacity duration-200 ${
                solid ? "opacity-100" : "opacity-0"
              }`}
            />
            <Image
              src="/logodeer-cream.png"
              alt=""
              fill
              sizes="48px"
              className={`object-contain transition-opacity duration-200 ${
                solid ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
          BUELNA OUTFITTERS
        </Link>

        <ul className="hidden items-center gap-8 md:flex md:ml-auto">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="font-body text-sm uppercase tracking-wide whitespace-nowrap transition-opacity hover:opacity-70"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-sm bg-rust px-4 py-3 font-body text-sm font-medium uppercase tracking-wide whitespace-nowrap text-inkInverse transition-colors hover:bg-rustHover sm:px-6"
          >
            Plan Your Hunt
          </Link>

          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-border bg-bg px-5 py-4 text-ink md:hidden"
        >
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-sm uppercase tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
