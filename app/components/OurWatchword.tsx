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
          background: var(--cream);
          font-family: var(--font-ui);
          box-sizing: border-box;
        }
        .ww-inner {
          width: 100%;
          padding: clamp(48px, 5vw, 88px) var(--page-gutter)
            clamp(64px, 7vw, 110px);
          box-sizing: border-box;
        }
        .ww-heading {
          margin: 0;
          color: var(--brown-ink);
          font-size: var(--fs-h2);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.03em;
          text-align: right;
        }
        .ww-rule {
          width: 100%;
          height: 1px;
          background: var(--gold-mute);
          margin-top: clamp(20px, 2.9vw, 42px);
        }

        .ww-grid {
          position: relative;
          display: grid;
          grid-template-columns: 18% minmax(0, 58%);
          justify-content: space-between;
          padding-top: clamp(48px, 6vw, 96px);
          gap: clamp(24px, 4vw, 48px);
        }
        .ww-vrule {
          position: absolute;
          left: 26%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: var(--gold-mute);
        }

        .ww-stats {
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 6vw, 96px);
          padding-top: clamp(12px, 2vw, 24px);
        }
        .ww-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 18px;
        }
        .ww-stat-figure {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }
        .ww-stat-num {
          color: var(--brown-ink);
          font-size: clamp(32px, calc(3.4vw + 4px), 52px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .ww-stat-mark {
          width: 46px;
          height: 1px;
          background: var(--gold-mute);
        }
        .ww-stat-label {
          color: var(--taupe-text);
          font-size: var(--fs-micro);
          font-weight: 500;
          letter-spacing: 0.08em;
          text-align: right;
        }

        .ww-content {
          display: flex;
          flex-direction: column;
          gap: clamp(36px, 4.5vw, 64px);
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
          color: var(--taupe-text);
          font-size: var(--fs-small);
          font-weight: 400;
        }
        .ww-word-mark {
          width: 46px;
          height: 1px;
          background: var(--gold-mute);
          margin-bottom: 6px;
        }
        .ww-word-label {
          color: var(--brown-accent);
          font-size: var(--fs-lead);
          font-weight: 500;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .ww-copy {
          display: flex;
          flex-direction: column;
          gap: 1.6em;
        }
        .ww-copy p {
          margin: 0;
          max-width: 68ch;
          color: var(--brown-ink);
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.7;
          letter-spacing: -0.02em;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }

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
        }

        @media (max-width: 560px) {
          .ww-stats {
            gap: 32px;
          }
          .ww-words {
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
