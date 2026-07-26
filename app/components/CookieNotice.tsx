"use client";

import { useState, useSyncExternalStore } from "react";

export const CONSENT_KEY = "cookie-consent";

export type Consent = "accepted" | "declined";

// Read the visitor's standing answer. Anything that would set a non-essential
// cookie — analytics, embedded video, a chat widget — should call this first
// and do nothing unless it returns "accepted". Nothing on the site does yet,
// because nothing on the site tracks yet.
export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    // Storage can throw outright when cookies are blocked at the browser level.
    return null;
  }
}

// An answer given in one tab should take the bar down in the others too.
function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

export default function CookieNotice() {
  // The answer lives in localStorage, which is outside React — so it is read
  // through useSyncExternalStore rather than copied into state by an effect.
  // The server snapshot is a settled answer, so the bar is absent from the
  // prerendered HTML and appears only once the client has looked; that keeps it
  // from flashing at visitors who have already answered.
  const stored = useSyncExternalStore(
    subscribe,
    getConsent,
    (): Consent => "accepted",
  );
  const [answered, setAnswered] = useState(false);

  const answer = (consent: Consent) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, consent);
    } catch {
      // If the answer cannot be stored the bar will return next visit. That is
      // the right way round: better to ask twice than to assume a yes.
    }
    setAnswered(true);
  };

  if (stored || answered) return null;

  return (
    <div
      className="ck-bar"
      role="dialog"
      aria-live="polite"
      aria-labelledby="ck-title"
    >
      <div className="ck-inner">
        <div className="ck-copy">
          <p className="ck-title" id="ck-title">
            Cookies on this site
          </p>
          <p className="ck-text">
            We use cookies only where they are needed to make the site work.
            With your agreement we would also use them to understand how the
            site is used. You can decline without losing any part of the site.
          </p>
        </div>

        {/* Declining is listed first and set plainly, so agreement is never the
            easier of the two to reach by accident. */}
        <div className="ck-actions">
          <button
            type="button"
            className="ck-decline"
            onClick={() => answer("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="ck-accept"
            onClick={() => answer("accepted")}
          >
            Accept
          </button>
        </div>
      </div>

      <style jsx>{`
        .ck-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          background: #fff;
          border-top: 1px solid rgba(24, 17, 0, 0.14);
          box-shadow: 0 -8px 32px rgba(24, 17, 0, 0.12);
          font-family: var(--font-instrument-sans), sans-serif;
          padding: clamp(14px, 1.6vw, 22px) var(--page-gutter);
          padding-bottom: max(
            clamp(14px, 1.6vw, 22px),
            env(safe-area-inset-bottom)
          );
          box-sizing: border-box;
        }
        .ck-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 1.8vw, 28px);
          width: 100%;
        }
        .ck-copy {
          flex: 1 1 32ch;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ck-title {
          margin: 0;
          color: #181100;
          font-size: var(--fs-small);
          font-weight: 600;
          line-height: 1.35;
        }
        .ck-text {
          margin: 0;
          max-width: 78ch;
          color: #525252;
          font-size: var(--fs-small);
          font-weight: 400;
          line-height: 1.55;
        }
        .ck-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: clamp(10px, 1.2vw, 16px);
          flex-shrink: 0;
        }
        .ck-decline,
        .ck-accept {
          font-family: inherit;
          font-size: var(--fs-small);
          line-height: 1.2;
          cursor: pointer;
          padding: clamp(9px, 1vw, 13px) clamp(16px, 1.8vw, 24px);
          border-radius: 3px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .ck-decline {
          border: 1px solid rgba(24, 17, 0, 0.18);
          background: #fff;
          color: #181100;
          font-weight: 500;
        }
        .ck-decline:hover {
          background: rgba(24, 17, 0, 0.05);
        }
        .ck-accept {
          border: 1px solid #181100;
          background: #181100;
          color: #fff;
          font-weight: 600;
        }
        .ck-accept:hover {
          background: #000;
        }

        @media (max-width: 560px) {
          .ck-actions {
            width: 100%;
          }
          .ck-decline,
          .ck-accept {
            flex: 1 1 auto;
          }
        }
      `}</style>
    </div>
  );
}
