"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./cn";

type Props = React.ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export function ActiveLink({
  className,
  href,
  activeClassName,
  ...props
}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      {...props}
      href={href}
      aria-current={isActive}
      className={cn("group", className, isActive && activeClassName)} // cnはactiveClassNameを優先する
    />
  );
}
