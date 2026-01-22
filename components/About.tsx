'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t.title}
        </h2>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p 
            className="text-lg text-gray-700 dark:text-white mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.description }}
          />
          
          <div className="bg-blue-50 dark:bg-gray-900 rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t.philosophy}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-white">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">🚀</span>
                <span dangerouslySetInnerHTML={{ __html: t.philosophyPoints.mvp }} />
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">🔧</span>
                <span dangerouslySetInnerHTML={{ __html: t.philosophyPoints.problems }} />
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">📈</span>
                <span dangerouslySetInnerHTML={{ __html: t.philosophyPoints.improve }} />
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">🎓</span>
                <span className="dark:text-white">{t.philosophyPoints.learn}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">📋</span>
                <span dangerouslySetInnerHTML={{ __html: t.philosophyPoints.pmi }} />
              </li>
            </ul>
          </div>

          <p 
            className="text-lg text-gray-700 dark:text-white leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.specialization }}
          />
        </div>
      </div>
    </section>
  )
}
