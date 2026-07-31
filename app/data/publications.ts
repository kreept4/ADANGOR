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
  {
    citation:
      "Adangor, Z., “Lawyer’s Negligence or Incompetence in the Conduct of a Client’s Case: What Categories and Degree of Negligence are Punishable?” (2014) 1 (No. 1) (January-June) Ife Journal of International and Comparative Law (pp. 185-214).",
  },
  {
    citation:
      "Adangor, Z., “Petroleum Industry Bill (PIB) 2012 and the Niger Delta Region of Nigeria: Panacea or Placebo?” (2015) 38 Journal of Law, Policy and Globalization (pp. 47-62); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “The Presidential Pardon Granted Chief D. S. P. Alamieyeseigh: Time to Revisit the President’s Pardoning Powers” (2015) 39 Journal of Law, Policy and Globalization (JLPG) (pp. 178-191); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “The Principle of Derivation and the Search for Distributive Justice in the Niger Delta Region of Nigeria: The Journey So Far” (2015) 41 Journal of Law, Policy and Globalization (JLPG) (pp. 115-133); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “Depoliticizing the Appointment of the Chief Judge of a State in Nigeria: Lessons from the Crisis over the Appointment of the Chief Judge of Rivers State of Nigeria” (2015) 44 Journal of Law, Policy and Globalization (pp. 62-79); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “What is Innovative in the Evidence Act, 2011?” (2015) 43 Journal of Law, Policy and Globalization (JLPG) (pp. 34-48); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “Reflections on the Agitations for Resource Control in the Niger Delta Region of Nigeria: Lessons from Seven Federations” (2015) 1 & 2 Ife Journal of International & Comparative Law (pp. 171-218).",
  },
  {
    citation:
      "Adangor, Z., “The Petroleum Industry Bill (PIB) 2012 and the Principle of Vicarious Liability of Oil-Producing States and Local Government Councils for Sabotage of Petroleum Facilities: Resurrecting an Old Colonial Policy in the Niger Delta Region of Nigeria?” (2016) 8(1) Journal of Law and Conflict Resolution (pp. 1-14); available at http://www.academicjournals.org/JLCR",
  },
  {
    citation:
      "Adangor, Z., “Globalization of Legal Practice in Nigeria: Challenges and Obstacles” (2016) 51 Journal of Law, Policy and Globalization (JLPG) (pp. 7-20); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “Enhancing State Control of the Oil and Gas Sector in Nigeria: Development of Indigenous Technology as an option” (2016) 2(1) Port Harcourt Journal of Business Law (pp. 92-110).",
  },
  {
    citation:
      "Adangor, Z., “E-Business and the Admissibility of Electronically-Generated Evidence in Nigeria” (2016) 2(2) Port Harcourt Journal of Business Law (pp. 247-264).",
  },
  {
    citation:
      "Adangor, Z., “Enforcement of Fundamental Rights against Agencies of the Federal Government in the Federal and State High Courts: The Concurrent Jurisdictional Controversy” (2016) 8 (2) Journal of Jurisprudence and Contemporary Issues (pp. 165-185).",
  },
  {
    citation:
      "Adangor, Z., “Civil Actions founded on Fraud: Reflections on Substantive and Procedural Issues” (2017) 5 (1) Journal of Property Law and Contemporary Issues (pp. 105-136).",
  },
  {
    citation:
      "Adangor, Z., “A Critical Discourse on the Extension of International Legal Personality to Multinational Corporations” (2017) 7 (1) AJLC (pp. 113-123); available at www.centurypublications.com",
  },
  {
    citation:
      "Adangor, Z., “Separatist Agitations and the Search for Political Stability in Nigeria” (2017) 3(1) Donnish Journal of Law and Conflict Resolution (pp. 001-017); available at http://www.donnishjournals.org/djlcr",
  },
  {
    citation:
      "Adangor, Z., “Agitation for the Sovereign State of Biafra and the Right to Self-Determination: Highlighting the Illusions” (2017) 9 (1) Journal of Jurisprudence and Contemporary Issues (pp. 324-341).",
  },
  {
    citation:
      "Emejuru, C. T., and Adangor, Z., “Nigerian Maritime Jurisdiction and Effective Arrest and Detention of Vessels and Persons in Nigeria: An Overview” (2017) 9 (1) Journal of Jurisprudence and Contemporary Issues (pp. 313-323).",
  },
  {
    citation:
      "Adangor, Z., “Proposals for Equitable Governance and Management of Natural Resources in Nigeria” (2018) 7 (1) International Law Review (pp. 213-226); available at http://www.ccsenet.org/journal/index.php/ilr/issue/view/",
  },
  {
    citation:
      "Adangor, Z., “Core Issues Involved in Application for Extension of Time Within Which to Appeal” (2018) 5(1) R/S/UJPL (Rivers State University Journal of Public Law) (pp. 36-63).",
  },
  {
    citation:
      "Adangor, Z., and Emejuru, C. T., “Freedom of Information Act, 2011 and the Quest for Good Governance in Nigeria: Challenges and Prospects” (2018) 5(1) R/S/UJPL (Rivers State University Journal of Public Law) (pp. 488-514).",
  },
  {
    citation:
      "Adangor, Z., “The Ijaws (Izons) of the Niger Delta Region and Political Agitations in Nigeria: Past and Present” (2018) 5 (No. 3) Advances in Social Sciences Research Journal (pp. 361-376); available at http://scholarpublishing.org/index.php/ASSRJ/article/view/4304",
  },
  {
    citation:
      "Adangor, Z., “Obstacles Hindering Effective Implementation of the Contributory Pension Scheme in Nigeria: The Way Forward” (2018) 4(1) DELSU Law Review (pp. 142-178).",
  },
  {
    citation:
      "Adangor, Z., “The Proscription of the Indigenous People of Biafra (IPOB) and the Politics of Terrorism in Nigeria” (2018) 10 (1) Journal of Jurisprudence and Contemporary Issues (pp. 143-156).",
  },
  {
    citation:
      "Adangor, Z., “The Role of Women in the Fight against Corruption in Nigeria under the Administration of Criminal Justice Act, 2015 and the corresponding State Laws” (2018) 7(1) Port Harcourt Law Journal (pp. 12-4).",
  },
  {
    citation:
      "Adangor, Z., “Garnishee Proceedings: An examination of the Right of the Judgment Debtor to be Heard” (2018) 4 (1) Port Harcourt Journal of Business Law (pp. 24-37).",
  },
  {
    citation:
      "Kingston, K. G., and Adangor, Z., “The Vacuum in Nigeria’s Crude Oil Laws: An Inquiry Into the Decommissioning of Onshore and Offshore Facilities” (2018) 8(1) Cranbrook Law Review (pp. 1-8); available at www.juliapublishers.com",
  },
  {
    citation:
      "Adangor, Z., and Kingston, K. G., “Composition of Customary Courts in Rivers State of Nigeria: A Case for Appointment of Chiefs as Members” (2018) 1 (3) Journal of Law and Judicial System (pp. 82-95); available at https://www.sryahwapublications.com/journal-of-law-and-judicial-system/volume-1-issue-3.php",
  },
  {
    citation:
      "Adangor, Z., “No Case Submission in Civil Trials and Objection to the Jurisdiction of the Court after close of Claimant’s Case: An Analysis” (2018) 1 (1) JPPL (Abia State University) (pp. 105-123).",
  },
  {
    citation:
      "Adangor, Z., “Book Review: Chieftaincy Institution Among the Kalabari Ijaw by Chief (Justice) A. G. Karibi-Whyte” (Ulamba Publishers, ISBN: 978-978-530-65-3-8, 2018) (2018) 79 Journal of Law, Policy and Globalization (JLPG) (pp. 63-69); available at www.iiste.org",
  },
  {
    citation:
      "Adangor, Z., “Redefining Estoppel as a Shield and Sword under Nigerian Evidence Law” (2018) 8 (1) Journal of Property Law and Contemporary Issues (pp. 413-431).",
  },
  {
    citation:
      "Adangor, Z., and Arugu, O. W., “An Evaluation of the Rights and Duties of Coastal States Under the United Nations Convention on the Law of the Sea 1982” (2018) 8 (1) AJLC (pp. 65-84); available at www.centurypublications.com",
  },
  {
    citation:
      "Adangor, Z., “Promoting Internal Democracy in Political Parties in Nigeria: Looking Beyond Section 87(9) of the Electoral Act, 2010 (as Amended)” (2019) 9 (1) AJLC (pp. 1-16); available at www.centurypublications.com",
  },
  {
    citation:
      "Adangor, Z., and Arugu, O. W., “Powers and Functions of Local Government Legislative Council under the Rivers State Local Government Law, 2018” (2018) 5 (No. 2) Rivers State University Journal of Public Law (R/S/UJPL) (pp. 15-40).",
  },
  {
    citation:
      "Adangor, Z., and Gilbert, S., “A Review of Key Issues in the Arbitration and Conciliation Bill, 2017” (2018) 5 (No. 2) R/S/UJPL (pp. 138-152).",
  },
  {
    citation:
      "Adangor, Z., and Gilbert, S., “Future of International Arbitration: What Changes are on the Horizon?” (2019) 9 (No. 1) Journal of Property Law and Contemporary Issues (pp. 195-206).",
  },
  {
    citation:
      "Adangor, Z., “Locus Standi in Constitutional Cases in Nigeria: Is the Shift from Conservatism to Liberalism Real?” (2019) 12 (1) Journal of Jurisprudence and Contemporary Issues (pp. 73-91).",
  },
  {
    citation:
      "Adangor, Z., “Sanctity of Oath of Office under Nigerian Constitutional Law” (2019) 11 (1) Journal of Jurisprudence and Contemporary Issues (pp. 234-246).",
  },
  {
    citation:
      "Adangor, Z., “Towards Speedy, Cheap and Efficient Administration of Justice by Customary Courts in Nigeria” (2020) 1 (No. 1) Gregory University Law Journal (pp. 42-56).",
  },
  {
    citation:
      "Adangor, Z., “Power of the Attorney-General to Institute Criminal Proceedings Without Prior Police Investigation: Rationale, Scope and Limits” (2020) 1 Rivers State Ministry of Justice Journal of Law and Practice (pp. 1-18).",
  },
  {
    citation:
      "Adangor, Z., “Evidence Act, 2011 and Remote Hearing of Matters by the Courts: Challenges and Pitfalls” (2020) 1 Rivers State Ministry of Justice Journal of Law and Practice (pp. 143-152).",
  },
  {
    citation:
      "Adangor, Z., “Remand Proceedings under the Rivers State Administration of Criminal Justice Law, 2015: Challenges and Hurdles” (Forthcoming).",
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
  {
    citation:
      "Adangor, Z., “The Business of Law Practice and Law Teaching: A Case for Law Teachers” in Akolokwu, G. O., Gabriel-Whyte, A. E., and Fab-Eme, C. (eds.), Pedagogy in Legal Education: Every Law Teacher’s Handbook (Princeton & Associates Publishing Co. Limited, Lagos 2019) (pp. 201-226).",
  },
  {
    citation:
      "Adangor, Z., “Challenges of Natural Resource Federalism in Nigeria” in Benson Dele Oloworaran and Uchechukwu E. Oloworaran (eds.), Current Law and Policy Issues: Essays in Honour of The Honourable Justice C. A. Okirie, Judge (Institute of Human Capacity Development and Continuing Education, Port Harcourt 2020) (pp. 20-65).",
  },
  {
    citation:
      "Adangor, Z., Allen, F., and Amadi, E., “Role of the Legislature in the Administration and Governance of Rivers State since Creation in 1967 to the Present Day” in Karibi T. George and Biobele Da-Wariboko (eds.), Rivers Golden Expedition: Trials and Triumphs of Rivers People (2019).",
  },
  {
    citation:
      "Adangor, Z., “The Power of the Court to Administer Justice: Philosophy, Principles, Scope and Limitation” in Halliday, C. E. (ed), The Journey: Legal Essays in Honour of Snr. Chief Kola Babalola, SAN (Vivid Media Nigeria, Port Harcourt 2021) Chapter 3 (pp. 25-46).",
  },
  {
    citation:
      "Adangor, Z., “Examination of the Extent of the Jurisdiction of the Federal High Court under section 251(1)(r) of the Constitution of the Federal Republic of Nigeria, 1999 (as amended)” in Yemi Akinseye-George (ed), Contemporary Essays on Law and Practice in Honour of Hon. Justice A. I. Chikere (2nd edn, Centre for Socio-Legal Studies (CSLS) Nigeria, 2022) (pp. 73-101).",
  },
  {
    citation:
      "Adangor, Z., “Exclusion of Evidence in Judicial Proceedings and the Interpretation of section 2 of the Evidence Act, 2011” in Jerry Amadi (ed), Enthronement of Substantive Justice in Nigeria: Essays in Honour of Hon. Justice Ejembi Eko, JSC (Emu Integrated Services Ltd, Port Harcourt 2022) (pp. 81-100).",
  },
  {
    citation:
      "Adangor, Z., “An Examination of the Relevance of Forensic Evidence in Proof of Rape under Nigerian Law” in Elsie N. Thompson, Ezinwa Okoroafor, Inime I. Chinwenwo-Aguma and others (eds.), Essays in Honour of Hon. Justice Mary Ukaego Peter-Odili, CFR, DSSRS (Rtd), Justice of the Supreme Court (Vol II, FIDA Nigeria, 2022) (pp. 85-113).",
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

// Hero carousel citations live in ./hero-citations.ts so the homepage client
// bundle does not import this full bibliography module.
