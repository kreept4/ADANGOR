"use client";

import StaggeredMenu, { type StaggeredMenuItem } from "./StaggeredMenu/StaggeredMenu";

export const siteMenuItems: StaggeredMenuItem[] = [
  { label: "About", ariaLabel: "About the firm", link: "/about" },
  { label: "Expertise", ariaLabel: "Our expertise", link: "/expertise" },
  { label: "Publications", ariaLabel: "Publications", link: "/publications" },
  { label: "Contact", ariaLabel: "Contact us", link: "/contact" },
];

const sharedProps = {
  position: "right" as const,
  items: siteMenuItems,
  displaySocials: false,
  socialItems: [] as { label: string; link: string }[],
  displayItemNumbering: false,
  logoUrl: "/logo-icon.svg",
  accentColor: "#CD9610",
  colors: ["#EEDDC4", "#F5EFE8"],
  changeMenuColorOnOpen: true,
};

type SiteNavProps = {
  /** Hero (dark plate) vs interior cream pages */
  variant?: "hero" | "page";
};

/** Site-wide StaggeredMenu wired to firm routes and gold/cream palette. */
export default function SiteNav({ variant = "page" }: SiteNavProps) {
  if (variant === "hero") {
    return (
      <StaggeredMenu
        {...sharedProps}
        className="on-hero"
        isFixed={false}
        menuButtonColor="#FEF7EE"
        openMenuButtonColor="#332524"
      />
    );
  }

  return (
    <StaggeredMenu
      {...sharedProps}
      isFixed
      menuButtonColor="#332524"
      openMenuButtonColor="#332524"
    />
  );
}
