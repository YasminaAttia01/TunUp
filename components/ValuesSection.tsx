/* eslint-disable @next/next/no-img-element */
import React from "react";
import { values } from "@/constants";



const ValuesSection = () => {
    
  return (
    <section className="flex flex-col gap-12 py-20 overflow-hidden max-container padding-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <h1 className="text-secondary   bold-52 lg:bold-50">
          In what we <br />
          <span className="text-primary">Believe</span>
        </h1>
      </div>

      <div className="overflow-hidden w-full">
      <div className="flex flex-col lg:flex-row justify-center gap-10 mx-auto py-20 bg-gray-50">
        
      <div className="relative z-[1] rounded-2xl hidden xl:flex w-4/12">
  <div className="absolute z-[2] rounded-full -left-32 top-1/2 -translate-y-1/2 bg-primary h-[300px] w-[400px]" />
  <div className="h-full z-[3] rounded-3xl overflow-hidden">
    <img
      src="/images/values.jpg"
      alt="values"
      className="h-full object-cover rounded-3xl"
    />
  </div>
</div>

      <div className="flex flex-col gap-6">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="min-w-fit flex flex-col items-center gap-4 bg-secondary rounded-xl py-8"
            >
              <img src={value.icon} alt={value.label} className="w-20" />
              <h3 className="text-white font-bold text-lg">{value.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
        
      </div>
    </section>
    
  );
};

export default ValuesSection;