"use client";

import {
  articles,
  books,
  featured,
  splitCitation,
  type Entry,
} from "../data/publications";


function EntryRow({ entry, index }: { entry: Entry; index: number }) {
  const { main, pp } = splitCitation(entry.citation);
  return (
    <div className="entry-row">
      <span className="entry-num">{String(index).padStart(2, "0")}</span>
      <p className="entry-citation">
        {main}
        {pp && <span className="entry-pp"> {pp}</span>}
      </p>
      <span className="entry-arrow" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" width="48.492" height="47.414" viewBox="0 0 67 67" fill="none">
          <ellipse cx="33.4591" cy="33.327" rx="24.246" ry="23.7072" transform="rotate(145 33.4591 33.327)" fill="#F3F3F3" fillOpacity="0.65" />
          <path d="M27.7203 37.3446L40.0784 28.6914" stroke="#181100" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29.5743 26.8377L40.0799 28.6901L38.2275 39.1958" stroke="#181100" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export default function Publications() {
  return (
    <section className="pub-section">
      <div className="pub-inner">
        <div className="pub-heading-wrap">
          <h2 className="pub-heading">Publications</h2>
          <div style={{ height: "1px", alignSelf: "stretch", background: "#CD9610" }} />
        </div>

        <div className="pub-featured">
          <img src={featured.cover} alt={featured.title} className="pub-cover" />
          <div className="pub-featured-copy">
            <span className="pub-label">Authors</span>
            <p className="pub-authors">{featured.authors},</p>
            <div className="pub-divider" />
            <p className="pub-featured-citation">
              {splitCitation(featured.citation).main}
              {splitCitation(featured.citation).pp && (
                <span className="featured-pp"> {splitCitation(featured.citation).pp}</span>
              )}
            </p>
          </div>
        </div>

        <div className="pub-dark-panel">
          <div className="pub-list-wrap">
            <h3 className="pub-subheading">Journal Articles</h3>
            <div className="pub-list">
              {articles.map((entry, i) => (
                <EntryRow entry={entry} index={i + 1} key={`article-${i}`} />
              ))}
            </div>

            <h3 className="pub-subheading">Books &amp; Book Chapters</h3>
            <div className="pub-list">
              {books.map((entry, i) => (
                <EntryRow entry={entry} index={i + 1} key={`book-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pub-section {
          padding: 80px 59px;
          box-sizing: border-box;
        }
        .pub-inner {
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 56px;
        }
        .pub-heading-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pub-heading {
          color: #181100;
          font-family: var(--font-roboto-slab), serif;
          font-size: 52px;
          font-weight: 400;
          line-height: 138%;
          letter-spacing: -0.48px;
          text-transform: uppercase;
          margin: 0;
        }

        .pub-featured {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .pub-cover {
          width: 220px;
          flex-shrink: 0;
          height: auto;
        }
        .pub-featured-copy {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 620px;
        }
        .pub-label {
          color: #cd9610;
          font-family: var(--font-roboto-slab), serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .pub-authors {
          font-family: var(--font-nunito), sans-serif;
          color: #080808;
          font-size: 24px;
          letter-spacing: -2px;
          margin: 0;
        }
        .pub-divider {
          width: 600px;
          max-width: 100%;
          height: 2px;
          background: rgba(255, 141, 40, 0.3);
        }
        .pub-featured-citation {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 300;
          font-size: 16px;
          margin: 0;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }
        .featured-pp {
          color: #797979;
        }

        .pub-dark-panel {
          width: 1392px;
          max-width: 100%;
          align-self: stretch;
          background: #fff;
          display: flex;
          justify-content: center;
          padding: 64px 0;
          box-sizing: border-box;
        }
        .pub-list-wrap {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 1073px;
          max-width: 100%;
        }
        .pub-subheading {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 700;
          font-size: 24px;
          color: #181100;
          margin: 0;
        }
        .pub-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 48px;
          align-self: stretch;
        }
        .entry-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 0;
          width: 1073px;
          max-width: 100%;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }
        .entry-row:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.15);
        }
        .entry-num {
          width: 30px;
          flex-shrink: 0;
          color: #7e7e7e;
          font-family: var(--font-roboto), sans-serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 120%;
        }
        .entry-citation {
          align-self: stretch;
          color: #181100;
          font-family: var(--font-merriweather), serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 178%;
          margin: 0;
          flex: 1;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
          -webkit-hyphens: auto;
          overflow-wrap: break-word;
        }
        .entry-pp {
          color: #797979;
          font-family: var(--font-merriweather), serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 178%;
        }
        .entry-arrow {
          flex-shrink: 0;
          width: 48.492px;
          height: 47.414px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .pub-section {
            padding: 56px 48px;
          }
          .pub-heading {
            font-size: 40px;
          }
          .pub-featured {
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .pub-section {
            padding: 40px 24px;
          }
          .pub-heading {
            font-size: 32px;
          }
          .entry-row {
            gap: 12px;
          }
          .entry-citation,
          .entry-pp {
            font-size: 18px;
          }
          .entry-arrow {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </section>
  );
}
