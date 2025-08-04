"use client";

import { CardCharactersProps } from "@/@types/types";
import { CardCharacters } from "@/components/card-characters";
import { Input } from "@/components/input";
import { Loading } from "@/components/loading";
import api from "@/services/api";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CharactersPage() {
  const [peoples, setPeoples] = useState<CardCharactersProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const router = useRouter();

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

  if (loading) {
    return (
      <div className="w-full items-center flex justify-center text-center mx-auto flex-1">
        <Loading />
      </div>
    );
  }
  return (
    <div className="font-sans flex flex-col mx-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
          {filteredPeoples.length > 0 ? (
            filteredPeoples.map(
              (people: CardCharactersProps, index: number) => (
                <div
                  onClick={() => router.push(`/characters/${index + 1}`)}
                  key={people.name}
                >
                  <CardCharacters
                    name={people.name}
                    mass={people.mass}
                    birth_year={people.birth_year}
                    eye_color={people.eye_color}
                    gender={people.gender}
                    height={people.height}
                    hair_color={people.hair_color}
                    skin_color={people.skin_color}
                    homeworld={people.homeworld}
                  />
                </div>
              )
            )
          ) : (
            <p className="text-gray-500">No characters found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
