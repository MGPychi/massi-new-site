import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { SiteSettings } from "@/types/sanity";

interface TestimonialsSectionProps {
  siteSettings?: SiteSettings;
}

export function TestimonialsSection({
  siteSettings,
}: TestimonialsSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Left Testimonial */}
          <Card className="bg-slate-800 border-slate-700 rounded-xl sm:rounded-2xl">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  @facelesswealth.queen
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Junice | Digital Products & Digital Marketing
                </p>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                "She started with me just a few days ago, and now she has over
                120 followers."
              </p>

              {/* Message Screenshot */}
              <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Hello! I just created my faceless account recently and I'm
                      very excited to start this journey, thank you for your
                      support 🙏
                    </p>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-red-500">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Testimonial */}
          <Card className="bg-slate-800 border-slate-700 rounded-xl sm:rounded-2xl">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  @_justcallmeangel_
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  digital marketing
                </p>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                "Thank you so much for inspiring me to start this journey into
                faceless digital marketing! It's only been four days, and I'm
                already seeing real growth and potential! 😍"
              </p>

              {/* Message Screenshot */}
              <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-xs sm:text-sm">
                      Thank you so much for inspiring me to start this journey
                      into faceless digital marketing! It's only been four days,
                      and I'm already seeing real growth and potential. 😍 I'm
                      excited to dive in, focusing on sharing valuable content
                      without needing to put myself in the spotlight. Thanks for
                      encouraging me to step out of my comfort zone. I can't
                      wait to see where this path will take me! ❤️
                    </p>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-red-500">❤️</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1 sm:mt-2">
                      NOV 12 AT 11:56
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg"
            asChild
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              Get Access →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
