"use client";

/**
 * The two-bar plus that opens and closes the site menu.
 *
 * It is one component rather than two because the same control appears twice:
 * in the glass masthead, where it opens the panel, and inside the panel's own
 * head, where it closes it. Those were previously a plus mark and a bordered
 * "Close" pill that shared nothing, so the gesture that opened the menu was not
 * the gesture that shut it.
 *
 * Colour is deliberately not set here. The mark is `currentColor` and the
 * button takes `color: inherit`, so each host decides: espresso on the cream
 * bar, cream on the espresso panel. styled-jsx scopes to this file, so a host's
 * stylesheet could not reach these elements anyway.
 */

interface MenuTriggerProps {
  /** Drives the 45 degree turn from plus to cross. */
  open: boolean;
  onClick: () => void;
  ariaLabel: string;
  /** Omitted on the narrowest screens in the bar; the panel always shows one. */
  label?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

export default function MenuTrigger({
  open,
  onClick,
  ariaLabel,
  label,
  ariaExpanded,
  ariaControls,
}: MenuTriggerProps) {
  return (
    <button
      type="button"
      className={`mt ${open ? "open" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {label && <span className="mt-label">{label}</span>}
      <span className="mt-plus" aria-hidden="true">
        <span className="mt-bar" />
        <span className="mt-bar mt-bar-v" />
      </span>

      <style jsx>{`
        .mt {
          display: flex;
          align-items: center;
          gap: clamp(8px, 0.9vw, 14px);
          padding: 6px 4px;
          border: none;
          background: transparent;
          /* Set by whichever surface the trigger is sitting on. */
          color: inherit;
          font: inherit;
          cursor: pointer;
          transition: opacity 0.22s ease;
        }
        .mt:hover,
        .mt:focus-visible {
          opacity: 0.72;
        }
        .mt-label {
          font-size: clamp(12px, 1.1vw, 17px);
          font-weight: 500;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .mt-plus {
          position: relative;
          display: block;
          width: clamp(15px, 1.25vw, 19px);
          height: clamp(15px, 1.25vw, 19px);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mt:hover .mt-plus {
          transform: rotate(90deg);
        }
        /* Same specificity as the hover rule, so order decides: an open trigger
           holds its cross rather than flicking back to a plus under the cursor. */
        .mt.open .mt-plus {
          transform: rotate(45deg);
        }
        /* Which leaves hovering an open trigger with nothing to say, so it takes
           the same quarter turn from where it already is. */
        .mt.open:hover .mt-plus {
          transform: rotate(135deg);
        }
        .mt-bar {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          margin-top: -1px;
          border-radius: 2px;
          background: currentColor;
        }
        .mt-bar-v {
          transform: rotate(90deg);
        }

        @media (max-width: 480px) {
          .mt-label {
            font-size: 11px;
          }
        }
        @media (min-width: 2100px) {
          .mt-label {
            font-size: 20px;
          }
          .mt-plus {
            width: 22px;
            height: 22px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mt,
          .mt-plus {
            transition: none;
          }
        }
      `}</style>
    </button>
  );
}
