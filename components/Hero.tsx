'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <p className="font-mono text-accent text-sm mb-4">
        {language === 'es' ? 'Hola, mi nombre es' : 'Hi, my name is'}
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-50 mb-4 leading-tight">
        Arnold Torres Larriega.
      </h1>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-200 mb-6 leading-tight">
        {t.subtitle1}
      </h2>
      <p className="text-navy-300 max-w-[540px] text-lg leading-relaxed mb-10">
        {t.description}
      </p>
      <a
        href="mailto:arnoldtorresla@gmail.com"
        className="inline-block border border-accent text-accent px-6 py-3 font-mono text-sm rounded hover:bg-accent-dim transition-colors w-fit"
      >
        {language === 'es' ? 'Ponte en contacto' : 'Get In Touch'}
      </a>
    </section>
  )
}
