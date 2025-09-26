import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { SiteSettings } from "@/types/sanity";

interface NotForEveryoneSectionProps {
  siteSettings?: SiteSettings;
}

const notForTypes = [
  {
    title: "people looking for a course on paid ads",
    description:
      "We focus on organic growth, automation, and faceless content — not ad strategy.",
  },
  {
    title: "people looking for an overnight success",
    description:
      "If you're hoping to click a few buttons and magically make $1,000 by tomorrow... this isn't for you.",
  },
  {
    title: "people who are just want to watch videos",
    description:
      "This isn't passive entertainment. This is a hands-on program designed for people who are ready to apply and grow.",
  },
  {
    title: "people who want to sell exclusive or adult content.",
    description:
      "My training is focused on digital products and ethical marketing — not adult or explicit content.",
  },
];

export function NotForEveryoneSection({
  siteSettings,
}: NotForEveryoneSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still thinking, "
            <span className="text-green-500">Is this for me?</span>"
          </h2>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            It's not for everyone.
          </h3>

          <p className="text-gray-300 text-lg mb-12">
            Let's talk about who should{" "}
            <span className="text-orange-500 font-semibold">not</span> join.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {notForTypes.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-orange-500 max-w-screen hover:bg-orange-600 text-white px:4 md:px-8 py-4 rounded-lg font-semibold cursor-pointer text-center text-xs md:text-lg"
            asChild
          >
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
              I See Myself in This — I'm Ready to Join DPA →
            </a>
          </Button>

          {/* Trust badges */}
          <div className="flex justify-center items-center gap-4 mt-6"></div>
        </div>
      </div>
    </section>
  );
}
