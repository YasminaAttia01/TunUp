/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import NumbersSection from "@/components/NumbersSection"
import MeetExpertSection from '@/components/MeetExpertSection'

const page = () => {
  return (
    <>
    <Hero 
      title="into our background."
      highlight="Delve"
      description="Discover our story, values, and the passion that drives us—join us on our journey to make a difference!"
      buttonText="Explore Our Services"
      buttonLink="/Services"
      image="/images/AboutHero.png"/>
      <div className="flex flex-col lg:h-screen py-20 overflow-hidden max-container bg-gray-50 rounded-lg padding-container mt-16 animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center h-full w-full px-8 max-container padding-container ">
        
        {/* Video Section */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <iframe
            src="https://www.youtube.com/embed/1D_IFzvY-A4?si=wMoR6CzNuUFsb8yC"
            allowFullScreen
            className="w-full h-full  shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 h-full bg-white text-white p-8  flex flex-col justify-center">
        <h1 className="text-3xl font-bold mt-2 text-secondary bold-52 lg:bold-50">
            Our Parent Group, <br />
         
          </h1>
          <p className="mt-4 text-lg text-gray-500">
          <img src="/logo/cimpress.png" alt="cimpress" /><br />
          Cimpress,  founded as Bonne Impression by Robert, has transformed from a small printing service into a global leader in mass customization. <br />  By pioneering technologies like browser-based desktop publishing and workflow automation, the company enhanced user experiences while expanding operations in Europe and the U.S. <br /> Its decentralized structure fosters customer focus and innovation, investing in strategic capabilities that drive value. <br />  Committed to empowering users and seizing future growth opportunities, Cimpress is poised to lead in the evolving digital landscape.

          </p>
          <Link 
            href="https://cimpress.com/"
            className="text-secondary text-sm tracking-wide opacity-95 underline mt-4 transition-transform duration-300 hover:scale-105 hover:text-blue-400"
          >
            See More
          </Link>
        </div>
      </div>
      
    </div>
    <MeetExpertSection/>
    <NumbersSection/>
      
    </>
  )
}

export default page
