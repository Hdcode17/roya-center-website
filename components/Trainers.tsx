'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Language = 'EN' | 'AR'

interface TrainersProps {
  language: Language
}

export default function Trainers({ language }: TrainersProps) {
  const trainers = [
    {
      name: {
        en: 'Dr. Soufiane Fouad Khdir',
        ar: 'الدكتور سفيان فؤاد خذير',
      },
      role: {
        en: 'Head of Languages Department at ROYA Training & Social Investment Center',
        ar: 'رئيس فرع اللغات بمركز رؤيا للتدريب والاستثمار الاجتماعي',
      },
      image: '/images/soufiane.jpg',
      description: {
        en: 'Dr. Soufiane Fouad Khdir oversees the Languages Department at ROYA and contributes to the development of foreign language training programs, particularly English, using modern approaches that address academic and professional learning needs. He supports learners in developing their language and communication skills, helping them enhance their opportunities in education, training, travel, tourism, and employment.',
        ar: 'يُشرف الدكتور سفيان فؤاد خذير على فرع اللغات بمركز رؤيا، ويساهم في تطوير البرامج التكوينية الخاصة بتعليم اللغات الأجنبية، لاسيما اللغة الإنجليزية، وفق مقاربات حديثة تراعي متطلبات التعلم الأكاديمي والمهني. يعمل على مرافقة المتعلمين وتنمية مهاراتهم اللغوية والتواصلية، بما يساعدهم على تعزيز فرصهم في الدراسة والتكوين والسفر والسياحة والتوظيف.',
      },
    },

    {
      name: {
        en: 'Mr. Ben Omar Mohamed',
        ar: 'الأستاذ بن عمر محمد',
      },
      role: {
        en: 'Trainer & Consultant in Management, Entrepreneurship and Institutional Development',
        ar: 'مدرب ومستشار في الإدارة وريادة الأعمال والتنمية المؤسسية',
      },
      image: '/images/benomar.jpg',
      description: {
        en: 'A trainer and consultant in management, entrepreneurship, and institutional development. He is a certified trainer with the International Labour Organization (ILO) in the Start and Improve Your Business (SIYB) program. He has more than 14 years of professional experience in healthcare management and holds an MBA. He is also the founder of ROYA Training & Social Investment Center, where he works as a consultant and trainer.',
        ar: 'مدرب ومستشار في مجالات الإدارة وريادة الأعمال والتنمية المؤسسية، حاصل على شهادة مدرب معتمد لدى منظمة العمل الدولية (ILO) في برنامج ابدأ وحسّن مشروعك (SIYB). يمتلك خبرة مهنية تمتد لأكثر من 14 سنة في تسيير المؤسسات الصحية، ويحمل شهادة ماجستير إدارة الأعمال (MBA). وهو صاحب فكرة مركز رؤيا ومؤسسه، ويعمل كمستشار ومدرب بالمركز.',
      },
    },

    {
      name: {
        en: 'Ms. Abir Ferial Jerada',
        ar: 'الأستاذة عبير فريال جرادة',
      },
      role: {
        en: 'Head of Mental Arithmetic & Soroban Program at ROYA',
        ar: 'مسؤولة تخصص الحساب الذهني والسوروبان بمركز رؤيا',
      },
      image: '/images/abir.png',
      description: {
        en: 'Ms. Abir Ferial Jerada oversees the Mental Arithmetic and Soroban programs at ROYA. She works on developing the mental abilities of children and young learners through modern educational methods focused on concentration, calculation speed, memory enhancement, and creative thinking.',
        ar: 'تتولى الأستاذة عبير فريال جرادة الإشراف على برامج الحساب الذهني والسوروبان بالمركز، حيث تعمل على تنمية القدرات الذهنية للأطفال والناشئة من خلال أساليب تعليمية حديثة تعتمد على التركيز، وسرعة الحساب، وتقوية الذاكرة، وتنمية مهارات التفكير والإبداع.',
      },
    },
  ]

  const isArabic = language === 'AR'

  return (
    <section
      id="trainers"
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
          <span className="inline-flex items-center rounded-full bg-[#193a5e]/10 border border-[#193a5e]/10 px-4 py-2 mb-5">
            <span className="text-sm font-medium text-[#193a5e]">
              {isArabic ? 'فريق مركز رؤيا' : 'ROYA Team'}
            </span>
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#193a5e]">
            {isArabic ? 'أساتذة' : 'Expert'}
            <span className="block text-[#5a8861]">
              {isArabic ? 'وخبرات متميزة' : 'Trainers & Professionals'}
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
            {isArabic
              ? 'يضم مركز رؤيا نخبة من المدربين والمختصين الذين يساهمون بخبراتهم في تطوير مهارات المتعلمين وبناء قدراتهم الأكاديمية والمهنية.'
              : 'ROYA brings together experienced trainers and professionals who contribute their expertise to developing learners’ academic and professional skills.'}
          </p>
        </motion.div>

        {/* Trainers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.name.en}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500"
            >

              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#eef2f5]">
                <Image
                  src={trainer.image}
                  alt={isArabic ? trainer.name.ar : trainer.name.en}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#193a5e]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#193a5e] mb-3">
                  {isArabic ? trainer.name.ar : trainer.name.en}
                </h3>

                <p className="text-[#5a8861] font-medium text-sm leading-6 mb-5">
                  {isArabic ? trainer.role.ar : trainer.role.en}
                </p>

                <p className="text-gray-600 leading-7 text-[15px]">
                  {isArabic
                    ? trainer.description.ar
                    : trainer.description.en}
                </p>

              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-l from-[#193a5e] to-[#5a8861] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

            </motion.article>
          ))}
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
              ? 'خبرات نؤمن بها، ومعرفة نصنع بها الأثر.'
              : 'Expertise we trust, knowledge that creates impact.'}
          </p>
        </motion.div>

      </div>
    </section>
  )
}