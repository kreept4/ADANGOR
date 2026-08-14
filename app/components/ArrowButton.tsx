"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import "./ArrowButton.css";

/**
 * The framed call to action: a label butted against an arrow cell, the two
 * divided by a hairline rather than the arrow sitting in a capsule of its own.
 *
 * Every size and colour here is a custom property, and the properties are
 * declared on `.abtn` itself. That is what lets the hero restyle this control
 * from `sandbox-hero.css` by setting five variables on `.v2h-abtn`, without
 * either file having to know the other's selectors and without `!important`
 * anywhere.
 *
 * The shared defaults below are deliberately the *page* size, not the hero
 * size. The hero is the one surface that wants a 2px radius and a 52-64px
 * height; everywhere else wants the softer, larger control. Passing
 * `tone="cream"` will not produce the hero's look — the hero's own variables
 * are what do that.
 */

interface ArrowButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "gold" | "cream";
  /** Rendered into the arrow cell. Defaults to the travelling arrow. */
  ariaLabel?: string;
}

export default function ArrowButton({
  href,
  children,
  className = "",
  tone = "gold",
  ariaLabel,
}: ArrowButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const inner = (
    <>
      <span className="abtn-label">{children}</span>
      <span className="abtn-cell" aria-hidden="true">
        <svg
          className="abtn-glyph"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1.75 14H26.25"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.13L26.25 14L14 25.87"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  const classes = `abtn abtn-${tone} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
