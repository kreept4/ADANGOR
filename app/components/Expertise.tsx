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
      <div className="max-w-[1440px] mx-auto px-[96px] py-24 flex flex-col md:flex-row gap-16">
        {/* Left: repeated Home / writeup rows */}
        <div className="flex-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-16 py-8 border-b border-[#2A2A2A]"
            >
              <h3
                style={{
                  color: "#FFF",
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: "138%",
                  letterSpacing: "-0.32px",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  width: "564px",
                  maxWidth: "100%",
                  color: "#A6A6A6",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "180%",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: EXPERTISE heading */}
        <div className="flex-shrink-0 md:w-[300px]">
          <h2
            style={{
              color: "#CD9610",
              textAlign: "right",
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "180%",
            }}
          >
            EXPERTISE
          </h2>
        </div>
      </div>
    </section>
  );
}
