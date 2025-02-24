import React from 'react'
import Hero from '@/components/Hero'
import FormSection from"@/components/FormSection"

const Contact = () => {
  return (
    <>
      <Hero 
      title="US."
      highlight="Contact"
      description="Any question or remarks? Just write us a message!"
      buttonText="Back to Home ?"
      buttonLink="/"
      image="/images/ContactHero.png"/>
      <FormSection/>
    </>
    
  )
}

export default Contact
