'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Sidebar() {
  const { language } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-3xl mx-auto mb-4">
          AT
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Arnold Torres</h3>
        <p className="text-gray-400 text-sm mb-6">
          {language === 'es' 
            ? 'PMP® Certificado | Desarrollador Full-Stack'
            : 'PMP® Certified | Full-Stack Developer'
          }
        </p>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/arnoldtorrespmpdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
          </a>
          <a
            href="#projects"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {language === 'es' ? 'Ver Mi Trabajo →' : 'See My Work →'}
          </a>
        </div>
      </div>

      {/* Follow Me */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h3 className="text-lg font-bold text-white mb-4">
          {language === 'es' ? 'Sígueme' : 'Follow Me'}
        </h3>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/arnoldtorrespmpdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://www.credly.com/users/arnold-torres-larriega/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
            aria-label="Credly"
          >
            🏆
          </a>
          <a
            href="https://github.com/arndev10"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
            aria-label="GitHub"
          >
            📁
          </a>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
        <h3 className="text-lg font-bold text-white mb-2">
          {language === 'es' ? 'Certificaciones' : 'Certifications'}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {language === 'es' 
            ? 'Algunas de las certificaciones profesionales que he obtenido, explora y conócelas ahora.'
            : 'Some of the professional certifications I\'ve obtained, explore and learn about them now.'
          }
        </p>
        <a
          href="https://www.credly.com/users/arnold-torres-larriega/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-750 border border-gray-700 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white font-bold">
            PMP
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm">PMP® Certified</p>
            <p className="text-gray-400 text-xs">PMI</p>
          </div>
          <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs">
        <p>© 2024 Arnold Torres Larriega</p>
        <p className="mt-1">
          {language === 'es' 
            ? 'Portfolio profesional desarrollado con Next.js'
            : 'Professional portfolio developed with Next.js'
          }
        </p>
      </div>
    </div>
  )
}
