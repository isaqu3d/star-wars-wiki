import { cn } from "@/utils/cn";
import Link from "next/link";

type MenuProps = {
  className?: string;
  href: string;
  target?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function MenuLink({
  className,
  href,
  target,
  icon,
  children,
  ...rest
}: MenuProps) {
  return (
    <menu>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href={href}
              className={cn(
                "text-white hover:text-[#FFE81F] hover:underline transition-all",
                className
              )}
              target={target}
              {...rest}
            >
              {icon}
              {children}
            </Link>
          </li>
        </ul>
      </nav>
    </menu>
  );
}
