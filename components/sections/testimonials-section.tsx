import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Testimonial */}
          <Card className="bg-slate-800 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-white font-semibold">
                  @facelesswealth.queen
                </h3>
                <p className="text-gray-400 text-sm">
                  Junice | Digital Products & Digital Marketing
                </p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "She started with me just a few days ago, and now she has over
                120 followers."
              </p>

              {/* Message Screenshot */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm">
                      Hello! I just created my faceless account recently and I'm
                      very excited to start this journey, thank you for your
                      support 🙏
                    </p>
                    <div className="mt-2">
                      <span className="text-red-500">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Testimonial */}
          <Card className="bg-slate-800 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-white font-semibold">@_justcallmeangel_</h3>
                <p className="text-gray-400 text-sm">digital marketing</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Thank you so much for inspiring me to start this journey into
                faceless digital marketing! It's only been four days, and I'm
                already seeing real growth and potential! 😍"
              </p>

              {/* Message Screenshot */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm">
                      Thank you so much for inspiring me to start this journey
                      into faceless digital marketing! It's only been four days,
                      and I'm already seeing real growth and potential. 😍 I'm
                      excited to dive in, focusing on sharing valuable content
                      without needing to put myself in the spotlight. Thanks for
                      encouraging me to step out of my comfort zone. I can't
                      wait to see where this path will take me! ❤️
                    </p>
                    <div className="mt-2">
                      <span className="text-red-500">❤️</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                      NOV 12 AT 11:56
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            Get Access →
          </Button>
        </div>
      </div>
    </section>
  );
}
