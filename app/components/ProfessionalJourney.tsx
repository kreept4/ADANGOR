"use client";

// Figma node 47:752 — a gold band carrying the career timeline. The white panel
// underneath the timeline is a single L-shaped shape in the comp (node 47:1147,
// a boolean subtract): full width down to the markers, then only the left half
// continues, leaving a notch bottom-right for the portrait to sit in. It is
// rebuilt here as two blocks plus a concave fillet where they meet, so the
// shape reflows instead of being locked to the comp's 1334 x 804.
//
// Sizes are ratios of --fs-hero rather than their own clamps, so the section
// rides the shared ladder in globals.css from a smartwatch up to a 100" panel.
// The max() floors stop the smaller derived sizes collapsing at the bottom of
// that ladder.

// Dates, achievements and their write-ups. The comp repeats one placeholder
// entry three times; these are the three milestones as given.
const milestones = [
  {
    date: "1989",
    achievement: "Called to the Nigerian Bar",
    summary:
      "Enrolled as a barrister and solicitor of the Supreme Court of Nigeria, and began practice at E.C. Ukala, SAN & Co., Efe Chambers.",
  },
  {
    date: "2018",
    achievement: "Attorney-General of Rivers State",
    summary:
      "Appointed the State's Attorney-General, taking charge of its legal affairs and its representation before the courts.",
  },
  {
    date: "2020",
    achievement: "Rank of Senior Advocate of Nigeria",
    summary:
      "Conferred the rank of SAN by the Legal Practitioners' Privileges Committee, in recognition of sustained distinction in advocacy.",
  },
];

// The comp's marker asset (node 47:794): a 5px stem sitting on a 20px ball,
// both #E0E0E0. Same geometry as the marker the awards section already uses.
function ConferralMarker() {
  return (
    <svg
      viewBox="0 0 40 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="19.5" y1="0" x2="19.5" y2="33" stroke="#E0E0E0" strokeWidth="5" />
      <path
        d="M20 25.5C30.758 25.5 39.5 34.4426 39.5 45.5C39.5 56.5574 30.758 65.5 20 65.5C9.24201 65.5 0.5 56.5574 0.5 45.5C0.5 34.4426 9.24201 25.5 20 25.5Z"
        fill="#E0E0E0"
        stroke="#E0E0E0"
      />
    </svg>
  );
}

