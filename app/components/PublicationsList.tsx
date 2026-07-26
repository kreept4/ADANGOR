// No interactivity left on this page — the directive is here only because
// styled-jsx, which every section on the site uses, is client-only.
"use client";

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

// Set as a bibliography rather than as a feed: the whole list sits in the page
// flow, hierarchy is carried by size and weight, and gold is an accent on the
// rules rather than the colour the text is set in. Nothing here is a link, so
// nothing carries a hover or an arrow that would imply one.
export default function PublicationsList() {
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

        {groups.map((group) => (
          <section className="pb-group" key={group.key}>
            <h2 className="pb-group-label">{group.label}</h2>

            <ol className="pb-list">
              {group.entries.map((entry, i) => {
                const { authors, title, meta } = parseCitation(entry.citation);

                return (
                  <li className="pb-row" key={`${group.key}-${i}`}>
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
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <style jsx>{`
        .pb-section {
          /* One palette for the page, so a tone is chosen once rather than
             re-mixed slightly differently at each place it is used. --accent is
             for rules and marks; --accent-ink is the darkened form that small
             text is set in, because the bright gold only clears 2.6:1 against
             this background and is unreadable at label sizes. */
          --ink: #181100;
          --muted: #5c5344;
          --accent: #cd9610;
          --accent-ink: #8a6410;
          --hairline: rgba(24, 17, 0, 0.12);

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
          padding-bottom: clamp(24px, 2.8vw, 40px);
          border-bottom: 2px solid var(--accent);
        }
        .pb-eyebrow {
          margin: 0;
          color: var(--accent-ink);
          font-size: var(--fs-micro);
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .pb-title {
          margin: 0;
          color: var(--ink);
          font-size: var(--fs-hero);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .pb-intro {
          margin: 0;
          max-width: 62ch;
          color: var(--muted);
          font-size: var(--fs-lead);
          font-weight: 400;
          line-height: 1.65;
        }

        .pb-group {
          margin-top: clamp(40px, 4.4vw, 72px);
        }
        /* The group heading outranks the entries beneath it — larger and darker,
           where before it was smaller than the titles it was introducing. */
        .pb-group-label {
          margin: 0;
          padding-bottom: clamp(10px, 1.1vw, 16px);
          border-bottom: 1px solid var(--accent);
          color: var(--ink);
          font-size: var(--fs-h3);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .pb-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .pb-row {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: clamp(14px, 1.8vw, 28px);
          padding: clamp(18px, 2vw, 30px) 0;
          border-bottom: 1px solid var(--hairline);
        }
        .pb-row:last-child {
          border-bottom: none;
        }

        .pb-num {
          color: var(--accent-ink);
          font-size: var(--fs-small);
          font-weight: 500;
          /* Nudged onto the title's first baseline rather than the top of its
             line box, which is what keeps the number column looking set rather
             than floated. */
          line-height: 2.1;
          font-variant-numeric: tabular-nums;
        }

        .pb-body {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(4px, 0.5vw, 8px);
        }
        /* Instrument Sans throughout, as on the rest of the site — the work is
           separated from its citation by weight and colour, not by family. */
        .pb-entry-title {
          margin: 0;
          color: var(--ink);
          font-size: var(--fs-body);
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }
        .pb-entry-meta {
          margin: 0;
          color: var(--muted);
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1.6;
        }
        .pb-authors {
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .pb-row {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
