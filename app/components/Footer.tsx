"use client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice", href: "/practice" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="ft-section">
      <div className="ft-inner">
        <div className="ft-top">
          <svg
            className="ft-logo"
            width="112"
            height="85"
            viewBox="0 0 54 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Prof. Z. Adangor (SAN) & Co"
            role="img"
          >
            <path d="M33.5147 0V2.33749C32.9233 2.33749 32.3843 2.54892 31.9714 2.89904C31.7334 3.09862 31.5374 3.34387 31.3992 3.62295C31.3992 3.62464 31.3974 3.62802 31.3957 3.6314C31.3712 3.68045 31.3467 3.73289 31.3257 3.78532C31.3204 3.79885 31.3152 3.81238 31.3099 3.82591L16.263 37.6976H13.0013L28.4577 2.89904H5.14103C3.95813 2.89904 2.99922 3.82591 2.99922 4.96929C2.99922 6.11266 3.95813 7.03954 5.14103 7.03954V9.93858C2.30278 9.93858 0 7.71271 0 4.96929C0 4.23015 0.166234 3.52992 0.468957 2.89904C1.27913 1.18905 3.06746 0 5.14103 0H33.5147Z" fill="#2F2100" />
            <path d="M53.1532 35.6293C53.1532 36.3685 52.987 37.0687 52.6843 37.6996C51.8741 39.4096 50.0875 40.5986 48.0139 40.5986H0V37.6996C0.962413 37.6996 1.79008 37.1397 2.15055 36.3363C2.1558 36.3245 2.16105 36.3127 2.16805 36.2991L16.0373 5.07617H19.3008L4.80681 37.6996H48.0139C49.1968 37.6996 50.1557 36.7727 50.1557 35.6293C50.1557 34.486 49.1968 33.5591 48.0139 33.5591V30.6601C50.8522 30.6601 53.1532 32.8859 53.1532 35.6293Z" fill="#2F2100" />
            <path d="M28.457 2.90039L42.951 35.5238H46.2109L31.7205 2.90039H28.457Z" fill="#2F2100" />
            <path d="M25.3477 26.7372L39.2467 26.7879L40.538 23.894L26.639 23.8398L25.3477 26.7372Z" fill="#2F2100" />
          </svg>

          <nav className="ft-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="ft-headline">
          Built on Justice,
          <br />
          Guided by Ethics.
        </p>

        <div className="ft-divider" />

        <div className="ft-bottom">
          <p className="ft-partner">PROF. ZACCHAEUS ADANGOR (SAN)</p>
          <p className="ft-rights">&copy; 2026 All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .ft-section {
          width: 100%;
          min-height: 434px;
          background: #cd9610;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          font-family: var(--font-roboto-slab), serif;
          padding: clamp(48px, 5vw, 72px) clamp(20px, 5.5vw, 140px);
        }
        .ft-inner {
          width: 100%;
        }
        .ft-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }
        .ft-logo {
          flex-shrink: 0;
        }
        .ft-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 32px;
        }
        .ft-nav a {
          color: #2f2100;
          font-size: clamp(15px, 1.4vw, 20px);
          font-weight: 400;
          line-height: 1;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .ft-nav a:hover {
          opacity: 0.7;
        }
        .ft-headline {
          margin: 24px 0 0;
          color: #fff;
          font-size: clamp(24px, 2.6vw, 36px);
          font-weight: 500;
          line-height: 1.24;
          letter-spacing: -0.045em;
          text-transform: uppercase;
        }
        .ft-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.45);
          margin: 32px 0 16px;
        }
        .ft-bottom {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .ft-partner {
          margin: 0;
          color: #000;
          font-size: clamp(16px, 1.6vw, 22px);
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: -0.045em;
        }
        .ft-rights {
          margin: 0;
          color: #2f2100;
          font-size: 13px;
          font-weight: 300;
        }

        /* Phones — logo and links stack, nav runs as a wrapping row. */
        @media (max-width: 640px) {
          .ft-section {
            min-height: 0;
          }
          .ft-top {
            flex-direction: column;
            gap: 32px;
          }
          .ft-nav {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 16px 20px;
          }
          .ft-logo {
            width: 84px;
            height: 64px;
          }
        }
      `}</style>
    </footer>
  );
}
