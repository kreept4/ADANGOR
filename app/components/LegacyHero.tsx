"use client";

import type { CSSProperties } from "react";

const timelineItems = [
  {
    label: "SAN Conferment",
    date: "AUG. 20\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
  {
    label: "SAN Conferment",
    date: "AUG. 20\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
  {
    label: "SAN Conferment",
    date: "AUG. 20\\2020",
    summary:
      "Our reputation has been earned through decades of principled legal practice. Every opinion we provide, every case",
  },
];

const valueTabs = ["JUSTICE", "INTEGRITY", "HONESTY"];

const awards = [
  {
    title:
      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",
    org: "IJAW NATIONAL CONGRESS",
  },
  {
    title:
      "Special Recognition Award by the Nigerian Bar Association, Port Harcourt Branch.",
    org: "IJAW NATIONAL CONGRESS",
  },
];

function ConferralMarker({ style }: { style?: CSSProperties }) {
  return (
    <svg width="40" height="66" viewBox="0 0 40 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <line x1="19.5" y1="-1.09278e-07" x2="19.5" y2="33" stroke="#7D7A7A" strokeWidth="5" />
      <ellipse cx="20" cy="45.5" rx="20" ry="20.5" fill="white" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="126.36" height="225.173" viewBox="0 0 127 226" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.5226 95.3281C66.5226 95.3281 68.2199 158.925 83.4949 158.925H42.8633C58.1383 158.925 59.8357 95.3281 59.8357 95.3281H66.5226Z" fill="url(#paint0_linear_646_22327)" />
      <path d="M32.2656 167.759C32.2656 162.88 36.2203 158.926 41.0986 158.926H85.2634C90.1418 158.926 94.0964 162.88 94.0964 167.759V173.058C94.0964 177.937 90.1418 181.891 85.2634 181.891H41.0986C36.2203 181.891 32.2656 177.937 32.2656 173.058V167.759Z" fill="url(#paint1_linear_646_22327)" />
      <path d="M50.5069 16.7785C56.0273 5.59283 58.7876 0 63.1802 0C67.5729 0 70.3331 5.59283 75.8536 16.7785L81.9575 29.1463C83.5682 32.41 84.3736 34.0419 85.7848 35.0671C87.196 36.0924 88.9968 36.3541 92.5985 36.8775L106.247 38.8607C118.591 40.6544 124.764 41.5513 126.121 45.7289C127.478 49.9066 123.012 54.26 114.08 62.9668L104.204 72.5938C101.597 75.1342 100.294 76.4044 99.7552 78.0634C99.2161 79.7223 99.5238 81.5159 100.139 85.1031L102.47 98.6966C104.579 110.991 105.633 117.138 102.08 119.72C98.526 122.302 93.0055 119.4 81.9646 113.595L69.7568 107.177C66.5353 105.483 64.9245 104.637 63.1802 104.637C61.4359 104.637 59.8251 105.483 56.6037 107.177L44.3958 113.595C33.3549 119.4 27.8344 122.302 24.2807 119.72C20.727 117.138 21.7813 110.991 23.8899 98.6966L26.2214 85.1031C26.8367 81.5159 27.1443 79.7223 26.6053 78.0634C26.0662 76.4044 24.7631 75.1342 22.1569 72.5938L12.2806 62.9668C3.34824 54.26 -1.11791 49.9066 0.239489 45.7289C1.59689 41.5513 7.76897 40.6544 20.1131 38.8607L33.7619 36.8775C37.3636 36.3541 39.1645 36.0924 40.5757 35.0671C41.9868 34.0419 42.7922 32.41 44.403 29.1463L50.5069 16.7785Z" fill="url(#paint2_linear_646_22327)" />
      <path d="M94.0974 170.406C98.9757 170.406 102.93 174.361 102.93 179.239V216.338C102.93 221.216 98.9757 225.17 94.0974 225.17H32.2666C27.3882 225.17 23.4336 221.216 23.4336 216.338V179.239C23.4336 174.361 27.3882 170.406 32.2666 170.406H94.0974ZM41.0995 183.656C38.6604 183.656 36.683 185.633 36.683 188.072V210.154C36.683 212.594 38.6604 214.571 41.0995 214.571H85.2644C87.7035 214.571 89.6809 212.594 89.6809 210.154V188.072C89.6809 185.633 87.7035 183.656 85.2644 183.656H41.0995Z" fill="url(#paint3_linear_646_22327)" />
      <path d="M10.3945 217.223C10.3945 212.833 13.9537 209.273 18.3442 209.273H108.44C112.831 209.273 116.39 212.833 116.39 217.223C116.39 221.614 112.831 225.173 108.44 225.173H18.3442C13.9537 225.173 10.3945 221.614 10.3945 217.223Z" fill="url(#paint4_linear_646_22327)" />
      <defs>
        <linearGradient id="paint0_linear_646_22327" x1="64.2483" y1="95.3283" x2="64.2484" y2="163.311" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FF8D28" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint1_linear_646_22327" x1="63.1812" y1="158.926" x2="63.1812" y2="181.891" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint2_linear_646_22327" x1="67.1317" y1="-8.89993" x2="67.1317" y2="151.615" gradientUnits="userSpaceOnUse">
          <stop offset="0.55" stopColor="#FACB31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint3_linear_646_22327" x1="63.1822" y1="170.406" x2="63.1822" y2="225.17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
        <linearGradient id="paint4_linear_646_22327" x1="63.3927" y1="209.273" x2="63.3927" y2="225.173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FAAA31" />
          <stop offset="1" stopColor="#F57E16" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function LegacyHero() {
  return (
    <section className="w-full bg-white" style={{ padding: "0 clamp(12px, 6vw, 96px) clamp(48px, 10vw, 128px)" }}>
      <div
        className="mx-auto flex flex-col gap-16"
        style={{ maxWidth: "1400px", background: "#FFFFFF", borderRadius: "24px", padding: "clamp(14px, 5vw, 64px)" }}
      >
          <h2
            style={{
              fontFamily: "var(--font-roboto-slab), serif",
              color: "#CD9610",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "138%",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            A Legacy of Diligence and Integrity
          </h2>

          <div
            className="relative w-full rounded-[24px] flex flex-col gap-10"
            style={{
              background: "#0D0904",
              overflow: "visible",
              ["--quoteW" as any]: "clamp(190px, 41.76vw, 585px)",
              ["--quoteH" as any]: "clamp(140px, 19.5vw, 273px)",
              ["--cardPadY" as any]: "clamp(24px, 4vw, 56px)",
              ["--cardPadX" as any]: "clamp(20px, 4vw, 64px)",
              paddingTop: "var(--cardPadY)",
              paddingBottom: "var(--cardPadY)",
              paddingLeft: "var(--cardPadX)",
              paddingRight: "var(--cardPadX)",
            }}
          >
            <div className="flex flex-col gap-10">
              {/* Section heading â€” sits above the whole row (per Figma, node 644:23938),
                  not tied to the middle column's own height, so it can't push that
                  column's marker out of line with the other two. */}
              <span
                className="text-center"
                style={{ fontFamily: "var(--font-roboto-slab), serif", color: "#fff", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)" }}
              >
                {timelineItems[1].label}
              </span>

              <div className="flex flex-col gap-4">
                {/* Above the line: every column shows only its date now, so all three
                    columns are the same height here and the markers land on one row. */}
                <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-10">
                  {timelineItems.map((item, i) => (
                    <div key={i} className="flex justify-center text-center">
                      <span style={{ fontFamily: "var(--font-roboto-mono), monospace", color: "#8A8A8A", fontSize: "12px", letterSpacing: "1px" }}>
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Marker in its natural orientation: stem on top, ball below.
                    Figma (node 644:23935 line vs. 644:23940/57/47 markers) puts the
                    dashed line 56px down the marker's 66px height â€” inside the lower
                    part of the ball, not at its top edge â€” so the ball reads as
                    resting on the line with the stem pointing up out of it. */}
                <div className="relative" style={{ height: "66px" }}>
                  <div className="absolute inset-0 grid grid-cols-3" style={{ zIndex: 1 }}>
                    {timelineItems.map((_, i) => (
                      <div key={i} className="flex justify-center">
                        <ConferralMarker />
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "56px",
                      borderTop: "1px dashed rgba(255,255,255,0.35)",
                      zIndex: 0,
                    }}
                  />
                </div>

                {/* Below the line: label + write-up for the first and third columns only. */}
                <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-10">
                  {timelineItems.map((item, i) =>
                    i === 1 ? (
                      <div key={i} />
                    ) : (
                      <div key={i} className="flex flex-col items-center text-center gap-2">
                        <span style={{ fontFamily: "var(--font-roboto-slab), serif", color: "#fff", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 16px)" }}>
                          {item.label}
                        </span>
                        <p className="text-center" style={{ fontFamily: "var(--font-roboto-slab), serif", color: "#B5B5B5", fontSize: "clamp(9px, 1.3vw, 14px)", lineHeight: "140%", margin: 0 }}>
                          {item.summary}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Paragraph and quote card are flex siblings now â€” the quote card can
                only overflow the black card's own edge via negative margin, it can
                never overlap the paragraph or the timeline above it. */}
            <div className="flex flex-col lg:flex-row gap-8 items-end">
              <p
                style={{
                  fontFamily: "var(--font-roboto-mono), monospace",
                  color: "#BDB496",
                  fontSize: "clamp(16px, 2vw, 24px)",
                  fontWeight: 400,
                  lineHeight: "146%",
                  letterSpacing: "-0.24px",
                  flex: "1 1 auto",
                  minWidth: "260px",
                  maxWidth: "645.011px",
                  margin: 0,
                }}
              >
                Over three decades of practice, Prof. Adangor has been recognised by institutions across Nigeria for his extraordinary contributions to law, justice, and public service.
              </p>

              {/* Invisible spacer reserves the gold box's footprint in the flex row so the
                  paragraph wraps correctly. The real box is positioned absolutely below,
                  which takes it out of flow entirely â€” it can bleed past the card's edge
                  without shrinking the card the way a negative margin on an in-flow
                  element would. */}
              {/* Invisible spacer reserves the gold box's full footprint (width AND
                  height) in the flex row so the paragraph wraps correctly and the
                  card doesn't collapse around a box that's no longer in flow. */}
              <div
                aria-hidden
                style={{
                  width: "var(--quoteW)",
                  height: "var(--quoteH)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* White pocket: Figma builds this as a boolean-subtract cutout in the
                black card itself (node 644:23924, 615.29 x 297 at (819.78, 2696.996)),
                revealing the white page behind it â€” not a same-size shape peeking out
                bottom-right. The cutout is bigger than the gold box on every side, but
                its right/bottom edges are almost flush with the box's (within ~4px),
                while its top/left edges sit ~31px/~28px further out. So the visible
                margin reads on the TOP and LEFT of the box, not the bottom-right. */}
            <div
              aria-hidden
              className="absolute rounded-[26px]"
              style={{
                background: "#FFFFFF",
                width: "calc(var(--quoteW) + 16px)",
                height: "calc(var(--quoteH) + 16px)",
                right: "-14px",
                bottom: "-10px",
                zIndex: 0,
              }}
            />

            {/* Exact geometry pulled from Figma (node 644:23925): box is 584.572 x 273
                at (851, 2725) inside a card at (20, 2103) 1400 x 881.997 â€” meaning it
                overflows the card by ~15.6px right / ~13px bottom. Positioned absolute
                and anchored to the card (which is position: relative). Offset is a
                fixed px value, not vw â€” vw scales with the whole browser viewport,
                not this 1400px-capped card, so it kept growing past intent on wide
                screens. */}
            <div
              className="absolute flex items-center"
              style={{
                background: "#CD9610",
                border: "1px solid #000",
                borderRadius: "26px",
                boxSizing: "border-box",
                padding: "clamp(14px, 5.46vw, 76px) clamp(10px, 2.64vw, 37px)",
                gap: "clamp(8px, 1.714vw, 24px)",
                width: "var(--quoteW)",
                height: "var(--quoteH)",
                right: "-14px",
                bottom: "-10px",
                zIndex: 1,
              }}
            >
                <span
                  aria-hidden
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "clamp(16px, 6.857vw, 96px)",
                    lineHeight: "1",
                    textDecorationLine: "line-through",
                    flexShrink: 0,
                  }}
                >
                  &ldquo;
                </span>

                <div className="flex items-end justify-between" style={{ flex: "1 1 0%", gap: "clamp(12px, 1.714vw, 24px)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-nunito), sans-serif",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "clamp(15px, 2vw, 28px)",
                      lineHeight: "144%",
                      margin: 0,
                    }}
                  >
                    The greatest glory in living lies not in never falling, but in rising every time we fall.
                  </p>
                  <span
                    aria-hidden
                    style={{
                      fontFamily: "var(--font-nunito), sans-serif",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 6.857vw, 96px)",
                      lineHeight: "1",
                      textDecorationLine: "line-through",
                      transform: "rotate(180deg) scaleY(-1)",
                      flexShrink: 0,
                    }}
                  >
                    &ldquo;
                  </span>
                </div>
              </div>
            </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="relative flex shrink-0" style={{ gap: "clamp(12px, 1.5vw, 21px)" }}>
              <div className="relative flex items-start" style={{ zIndex: 1, gap: "clamp(12px, 1.5vw, 21px)" }}>
                {valueTabs.map((word, i) => {
                  const isHonesty = word === "HONESTY";
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center"
                      style={{
                        background: "rgba(255,242,178,0.66)",
                        padding: isHonesty
                          ? "clamp(8px, 2.5vw, 12px) clamp(12px, 4vw, 24px) clamp(70px, 24vw, 150px) clamp(12px, 4vw, 24px)"
                          : "clamp(8px, 2.5vw, 12px) clamp(12px, 4vw, 24px)",
                        borderRadius: "6px",
                      }}
                    >
                      {word.split("").map((letter, j) => (
                        <span
                          key={j}
                          style={{
                            fontFamily: "var(--font-roboto-slab), serif",
                            color: "#533700",
                            fontSize: "clamp(13px, 4vw, 28px)",
                            fontWeight: 400,
                            lineHeight: "120%",
                            textAlign: "center",
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4" style={{ width: "100%", alignSelf: "stretch" }}>
              <h3
                style={{
                  fontFamily: "var(--font-roboto-slab), serif",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  lineHeight: "180%",
                  textAlign: "right",
                  textTransform: "uppercase",
                  width: "100%",
                  margin: 0,
                }}
              >
                Awards and Recognition
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-roboto-slab), serif",
                  color: "#3F3F3F",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.8vw, 24px)",
                  lineHeight: "170.66%",
                  textAlign: "right",
                  width: "100%",
                  margin: 0,
                }}
              >
                A showcase of distinguished honours recognizing exceptional legal advocacy, constitutional leadership, public service, and enduring contributions to the administration of justice and national development.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row gap-8"
            style={{ background: "#E0B117", borderRadius: "8px", padding: "32px" }}
          >
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center justify-center gap-8 bg-white rounded-[24px]"
                style={{ padding: "32px 0" }}
              >
                <TrophyIcon />
                <h4
                  style={{
                    fontFamily: "var(--font-roboto-slab), serif",
                    color: "#000",
                    fontWeight: 600,
                    fontSize: "clamp(18px, 2.2vw, 24px)",
                    lineHeight: "170.66%",
                    textAlign: "center",
                    padding: "0 clamp(16px, 3vw, 32px)",
                    margin: 0,
                  }}
                >
                  {award.title}
                </h4>
                <div className="flex flex-col items-center gap-6" style={{ width: "100%", padding: "0 clamp(16px, 3vw, 32px)" }}>
                  <div style={{ width: "100%", borderTop: "1px solid rgba(0,0,0,0.15)" }} />
                  <div className="flex items-start" style={{ width: "100%", gap: "clamp(12px, 2vw, 24px)" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-roboto-slab), serif",
                        color: "#000",
                        fontWeight: 500,
                        fontSize: "clamp(15px, 1.8vw, 20px)",
                        lineHeight: "130%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      ORG:
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-roboto-slab), serif",
                        color: "#5E5E5E",
                        fontWeight: 500,
                        fontSize: "clamp(15px, 1.8vw, 20px)",
                        lineHeight: "130%",
                        textAlign: "right",
                        flex: "1 1 auto",
                      }}
                    >
                      {award.org}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
