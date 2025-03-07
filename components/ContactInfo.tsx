import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone className="text-xl" />,
    text: "+216 70258982",
    link: "tel:+21670258982",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    text: "tunup-hr@pixartprinting.com",
    link: "mailto:tunup-hr@pixartprinting.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    text: "Les Berges du Lac 3 (Tunis Nord, 2015)",
    link: "https://www.google.com/maps/search/?api=1&query=Les+Berges+du+Lac+3+Tunis+Nord+2015",
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-red-600 text-white p-8 w-full lg:w-1/3">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <p className="mt-2">Say something to start a live chat!</p>
      <div className="mt-20 space-y-4">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:underline"
          >
            {info.icon}
            <span>{info.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;