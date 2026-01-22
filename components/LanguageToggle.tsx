'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="bg-gray-900 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-700 font-semibold flex items-center gap-2 min-w-[90px] justify-center hover:bg-gray-800"
      aria-label="Toggle language"
      style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 50 }}
    >
      <span className={`px-2 py-1 rounded transition-colors ${language === 'es' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400'}`}>
        ES
      </span>
      <span className="text-gray-600">|</span>
      <span className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400'}`}>
        EN
      </span>
    </button>
  )
}
