'use client'

import { motion } from 'framer-motion'
import { Laptop, Globe, Briefcase, Handshake } from 'lucide-react'

type Language = 'EN' | 'AR'

interface HeroProps {
  language: Language
}

export default function Hero({ language }: HeroProps) {
  const isArabic = language === 'AR'

  return (
    <section
      id="home"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef5f0] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 lg:gap-10"
          >

            <div>

              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-[#193a5e]/10 border border-[#193a5e]/10 px-4 py-2 mb-6">
                <span className="text-sm font-medium text-[#193a5e]">
                  {isArabic
                    ? 'مركز رؤيا للتدريب والاستثمار الاجتماعي'
                    : 'ROYA Training & Social Investment Center'}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#193a5e]">
                {isArabic ? (
                  <>
                    نمكّن
                    <br />
                    مستقبلك.
                  </>
                ) : (
                  <>
                    Empowering
                    <br />
                    Your Future.
                  </>
                )}
              </h1>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#5a8861]">
                {isArabic ? 'مع رؤيا.' : 'With ROYA.'}
              </h2>

            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-xl">
              {isArabic
                ? 'تكوين مهني في التكنولوجيا واللغات وريادة الأعمال والاستثمار الاجتماعي، لإعداد المتعلمين للنجاح الأكاديمي والمهني.'
                : 'Professional training in technology, languages, entrepreneurship, and social investment to prepare learners for academic and career success.'}
            </p>

            {/* CTA */}
            <div className="flex pt-4">
              <button className="btn-primary px-8 py-3">
                {isArabic ? 'عن رؤيا' : 'About ROYA'}
              </button>
            </div>

            {/* Arabic / English Headline */}
            <div className="pt-8 border-t border-[#e5e7eb]">
              <p className="text-lg text-[#193a5e] font-light">
                {isArabic
                  ? 'نبني المستقبل... ونصنع الأثر.'
                  : 'Building the future... Creating impact.'}
              </p>
            </div>

          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative h-96 lg:h-full min-h-96"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-[#193a5e]/10 via-[#5a8861]/10 to-[#e8d7c8]/20 rounded-2xl" />

            <div className="absolute top-0 right-0 w-72 h-72 bg-[#5a8861]/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#193a5e]/10 rounded-full blur-3xl" />

            <div className="relative h-full flex items-center justify-center p-8">

              <div className="grid grid-cols-2 gap-6 w-full">

                {/* Technology */}
                <div className="bg-[#f6f8fa] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer">

                  <Laptop className="w-12 h-12 text-[#193a5e]" />

                  <h3 className="text-xl font-bold text-[#193a5e]">
                    {isArabic ? 'التكنولوجيا' : 'Technology'}
                  </h3>

                  <p className="text-sm text-center text-gray-500">
                    {isArabic
                      ? 'البرمجة والمهارات الرقمية'
                      : 'Programming & Digital Skills'}
                  </p>

                </div>

                {/* Languages */}
                <div className="bg-[#5a8861] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 text-white hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer">

                  <Globe className="w-12 h-12 text-white" />

                  <h3 className="text-xl font-bold">
                    {isArabic ? 'اللغات' : 'Languages'}
                  </h3>

                  <p className="text-sm text-center opacity-90">
                    {isArabic
                      ? 'الإنجليزية والتواصل'
                      : 'English & Communication'}
                  </p>

                </div>

                {/* Entrepreneurship */}
                <div className="bg-white border-2 border-[#193a5e] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer">

                  <Briefcase className="w-12 h-12 text-[#193a5e]" />

                  <h3 className="text-xl font-bold text-[#193a5e]">
                    {isArabic ? 'ريادة الأعمال' : 'Entrepreneurship'}
                  </h3>

                  <p className="text-sm text-center text-gray-500">
                    {isArabic
                      ? 'الابتكار والأعمال'
                      : 'Innovation & Business'}
                  </p>

                </div>

                {/* Social Investment */}
                <div className="bg-[#f6f8fa] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer">

                  <Handshake className="w-12 h-12 text-[#5a8861]" />

                  <h3 className="text-xl font-bold text-[#5a8861]">
                    {isArabic
                      ? 'الاستثمار الاجتماعي'
                      : 'Social Investment'}
                  </h3>

                  <p className="text-sm text-center text-gray-500">
                    {isArabic
                      ? 'تنمية المجتمع'
                      : 'Community Development'}
                  </p>

                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}