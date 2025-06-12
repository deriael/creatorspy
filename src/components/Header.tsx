"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/add", label: "Add Podcast" },
  { href: "/mypodcasts", label: "My Podcasts" },
  { href: "/compare/internal", label: "Compare Podcasts" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-4 border-b bg-white flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-black">
        CreatorSpy
      </Link>
      <nav className="flex gap-4 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-md transition ${
              pathname === link.href
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
