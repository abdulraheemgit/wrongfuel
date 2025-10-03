
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I drive my car after putting in wrong fuel?",
      answer: "No, do not start your engine or attempt to drive! Starting the engine can cause expensive damage to your fuel system. Call us immediately and we'll come to you for safe fuel extraction."
    },
    {
      question: "How long does fuel extraction take?",
      answer: "Most fuel extractions take 30-45 minutes depending on the vehicle and amount of wrong fuel. We work quickly to get you back on the road as soon as possible."
    },
    {
      question: "What's the difference between petrol in diesel vs diesel in petrol?",
      answer: "Petrol in a diesel car is more serious as petrol acts as a solvent and can damage the fuel pump and injection system. Diesel in a petrol car is less harmful but still requires immediate extraction. Both situations need professional attention."
    },
    {
      question: "How much does your mobile fuel drain service cost?",
      answer: "Our pricing varies based on location, time of call, and complexity of the job. We provide transparent quotes over the phone before dispatch. Emergency callouts are competitively priced with no hidden fees."
    },
    {
      question: "Do you provide fuel after extraction?",
      answer: "Yes, after safely extracting the wrong fuel, we can provide the correct fuel to get you mobile again. This service is included in our comprehensive fuel drain package."
    },
    {
      question: "Are you available 24/7?",
      answer: "Yes, we operate 24 hours a day, 7 days a week including weekends and holidays. Fuel emergencies don't wait for business hours, and neither do we."
    },
    {
      question: "How quickly can you reach me?",
      answer: "Response times vary by location: Central London 15-30 minutes, Greater London 30-45 minutes, surrounding areas 45-90 minutes. We'll give you an accurate ETA when you call."
    },
    {
      question: "Will my car insurance cover wrong fuel extraction?",
      answer: "Some comprehensive insurance policies include misfuelling cover. Check with your insurer first. Many customers find our direct payment service more convenient than insurance claims."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about wrong fuel situations and our mobile extraction service.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-red-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-700 mb-4">
              Our experienced team is available 24/7 to answer your questions and provide immediate assistance.
            </p>
            <p className="text-2xl font-bold text-red-600">+44 7XXX XXX XXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
