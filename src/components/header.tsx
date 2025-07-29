import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex justify-between items-center text-white p-4 m-4 w-full">
      <Logo />

      <h1 className="text-2xl font-bold">Star Wars Wiki</h1>
    </header>
  );
}
