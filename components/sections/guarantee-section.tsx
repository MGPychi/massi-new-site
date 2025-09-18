import { Button } from "@/components/ui/button";

export function GuaranteeSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <span className="text-gray-400 text-xs sm:text-sm">
              🔒 100% risk-free
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          <span className="text-green-500">90-Day</span> money-back guarantee
        </h2>

        {/* Guarantee Badge */}
        <div className="mb-8 sm:mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto bg-white rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-gray-200">
              <div className="text-center">
                <div className="text-black font-bold text-xs sm:text-sm lg:text-lg mb-1">
                  GUARANTEE
                </div>
                <div className="flex justify-center gap-1 mb-1 sm:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black text-xs sm:text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl mb-1">
                  100%
                </div>
                <div className="text-black text-xs sm:text-sm font-medium">
                  MONEY BACK
                </div>
                <div className="flex justify-center gap-1 mt-1 sm:mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black text-xs sm:text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Outer ring text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 border-2 border-gray-300 rounded-full relative">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                  GUARANTEE
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
                  GUARANTEE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 text-left max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
            We fully believe in the DPA program.
          </p>

          <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
            If you follow the steps, stay consistent, and take action—but don't
            get any results—we've got your back.
          </p>

          <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
            If you complete the program exactly as instructed, stay committed
            for at least 3 months, and still don't see any of the promised
            results on our sales page—we'll give you extra 1:1 help.
          </p>

          <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
            And if that still doesn't work, you'll get a refund.
          </p>

          <p className="text-gray-300 text-center text-sm sm:text-base lg:text-lg leading-relaxed">
            This guarantee is for action-takers only. If you're not willing to
            do the work, this isn't for you.
          </p>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            asChild
          >
            <a
              href={process.env.NEXT_PUBLIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden sm:inline">
                Claim Your 90-Day Guarantee Now →
              </span>
              <span className="sm:hidden">Claim Guarantee →</span>
            </a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm sm:text-base">
              ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>

        {/* FAQs badge */}
        <div className="mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full">
            <span className="text-gray-400 text-xs sm:text-sm">❓ FAQs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
