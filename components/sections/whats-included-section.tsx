import Image from "next/image";

export function WhatsIncludedSection() {
  const bonuses = [
    {
      image: "/value1.avif",
      title: "One-on-One Support Call",
      value: "$397 Value",
      description: "Personalized guidance to move you forward",
    },
    {
      image: "/value2.avif",
      title: "Private Creators Community",
      value: "$497 Value",
      description: "Get feedback, support & accountability",
    },
    {
      image: "/value3.avif",
      title: "20+ Low-Competition Niches",
      value: "$97 Value",
      description: "Top 20 niches for digital products Low-Competition",
    },
    {
      image: "/value4.avif",
      title: "10 Ready-Made Digital Products (PLR/ MRR)",
      value: "$497 Value",
      description: "Start selling from day one",
    },
    {
      image: "/value5.avif",
      title: "Canva Crash Course",
      value: "$97 Value",
      description: "Design like a pro without any prior skills",
    },
    {
      image: "/value6.avif",
      title: "Morychat Template",
      value: "$97 Value",
      description:
        "Custom templates to collect emails, send them content and promote your products automatically",
    },
    {
      image: "/value7.avif",
      title: "Story Selling Prompt",
      value: "$97 Value",
      description: "Custom prompt how to sell without sounding salesy",
    },
  ];

  return (
    <section className="px-4 py-2 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We've included these powerful{" "}
            <span className="text-orange-500">bonuses</span>...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 rounded-3xl p-6 border border-gray-800 hover:border-gray-700 transition-colors shadow-xl shadow-black/20 overflow-hidden"
            >
              {/* Blue light effect in top right */}
              <div className="absolute top-0 right-0 w-20 h-20">
                {/* <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/30 via-blue-400/10 to-transparent rounded-br-3xl" /> */}
              </div>
              <div className="aspect-video bg-gradient-to-tr from-gray-800/60 to-transparent rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  width={300}
                  height={300}
                  className="w-full h-full  object-contain   transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {bonus.title}
              </h3>

              <div className="flex items-center gap-2">
                <p className="text-gray-100 font-medium text-sm mb-3">
                  <del className="text-gray-400">{bonus.value}</del>
                </p>
                <p className="text-orange-500 font-bold text-sm mb-3">Free</p>
              </div>

              <p className="text-gray-400 text-sm  leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Total Real-World Value: $1,810
            </h3>

            <p className="text-xl md:text-2xl text-white mb-4">
              Normal Price: $297
            </p>

            <p className="text-xl md:text-2xl font-bold text-white mb-6">
              TODAY'S SPECIAL PRICE:
            </p>

            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold text-orange-500">
                Just $97
              </span>
            </div>

            <p className="text-xl text-white mb-6">one time payment</p>

            <p className="text-2xl md:text-3xl font-bold text-white mb-8">
              You Save: $1,711
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg text-lg mb-6 transition-colors">
              YES! I Want Instant Access →
            </button>

            {/* Trust badges */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8">
              And claim all the bonuses...
            </p>

            {/* Who We Are badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-gray-400 text-sm">👥 Who We Are</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
