import { useEffect, useState } from "react";
import { getFeaturedTestimonials } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity-image";
import { Star } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  content: string;
  rating: number;
  image?: any;
  earnings?: string;
}

export function SanityTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getFeaturedTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  if (!testimonials.length) {
    return <div className="text-center py-8">No testimonials found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial._id}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-4">
            {testimonial.image && (
              <img
                src={urlFor(testimonial.image).width(50).height(50).url()}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{testimonial.content}</p>
          {testimonial.earnings && (
            <p className="text-green-600 font-semibold">
              Earned: {testimonial.earnings}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
