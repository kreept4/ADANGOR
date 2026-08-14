"use client";

import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OptionWheel from "./OptionWheel/OptionWheel";
import { firm, practiceAreaTitles } from "../data/firm";
import { practiceAreas } from "../data/expertise";
import { heroCitations, featured } from "../data/publications";
import "./sandbox-page.css";

/**
 * Everything below the hero: Practice areas, Journey, Publications.
 *
 * The three are kept in one module because they share one motion system — the
 * `[data-h]` ranking read by `useSectionIntros` below — and splitting them into
 * separate files would mean either duplicating that hook or exporting it to be
 * imported three times. Split them when a section grows its own behaviour, not
 * before.
 *
 * The rule the whole file follows: one focal motion per surface. Practice's is
 * the hover wipe. Journey's is the wheel. Publications' is its own entrance —
 * which is why the featured card swaps its title instantly on click rather
 * than crossfading.
 */

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------------------------------
   Shared entrance
   -------------------------------------------------------------------------- */

/**
 * Reveals a section's `[data-h]` nodes once, when its top passes 70% of the
 * viewport.
 *
 * `data-h` is a rank, not an index: rank 1 arrives first, and two nodes sharing
 * a rank arrive together but offset slightly from each other so a row of stats
 * reads left to right rather than as one block.
 *
 * The initial `opacity: 0` is set here, in JS, and never in CSS. If it were in
 * the stylesheet and the script failed to run, the section would stay invisible
 * forever — a page that is blank without JS is worse than one that does not
 * animate.
 */
function useSectionIntros(rootRef: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("[data-sb-section]")
    );

    if (reduced) {
      // Nothing to undo — the resting state is already the finished one — but
      // the hint is cleared so the compositor is not holding layers for
      // elements that will never move.
      root.querySelectorAll<HTMLElement>("[data-h]").forEach((el) => {
        el.style.willChange = "auto";
      });
      return;
    }

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const nodes = Array.from(section.querySelectorAll<HTMLElement>("[data-h]"));
        if (!nodes.length) return;

        // Group by rank so siblings can be offset against each other.
        const byRank = new Map<number, HTMLElement[]>();
        nodes.forEach((node) => {
          const rank = Number(node.dataset.h) || 1;
          byRank.set(rank, [...(byRank.get(rank) ?? []), node]);
        });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
          defaults: { ease: "power3.out", duration: 0.65 },
        });

        [...byRank.keys()]
          .sort((a, b) => a - b)
          .forEach((rank, i) => {
            const group = byRank.get(rank) ?? [];
            group.forEach((node, j) => {
              tl.fromTo(
                node,
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0 },
                // Rank 1 lands at 0.9s so the section has settled in the
                // viewport before anything moves; each later rank is a beat
                // behind, and siblings a half-beat behind each other.
                0.9 + i * 0.14 + j * 0.08
              );
            });
          });
      });
    }, root);

    // `fromTo` applies its "from" state the moment the timeline is built, so
    // every node is at opacity 0 before its trigger has fired. That is fine
    // while the triggers are accurate and fatal when they are not: a section
    // whose start position was measured wrong never fires, and its content
    // stays invisible for the life of the page. The whole Journey section
    // disappeared this way.
    //
    // Two guards, because the failure is silent and the cost of it is a blank
    // screen.

    // 1. Re-measure once the things that change page height have landed. The
    //    triggers are built in a layout effect, which is before the portrait
    //    has loaded and before the webfonts have swapped in — both of which
    //    move every section below them.
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    void document.fonts?.ready.then(refresh).catch(() => {});

    // 2. A backstop. If anything is still hidden a few seconds in, the trigger
    //    is not coming — show it. An un-animated section is a small loss; an
    //    invisible one is the page being broken.
    const backstop = window.setTimeout(() => {
      root.querySelectorAll<HTMLElement>("[data-h]").forEach((el) => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.05) {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
        }
      });
    }, 3000);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(backstop);
      ctx.revert();
    };
  }, [rootRef]);
}

/* --------------------------------------------------------------------------
   Practice areas
   -------------------------------------------------------------------------- */

/* The fallback body, used when a title in `practiceAreaTitles` has no matching
   record in `expertise.ts`. It describes how the chambers works rather than
   asserting anything about the area itself, because a wrong blurb under a real
   practice area is a claim the firm did not make. */
