import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Is this masterclass open to all?",
    a: "Yes! This is a live session open to everyone interested in AI. Our goal is to empower marketers with AI tools that are changing the industry landscape."
  },
  {
    q: "Do I need experience with AI tools?",
    a: "No prior AI experience is needed. We will show you exactly how to use Claude and ChatGPT from scratch specifically for Meta Ads."
  },
  {
    q: "Do I need an active Meta Ads account?",
    a: "While having an account is better so you can follow along, it's not mandatory. You can learn the strategies and apply them once you have an account ready."
  },
  {
    q: "Will there be a recording available?",
    a: "No. This is a live-only event with hands-on demonstrations and Q&A. We encourage you to attend live to get the full experience and the bonus prompt library."
  },
  {
    q: "How will I receive the meeting link?",
    a: "The link will be sent to your registered email address and WhatsApp number instantly after you reserve your seat."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Got questions?
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">Common Inquiries</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-[2rem] px-8 border-white/5 overflow-hidden group hover:border-primary/20 transition-colors">
              <AccordionTrigger className="hover:no-underline py-8 text-lg md:text-xl font-black text-left uppercase tracking-tight hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary-foreground pb-8 leading-relaxed text-lg font-medium">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
