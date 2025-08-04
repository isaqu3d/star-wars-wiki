import { CardCharactersProps } from "@/@types/types";
import api from "@/services/api";

type CharacterPageProps = {
  params: { id: string };
};

export default async function Character({ params }: CharacterPageProps) {
  const { id } = params;

  const res = await api.get(`/people/${id}`);
  const character: CardCharactersProps = res.data;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-[#FFE81F]">{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}
