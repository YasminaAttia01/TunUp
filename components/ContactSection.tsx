/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { contact } from "../constants/index";

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container mt-16 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center h-full w-full px-8 max-container padding-container bg-gray-50 rounded-3xl mt-2">
        
        {/* Text Section */}
        <div 
          className="w-full lg:w-1/2 h-auto text-white p-8 flex flex-col justify-center ml-20 opacity-0 animate-slide-in-left"
        >
          <h3 className="text-3xl font-bold mt-2 text-secondary bold-52 lg:bold-50">
            Reach out to <br />
            <span className="text-primary">US</span>
          </h3>
          <p className="mt-4 text-lg text-teritiary">
          For inquiries or to schedule a visit, please reach out using the details below. <br /> Use the map for directions to our location. We look forward to assisting you.


          </p>
         
          {contact.map((contact, index) => (
              <div key={index} className="flex items-center  gap-2 mt-2 ">
                <img src={contact.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-sm  hover:text-blue-400 transition-transform duration-300 hover:scale-105 mt-2"
                >
                  {contact.label}
                </Link>
              </div>
            ))}
            <Link href="/Contact">
            <button className="mt-8 px-6 py-3 bg-primary text-white text-lg rounded-5xl shadow-md hover:bg-red-600 transition duration-300">
              Contact
            </button>
          </Link>
        </div>

        <div 
          className="w-auto lg:w-1/2 h-auto flex items-center justify-center opacity-0 animate-slide-in-right mr-6 "
        >
          <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.319329662755!2d10.298990400000001!3d36.834827600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4bca743266b3%3A0x30049bc7ae28a225!2sTunUp%20-%20Tunisia%20Upload%20%26%20Print%20Sarl!5e0!3m2!1sen!2stn!4v1740384555422!5m2!1sen!2stn"
              width="1000"
              height="600"
              loading="lazy"
              className="w-full rounded-xl"
            ></iframe>
        </div>
      
      </div>
    </section>
  )
}

export default ContactSection
