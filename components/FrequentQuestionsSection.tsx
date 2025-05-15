import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FrequentQuestionsSection= () => {
  return (
    
    <section className="flex flex-col py-20 overflow-hidden max-container padding-container mt-16 animate-fade-in">
      <div >
            <h1 className="text-3xl font-bold mt-2 text-secondary text-center justify-center items-center bold-52 lg:bold-50">Frequently Asked Questions</h1>
      </div>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>-How do I apply for a job at TunUp</AccordionTrigger>
    <AccordionContent>
    You can apply by visiting our Careers page

and submitting your application through the online portal. Make sure to upload your updated resume and fill in all required details.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>-Can I apply for more than one position at the same time?</AccordionTrigger>
    <AccordionContent>
    Yes, you may apply for multiple roles if they align with your skills and experience. However, we recommend focusing on positions that best match your qualifications to increase your chances of success. If you apply for multiple jobs, ensure your resume is tailored to each role.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>-When will I hear back after submitting my application?</AccordionTrigger>
    <AccordionContent>
    1.Initial Response: You’ll typically receive an acknowledgment email confirming we’ve received your application just after finalizing it.

2.Next Steps: If your qualifications match the role, a recruiter will contact you within [X weeks] to discuss next steps (e.g., an interview or assessment).

3.No Updates? Due to high application volumes, we may not always notify candidates who aren’t shortlisted. However, we keep all resumes on file for future opportunities.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>-Can I apply if I live abroad or require a work visa?</AccordionTrigger>
    <AccordionContent>At TunUp we welcome applications from talented individuals worldwide. <br /> However, please note that Tunisian labor regulations require foreign employees to obtain a valid residence card ("carte de séjour") and work permit before employment. <br />
     Here’s what you should know:

1. For Applicants Already in Tunisia: <br />

o You must hold a valid residence card authorizing work (e.g., student, spouse, or work visa). <br />

o We may assist with work permit processes for selected candidates, subject to legal approvals. <br />

2. For Applicants Abroad: <br />

o We recommend securing legal residency/work authorization before applying.
    </AccordionContent>
  </AccordionItem>
</Accordion>

        
      
    </section>
  )
}

export default FrequentQuestionsSection
