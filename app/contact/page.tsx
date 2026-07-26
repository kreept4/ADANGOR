import type { Metadata } from "next";
import MapContact from "../components/MapContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Our Abuja and Port Harcourt offices, phone numbers and enquiry form.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">
      <MapContact />
    </main>
  );
}
