"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { usePathname } from "next/navigation";
import "../globals.css";
import CharactersPage from "./characters/page";
import PlanetsPage from "./planets/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isCharactersPage =
    pathname?.startsWith("/characters") && pathname === "/characters";

  const isPlanetsPage =
    pathname?.startsWith("/planets") && pathname === "/planets";

  return (
    <div className="font-sans flex flex-col mx-8">
      <Header />

      {isCharactersPage && <CharactersPage />}
      {isPlanetsPage && <PlanetsPage />}
      {!isCharactersPage && !isPlanetsPage && children}

      <Footer />
    </div>
  );
}
