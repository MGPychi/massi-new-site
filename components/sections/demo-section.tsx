import { Button } from "@/components/ui/button";
import { SiteSettings } from "@/types/sanity";

interface ResultsSectionProps {
  siteSettings?: SiteSettings;
}

const results = [
  {
    image: "/result1.avif",
    alt: "Dashboard showing €277.13 revenue",
  },
  {
    image: "/result2.avif",
    alt: "Sale notification for $112.20",
  },
  {
    image: "/result3.avif",
    alt: "Sale notification for $97.00",
  },
  {
    image: "/result4.avif",
    alt: "Dashboard showing $122.50 earnings",
  },
  {
    image: "/result5.avif",
    alt: "Dashboard showing $78.50 earnings",
  },
  {
    image: "/result6.avif",
    alt: "Dashboard showing €54.01 revenue",
  },
  {
    image: "/result7.avif",
    alt: "Revenue analytics dashboard",
  },
  {
    image: "/result8.avif",
    alt: "Mobile notifications dashboard",
  },
];

export function ResultsSection({ siteSettings }: ResultsSectionProps) {
  const checkoutUrl =
    siteSettings?.checkoutUrl || process.env.NEXT_PUBLIC_CHECKOUT_URL;
  return (
    <section className="px-4 py-16 bg-black relative">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Some of Our Results... And They Can Be Yours Too!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-transparent rounded-2xl p-4 border relative border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
              <div className="aspect-video bg-transparent rounded-lg  overflow-hidden">
                <img
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-full rounded-xl object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
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
