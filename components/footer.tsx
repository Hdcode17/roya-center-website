'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#193a5e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#193a5e] font-bold text-xl">
                  R
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  ROYA
                </h3>

                <p className="text-white/60 text-xs">
                  Training & Social Investment Center
                </p>
              </div>
            </div>

            <p className="text-white/70 font-light text-sm leading-7 max-w-xs">
              Empowering individuals through quality training,
              professional development, and social investment.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-base">
              Quick Links
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  About ROYA
                </Link>
              </li>

              <li>
                <Link
                  href="#programs"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Training Fields
                </Link>
              </li>

              <li>
                <Link
                  href="#trainers"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Our Trainers
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-base">
              Contact
            </h4>

            <ul className="space-y-5">

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#5a8861] mt-1 shrink-0"
                />

                <span
                  className="text-white/70 text-sm leading-6"
                  dir="rtl"
                >
                  دشرة الخونية، مقابل مدرسة ريكي مصطفى،
                  قرب وكالة ونوقي والطبيب بن مسعود
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#5a8861] shrink-0"
                />

                <a
                  href="tel:0661343492"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  0661 34 34 92
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[#5a8861] mt-1 shrink-0"
                />

                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:roya.tr.invst@gmail.com"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    roya.tr.invst@gmail.com
                  </a>

                  <a
                    href="mailto:ro.tr.invst@gmail.com"
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    ro.tr.invst@gmail.com
                  </a>
                </div>
              </li>

            </ul>
          </div>


          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-6 text-base">
              Follow ROYA
            </h4>

            <p className="text-white/60 text-sm leading-6 mb-6">
              Follow us on social media to stay updated
              with our latest training programs and activities.
            </p>

            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/RoyaCentr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#193a5e] hover:border-white transition-all duration-300"
              >
                <span className="font-bold text-base">
                  f
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/centerroya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#193a5e] hover:border-white transition-all duration-300"
              >
                <span className="font-semibold text-xs">
                  IG
                </span>
              </a>

            </div>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white/40 font-light text-sm text-center md:text-left">
            © {new Date().getFullYear()} ROYA Training & Social Investment Center.
            All rights reserved.
          </p>

          <p
            className="text-white/40 font-light text-sm"
            dir="rtl"
          >
            نبني المستقبل... ونصنع الأثر.
          </p>

        </div>

      </div>
    </footer>
  )
}