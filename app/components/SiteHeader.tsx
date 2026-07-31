"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SiteHeader.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

type SiteHeaderProps = {
  logo?: string;
  logoAlt?: string;
  firmName?: string;
};

export default function SiteHeader({
  logo = "/logo-icon.svg",
  logoAlt = "Firm logo",
  firmName = "PROF. Z. ADANGOR (SAN) & CO",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${onHome ? "on-hero" : "on-page"}`}>
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label={`${firmName} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={logoAlt} className="site-logo-mark" />
        </Link>

        <nav className="site-pill" aria-label="Primary">
          <div className={`site-pill-links ${open ? "is-open" : ""}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`site-pill-link ${pathname === link.href ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="site-pill-cta"
              onClick={() => setOpen(false)}
            >
              Speak to a Lawyer
            </Link>
          </div>

          <button
            type="button"
            className={`site-menu-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </nav>
      </div>

      {open && (
        <button
          type="button"
          className="site-menu-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
