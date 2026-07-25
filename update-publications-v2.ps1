$target = ".\app\components\Publications.tsx"
$backup = ".\app\components\Publications.tsx.v2.bak"

if (-not (Test-Path $target)) {
    Write-Host "Can't find $target - run this from the lawfirm-site root." -ForegroundColor Red
    exit 1
}

Copy-Item $target $backup -Force
Write-Host "Backed up existing file to $backup"

$content = @'
"use client";

type Entry = {
  citation: string;
};

const featured = {
  title: "Handbook on Law of Evidence Applicable in Customary Courts in Nigeria",
  cover: "/images/zach-book.png", // TODO: swap for the actual scanned cover once you have a clean render (OCR confirms this is the right book)
  authors: "Prof Z Adangor",
  citation:
    "Adangor, Z., \u201cThe Role of the Court in the Regulation and Control of Take-overs and Mergers in Nigeria\u201d (2000) 3 Journal of Commercial, Private & Property Law (JCPPL) (pp. 97-111).",
};

const articles: Entry[] = [
  {
    citation:
      "Adangor, Z., \u201cDelimiting the Jurisdiction of the Federal High Court in civil causes and matters connected with Mines and Minerals including oil fields, oil mining, geological surveys and natural gas\u201d (2001) 4 Journal of Commercial, Private & Property Law (JCPPL) (pp. 1-20).",
  },
  {
    citation:
      "Adangor, Z., \u201cCan the Election Tribunal or the Court of Appeal Order a bye-election under the Electoral Act, 2002?\u201d (2004) 1 Ph.BJ (pp. 109-124).",
  },
  {
    citation:
      "Adangor, Z., \u201cOverview of Extra Judicial Killings and Criminalization of Victims in the South-South Geo-political Zone of Nigeria\u201d (2004-2005) 1 SSJLMS (pp. 124-139).",
  },
  {
    citation:
      "Adangor, Z., \u201cRights, Duties, Obligations and Privileges of Members of the House of Assembly under the 1999 Constitution\u201d (2002-2003) 7 PCLJ (pp. 162-183).",
  },
  {
    citation:
      "Adangor, Z., \u201cIs the original of a Public Document Inadmissible in Evidence?\u201d (2007) 2 Ph.BJ (Port Harcourt Bar Journal) (pp. 90-109).",
  },
  {
    citation:
      "Adangor, Z., \u201cIs the legal advice of the Director of Public Prosecutions (DPP) on whether or not an accused person should be arraigned before the High Court final?\u201d (2008) 1 ESUT Public Law Review (pp. 47-56).",
  },
  {
    citation:
      "Adangor, Z., & Aman, E. I., \u201cRethinking some provisions of the Rivers State Magistrates\u2019 Courts (Civil Procedure) Rules 2007\u201d (2007) 2 Ph.BJ (pp. 130-138).",
  },
  {
    citation:
      "Adangor, Z., \u201cLegislative Compliance with the United Nations Convention against Torture and other Cruel, Inhuman or Degrading treatment or punishment in Nigeria\u201d The Smoke Ball (2006) Vol.1 No.1 (pp. 16-21).",
  },
  {
    citation:
      "Jack-Osimiri, U., Okpara, G. A., Adangor, Z., and Jack-Osimiri, C., \u201cNature of Native Land Title and Compensation for Compulsory Acquisition\u201d (2006) 9 Year Book of New Zealand Jurisprudence (pp. 190-209).",
  },
  {
    citation:
      "Adangor, Z., \u201cAction for Declaration of Title to Right of Occupancy over Land Based on Traditional Evidence: Hurdles and Pitfalls\u201d (2014) 4 JPPL (pp. 91-100).",
  },
];

