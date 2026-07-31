# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are **prospective clients** and **fellow lawyers** who want deeper context on Professor Zacchaeus Adangor’s journey as a lawyer — the chambers, the practice, the body of work — before deciding how to engage.

## Product Purpose

A public site for **Prof. Z. Adangor (SAN) & Co** that orients visitors around the firm’s practice, publications, and professional story so they can decide to **visit the firm** or **speak to a lawyer**.

Success: a first-time visitor understands who this practice is, what it stands for, and can take one of those two actions without hunting.

## Positioning

A senior Nigerian chambers led by a Senior Advocate of Nigeria, oriented around justice and ethics, with depth in election petitions, constitutional law, oil and gas, maritime, and commercial matters — and a published scholarly record that fellow counsel can verify.

## Operating Context

Visitors arrive from referrals, bar networks, search, or publication citations. They browse on desktop and mobile, often reading rather than shopping. Contact may mean a consult request or an office visit (Port Harcourt / listed offices).

## Capabilities and Constraints

- Static Next.js marketing site with routes: Home, About, Expertise, Publications, Contact.
- Contact form posts to Formspree; CSP allows only `formspree.io` outbound.
- No “Our Professionals” page yet — must not be linked until it exists.
- Firm name, logo mark (`/logo-icon.svg`), office facts, publication citations, and practice-area copy are product truth; do not invent credentials, awards, or case results.
- **Visual direction (confirmed):** integrate the Aesop apothecary design system grammar (cream canvas, graphite ink, 0px corners, hairline borders, restrained accent, photography carries warmth).
- **Palette (open):** color options derived from site imagery are for exploration only; final palette will be confirmed later.

## Brand Commitments

- Name: **Prof. Z. Adangor (SAN) & Co** / Professor Zacchaeus Adangor, SAN
- Wordmark lockup with logo mark (`#2F2100` in current SVG — subject to palette exploration)
- Voice: principled, precise, unhurried — chambers, not startup
- Binding reference: Aesop design system (`aesop.design.md`) as structural/visual grammar
- Do not fabricate testimonials, rankings, or unconfirmed awards

## Evidence on Hand

- Photography: `/public/images/hero-holographic.jpg`, `hero-judge.jpg`, `hero-judge-full.jpg`, `prof-zach.jpg`, `zach-book.png`, `hero-bg.jpg`, maps
- Logo: `/public/logo-icon.svg`
- Copy and data: `app/data/expertise.ts`, `app/data/publications.ts`, `app/data/offices.ts`
- Contact email in layout: `Zacchaeusadangor@nigerianbar.ng`
- Book cover is marked as a temporary render pending a clean scan

## Product Principles

1. **Journey before pitch** — visitors came for context on the lawyer’s path; the site earns trust by showing that path clearly.
2. **Two exits** — every major surface should make “speak to a lawyer” and “visit / find the firm” obvious.
3. **Chambers restraint** — Aesop-grade chrome: no shadows, no rounded chrome, hairlines over cards; photography and content do the warmth.
4. **Prove with record** — publications, practice depth, and verified biography outrank slogans.
5. **Palette stays provisional** until Oreoluwanimi confirms finals; exploration options are labeled as such.

## Accessibility & Inclusion

No product-specific standard beyond solid defaults: readable contrast on cream/graphite, keyboardable nav, reduced-motion respect for decorative motion.
