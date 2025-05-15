import React from 'react';

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container bg-gray-50 mt-16 rounded-3xl">
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
          Tunisia Upload & Print (TunUp) is a key operations hub for several Cimpress business units within the Upload & Print group, including Pixartprinting, Exaprint, Easyflyer, and Printdeal. Established in 2018 under the name Pixartprinting Tunisie Sarl, the company rebranded to Tunup in 2023 to better reflect the diversity of brands and activities it supports. 

Located in Tunis, Tunup is home to nearly 300 professionals specializing in customer support, marketing, graphic design, and analytics. While the majority of our team supports Pixartprinting, we also host growing operations for other European brands in the Cimpress group. 

At Tunup, we foster a workplace culture focused on collaboration, growth, and excellence—supporting each business unit while building a strong sense of community among our teams. 
          </p>
        </div>
      
      </div>
    </section>
  );
};

export default AboutSection;
