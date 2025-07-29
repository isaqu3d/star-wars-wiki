import { GithubIcon } from "lucide-react";
import { Logo } from "./logo";
import { MenuLink } from "./menu-link";

export function Header() {
  return (
    <header className="flex justify-between items-center text-white mt-8 w-full">
      <MenuLink href="/">
        <Logo />
      </MenuLink>

      <menu className="flex space-x-4 items-center">
        <MenuLink href="/characters">Characters</MenuLink>
        <MenuLink href="/planets">Planets</MenuLink>
        <MenuLink
          target="_blank"
          href="https://github.com/isaqu3d/star-wars-wiki"
          className="flex items-center gap-2"
        >
          GitHub
          <GithubIcon size={20} />
        </MenuLink>
      </menu>
    </header>
  );
}
