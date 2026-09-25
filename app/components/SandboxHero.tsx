"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Beams from "./Beams/Beams";
import ArrowButton from "./ArrowButton";
import { firm } from "../data/firm";
import { heroCitations } from "../data/publications";
import "./sandbox-hero.css";

/**
 * The homepage hero: a full-viewport editorial plate.
 *
 * The composition is a dark room with one headline in it. The beams behind are
 * atmosphere and nothing else — they carry no information and are never the
 * reason to look here. The Publications card is secondary by construction: it
 * is snapped to the bottom-right on desktop, so the eye reaches it after the
 * headline and the action rather than competing with them.
 *
 * There is exactly one entrance sequence, and it plays once. Nothing on this
 * surface animates on scroll, and nothing loops except the beams.
 *
 * Beams is imported statically. Loading it through `next/dynamic` was tried and
 * the fallback never handed over on some routes, leaving the plate showing the
 * CSS placeholder for the life of the page.
 */

/* How long a citation holds before the next one takes over. Long, because these
   are full citations rather than headlines — a reader has to reach the end of
   one before moving on is anything other than an interruption. */
const SLIDE_MS = 7000;

export default function SandboxHero() {
  const rootRef = useRef<HTMLElement>(null);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const citation = heroCitations[slide];

  // Subscribed rather than read once, so a reader who turns the preference on
  // while the page is open stops the beams then rather than at the next
  // navigation. The initial `false` keeps the server and first client render in
  // agreement; the effect corrects it a frame later.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // No controls on this card — it advances on its own and nothing else. That
  // makes pausing on hover the only way a reader can hold a citation still
  // long enough to finish it, so it is not optional here.
  //
  // The timer never starts for a reader who has asked for reduced motion.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % heroCitations.length);
    }, SLIDE_MS);

    return () => window.clearInterval(id);
  }, [paused, slide]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Everything below is a *lift* from a resting state that already reads
    // correctly. The copy is in the DOM at full opacity from the first paint,
    // so a reader whose JS fails, or who has asked for reduced motion, gets the
    // finished hero rather than an empty plate.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // The two headline lines wipe up out of their own clip, which is what
      // makes the lockup read as being revealed rather than as fading in.
      // Each line owns a `.v2h-clip` with `overflow: hidden` for this.
      tl.fromTo(
          ".v2h-line-1 span",
          { yPercent: 108 },
          { yPercent: 0, duration: 0.7 },
          0.4
        )
        .fromTo(
          ".v2h-line-2 span",
          { yPercent: 108 },
          { yPercent: 0, duration: 0.7 },
          0.52
        )
        .fromTo(
          ".v2h-lede",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.68
        )
        .fromTo(
          ".v2h-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.8
        )
        .fromTo(
          ".v2h-article",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          0.92
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v2h" ref={rootRef}>
      {/* The canvas host. Never transform, scale or fade either of these two
          elements — it blanks the WebGL surface. The veil above is what fades
          if anything needs to. */}
      <div className="v2h-media">
        <div className="v2h-beams">
          <Beams
            beamWidth={2}
            beamHeight={14}
            beamNumber={19}
            lightColor="#ffffff"
            speed={4.5}
            noiseIntensity={1.25}
            scale={0.3}
            rotation={0}
            backgroundColor="#120f17"
            paused={reducedMotion}
          />
        </div>
        <div className="v2h-veil" aria-hidden="true" />
      </div>

      <div className="v2h-dock">
        {/* The four copy elements are wrapped rather than being four children
            of the dock. On desktop the dock is a two-track grid, and four loose
            children auto-place into four implicit rows — which puts the kicker,
            headline, lede and button each in a row of their own and pushes the
            button off the plate. One wrapper is one grid item. */}
        <div className="v2h-copy">
          <h1 className="v2h-title">
            <span className="v2h-clip v2h-line-1">
              <span>Built on Justice.</span>
            </span>
            <span className="v2h-clip v2h-line-2">
              <span>Guided by Ethics.</span>
            </span>
          </h1>

          <p className="v2h-lede">
            A Nigerian law firm serving individuals, businesses,
            institutions and government across complex legal matters.
          </p>

          <div className="v2h-cta">
            <ArrowButton href="/contact" className="v2h-abtn">
              Speak to a Lawyer
            </ArrowButton>
          </div>
        </div>

        {/* The card cycles the bibliography rather than stating one paper.
            `aria-live="polite"` so the change is announced; the controls are
            real buttons so a reader who wants the citation that just left can
            go back for it, which an auto-advancing panel with no controls does
            not allow. */}
        <article
          className="v2h-article"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <p className="v2h-article-label">Publications</p>
          <div className="v2h-article-rule" />

          {/* Keyed on the index so each citation is a fresh element and replays
              its fade, rather than the text swapping in place. */}
          <p className="v2h-article-body" key={slide} aria-live="polite">
            {citation?.text}
            <span className="v2h-article-pages">{citation?.pages}</span>
          </p>
        </article>
      </div>
    </section>
  );
}
