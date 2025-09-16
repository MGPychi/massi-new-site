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
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-8">
            <span className="text-gray-400 text-sm">💼 Plans</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-gray-900/60 rounded-3xl p-8 border border-gray-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              $97 lifetime access
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-700 rounded-full p-2 flex-shrink-0">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-sm mb-6">
              Get The Full Access Before The Price Goes Up
            </p>

            <Button
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl text-lg"
            >
              Get Access! →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
