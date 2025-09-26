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
import { BadgeSection } from "../ui/badge-section";
import { Pricing, SiteSettings } from "@/types/sanity";

interface PricingSectionProps {
  pricing?: Pricing;
  siteSettings?: SiteSettings;
}

export function PricingSection({ pricing, siteSettings }: PricingSectionProps) {
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
      text: "1-1 support ",
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

  // Use dynamic pricing if available, otherwise use static content
  const price = pricing?.price || "$33";
  const pricingTitle = pricing?.pricingTitle || "lifetime access";
  const description =
    pricing?.description || "Get The Full Access Before The Price Goes Up";
  const dynamicFeatures = pricing?.features?.map((text) => ({
    text,
    icon: Check,
  }));
  const displayFeatures =
    dynamicFeatures && dynamicFeatures.length > 0 ? dynamicFeatures : features;
  const ctaText = pricing?.ctaText || "Get Instant Access Now →";
  // Use the same pattern as hero section: pricing CTA URL > siteSettings checkout URL > env var
  const ctaUrl =
    pricing?.ctaUrl ||
    siteSettings?.checkoutUrl ||
    process.env.NEXT_PUBLIC_CHECKOUT_URL;
  const badge = pricing?.badge || "Badge";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <BadgeSection>{badge}</BadgeSection>
        </div>

        {/* Main Pricing Card */}
        <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-800 shadow-2xl bg-black/10 backdrop-blur-md">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              {price} {pricingTitle}
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {displayFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-700 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                    <IconComponent className="h-4 w-4 sm:h-4 sm:w-4 text-green-500" />
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
              {description}
            </p>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg transition-all duration-200  shadow-lg hover:shadow-orange-500/25"
              asChild
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">{ctaText}</span>
                <span className="sm:hidden">Get Access →</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
