'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart } from 'lucide-react'

type Language = 'EN' | 'AR'

interface AboutProps {
  language: Language
}

export default function About({ language }: AboutProps) {
  const isArabic = language === 'AR'

  const highlights = [
    {
      icon: Target,
      title: isArabic ? 'رسالتنا' : 'Our Mission',
      description: isArabic
        ? 'تمكين الأفراد من خلال التكوين المبتكر، وتنمية المهارات العملية، وتوفير فرص هادفة تدعم النمو الشخصي والمهني.'
        : 'To empower individuals through innovative training, practical skills, and meaningful opportunities that support personal and professional growth.',
    },
    {
      icon: Lightbulb,
      title: isArabic ? 'رؤيتنا' : 'Our Vision',
      description: isArabic
        ? 'بناء جيل من الأفراد المهرة والواثقين والمبتكرين، القادرين على إحداث تغيير إيجابي في مجتمعاتهم وما وراءها.'
        : 'To build a generation of skilled, confident, and innovative individuals capable of creating positive change in their communities and beyond.',
    },
    {
      icon: Heart,
      title: isArabic ? 'قيمنا' : 'Our Values',
      description: isArabic
        ? 'التميز، والنزاهة، والابتكار، والشمول، والأثر الاجتماعي هي القيم التي نضعها في صميم كل ما نقوم به.'
        : 'Excellence, integrity, innovation, inclusion, and social impact are at the heart of everything we do.',
    },
  ]

  return (
    <section
      id="about"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] overflow-hidden"
    >

      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-0 w-72 h-72 bg-[#5a8861]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#193a5e]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[#193a5e]/10 border border-[#193a5e]/10 px-4 py-2 mb-5">
            <span className="text-sm font-medium text-[#193a5e]">
              {isArabic ? 'عن مركز رؤيا' : 'About ROYA'}
            </span>
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#193a5e]">
            {isArabic ? (
              <>
                تكوين يصنع
                <span className="block text-[#5a8861]">
                  أثرًا حقيقيًا.
                </span>
              </>
            ) : (
              <>
                Learning that creates
                <span className="block text-[#5a8861]">
                  meaningful impact.
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
            {isArabic
              ? 'مركز رؤيا للتدريب والاستثمار الاجتماعي مؤسسة تكوينية تهدف إلى تطوير المهارات، وتشجيع الابتكار، وخلق فرص حقيقية للأفراد والمجتمعات.'
              : 'ROYA Training & Social Investment Center is a professional training institution focused on developing skills, encouraging innovation, and creating opportunities for individuals and communities.'}
          </p>

        </motion.div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-9 border border-white shadow-sm hover:shadow-2xl transition-shadow duration-500"
              >

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#193a5e]/10 mb-7 group-hover:bg-[#193a5e] transition-colors duration-300">
                  <Icon
                    size={27}
                    className="text-[#193a5e] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#193a5e] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </motion.div>
            )
          })}

        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-xl md:text-2xl font-light text-[#193a5e]">
            {isArabic
              ? 'نؤمن بأن التدريب يصنع الفرق، والمعرفة تبني المستقبل.'
              : 'We believe training creates change, and knowledge builds the future.'}
          </p>
        </motion.div>

      </div>
    </section>
  )
}