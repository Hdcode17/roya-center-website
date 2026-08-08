'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Languages,
  Zap,
  Briefcase,
  TreePine,
  Lightbulb,
} from 'lucide-react'

type Language = 'EN' | 'AR'

interface TrainingFieldsProps {
  language: Language
}

export default function TrainingFields({
  language,
}: TrainingFieldsProps) {
  const isArabic = language === 'AR'

  const fields = [
    {
      icon: Code,
      title: isArabic ? 'التكنولوجيا' : 'Technology',
      description: isArabic
        ? 'البرمجة، وعلوم الحاسوب، والذكاء الاصطناعي، والمهارات الرقمية.'
        : 'Programming, computer science, artificial intelligence, and digital skills.',
      iconColor: 'text-[#193a5e]',
    },
    {
      icon: Languages,
      title: isArabic ? 'اللغات' : 'Languages',
      description: isArabic
        ? 'تعلم اللغات ومهارات التواصل من أجل النمو الأكاديمي والمهني.'
        : 'Language learning and communication skills for academic and professional growth.',
      iconColor: 'text-[#5a8861]',
    },
    {
      icon: Zap,
      title: isArabic ? 'ريادة الأعمال' : 'Entrepreneurship',
      description: isArabic
        ? 'الابتكار، وتطوير الأعمال، وريادة الأعمال، وإنشاء المشاريع.'
        : 'Innovation, business development, entrepreneurship, and project creation.',
      iconColor: 'text-[#193a5e]',
    },
    {
      icon: Briefcase,
      title: isArabic ? 'المهارات المهنية' : 'Professional Skills',
      description: isArabic
        ? 'القيادة، والتواصل، والإدارة، والمهارات الأساسية في بيئة العمل.'
        : 'Leadership, communication, management, and essential workplace skills.',
      iconColor: 'text-[#5a8861]',
    },
    {
      icon: Lightbulb,
      title: isArabic ? 'الابتكار والذكاء الاصطناعي' : 'Innovation & AI',
      description: isArabic
        ? 'استكشاف التقنيات الناشئة، والذكاء الاصطناعي، والحلول الإبداعية.'
        : 'Exploring emerging technologies, artificial intelligence, and creative solutions.',
      iconColor: 'text-[#193a5e]',
    },
    {
      icon: TreePine,
      title: isArabic ? 'الاستثمار الاجتماعي' : 'Social Investment',
      description: isArabic
        ? 'تنمية المجتمع، والمبادرات الاجتماعية، وإحداث أثر إيجابي مستدام.'
        : 'Community development, social initiatives, and sustainable positive impact.',
      iconColor: 'text-[#5a8861]',
    },
  ]

  return (
    <section
      id="programs"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >

      {/* Background Decoration */}
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
        className="absolute top-10 right-0 w-80 h-80 bg-[#5a8861]/10 rounded-full blur-3xl"
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

          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-[#193a5e]/10 border border-[#193a5e]/10 px-4 py-2 mb-5">
            <span className="text-sm font-medium text-[#193a5e]">
              {isArabic ? 'ماذا نقدم' : 'What We Offer'}
            </span>
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#193a5e]">
            {isArabic ? (
              <>
                مجالات
                <span className="block text-[#5a8861]">
                  التطوير
                </span>
              </>
            ) : (
              <>
                Areas of
                <span className="block text-[#5a8861]">
                  Development
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
            {isArabic
              ? 'تم تصميم مجالاتنا التدريبية لتطوير المهارات العملية، وتشجيع الابتكار، وإعداد الأفراد لمواكبة عالم مهني متغير.'
              : 'Our training areas are designed to develop practical skills, encourage innovation, and prepare individuals for a changing professional world.'}
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {fields.map((field, index) => {
            const Icon = field.icon

            return (
              <motion.div
                key={field.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-[#f8fafc]/90 backdrop-blur-md rounded-3xl p-8 min-h-[260px] border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#5a8861]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-7 group-hover:scale-105 transition-transform duration-300">
                  <Icon
                    size={28}
                    strokeWidth={1.7}
                    className={`${field.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-[#193a5e] mb-4">
                  {field.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 leading-7">
                  {field.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#193a5e] to-[#5a8861] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              </motion.div>
            )
          })}

        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-xl font-light text-[#193a5e]">
            {isArabic
              ? 'نطوّر المهارات، نُلهم الابتكار، ونصنع الفرص.'
              : 'We develop skills, inspire innovation, and create opportunities.'}
          </p>
        </motion.div>

      </div>
    </section>
  )
}