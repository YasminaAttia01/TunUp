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
    <AccordionTrigger>How to Place Your First Order?</AccordionTrigger>
    <AccordionContent>
    1-Select Your Product – Browse our catalog and choose the product that suits your needs. Configure it by selecting the quantity and delivery date. <br />
2-Create Your File – Use our Designer tool to customize your product or upload your own file after completing the purchase. <br />
3-Proceed to Checkout – Finalize your order by making the payment. If you haven’t uploaded your print file yet, you can do so at this stage. <br />
4-Receive Your Product – Enjoy fast and reliable delivery options tailored to your needs
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Can I advance or postpone an order delivery date?</AccordionTrigger>
    <AccordionContent>
    Unfortunately it&apos;s not possible.

Once a file has entered the production process, it&apos;s no longer possible to change (advance or postpone) the selected delivery date.

Our manufacturing system doesn&apos;t allow us to change the priority given to an order, and therefore the timescale in which it&apos;s processed.

If you still have any doubts, please contact us. We&apos;ll be happy to help!
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Where can I find my oldest orders?</AccordionTrigger>
    <AccordionContent>
If you need information about orders placed on our old website version, please note that you can find them in your personal area:

Log in to your Pixartprinting account
Click on your name on top right of the home page
Enter the personal area &quot;Your Orders&quot; section
Click on the &quot;Pre-16/​12/​2022 orders&quot; button
If you need the PDF invoice or other information not available in this section, please send us a request  and we&apos;ll do the necessary.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Do I need to create an account to place an order?</AccordionTrigger>
    <AccordionContent>
    You need to register to place an order: creating an account allows you not only to use our services (place a print order, purchase a Design Service, order a sample pack) but also to access exclusive promotions. <br />

Having an account permit you to receive communications, offers, invoices, keep updated about your orders/services and handle your personal information.
    </AccordionContent>
  </AccordionItem>
</Accordion>

        
      
    </section>
  )
}

export default FrequentQuestionsSection
