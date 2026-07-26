"use client";

// Figma node 522:4363 ("06"): an orange panel carrying the managing partner's
// words sits beside a dark card holding his portrait. Colours, radii and the
// portrait's inset within its card are taken straight from the comp; the
// two-up row collapses to a stack below 1024px.
export default function ManagingPartner() {
  return (
    <section className="mp-section">
      <div className="mp-row">
        <div className="mp-quote-card">
          <div className="mp-quote-inner">
            <p className="mp-label">The Managing Partner</p>

            <blockquote className="mp-quote-box">
              <span className="mp-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="mp-quote-text">
                To build an outstanding legal practice with integrity, honesty,
                and diligence.
              </p>
              <span className="mp-mark mp-mark-close" aria-hidden="true">
                &ldquo;
              </span>
            </blockquote>
          </div>
        </div>

        <div className="mp-photo-card">
          <img
            src="/images/hero-judge.jpg"
            alt="Prof. Zacchaeus Adangor, SAN, Managing Partner"
            className="mp-photo"
          />
          {/* Left-weighted scrim from the comp — it is what makes the name
              legible where it crosses the portrait. */}
          <div className="mp-scrim" aria-hidden="true" />
          <div className="mp-caption">
            <p className="mp-caption-name">Prof. Z Adangor</p>
            <p className="mp-caption-role">Managing Partner</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mp-section {
          width: 100%;
          background: #fff;
          box-sizing: border-box;
          padding: clamp(24px, 3vw, 48px) var(--page-gutter);
        }
        .mp-row {
          display: grid;
          /* 656 : 729 in the 1440 comp. */
          grid-template-columns: minmax(0, 656fr) minmax(0, 729fr);
          gap: clamp(16px, 1.8vw, 26px);
          align-items: stretch;
          width: 100%;
        }

        .mp-quote-card {
          background: #e47a36;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          /* The comp anchors the copy to the lower half of the panel rather
             than centring it. */
          align-items: flex-end;
          min-height: clamp(340px, 52vw, 860px);
          padding: clamp(20px, 3.6vw, 52px) clamp(18px, 2.2vw, 32px)
            clamp(24px, 9vw, 130px);
          box-sizing: border-box;
        }
        .mp-quote-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.7vw, 24px);
          width: 100%;
        }
        .mp-label {
          margin: 0;
          font-family: var(--font-roboto-slab), serif;
          color: #fff;
          font-weight: 400;
          font-size: clamp(14px, 1.7vw, 24px);
          line-height: 1.707;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .mp-quote-box {
          display: flex;
          align-items: flex-start;
          gap: clamp(10px, 1.7vw, 24px);
          margin: 0;
          background: #9e460e;
          border-radius: 21px;
          padding: clamp(18px, 2.2vw, 32px) clamp(14px, 1.7vw, 24px);
        }
        .mp-mark {
          flex-shrink: 0;
          font-family: var(--font-roboto-slab), serif;
          color: #fff;
          font-weight: 400;
          font-size: clamp(24px, 3.3vw, 48px);
          line-height: 1;
        }
        .mp-mark-close {
          transform: rotate(180deg) scaleY(-1);
        }
        .mp-quote-text {
          margin: 0;
          flex: 1 1 auto;
          min-width: 0;
          font-family: var(--font-roboto-slab), serif;
          color: #fff;
          font-weight: 400;
          font-size: clamp(17px, 2.2vw, 32px);
          line-height: 1.2;
        }

        .mp-photo-card {
          position: relative;
          background: #140907;
          border-radius: 16px;
          overflow: hidden;
          min-height: clamp(340px, 52vw, 860px);
        }
        /* Inset taken from the comp: portrait 574.723 x 678 inside a 729 x 860
           card, sitting right of centre and above it. Width and height are set
           explicitly rather than by opposing left/right offsets — on a replaced
           element an auto width resolves to the image's intrinsic size and the
           opposite offset is simply dropped, which rendered the portrait
           oversized and clipped. 78.83% is (100 − 14.27 − 6.9) horizontally and
           (100 − 6.4 − 14.77) vertically, which land on the same figure. */
        .mp-photo {
          position: absolute;
          left: 14.27%;
          top: 6.4%;
          width: 78.83%;
          height: 78.83%;
          object-fit: cover;
          object-position: center top;
          border-radius: 12.614px;
        }
        .mp-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90.75deg,
            rgba(0, 0, 0, 0.66) 22.519%,
            rgba(51, 51, 51, 0.33) 51.201%,
            rgba(102, 102, 102, 0) 62.818%
          );
          pointer-events: none;
        }
        .mp-caption {
          position: absolute;
          left: clamp(16px, 3vw, 44px);
          bottom: clamp(18px, 3vw, 48px);
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 70%;
        }
        .mp-caption-name {
          margin: 0;
          font-family: var(--font-merriweather), serif;
          color: #fff;
          font-weight: 700;
          font-size: clamp(15px, 1.7vw, 24px);
          line-height: 1.78;
        }
        .mp-caption-role {
          margin: 0;
          font-family: var(--font-merriweather), serif;
          color: #ffebdf;
          font-weight: 400;
          font-size: clamp(13px, 1.4vw, 20px);
          line-height: 1.78;
        }

        /* Stacked: the portrait card takes the comp's own 729:860 proportion so
           it never collapses to a letterbox. */
        @media (max-width: 1023px) {
          .mp-row {
            grid-template-columns: minmax(0, 1fr);
          }
          .mp-quote-card {
            min-height: 0;
            align-items: flex-start;
            padding: clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px);
          }
          .mp-photo-card {
            min-height: 0;
            aspect-ratio: 729 / 860;
            max-height: 78svh;
          }
        }

        @media (max-width: 480px) {
          .mp-photo-card {
            aspect-ratio: 4 / 5;
          }
          .mp-quote-box {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
