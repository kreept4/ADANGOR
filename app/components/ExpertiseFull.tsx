"use client";

import { useState } from "react";
import { practiceAreas } from "../data/expertise";

// Same depth cue as the homepage section: the row under the pointer stays
// sharp and the rest recede with distance. The curve is gentler here because
// each row carries two paragraphs rather than one line, so the neighbours have
// to stay readable while the eye is still scanning the list.
function falloff(index: number, focus: number | null) {
  if (focus === null) return { filter: "none", opacity: 1 };
  const distance = Math.abs(index - focus);
  if (distance === 0) return { filter: "none", opacity: 1 };
  return {
    filter: `blur(${Math.min(0.6 * distance, 2.4).toFixed(2)}px)`,
    opacity: Math.max(1 - 0.1 * distance, 0.5),
  };
}

export default function ExpertiseFull() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="xf-section">
      <div className="xf-inner">
        <header className="xf-head">
          <h1 className="xf-title">Our Expertise</h1>
          <p className="xf-intro">
            Four decades of principled practice across Nigeria&apos;s courts and
            regulators. From election petitions to energy and maritime matters,
            every brief is met with the same diligence and discretion.
          </p>
        </header>

        <div className="xf-rule" />

        <ul className="xf-list" onMouseLeave={() => setHoverIndex(null)}>
          {practiceAreas.map((area, i) => {
            const { filter, opacity } = falloff(i, hoverIndex);

            return (
              <li
                key={area.title}
                className="xf-item"
                style={{ filter, opacity }}
                onMouseEnter={() => setHoverIndex(i)}
                onFocus={() => setHoverIndex(i)}
                onBlur={() => setHoverIndex(null)}
                tabIndex={0}
              >
                <div className="xf-row-top">
                  <h2 className="xf-name">{area.title}</h2>
                  <span className="xf-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="xf-blurb">{area.blurb}</p>

                <div className="xf-writeup">
                  {area.writeup.map((paragraph, p) => (
                    <p key={p}>{paragraph}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .xf-section {
          width: 100%;
          background: #fff;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .xf-inner {
          width: 100%;
          padding: clamp(48px, 5.6vw, 96px) var(--page-gutter)
            clamp(56px, 6vw, 104px);
          box-sizing: border-box;
        }

        .xf-head {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.2vw, 16px);
          margin-bottom: clamp(28px, 3.2vw, 48px);
        }
        .xf-title {
          margin: 0;
          color: #000;
          font-size: var(--fs-hero);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }
        .xf-intro {
          margin: 0;
          max-width: 66ch;
          color: #525252;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.65;
        }
        .xf-rule {
          width: 100%;
          height: 1px;
          background: #cd9610;
          margin-bottom: clamp(20px, 2.4vw, 36px);
        }

        .xf-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .xf-item {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1vw, 14px);
          padding: clamp(24px, 2.6vw, 40px) 0;
          border-bottom: 1px solid #d9d9d9;
          transition: filter 0.38s ease, opacity 0.38s ease;
          will-change: filter, opacity;
          outline: none;
        }
        .xf-item:focus-visible {
          outline: 2px solid #cd9610;
          outline-offset: 6px;
        }

        .xf-row-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: clamp(20px, 6vw, 120px);
        }
        .xf-name {
          margin: 0;
          font-size: var(--fs-h3);
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.03em;
          color: #000;
          transition: color 0.25s ease;
        }
        .xf-num {
          font-size: var(--fs-h3);
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: #191919;
          opacity: 0.35;
          flex-shrink: 0;
          transition: opacity 0.25s ease, color 0.25s ease;
        }
        .xf-item:hover .xf-name,
        .xf-item:focus-visible .xf-name {
          color: #cd9610;
        }
        .xf-item:hover .xf-num,
        .xf-item:focus-visible .xf-num {
          opacity: 1;
          color: #cd9610;
        }

        .xf-blurb {
          margin: 0;
          max-width: 68ch;
          color: #525252;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: -0.03em;
        }

        /* Two paragraphs, capped in measure so each settles at four or five
           lines rather than running the full width of a large display. */
        .xf-writeup {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1vw, 14px);
          max-width: 92ch;
          margin-top: clamp(4px, 0.6vw, 8px);
          padding-left: clamp(14px, 1.4vw, 20px);
          border-left: 1px solid #cd9610;
        }
        .xf-writeup p {
          margin: 0;
          color: #191919;
          font-size: var(--fs-body);
          font-weight: 400;
          line-height: 1.8;
          letter-spacing: -0.01em;
        }

        @media (max-width: 640px) {
          .xf-row-top {
            gap: 16px;
          }
          .xf-writeup {
            padding-left: 12px;
          }
        }

        /* Blur is decorative depth only; drop it when motion is unwelcome, and
           on touch devices where there is no pointer to focus a row with. */
        @media (hover: none), (prefers-reduced-motion: reduce) {
          .xf-item {
            filter: none !important;
            opacity: 1 !important;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
