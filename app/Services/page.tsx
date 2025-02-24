import React from 'react'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import FrequentQuestionsSection from "@/components/FrequentQuestionsSection"

const Services = () => {
  return (
    <>
    <Hero 
      title="our offerings."
      highlight="Explore"
      description="Experience our commitment to excellence and the passion behind our services!"
      buttonText="Contact us"
      buttonLink="/Contact"
      image="/images/ServicesHero.png"/>
      <div className='bg-secondary'>

      <ServicesSection/>
      
      </div>
      <ContactSection/>
      <FrequentQuestionsSection/>
      
      
    </>
  )
}

export default Services
