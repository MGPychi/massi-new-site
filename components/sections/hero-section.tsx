import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import {
  VIDEO_CONFIG,
  BRAND_INFO,
  CTA_TEXT,
  SECURITY_BADGES,
} from "@/lib/constants";
import { BadgeSection } from "../ui/badge-section";

export function HeroSection() {
  return (
    <section className="relative px-4 w-full   sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="mx-auto md:max-w-5xl lg:max-w-7xl xl:max-w-8xl">
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
        {/* <SecurityBadges /> */}
      </div>
    </section>
  );
}

function TrustBadge() {
  return (
    <div className="mb-4 sm:mb-6">
      <BadgeSection>{BRAND_INFO.TRUST_BADGE_TEXT}</BadgeSection>
    </div>
  );
}

function MainHeadline() {
  return (
    <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium leading-tight text-white text-balance max-w-4xl mx-auto px-2">
      How This Simple Digital Product{" "}
      <span className="text-orange-500">Strategy</span> Made Me{" "}
      <span className="text-green-400">$869.66</span> in One Day{" "}
      <span className="text-gray-300">(No Experience Needed)</span>
    </h1>
  );
}

function Subtitle() {
  return (
    <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
      No big followers, No experience needed,{" "}
      <span className="text-red-600 font-semibold">guaranteed success</span>
    </p>
  );
}

function VideoSection() {
  return (
    <div className="mb-2 sm:mb-4 max-w-4xl mx-auto">
      <div className="rounded-xl sm:rounded-2xl overflow-hidden p-3 py-1 sm:p-4 md:p-6 md:py-2">
        {/* Wistia Video Player */}
        <div className="relative w-full">
          <div className="aspect-video bg-slate-900 rounded-lg sm:rounded-xl flex items-center justify-center">
            <wistia-player
              media-id={VIDEO_CONFIG.WISTIA_VIDEO_ID}
              aspect={VIDEO_CONFIG.WISTIA_ASPECT_RATIO}
              className="w-full h-full rounded-lg sm:rounded-xl"
            />
          </div>
        </div>

        {/* Course Description */}
        {/* <CourseDescription /> */}
      </div>
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
        aria-label="Start making money with digital products now"
        asChild
        className="text-sm sm:text-base"
      >
        <a
          href={process.env.NEXT_PUBLIC_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden sm:inline">{CTA_TEXT.PRIMARY_DESKTOP}</span>
          <span className="sm:hidden">{CTA_TEXT.PRIMARY_MOBILE}</span>
        </a>
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
          <span className="text-gray-400 text-xs sm:text-sm">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
