"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { firm, practiceAreaTitles } from "../data/firm";
import { practiceAreas } from "../data/expertise";
import "./about-page.css";

/*
 * The about page.
 *
 * Built to the composition in `about.jpeg`, with `adangor-v2.md` and
 * `adangor-v2-spec.md` supplying the tokens, the type ladder and — where the
 * mockup and the record disagree — the facts. The two disagree in five places,
 * each marked at its site below with the reason the record won.
 *
 * This ran as the `/v2` study while it was under review; it now stands as the
 * page itself, and the study route, its preloader gate and the three sections
 * it replaces (`AboutHero`, `ProfessionalJourney`, `AwardsRecognition`) are
 * gone with the swap.
 *
 * Sequence, top to bottom:
 *   watermark → name plate → charcoal record → justice split → creed + journey
 *   → watchword → service areas → footer
 */

/* Hero stats. The spec is explicit that these are a Figma pin for this page
   only — hardcoded here rather than added to `firm.ts`, because `firm.ts` holds
   facts the whole site may state and neither figure is confirmed against the
   record. `firm.established` is 1997. */
const HERO_STATS = [
  { value: "37+", label: "Years of Practice" },
  { value: "15+", label: "Practice Areas" },
];

/*
 * Journey.
 *
 * The mockup's three entries are 1989 ESTABLISHMENT / 2005 EXPANSION / 2023
 * INNOVATION, and its first entry glosses 1989 as "founding of the chambers" —
 * which contradicts `firm.established`, 1997, on the same page as the mockup's
 * own "SINCE 1997". 2005 and 2023 appear nowhere in the record. They read as
 * placeholder rungs written to fill the shape.
 *
 * The shape is kept exactly: year, a short uppercase label, a line of prose.
 * The content is the locked timeline — the same three dates the homepage's
 * journey wheel turns on.
 */
const MILESTONES = [
  {
    year: "1989",
    label: "Called to the Bar",
    note: "Enrolled as a barrister and solicitor of the Supreme Court of Nigeria, and began practice at E.C. Ukala, SAN & Co., Efe Chambers.",
  },
  {
    year: "2018",
    label: "Attorney-General",
    note: "Appointed Attorney-General of Rivers State, taking charge of the State's legal affairs and its representation before the courts.",
  },
  {
    year: "2020",
    label: "Senior Advocate",
    note: "Conferred the rank of SAN by the Legal Practitioners' Privileges Committee, in recognition of sustained distinction in advocacy.",
  },
];

/*
 * The watchword trio.
 *
 * The mockup reads HONESTY / HONESTY / JUSTICE. The firm's watchword, per the
 * spec's product-truth table, is Honesty / Integrity / Diligence — so the
 * mockup has one word duplicated and a third that is not the watchword at all.
 * A law firm's stated values are not a place to ship a copy-paste slip.
 */
const WATCHWORD = ["Honesty", "Integrity", "Diligence"];

/* The four service cards. The mockup repeats one placeholder card — "General
   Litigation", four times, same body — so the titles come from the same
   `practiceAreaTitles` the homepage uses and the bodies are matched out of
   `expertise.ts`, rather than new law being written into this page. */
const SERVICES = practiceAreaTitles.slice(0, 4).map((title) => {
  const match = practiceAreas.find(
    (area) => area.title.toLowerCase() === title.toLowerCase(),
  );
  return { title, blurb: match?.blurb ?? "", detail: match?.detail ?? "" };
});

