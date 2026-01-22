'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Certifications() {
  const { language } = useLanguage()
  const t = translations[language].certifications

  const certifications = [
    {
      name: language === 'es' ? 'Project Management Professional (PMP®)' : 'Project Management Professional (PMP®)',
      issuer: 'PMI',
      year: '2023 - Present',
      highlight: true
    },
    {
      name: language === 'es' ? 'IA Generativa para Project Managers' : 'Generative AI for Project Managers',
      issuer: 'PMI',
      year: '2024'
    },
    {
      name: language === 'es' ? 'Especialización en Deep Learning' : 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Andrew Ng)',
      year: '2024'
    },
    {
      name: language === 'es' ? 'Disciplined Agile Essentials' : 'Disciplined Agile Essentials',
      issuer: 'PMI',
      year: '2024'
    },
    {
      name: language === 'es' ? 'IA Generativa con Modelos de Lenguaje Grande' : 'Generative AI with Large Language Models',
      issuer: 'Google Cloud',
      year: '2024'
    },
    {
      name: language === 'es' ? '10+ Micro-credenciales PMI' : '10+ PMI Micro-credentials',
      issuer: 'PMI',
      year: '2023-2024',
      description: t.microCredentials
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-black transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t.subtitle}
          </p>
          <a
            href="https://www.credly.com/users/arnold-torres-larriega/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 dark:bg-gray-800 text-white dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl border border-gray-700"
          >
            {t.viewAll}
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border ${
                cert.highlight ? 'border-2 border-blue-600 dark:border-blue-500 ring-2 ring-blue-100 dark:ring-blue-900/50' : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              {cert.highlight && (
                <div className="flex items-center mb-3">
                  <span className="bg-blue-600 dark:bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
                    {t.premium}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{cert.year}</p>
              {cert.description && (
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
