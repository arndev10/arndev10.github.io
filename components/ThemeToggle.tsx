'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span className="text-2xl transition-transform group-hover:scale-110">☀️</span>
      ) : (
        <span className="text-2xl transition-transform group-hover:scale-110">🌙</span>
      )}
    </button>
  )
}
