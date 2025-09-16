import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-8xl">
        {/* Trust Badge */}
        <div className="mb-6 sm:mb-8">
          <Badge className="bg-slate-800/80 text-white border border-slate-600/50 px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full">
            Trusted By More Than 80 Creators
          </Badge>
        </div>

        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-white text-balance max-w-5xl mx-auto px-2">
          How This Simple Digital Product{" "}
          <span className="text-orange-500">Strategy</span> Made Me{" "}
          <span className="text-green-400">$869.66</span> in One Day{" "}
          <span className="text-gray-300">(No Experience Needed)</span>
        </h1>
        <p className="mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
          No big followers, No experience needed,{" "}
          <span className="text-red-400 font-semibold">guaranteed success</span>
        </p>

        {/* Video Player Interface */}
        <div className="mb-8 sm:mb-12 max-w-5xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <div className="relative">
              {/* Video Player Area */}
              <div className="relative bg-slate-900 aspect-video">
                {/* Top bar with branding */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-bold">
                        W
                      </span>
                    </div>
                    <span className="text-white text-sm sm:text-lg font-semibold">
                      Whop
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-white text-xs sm:text-sm hover:text-gray-300 cursor-pointer hidden sm:inline">
                      Sign in
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                      <span className="text-white text-xs sm:text-sm">🔊</span>
                    </div>
                  </div>
                </div>

                {/* Central play button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-orange-500 rounded-full p-4 sm:p-6 hover:bg-orange-600 transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg">
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white ml-1" />
                  </div>
                </div>

                {/* Course Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent p-3 sm:p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {/* Left Side - Course Info */}
                    <div className="text-left">
                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-white font-bold text-sm sm:text-lg lg:text-xl mb-2 sm:mb-3 leading-tight">
                          Learn how to grow a faceless brand and sell digital
                          products
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                          <span className="text-orange-400 font-semibold text-sm sm:text-base">
                            Digital Product Academy
                          </span>
                          <span className="text-gray-500 hidden sm:inline">
                            •
                          </span>
                          <span className="text-gray-400 text-xs sm:text-sm">
                            Instagram Tool Beats Secret
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                          A step-by-step system to build your brand from scratch
                          and sell digital products with no ads.
                        </p>
                      </div>

                      {/* Reviews Section */}
                      <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-lg">
                          Reviews
                        </h4>
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-white text-xs sm:text-base font-semibold">
                            5 out of 5
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm min-w-[50px]">
                              5 star
                            </span>
                            <div className="flex-1 bg-slate-600 rounded-full h-2">
                              <div className="bg-yellow-400 h-2 rounded-full w-full transition-all duration-300"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Testimonial & Join */}
                    <div className="text-center">
                      <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 mb-6 border border-slate-700/50">
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              W
                            </span>
                          </div>
                          <span className="text-white font-semibold text-lg">
                            work.
                          </span>
                        </div>
                        <p className="text-gray-300 text-base mb-4 leading-relaxed italic">
                          "The program is very{" "}
                          <span className="text-orange-400 font-semibold underline decoration-orange-400/50">
                            10/10
                          </span>{" "}
                          thank you so much. Your share so much information that
                          I had never known before!"
                        </p>
                      </div>

                      <div className="text-center bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                        <p className="text-white font-semibold mb-2 text-lg">
                          are now to making real sales
                        </p>
                        <p className="text-gray-400 text-base mb-4">
                          with your own digital products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            <span className="hidden sm:inline">
              START MAKING OVER $800 NOW - RISK FREE →
            </span>
            <span className="sm:hidden">START NOW - RISK FREE →</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg bg-transparent transition-all duration-200 hover:scale-105"
          >
            JOIN DPA →
          </Button>
        </div>

        {/* Security badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-700 rounded flex items-center justify-center">
              <span className="text-white text-xs">🔒</span>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">
              Secure Payment
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-700 rounded flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm">
              Money Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
