// Office and contact details, shared by the Find Us section on the homepage
// and /contact, so an address or a number is only ever corrected in one place.

export type Office = {
  label: string;
  value: string;
};

export const offices: Office[] = [
  {
    label: "Abuja Address",
    value:
      "No 5, Kaltungo Street, off Ladoke Akintola Boulevard, Garki 2, Abuja, FCT",
  },
  {
    label: "Port-Harcourt Address",
    value:
      "No 1D, Okomoko Street, off Wogu Street, D/line, Port Harcourt, Rivers State",
  },
  {
    label: "Phone",
    value: "08033384056, 07059423385",
  },
];

export const contactEmail = "Zacchaeusadangor@nigerianbar.ng";

export const mapImage = "/images/map2.png";

export const mapAlt =
  "Map showing our Abuja and Port-Harcourt office locations, marked with red pins";
