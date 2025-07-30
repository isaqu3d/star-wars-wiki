import { CardPlanetsProps } from "@/@types/types";

export function CardPlanets({
  gravity,
  name,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain,
}: CardPlanetsProps) {
  return (
    <section className="bg-[#FFE81F] p-4 rounded-lg shadow-md w-full  hover:scale-110 transition-transform duration-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl">
      <h2 className="text-xl font-semibold text-black">{name}</h2>
      <ul className="text-black mt-2">
        <li>
          <strong>Gravity:</strong> {gravity}
        </li>
        <li>
          <strong>Orbital Period:</strong> {orbital_period}
        </li>
        <li>
          <strong>Population:</strong> {population}
        </li>
        <li>
          <strong>Rotation Period:</strong> {rotation_period}
        </li>
        <li>
          <strong>Surface Water:</strong> {surface_water}
        </li>
        <li>
          <strong>Terrain:</strong> {terrain}
        </li>
      </ul>
    </section>
  );
}
