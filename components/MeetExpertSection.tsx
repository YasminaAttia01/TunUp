/* eslint-disable @next/next/no-img-element */
import React from 'react';


const MeetExpertSection = () => {
  return (
    <div className="flex flex-col lg:h-screen py-20 overflow-hidden max-container padding-container mt-16 animate-fade-in ">
      <div className="flex flex-col lg:flex-row items-center h-full w-full px-8 max-container padding-container bg-[url(/images/section-bg.png)] rounded-3xl mt-2">
      <div 
          className="w-auto lg:w-1/2 h-auto flex items-center justify-center opacity-0 animate-slide-in-right"
        >
          <img
            src="/images/ceo.png"
            alt="WorkTogetherSection"
            className="w-auto h-full mr-4 rounded-lg"
          />
        </div>
        <div 
          className="w-full lg:w-1/2 h-auto p-8 flex flex-col justify-center ml-20  "
        >
          <h1 className="text-3xl font-bold mt-2 text-secondary bold-52 lg:bold-50">
           <span className='text-primary'>&apos;&apos;</span> Radwen Tekaya <br />
            
          </h1>
          <p className="text-primary text-2xl font-bold mt-2 tbold-52 lg:bold-50">Chief officer</p>
          <p className="mt-4 text-lg text-gray-700">
          &quot;Since 2017, our journey has transformed us into a hub of creativity and efficiency. <br /> I am excited to see how far we can go together.&quot;
          </p>
          
        </div> 
      </div>
      
    </div>
    
  );
};

export default MeetExpertSection;
