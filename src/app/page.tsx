"use client";

import { CardCharactersProps } from "@/@types/characters";
import { CardCharacters } from "@/components/card-characters";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
import api from "@/services/api";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

type PeopleProps = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
};

export default function Home() {
  const [peoples, setPeoples] = useState<CardCharactersProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("people").then(({ data }) => {
      setPeoples(data);
      setLoading(false);

      console.log("People data fetched:", data);
    });
  }, []);

  const filteredPeoples = peoples.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-sans flex flex-col h-screen mx-8">
      <Header />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl ">
          {loading ? (
            <Loading />
          ) : filteredPeoples.length > 0 ? (
            filteredPeoples.map((people: CardCharactersProps) => (
              <CardCharacters
                key={people.name}
                name={people.name}
                mass={people.mass}
                birth_year={people.birth_year}
                eye_color={people.eye_color}
                gender={people.gender}
                height={people.height}
                hair_color={people.hair_color}
                skin_color={people.skin_color}
                homeworld={people.homeworld} // Se tiver esse dado no seu API
              />
            ))
          ) : (
            <p className="text-gray-500">No characters found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
