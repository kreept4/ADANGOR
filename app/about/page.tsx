import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Prof. Zacchaeus Adangor, SAN — the chambers, its managing partner, and the record and watchword the practice is built on.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutView />
    </main>
  );
}
