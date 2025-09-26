import { Button } from "@/components/ui/button";
import { SiteSettings } from "@/types/sanity";
import Image from "next/image";

interface BlueprintSectionProps {
  siteSettings?: SiteSettings;
}

const faqData = [
  {
    question: "Question 1",
    title: "Does this work?",
    content: "We've already answered a through the real testimonials we share.",
  },
  {
    question: "Question 2",
    title: "How long does it take?",
    content:
      "People are making money every single day— some within 24 hours, others within a few weeks or months.\n\nAnd for those worried it might take too long... We have a surprise for you—so keep reading.",
  },
  {
    question: "Question 3",
    title: "What do I need to start?",
    content: "NOTHING you just need to act\n\nThat's it.",
  },
  {
    question: "Question 4",
    title: "Can I compete with big accounts?",
    content:
      "Yes—absolutely.\n\nWith the right marketing strategy, even small creators with zero followers are making sales. It's not about size—it's about strategy.",
  },
  {
    question: "Question 5",
    title: "I don't know anything about marketing.",
    content:
      "Don't worry—we've got you.\n\nWe'll give you a proven marketing strategy that's already made thousands for us and others in the community.\n\nYou don't need experience. All you have to do is follow the shit",
  },
];

export function BlueprintSection({ siteSettings }: BlueprintSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          the answers for your concerns about{" "}
          <span className="text-green-500">DPA</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-4 sm:p-6 space-y-3"
              style={{ backgroundColor: "#0f0f0f" }}
            >
              <div className="text-white text-base  py-2 font-bold text-center">
                {faq.question}
              </div>
              <h3 className="text-white font-semibold text-base">
                {faq.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
                {faq.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center space-y-4">
          <h3 className="text-white text-4xl font-bold">
            ...and so much more!
          </h3>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            asChild
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Get Access
            </a>
          </Button>
          <Image
            src="/stars.avif"
            alt="5 star rating"
            width={120}
            height={24}
          />
        </div>
      </div>
    </section>
  );
}
