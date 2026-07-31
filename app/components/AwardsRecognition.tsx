"use client";

// The honours block that used to sit at the foot of the "A Legacy of Diligence
// and Integrity" section. That section's heading and timeline card have been
// replaced by AboutHero + ProfessionalJourney, so what remains — the watchword
// tabs and the awards strip — lives here under its own heading.

// The tabs share a top edge and differ only in how far each one hangs below it,
// so the bottom edge steps down left to right — tall, taller, tallest — and the
// row reads as a diagonal. bottomPad is the full bottom padding, not an offset.
const valueTabs = [
  { word: "JUSTICE", bottomPad: "0.91cqw" },
  { word: "HONESTY", bottomPad: "2.58cqw" },
  { word: "INTEGRITY", bottomPad: "4.24cqw" },
];

// Each honour split into the award itself and the body that conferred it, so
// the ORG line on the card carries the organisation rather than repeating the
// title. Order follows the list as supplied.
const awards = [
  {
    title: "Special Recognition Award",
    org: "Nigerian Bar Association, Port Harcourt Branch",
  },
  { title: "Award of Excellence", org: "Rivers Working Group" },
  { title: "Patron", org: "Ataba Students Union (ASU) Worldwide" },
  { title: "Lifetime Achievement Award", org: "Ijaw National Congress" },
  {
    title: "Most Outstanding Personality Award",
    org: "National Union of Rivers State Students",
  },
  {
    title: "Most Influential Rivers Personality Award",
    org: "National Union of Rivers State Students, Rivers State University Branch",
  },
  {
    title: "Award of Honour as the 1st Attorney General from Andoni",
    org: "Obolo Lawyers Forum",
  },
  {
    title: "Merit Award for Outstanding Achievement as a Professor of Law",
    org: "Nigerian Law School Class of ’89",
  },
  { title: "Award of Honour", org: "NBA Bori Branch" },
  {
    title: "Merit Award for Service to Humanity",
    org: "Rivers Community, Abuja",
  },
  {
    title: "Rivers Hero of Democracy Award",
    org: "Family Love 97.7FM, Port Harcourt",
  },
  {
    title: "Award of Meritorious Service as Member of the 2019–2023 Council",
    org: "Council of Legal Education, Nigerian Law School",
  },
  {
    title: "Patron, Boys Brigade Nigeria",
    org: "Rivers State Council, Metropolitan Battalion Council",
  },
];

