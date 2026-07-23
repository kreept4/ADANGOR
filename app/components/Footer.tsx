"use client";

export default function Footer() {
  return (
    <footer className="ft-section">
      <div className="ft-inner">
        <div className="ft-top">
          <div className="ft-brand">
            <svg width="17.754" height="32.623" viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.5147 0V2.33749C32.9233 2.33749 32.3843 2.54892 31.9714 2.89904C31.7334 3.09862 31.5374 3.34387 31.3992 3.62295C31.3992 3.62464 31.3974 3.62802 31.3957 3.6314C31.3712 3.68045 31.3467 3.73289 31.3257 3.78532C31.3204 3.79885 31.3152 3.81238 31.3099 3.82591L16.263 37.6976H13.0013L28.4577 2.89904H5.14103C3.95813 2.89904 2.99922 3.82591 2.99922 4.96929C2.99922 6.11266 3.95813 7.03954 5.14103 7.03954V9.93858C2.30278 9.93858 0 7.71271 0 4.96929C0 4.23015 0.166234 3.52992 0.468957 2.89904C1.27913 1.18905 3.06746 0 5.14103 0H33.5147Z" fill="rgba(180, 76, 18, 0.80)"/>
              <path d="M53.1532 35.6293C53.1532 36.3685 52.987 37.0687 52.6843 37.6996C51.8741 39.4096 50.0875 40.5986 48.0139 40.5986H0V37.6996C0.962413 37.6996 1.79008 37.1397 2.15055 36.3363C2.1558 36.3245 2.16105 36.3127 2.16805 36.2991L16.0373 5.07617H19.3008L4.80681 37.6996H48.0139C49.1968 37.6996 50.1557 36.7727 50.1557 35.6293C50.1557 34.486 49.1968 33.5591 48.0139 33.5591V30.6601C50.8522 30.6601 53.1532 32.8859 53.1532 35.6293Z" fill="rgba(180, 76, 18, 0.80)"/>
              <path d="M28.457 2.90039L42.951 35.5238H46.2109L31.7205 2.90039H28.457Z" fill="rgba(180, 76, 18, 0.80)"/>
              <path d="M25.3477 26.7372L39.2467 26.7879L40.538 23.894L26.639 23.8398L25.3477 26.7372Z" fill="rgba(180, 76, 18, 0.80)"/>
            </svg>
            <p className="ft-tagline">
              Built on Justice,<br />Guided by Ethics
            </p>
          </div>

          <div className="ft-right">
            <nav className="ft-nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/practice">Practice</a>
              <a href="/publications">Publications</a>
              <a href="/contact">Contact</a>
            </nav>
            <a href="mailto:Zacchaeusadangor@nigerianbar.ng" className="ft-mail">
              <span>Mail</span>
              <svg width="7.039" height="7.039" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 7.53866L7.5392 0.5M7.5392 6.80739V0.5L1.23181 0.500001" stroke="#FFFCF1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="ft-divider" />

        <p className="ft-partner">PROF. ZACCHAEUS ADANGOR (SAN)</p>
        <p className="ft-rights">&copy; 2026 All rights reserved.</p>
      </div>

      <style jsx>{`
        .ft-section {
          width: 100%;
          height: 434px;
          background: #000;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }
        .ft-inner {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
        }
        .ft-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
        }
        .ft-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ft-tagline {
          color: #949494;
          font-family: var(--font-roboto-slab), serif;
          font-size: 40px;
          font-weight: 500;
          line-height: 49px;
          letter-spacing: -1.793px;
          margin: 0;
        }
        .ft-right {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 24px;
        }
        .ft-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }
        .ft-nav a {
          color: #919191;
          font-family: var(--font-roboto-slab), serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 24px;
          text-decoration: none;
        }
        .ft-mail {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }
        .ft-mail span {
          color: #6D6D6D;
          font-family: Urbanist, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
        }
        .ft-divider {
          width: 100%;
          height: 1px;
          background: #FFD6BF;
          margin: 48px 0 32px 0;
        }
        .ft-partner {
          color: #916D58;
          font-family: var(--font-roboto-slab), serif;
          font-size: 24px;
          font-weight: 500;
          line-height: 49px;
          letter-spacing: -1.793px;
          margin: 0;
        }
        .ft-rights {
          color: #6D6D6D;
          font-family: var(--font-roboto-slab), serif;
          font-size: 13px;
          font-weight: 300;
          margin: 8px 0 0 0;
        }

        @media (max-width: 1024px) {
          .ft-section {
            height: auto;
            padding: 56px 48px;
          }
          .ft-right {
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .ft-tagline {
            font-size: 28px;
            line-height: 34px;
          }
          .ft-nav {
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
