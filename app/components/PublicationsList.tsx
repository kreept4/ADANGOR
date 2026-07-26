"use client";

import { useEffect, useRef } from "react";
import {
  articles,
  books,
  featured,
  parseCitation,
  type Entry,
} from "../data/publications";

// The featured record is a journal article in its own right and appears in no
// other list, so it heads the articles group rather than being dropped.
const groups: { key: string; label: string; entries: Entry[] }[] = [
  { key: "articles", label: "Journal Articles", entries: [featured, ...articles] },
  { key: "books", label: "Books & Book Chapters", entries: books },
];

export default function PublicationsList() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rows = rowsRef.current;

      if (reduced.matches) {
        rows.forEach((row) => {
          row?.style.setProperty("--t", "0");
          row?.style.setProperty("--s", "0");
        });
        return;
      }

      // When the list is its own scroll container the focus band is the middle
      // of that container; once the media query collapses it back into the page
      // flow, the viewport becomes the band instead.
      const isInnerScroller = scroller.scrollHeight > scroller.clientHeight + 1;
      const bandTop = isInnerScroller ? scroller.getBoundingClientRect().top : 0;
      const bandHeight = isInnerScroller ? scroller.clientHeight : window.innerHeight;
      const center = bandTop + bandHeight / 2;
      const span = Math.max(bandHeight / 2, 1);

      let activeIndex = 0;
      let activeDistance = Infinity;

      rows.forEach((row, i) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - center;
        const distance = Math.abs(offset);
        // Normalised 0 (dead centre) to 1 (edge of the band) — drives the fade,
        // while the signed form drives which way the row glides.
        const t = Math.min(distance / span, 1);
        row.style.setProperty("--t", t.toFixed(3));
        row.style.setProperty("--s", Math.max(-1, Math.min(1, offset / span)).toFixed(3));
        if (distance < activeDistance) {
          activeDistance = distance;
          activeIndex = i;
        }
      });

      rows.forEach((row, i) => row?.classList.toggle("is-active", i === activeIndex));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);

  let rowIndex = -1;

  return (
    <section className="pb-section">
      <div className="pb-inner">
        <header className="pb-head">
          <p className="pb-eyebrow">Prof. Z. Adangor (SAN) &amp; Co</p>
          <h1 className="pb-title">Publications</h1>
          <p className="pb-intro">
            Books, chapters and journal articles on Nigerian federalism,
            evidence, constitutional practice and natural resource governance.
          </p>
        </header>

        <div className="pb-rule" />

        <div className="pb-scroller" ref={scrollerRef}>
          {groups.map((group, g) => (
            <div className="pb-group" key={group.key}>
              {g > 0 && <div className="pb-split" aria-hidden="true" />}

              <div className="pb-group-head">
                <h2 className="pb-group-label">{group.label}</h2>
                <span className="pb-group-count">
                  {String(group.entries.length).padStart(2, "0")}
                </span>
              </div>

              <ol className="pb-list">
                {group.entries.map((entry, i) => {
                  const { authors, title, meta } = parseCitation(entry.citation);
                  rowIndex += 1;
                  const slot = rowIndex;

                  return (
                    <li
                      className="pb-row"
                      key={`${group.key}-${i}`}
                      ref={(el) => {
                        rowsRef.current[slot] = el;
                      }}
                    >
                      <span className="pb-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="pb-body">
                        <h3 className="pb-entry-title">{title}</h3>
                        <p className="pb-entry-meta">
                          {authors && <span className="pb-authors">{authors}</span>}
                          {authors && meta ? " · " : ""}
                          {meta}
                        </p>
                      </div>
                      <span className="pb-mark" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.5 14.5L14.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7 5.5H14.5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pb-section {
          width: 100%;
          background: #fffdf4;
          font-family: var(--font-instrument-sans), sans-serif;
          box-sizing: border-box;
        }
        .pb-inner {
          width: 100%;
          padding: clamp(48px, 5.6vw, 96px) var(--page-gutter)
            clamp(56px, 6vw, 104px);
          box-sizing: border-box;
        }

        .pb-head {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.2vw, 16px);
          margin-bottom: clamp(28px, 3.2vw, 48px);
        }
        .pb-eyebrow {
          margin: 0;
          color: #cd9610;
          font-size: var(--fs-micro);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .pb-title {
          margin: 0;
          color: #181100;
          font-size: var(--fs-hero);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }
        .pb-intro {
          margin: 0;
          max-width: 62ch;
          color: #6a5f43;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.65;
        }
        .pb-rule {
          width: 100%;
          height: 1px;
          background: #cd9610;
        }

        /* The list is its own scroll container on pointer devices, which is what
           gives the snap something to snap against without hijacking the page.
           Proximity rather than mandatory, so a deliberate flick is never
           yanked back. Scroll chaining is left on: reaching the end of the list
           carries straight on down the page. */
        .pb-scroller {
          margin-top: clamp(20px, 2.4vw, 36px);
          max-height: clamp(420px, 72svh, 780px);
          overflow-y: auto;
          scroll-snap-type: y proximity;
          scroll-behavior: smooth;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 56px,
            #000 calc(100% - 56px),
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0,
            #000 56px,
            #000 calc(100% - 56px),
            transparent 100%
          );
          scrollbar-width: thin;
          scrollbar-color: rgba(205, 150, 16, 0.5) transparent;
        }
        .pb-scroller::-webkit-scrollbar {
          width: 4px;
        }
        .pb-scroller::-webkit-scrollbar-thumb {
          background: rgba(205, 150, 16, 0.5);
          border-radius: 4px;
        }

        .pb-group-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: clamp(20px, 2.2vw, 32px) 0 clamp(12px, 1.2vw, 18px);
        }
        .pb-group-label {
          margin: 0;
          color: #cd9610;
          font-size: var(--fs-small);
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .pb-group-count {
          color: #bda76a;
          font-size: var(--fs-small);
          font-weight: 500;
          letter-spacing: 0.08em;
        }

        /* The dividing line between the two categories — deliberately heavier
           than the hairlines that separate individual records. */
        .pb-split {
          height: 3px;
          margin: clamp(28px, 3vw, 48px) 0 0;
          background: #cd9610;
          border-radius: 2px;
        }

        .pb-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pb-row {
          display: flex;
          align-items: flex-start;
          gap: clamp(14px, 1.8vw, 28px);
          padding: clamp(18px, 2vw, 30px) clamp(10px, 1.2vw, 18px);
          /* The grid line between records, matching Our Expertise but keyed to
             gold rather than grey. */
          border-bottom: 1px solid rgba(205, 150, 16, 0.28);
          scroll-snap-align: center;
          border-left: 2px solid transparent;
          background: transparent;
          transition: background-color 0.35s ease, border-left-color 0.35s ease;
          /* --t (0 centred → 1 at the edge of the band) and --s (the signed
             form) are written by the scroll handler; both default to 0 so the
             server-rendered list is fully legible before hydration. */
          opacity: calc(1 - var(--t, 0) * 0.6);
          transform: translateY(calc(var(--s, 0) * 10px));
        }
        .pb-row:first-child {
          border-top: 1px solid rgba(205, 150, 16, 0.28);
        }
        .pb-row.is-active {
          background: rgba(205, 150, 16, 0.07);
          border-left-color: #cd9610;
        }

        .pb-num {
          flex-shrink: 0;
          width: clamp(24px, 2.4vw, 36px);
          color: #b3a071;
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.6;
          font-variant-numeric: tabular-nums;
          transition: color 0.3s ease;
        }
        .pb-row.is-active .pb-num {
          color: #cd9610;
          font-weight: 600;
        }

        .pb-body {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pb-entry-title {
          margin: 0;
          color: #181100;
          font-family: var(--font-merriweather), serif;
          font-size: var(--fs-body);
          font-weight: 700;
          line-height: 1.62;
          letter-spacing: -0.01em;
        }
        .pb-entry-meta {
          margin: 0;
          color: #6a5f43;
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1.62;
        }
        .pb-authors {
          color: #97844f;
        }

        .pb-mark {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(28px, 2.6vw, 38px);
          height: clamp(28px, 2.6vw, 38px);
          border-radius: 50%;
          border: 1px solid rgba(205, 150, 16, 0.35);
          color: #cd9610;
          opacity: 0.45;
          transition: opacity 0.3s ease, background-color 0.3s ease,
            color 0.3s ease;
        }
        .pb-row.is-active .pb-mark {
          opacity: 1;
          background: #cd9610;
          color: #fffdf4;
        }

        @media (max-width: 640px) {
          .pb-row {
            gap: 12px;
            padding-left: 8px;
            padding-right: 8px;
          }
        }

        /* Touch devices and reduced-motion users get the list back in the page
           flow: no nested scroller to trap a swipe, no snap, no fade. */
        @media (hover: none), (prefers-reduced-motion: reduce) {
          .pb-scroller {
            max-height: none;
            overflow-y: visible;
            scroll-snap-type: none;
            scroll-behavior: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
          .pb-row {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
