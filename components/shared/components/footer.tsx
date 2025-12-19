import Link from "next/link";
import { MapPin, LucidePhone, MailIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-linear-to-r from-yellow-950 to-zinc-900 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="JCARMALL Logo"
                width={48}
                height={48}
                className="object-contain size-8"
              />
              <span className="text-2xl font-bold text-primary">JCARMALL</span>
            </Link>
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
              <Link href="#" className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Piassa, Nudo building, AA, Office No. 407
                </span>
              </Link>
              <li className="flex items-center gap-3">
                <Link
                  href="tel:+251983188628"
                  className="flex items-start gap-3"
                >
                  <LucidePhone className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">+251 983188628</span>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Link
                  href="mailto:jcarmall@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm flex gap-3"
                >
                  <MailIcon className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    jcarmall@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
