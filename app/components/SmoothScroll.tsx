"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Smooth scrolling for the homepage.
 *
 * A native scroll moves the page by whatever the wheel or trackpad reports and
 * stops the instant the input does, which on a page of full-viewport sections
 * reads as the page being dragged in steps. Lenis interpolates toward the
 * scroll target instead, so a flick carries and settles rather than stopping
 * dead — the sections glide past instead of jumping.
 *
 * Three things make this safe to add rather than a source of new bugs:
 *
 * 1. **One clock.** Lenis is driven from GSAP's ticker rather than its own
 *    `requestAnimationFrame`. Two independent rAF loops would tear against each
 *    other, and the section entrances are GSAP tweens.
 * 2. **ScrollTrigger is told.** Lenis moves the page with a transform-free
 *    virtual scroll, so ScrollTrigger has to be updated from Lenis' own scroll
 *    event or every trigger fires at the wrong place. `scrollerProxy` is not
 *    needed — Lenis still drives `window.scrollY` — but the update is.
 * 3. **It turns itself off.** Under `prefers-reduced-motion` nothing is
 *    installed at all and the browser's own scrolling is left alone. Smooth
 *    scrolling is exactly the kind of motion that preference is asking about.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      // Long enough to read as momentum, short enough that a deliberate scroll
      // to a section does not feel like it is being resisted. Past about 1.5s
      // the page starts to feel like it is lagging the input.
      duration: 1.15,
      // Exponential ease-out: almost all of the distance is covered early and
      // the tail is a slow settle, which is what makes it read as gliding to a
      // stop rather than decelerating linearly.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Touch devices already have momentum scrolling in the OS, and layering
      // this on top of it fights the platform and breaks pull-to-refresh.
      smoothWheel: true,
      syncTouch: false,
    });

    // Keep every ScrollTrigger's idea of the scroll position current.
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      // GSAP's ticker reports seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    // GSAP's own lag smoothing skips time after a long frame, which shows up
    // here as the page jumping ahead after a stall.
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, []);

  return null;
}
