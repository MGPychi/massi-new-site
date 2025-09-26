import { Button } from "@/components/ui/button";
import { Phone, Mail, Cog, Shield } from "lucide-react";
import { SiteSettings } from "@/types/sanity";

interface UniqueValueSectionProps {
  siteSettings?: SiteSettings;
}

export function UniqueValueSection({ siteSettings }: UniqueValueSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  const uniqueFeatures = [
    {
      icon: Phone,
      title: "1-on-1 support Call",
    },
    {
      icon: Mail,
      title: "We Teach What Most Ignore: Email Marketing + Ecosystem Building",
    },
    {
      icon: Cog,
      title: "Smart Automations That Work While You Sleep",
    },
    {
      icon: Shield,
      title: "You are covered by our guarantee. risk-free",
    },
  ];

  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Maybe you're still a bit unsure—and want to see what we include that
            others leave out.
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-8">
            Totally fair.
          </h3>

          <p className="text-gray-300 text-lg mb-12">
            Here's what sets us apart from everyone else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {uniqueFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 rounded-full p-3 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-lg">
                    {feature.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
            asChild
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              I'm Ready to Join DPA →
            </a>
          </Button>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
