// Single source of truth for Prof. Adangor's bibliography. The publications
// page renders the full citations; the hero carousel renders a trimmed form of
// the same records, so both stay in sync from here.

export type Entry = {
  citation: string;
};

export const featured = {
  title: "Handbook on Law of Evidence Applicable in Customary Courts in Nigeria",
  cover: "/images/zach-book.png", // TODO: swap for the actual scanned cover once you have a clean render (OCR confirms this is the right book)
  authors: "Prof Z Adangor",
  citation:
    "Adangor, Z., “The Role of the Court in the Regulation and Control of Take-overs and Mergers in Nigeria” (2000) 3 Journal of Commercial, Private & Property Law (JCPPL) (pp. 97-111).",
};

export const articles: Entry[] = [
  {
    citation:
      "Adangor, Z., “Delimiting the Jurisdiction of the Federal High Court in civil causes and matters connected with Mines and Minerals including oil fields, oil mining, geological surveys and natural gas” (2001) 4 Journal of Commercial, Private & Property Law (JCPPL) (pp. 1-20).",
  },
  {
    citation:
      "Adangor, Z., “Can the Election Tribunal or the Court of Appeal Order a bye-election under the Electoral Act, 2002?” (2004) 1 Ph.BJ (pp. 109-124).",
  },
  {
    citation:
      "Adangor, Z., “Overview of Extra Judicial Killings and Criminalization of Victims in the South-South Geo-political Zone of Nigeria” (2004-2005) 1 SSJLMS (pp. 124-139).",
  },
  {
    citation:
      "Adangor, Z., “Rights, Duties, Obligations and Privileges of Members of the House of Assembly under the 1999 Constitution” (2002-2003) 7 PCLJ (pp. 162-183).",
  },
  {
    citation:
      "Adangor, Z., “Is the original of a Public Document Inadmissible in Evidence?” (2007) 2 Ph.BJ (Port Harcourt Bar Journal) (pp. 90-109).",
  },
  {
    citation:
      "Adangor, Z., “Is the legal advice of the Director of Public Prosecutions (DPP) on whether or not an accused person should be arraigned before the High Court final?” (2008) 1 ESUT Public Law Review (pp. 47-56).",
  },
  {
    citation:
      "Adangor, Z., & Aman, E. I., “Rethinking some provisions of the Rivers State Magistrates’ Courts (Civil Procedure) Rules 2007” (2007) 2 Ph.BJ (pp. 130-138).",
  },
  {
    citation:
      "Adangor, Z., “Legislative Compliance with the United Nations Convention against Torture and other Cruel, Inhuman or Degrading treatment or punishment in Nigeria” The Smoke Ball (2006) Vol.1 No.1 (pp. 16-21).",
  },
  {
    citation:
      "Jack-Osimiri, U., Okpara, G. A., Adangor, Z., and Jack-Osimiri, C., “Nature of Native Land Title and Compensation for Compulsory Acquisition” (2006) 9 Year Book of New Zealand Jurisprudence (pp. 190-209).",
  },
  {
    citation:
      "Adangor, Z., “Action for Declaration of Title to Right of Occupancy over Land Based on Traditional Evidence: Hurdles and Pitfalls” (2014) 4 JPPL (pp. 91-100).",
  },
];

