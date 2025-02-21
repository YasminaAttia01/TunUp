import React from 'react';

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container bg-gray-50 mt-16">
      <div className="flex flex-col lg:flex-row items-center h-full w-full px-8 max-container padding-container">
        
        {/* Video Section */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/Xp6s4mcFxOA"
            allowFullScreen
            className="w-full h-full  shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 h-full bg-secondary text-white p-8  flex flex-col justify-center">
          <p className="uppercase text-sm tracking-wide opacity-70">~ Who We Are</p>
          <h2 className="text-3xl font-bold mt-2">We Help To Get Solutions</h2>
          <p className="mt-4 text-lg opacity-80">
          Tunup (Tunis Upload & Print) operates as a hub for four Cimpress business units within the Upload & Print Group, which coordinates various European operations. <br /> Cimpress, a strategically focused conglomerate of over a dozen autonomous businesses, prioritizes mass customization to deliver personalized goods and services with near mass production efficiency. <br /> The business units at Tunup include Pixartprinting, Easyflyer, Exaprint, and Tradeprint. <br /> Since its establishment in Tunis in 2017, Tunup has grown to a team of approximately 200 skilled professionals across customer support, graphic design, marketing, business analytics, and software engineering.
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default AboutSection;
