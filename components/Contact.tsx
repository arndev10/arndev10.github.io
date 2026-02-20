'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">04.</span>
        {t.title}
      </h2>
      <p className="text-navy-300 mb-8 max-w-[540px]">
        {t.description}
      </p>
      <a
        href="mailto:arnoldtorresla@gmail.com"
        className="inline-block border border-accent text-accent px-6 py-3 font-mono text-sm rounded hover:bg-accent-dim transition-colors"
      >
        {t.getInTouch}
      </a>
      <div className="mt-12 pt-8 border-t border-navy-600">
        <p className="font-mono text-xs text-navy-500">
          Made by Arndev10
        </p>
      </div>
    </section>
  )
}
