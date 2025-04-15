/* eslint-disable @typescript-eslint/no-unused-vars */
 
"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="flexBetween max-w-screen-xl mx-auto h-16 relative z-30 bg-teritiary mt-4 py-2 px-6 rounded-full shadow-lg">
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo/logo_tunup.png" 
          alt="logo" 
          width={90} 
          height={40} 
          priority 
        />
      </Link>

      {/* Desktop Navigation */}
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
              prefetch={false}
            >
              {link.label}
            </Link>
            {activeLink === link.key && (
              <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <Menu
        onClick={() => setToggle(!toggle)}
        className="text-secondary cursor-pointer lg:hidden"
        size={28}
        aria-label="Open menu"
      />

      {/* Mobile Navigation */}
      {toggle && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-75 shadow-lg rounded-l-xl w-64 pt-4 pb-8 lg:hidden h-fit flex flex-col items-end gap-6 mt-4">
          <X 
            onClick={() => setToggle(false)} 
            className="text-white cursor-pointer font-bold mr-4 hover:text-primary" 
            size={42}
            aria-label="Close menu"
          />
          <div className="flex flex-col items-start justify-start gap-4 ml-10 w-full">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="w-full">
                <Link
                  href={link.href}
                  className="text-lg py-2 px-4 font-semibold text-white rounded-l-xl transition-all hover:text-primary"
                  onClick={() => setToggle(false)}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;