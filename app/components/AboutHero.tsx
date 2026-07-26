"use client";

// The portrait that used to sit beside this biography has moved down the page
// to the Managing Partner block, where the Figma comp places it. The biography
// now runs as a single measured column.
export default function AboutHero() {
  return (
    <section className="ab-section">
      <div className="ab-inner">
        <h1 className="ab-title">Professor. Z Adangor, SAN &amp; Co</h1>
        <p className="ab-bio">
          The Managing Solicitor, Prof. Zacchaeus Adangor, SAN, DSSRS, MCIArb
          (UK), ksc, had extensive legal practice with E.C. Ukala, SAN &amp; CO,
          Efe Chambers, in Port Harcourt where he rose to become Deputy Head of
          Chambers. Upon leaving the Law Firm of E. C. Ukala SAN, &amp; Co, Prof.
          Zacchaeus Adangor, SAN, started his own law office, Z. Adangor &amp;
          Co, Enenwanra Chambers, Port Harcourt, with its first office situated
          at 72/73, Victoria Street, Port Harcourt Township, before finally
          relocating to 1D, Okomoko Street, D/Line, Port Harcourt.
        </p>
      </div>

      <style jsx>{`
        .ab-section {
          width: 100%;
          background: #fff;
          box-sizing: border-box;
          overflow-x: hidden;
        }
        .ab-inner {
          width: 100%;
          box-sizing: border-box;
          padding: clamp(40px, 5vw, 88px) var(--page-gutter)
            clamp(32px, 3.6vw, 56px);
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 1.8vw, 28px);
        }
        .ab-title {
          margin: 0;
          font-family: var(--font-roboto-slab), serif;
          color: #181100;
          font-weight: 700;
          font-size: var(--fs-hero);
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          overflow-wrap: break-word;
        }
        .ab-bio {
          margin: 0;
          /* Runs the full gutter-to-gutter width, like the title above it —
             with the portrait gone there is no column to hold a measure
             against, and a cap here just left a band of white on the right. */
          font-family: var(--font-roboto-slab), serif;
          color: #383131;
          font-weight: 400;
          font-size: var(--fs-lead);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}
