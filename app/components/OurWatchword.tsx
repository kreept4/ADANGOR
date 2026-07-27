"use client";

const stats = [
  { figure: "37+", label: "YEARS OF PRACTICE" },
  { figure: "15+", label: "PRACTICE AREAS" },
];

const watchwords = [
  { num: "01", label: "INTEGRITY" },
  { num: "02", label: "HONESTY" },
  { num: "03", label: "JUSTICE" },
];

export default function OurWatchword() {
  return (
    <section className="ww-section">
      <div className="ww-inner">
        <h2 className="ww-heading">Our Watchword</h2>
        <div className="ww-rule" />

        <div className="ww-grid">
          <span className="ww-vrule" aria-hidden="true" />

          <div className="ww-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="ww-stat">
                <div className="ww-stat-figure">
                  <span className="ww-stat-num">{stat.figure}</span>
                  <span className="ww-stat-mark" />
                </div>
                <span className="ww-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="ww-content">
            <div className="ww-words">
              {watchwords.map((word) => (
                <div key={word.label} className="ww-word">
                  <span className="ww-word-num">{word.num}</span>
                  <span className="ww-word-mark" />
                  <span className="ww-word-label">{word.label}</span>
                </div>
              ))}
            </div>

            <div className="ww-copy">
              <p>
                Our name goes on every brief we file, so the standard never
                moves. Clients bring us matters that decide how a business
                trades, how a community is governed, or how a life turns out,
                and each one is prepared as though it were the only file on the
                desk.
              </p>
              <p>
                Almost four decades in Nigeria&apos;s courts taught us that the quiet
                work is what wins. We read the whole record, we tell you plainly
                where you stand even when it costs us the instruction, and we
                say the same thing in chambers that we say in open court.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ww-section {
          width: 100%;
          background: #f7f8d9;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .ww-inner {
          width: 100%;
          padding: clamp(36px, 3.4vw, 49px) var(--page-gutter)
            clamp(48px, 5.1vw, 74px);
          box-sizing: border-box;
        }
        .ww-heading {
          margin: 0;
          color: #000;
          font-size: var(--fs-h2);
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.03em;
          text-align: right;
        }
        .ww-rule {
          width: 100%;
          height: 1px;
          background: #cd9610;
          margin-top: clamp(20px, 2.9vw, 42px);
        }

        /* Two columns pinned to the outer edges; the gap between them carries
           the vertical gold rule at 24.5% of the content width, per Figma. */
        .ww-grid {
          position: relative;
          display: grid;
          grid-template-columns: 16.52% 55.07%;
          justify-content: space-between;
          padding-top: clamp(40px, 5.9vw, 85px);
        }
        .ww-vrule {
          position: absolute;
          left: 24.47%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #cd9610;
        }

        .ww-stats {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5.6vw, 80px);
          padding-top: clamp(24px, 3.9vw, 57px);
        }
        .ww-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }
        .ww-stat-figure {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .ww-stat-num {
          font-family: inherit;
          color: #000;
          font-size: var(--fs-h3);
          font-weight: 400;
          line-height: 1;
        }
        .ww-stat-mark {
          width: 46px;
          height: 1px;
          background: #cd9610;
        }
        .ww-stat-label {
          color: #383131;
          font-size: var(--fs-small);
          font-weight: 400;
          text-align: right;
        }

        .ww-content {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 4.2vw, 60px);
          min-width: 0;
        }
        .ww-words {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }
        .ww-word {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .ww-word-num {
          font-family: inherit;
          color: #383131;
          font-size: var(--fs-small);
          font-weight: 400;
        }
        .ww-word-mark {
          width: 46px;
          height: 1px;
          background: #cd9610;
          margin-bottom: 9px;
        }
        .ww-word-label {
          color: #cd9610;
          font-size: var(--fs-lead);
          font-weight: 500;
          white-space: nowrap;
        }

        .ww-copy {
          display: flex;
          flex-direction: column;
          gap: 1.69em;
        }
        .ww-copy p {
          margin: 0;
          /* Measured in ch so it scales with the type: matches the comp's
             727px column at 1440 and only bites on much wider screens, where
             the section itself still runs the full width. */
          max-width: 68ch;
          color: #000;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.69;
          letter-spacing: -0.05em;
        }

        /* Tablets — the rule and the stats column fold away; the stats become a
           row above the copy so nothing is stranded in a narrow gutter. */
        @media (max-width: 900px) {
          .ww-heading {
            text-align: left;
          }
          .ww-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ww-vrule {
            display: none;
          }
          .ww-stats {
            flex-direction: row;
            gap: 48px;
            padding-top: 0;
          }
          .ww-stat {
            align-items: flex-start;
          }
          .ww-stat-figure {
            align-items: flex-start;
          }
          .ww-stat-label {
            text-align: left;
          }
          .ww-words {
            justify-content: flex-start;
            gap: 48px;
            flex-wrap: wrap;
          }
          .ww-word {
            align-items: flex-start;
          }
          .ww-copy p {
            font-size: var(--fs-lead);
            letter-spacing: -0.02em;
          }
        }

        @media (max-width: 560px) {
          .ww-stats {
            gap: 32px;
          }
          .ww-words {
            gap: 28px;
          }
          .ww-copy p {
            font-size: var(--fs-lead);
          }
        }
      `}</style>
    </section>
  );
}
