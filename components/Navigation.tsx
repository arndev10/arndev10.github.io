'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const { language } = useLanguage()
  
  const navItems = [
    { icon: '🏠', label: language === 'es' ? 'Inicio' : 'Home' },
    { icon: '👤', label: language === 'es' ? 'Sobre Mí' : 'About' },
    { icon: '📁', label: language === 'es' ? 'Proyectos' : 'Projects' },
    { icon: '💼', label: language === 'es' ? 'Contacto' : 'Contact' }
  ]

  return (
    <nav className="bg-gray-900 rounded-2xl p-4 flex items-center justify-between border border-gray-800">
      <div className="flex items-center gap-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
