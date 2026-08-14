// Locked firm facts. Anything on the homepage that states something about the
// practice as a matter of fact reads from here, so a claim can only be changed
// in one place and the change is visible in a diff.
//
// Nothing in this file is a display round. Where the design asked for a round
// number that the record does not support — "37+ years", "15+ publications" —
// the verified figure is what ships instead. See `watchwordStats` below.

export const firm = {
  /** The wordmark as it is set in the cream bar. The comma is the firm's own. */
  wordmark: "ADANGOR SAN, & CO.",
  /** Chambers name, used as the hero kicker. */
  chambers: "Enenwanra Chambers",
  /** Year Z. Adangor & Co. (Enenwanra Chambers) was founded. */
  established: 1997,
  /** Sentence case here; the watchword section title-cases "Justice" with <em>. */
  motto: "Upholding justice and the highest ethical standards",
  principal: {
    /** As the firm sets it: initial rather than given name, rank in brackets. */
    name: "Prof. Z. Adangor (SAN)",
    /**
     * His position in the firm, used everywhere he is named.
     *
     * "Senior Advocate" was used here previously and is not wrong — but the
     * name already carries "(SAN)", so the pair read as the rank stated twice.
     * The position is the thing the name does not already say.
     */
    role: "Managing Partner",
  },
  // Flagged, deliberately unchanged. Both of these look like typos — "gmal"
  // for "gmail", and a phone number one digit longer than a Nigerian mobile —
  // but neither may be corrected without the firm confirming what is right.
  // Guessing at a client-facing contact address is worse than leaving it as
  // the firm gave it. Neither is rendered on the homepage.
  contact: {
    email: "adazack2014@gmal.com",
    phone: "070594233855",
  },
} as const;

/**
 * The four practice areas the homepage lists, in the order it lists them.
 *
 * The titles are keys into `practiceAreas` in `expertise.ts`, matched
 * case-insensitively, so the blurb a row shows and the writeup the /expertise
 * page shows can never drift apart. To show more areas, add a title here — do
 * not write new law into the homepage.
 */
export const practiceAreaTitles: string[] = [
  "Land Law",
  "Chieftaincy Cases",
  "Election Petitions",
  "Commercial Law Practice",
];

/**
 * The three figures under the watchword.
 *
 * The first is `established`, rendered as "Since 1997" rather than a years
 * count: a count has to be recomputed every January and silently goes wrong
 * the moment nobody does, whereas the founding year is true for as long as the
 * firm exists.
 *
 * The second and third are counted from the data files at module scope rather
 * than typed in, so adding a practice area or a publication moves the figure on
 * the homepage without anyone remembering to.
 */
export type WatchwordStat = {
  value: string;
  label: string;
};
