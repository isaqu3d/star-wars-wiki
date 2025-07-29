import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex justify-between items-center text-white p-4 m-4 w-full">
      <Logo />

      <menu>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/characters"
                className="text-white hover:text-[#FFE81F] hover:underline transition-all"
              >
                Characters
              </Link>
            </li>

            <li>
              <Link
                href="/planets"
                className="hover:text-[#FFE81F] hover:underline transition-all"
              >
                Planets
              </Link>
            </li>

            <li>
              <Link
                href="/planets"
                target="_blank"
                className="flex items-center gap-2 hover:text-[#FFE81F] hover:underline transition-all"
              >
                GitHub
                <GithubIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </menu>
    </header>
  );
}
