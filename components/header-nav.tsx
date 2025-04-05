"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
];

export default function HeaderNav() {
  // Don't show the nav if there's nothing to navigate to
  if (links.length < 2) {
    return null;
  }

  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center gap-4 text-sm">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={`${pathname === link.href ? "decoration font-semibold" : ""} hover:underline`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
