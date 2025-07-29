"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Loading } from "@/components/loading";
import api from "@/services/api";
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
  const [peoples, setPeoples] = useState<PeopleProps[]>([]); // Inicializando com um array vazio
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("people").then(({ data }) => {
      setPeoples(data);
      setLoading(false);
    });

    console.log("People:", peoples);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("people");
  //       if (!response || !response.data) {
  //         console.error("No data in API response.");
  //         return;
  //       }
  //       console.log("Full Response:", response);
  //       setPeople(response.data.results);
  //       setLoading(false);

  //       console.log("Full Response:", response);
  //     } catch (error) {
  //       console.error("Error in:", error);
  //     }
  //   };
  //   fetchData();
  // }, [people]);

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

        <div className="border border-gray-300 rounded-lg p-4 mt-8 w-full max-w-md">
          {loading ? (
            <Loading />
          ) : (
            peoples?.map((people) => <li key={people.name}>{people.name}</li>)
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
