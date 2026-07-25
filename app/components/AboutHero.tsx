"use client";
export default function AboutHero() {
  return (
    <section className="w-full bg-white overflow-x-hidden px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-10 md:gap-14 lg:gap-20">
        <div
          className="relative shrink-0 rounded-[24px] overflow-hidden w-full sm:w-[380px] lg:w-[480px] max-w-full p-4 sm:p-5 lg:p-6 mx-auto lg:mx-0"
          style={{ background: "#150E09" }}
        >
          {/* TODO: swap in the actual portrait photo */}
          <img
            src="/images/prof-zach.jpg"
            alt="Professor Z. Adangor, SAN"
            className="w-full h-auto rounded-[16px] relative z-10"
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-[680px] min-w-0">
          <h1
            className="uppercase break-words"
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#181100",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 6vw, 3.5rem)",
              lineHeight: "120%",
              margin: 0,
            }}
          >
            Professor. Z Adangor, SAN &amp; Co
          </h1>
          <p
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#383131",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.2vw + 0.7rem, 1.25rem)",
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
