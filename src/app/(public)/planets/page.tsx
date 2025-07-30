"use client";

import { CardPlanetsProps } from "@/@types/types";
import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
import api from "@/services/api";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function PlanetsPage() {
  const [planets, setPlanets] = useState<CardPlanetsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("planets").then(({ data }) => {
      setPlanets(data);
      setLoading(false);

      console.log("Planets data fetched:", data);
    });
  }, []);

  const filteredPeoples = planets.filter((planet) =>
    planet.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-full items-center flex justify-center text-center mx-auto flex-1">
        <Loading />
      </div>
    );
  }
  return (
    <div className="font-sans flex flex-col h-screen mx-8">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold mt-8 text-[#FFE81F]">
          Welcome to the Star Wars Wiki
        </h1>

        <p className="text-sm text-gray-500">
          This is a wiki about all things Star Wars.
        </p>

        <Input
          icon={<SearchIcon />}
          iconPosition="right"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
