export type Hunt = {
  slug: string;
  name: string;
  // Swap in a real photo by setting a path, e.g. "/images/coues-deer-hero.jpg".
  heroImage: string | null;
  heroAlt: string;
  // Alt text for the homepage card photo when it differs from the header photo.
  cardAlt?: string;
  // CSS object-position for the header photo (default "center"). Use it to keep
  // the animal in frame when the wide header crops the top and bottom.
  heroPosition?: string;
  // Same idea for the square homepage card photo.
  cardPosition?: string;
  tagline: string;
  // Label/value pairs shown in the stat row. Every value here must match the
  // client's existing site (buelnaoutfitters.com/hunting/...).
  facts: { label: string; value: string }[];
  description: string;
};

const GROUP_SIZE = { label: "Group Size", value: "Combo hunts: 3 to 4 hunters" };

export const HUNTS: Record<string, Hunt> = {
  "coues-deer": {
    slug: "coues-deer",
    name: "Coues Deer",
    heroImage: "/backcoues.jpeg",
    heroAlt: "Coues deer buck with large antlers in the Sonoran desert",
    heroPosition: "center 80%",
    cardPosition: "center 85%",
    tagline: "100% free range Coues deer, 90 to 120+ inches.",
    facts: [
      { label: "Season", value: "Mainly November through February" },
      { label: "Trophy Size", value: "90 to 120+ inches" },
      { label: "Rut", value: "Starts early January, peaks until mid-February" },
      GROUP_SIZE,
    ],
    description:
      "Free-range Coues deer hunts aimed at animals scoring 90 to 120+ inches. Our management focuses on maintaining older age class animals. Hunts are done by spot and stalk, glassing, and high racking.",
  },
  "mule-deer": {
    slug: "mule-deer",
    name: "Mule Deer",
    heroImage: "/muledeerhome.jpeg",
    heroAlt: "Mule deer buck with large antlers in brush",
    heroPosition: "center 90%",
    tagline: "100% free range mule deer, 170 to 200+ inches.",
    facts: [
      { label: "Season", value: "Mainly November through February" },
      { label: "Trophy Size", value: "170 to 200+ inches" },
      { label: "Rut", value: "Starts mid to late December, runs to the end of January" },
      GROUP_SIZE,
    ],
    description:
      "Free-range mule deer hunts for animals in the 170 to 200+ inch class. Our management focuses on maintaining older age class animals, and hunts are done by spot and stalk, glassing, and high racking. All Mexico hunts include the option to harvest a Coues deer for an added harvest fee. Ask us about the management deer hunt and pricing.",
  },
  "bighorn-sheep": {
    slug: "bighorn-sheep",
    name: "Desert Bighorn Sheep",
    heroImage: "/backbighorn-sharp.jpeg",
    heroAlt: "Desert bighorn ram standing on a rocky ridge at sunset",
    cardAlt: "Close-up of a desert bighorn ram with curled horns",
    cardPosition: "70% center",
    tagline: "Rifle hunts on flexible dates, November through March.",
    facts: [
      { label: "Season", value: "November through March, flexible dates" },
      { label: "Method", value: "Rifle" },
      { label: "Permits", value: "All rams get CITES permits and are importable into the U.S." },
      GROUP_SIZE,
    ],
    description:
      "Every hunter should experience a desert bighorn sheep hunt. These hunts are more physical than our deer hunts because the sheep favor steep terrain, so we ask hunters to be in good physical shape beforehand. We also offer estate fair-chase bighorn hunts.",
  },
};

// Display order for listings.
export const HUNT_LIST: Hunt[] = [
  HUNTS["coues-deer"],
  HUNTS["mule-deer"],
  HUNTS["bighorn-sheep"],
];
