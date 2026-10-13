const INCLUDED = [
  "Transportation to and from Hermosillo airport",
  "Lodging at the ranch",
  "Food and beverages",
  "English-speaking guides",
  "Truck",
  "Blinds",
  "Skinning and trophy preparation for the taxidermist",
];

const NOT_INCLUDED = [
  "Tips for guides and staff",
  "Trophy shipping and export",
  "CITES paperwork",
  "Ammunition",
  "Rifle rental",
  "Rifle permit costs",
];

function CheckIcon() {
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
      className="mt-0.5 shrink-0 text-olive"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-inkMuted"
    >
      <path d="M5 10h10" />
    </svg>
  );
}

export default function WhatsIncluded() {
  return (
    <section
      id="lodge"
      aria-labelledby="included-heading"
      className="bg-bg py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs uppercase tracking-wide text-inkMuted">
            The Experience
          </p>
          <h2
            id="included-heading"
            className="mt-3 font-display text-2xl text-ink md:text-3xl"
          >
            Everything Handled, So You Can Hunt
          </h2>
          <p className="mt-4 font-body text-base text-inkMuted">
            Lodging, English-speaking guides, and everything in between.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="border-b-2 border-olive pb-3 font-display text-lg text-ink">
              Included
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-body text-base text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="border-b-2 border-inkMuted pb-3 font-display text-lg text-ink">
              Not Included
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <MinusIcon />
                  <span className="font-body text-base text-inkMuted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center font-body text-sm italic text-inkMuted">
          Full details provided during booking.
        </p>
      </div>
    </section>
  );
}
