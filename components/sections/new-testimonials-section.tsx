export function TestimonialsSection() {
  const testimonials = [
    {
      name: "@lorita",
      role: "Digital Products & IG Growth",
      content:
        "I absolutely love the ultimate digital course! The content is well-structured and packed with practical insights that will help me kickstart my digital marketing journey.",
    },
    {
      name: "@loni",
      role: "digital product",
      content:
        "Like clockwork—people who've seen no sales or growth for weeks are finally getting their first sales just one day after. It's happening again and again.",
      hasScreenshot: true,
    },
    {
      name: "@fitnofun",
      role: "content creator",
      content:
        "She went weeks without a single sale. She knew something was off... but couldn't tell what. Then, just one day after going through the Ultimate Faceless Marketing module... the sales started rolling in daily. Here's what she shared...",
    },
    {
      name: "@lorita_",
      role: "digital marketing",
      content:
        "She made 9 sales in just one week. And for most of our students, once they spend a short time inside the DPA, sales stop being the main concern—they start thinking bigger, like building a real business.",
      hasScreenshot: true,
    },
    {
      name: "@digitalgrowth",
      role: "digital product",
      content:
        "Inside the DPA, you're one of us. We're always here to keep you motivated and give you the insights you need to grow and improve your business.",
    },
    {
      name: "@nenn_",
      role: "content creator",
      content:
        "Just a week after applying what she learned in the DPA course, she started seeing first results —growing from 0 to 300 followers the fastest and easiest way to build your audience :)",
      hasScreenshot: true,
    },
  ];

  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-8">
            <span className="text-gray-400 text-sm">💬 Testimonials</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            100s of students LOVE this academy!
          </h2>

          <p className="text-gray-300 text-lg">
            Here's what a few have to say... 👇👇👇
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800"
            >
              <div className="mb-4">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.content}
                </p>

                {testimonial.hasScreenshot && (
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="text-xs text-gray-400 mb-2">
                      Screenshot:
                    </div>
                    <div className="bg-white rounded p-3 text-black text-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Student Update</span>
                      </div>
                      <p>
                        {testimonial.name === "@loni" &&
                          "I made my first sell 🥳🥳 I started my ig account one month ago with 0 followers so so grateful thank you"}
                        {testimonial.name === "@lorita_" &&
                          "GIRRRLLLL I made 9 sales!! 9 sales in the week after I took your course! I'm amazed. My DMs are full of people interested in my products. I've never sold this much in such a short period before and now my last 3 reels I have had that happening. But the best part about this course is that it taught me I know what I need to do each day to bring in leads and sales, and have finally figured out how to make my business WORK! So I just wanted to let you know the process you teach and the heaviness of struggling in my business has lifted and I'm just so grateful I found your course!! 💗"}
                        {testimonial.name === "@nenn_" &&
                          "hey babes!! 3 week after implementing the Insta tactics I learned from 0 to 300!! After being stuck for a week, this course was the game changer for me (exactly what I was missing ...and thank you for helping me feel 💗"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
