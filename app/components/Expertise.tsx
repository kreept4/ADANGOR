"use client";

const items = [
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
  {
    title: "Home",
    text: "Our reputation has been earned through decades of principled legal practice. Every opinion we provide,",
  },
];

export default function Expertise() {
  return (
    <section
      className="w-full font-[family-name:var(--font-roboto-slab)]"
      style={{ background: "#070303" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-12 lg:px-[96px] lg:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left: repeated Home / writeup rows */}
        <div className="flex-1 min-w-0 order-2 lg:order-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-4 lg:gap-16 py-6 lg:py-8 border-b border-[#2A2A2A]"
            >
              <h3
                style={{
                  color: "#FFF",
                  fontWeight: 400,
                  lineHeight: "138%",
                  letterSpacing: "-0.32px",
                  textTransform: "uppercase",
                }}
                className="text-[24px] lg:text-[32px]"
              >
                {item.title}
              </h3>
              <p
                style={{
                  width: "564px",
                  maxWidth: "100%",
                  color: "#A6A6A6",
                  fontWeight: 400,
                  lineHeight: "180%",
                }}
                className="text-[15px] lg:text-[20px]"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: EXPERTISE heading - appears first on mobile, right column on desktop */}
        <div className="flex-shrink-0 lg:w-[300px] text-left lg:text-right order-1 lg:order-2">
          <h2
            style={{
              color: "#CD9610",
              fontWeight: 400,
              lineHeight: "180%",
            }}
            className="text-[32px] lg:text-[48px]"
          >
            EXPERTISE
          </h2>
        </div>
      </div>
    </section>
  );
}
