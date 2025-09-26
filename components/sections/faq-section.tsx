import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeSection } from "../ui/badge-section";
import { FAQ, SiteSettings } from "@/types/sanity";

interface FAQSectionProps {
  faqs?: FAQ[];
  siteSettings?: SiteSettings;
}

export function FAQSection({ faqs, siteSettings }: FAQSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  // Default static FAQs as fallback
  const staticFaqItems = [
    {
      question: "Will this work anywhere in the world",
      answer:
        "Absolutely! You only need to sell what people already want—and we'll help you figure that out no matter where you live.",
    },
    {
      question: "How much money should I invest to get started?",
      answer:
        "Once you join DPA, you won't need to buy anything else—not even Canva Pro.",
    },
    {
      question: "How fast can I see results?",
      answer:
        "Great question!\nSome students make their first sale within days; others take a few weeks.\nIt all depends on how closely you follow the steps—but if you stay consistent, you will get there.",
    },
    {
      question: "I don't have a niche yet. Will this work for me?",
      answer:
        "Yes! We'll help you discover a niche that fits you and is in demand. You don't need to figure it out alone.",
    },
    {
      question: "Are there any hidden costs?",
      answer:
        "Nope. Zero upsells.\nWhen you join, you get lifetime access to DPA and all future updates—no extra payments, ever.",
    },
    {
      question: "What if I'm not creative or tech-savvy?",
      answer:
        "Don't overthink it.\nDPA guides you step-by-step—no tech skills or design experience needed.\nYou just need the will to start.",
    },
    {
      question: "Why should I trust you?",
      answer:
        "We've helped over 80 digital creators make their first sales in a single day, and we're here to help you do the same",
    },
    {
      question: "Do I need to show my face?",
      answer:
        "Not at all! You can build a successful digital product business completely anonymously. Many of our students prefer to stay behind the scenes and focus on creating valuable content without ever showing their face.",
    },
    {
      question: "What if I don't know what product to create?",
      answer:
        "No worries—we'll help you decide!\nWe also include 10+ PLR and MRR products to help you launch quickly (even if you are starting from scratch).",
    },
    {
      question: "What if I don't get any results?",
      answer:
        "We'll work with you to find out what's missing and fix it together.\nAnd if you still don't get results after applying the system?\nWe'll refund you.",
    },
  ];

  // Use dynamic FAQs if available, otherwise use static ones
  const faqItems = faqs && faqs.length > 0 ? faqs : staticFaqItems;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <BadgeSection> FAQs</BadgeSection>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            We're here to help
          </h2>

          <p className="text-gray-300 text-base sm:text-lg">
            FAQs designed to provide the information you need.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-900/60 rounded-xl sm:rounded-2xl border border-gray-800 px-4 sm:px-6"
            >
              <AccordionTrigger className="text-white text-left hover:no-underline py-4 sm:py-6 text-sm sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4 sm:pb-6 text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg"
            asChild
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">
                All Questions Answered - Let's Get Started! →
              </span>
              <span className="sm:hidden">Get Started! →</span>
            </a>
          </Button>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-sm sm:text-base">
                ⭐⭐⭐⭐⭐
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
