import { CardCharactersProps } from "@/@types/characters";

export function CardCharacters({
  name,
  birth_year,
  height,
  gender,
  mass,
  eye_color,
  hair_color,
  skin_color,
  homeworld,
}: CardCharactersProps) {
  return (
    <section className="bg-[#FFE81F] p-4 rounded-lg shadow-md w-full gap-12 hover:scale-110 transition-transform duration-300">
      <h2 className="text-xl font-semibold text-black">{name}</h2>
      <ul className="text-black mt-2">
        <li>
          <strong>Birth Year:</strong> {birth_year}
        </li>
        <li>
          <strong>Height:</strong> {height}m
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Mass:</strong> {mass} kg
        </li>
        <li>
          <strong>Eye Color:</strong> {eye_color}
        </li>
        <li>
          <strong>Hair Color:</strong> {hair_color}
        </li>
        <li>
          <strong>Skin Color:</strong> {skin_color}
        </li>
        <li>
          <strong>Homeworld:</strong> {homeworld}
        </li>
      </ul>
    </section>
  );
}
