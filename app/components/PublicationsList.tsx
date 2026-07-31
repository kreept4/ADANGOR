"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
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

const URL_PATTERN = /(https?:\/\/\S+|www\.\S+)/g;

// The records that are available online carry the address in the citation tail,
// as plain text. This lifts those out into anchors. Sentence punctuation that
// happens to sit against the end of an address is handed back to the
// surrounding text rather than being swallowed into the href, and bare
// www. addresses are given a scheme so they resolve.
//
// The anchor keeps a real href even though the click is intercepted, so that
// middle-click, copy-link-address and open-in-new-tab all still behave, and so
// the address is still reachable if the script never runs.
function linkify(text: string, onLeave: (href: string) => void): ReactNode {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(URL_PATTERN)) {
    const raw = match[0];
    const start = match.index ?? 0;
    const address = raw.replace(/[.,;:)]+$/, "");
    const href = address.startsWith("http") ? address : `https://${address}`;

    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <a
        key={start}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          // Modified clicks are the reader deliberately choosing how to open
          // the address; only a plain click raises the notice.
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
          }
          event.preventDefault();
          onLeave(href);
        }}
      >
        {address}
      </a>,
    );
    parts.push(raw.slice(address.length));
    cursor = start + raw.length;
  }

  if (!parts.length) return text;
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

// The host on its own is what the reader needs in order to judge where they are
// being sent; the full path only adds noise to the notice.
function hostOf(href: string): string {
  try {
    return new URL(href).host;
  } catch {
    return href;
  }
}

// Set as a bibliography rather than as a feed: the whole list sits in the page
// flow, hierarchy is carried by size and weight, and gold is an accent on the
// rules rather than the colour the text is set in. The only links are the
// availability addresses inside the citations themselves, so nothing else
// carries a hover or a mark that would imply one.
export default function PublicationsList() {
  const [leaving, setLeaving] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stayRef = useRef<HTMLButtonElement>(null);

  // showModal() rather than the open attribute: it is what gives the notice the
  // top layer, the backdrop, focus held inside it and Escape to dismiss, none
  // of which would have to be written by hand. Staying is then focused
  // explicitly, so the keyboard default is the option that goes nowhere.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (leaving && !dialog.open) {
      dialog.showModal();
      stayRef.current?.focus();
    } else if (!leaving && dialog.open) {
      dialog.close();
    }
  }, [leaving]);

  const stay = useCallback(() => setLeaving(null), []);

  return (
    <section className="pb-section">
      <div className="pb-inner">
        <header className="pb-head">
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
                        {linkify(meta, setLeaving)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <dialog
        className="pb-leave"
        ref={dialogRef}
        onClose={stay}
        onCancel={stay}
        onClick={(event) => {
          // The dialog element fills the viewport once the backdrop is painted,
          // so a click that lands on the element itself rather than on the card
          // inside it is a click on the backdrop.
          if (event.target === dialogRef.current) stay();
        }}
        aria-labelledby="pb-leave-title"
      >
        {leaving && (
          <div className="pb-leave-card">
            <h2 className="pb-leave-title" id="pb-leave-title">
              You are leaving this site
            </h2>
            <p className="pb-leave-text">
              This publication is hosted by{" "}
              <span className="pb-leave-host">{hostOf(leaving)}</span>, which
              the firm does not operate.
            </p>
            {/* Continue comes first in the markup so that staying sits in the
                rightmost, primary position; focus is put on it explicitly
                below rather than being left to source order. */}
            <div className="pb-leave-actions">
              <a
                className="pb-leave-go"
                href={leaving}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stay}
              >
                Continue
              </a>
              <button
                type="button"
                className="pb-leave-stay"
                ref={stayRef}
                onClick={stay}
              >
                Stay on this site
              </button>
            </div>
          </div>
        )}
      </dialog>

      <style jsx>{`
        .pb-section {
          /* One palette for the page, so a tone is chosen once rather than
             re-mixed slightly differently at each place it is used. --accent is
             for rules and marks; --accent-ink is the darkened form that small
             text is set in, because the bright gold only clears 2.6:1 against
             this background and is unreadable at label sizes. */
          --ink: #181100;
          /* Grey for the category headings, so they sit a clear step below the
             near-black page title instead of matching it. Same grey as the
             running copy on Our Expertise. */
          --grey: #525252;
          --muted: #5c5344;
          --accent: #cd9610;
          --accent-ink: #8a6410;
          --hairline: rgba(24, 17, 0, 0.12);

          width: 100%;
          /* Same white as Our Expertise, so the interior pages sit on one
             ground rather than each carrying its own tint. */
          background: #fff;
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
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
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
          color: var(--grey);
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
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }
        .pb-entry-meta {
          margin: 0;
          color: var(--muted);
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1.6;
          /* Some of the addresses are long enough to overrun a narrow column. */
          overflow-wrap: anywhere;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        /* linkify() builds its anchors outside this component's own JSX, so
           styled-jsx never stamps them with its scoping class; they are reached
           through :global under a selector that is scoped. */
        .pb-entry-meta :global(a) {
          color: var(--accent-ink);
          text-decoration: underline;
          text-underline-offset: 0.2em;
          text-decoration-thickness: 1px;
          transition: color 0.2s ease;
        }
        .pb-entry-meta :global(a:hover),
        .pb-entry-meta :global(a:focus-visible) {
          color: var(--ink);
        }
        .pb-authors {
          font-weight: 500;
        }

        /* The notice shown before a citation's address is followed off-site. */
        .pb-leave {
          margin: auto;
          padding: 0;
          border: none;
          background: transparent;
          max-width: min(92vw, 44ch);
        }
        .pb-leave::backdrop {
          background: rgba(24, 17, 0, 0.55);
        }
        .pb-leave-card {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 0.9vw, 12px);
          padding: clamp(20px, 2.4vw, 34px);
          background: #fff;
          border: 1px solid var(--hairline);
          border-radius: 4px;
          box-shadow: 0 16px 40px rgba(24, 17, 0, 0.2);
          text-align: left;
        }
        .pb-leave-title {
          margin: 0;
          color: var(--ink);
          font-size: var(--fs-body);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .pb-leave-text {
          margin: 0;
          color: var(--muted);
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1.6;
          overflow-wrap: anywhere;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
        }
        .pb-leave-host {
          color: var(--ink);
          font-weight: 600;
        }
        /* Right-aligned and sized to their words rather than stretched across
           the card, with staying carrying the only fill on the notice. */
        .pb-leave-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(10px, 1.4vw, 18px);
          margin-top: clamp(8px, 1vw, 14px);
        }
        .pb-leave-stay,
        .pb-leave-go {
          font-family: inherit;
          font-size: var(--fs-small);
          line-height: 1.2;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .pb-leave-stay {
          padding: clamp(9px, 1vw, 13px) clamp(16px, 1.8vw, 24px);
          border: none;
          border-radius: 3px;
          background: var(--ink);
          color: #fff;
          font-weight: 600;
        }
        .pb-leave-stay:hover {
          background: #000;
        }
        /* Quiet by design — leaving is the choice that needs a deliberate
           reach, so it is set as plain text rather than as a second button. */
        .pb-leave-go {
          padding: 4px 2px;
          border: none;
          background: none;
          color: var(--muted);
          font-weight: 400;
          text-decoration: underline;
          text-underline-offset: 0.2em;
        }
        .pb-leave-go:hover {
          color: var(--ink);
        }

        @media (max-width: 420px) {
          .pb-leave-actions {
            flex-direction: column-reverse;
            align-items: stretch;
          }
          .pb-leave-stay,
          .pb-leave-go {
            text-align: center;
          }
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
