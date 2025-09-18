import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BadgeSection } from "../ui/badge-section";

export function GuaranteeSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-black">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 sm:mb-8">
          <BadgeSection>100% risk-free</BadgeSection>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          <span className="text-green-500">90-Day</span> money-back guarantee
        </h2>

        {/* Guarantee Badge */}
        <Image
          src="/warnty.avif"
          alt="Guarantee Badge"
          width={208}
          height={208}
          className="mx-auto mb-4 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
        />

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
      </div>
    </section>
  );
}
