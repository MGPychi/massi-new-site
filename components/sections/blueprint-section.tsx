import { Button } from "@/components/ui/button";

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

export function BlueprintSection() {
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
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4"
            >
              <div className="text-gray-400 text-sm font-medium">
                {faq.question}
              </div>
              <h3 className="text-white font-semibold text-lg">{faq.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {faq.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Try All Clear - Give Me Access Now →
          </Button>

          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
            </div>
            <div className="text-yellow-400 text-sm">★★★★★</div>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              JOIN DPA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
