import { cn } from "@/utils/cn";
import Link from "next/link";

type MenuProps = {
  className?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
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
    <nav>
      <ul>
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
  );
}
