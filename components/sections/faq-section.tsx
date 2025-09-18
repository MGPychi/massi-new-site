import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqItems = [
    {
      question: "Will this work anywhere in the world",
      answer:
        "Yes, absolutely! The Digital Product Academy strategies work globally. Digital products can be sold to anyone, anywhere in the world. Our students are from all over - US, UK, Canada, Australia, Europe, and many other countries - all seeing success.",
    },
    {
      question: "How much money should I invest to get started?",
      answer:
        "The beauty of digital products is that you need almost zero startup costs. Once you have the DPA course ($97), you can start creating and selling digital products immediately. No inventory, no shipping, no additional tools required to get started.",
    },
    {
      question: "How fast can I see results?",
      answer:
        "Many of our students see their first sales within 24-72 hours of implementing our strategies. However, everyone's journey is different. Some see results immediately, others within a few weeks. What matters is following the system consistently.",
    },
    {
      question: "I don't have a niche yet. Will this work for me?",
      answer:
        "Perfect! We actually include a comprehensive niche selection guide that shows you 20+ low-competition, high-profit niches that are perfect for beginners. You'll know exactly what niche to choose and why it will be profitable for you.",
    },
    {
      question: "Are there any hidden costs?",
      answer:
        "No hidden costs whatsoever. The $97 gets you everything - the full course, all bonuses, lifetime access, community access, and our 1-on-1 support call. There are no upsells, no monthly fees, no additional costs.",
    },
    {
      question: "What if I'm not creative or tech-savvy?",
      answer:
        "You don't need to be! We show you exactly how to create simple, effective digital products using free tools. Plus, we include ready-made templates and our Canva crash course so you can create professional-looking products even with zero design experience.",
    },
    {
      question: "Why should I trust you?",
      answer:
        "We're not just teaching theory - we're actively doing this ourselves and making consistent income. You can see real results from our students, and we offer a 90-day money-back guarantee. If you don't get results, we'll refund every penny.",
    },
    {
      question: "Do I need to show my face?",
      answer:
        "Not at all! Our strategies focus on faceless content creation. You can build a successful digital product business without ever showing your face, using your real name, or being on camera. We teach you exactly how to do this.",
    },
    {
      question: "What if I don't know what product to create?",
      answer:
        "We've got you covered! The course includes proven product ideas, templates you can customize, and even 10 ready-made digital products you can start selling immediately. You'll never be stuck wondering what to create.",
    },
    {
      question: "What if I don't get any results?",
      answer:
        "That's why we offer our 90-day guarantee. If you follow the system for 90 days and don't see results, we'll give you additional 1-on-1 coaching. If that still doesn't work, we'll refund your money completely.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <span className="text-gray-400 text-xs sm:text-sm">❓ FAQs</span>
          </div>

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
            <a
              href={process.env.NEXT_PUBLIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
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
