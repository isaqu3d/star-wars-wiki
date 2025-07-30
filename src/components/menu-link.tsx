"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const router = usePathname();
  const active = router === href;

  return (
    <nav>
      <ul>
        <li>
          <Link
            href={href}
            className={`${
              active ? "text-[#FFE81F]" : "text-red"
            } flex items-center gap-2 hover:underline transition-all
              `}
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
