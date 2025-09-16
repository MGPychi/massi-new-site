import { Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-3 sm:mb-4 font-semibold text-white text-base sm:text-lg">
              Digital Product Academy
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Helping entrepreneurs build profitable digital products since
              2020.
            </p>
          </div>
          <div>
            <h4 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">
              Legal
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 sm:mb-4 font-semibold text-white text-sm sm:text-base">
              Contact
            </h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="break-all">
                  support@digitalproductacademy.com
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 border-t border-slate-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 Digital Product Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
