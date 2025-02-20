/* eslint-disable @next/next/no-img-element */
import React from "react";
import { businessUnits } from "@/constants";

const BusinessUnitsSection = () => {
  return (
    <section className="flex flex-col gap-12 py-20 overflow-hidden max-container padding-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="text-secondary bold-52 lg:bold-50">
          Explore our <br />
          <span className="text-primary">Business Units</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {businessUnits.map((unit, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center">
            <img src={unit.image} alt="Business Unit" className="w-full h-48 rounded-xl" />
            <p className="mt-4 text-gray-700">{unit.text}</p>
            <a href={unit.link} className="mt-2 inline-block text-primary font-semibold hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessUnitsSection;