const books: Entry[] = [
  {
    citation:
      "Adangor, Z., Federalism and Natural Resource Governance in Nigeria: Agenda for Constitutional Reform (Sibon Books Ltd., Lagos 2015) 356 Pages.",
  },
  {
    citation:
      "Adangor, Z., Handbook on Law of Evidence Applicable in Customary Courts in Nigeria (Sibon Books Limited, Lagos 2016).",
  },
  {
    citation:
      "Adangor, Z., \u201cThe Nigerian Legal System and the Twin Concepts of Law and Justice\u201d in Adangor Z., Ajie H. A., and Nwaorgu O. C. (eds.) Contemporary Issues in Nigerian Legal System (2005) Chapter 1 (pp. 1-36).",
  },
  {
    citation:
      "Adangor, Z., \u201cHistorical Development of the Nigerian Legal System \u2013 Past, Present and Future\u201d in Adangor Z., Ajie H. A., and Nwaorgu O. C. (eds.) Contemporary Issues in Nigerian Legal System (2005) Chapter 3 (pp. 59-83).",
  },
  {
    citation:
      "Adangor, Z., \u201cCurrent Legal Issues in Local Government in Nigeria\u201d in Festus Emiri & Gowon Deinduomo (eds.), Law, Oil & Contemporary Issues in Nigeria (Malthouse Press Limited 2008) Chapter 13 (pp. 239-256).",
  },
  {
    citation:
      "Adangor, Z., \u201cThe Local Government Council: Challenges of Relating Effectively to the Executive Arm of the Local Government and the Grassroots\u201d in Muzan, A. O. (ed.), Introduction to Local Government Law and Practice in Nigeria (1991) Chapter 13 (pp. 191-213).",
  },
  {
    citation:
      "Adangor, Z., \u201cNigeria\u2019s Multiethnic Federalism and the Fear of Domination: Reviving the Underlying Principles through Devolution of Power\u201d in Okene, O. V. C. (ed), Readings In Law and Policy: Current Issues and Trends (Rivers State University, Port Harcourt 2017) pp. 498-536.",
  },
  {
    citation:
      "Adangor, Z., \u201cApplicability of English Common Law Rules of Evidence and the Interpretation of Section 3 of the Evidence Act, 2011\u201d in Worika, I. L. and Popnen S. (eds.), The Challenge of Justice: Essays in Honour of B. M. Wifa (Princeton & Associates Publishing Co. Ltd, Lagos 2017) (pp. 262-292).",
  },
  {
    citation:
      "Adangor, Z., \u201cInvalidating an Unsigned Writ of Summons: Time to Rethink the Law\u201d in Chris C. Wigwe (ed), Readings in Law and Contemporary Issues (Faculty of Law, RSU Port Harcourt, 2018) Chapter 13 (pp. 229-256).",
  },
  {
    citation:
      "Adangor, Z., \u201cSecurity and Welfare of the People and the Constitutionality of the Rivers State Neighbourhood Safety Corps Law, 2018\u201d in Okene, O. V. C. (ed), Excellence in Governance and Creativity: Legal Essays in Honour of His Excellency, Nyesom Ezenwo Wike, Governor of Rivers State (Princeton & Associates Publishing Co., Lagos 2019) (pp. 568-599).",
  },
];

// Splits a citation into the main body and a trailing "(pp. ...)" chunk
// so the page-range can be styled separately, per design spec.
function splitCitation(citation: string): { main: string; pp: string } {
  const match = citation.match(/^(.*?)(\(pp\.[^)]*\)\.?;?[^)]*)$/s);
  if (!match) return { main: citation, pp: "" };
  return { main: match[1].trim(), pp: match[2].trim() };
}

