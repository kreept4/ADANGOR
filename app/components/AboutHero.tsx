"use client";

export default function AboutHero() {
  return (
    <section className="w-full bg-white" style={{ padding: "128px 96px" }}>
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
        <div
          className="relative shrink-0 rounded-[24px] overflow-hidden"
          style={{ background: "#150E09", width: "480px", maxWidth: "100%", padding: "24px" }}
        >
          {/* TODO: swap in the actual portrait photo */}
          <img
            src="/images/prof-zach.jpg"
            alt="Professor Z. Adangor, SAN"
            className="w-full h-auto rounded-[16px] relative z-10"
          />
        </div>

        <div className="flex flex-col gap-6 max-w-[680px]">
          <h1
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#181100",
              fontWeight: 700,
              fontSize: "56px",
              lineHeight: "120%",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Professor. Z Adangor,
            <br />
            SAN &amp; Co
          </h1>
          <p
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#383131",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "170%",
              margin: 0,
            }}
          >
            The Managing Solicitor, Prof. Zacchaeus Adangor, SAN, DSSRS, MCIArb (UK), ksc, had extensive legal practice with E.C. Ukala, SAN &amp; CO, Efe Chambers, in Port Harcourt where he rose to become Deputy Head of Chambers. Upon leaving the Law Firm of E. C. Ukala SAN, &amp; Co, Prof. Zacchaeus Adangor, SAN, started his own law office, Z. Adangor &amp; Co, Enenwanra Chambers, Port Harcourt, with its first office situated at 72/73, Victoria Street, Port Harcourt Township, before finally relocating to 1D, Okomoko Street, D/Line, Port Harcourt.
          </p>
        </div>
      </div>
    </section>
  );
}
