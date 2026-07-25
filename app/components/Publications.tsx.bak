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
    <section className="pub-section">
      <div className="pub-inner">
      <div className="pub-heading-wrap">
        <h2 className="pub-heading">Publications</h2>
        <div style={{ height: "1px", alignSelf: "stretch", background: "#CD9610" }} />
      </div>

      <div className="pub-grid" style={{ display: undefined }}>
        {books.map((book, i) => (
          <div key={i} className="pub-card">
            <div className="pub-card-top">
              <span className="pub-purchase">Purchase</span>
              <span className="pub-book-pill">Book</span>
            </div>
            <img src={book.cover} alt={book.title} className="pub-cover" />
            <p className="pub-title">{book.title}</p>
            <p className="pub-desc">{book.description}</p>
          </div>
        ))}
      </div>
      </div>

      <style jsx>{`
        .pub-section {
          padding: 80px 59px;
          box-sizing: border-box;
        }
        .pub-inner {
          max-width: 1440px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .pub-heading-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pub-heading {
          color: #181100;
          font-family: var(--font-roboto-slab), serif;
          font-size: 48px;
          font-weight: 400;
          line-height: 138%;
          letter-spacing: -0.48px;
          text-transform: uppercase;
          margin: 0;
        }
        .pub-grid {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        .pub-card {
          display: flex;
          flex-direction: column;
          width: 312px;
          max-width: 100%;
          gap: 16px;
        }
        .pub-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pub-purchase {
          color: var(--text-default, #000);
          font-family: var(--font-roboto-slab), serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .pub-book-pill {
          display: flex;
          padding: 6px 14px;
          align-items: center;
          border-radius: 999px;
          border: 1px solid #000;
          color: var(--text-default, #000);
          font-family: var(--font-roboto-slab), serif;
          font-size: 12px;
          font-weight: 400;
          text-transform: uppercase;
        }
        .pub-cover {
          width: 100%;
          height: auto;
        }
        .pub-title {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          margin: 0;
        }
        .pub-desc {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 150%;
          margin: 0;
          color: #444;
        }

        @media (max-width: 1024px) {
          .pub-section {
            padding: 56px 48px;
          }
          .pub-heading {
            font-size: 36px;
          }
          .pub-grid {
            gap: 24px;
          }
          .pub-card {
            width: calc(50% - 12px);
          }
        }

        @media (max-width: 640px) {
          .pub-section {
            padding: 40px 24px;
          }
          .pub-heading {
            font-size: 28px;
          }
          .pub-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
