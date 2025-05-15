/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { explore } from "../constants/index";
import { company } from "../constants/index";
import { contact } from "../constants/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start ">
        {/* Company Section */}
        <div className="flex-1">
          <h3 className="font-bold mb-4 uppercase text-secondary">Company</h3>
          <ul className="space-y-2">
            {company.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src={item.icon} alt={item.label} className="w-4 h-4" />
                <Link href={item.link} className="hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex-1">
          <h3 className="font-bold mb-4 uppercase text-secondary">Resources</h3>
          <ul className="space-y-2">
          {explore.map((explore, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src={explore.icon} alt={explore.label} className="w-4 h-4" />
                <Link href={explore.link} className="hover:text-secondary">
                  {explore.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Section */}
        <div className="flex-1">
          <h3 className="font-bold mb-4 uppercase text-secondary">Product</h3>
          <ul className="space-y-2">
          {contact.map((contact, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src={contact.icon} alt={contact.label} className="w-4 h-4" />
                <Link href={contact.link} className="hover:text-secondary">
                  {contact.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 text-center">
          <img
            src="/logo/logo_tunup.png"
            alt="TunUp Logo"
            className="w-24 mx-auto mb-4"
          />
          
          <button className="bg-secondary text-white p-2 rounded-md">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-center py-4 mt-8">
        <hr className="border-gray-700 mb-4" />
        <div className="flex justify-center items-center gap-4">
          <p>Copyright ©{currentYear} TunUp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;