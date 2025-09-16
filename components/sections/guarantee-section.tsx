import { Button } from "@/components/ui/button";

export function GuaranteeSection() {
  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-8">
            <span className="text-gray-400 text-sm">🔒 100% risk-free</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          <span className="text-green-500">90-Day</span> money-back guarantee
        </h2>

        {/* Guarantee Badge */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center border-8 border-gray-200">
              <div className="text-center">
                <div className="text-black font-bold text-lg mb-1">
                  GUARANTEE
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-black font-bold text-4xl mb-1">100%</div>
                <div className="text-black text-sm font-medium">MONEY BACK</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-black text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Outer ring text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 border-2 border-gray-300 rounded-full relative">
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

        <div className="space-y-6 text-left max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center text-lg leading-relaxed">
            We fully believe in the DPA program.
          </p>

          <p className="text-gray-300 text-center text-lg leading-relaxed">
            If you follow the steps, stay consistent, and take action—but don't
            get any results—we've got your back.
          </p>

          <p className="text-gray-300 text-center text-lg leading-relaxed">
            If you complete the program exactly as instructed, stay committed
            for at least 3 months, and still don't see any of the promised
            results on our sales page—we'll give you extra 1:1 help.
          </p>

          <p className="text-gray-300 text-center text-lg leading-relaxed">
            And if that still doesn't work, you'll get a refund.
          </p>

          <p className="text-gray-300 text-center text-lg leading-relaxed">
            This guarantee is for action-takers only. If you're not willing to
            do the work, this isn't for you.
          </p>
        </div>

        <div className="mb-8">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Get Instant Access To DPA →
          </Button>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        {/* FAQs badge */}
        <div className="mt-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
            <span className="text-gray-400 text-sm">❓ FAQs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
