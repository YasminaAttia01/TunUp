import Hero from '@/components/Hero'
import React from 'react'
import WorkPrioritySection from '@/components/WorkPrioritySection'
import JobOfferCart from '@/components/JobOfferCart'

const Careers = () => {
  return (
    <>
     <Hero 
      title="Your Future with Us!"
      highlight=" Build "
      description="At TunUp, we value our people. Explore opportunities to grow your career in an inclusive environment"
      buttonText="Back to Home ?"
      buttonLink="/"
      image="/images/CareerHero.png"/>
      <WorkPrioritySection/>
      <JobOfferCart/>
      
    </>
  )
}

export default Careers
