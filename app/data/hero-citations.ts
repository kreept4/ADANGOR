// Curated hero carousel only — keep this file tiny so the homepage client
// bundle never pulls the full publications bibliography (that was hanging
// Turbopack on first compile and causing connection resets).

export type HeroCitation = {
  text: string;
  pages: string;
};

export const heroCitations: HeroCitation[] = [
  {
    text: "“The Role of the Court in the Regulation and Control of Take-overs and Mergers in Nigeria” (2000) 3 Journal of Commercial, Private & Property Law (JCPPL)",
    pages: " (pp. 97-111).",
  },
  {
    text: "“Delimiting the Jurisdiction of the Federal High Court in civil causes and matters connected with Mines and Minerals including oil fields, oil mining, geological surveys and natural gas” (2001) 4 Journal of Commercial, Private & Property Law (JCPPL)",
    pages: " (pp. 1-20).",
  },
  {
    text: "“Can the Election Tribunal or the Court of Appeal Order a bye-election under the Electoral Act, 2002?” (2004) 1 Ph.BJ",
    pages: " (pp. 109-124).",
  },
  {
    text: "“Petroleum Industry Bill (PIB) 2012 and the Niger Delta Region of Nigeria: Panacea or Placebo?” (2015) 38 Journal of Law, Policy and Globalization",
    pages: " (pp. 47-62).",
  },
  {
    text: "“The Principle of Derivation and the Search for Distributive Justice in the Niger Delta Region of Nigeria: The Journey So Far” (2015) 41 Journal of Law, Policy and Globalization (JLPG)",
    pages: " (pp. 115-133).",
  },
  {
    text: "Handbook on Law of Evidence Applicable in Customary Courts in Nigeria",
    pages: "",
  },
];
