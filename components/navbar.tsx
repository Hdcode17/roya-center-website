'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'EN' | 'AR'

interface NavbarProps {
  language: Language
  setLanguage: (language: Language) => void
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isArabic = language === 'AR'

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    {
      href: '#home',
      en: 'Home',
      ar: 'الرئيسية',
    },
    {
      href: '#about',
      en: 'About',
      ar: 'عن رؤيا',
    },
    {
      href: '#programs',
      en: 'Programs',
      ar: 'المجالات التدريبية',
    },
    {
      href: '#contact',
      en: 'Contact',
      ar: 'اتصل بنا',
    },
  ]

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="ROYA Training & Social Investment Center"
                width={65}
                height={65}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[#1a1a1a] font-medium transition-all duration-300 hover:text-[#193a5e] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5a8861] after:transition-all after:duration-300 hover:after:w-full"
              >
                {isArabic ? item.ar : item.en}
              </Link>
            ))}

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Language Toggle */}
            <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#193a5e] border border-[#193a5e] rounded px-3 py-2">

              <button
                onClick={() => setLanguage('EN')}
                className={`transition-colors ${
                  language === 'EN'
                    ? 'text-[#193a5e] font-semibold'
                    : 'text-[#6b7280]'
                }`}
              >
                EN
              </button>

              <span className="text-[#e5e7eb]">|</span>

              <button
                onClick={() => setLanguage('AR')}
                className={`transition-colors ${
                  language === 'AR'
                    ? 'text-[#193a5e] font-semibold'
                    : 'text-[#6b7280]'
                }`}
              >
                AR
              </button>

            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-[#193a5e] hover:text-[#5a8861] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-[#e5e7eb] animate-in fade-in duration-300">

            <div className="flex flex-col gap-4 mt-4">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#1a1a1a] font-medium hover:text-[#193a5e] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {isArabic ? item.ar : item.en}
                </Link>
              ))}

              {/* Mobile Language */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#e5e7eb]">

                <button
                  onClick={() => setLanguage('EN')}
                  className={`text-sm font-medium ${
                    language === 'EN'
                      ? 'text-[#193a5e] font-semibold'
                      : 'text-[#6b7280]'
                  }`}
                >
                  EN
                </button>

                <span className="text-[#e5e7eb]">|</span>

                <button
                  onClick={() => setLanguage('AR')}
                  className={`text-sm font-medium ${
                    language === 'AR'
                      ? 'text-[#193a5e] font-semibold'
                      : 'text-[#6b7280]'
                  }`}
                >
                  AR
                </button>

              </div>

            </div>
          </div>
        )}

      </div>
    </motion.nav>
  )
}