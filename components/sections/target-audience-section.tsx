import { BadgeSection } from "@/components/ui/badge-section";

const audienceItems = [
  "You're tired of paying $497 for courses with no results",
  "You want to start selling digital products",
  "You want a simple, beginner-friendly method",
  "You want to grow online — your way",
  "You work a 9-5 and want extra income",
  "You're a creator looking to earn online",
  "You're building a side hustle",
];

export function TargetAudienceSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-2 sm:py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-3 sm:mb-4">
          <BadgeSection>Is This You?</BadgeSection>
        </div>
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          This Is Made for <span className="text-orange-500">People</span> Like
          You...
        </h2>

        <ul className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {audienceItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between gap-3 sm:gap-4 bg-gray-900/50 p-3 sm:p-4 rounded-full border border-gray-800"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base">{item}</p>
              </div>
              {/* Blue light effect covering the right side and fading to the left */}
              <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-l from-blue-500/90 via-blue-400/10 to-transparent" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
