export const CourseContentComponent = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          What's Included
        </h1>
        <p className="text-base sm:text-lg">
          Here's what you will find{" "}
          <span className="text-orange-400">inside this course...</span>
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section 1: Build the Foundation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            <div className="w-full max-w-80 h-60 sm:h-80 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Build the Foundation ($197 Value)
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-lg">
              <li>• What is a Digital Product?</li>
              <li>• What Is PLR/MRR? And How to Make Money Reselling Them</li>
              <li>
                • Top Niches & Tools to Start Selling Digital Products. NO More
                confusion
              </li>
              <li>
                • Step-by-step: Create a high-converting store and start driving
                traffic
              </li>
              <li>• And More...</li>
            </ul>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center">
          <div className="w-px h-8 sm:h-16 bg-white"></div>
        </div>

        {/* Section 2: Grow Fast */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pr-8 order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Grow Fast — 0 to 10K Followers ($397 Value)
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-lg">
              <li>• The Most Important Thing in This Phase</li>
              <li>• The Key Foundations For This Phase</li>
              <li>
                • Reveal my secrets and The exact pro tips I used to build
                10,000 followers audience
              </li>
              <li>• Training The Algorithm</li>
              <li>• Structure Your Bio & Highlights for Instagram</li>
              <li>• When and How Many Times You Should Post</li>
              <li>• How to find viral content ideas & grow</li>
              <li>• How to Convert More Viewers Into Followers</li>
              <li>• Content Type</li>
              <li>• And More...</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 order-2">
            <div className="w-full max-w-80 h-60 sm:h-80 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center">
          <div className="w-px h-8 sm:h-16 bg-gray-600"></div>
        </div>

        {/* Section 3: Sales Machine */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
            <div className="w-full max-w-80 h-60 sm:h-80 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Sales Machine (Automate Your Business) ($397 Value)
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-lg">
              <li>• Building an Ecosystem</li>
              <li>• How I Structure Content to Build Revenue</li>
              <li>• 5 Steps You Need to Know</li>
              <li>• Setup Your Account</li>
              <li>• Caption (how to make your caption better)</li>
              <li>• Part 2: Turn your store into a money printer</li>
              <li>• Email (Newsletters/Marketing)</li>
              <li>• Manychat (Automate Your Business)</li>
              <li>• And More...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentComponent;
