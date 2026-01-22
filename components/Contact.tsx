'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/arnoldtorrespmpdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 rounded-lg p-6 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl text-center border border-gray-200"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">{t.linkedin}</p>
            <div className="text-blue-600 font-semibold">Visit Profile →</div>
          </a>

          <a
            href="https://www.credly.com/users/arnold-torres-larriega/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white rounded-lg p-6 hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl text-center border-2 border-blue-600"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Credly Badges</h3>
            <p className="text-blue-200 mb-4">{t.credly}</p>
            <div className="text-white font-semibold">View Badges →</div>
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-white">{t.getInTouch}</h3>
          <div className="space-y-4">
            <a
              href="mailto:arnoldtorresla@gmail.com"
              className="block text-xl text-blue-100 hover:text-white transition-colors"
            >
              📧 arnoldtorresla@gmail.com
            </a>
            <a
              href="tel:+51944206911"
              className="block text-xl text-blue-100 hover:text-white transition-colors"
            >
              📱 (+51) 944 206 911
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-blue-100">
          <p className="text-lg italic">
            "{t.quote}"
          </p>
        </div>
      </div>
    </section>
  )
}
