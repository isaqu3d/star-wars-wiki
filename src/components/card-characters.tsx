type CardCharactersProps = {
  name: string;
  birth_year: string;
  height: string;
  gender: string;
  mass: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  homeworld: string;
};

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
    <div className="bg-[#FFE81F] p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-black">{name}</h2>
      <ul className="text-black mt-2">
        <li>
          <strong>Birth Year:</strong> {birth_year}
        </li>
        <li>
          <strong>Height:</strong> {height} cm
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
    </div>
  );
}
