"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";

const practiceAreas = [
  { title: "Election Petitions", note: "Representing candidates and parties in electoral disputes before tribunals and appellate courts." },
  { title: "Constitutional Law", note: "Advising on constitutional rights, governmental powers, and matters of public law." },
  { title: "Oil and Gas Law Practice", note: "Guiding upstream and downstream operators through Nigeria's energy regulatory framework." },
  { title: "Civil Law Practice", note: "Handling contractual, tortious, and property disputes across the civil courts." },
  { title: "Chieftaincy Cases", note: "Resolving traditional leadership and chieftaincy title disputes." },
  { title: "Maritime Law Practice", note: "Advising on shipping, admiralty claims, and port-related commercial matters." },
  { title: "Aviation Law", note: "Handling regulatory and liability matters within the aviation sector." },
  { title: "Land Law", note: "Advising on land ownership, tenure, and title disputes." },
  { title: "Commercial Law Practice", note: "Structuring and defending commercial transactions and business disputes." },
  { title: "Criminal Litigation", note: "Defending and prosecuting matters across Nigeria's criminal justice system." },
  { title: "General Civil Law Practice", note: "Providing broad-based counsel across everyday civil legal matters." },
  { title: "Public Sector & Government Advisory", note: "Advising government bodies and agencies on regulatory and policy matters." },
  { title: "Infrastructure & Project Finance", note: "Structuring legal frameworks for large-scale infrastructure and financing deals." },
  { title: "Real Estate & Property Law", note: "Guiding property transactions, leases, and title perfection." },
  { title: "Employment & Labour Law", note: "Advising employers and employees on workplace rights and disputes." },
];

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

          <div className="mt-8 w-full">
            <ScrollStack itemDistance={0} itemStackDistance={15} baseScale={0.85}>
              {practiceAreas.map((area, i) => (
                <ScrollStackItem key={area.title}>
                  <span className="scroll-stack-card-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="scroll-stack-card-title">{area.title}</span>
                  <span className="scroll-stack-card-note">{area.note}</span>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  );
}