export const books: Entry[] = [
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
      "Adangor, Z., “The Nigerian Legal System and the Twin Concepts of Law and Justice” in Adangor Z., Ajie H. A., and Nwaorgu O. C. (eds.) Contemporary Issues in Nigerian Legal System (2005) Chapter 1 (pp. 1-36).",
  },
  {
    citation:
      "Adangor, Z., “Historical Development of the Nigerian Legal System – Past, Present and Future” in Adangor Z., Ajie H. A., and Nwaorgu O. C. (eds.) Contemporary Issues in Nigerian Legal System (2005) Chapter 3 (pp. 59-83).",
  },
  {
    citation:
      "Adangor, Z., “Current Legal Issues in Local Government in Nigeria” in Festus Emiri & Gowon Deinduomo (eds.), Law, Oil & Contemporary Issues in Nigeria (Malthouse Press Limited 2008) Chapter 13 (pp. 239-256).",
  },
  {
    citation:
      "Adangor, Z., “The Local Government Council: Challenges of Relating Effectively to the Executive Arm of the Local Government and the Grassroots” in Muzan, A. O. (ed.), Introduction to Local Government Law and Practice in Nigeria (1991) Chapter 13 (pp. 191-213).",
  },
  {
    citation:
      "Adangor, Z., “Nigeria’s Multiethnic Federalism and the Fear of Domination: Reviving the Underlying Principles through Devolution of Power” in Okene, O. V. C. (ed), Readings In Law and Policy: Current Issues and Trends (Rivers State University, Port Harcourt 2017) pp. 498-536.",
  },
  {
    citation:
      "Adangor, Z., “Applicability of English Common Law Rules of Evidence and the Interpretation of Section 3 of the Evidence Act, 2011” in Worika, I. L. and Popnen S. (eds.), The Challenge of Justice: Essays in Honour of B. M. Wifa (Princeton & Associates Publishing Co. Ltd, Lagos 2017) (pp. 262-292).",
  },
  {
    citation:
      "Adangor, Z., “Invalidating an Unsigned Writ of Summons: Time to Rethink the Law” in Chris C. Wigwe (ed), Readings in Law and Contemporary Issues (Faculty of Law, RSU Port Harcourt, 2018) Chapter 13 (pp. 229-256).",
  },
  {
    citation:
      "Adangor, Z., “Security and Welfare of the People and the Constitutionality of the Rivers State Neighbourhood Safety Corps Law, 2018” in Okene, O. V. C. (ed), Excellence in Governance and Creativity: Legal Essays in Honour of His Excellency, Nyesom Ezenwo Wike, Governor of Rivers State (Princeton & Associates Publishing Co., Lagos 2019) (pp. 568-599).",
  },
];

export type ParsedCitation = {
  authors: string;
  title: string;
  meta: string;
};

function tidy(value: string): string {
  return value.trim().replace(/^[,;.\s]+/, "").replace(/[,;\s]+$/, "");
}

// Breaks a citation into the three parts the publications page sets
// differently: the author line, the work's own title, and the journal or
// publisher tail. Most records quote the title, which makes the curly quotes
// the reliable cut point; the handful of monographs that carry no quotes are
// cut at the publisher parenthetical instead.
export function parseCitation(citation: string): ParsedCitation {
  const open = citation.indexOf("“");
  if (open !== -1) {
    const close = citation.indexOf("”", open + 1);
    const title = close === -1 ? citation.slice(open + 1) : citation.slice(open + 1, close);
    const meta = close === -1 ? "" : citation.slice(close + 1);
    return {
      authors: tidy(citation.slice(0, open)),
      title: tidy(title),
      meta: tidy(meta),
    };
  }

  const withoutAuthors = citation.replace(/^Adangor,\s*Z\.,\s*/, "");
  const authors = withoutAuthors === citation ? "" : "Adangor, Z.";
  const paren = withoutAuthors.indexOf(" (");
  if (paren === -1) {
    return { authors, title: tidy(withoutAuthors), meta: "" };
  }
  return {
    authors,
    title: tidy(withoutAuthors.slice(0, paren)),
    meta: tidy(withoutAuthors.slice(paren)),
  };
}

// Splits a citation into the main body and a trailing "(pp. ...)" chunk
// so the page-range can be styled separately, per design spec.
export function splitCitation(citation: string): { main: string; pp: string } {
  const match = citation.match(/^([\s\S]*?)(\(pp\.[^)]*\)\.?;?[^)]*)$/);
  if (!match) return { main: citation, pp: "" };
  return { main: match[1].trim(), pp: match[2].trim() };
}

// The hero tooltip leads with the work itself, not the author line, since the
// card already names him in the header. Titles are quoted in most records, so
// the opening quote mark is the reliable cut point; the handful of monographs
// that carry no quotes only need the "Adangor, Z., " prefix stripped.
function stripAuthors(citation: string): string {
  const quoteAt = citation.indexOf("“");
  if (quoteAt !== -1) return citation.slice(quoteAt);
  return citation.replace(/^Adangor, Z\.,\s*/, "");
}

export type HeroCitation = {
  text: string;
  pages: string;
};

// Every publication on record, featured monograph first, then journal articles,
// then books and chapters.
export const heroCitations: HeroCitation[] = [
  featured,
  ...articles,
  ...books,
].map(({ citation }) => {
  const { main, pp } = splitCitation(stripAuthors(citation));
  return { text: main, pages: pp ? ` ${pp}` : "" };
});
