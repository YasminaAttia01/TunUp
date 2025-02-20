"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <nav className="flexBetween max-w-screen-xl mx-auto h-16 relative z-30 bg-teritiary mt-4 py-2 px-6 rounded-full shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo/logo_tunup.png" alt="logo" width={90} height={40} />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8 text-white text-lg font-medium">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            onMouseEnter={() => setActiveLink(link.key)}
            onMouseLeave={() => setActiveLink(null)}
            className="relative"
          >
            <Link
              href={link.href}
              className="transition-all hover:font-bold pb-2"
            >
              {link.label}
            </Link>

            {/* Underline effect */}
            {activeLink === link.key && (
              <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center">
        <Image
          src="/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="inline-block cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
