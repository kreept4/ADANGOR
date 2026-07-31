"use client";

// Figma node 47:168. The about page opens on the practice's name block, then a
// dark band carrying the two headline figures and the firm's one-sentence
// summary. The portrait that used to sit here lives in the Managing Partner
// block further down the page.
//
// Type sizes are expressed as ratios of --fs-hero rather than as their own
// clamps, so the whole block rides the shared ladder in globals.css: it steps
// down to a smartwatch and up to a 100" boardroom panel without this file
// needing to know about either. The max() floors keep the small derived sizes
// legible at the bottom of that ladder, where a raw ratio would land under 8px.
const stats = [
  { figure: "37+", label: "Years of Practice" },
  { figure: "15+", label: "Practice Areas" },
];

export default function AboutHero() {
  return (
    <section className="ah">
      <header className="ah-head">
        <p className="ah-eyebrow">The Law Practice of</p>
        <h1 className="ah-title">Professor Zacchaeus Adangor, SAN</h1>
        {/* Post-nominals only. The comp restates the whole name here, which put
            it — and SAN with it — on the page twice inside twenty words, so the
            line read as a caption correcting the headline rather than adding to
            it. SAN stays above as the rank it is; the honours follow here. */}
        <p className="ah-sub">DSSRS, MCIArb (UK), KSC</p>
      </header>

      <div className="ah-band">
        <div className="ah-band-inner">
          <div className="ah-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="ah-stat">
                <span className="ah-stat-figure">{stat.figure}</span>
                <span className="ah-stat-mark" aria-hidden="true" />
                <span className="ah-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="ah-lede">
            <p className="ah-lede-text">
              Led by the Managing Partner, Prof. Zacchaeus Adangor, SAN, the firm
              brings together courtroom advocacy, public service and academic
              distinction under one practice.
            </p>
            <div className="ah-lede-rule" aria-hidden="true" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .ah {
          width: 100%;
          background: #fff;
          box-sizing: border-box;
          font-family: var(--font-instrument-sans), sans-serif;
        }

        /* Sits directly under the nav — the comp leaves a screen of white above
           this block, which reads as a mistake on a real page rather than as
           space, so the top padding is only enough to clear the nav card. */
        .ah-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(8px, 1.2vw, 18px);
          padding: clamp(14px, 2vw, 32px) var(--page-gutter)
            clamp(28px, 3.6vw, 56px);
          box-sizing: border-box;
        }
        .ah-eyebrow {
          margin: 0;
          color: #787878;
          font-weight: 400;
          font-size: max(11px, calc(var(--fs-hero) * 0.39));
          line-height: 1.5;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }
        .ah-title {
          margin: 0;
          color: #000;
          font-weight: 500;
          font-size: var(--fs-hero);
          line-height: 1.1;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        /* Opened up rather than tightened: this is now a string of abbreviations
           rather than prose, and the comp's negative tracking ran them together.
           Smaller too, since it no longer has to carry a name. */
        .ah-sub {
          margin: 0;
          color: #000;
          font-weight: 400;
          font-size: max(12px, calc(var(--fs-hero) * 0.4));
          line-height: 1.4;
          letter-spacing: 0.04em;
          max-width: 100%;
          overflow-wrap: break-word;
        }

        .ah-band {
          width: 100%;
          /* Same near-black the rest of the site uses for dark panels, rather
             than the comp's pure #000. */
          background: #0d0904;
          box-sizing: border-box;
        }
        .ah-band-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5.5vw, 96px);
          padding: clamp(32px, 4.4vw, 72px) var(--page-gutter)
            clamp(36px, 5vw, 80px);
          box-sizing: border-box;
        }

        .ah-stats {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(28px, 6.5vw, 94px);
        }
        .ah-stat {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1.1vw, 16px);
          min-width: 0;
        }
        .ah-stat-figure {
          color: #ffe4cc;
          font-weight: 500;
          font-size: max(22px, calc(var(--fs-hero) * 0.6));
          line-height: 1.1;
        }
        .ah-stat-mark {
          width: clamp(28px, 3.2vw, 46px);
          height: 1px;
          background: rgba(255, 228, 204, 0.55);
        }
        .ah-stat-label {
          color: #e5e5e5;
          font-weight: 400;
          font-size: var(--fs-lead);
          line-height: 1.4;
        }

        /* Held to the right of the band and short of its full width, as in the
           comp, so the figures and the sentence read as two separate columns of
           information rather than one wall of text. */
        .ah-lede {
          align-self: flex-end;
          width: 75.7%;
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 2.2vw, 32px);
        }
        .ah-lede-text {
          margin: 0;
          /* One colour throughout. The comp alternates two tones mid-sentence,
             which reads as an accident rather than as emphasis. */
          color: #e1d6cb;
          font-weight: 400;
          font-size: max(13px, calc(var(--fs-hero) * 0.49));
          line-height: 1.5;
          letter-spacing: -0.04em;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }
        .ah-lede-rule {
          width: 100%;
          height: 2px;
          background: rgba(225, 214, 203, 0.45);
        }

        /* Tablets and below: the sentence takes the full band, since there is no
           longer a second column for it to sit beside. */
        @media (max-width: 900px) {
          .ah-lede {
            align-self: stretch;
            width: 100%;
          }
          .ah-band-inner {
            gap: clamp(28px, 5vw, 48px);
          }
        }

        @media (max-width: 480px) {
          .ah-stats {
            gap: 24px 32px;
          }
        }
      `}</style>
    </section>
  );
}
