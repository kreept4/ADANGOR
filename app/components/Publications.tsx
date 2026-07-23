"use client";

const books = [
  {
    title: "STREET ART FESTIVAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut ]",
    cover: "/images/zach-book.png",
  },
  {
    title: "STREET ART FESTIVAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut ]",
    cover: "/images/zach-book.png",
  },
  {
    title: "STREET ART FESTIVAL",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut ]",
    cover: "/images/zach-book.png",
  },
];

export default function Publications() {
  return (
    <section style={{ padding: "80px 114px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h2
          style={{
            color: "#181100",
            fontFamily: 'var(--font-roboto-slab), serif',
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "138%",
            letterSpacing: "-0.48px",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Publications
        </h2>
        <div style={{ height: "1px", alignSelf: "stretch", background: "#CD9610" }} />
      </div>

      <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
        {books.map((book, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", width: "312px", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  color: "var(--text-default, #000)",
                  fontFamily: 'var(--font-roboto-slab), serif',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Purchase
              </span>
              <span
                style={{
                  display: "flex",
                  padding: "6px 14px",
                  alignItems: "center",
                  borderRadius: "999px",
                  border: "1px solid #000",
                  color: "var(--text-default, #000)",
                  fontFamily: 'var(--font-roboto-slab), serif',
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Book
              </span>
            </div>

            <img src={book.cover} alt={book.title} style={{ width: "100%", height: "auto" }} />

            <p
              style={{
                fontFamily: 'var(--font-roboto-slab), serif',
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {book.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-roboto-slab), serif',
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "150%",
                margin: 0,
                color: "#444",
              }}
            >
              {book.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
