import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How quickly can you deliver a new design?",
    answer: "For focused design sprints, we typically deliver initial concepts within 3-5 business days and complete iterations within 1-2 weeks. For larger projects, we'll establish clear timelines based on your specific needs and priorities.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely! We specialize in helping founders turn ideas into tangible, buildable products. Our flexible engagement models are specifically designed to meet startups where they are, whether you need a full product system or a focused MVP design.",
  },
  {
    question: "What if I need ongoing design support?",
    answer: "Our retainer option gives you dedicated design support without the overhead of a full-time hire. You'll get consistent access to product design expertise that scales with your needs, with the ability to pause or adjust as your requirements change.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "We build regular feedback cycles into our process, with clear communication via Slack, Loom videos, and live reviews. We refine designs iteratively based on your input until we reach the right solution for your product and users.",
  },
  {
    question: "What design tools do you use?",
    answer: "We primarily work in Figma for UI/UX design, prototyping, and design systems. For specific needs, we also use additional tools like Framer for high-fidelity prototypes, Lottie for animations, and various other specialized tools as needed.",
  },
  {
    question: "Can you work directly with our development team?",
    answer: "Yes, we frequently collaborate with engineering teams to ensure smooth handoff and implementation. We can participate in planning sessions, provide detailed specs, and answer questions during development to ensure the final product matches the design vision.",
  },
];

const FAQsSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start p-6 md:p-20 bg-gray-50" id="faqs">
      <div className="w-full max-w-6xl">
        <div className="space-y-2 mb-12">
          <span className="text-muted-foreground">FAQs</span>
          <h2 className="text-4xl md:text-5xl text-primary font-bold leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-xl px-6 py-4 bg-white transition-all hover:border-gray-400 "
            >
              <AccordionTrigger className="text-lg md:text-xl font-medium text-primary hover:no-underline cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQsSection; 