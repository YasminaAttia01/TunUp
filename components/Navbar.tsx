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

  // Log the user data to the console when it's available
  if (user) {
    console.log("User data:", {
      email: user.email,
      nickname: user.nickname,
      org_id: user.org_id,
      sub: user.sub,
      updated_at: user.updated_at,
      picture: user.picture,
    });
  }

  useEffect(() => {
    const fetchToken = async () => {
      if (user) {
        try {
          const response = await fetch("/api/auth/token");
          if (response.ok) {
            const data = await response.json();
            setToken(data.accessToken);
            console.log("Access token:", data.accessToken);
          } else {
            console.error("Failed to fetch access token");
          }
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      }
    };

    fetchToken();
  }, [user]);

  return (
    <nav className="flexBetween max-w-screen-xl mx-auto h-16 relative z-30 bg-teritiary mt-4 py-2 px-6 rounded-full shadow-lg">
      <Link href="/" className="flex items-center">
        <Image src="/logo/logo_tunup.png" alt="logo" width={90} height={40} />
      </Link>
      <ul className="hidden lg:flex items-center gap-8 text-white text-lg font-medium">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            onMouseEnter={() => setActiveLink(link.key)}
            onMouseLeave={() => setActiveLink(null)}
            className="relative"
          >
            <Link href={link.href} className="transition-all hover:font-bold pb-2">
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

        {/* Login/Logout Button */}
        {!isLoading && (
          <li>
            {user ? (
              <div className="flex items-center gap-4">
                <img src={user.picture ?? "/default-user.png"} alt="user" width={30} height={30} className="rounded-full" />
                <Link href="/api/auth/logout" className="flex items-center gap-2">
                  <span>Logout</span>
                </Link>
              </div>
            ) : (
              <Link href="/api/auth/login" className="flex items-center gap-2">
                <img src="icons/user.png" alt="user login" width={20} height={20} />
                <span>Login</span>
              </Link>
            )}
          </li>
        )}
      </ul>

      {/* Mobile Navigation */}
      <Menu
        onClick={() => setToggle(!toggle)}
        className="text-secondary cursor-pointer lg:hidden"
        size={28}
      />
      {toggle && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-75 shadow-lg rounded-l-xl w-64 pt-4 pb-8 lg:hidden h-fit flex flex-col items-end gap-6 mt-4">
          <X onClick={() => setToggle(false)} className="text-white cursor-pointer font-bold mr-4 hover:text-primary" size={42} />
          <div className="flex flex-col items-start justify-start gap-4 ml-10 w-full">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="w-full">
                <Link
                  href={link.href}
                  className="text-lg py-2 px-4 font-semibold text-white rounded-l-xl transition-all hover:text-primary"
                  onClick={() => setToggle(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            {/* Login/Logout Button for Mobile */}
            {!isLoading && (
              <div className="w-full">
                {user ? (
                  <div className="flex flex-col gap-2">
                    <img src={user.picture ?? "/default-user.png"} alt="user" width={30} height={30} className="rounded-full" />
                    <span>{user.name}</span>
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
