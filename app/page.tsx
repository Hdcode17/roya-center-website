'use client'

import { useState } from 'react'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import TrainingFields from '@/components/training-fields'
import Trainers from '@/components/Trainers'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN')

  return (
    <main
      dir={language === 'AR' ? 'rtl' : 'ltr'}
      className="bg-white"
    >
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Hero language={language} />
      <About language={language} />
     <TrainingFields language={language} />
     <Trainers language={language} />
     <Contact language={language} />
      <Footer />
    </main>
  )
}