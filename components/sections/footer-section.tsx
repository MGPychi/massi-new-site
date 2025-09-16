import { Mail } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Digital Product Academy
            </h3>
            <p className="text-sm text-gray-400">
              Helping entrepreneurs build profitable digital products since
              2020.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@digitalproductacademy.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Digital Product Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
