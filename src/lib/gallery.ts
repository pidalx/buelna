import fs from "node:fs";
import path from "node:path";

export type GalleryImage = { src: string; alt: string };

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

// Reads public/images/hunts/<slug>/ at build/render time. Dropping photos into
// that folder is all it takes to add them; they sort by file name (01, 02, ...).
export function getHuntGallery(slug: string, huntName: string): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images", "hunts", slug);
  let files: string[];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f, i) => ({
      src: `/images/hunts/${slug}/${f}`,
      alt: `${huntName} hunt photo ${i + 1}`,
    }));
}