const BRIEF =
  "Matters in this area are taken on instruction and prepared in chambers from the record upward, with the same team carrying the file from first advice through to judgment.";

type PracticeRow = {
  index: string;
  title: string;
  body: string;
};

const PRACTICE_ROWS: PracticeRow[] = practiceAreaTitles.slice(0, 4).map((title, i) => {
  const match = practiceAreas.find(
    (area) => area.title.toLowerCase() === title.toLowerCase()
  );

  return {
    index: String(i + 1).padStart(2, "0"),
    title,
    body: match?.detail ?? match?.blurb ?? BRIEF,
  };
});

function PracticeAreas() {
  return (
    <section className="sbp-practice" data-sb-section>
      <div className="sbp-practice-inner">
        <h2 className="sbp-section-title" data-h="1">
          Practice Areas
        </h2>

        <ul className="sbp-rows">
          {PRACTICE_ROWS.map((row) => (
            <PracticeRowItem key={row.title} row={row} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * One row, and the gold wipe that lights it on hover.
 *
 * This replaced a marquee — a cream sheet that slid over the row carrying the
 * row's own title repeating across it. Three things were wrong with it. It hid
 * the copy the reader had just started reading; a line of the same two words
 * repeating is texture rather than information, so the row got louder without
 * getting more useful; and moving type under moving type made the list look
 * like it was failing to paint.
 *
 * What replaces it does the same job — mark the row under the pointer, from the
 * edge the pointer arrived at — with the row itself as the subject. A gold
 * ground wipes up (or down) behind the copy, the type inverts to ink on it, and
 * the square resolves into an arrow. Nothing is covered and nothing reflows.
 */
function PracticeRowItem({ row }: { row: PracticeRow }) {
  const rowRef = useRef<HTMLLIElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [hot, setHot] = useState(false);

  /** Which edge of the row is nearer to a given clientY. */
  const edgeFrom = useCallback((clientY: number): "top" | "bottom" => {
    const el = rowRef.current;
    if (!el) return "bottom";
    const box = el.getBoundingClientRect();
    return clientY - box.top < box.height / 2 ? "top" : "bottom";
  }, []);

  const wipe = useCallback((edge: "top" | "bottom", entering: boolean) => {
    setHot(entering);

    const fill = fillRef.current;
    if (!fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.killTweensOf(fill);

    // The ground grows from the edge the pointer crossed and, on the way out,
    // collapses back toward the edge it left by — so the wipe always travels
    // with the pointer rather than against it.
    gsap.set(fill, { transformOrigin: edge === "top" ? "top center" : "bottom center" });
    gsap.to(fill, {
      scaleY: entering ? 1 : 0,
      duration: entering ? 0.45 : 0.35,
      ease: entering ? "power3.out" : "power2.in",
    });
  }, []);

  return (
    <li
      ref={rowRef}
      className={`sbp-row ${hot ? "is-hot" : ""}`}
      tabIndex={0}
      onMouseEnter={(e) => wipe(edgeFrom(e.clientY), true)}
      onMouseLeave={(e) => wipe(edgeFrom(e.clientY), false)}
      // A row reached by keyboard has no pointer position to read, so it is
      // treated as having been entered from the top and closed the same way.
      onFocus={() => wipe("top", true)}
      onBlur={() => wipe("top", false)}
    >
      {/* Behind the copy, never over it. */}
      <span className="sbp-row-fill" ref={fillRef} aria-hidden="true" />

      <span className="sbp-row-index" aria-hidden="true">
        {row.index}
      </span>

      {/* No trailing square. It held the right-hand end of every row at a fixed
          width for a mark that said nothing the row did not already say, and
          the copy is worth more than the gutter was. The measure runs to the
          row's own padding now. */}
      <div className="sbp-row-copy">
        <h3 className="sbp-row-title">{row.title}</h3>
        <p className="sbp-row-body">{row.body}</p>
      </div>
    </li>
  );
}

/* --------------------------------------------------------------------------
   Journey
   -------------------------------------------------------------------------- */

/* The three milestones, as given. The firm's founding year is deliberately not
   among them: it is stated once, in the watchword above, and repeating it here
   as a fourth entry made the wheel read as a company timeline rather than as
   his career. */
const MILESTONES = [
  {
    year: "1989",
    title: "Called to the Nigerian Bar",
    summary:
      "Enrolled as a barrister and solicitor of the Supreme Court of Nigeria, and began practice at E.C. Ukala, SAN & Co., Efe Chambers.",
  },
  {
    year: "2018",
    title: "Attorney-General of Rivers State",
    summary:
      "Appointed Rivers State Attorney-General, taking charge of the State's legal affairs and its representation before the courts.",
  },
  {
    year: "2020",
    title: "Senior Advocate of Nigeria",
    summary:
      "Conferred the rank of SAN by the Legal Practitioners' Privileges Committee, in recognition of sustained distinction in advocacy.",
  },
];

/**
 * The year arc.
 *
 * The years are the control, not a list: they sit on a curved wheel that the
 * reader turns with a drag, the scroll wheel or the arrow keys, and the
 * milestone beside it follows whichever year is level with the centre.
 *
 * The copy panel is `aria-live="polite"` so a change made from the keyboard is
 * announced — otherwise the wheel would move the selection without a
 * screen-reader user learning what it selected.
 */
function Journey() {
  // The wheel owns its own position — it is uncontrolled, and reports the year
  // it has settled on. This holds whose milestone the panel is showing.
  const [shown, setShown] = useState(0);
  const current = MILESTONES[shown] ?? MILESTONES[0];

  return (
    <section className="sbp-journey" data-sb-section>
      <div className="sbp-journey-inner">
        {/* No eyebrow. "Professional Journey" above "Four decades at the
            Nigerian Bar." said the same thing twice, and the heading says it
            better. */}
        <div className="sbp-journey-head">
          <h2 className="sbp-section-title sbp-journey-title" data-h="1">
            Four decades at the Nigerian Bar.
          </h2>
        </div>

        <div className="sbp-journey-body">
          <figure className="sbp-portrait" data-h="2">
            <Image
              src="/images/prof-zach.jpg"
              alt={`${firm.principal.name}, ${firm.principal.role}`}
              width={520}
              height={640}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="sbp-portrait-img"
            />
            <figcaption className="sbp-portrait-cap">
              <span className="sbp-portrait-name">{firm.principal.name}</span>
              <span className="sbp-portrait-rank">{firm.principal.role}</span>
            </figcaption>
          </figure>

          <div className="sbp-arc" data-h="3">
            <OptionWheel
              className="sbp-arc-wheel"
              items={MILESTONES.map((m) => m.year)}
              defaultSelected={0}
              onChange={(i) => setShown(i)}
              // Red for the selected year, against the section's white. The
              // same red as the marker dot beside it, so the dot and the year
              // it points at are plainly one thing.
              textColor="rgba(29,30,36,0.28)"
              activeColor="#fa5c01"
              side="left"
              // Close to the reference's own numbers. The component lays the
              // options on a real circle — the radius is chosen so the arc
              // between two neighbours is exactly one row — so `tilt` at 6°
              // gives a couple of pixels of lean per step rather than the
              // diagonal stagger a naive per-item offset produces.
              //
              // Only the size is dialled down: three years beside a paragraph
              // is a smaller object than the reference's twelve-item demo.
              fontSize={2.2}
              spacing={1.45}
              curve={1}
              tilt={6}
              blur={1.2}
              fade={0.35}
              smoothing={220}
              inset={0}
              loop={false}
              draggable
            />

            <div className="sbp-arc-copy" aria-live="polite">
              <h3 className="sbp-arc-title">{current.title}</h3>
              <p className="sbp-arc-summary">{current.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Publications
   -------------------------------------------------------------------------- */

/* Fifteen of the records carry the address they are available at in the
   citation tail, as plain text. Those become anchors so a reader can go
   straight to the paper from here rather than copying an address out of a
   line of grey type.

   Punctuation that happens to sit against the end of an address is handed back
   to the surrounding text rather than swallowed into the href, and bare `www.`
   addresses are given a scheme so they resolve.

   This is the same treatment the publications page gives them, minus that
   page's leaving-the-site dialog: this is a teaser list of three, and a modal
   raised from the homepage for an outbound link is heavier than the link. */
const URL_PATTERN = /(https?:\/\/\S+|www\.\S+)/g;

function linkifyCitation(text: string): ReactNode[] {
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
        className="sbp-pub-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {address}
      </a>
    );
    // Whatever punctuation was trimmed off the address belongs to the sentence.
    parts.push(raw.slice(address.length));
    cursor = start + raw.length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

/**
 * Strip the quotation marks around a citation's title.
 *
 * The records are formatted `“Title” (year) volume Journal (pp. x-y)`, so the
 * quotes wrap the title only, not the whole string. Removing just the leading
 * one leaves an unbalanced `”` sitting mid-sentence after the title, which is
 * why this takes the pair together and leaves the tail of the citation alone.
 */
function unquote(text: string): string {
  return text.replace(/^[“"']\s*/, "").replace(/[”"'](?=\s|$)/, "").trim();
}

/**
 * The three articles the side list names.
 *
 * The sandbox took these by index — `heroCitations` 0, 1 and 3 — because in
 * that repo `hero-citations.ts` was a hand-trimmed file of six records. Here
 * `heroCitations` is derived from the entire bibliography, so those indices
 * point at different papers and would drift again on the next publication.
 *
 * They are matched on a distinctive phrase instead, and any that fails to match
 * is dropped rather than silently replaced by whatever sits at that index.
 */
const SIDE_LIST = [
  { label: "Take-overs & Mergers", match: "Take-overs and Mergers" },
  { label: "Federal High Court Jurisdiction", match: "Delimiting the Jurisdiction" },
  { label: "Petroleum Industry Bill", match: "Petroleum Industry Bill" },
]
  .map(({ label, match }) => {
    const found = heroCitations.find((c) => c.text.includes(match));
    return found ? { label, text: unquote(found.text), pages: found.pages } : null;
  })
  .filter((x): x is { label: string; text: string; pages: string } => x !== null);

function Publications() {
  const [index, setIndex] = useState(0);

  const go = (step: number) =>
    setIndex((i) => (i + step + heroCitations.length) % heroCitations.length);

  const current = heroCitations[index];
  // The bibliography is generated, so a defensive fallback costs nothing and
  // stops an empty card if a record is ever malformed.
  const title = current ? unquote(current.text) : featured.title;

  return (
    <section className="sbp-pubs" data-sb-section>
      <div className="sbp-pubs-inner">
        <div className="sbp-pubs-head">
          <h2 className="sbp-section-title sbp-pubs-title" data-h="1">
            Publications
          </h2>

          <nav className="sbp-pubs-nav" data-h="4">
            <Link href="/publications">Full archive</Link>
            <Link href="/contact">Enquiries</Link>
          </nav>

          <div className="sbp-pubs-controls" data-h="4">
            <button
              type="button"
              className="sbp-pill sbp-pill-ghost"
              onClick={() => go(-1)}
              aria-label="Previous publication"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              className="sbp-pill sbp-pill-solid"
              onClick={() => go(1)}
              aria-label="Next publication"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>
        </div>

        <div className="sbp-pubs-body">
          {/* The title swaps instantly. This surface's focal motion is its
              entrance; adding a crossfade here would give it two. */}
          <article className="sbp-feature" data-h="2" aria-live="polite">
            <p className="sbp-feature-kicker">Selected work</p>
            <h3 className="sbp-feature-title">{title}</h3>

            <div className="sbp-feature-author">
              {/* The firm's own portrait, the same file the Journey uses. It is
                  decorative here — his name is set beside it in text — so the
                  alt is empty rather than repeating what the byline says. */}
              <Image
                src="/images/prof-zach.jpg"
                alt=""
                width={80}
                height={80}
                sizes="40px"
                className="sbp-avatar"
              />
              <span className="sbp-feature-byline">
                <span className="sbp-feature-name">{firm.principal.name}</span>
                <span className="sbp-feature-rank">{firm.principal.role}</span>
              </span>
            </div>
          </article>

          <ul className="sbp-pub-list">
            {SIDE_LIST.map((item) => (
              <li key={item.label} className="sbp-pub-item" data-h="3">
                <p className="sbp-pub-label">{item.label}</p>
                <p className="sbp-pub-cite">
                  {linkifyCitation(item.text)}
                  <span className="sbp-pub-pages">{item.pages}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------------
   Assembly
   -------------------------------------------------------------------------- */

export default function SandboxBelow() {
  const rootRef = useRef<HTMLDivElement>(null);

  useSectionIntros(rootRef);

  return (
    <div className="sbp" ref={rootRef}>
      <PracticeAreas />
      <Journey />
      <Publications />
    </div>
  );
}
