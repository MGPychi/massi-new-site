import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function SneakPeekSection() {
  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-5xl">
        {/* Sneak Peek Video Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full mb-8">
            <span className="text-gray-400 text-sm">👀 Sneak</span>
          </div>

          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            Want a <span className="text-orange-500">sneak</span> peek preview?
          </h2>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 max-w-4xl mx-auto">
            <img
              src="/video-player-interface-showing-course-preview-with.jpg"
              alt="Course Preview Video"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-blue-600 rounded-full p-6 hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
            {/* Video controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span className="text-sm">2:12</span>
                </div>
                <div className="flex-1 bg-blue-600 h-1 rounded-full"></div>
                <div className="flex items-center gap-2 text-xs">
                  <span>🔊</span>
                  <span>⚙️</span>
                  <span>📺</span>
                  <span className="text-blue-400">wistia</span>
                </div>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold mb-4"
            asChild
          >
            <a
              href={process.env.NEXT_PUBLIC_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Myself in This → I'm Ready to Join DPA →
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
