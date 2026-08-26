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

/**
 * Where the pins go.
 *
 * These are neighbourhood-level coordinates for Garki II and D/Line, accurate
 * to the street but not surveyed to the door. Drop the exact position of each
 * chambers in here when someone can confirm it, and the map will follow.
 */
export type OfficePin = {
  name: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
};

export const officePins: OfficePin[] = [
  {
    name: "Abuja Chambers",
    city: "Abuja",
    address:
      "No 5, Kaltungo Street, off Ladoke Akintola Boulevard, Garki 2, Abuja, FCT",
    lat: 9.0292,
    lng: 7.4894,
  },
  {
    name: "Port Harcourt Chambers",
    city: "Port Harcourt",
    address:
      "No 1D, Okomoko Street, off Wogu Street, D/line, Port Harcourt, Rivers State",
    lat: 4.7981,
    lng: 7.0035,
  },
];

export const mapImage = "/images/map2.png";

export const mapAlt =
  "Map showing our Abuja and Port-Harcourt office locations, marked with red pins";
