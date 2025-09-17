import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { VIDEO_CONFIG, BRAND_INFO, CTA_TEXT, SECURITY_BADGES } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Trust Badge */}
        <TrustBadge />

        {/* Main Headline */}
        <MainHeadline />

        {/* Subtitle */}
        <Subtitle />

        {/* Video Section */}
        <VideoSection />

        {/* Call to Action Buttons */}
        <CTAButtons />

        {/* Security Badges */}
        <SecurityBadges />
      </div>
    </section>
  );
}

function TrustBadge() {
  return (
    <div className="mb-6 sm:mb-8">
      <Badge className="bg-slate-800/80 text-white border border-slate-600/50 px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full">
        {BRAND_INFO.TRUST_BADGE_TEXT}
      </Badge>
    </div>
  );
}

function MainHeadline() {
  return (
    <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-white text-balance max-w-5xl mx-auto px-2">
      How This Simple Digital Product{" "}
      <span className="text-orange-500">Strategy</span> Made Me{" "}
      <span className="text-green-400">$869.66</span> in One Day{" "}
      <span className="text-gray-300">(No Experience Needed)</span>
    </h1>
  );
}

function Subtitle() {
  return (
    <p className="mb-8 sm:mb-12 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
      No big followers, No experience needed,{" "}
      <span className="text-red-400 font-semibold">guaranteed success</span>
    </p>
  );
}

function VideoSection() {
  return (
    <div className="mb-8 sm:mb-12 max-w-5xl mx-auto">
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 p-4 sm:p-6">
        {/* Wistia Video Player */}
        <div className="relative w-full mb-6">
          <div className="aspect-video bg-slate-900 rounded-xl flex items-center justify-center">
            <wistia-player 
              media-id={VIDEO_CONFIG.WISTIA_VIDEO_ID}
              aspect={VIDEO_CONFIG.WISTIA_ASPECT_RATIO}
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Course Description */}
        <CourseDescription />
      </div>
    </div>
  );
}

function CourseDescription() {
  return (
    <div className="text-center">
      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
        Learn how to grow a faceless brand and sell digital products
      </h3>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
        <span className="text-orange-400 font-semibold text-sm sm:text-base">
          {BRAND_INFO.NAME}
        </span>
        <span className="text-gray-500 hidden sm:inline">•</span>
        <span className="text-gray-400 text-xs sm:text-sm">
          Complete Digital Marketing Course
        </span>
      </div>
      
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-4">
        A step-by-step system to build your brand from scratch and sell digital products with no ads.
      </p>
      
      {/* Reviews */}
      <ReviewsSection />
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="flex" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-white text-xs sm:text-base font-semibold">
        5 out of 5
      </span>
      <span className="text-gray-400 text-xs sm:text-sm">
        ({BRAND_INFO.REVIEW_COUNT})
      </span>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
      <Button
        size="lg"
        className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
        aria-label="Start making money with digital products now"
      >
        <span className="hidden sm:inline">
          {CTA_TEXT.PRIMARY_DESKTOP}
        </span>
        <span className="sm:hidden">{CTA_TEXT.PRIMARY_MOBILE}</span>
      </Button>
      
      <Button
        size="lg"
        variant="outline"
        className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-lg bg-transparent transition-all duration-200 hover:scale-105"
        aria-label="Join Digital Product Academy"
      >
        {CTA_TEXT.SECONDARY}
      </Button>
    </div>
  );
}

function SecurityBadges() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8 opacity-80">
      {SECURITY_BADGES.map((badge, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-700 rounded flex items-center justify-center">
            <span className="text-white text-xs" aria-hidden="true">
              {badge.icon}
            </span>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}
