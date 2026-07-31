import type { Metadata } from "next";
import { Instrument_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SiteHeaderGate from "./components/SiteHeaderGate";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Prof. Z. Adangor (SAN) & Co",
    template: "%s | Prof. Z. Adangor (SAN) & Co",
  },
  description:
    "Built on Justice, Guided by Ethics. A Nigerian law practice across election petitions, constitutional law, oil and gas, maritime and commercial matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${cormorant.variable}`}>
        <SiteHeaderGate />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
