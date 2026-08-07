import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono, Inter, Roboto, Merriweather, Nunito, Instrument_Sans, Mona_Sans } from "next/font/google";
import "./globals.css";
import GlassNav from "./components/GlassNav";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
// The homepage design is set in Instrument Sans throughout.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
// The hero and the masthead are set in Mona Sans, per the Figma comp. The
// Light and Medium cuts the headline and the citation card call for are in the
// variable range, so no static weights are needed.
const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
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
      <body className={`${robotoSlab.variable} ${robotoMono.variable} ${inter.variable} ${roboto.variable} ${merriweather.variable} ${nunito.variable} ${instrumentSans.variable} ${monaSans.variable}`}>
        <Preloader />
        <GlassNav
          logo="/logo-icon.svg"
          logoAlt="Prof. Z. Adangor (SAN) & Co"
          firmName="PROF. Z. ADANGOR (SAN) & CO"
          contactEmail="Zacchaeusadangor@nigerianbar.ng"
        />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