function EntryRow({ entry, index }: { entry: Entry; index: number }) {
  const { main, pp } = splitCitation(entry.citation);
  return (
    <div className="entry-row">
      <span className="entry-num">{String(index).padStart(2, "0")}</span>
      <p className="entry-citation">
        {main}
        {pp && <span className="entry-pp"> {pp}</span>}
      </p>
      <span className="entry-arrow" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" width="48.492" height="47.414" viewBox="0 0 67 67" fill="none">
          <ellipse cx="33.4591" cy="33.327" rx="24.246" ry="23.7072" transform="rotate(145 33.4591 33.327)" fill="#F3F3F3" fillOpacity="0.65" />
          <path d="M27.7203 37.3446L40.0784 28.6914" stroke="black" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29.5743 26.8377L40.0799 28.6901L38.2275 39.1958" stroke="black" strokeWidth="2.1552" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

export default function Publications() {
  return (
    <section className="pub-section">
      <div className="pub-inner">
        <div className="pub-heading-wrap">
          <h2 className="pub-heading">Publications</h2>
          <div style={{ height: "1px", alignSelf: "stretch", background: "#CD9610" }} />
        </div>

        <div className="pub-featured">
          <img src={featured.cover} alt={featured.title} className="pub-cover" />
          <div className="pub-featured-copy">
            <span className="pub-label">Authors</span>
            <p className="pub-authors">{featured.authors},</p>
            <div className="pub-divider" />
            <p className="pub-featured-citation">{featured.citation}</p>
          </div>
        </div>

        <div className="pub-list-wrap">
          <h3 className="pub-subheading">Journal Articles</h3>
          <div className="pub-list">
            {articles.map((entry, i) => (
              <EntryRow entry={entry} index={i + 1} key={`article-${i}`} />
            ))}
          </div>

          <h3 className="pub-subheading">Books &amp; Book Chapters</h3>
          <div className="pub-list">
            {books.map((entry, i) => (
              <EntryRow entry={entry} index={i + 1} key={`book-${i}`} />
            ))}
          </div>
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
          gap: 56px;
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

        .pub-featured {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .pub-cover {
          width: 220px;
          flex-shrink: 0;
          height: auto;
        }
        .pub-featured-copy {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 620px;
        }
        .pub-label {
          color: #cd9610;
          font-family: var(--font-roboto-slab), serif;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .pub-authors {
          font-family: "Nunito", sans-serif;
          color: #080808;
          font-size: 24px;
          font-weight: 500;
          line-height: 160.368%;
          letter-spacing: -2px;
          margin: 0;
        }
        .pub-divider {
          width: 600px;
          max-width: 100%;
          height: 2px;
          background: rgba(255, 141, 40, 0.3);
        }
        .pub-featured-citation {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 160%;
          color: #444;
          margin: 0;
        }

        .pub-list-wrap {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .pub-subheading {
          font-family: var(--font-roboto-slab), serif;
          font-weight: 700;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 0.2px;
          color: #181100;
          margin: 0;
        }
        .pub-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 48px;
          align-self: stretch;
        }
        .entry-row {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid #e5e0d5;
        }
        .entry-row:first-child {
          border-top: 1px solid #e5e0d5;
        }
        .entry-num {
          width: 30px;
          flex-shrink: 0;
          color: #7e7e7e;
          font-family: "Roboto", sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 120%;
        }
        .entry-citation {
          align-self: stretch;
          color: #000;
          font-family: "Merriweather", serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 178%;
          margin: 0;
          flex: 1;
        }
        .entry-pp {
          color: #797979;
          font-family: "Merriweather", serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 178%;
        }
        .entry-arrow {
          flex-shrink: 0;
          width: 48.492px;
          height: 47.414px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .pub-section {
            padding: 56px 48px;
          }
          .pub-heading {
            font-size: 36px;
          }
          .pub-featured {
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .pub-section {
            padding: 40px 24px;
          }
          .pub-heading {
            font-size: 28px;
          }
          .entry-row {
            gap: 12px;
          }
          .entry-citation,
          .entry-pp {
            font-size: 18px;
          }
          .entry-arrow {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </section>
  );
}
'@

Set-Content -Path $target -Value $content -Encoding utf8
Write-Host "Publications.tsx updated." -ForegroundColor Green
Write-Host "Diff it, then npm run dev." -ForegroundColor Yellow
