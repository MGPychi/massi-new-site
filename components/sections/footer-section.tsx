import { Instagram, Facebook } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-black px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">DPA</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted academy in selling digital product and build audience
              organically.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Threads"
              >
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.526v-.017C1.5 5.789 5.789 1.5 12.526 1.5h.948C20.211 1.5 24.5 5.789 24.5 12.526v.017c0 3.06-.85 5.914-2.595 8.465-1.85 2.304-4.603 3.485-8.184 3.509h-.535zm0-21h-.007C7.005 3.024 3.5 6.529 3.5 12.509v.017c0 2.688.746 5.229 2.281 7.348 1.536 2.119 3.781 3.126 6.879 3.126h.535c3.098 0 5.343-1.007 6.879-3.126C21.609 17.755 22.5 15.214 22.5 12.526v-.017C22.5 6.529 18.995 3.024 12.979 3.024h-.793z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Pages */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Pages</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 HM Faceless Marketing. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            contact: hmfaceless@hersfaceless.com
          </p>
        </div>
      </div>
    </footer>
  );
}
