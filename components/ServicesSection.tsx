/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Services } from "@/constants";

const ServicesSection = () => {
  return (
    <section className="flex flex-col gap-12 py-20 overflow-hidden max-container padding-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 justify-center items-center">
        <h1 className="text-primary bold-52 lg:bold-50 ">
          Driven By <br />
          <span className="text-white">Quality and Dedication</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
        {Services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
            <h3 className="mt-2 justify-center items-center font-semibold ">{service.title}</h3>
            <img src={service.icon} className=" mt-2 w-48 h-40 rounded-xl justify-center items-center" />
            <p className="mt-4 text-gray-700">{service.description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
