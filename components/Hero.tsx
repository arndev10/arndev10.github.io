'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-white">Arnold Torres Larriega</h1>
          <span className="bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            {language === 'es' ? 'DISPONIBLE' : 'AVAILABLE FOR WORK'}
          </span>
        </div>
        <p className="text-xl text-gray-300 mb-2">{t.subtitle1}</p>
        <p className="text-lg text-gray-400 mb-6">
          {language === 'es' ? 'Lima, Perú' : 'Lima, Perú'} • {language === 'es' ? 'Actualmente en' : 'Currently at'} MSI Americas
        </p>
        <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl">
          {t.description}
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arnoldtorrespmpdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            + {language === 'es' ? 'Contratar' : 'Hire Me'}
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText('arnoldtorresla@gmail.com')
              alert(language === 'es' ? 'Email copiado!' : 'Email copied!')
            }}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-colors border border-gray-700"
          >
            {language === 'es' ? 'Copiar Email' : 'Copy Email'}
          </button>
        </div>
      </div>
    </section>
  )
}
