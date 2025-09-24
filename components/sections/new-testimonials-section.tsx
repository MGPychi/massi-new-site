import { BadgeSection } from "../ui/badge-section";
import { Testimonial } from "@/types/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

interface StaticTestimonial {
  name: string;
  role: string;
  content: string;
  hasScreenshot: boolean;
  screenshotImage: string;
}

export const staticTestimonials: StaticTestimonial[] = [
  {
    name: "@lorita",
    role: "Digital Products & IG Growth",
    content:
      "I absolutely love the ultimate digital course! The Content is well-structured and packed with practical insights that will help me kickstart my digital marketing journey.",
    hasScreenshot: true,
    screenshotImage: "/student1.avif",
  },
  {
    name: "@lorii",
    role: "digital product",
    content:
      "Like clockwork—people who've seen no sales or growth for weeks are finally getting their first sales just one day after joining. It's happening again and again.",
    hasScreenshot: true,
    screenshotImage: "/student2.avif",
  },
  {
    name: "@fitnotion",
    role: "content creator",
    content:
      "She went weeks without a single sale. She knew something was off—but couldn't tell what. Then, just one day after going through the 'Ultimate Faceless Marketing' module… the sales started rolling in daily. Here's what she shared…",
    hasScreenshot: true,
    screenshotImage: "/student3.avif",
  },
  {
    name: "@liona_",
    role: "digital marketing",
    content:
      "She made 9 sales in just one week. And for most of our students, once they spend a short time inside the DPA, sales stop being the main concern—they start thinking bigger, like building a real business.",
    hasScreenshot: true,
    screenshotImage: "/student4.avif",
  },
  {
    name: "@digitalgrowth",
    role: "digital product",
    content:
      "Inside the DPA, you're one of us. We're always here to keep you motivated and give you the insights you need to grow and improve your business.",
    hasScreenshot: true,
    screenshotImage: "/student5.avif",
  },
  {
    name: "@inenn_",
    role: "content creator",
    content:
      "Just a week after applying what she learned in the DPA course, she started seeing fast results—growing from 0 to 300 followers. ( the fastest and easiest way to build your audience )",
    hasScreenshot: true,
    screenshotImage: "/student6.avif",
  },
  {
    name: "And More...",
    role: "",
    content:
      "Hundreds of students are getting amazing results with the Digital Product Academy. Join them today!",
    hasScreenshot: true,
    screenshotImage: "/student7.avif",
  },
];

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  // Use dynamic testimonials if available, otherwise use static ones
  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : staticTestimonials;
  const isDynamic = testimonials && testimonials.length > 0;

  return (
    <section className="px-4 py-16 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <BadgeSection>Testimonials</BadgeSection>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            100s of students LOVE this academy!
          </h2>

          <p className="text-gray-300 text-lg">
            Here's what a few have to say... 👇👇👇
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="mb-4">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {isDynamic
                    ? (testimonial as Testimonial).earnings || "Student"
                    : (testimonial as StaticTestimonial).role}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.content}
                </p>

                {/* Handle both static and dynamic image structures */}
                {((isDynamic && (testimonial as Testimonial).image) ||
                  (!isDynamic &&
                    (testimonial as StaticTestimonial).hasScreenshot)) && (
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-gray-600/40">
                    <div className="text-xs text-gray-400 mb-2">
                      Screenshot:
                    </div>
                    <div className="rounded overflow-hidden">
                      <Image
                        src={
                          isDynamic
                            ? urlFor((testimonial as Testimonial).image!)
                                .width(400)
                                .height(300)
                                .url()
                            : (testimonial as StaticTestimonial).screenshotImage
                        }
                        alt={`Screenshot from ${testimonial.name}`}
                        width={400}
                        height={300}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
