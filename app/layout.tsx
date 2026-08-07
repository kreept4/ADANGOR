import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono, Inter, Roboto, Merriweather, Nunito, Instrument_Sans, Mona_Sans } from "next/font/google";
import "./globals.css";
import GlassNav from "./components/GlassNav";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import { siteName, siteUrl } from "./lib/site";
import { buildLawFirmJsonLd } from "./lib/structuredData";
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
const description =
  "Built on Justice, Guided by Ethics. A Nigerian law practice across election petitions, constitutional law, oil and gas, maritime and commercial matters.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    locale: "en_NG",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1440,
        height: 595,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/images/hero-bg.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} ${robotoMono.variable} ${inter.variable} ${roboto.variable} ${merriweather.variable} ${nunito.variable} ${instrumentSans.variable} ${monaSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLawFirmJsonLd()),
          }}
        />
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