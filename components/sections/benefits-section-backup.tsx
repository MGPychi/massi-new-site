"use client";
export const BenefitsSection = () => {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            What's Included
          </h2>
          <p className="text-lg text-gray-300">
            Here's what you will find <span className="text-orange-400 font-semibold">inside this course...</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Build the Foundation Section */}
          <div className="flex flex-col">
            {/* Visual Mockup */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-80 h-80 mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center">
                  <div className="w-full h-full bg-gray-100 rounded-2xl p-4 relative">
                    {/* Mockup documents */}
                    <div className="absolute top-2 left-2 bg-white rounded shadow-sm w-24 h-32 transform -rotate-12 border">
                      <div className="p-2 text-xs">
                        <div className="bg-gray-200 h-1 mb-1 rounded"></div>
                        <div className="bg-gray-200 h-1 mb-1 rounded w-3/4"></div>
                        <div className="bg-gray-200 h-1 mb-1 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-2 bg-white rounded shadow-sm w-24 h-32 transform rotate-6 border">
                      <div className="p-2 text-xs">
                        <div className="bg-blue-200 h-1 mb-1 rounded"></div>
                        <div className="bg-blue-200 h-1 mb-1 rounded w-3/4"></div>
                        <div className="bg-blue-200 h-1 mb-1 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-sm w-28 h-36 border">
                      <div className="p-2 text-xs">
                        <div className="bg-green-200 h-1 mb-1 rounded"></div>
                        <div className="bg-green-200 h-1 mb-1 rounded w-3/4"></div>
                        <div className="bg-green-200 h-1 mb-1 rounded w-1/2"></div>
                        <div className="bg-blue-500 rounded-full w-6 h-6 mx-auto mt-2 flex items-center justify-center">
                          <span className="text-white text-xs">▶</span>
                        </div>
                      </div>
                    </div>
                    {/* Phone mockup */}
                    <div className="absolute bottom-2 right-2 bg-black rounded-lg w-12 h-20 p-1">
                      <div className="bg-white rounded h-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Build the Foundation Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Build the Foundation <span className="text-sm font-normal text-gray-400">($197 Value)</span>
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>What is a Digital Product?</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>What is PLR/MRR? And How to Make Money Reselling Them</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Top Niches & Tools to Start Selling Digital Products. NO More confusion</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Step-by-step: Create a high-converting store and start driving traffic</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>And More...</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Grow Fast Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
          {/* Grow Fast Content */}
          <div className="flex flex-col justify-center lg:order-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              Grow Fast — O to 10K Followers <span className="text-sm font-normal text-gray-400">($397 Value)</span>
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>The Most Important Thing In This Phase</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>The Key Foundations For This Phase</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Reveal my secrets and The exact pro tips I used to build 10,000 followers audience</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Training The Algorithm</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Structure Your Bio & Highlights for Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>When and How Many Times You Should Post</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>How to find viral content ideas & grow</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>How to Convert More Viewers Into Followers</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Content Type</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>And More...</span>
              </li>
            </ul>
          </div>

          {/* Grow Fast Visual Mockup */}
          <div className="flex flex-col lg:order-1">
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-80 h-80 mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center">
                  <div className="w-full h-full bg-gray-100 rounded-2xl p-4 relative">
                    {/* Social media mockups */}
                    <div className="absolute top-2 left-2 bg-white rounded shadow-sm w-24 h-32 transform -rotate-12 border">
                      <div className="p-2 text-xs">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                          <div className="bg-gray-200 h-1 flex-1 rounded"></div>
                        </div>
                        <div className="bg-blue-200 h-8 mb-1 rounded"></div>
                        <div className="bg-gray-200 h-1 mb-1 rounded"></div>
                        <div className="bg-gray-200 h-1 mb-1 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-2 bg-white rounded shadow-sm w-24 h-32 transform rotate-6 border">
                      <div className="p-2 text-xs">
                        <div className="bg-green-200 h-6 mb-2 rounded"></div>
                        <div className="grid grid-cols-3 gap-1 mb-2">
                          <div className="bg-blue-200 h-3 rounded"></div>
                          <div className="bg-blue-200 h-3 rounded"></div>
                          <div className="bg-blue-200 h-3 rounded"></div>
                        </div>
                        <div className="bg-gray-200 h-1 mb-1 rounded"></div>
                        <div className="bg-gray-200 h-1 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-sm w-28 h-36 border">
                      <div className="p-2 text-xs">
                        <div className="bg-purple-200 h-8 mb-2 rounded"></div>
                        <div className="space-y-1">
                          <div className="bg-gray-200 h-1 rounded"></div>
                          <div className="bg-gray-200 h-1 rounded w-4/5"></div>
                          <div className="bg-gray-200 h-1 rounded w-3/5"></div>
                        </div>
                        <div className="bg-blue-500 rounded-full w-6 h-6 mx-auto mt-2 flex items-center justify-center">
                          <span className="text-white text-xs">▶</span>
                        </div>
                      </div>
                    </div>
                    {/* Phone mockup with analytics */}
                    <div className="absolute bottom-2 right-2 bg-black rounded-lg w-12 h-20 p-1">
                      <div className="bg-white rounded h-full w-full p-1">
                        <div className="bg-red-200 h-2 rounded mb-1"></div>
                        <div className="bg-gray-200 h-1 rounded mb-1"></div>
                        <div className="bg-gray-200 h-1 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Machine Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
          {/* Sales Machine Visual Mockup */}
          <div className="flex flex-col">
            <div className="relative mb-8">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-80 h-80 mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center">
                  <div className="w-full h-full bg-gray-100 rounded-2xl p-4 relative">
                    {/* Business/Analytics mockups */}
                    <div className="absolute top-2 left-2 bg-white rounded shadow-sm w-24 h-32 transform -rotate-12 border">
                      <div className="p-2 text-xs">
                        <div className="bg-blue-200 h-4 mb-2 rounded"></div>
                        <div className="space-y-1 mb-2">
                          <div className="bg-gray-200 h-1 rounded"></div>
                          <div className="bg-gray-200 h-1 rounded w-3/4"></div>
                        </div>
                        <div className="bg-green-200 h-6 rounded"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-2 bg-white rounded shadow-sm w-24 h-32 transform rotate-6 border">
                      <div className="p-2 text-xs">
                        <div className="bg-orange-200 h-3 mb-2 rounded"></div>
                        <div className="flex space-x-1 mb-2">
                          <div className="bg-blue-300 h-6 w-2 rounded"></div>
                          <div className="bg-blue-400 h-8 w-2 rounded"></div>
                          <div className="bg-blue-500 h-4 w-2 rounded"></div>
                        </div>
                        <div className="bg-gray-200 h-1 rounded w-full"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded shadow-sm w-28 h-36 border">
                      <div className="p-2 text-xs">
                        <div className="bg-purple-200 h-6 mb-2 rounded"></div>
                        <div className="grid grid-cols-2 gap-1 mb-2">
                          <div className="bg-blue-200 h-4 rounded"></div>
                          <div className="bg-green-200 h-4 rounded"></div>
                        </div>
                        <div className="bg-yellow-200 h-3 mb-1 rounded"></div>
                        <div className="bg-blue-500 rounded-full w-6 h-6 mx-auto flex items-center justify-center">
                          <span className="text-white text-xs">▶</span>
                        </div>
                      </div>
                    </div>
                    {/* Phone with automation interface */}
                    <div className="absolute bottom-2 right-2 bg-black rounded-lg w-12 h-20 p-1">
                      <div className="bg-white rounded h-full w-full p-1">
                        <div className="bg-red-400 h-2 rounded mb-1"></div>
                        <div className="bg-orange-300 h-1 rounded mb-1"></div>
                        <div className="bg-green-300 h-1 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Sales Machine Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Sales Machine (Automate Your Business) <span className="text-sm font-normal text-gray-400">($397 Value)</span>
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Building an Ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>How I Structure Content to Build Revenue</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>5 Steps You Need to Know</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Setup Your Account</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Caption (how to make your caption better)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Part 2: Turn your store into a money printer</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Email (Newsletters/Marketing)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>Marychat (Automate Your Business)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>And More...</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-lg">
            JOIN DPA
          </button>
        </div>
      </div>
    </div>
  );
};