// A drawn mark rather than a typed “ — the glyph inherits whatever the body
// face does with quotes, which at this size reads thin next to the card it sits
// on. Two blocks with a cut foot, the shape a serif quote resolves to when it
// is set large.
function QuoteMark() {
  return (
    <svg
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 36V21.6C0 15.4 1.3 10.4 3.9 6.5C6.6 2.6 10.7 0.4 16.2 0V6.6C13.2 7.3 11.1 8.7 9.9 10.8C8.7 12.9 8.1 15.6 8.1 18.9H16.2V36H0Z"
        fill="currentColor"
      />
      <path
        d="M28.8 36V21.6C28.8 15.4 30.1 10.4 32.7 6.5C35.4 2.6 39.5 0.4 45 0V6.6C42 7.3 39.9 8.7 38.7 10.8C37.5 12.9 36.9 15.6 36.9 18.9H45V36H28.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ProfessionalJourney() {
  return (
    <section className="pj">
      <div className="pj-inner">
        <div className="pj-head">
          <h2 className="pj-title">Professional Journey</h2>
          <p className="pj-intro">
            His legal career began at E.C. Ukala, SAN &amp; Co., Efe Chambers,
            where he rose to Deputy Head of Chambers. He later established Z.
            Adangor &amp; Co. (Enenwanra Chambers), with its first office at
            72/73 Victoria Street, Port Harcourt Township.
          </p>
        </div>

        <div className="pj-frame">
          <div className="pj-top">
            <ol className="pj-track">
              {milestones.map((item) => (
                <li key={item.date} className="pj-item">
                  <span className="pj-date">{item.date}</span>
                  <h3 className="pj-achievement">{item.achievement}</h3>
                  <p className="pj-summary">{item.summary}</p>
                  <span className="pj-marker">
                    <ConferralMarker />
                  </span>
                </li>
              ))}
            </ol>
            <div className="pj-line" aria-hidden="true" />
          </div>

          <div className="pj-lower">
            <div className="pj-quote-cell">
              <blockquote className="pj-quote">
                <span className="pj-quote-mark">
                  <QuoteMark />
                </span>
                <p className="pj-quote-text">
                  To build an outstanding legal practice with integrity,
                  honesty, and diligence.
                </p>
                <span className="pj-quote-mark pj-quote-mark-close">
                  <QuoteMark />
                </span>
              </blockquote>
            </div>

            <div className="pj-portrait-cell">
              <div className="pj-portrait">
                <img
                  src="/images/hero-judge.jpg"
                  alt="Prof. Zacchaeus Adangor, SAN, in wig and gown"
                  className="pj-portrait-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pj {
          width: 100%;
          background: #b48602;
          box-sizing: border-box;
          font-family: var(--font-instrument-sans), sans-serif;
        }
        .pj-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 4vw, 64px);
          padding: clamp(36px, 5vw, 80px) var(--page-gutter)
            clamp(44px, 6vw, 96px);
          box-sizing: border-box;
        }
        .pj-head {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.4vw, 20px);
        }
        .pj-title {
          margin: 0;
          color: #fff;
          font-weight: 400;
          font-size: var(--fs-h2);
          line-height: 1.2;
          letter-spacing: -0.04em;
        }
        .pj-intro {
          margin: 0;
          /* One tone throughout: the comp alternates a dull grey with white
             mid-sentence, which reads as a mistake rather than as emphasis. */
          color: #fbf6ea;
          font-weight: 400;
          font-size: max(12px, calc(var(--fs-hero) * 0.39));
          line-height: 1.5;
          letter-spacing: -0.035em;
          max-width: 68ch;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }

        /* The panel keeps its layout at every width — three columns across the
           top, the notch bottom-right, the portrait in it — and simply gets
           smaller. Every measurement inside is a percentage of the panel's own
           width (cqw against this container) rather than of the viewport, so a
           phone gets the same drawing as a desktop at a smaller scale instead
           of a rearranged one. Percentages are taken from the comp's 1334px
           panel, which is what the desktop rendering is measured against.

           Type is the one exception: below roughly a tablet a true proportional
           size would drop under 8px, so the three text sizes hold a floor and
           the block trades a little exactness for remaining readable. */
        .pj-frame {
          width: 100%;
          container-type: inline-size;
          --pj-radius: 2.1cqw;
          --pj-pad-x: 3.15cqw;
          --pj-pad-b: 2.8cqw;
          --pj-marker-w: 3cqw;
        }

        /* Upper block of the L: full width, square only where the lower block
           carries on beneath it. */
        .pj-top {
          position: relative;
          background: #fff;
          border-radius: var(--pj-radius) var(--pj-radius) var(--pj-radius) 0;
        }
        .pj-track {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 3.3cqw;
          align-items: end;
          margin: 0;
          padding: 3.7cqw var(--pj-pad-x) var(--pj-pad-b);
          list-style: none;
        }
        .pj-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1cqw;
          height: 100%;
          min-width: 0;
        }
        .pj-date {
          color: #2f2f2f;
          font-weight: 600;
          font-size: max(10px, 1.43cqw);
          line-height: 1.16;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .pj-achievement {
          margin: 0;
          color: #f57e16;
          font-weight: 500;
          font-size: max(10px, 1.43cqw);
          line-height: 1.25;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }
        /* Warm rather than neutral grey, so it reads as part of the same family
           as the orange above it instead of a duller, unrelated tone. */
        .pj-summary {
          margin: 0;
          color: #6b5d50;
          font-weight: 400;
          font-size: max(9px, 1.12cqw);
          line-height: 1.55;
          max-width: 34ch;
        }
        .pj-marker {
          display: block;
          margin-top: auto;
          padding-top: 3cqw;
        }
        .pj-marker :global(svg) {
          display: block;
          width: var(--pj-marker-w);
          height: calc(var(--pj-marker-w) * 1.65);
        }
        /* 10-on, 10-off, matching the comp's stroke-dasharray — a CSS dashed
           border picks its own rhythm off the border width and comes out
           shorter. The line crosses the marker just below the ball's centre,
           which is what makes the ball read as resting on it. */
        .pj-line {
          position: absolute;
          left: 0;
          right: 0;
          bottom: calc(var(--pj-pad-b) + var(--pj-marker-w) * 0.2625);
          height: max(2px, 0.3cqw);
          z-index: 0;
          background: repeating-linear-gradient(
            to right,
            #e0e0e0 0 0.75cqw,
            transparent 0.75cqw 1.5cqw
          );
        }

        /* Lower block of the L, plus the notch the portrait sits in. */
        .pj-lower {
          display: grid;
          grid-template-columns: 49.63% minmax(0, 1fr);
          /* The two halves of the L are separate boxes, so on viewports where
             the upper one lands on a fractional pixel a hairline of gold shows
             through the join. Overlapping by a pixel closes it. */
          margin-top: -1px;
        }
        .pj-quote-cell {
          position: relative;
          background: #fff;
          border-radius: 0 0 var(--pj-radius) var(--pj-radius);
          display: flex;
          /* Stretch, not centre: the cell's height is set by the portrait in
             the notch beside it, and in the comp the quote card very nearly
             fills that height rather than floating in the middle of it. */
          align-items: stretch;
          padding: 2.4cqw var(--pj-pad-x) var(--pj-pad-b);
          box-sizing: border-box;
        }
        /* The concave corner where the two blocks meet: a radius-square of white
           with a quarter circle taken out of it, so the panel curves away from
           the notch instead of turning a hard 90 degrees. */
        .pj-quote-cell::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 0;
          width: var(--pj-radius);
          height: var(--pj-radius);
          background: radial-gradient(
            circle at 100% 100%,
            transparent 0 var(--pj-radius),
            #fff var(--pj-radius) 100%
          );
        }

        /* No panel of its own — the welcome address sits straight on the white,
           with the marks above and below the words rather than either side of
           them, so the three parts read as one group. */
        .pj-quote {
          margin: 0;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.2cqw;
          padding: 1.5cqw;
        }
        .pj-quote-mark {
          display: block;
          flex-shrink: 0;
          align-self: flex-start;
          width: max(12px, 2.4cqw);
          /* currentColor on the glyph, so the tone is set once here. */
          color: rgba(45, 35, 25, 0.34);
        }
        .pj-quote-mark :global(svg) {
          display: block;
          width: 100%;
          height: auto;
        }
        .pj-quote-mark-close {
          align-self: flex-end;
          transform: rotate(180deg);
        }
        /* Set in the same face the welcome address was already in, so moving it
           here changes where it sits and nothing else about it. */
        .pj-quote-text {
          margin: 0;
          min-width: 0;
          color: #2d2319;
          font-family: var(--font-roboto-slab), serif;
          font-weight: 400;
          font-size: max(11px, 2.23cqw);
          line-height: 1.3;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }

        /* Inset from the notch's top and left edges only — flush with its right
           and bottom, as in the comp. */
        .pj-portrait-cell {
          padding: 1.74cqw 0 0 2.27cqw;
          box-sizing: border-box;
        }
        .pj-portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 641 / 362;
          background: #0d0904;
          border-radius: var(--pj-radius);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* The source portrait is 777 x 1085 and this frame is close to square,
           so cover crops top and bottom. Centred, that crop takes the top of the
           wig off; pulling the focal point up to 6% leaves headroom above it and
           spends the whole crop on the gown instead. */
        .pj-portrait-img {
          height: 98.9%;
          aspect-ratio: 351 / 358;
          object-fit: cover;
          object-position: center 6%;
          border-radius: var(--pj-radius);
        }

        /* Narrow viewports pull the page gutter in so the panel — and with it
           everything measured against the panel — keeps as much width as the
           screen can give it. */
        @media (max-width: 700px) {
          .pj-inner {
            padding-left: max(8px, calc(var(--page-gutter) / 2));
            padding-right: max(8px, calc(var(--page-gutter) / 2));
          }
          /* The letterboxed notch is a desktop luxury. Everything in this panel
             is a percentage of the panel's own width, so on a phone the frame
             shrinks to about 173px and the portrait inside it — held to 55% of
             that by its own near-square ratio — lands at roughly 95px, which
             puts the subject's face at about 40px between two black bars. Here
             the frame takes the portrait's shape and the image fills it, so the
             same column carries a portrait nearly twice the size with no bars.
             The 6% focal point still does its job: the crop comes off the gown
             and leaves headroom above the wig. */
          .pj-portrait {
            aspect-ratio: 1 / 1;
          }
          .pj-portrait-img {
            width: 100%;
            height: 100%;
            aspect-ratio: auto;
          }
        }
      `}</style>
    </section>
  );
}
