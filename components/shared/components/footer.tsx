import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3d2b1f] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-black font-bold text-sm">JC</span>
              </div>
              <span className="text-xl font-semibold">Jcarmall</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for premium imported vehicles in Addis Ababa.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cars"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-gray-500">→</span> Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-gray-500">→</span> Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-gray-500">→</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-gray-500">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Piassa, Nudo building, AA, Office No. 407
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-0" />
                <a
                  href="tel:+251983188628"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +251 983188628
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-0" />
                <a
                  href="mailto:jcarmall@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  jcarmall@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Jcarmall. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
