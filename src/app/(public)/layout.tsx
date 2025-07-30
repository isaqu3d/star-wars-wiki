"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { usePathname } from "next/navigation";
import "../globals.css";
import CharactersPage from "./characters/page";
import PlanetsPage from "./planets/page";

export default function Layout() {
  const pathname = usePathname();
  const isActivePage = (page: string) => pathname?.endsWith(page);

  return (
    <div className="font-sans flex flex-col mx-8">
      <Header />

      {isActivePage("characters") && <CharactersPage />}
      {isActivePage("planets") && <PlanetsPage />}

      <Footer />
    </div>
  );
}
