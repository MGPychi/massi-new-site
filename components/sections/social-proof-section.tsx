import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export function SocialProofSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Left Testimonial - @facelesswealth.queen */}
          <Card className="bg-black relative rounded-2xl sm:rounded-3xl border border-gray-700/30 w-fit h-fit">
            <div
              className="absolute top-0 right-0 w-40 h-24 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(59,130,246,0.22) 0%, transparent 80%)",
              }}
            />
            <CardContent className="p-4 sm:p-6 relative z-10">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  @facelesswealth.queen
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Junice | Digital Products & Digital Marketing
                </p>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                "She started with me just a few days ago, and now she has over
                120 followers."
              </p>

              {/* Message Screenshot */}
              <div className="bg-black rounded-2xl sm:rounded-3xl p-1 sm:p-4 mb-3 sm:mb-4 flex items-center justify-center">
                <Image
                  src="/section-2-prof1.avif"
                  alt="Profile image of Junice"
                  width={400}
                  height={260}
                  className="rounded-2xl sm:rounded-3xl w-full h-auto"
                  objectFit="contain"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          {/* Right Testimonial - @_justcallmeangel_ */}
          <Card className="bg-black relative rounded-2xl sm:rounded-3xl border border-gray-700/30 w-fit h-fit">
            <div
              className="absolute top-0 right-0 w-40 h-24 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(59,130,246,0.22) 0%, transparent 80%)",
              }}
            />
            <CardContent className="p-4 sm:p-6 relative z-10">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  @_justcallmeangel_
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  digital marketing
                </p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Thank you so much for inspiring me to start this journey into
                faceless digital marketing! It's only been four days, and I'm
                already seeing real growth and potential! 😍"
              </p>

              {/* Message Screenshot */}
              <div className="bg-black rounded-2xl sm:rounded-3xl p-4 mb-4 flex items-center justify-center">
                <Image
                  src="/section-2-prof2.avif"
                  alt="Profile image of Angel"
                  width={400}
                  height={260}
                  className="rounded-2xl sm:rounded-3xl w-full h-auto"
                  objectFit="contain"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
