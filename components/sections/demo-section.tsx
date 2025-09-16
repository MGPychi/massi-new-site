import { Button } from "@/components/ui/button";

export function ResultsSection() {
  const results = [
    {
      image: "/placeholder.jpg",
      alt: "Dashboard showing €277.13 revenue",
    },
    {
      image: "/placeholder.jpg",
      alt: "Sale notification for $112.20",
    },
    {
      image: "/placeholder.jpg",
      alt: "Sale notification for $97.00",
    },
    {
      image: "/placeholder.jpg",
      alt: "Dashboard showing $122.50 earnings",
    },
    {
      image: "/placeholder.jpg",
      alt: "Dashboard showing $78.50 earnings",
    },
    {
      image: "/placeholder.jpg",
      alt: "Dashboard showing €54.01 revenue",
    },
    {
      image: "/placeholder.jpg",
      alt: "Revenue analytics dashboard",
    },
    {
      image: "/placeholder.jpg",
      alt: "Mobile notifications dashboard",
    },
  ];

  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Some of Our Results... And They Can Be Yours Too!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl p-4 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={result.image}
                  alt={result.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold"
          >
            Get Access →
          </Button>
        </div>
      </div>
    </section>
  );
}
