import {
  getSiteSettings,
  getFeaturedTestimonials,
  getBenefits,
} from "@/lib/sanity-queries";

export default async function SanityTestPage() {
  // This will only work once you've set up your actual Sanity project
  let siteSettings = null;
  let testimonials = [];
  let benefits = [];

  try {
    siteSettings = await getSiteSettings();
    testimonials = await getFeaturedTestimonials();
    benefits = await getBenefits();
  } catch (error) {
    console.error("Sanity data fetch error:", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sanity CMS Test Page
        </h1>

        {!siteSettings ? (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-8">
            <strong>Setup Required:</strong> Please configure your Sanity
            project credentials in .env.local to see content here.
            <br />
            See SANITY_SETUP.md for detailed instructions.
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Site Settings</h2>
              <p>
                <strong>Title:</strong> {siteSettings.title}
              </p>
              <p>
                <strong>Main Headline:</strong> {siteSettings.mainHeadline}
              </p>
              <p>
                <strong>Trust Badge:</strong> {siteSettings.trustBadgeText}
              </p>
            </div>

            {testimonials.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Featured Testimonials
                </h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial: any) => (
                    <div
                      key={testimonial._id}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <p className="text-gray-700">"{testimonial.content}"</p>
                      <p className="text-sm text-gray-500 mt-2">
                        — {testimonial.name}
                      </p>
                      {testimonial.earnings && (
                        <p className="text-green-600 font-semibold">
                          Earnings: {testimonial.earnings}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {benefits.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Course Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit: any) => (
                    <div key={benefit._id} className="p-4 border rounded-lg">
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
