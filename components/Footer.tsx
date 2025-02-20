/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { explore } from "../constants/index";
import { company } from "../constants/index";
import { contact } from "../constants/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-teritiary bg-opacity-95 mt-12 shadow-[0_6px_10px_rgba(0,0,0,0.2)]">
      {/* Lower Footer */}
      <div className="min-w-full min-h-[40vh] flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between py-16 px-4 lg:px-16">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div className="w-60 h-full flex flex-col justify-center items-center">
            <div className="transform hover:scale-105 transition-all duration-500 ease-in-out mx-auto relative">
              {/* Background overlay for extra polish */}
              <div className="absolute inset-0 rounded-3xl"></div>
              <img
                src="/logo/logo_tunup.png"
                alt="logo"
                className="w-full object-contain relative z-10"
              />
            </div>
            
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-40 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold rounded-full">Company</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-8 h-1 bg-primary rounded-full" />
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </div>
            </div>

            {company.map((company, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={company.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={company.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary text-sm"
                >
                  {company.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold rounded-full">Explore</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-8 h-1 bg-primary rounded-full" />
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </div>
            </div>

            {explore.map((explore, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={explore.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={explore.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary text-sm"
                >
                  {explore.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center gap-4" id="contact">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold rounded-full">Contact</h3>
              <div className="flex flex-row items-center gap-1 justify-center">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-1 h-1 bg-secondary rounded-full" />
              </div>
            </div>

            {contact.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={contact.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-secondary text-sm"
                >
                  {contact.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mb-6"></div>

      <div className="w-full h-16 flex items-center justify-center text-black font-semibold text-sm text-center">
        <span> &copy; All Copyright {currentYear} TunUp</span>
      </div>
    </footer>
  );
};

export default Footer;
