 
"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const { user, isLoading } = useUser();
  const [token, setToken] = useState<string | null>(null);
  const apiGateway = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

  useEffect(() => {
    const fetchToken = async () => {
      console.log(token);
      if (user) {
        try {
          const response = await fetch("/api/auth/token", {
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          setToken(data.accessToken);
          // Only call protected API if we have a token
          if (data.accessToken && apiGateway) {
            const protectedResponse = await fetch(`${apiGateway}/api/protected`, {
              method: "GET",
              headers: {
                Authorization: `Bearer ${data.accessToken}`,
                "Content-Type": "application/json",
              },
            });

            if (!protectedResponse.ok) {
              console.error("Protected API error:", await protectedResponse.text());
            }
          }
        } catch (error) {
          console.error("Error in fetchToken:", error);
        }
      }
    };
    
    fetchToken();
  }, [user, apiGateway, token]);

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

        {!isLoading && (
          <li>
            {user ? (
              <div className="flex items-center gap-4">
                <Image 
                  src={user.picture ?? "/default-user.png"} 
                  alt="user" 
                  width={30} 
                  height={30} 
                  className="rounded-full"
                  unoptimized
                />
                <Link 
                  href="/api/auth/logout" 
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <span>Logout</span>
                </Link>
              </div>
            ) : (
              <Link 
                href="/api/auth/login" 
                className="flex items-center gap-2"
                prefetch={false}
              >
                <Image 
                  src="/icons/user.png" 
                  alt="user login" 
                  width={20} 
                  height={20}
                />
                <span>Login</span>
              </Link>
            )}
          </li>
        )}
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

            {!isLoading && (
              <div className="w-full">
                {user ? (
                  <div className="flex flex-col gap-2">
                    <Image 
                      src={user.picture ?? "/default-user.png"} 
                      alt="user" 
                      width={30} 
                      height={30} 
                      className="rounded-full"
                      unoptimized
                    />
                    <span>{user.name || user.nickname}</span>
                    
                    <Link
                      href="/api/auth/logout"
                      className="text-lg py-2 px-4 font-semibold text-white rounded-l-xl transition-all hover:text-primary"
                      onClick={() => setToggle(false)}
                    >
                      Logout
                    </Link>
                  </div>
                ) : (
                  <Link
                    href="/api/auth/login"
                    className="text-lg py-2 px-4 font-semibold text-white rounded-l-xl transition-all hover:text-primary"
                    onClick={() => setToggle(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;