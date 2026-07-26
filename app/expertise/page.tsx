import type { Metadata } from "next";
import ExpertiseFull from "../components/ExpertiseFull";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "The firm's practice areas, from election petitions and constitutional law to oil and gas, maritime, land and employment matters.",
};

export default function ExpertisePage() {
  return (
    <main className="flex flex-col flex-1">
      <ExpertiseFull />
    </main>
  );
}
