export function TargetAudienceSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-3 sm:mb-4">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm text-orange-500 border border-orange-500/30 rounded-full mb-4 sm:mb-6">
            Is This You?
          </span>
        </div>
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          This Is Made for <span className="text-orange-500">People</span> Like
          You...
        </h2>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 bg-gray-900/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-800">
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
              <p className="text-white text-sm sm:text-base">
                You're tired of paying $497 for courses with no results
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-gray-900/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-800">
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
              <p className="text-white text-base">
                You want to start selling digital products
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
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
              <p className="text-white text-base">
                You want a simple, beginner-friendly method
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
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
              <p className="text-white text-base">
                You want to grow online — your way
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
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
              <p className="text-white text-base">
                You work a 9-5 and want extra income
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
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
              <p className="text-white text-base">
                You're a creator looking to earn online
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
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
              <p className="text-white text-base">
                You're building a side hustle
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">
            ...and so much more!
          </h3>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get Access →
          </button>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2">2,847 people</span>
          </div>
        </div>
      </div>
    </section>
  );
}
