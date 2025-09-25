import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

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
                href="https://www.instagram.com/hm.facelessmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61563378608319"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.threads.net/@her.facelessmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Threads"
              >
                <Image
                  src="/threads.png"
                  alt="Threads"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
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