// Native size is 126.36 x 225.173; the ticker cards render it small, so the
// box is a prop rather than a hard-coded pair of attributes.
function TrophyIcon({ width = 126.36 }: { width?: number }) {
  const height = (width * 225.173) / 126.36;
  return (
    <svg width={width} height={height} viewBox="0 0 127 226" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.5226 95.3281C66.5226 95.3281 68.2199 158.925 83.4949 158.925H42.8633C58.1383 158.925 59.8357 95.3281 59.8357 95.3281H66.5226Z" fill="url(#paint0_linear_646_22327)" />
      <path d="M32.2656 167.759C32.2656 162.88 36.2203 158.926 41.0986 158.926H85.2634C90.1418 158.926 94.0964 162.88 94.0964 167.759V173.058C94.0964 177.937 90.1418 181.891 85.2634 181.891H41.0986C36.2203 181.891 32.2656 177.937 32.2656 173.058V167.759Z" fill="url(#paint1_linear_646_22327)" />
      <path d="M50.5069 16.7785C56.0273 5.59283 58.7876 0 63.1802 0C67.5729 0 70.3331 5.59283 75.8536 16.7785L81.9575 29.1463C83.5682 32.41 84.3736 34.0419 85.7848 35.0671C87.196 36.0924 88.9968 36.3541 92.5985 36.8775L106.247 38.8607C118.591 40.6544 124.764 41.5513 126.121 45.7289C127.478 49.9066 123.012 54.26 114.08 62.9668L104.204 72.5938C101.597 75.1342 100.294 76.4044 99.7552 78.0634C99.2161 79.7223 99.5238 81.5159 100.139 85.1031L102.47 98.6966C104.579 110.991 105.633 117.138 102.08 119.72C98.526 122.302 93.0055 119.4 81.9646 113.595L69.7568 107.177C66.5353 105.483 64.9245 104.637 63.1802 104.637C61.4359 104.637 59.8251 105.483 56.6037 107.177L44.3958 113.595C33.3549 119.4 27.8344 122.302 24.2807 119.72C20.727 117.138 21.7813 110.991 23.8899 98.6966L26.2214 85.1031C26.8367 81.5159 27.1443 79.7223 26.6053 78.0634C26.0662 76.4044 24.7631 75.1342 22.1569 72.5938L12.2806 62.9668C3.34824 54.26 -1.11791 49.9066 0.239489 45.7289C1.59689 41.5513 7.76897 40.6544 20.1131 38.8607L33.7619 36.8775C37.3636 36.3541 39.1645 36.0924 40.5757 35.0671C41.9868 34.0419 42.7922 32.41 44.403 29.1463L50.5069 16.7785Z" fill="url(#paint2_linear_646_22327)" />
      <path d="M94.0974 170.406C98.9757 170.406 102.93 174.361 102.93 179.239V216.338C102.93 221.216 98.9757 225.17 94.0974 225.17H32.2666C27.3882 225.17 23.4336 221.216 23.4336 216.338V179.239C23.4336 174.361 27.3882 170.406 32.2666 170.406H94.0974ZM41.0995 183.656C38.6604 183.656 36.683 185.633 36.683 188.072V210.154C36.683 212.594 38.6604 214.571 41.0995 214.571H85.2644C87.7035 214.571 89.6809 212.594 89.6809 210.154V188.072C89.6809 185.633 87.7035 183.656 85.2644 183.656H41.0995Z" fill="url(#paint3_linear_646_22327)" />
      <path d="M10.3945 217.223C10.3945 212.833 13.9537 209.273 18.3442 209.273H108.44C112.831 209.273 116.39 212.833 116.39 217.223C116.39 221.614 112.831 225.173 108.44 225.173H18.3442C13.9537 225.173 10.3945 221.614 10.3945 217.223Z" fill="url(#paint4_linear_646_22327)" />
      <defs>
        <linearGradient id="paint0_linear_646_22327" x1="64.2483" y1="95.3283" x2="64.2484" y2="163.311" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FF8D28" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint1_linear_646_22327" x1="63.1812" y1="158.926" x2="63.1812" y2="181.891" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint2_linear_646_22327" x1="67.1317" y1="-8.89993" x2="67.1317" y2="151.615" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FACB31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint3_linear_646_22327" x1="63.1822" y1="170.406" x2="63.1822" y2="225.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint4_linear_646_22327" x1="63.3927" y1="209.273" x2="63.3927" y2="225.173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AwardsRecognition() {
  return (
    <section
      className="w-full bg-white"
      style={{
        // Same gutter token as the homepage sections, so this page lines up
        // with them instead of sitting further in behind its own padding.
        padding:
          "clamp(28px, 5vw, 72px) var(--page-gutter) clamp(48px, 10vw, 128px)",
      }}
    >
      <div className="aw-body">
        <div className="aw-head-row">
          <div className="aw-tabs">
            {valueTabs.map(({ word, bottomPad }, i) => {
              return (
                <div
                  key={i}
                  className="aw-tab"
                  style={{ paddingBottom: bottomPad }}
                >
                  {word.split("").map((letter, j) => (
                    <span key={j} className="aw-tab-letter">
                      {letter}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="aw-head-copy">
            <h3 className="aw-heading">Awards and Recognition</h3>
            <p className="aw-intro">
              A showcase of distinguished honours recognizing exceptional legal advocacy, constitutional leadership, public service, and enduring contributions to the administration of justice and national development.
            </p>
          </div>
        </div>

        {/* Thirteen honours are too many to lay out as a static row, so they
            run as a continuous horizontal strip — a headline ticker rather
            than a grid. The track holds the set twice over and travels
            exactly one set's width, which makes the wrap seamless; the
            duplicate is hidden from assistive tech. Card spacing is a
            margin, not a flex gap, so "one set's width" stays exact. */}
        <div className="aw-ticker">
          <div className="aw-track">
            {[0, 1].map((pass) => (
              <div className="aw-set" key={pass} aria-hidden={pass === 1 || undefined}>
                {awards.map((award, i) => (
                  <article className="aw-card" key={`${pass}-${i}`}>
                    <TrophyIcon width={54} />
                    <h4 className="aw-title">{award.title}</h4>
                    <div className="aw-foot">
                      <div className="aw-rule" />
                      <div className="aw-org-row">
                        <span className="aw-org-label">ORG:</span>
                        <span className="aw-org">{award.org}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Same approach as the journey panel: the block keeps its layout at
           every width — tabs left, heading right, cards the same shape and the
           same number across — and simply gets smaller. Sizes are percentages
           of this block's own width (cqw) rather than of the viewport, taken
           from what the block measures at a 1440px desktop, so a phone gets the
           same drawing at a smaller scale rather than a rearranged one.

           Text holds floors, because a true proportional size would drop under
           8px on a phone. */
        .aw-body {
          width: 100%;
          container-type: inline-size;
          display: flex;
          flex-direction: column;
          gap: 4.85cqw;
        }

        .aw-head-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 3.03cqw;
          margin-top: 3.03cqw;
        }
        /* Held as a row at every width — stacking it was what made the tabs run
           up the page on a phone. */
        .aw-tabs {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          flex-shrink: 0;
          gap: 1.59cqw;
        }
        .aw-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 242, 178, 0.66);
          border-radius: 0.45cqw;
          padding: 0.91cqw 1.82cqw 0 1.82cqw;
        }
        .aw-tab-letter {
          font-family: var(--font-roboto-slab), serif;
          color: #533700;
          font-size: max(9px, 2.12cqw);
          font-weight: 400;
          line-height: 1.2;
          text-align: center;
        }

        /* Takes what the tabs leave rather than a flat 100% of the row, which
           overflowed it by exactly the width of the tabs plus their gap. */
        .aw-head-copy {
          display: flex;
          flex-direction: column;
          gap: 1.21cqw;
          flex: 1 1 auto;
          min-width: 0;
          align-self: stretch;
        }
        .aw-heading {
          margin: 0;
          width: 100%;
          font-family: var(--font-roboto-slab), serif;
          color: #000;
          font-weight: 400;
          font-size: max(15px, 3.64cqw);
          line-height: 1.8;
          text-align: right;
          text-transform: uppercase;
        }
        .aw-intro {
          margin: 0;
          width: 100%;
          font-family: var(--font-roboto-slab), serif;
          color: #3f3f3f;
          font-weight: 400;
          font-size: max(10px, 1.82cqw);
          line-height: 1.7066;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }

        .aw-ticker {
          width: 100%;
          overflow: hidden;
          background: #e0b117;
          border-radius: 0.61cqw;
          padding: 2.42cqw 0;
          box-sizing: border-box;
        }
        .aw-track {
          display: flex;
          width: max-content;
          animation: aw-scroll 70s linear infinite;
        }
        .aw-set {
          display: flex;
        }
        /* Pausing on hover or keyboard focus lets a reader actually finish a
           card instead of chasing it across the strip. */
        .aw-ticker:hover .aw-track,
        .aw-ticker:focus-within .aw-track {
          animation-play-state: paused;
        }
        @keyframes aw-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .aw-card {
          flex: 0 0 auto;
          box-sizing: border-box;
          width: 25cqw;
          margin-right: 2.42cqw;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.1cqw;
          background: #fff;
          border-radius: 1.82cqw;
          padding: 1.6cqw 0;
        }
        /* TrophyIcon renders its own svg, so scope past styled-jsx to keep the
           trophy the same fraction of the card at every width. The trophy is
           tall for its width — at the size it was set, it alone accounted for
           about a quarter of the card's height. */
        .aw-card :global(svg) {
          width: 2.4cqw;
          min-width: 18px;
          height: auto;
        }
        .aw-title {
          margin: 0;
          flex: 1 1 auto;
          padding: 0 1.82cqw;
          font-family: var(--font-roboto-slab), serif;
          color: #000;
          font-weight: 600;
          font-size: max(9px, 1.44cqw);
          line-height: 1.35;
          text-align: center;
        }
        .aw-foot {
          display: flex;
          flex-direction: column;
          gap: 0.9cqw;
          width: 100%;
          padding: 0 1.82cqw;
          box-sizing: border-box;
        }
        .aw-rule {
          width: 100%;
          border-top: 1px solid rgba(0, 0, 0, 0.15);
        }
        .aw-org-row {
          display: flex;
          align-items: flex-start;
          gap: 1.06cqw;
          width: 100%;
        }
        .aw-org-label {
          flex-shrink: 0;
          font-family: var(--font-roboto-slab), serif;
          color: #000;
          font-weight: 500;
          font-size: max(8px, 1.14cqw);
          line-height: 1.35;
          white-space: nowrap;
        }
        .aw-org {
          flex: 1 1 auto;
          font-family: var(--font-roboto-slab), serif;
          color: #5e5e5e;
          font-weight: 500;
          font-size: max(8px, 1.14cqw);
          line-height: 1.35;
          text-align: right;
          text-transform: uppercase;
        }

        /* No autoplay when motion is unwelcome — the strip becomes a plain
           horizontal scroller the reader drives themselves. */
        @media (prefers-reduced-motion: reduce) {
          .aw-ticker {
            overflow-x: auto;
          }
          .aw-track {
            animation: none;
          }
          .aw-set:last-child {
            display: none;
          }
        }

        /* Narrow viewports pull the page gutter in, so the block — and with it
           everything measured against the block — keeps as much width as the
           screen can give it. */
        @media (max-width: 700px) {
          .aw-body {
            margin: 0 calc(-1 * max(0px, var(--page-gutter) - 8px));
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
