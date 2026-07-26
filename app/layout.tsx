import type { Metadata } from "next";
import { Roboto_Slab, Roboto_Mono, Inter, Roboto, Merriweather, Nunito, Instrument_Sans } from "next/font/google";
import "./globals.css";
import CardNav from "./components/CardNav/CardNav";
import Footer from "./components/Footer";

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
export const metadata: Metadata = {
  title: {
    default: "Prof. Z. Adangor (SAN) & Co",
    template: "%s | Prof. Z. Adangor (SAN) & Co",
  },
  description:
    "Built on Justice, Guided by Ethics. A Nigerian law practice across election petitions, constitutional law, oil and gas, maritime and commercial matters.",
};

// Three cards, grouped by what the visitor is actually looking for: who the
// firm is, what it does, and what it has published. "Our Professionals" has
// been dropped from the nav until that page exists; it was a dead link.
const navItems = [
  {
    label: "The Firm",
    bgColor: "#EFE7A3",
    textColor: "#2F2100",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Our Practice",
    bgColor: "#E9DF90",
    textColor: "#2F2100",
    links: [{ label: "Our Expertise", href: "/expertise" }],
  },
  {
    label: "Insights",
    bgColor: "#E3D77D",
    textColor: "#2F2100",
    links: [{ label: "Publications", href: "/publications" }],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} ${robotoMono.variable} ${inter.variable} ${roboto.variable} ${merriweather.variable} ${nunito.variable} ${instrumentSans.variable}`}>
        <CardNav
          logo="/logo-icon.svg"
          logoAlt="Firm logo"
          firmName="PROF. Z. ADANGOR (SAN) & CO"
          items={navItems}
          contactEmail="Zacchaeusadangor@nigerianbar.ng"
          baseColor="#F7F3C6"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
