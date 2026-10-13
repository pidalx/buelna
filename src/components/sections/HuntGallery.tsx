"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

const PREVIEW_COUNT = 6;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"} />
    </svg>
  );
}

const arrowClass =
  "flex h-11 w-11 items-center justify-center rounded-sm border border-border text-ink transition-colors hover:border-rust hover:text-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust";

export default function HuntGallery({
  images,
  huntName,
}: {
  images: GalleryImage[];
  huntName: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const preview = images.slice(0, PREVIEW_COUNT);
  const hasMore = images.length > PREVIEW_COUNT;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * el.clientWidth * 0.85,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  if (images.length === 0) return null;

  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-bgAlt py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="mt-3 font-display text-2xl text-ink md:text-3xl"
            >
              {huntName} in the Field
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous photos"
              onClick={() => scrollByPage(-1)}
              className={arrowClass}
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              aria-label="Next photos"
              onClick={() => scrollByPage(1)}
              className={arrowClass}
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label={`${huntName} photo carousel`}
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] md:-mx-8 md:px-8 [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto"
        >
          {preview.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-md bg-bgInverse sm:w-[45%] lg:w-[32%]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 80vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-sm border border-ink px-6 py-3 font-body text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:border-rust hover:text-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
            >
              View all {images.length} photos
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`All ${huntName} photos`}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false);
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-bgInverse p-0 backdrop:bg-black/80"
      >
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg text-inkInverse">
              {huntName} · {images.length} photos
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-sm border border-white/30 px-4 py-2 font-body text-sm uppercase tracking-wide text-inkInverse transition-colors hover:border-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
            >
              Close
            </button>
          </div>
          <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative mb-4 break-inside-avoid overflow-hidden rounded-md bg-black/30"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  );
}
