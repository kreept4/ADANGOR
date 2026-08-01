import { offices, contactEmail } from "../data/offices";
import { siteName, siteUrl } from "./site";

// Nigerian local numbers are stored as 0XXXXXXXXXX; schema.org telephone
// values should be dialable, so give crawlers the +234 form instead.
function toE164(localNumber: string): string {
  const trimmed = localNumber.trim();
  return trimmed.startsWith("0") ? `+234${trimmed.slice(1)}` : trimmed;
}

export function buildLawFirmJsonLd() {
  const addressOffices = offices.filter((office) =>
    office.label.endsWith("Address")
  );
  const phoneOffice = offices.find((office) => office.label === "Phone");

  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    telephone: phoneOffice?.value.split(",").map((n) => toE164(n)),
    areaServed: "NG",
    location: addressOffices.map((office) => ({
      "@type": "Place",
      name: office.label,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.value,
        addressCountry: "NG",
      },
    })),
  };
}
