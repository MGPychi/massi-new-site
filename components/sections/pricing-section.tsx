import { Button } from "@/components/ui/button";
import {
  Check,
  Video,
  Users,
  Search,
  MessageCircle,
  Download,
  BookOpen,
  Palette,
  Mail,
} from "lucide-react";

export function PricingSection() {
  const features = [
    {
      icon: Check,
      text: "Full Course: Digital Product Academy",
    },
    {
      icon: Video,
      text: "+20 recorded lessons (video)",
    },
    {
      icon: Video,
      text: "Reels Masterclass",
    },
    {
      icon: Search,
      text: "Find Your Perfect Niche",
    },
    {
      icon: Users,
      text: "Private Community (100+ members)",
    },
    {
      icon: MessageCircle,
      text: "1-1 support call",
    },
    {
      icon: Download,
      text: "Lifetime access to all lessons & future updates",
    },
    {
      icon: Download,
      text: "10 digital products ready to sell",
    },
    {
      icon: BookOpen,
      text: "Story-selling strategy to grow with stories",
    },
    {
      icon: Palette,
      text: "Canva Crash Course",
    },
    {
      icon: Mail,
      text: "Manychat & Email Marketing Setup",
    },
    {
      icon: Check,
      text: "And More...",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <span className="text-gray-400 text-xs sm:text-sm">💼 Plans</span>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-orange-500/30 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              $97 lifetime access
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-700 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-white text-xs sm:text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
              Get The Full Access Before The Price Goes Up
            </p>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              asChild
            >
              <a
                href={process.env.NEXT_PUBLIC_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hidden sm:inline">
                  Get Instant Access Now →
                </span>
                <span className="sm:hidden">Get Access →</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
