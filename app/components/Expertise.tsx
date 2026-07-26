"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { practiceAreas } from "../data/expertise";

// Flat falloff: the row under the pointer (or the open row) stays sharp and the
// rest recede with distance. Same read as the wheel, without the rotation.
function falloff(index: number, focus: number | null) {
  if (focus === null) return { filter: "none", opacity: 1 };
  const distance = Math.abs(index - focus);
  if (distance === 0) return { filter: "none", opacity: 1 };
  // Softened deliberately: with fifteen rows a steeper curve leaves the far
  // end of the list unreadable while the eye is still scanning it.
  return {
    filter: `blur(${Math.min(0.75 * distance, 2.8).toFixed(2)}px)`,
    opacity: Math.max(1 - 0.12 * distance, 0.45),
  };
}

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const focus = hoverIndex ?? openIndex;

  return (
    <section className="xp-section">
      <div className="xp-inner">
        <div className="xp-head">
          <h2 className="xp-title">Our Expertise</h2>
          <p className="xp-intro">
            Four decades of principled practice across Nigeria&apos;s courts and
            regulators. From election petitions to energy and maritime matters,
            every brief is met with the same diligence and discretion.
          </p>
        </div>

        <ul
          className="xp-list"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {practiceAreas.map((area, i) => {
            const isOpen = openIndex === i;
            const { filter, opacity } = falloff(i, focus);

            return (
              <li
                key={area.title}
                className={`xp-item ${isOpen ? "is-open" : ""}`}
                style={{ filter, opacity }}
                onMouseEnter={() => setHoverIndex(i)}
                onFocus={() => setHoverIndex(i)}
                onBlur={() => setHoverIndex(null)}
              >
                <button
                  type="button"
                  className="xp-row"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="xp-row-top">
                    <span className="xp-name">{area.title}</span>
                    <span className="xp-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="xp-blurb">{area.blurb}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="xp-detail">{area.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>{`
        .xp-section {
          width: 100%;
          background: #fff;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .xp-inner {
          width: 100%;
          padding: clamp(56px, 6vw, 96px) var(--page-gutter)
            clamp(48px, 5.4vw, 88px);
          box-sizing: border-box;
        }
        .xp-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: clamp(24px, 4vw, 64px);
          margin-bottom: clamp(40px, 5vw, 80px);
        }
        .xp-title {
          margin: 0;
          color: #000;
          font-size: var(--fs-h2);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .xp-intro {
          margin: 8px 0 0;
          max-width: 64ch;
          color: #525252;
          font-size: var(--fs-micro);
          font-weight: 400;
          line-height: 1.65;
          flex-shrink: 0;
        }

        .xp-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .xp-item {
          border-bottom: 1px solid #d9d9d9;
          transition: filter 0.38s ease, opacity 0.38s ease;
          will-change: filter, opacity;
        }
        .xp-row {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 16px;
          padding: clamp(14px, 1.6vw, 22px) 0 clamp(18px, 1.7vw, 24px);
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          color: inherit;
        }
        .xp-row-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: clamp(24px, 8vw, 190px);
        }
        .xp-name {
          font-size: var(--fs-h3);
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: -0.03em;
          color: #000;
          transition: color 0.25s ease;
        }
        .xp-num {
          font-family: inherit;
          font-size: var(--fs-h3);
          font-weight: 400;
          line-height: 1.38;
          letter-spacing: -0.01em;
          color: #191919;
          opacity: 0.4;
          flex-shrink: 0;
          transition: opacity 0.25s ease, color 0.25s ease;
        }
        .xp-blurb {
          display: block;
          max-width: 68ch;
          color: #525252;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.69;
          letter-spacing: -0.04em;
        }

        .xp-item.is-open .xp-name,
        .xp-row:hover .xp-name {
          color: #cd9610;
        }
        .xp-item.is-open .xp-num {
          opacity: 1;
          color: #cd9610;
        }

        .xp-detail {
          margin: 0;
          padding: 0 0 clamp(20px, 2.2vw, 30px);
          /* Wide enough that each write-up settles at three lines. */
          max-width: 88ch;
          color: #191919;
          font-size: var(--fs-body);
          font-weight: 400;
          line-height: 1.75;
          letter-spacing: -0.01em;
          border-left: 1px solid #cd9610;
          padding-left: clamp(14px, 1.4vw, 20px);
        }

        /* Tablets — intro drops below the heading. */
        @media (max-width: 1024px) {
          .xp-head {
            flex-direction: column;
            gap: 20px;
          }
          .xp-intro {
            max-width: 72ch;
          }
        }

        @media (max-width: 640px) {
          .xp-row-top {
            gap: 16px;
          }
          .xp-blurb {
            font-size: var(--fs-lead);
            line-height: 1.6;
          }
        }

        /* Blur is a decorative depth cue; drop it when motion is unwelcome. */
        @media (prefers-reduced-motion: reduce) {
          .xp-item {
            filter: none !important;
            opacity: 1 !important;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
