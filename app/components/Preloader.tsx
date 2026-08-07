"use client";

import { useEffect, useState } from "react";

/**
 * The firm's mark alone in the middle of a cream field, beating for about four
 * seconds before the page is revealed.
 *
 * Nothing sits behind it — no tile, no ring, no plate. The beat is a heartbeat
 * rather than a fade: two contractions and then a rest, on a human pulse. It is
 * the only thing happening on the screen, so it carries the whole hold by
 * itself.
 *
 * The overlay's covering styles are inline rather than in the stylesheet. It
 * renders in the server markup so the very first paint is the mark, and a
 * stylesheet that has not landed yet would otherwise leave the page showing
 * through underneath it for a frame.
 */

const HOLD_MS = 3800;
const FADE_MS = 560;

export default function Preloader() {
  const [phase, setPhase] = useState<"hold" | "leaving" | "gone">("hold");

  useEffect(() => {
    const hold = window.setTimeout(() => setPhase("leaving"), HOLD_MS);
    return () => window.clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    const fade = window.setTimeout(() => setPhase("gone"), FADE_MS);
    return () => window.clearTimeout(fade);
  }, [phase]);

  // Nothing behind the curtain should scroll while it is up.
  useEffect(() => {
    if (phase === "gone") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  if (phase === "gone") return null;

  const leaving = phase === "leaving";

  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff8e5",
        opacity: leaving ? 0 : 1,
        visibility: leaving ? "hidden" : "visible",
        pointerEvents: leaving ? "none" : "auto",
        transition: `opacity ${FADE_MS}ms ease, visibility ${FADE_MS}ms ease`,
      }}
    >
      <Mark />

      <style jsx>{`
        /* Two contractions and a rest, on a 1.25s pulse. The second beat is the
           smaller of the pair, which is what makes it read as a heartbeat
           rather than as a bounce. */
        :global(.pl-mark) {
          animation: pl-beat 1.25s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          will-change: transform;
        }
        @keyframes pl-beat {
          0% {
            transform: scale(1);
          }
          12% {
            transform: scale(1.18);
          }
          24% {
            transform: scale(1);
          }
          36% {
            transform: scale(1.1);
          }
          48%,
          100% {
            transform: scale(1);
          }
        }

        /* Readers who have asked for less motion still get the hold and the
           fade, but the mark sits still for it. */
        @media (prefers-reduced-motion: reduce) {
          :global(.pl-mark) {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * The firm's monogram, inlined from public/logo-icon.svg with the fill swapped
 * to currentColor.
 *
 * The paths are the file's own. The colour is not: the shipped mark is #2F2100,
 * which against this much cream reads as flat black. This draws it in the
 * palette's tobacco instead, so it is unmistakably brown at the size the hold
 * shows it at.
 */
function Mark() {
  return (
    <svg
      className="pl-mark"
      viewBox="0 0 54 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "clamp(66px, 6.4vw, 96px)", height: "auto", color: "#6b4d04" }}
      aria-hidden="true"
    >
      <path
        d="M33.5147 0V2.33749C32.9233 2.33749 32.3843 2.54892 31.9714 2.89904C31.7334 3.09862 31.5374 3.34387 31.3992 3.62295C31.3992 3.62464 31.3974 3.62802 31.3957 3.6314C31.3712 3.68045 31.3467 3.73289 31.3257 3.78532C31.3204 3.79885 31.3152 3.81238 31.3099 3.82591L16.263 37.6976H13.0013L28.4577 2.89904H5.14103C3.95813 2.89904 2.99922 3.82591 2.99922 4.96929C2.99922 6.11266 3.95813 7.03954 5.14103 7.03954V9.93858C2.30278 9.93858 0 7.71271 0 4.96929C0 4.23015 0.166234 3.52992 0.468957 2.89904C1.27913 1.18905 3.06746 0 5.14103 0H33.5147Z"
        fill="currentColor"
      />
      <path
        d="M53.1532 35.6293C53.1532 36.3685 52.987 37.0687 52.6843 37.6996C51.8741 39.4096 50.0875 40.5986 48.0139 40.5986H0V37.6996C0.962413 37.6996 1.79008 37.1397 2.15055 36.3363C2.1558 36.3245 2.16105 36.3127 2.16805 36.2991L16.0373 5.07617H19.3008L4.80681 37.6996H48.0139C49.1968 37.6996 50.1557 36.7727 50.1557 35.6293C50.1557 34.486 49.1968 33.5591 48.0139 33.5591V30.6601C50.8522 30.6601 53.1532 32.8859 53.1532 35.6293Z"
        fill="currentColor"
      />
      <path
        d="M28.457 2.90039L42.951 35.5238H46.2109L31.7205 2.90039H28.457Z"
        fill="currentColor"
      />
      <path
        d="M25.3477 26.7372L39.2467 26.7879L40.538 23.894L26.639 23.8398L25.3477 26.7372Z"
        fill="currentColor"
      />
    </svg>
  );
}