/* The mark that opens "Journey at a glance" — a small hexagon, not a ring. */
function Hex() {
  return (
    <svg viewBox="0 0 12 12" className="about-hex" aria-hidden="true">
      <path
        d="M6 1 10.3 3.5 10.3 8.5 6 11 1.7 8.5 1.7 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/*
 * The mark on each service card.
 *
 * Traced from the reference mockup rather than drawn by eye.
 *
 * The mark is about 21px across in the mockup, which is too small to read: the
 * outer contour, the inner star and the cells between them all blur into one
 * another, and three attempts at reconstructing it from a zoomed screenshot
 * each got the topology wrong. `scratchpad/trace.py` upsamples that patch,
 * takes an iso-contour of the luminance, chains the marching-squares segments
 * into closed loops and writes them out — after averaging the patch with its
 * own mirrors, so the JPEG's noise is not traced as if it were design.
 *
 * The result is five loops in one path: the outer ring, its inner edge, and
 * the cells the inner star cuts the field into. `fillRule="evenodd"` is what
 * makes them read as a ring and a star rather than as a blob — the inner loops
 * punch back out of the outer ones. It is filled, not stroked; the stroke of
 * the original is baked into the outline.
 */
function Spark() {
  return (
    <svg viewBox="0 0 32 32" className="about-spark" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.08 1.49L14.24 1.92L12.90 3.54L11.52 6.63L10.63 7.20L9.10 7.33L8.50 7.67L7.39 8.98L7.37 10.44L7.05 11.03L5.54 12.16L3.33 12.99L1.63 14.59L1.12 16.26L1.64 17.70L3.35 19.30L5.54 20.11L7.05 21.25L7.37 21.83L7.40 23.29L8.52 24.63L9.11 24.94L10.63 25.08L11.52 25.65L12.71 28.43L14.26 30.37L15.31 30.82L17.04 30.78L17.87 30.36L19.22 28.73L20.60 25.64L21.49 25.08L23.02 24.94L23.62 24.61L24.72 23.29L24.75 21.83L25.07 21.25L26.58 20.11L28.79 19.28L30.49 17.69L31.00 16.01L30.48 14.57L28.77 12.97L26.58 12.16L25.07 11.03L24.75 10.44L24.72 8.98L23.60 7.64L23.01 7.33L21.49 7.20L20.59 6.62L19.41 3.84L17.85 1.90L16.81 1.45L15.08 1.49ZM15.85 2.98L14.90 3.38L14.27 4.08L12.32 8.61L11.54 8.99L10.12 8.67L9.46 8.82L8.88 9.53L8.73 10.53L10.13 12.31L11.92 12.84L13.19 13.79L14.38 13.78L14.89 13.33L15.29 12.37L15.62 8.84L16.09 7.49L16.50 8.82L17.01 12.90L17.58 13.69L18.61 13.87L20.22 12.83L22.19 12.16L23.28 10.81L23.37 9.96L23.02 9.14L22.44 8.72L20.63 8.99L19.91 8.71L17.73 3.90L16.92 3.20L15.86 2.98ZM7.80 12.74L6.56 13.04L3.95 14.38L2.67 15.72L2.52 16.26L3.82 17.81L6.45 19.19L9.32 19.62L9.81 19.42L10.59 18.46L12.23 17.51L13.03 16.56L13.14 15.97L12.20 14.74L10.57 13.79L9.68 12.77L7.82 12.74ZM22.52 12.73L21.56 13.79L19.68 14.97L19.02 15.84L19.04 16.47L19.99 17.61L21.54 18.47L22.54 19.55L23.92 19.58L25.64 19.20L28.36 17.75L29.47 16.52L29.54 15.86L28.27 14.45L25.63 13.07L23.90 12.69L22.53 12.72ZM13.21 18.48L11.97 19.41L9.92 20.12L8.81 21.51L8.80 22.53L9.15 23.20L9.68 23.55L11.49 23.28L12.21 23.55L12.68 24.22L13.62 27.07L14.48 28.49L15.53 29.21L16.54 29.23L17.46 28.69L18.30 27.45L19.79 23.67L20.56 23.29L21.99 23.60L22.67 23.45L23.24 22.74L23.38 21.69L21.99 19.96L20.20 19.43L18.93 18.49L17.74 18.50L17.22 18.94L16.83 19.90L16.50 23.44L16.03 24.78L15.07 19.29L14.38 18.50L13.22 18.47Z"
      />
    </svg>
  );
}

export default function AboutView() {
  const rootRef = useRef<HTMLDivElement>(null);

  /*
   * The page's one focal moment: the name clips in from the left, and the
   * charcoal record wipes up under it. Clip-path only, once — no fade-rise on
   * every section.
   *
   * There is no `opacity: 0` in the CSS. If this never runs — JS fails, the
   * bundle is blocked, reduced motion is on — the hero is already on the page
   * and legible. That is the point of animating a clip rather than an opacity.
   */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const name = root.querySelector(".about-hero-name h1");
        const recordBand = root.querySelector(".about-hero-record");
        if (!name || !recordBand) return;

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          // will-change is worth having for the length of the tween and worth
          // nothing after it, so it is set here and cleared on completion
          // rather than left in the stylesheet.
          onComplete: () =>
            gsap.set([name, recordBand], { clearProps: "willChange,clipPath" }),
        });

        gsap.set([name, recordBand], { willChange: "clip-path" });

        tl.fromTo(
          name,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.8 },
        ).fromTo(
          recordBand,
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 0.72 },
          0.22,
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={rootRef}>
      {/* ------------------------------------------------------------------
          Name plate + charcoal record

          The mockup opens on a large ADANGOR watermark. The site's own
          masthead sits here instead — it is the same name, set once, and it
          is the thing a reader can actually use.
          ------------------------------------------------------------------ */}
      <section className="about-hero" id="firm">
        <div className="about-hero-name">
          <p className="about-kicker">The Law Firm Of</p>
          <div className="about-identity">
            <h1>Professor .Z. Adangor SAN</h1>
            <p className="about-creds">DSSRS, MCIArb (UK), KSC</p>
          </div>
        </div>

        {/* From 768 up this is an L: the stats take row 1 / column 1, the copy
            takes row 2 / column 2 with its hairline beneath it. At 390 they
            simply stack. */}
        <div className="about-hero-record">
          <div className="about-record-inner">
            <ul className="about-stats">
              {HERO_STATS.map((stat) => (
                <li className="about-stat" key={stat.label}>
                  <span className="about-stat-num">{stat.value}</span>
                  <span className="about-stat-rule" aria-hidden="true" />
                  <span className="about-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>

            <div className="about-stats-copy">
              <p>
                Led by the Managing Partner, Prof. Zacchaeus Adangor, SAN, the
                firm brings together courtroom advocacy, public service and
                academic distinction under one practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Justice — white half, black half, welcome straddling the seam
          ------------------------------------------------------------------ */}
      <section className="about-justice" id="justice">
        {/* The welcome and the display line are one group, centred in the
            white half. Keeping the card in normal flow rather than absolutely
            placed is what stops it riding up over the record band above when
            the section is short. */}
        <div className="about-justice-copy">
          <blockquote className="about-welcome">
            <p>
              I warmly welcome you to Prof. Z. Adangor SAN &amp; Co., where the
              practice of Law is driven by diligence and integrity. The office
              is fully equipped to render top-of-the-range legal services to
              clients of all needs.
            </p>
            <cite>
              <span className="about-welcome-name">
                Prof. Zacchaeus Adangor, SAN
              </span>
              {/* The mockup captions this "Ezemenuma Chambers". The spec flags
                  that spelling explicitly: the chambers is Enenwanra. */}
              <span className="about-welcome-chambers">{firm.chambers}</span>
            </cite>
          </blockquote>

          <h2 className="about-display">
            <span>Built on Justice</span>
            {/* The weight step is the whole device: same size, same colour,
                one line heavier. */}
            <span className="is-strong">Guided by Ethics</span>
          </h2>
        </div>

        <div className="about-justice-plate">
          {/* In the study this portrait was a link to `/about`. This is that
              page, so the link is gone rather than pointing at itself — a
              figure, not a destination. */}
          <div className="about-portrait">
            {/* data-speed is the ScrollSmoother contract from the spec. It is
                inert on this site, which scrolls on Lenis — kept so the
                parallax is one plugin away rather than one rebuild away, and
                on the media rather than on the frame. */}
            <div className="about-portrait-media" data-speed="1.08">
              <Image
                src="/images/prof-zach-portrait.jpg"
                alt={`${firm.principal.name}, ${firm.principal.role}`}
                fill
                sizes="(max-width: 767px) 100vw, 45vw"
                className="about-portrait-img"
                style={{ viewTransitionName: "managing-portrait" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Creed — gold panel against the journey
          ------------------------------------------------------------------ */}
      <section className="about-creed">
        <div className="about-creed-panel">
          <h2 className="about-creed-title">Integrity first.</h2>
          <p className="about-creed-body">
            Ethical clarity is not ornament. It is the foundation this practice
            is built on, and the reason our advocacy endures.
          </p>
        </div>

        <div className="about-journey">
          <p className="about-journey-head">
            <Hex />
            <span>Journey at a glance</span>
          </p>

          <ol className="about-journey-list">
            {MILESTONES.map((item) => (
              <li key={item.year}>
                {/* The tick belongs to the year, not to the rule — it sits
                    immediately beside the numeral rather than hanging off the
                    vertical line. */}
                <span className="about-journey-year">
                  <span className="about-journey-tick" aria-hidden="true" />
                  {item.year}
                </span>
                <div className="about-journey-copy">
                  <h3>{item.label}</h3>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Watchword
          ------------------------------------------------------------------ */}
      <section className="about-watch">
        <h2 className="about-watch-title">Our Watchword</h2>

        <div className="about-watch-body">
          <ul className="about-watch-list">
            {WATCHWORD.map((word) => (
              <li key={word}>
                <span className="about-watch-rule" aria-hidden="true" />
                <span className="about-watch-word">{word}</span>
              </li>
            ))}
          </ul>

          <p className="about-watch-copy">
            Our name goes on every brief we file, so the standard never moves.
            Clients bring us matters that decide how a business trades, how a
            community is governed, or how a life turns out, and each one is
            prepared as though it were the only file on the desk.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Service areas
          ------------------------------------------------------------------ */}
      <section className="about-services">
        <div className="about-services-head">
          <h2 className="about-services-title">
            Legal Representation
            <br />
            Beyond the Courtroom
          </h2>

          <Link href="/expertise" className="about-services-cta">
            <span className="about-services-cta-label">Our Service Areas</span>
            <span className="about-services-cta-arrow" aria-hidden="true">
              {/* The glyph moves, the cell does not — shifting the cell would
                  drag the frame's own rule with it. */}
              <span className="about-services-cta-glyph">→</span>
            </span>
          </Link>
        </div>

        {/* A scroller rather than a fixed row: four cards at a readable width
            overflow a phone, and the mockup's own left-hand card is cut off,
            which is what a strip that scrolls looks like at rest. */}
        <ul className="about-cards">
          {SERVICES.map((service, i) => (
            <li
              className={`about-card${i === 0 ? " is-current" : ""}`}
              key={service.title}
            >
              <Spark />
              <h3 className="about-card-title">{service.title}</h3>
              <p className="about-card-body">{service.blurb}</p>
              <p className="about-card-detail">{service.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* The page ends here. The site's own footer follows, from the root
          layout — this study does not draw a second one. */}
    </div>
  );
}
