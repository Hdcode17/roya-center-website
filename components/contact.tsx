'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Share2,
} from 'lucide-react'

type Language = 'EN' | 'AR'

interface ContactProps {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const isArabic = language === 'AR'

  const contactInfo = [
    {
      icon: Phone,
      label: isArabic ? 'الهاتف' : 'Phone',
      value: '0661 34 34 92',
      href: 'tel:+213661343492',
    },
    {
      icon: Mail,
      label: isArabic ? 'البريد الإلكتروني' : 'Email',
      value: 'roya.tr.invst@gmail.com',
      href: 'mailto:roya.tr.invst@gmail.com',
      secondary: 'ro.tr.invst@gmail.com',
      secondaryHref: 'mailto:ro.tr.invst@gmail.com',
    },
    {
      icon: MapPin,
      label: isArabic ? 'الموقع' : 'Location',
      value: isArabic
        ? 'دشرة الخونية، مقابل مدرسة ريكي مصطفى، بالقرب من وكالة ونوقي والطبيب بن مسعود.'
        : 'Dachret El Khounia, opposite Riki Mostafa School, near Wanoqi Agency and Dr. Ben Massoud.',
    },
  ]

  const socialLinks = [
    {
      icon: Share2,
      label: 'Facebook',
      href: 'https://www.facebook.com/RoyaCentr',
    },
    {
      icon: Share2,
      label: 'Instagram',
      href: 'https://www.instagram.com/centerroya?igsh=MXYya3d0bG16MDB3cA==',
    },
  ]

  return (
    <section
      id="contact"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-80 h-80 bg-[#5a8861]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-[#193a5e]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-[#193a5e]/10 border border-[#193a5e]/10 px-4 py-2 mb-5">
            <span className="text-sm font-medium text-[#193a5e]">
              {isArabic ? 'تواصل مع رؤيا' : 'Contact ROYA'}
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#193a5e]">
            {isArabic ? (
              <>
                لنبنِ
                <span className="block text-[#5a8861]">
                  مستقبلًا أفضل معًا.
                </span>
              </>
            ) : (
              <>
                Let&apos;s build a
                <span className="block text-[#5a8861]">
                  better future together.
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
            {isArabic
              ? 'نرحب دائمًا بالتواصل مع المتعلمين والمهنيين ورواد الأعمال والمؤسسات المهتمة بالتكوين والتطوير والاستثمار الاجتماعي.'
              : 'We are always open to connecting with learners, professionals, entrepreneurs, and organizations interested in training and social development.'}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -7 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#193a5e]/10 mb-7">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="text-[#193a5e]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#193a5e] mb-3">
                  {item.label}
                </h3>

                {/* Main Information */}
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-[#5a8861] transition-colors leading-7 break-words"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600 leading-7">
                    {item.value}
                  </p>
                )}

                {/* Second Email */}
                {item.secondary && (
                  <a
                    href={item.secondaryHref}
                    className="block mt-2 text-gray-600 hover:text-[#5a8861] transition-colors leading-7 break-words"
                  >
                    {item.secondary}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-sm font-medium text-gray-500 mb-5">
            {isArabic ? 'تابعوا رؤيا' : 'Follow ROYA'}
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#193a5e] hover:bg-[#193a5e] hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <Icon size={21} />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#193a5e] px-8 py-12 md:px-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            {isArabic
              ? 'تكوين. ابتكار. أثر.'
              : 'Training. Innovation. Impact.'}
          </h3>

          <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-7">
            {isArabic
              ? 'يلتزم مركز رؤيا بتقديم تجارب تعليمية هادفة وفرص تساهم في بناء مستقبل أقوى وأكثر استدامة.'
              : 'ROYA is committed to creating meaningful learning experiences and opportunities that contribute to a stronger future.'}
          </p>

          <p className="mt-6 text-lg text-white/90 font-light">
            {isArabic
              ? 'معًا نبني المعرفة ونصنع الأثر.'
              : 'Together, we build knowledge and create impact.'}
          </p>
        </motion.div>

      </div>
    </section>
  )
}