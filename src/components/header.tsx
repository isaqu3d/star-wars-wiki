import { Logo } from "./logo";
import { MenuLink } from "./menu-link";

export function Header() {
  return (
    <header className="flex justify-between items-center text-white p-4 m-4 w-full">
      <Logo />

      <menu>
        <MenuLink href="/characters">Characters</MenuLink>
      </menu>
    </header>
  );
}
