/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const WorkTogetherSection = () => {
  return (
    <section className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container mt-16 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center h-full w-full px-8 max-container padding-container bg-gray-50 rounded-3xl mt-2">
        
        {/* Text Section */}
        <div 
          className="w-full lg:w-1/2 h-auto text-white p-8 flex flex-col justify-center ml-20 opacity-0 animate-slide-in-left"
        >
          <h1 className="text-3xl font-bold mt-2 text-secondary bold-52 lg:bold-50">
            Work together, <br />
            <span className="text-primary">Wherever you are</span>
          </h1>
          <p className="mt-4 text-lg text-teritiary">
            Our skilled team delivers customized products with exceptional efficiency and service.
            <br /> Partner with us for innovative solutions that stand out!
          </p>
          <Link 
            href="/Contact"
            className="text-secondary text-sm tracking-wide opacity-95 underline mt-4 transition-transform duration-300 hover:scale-105 hover:text-blue-400"
          >
            Get in touch
          </Link>
        </div>

        {/* Image Section */}
        <div 
          className="w-auto lg:w-1/2 h-auto flex items-center justify-center opacity-0 animate-slide-in-right"
        >
          <img
            src="/images/WorkTogether.png"
            alt="WorkTogetherSection"
            className="w-full h-full mr-4"
          />
        </div>
      
      </div>
    </section>
  );
};

export default WorkTogetherSection;
