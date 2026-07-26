import type { Metadata } from "next";
import PublicationsList from "../components/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Books, book chapters and journal articles by Prof. Zacchaeus Adangor, SAN.",
};

export default function PublicationsPage() {
  return (
    <main className="flex flex-col flex-1">
      <PublicationsList />
    </main>
  );
}
