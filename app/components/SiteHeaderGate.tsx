"use client";

import { usePathname } from "next/navigation";
import SiteNav from "./SiteNav";

/** Fixed StaggeredMenu for interior pages only — home embeds SiteNav inside Hero. */
export default function SiteHeaderGate() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <SiteNav variant="page" />;
}
