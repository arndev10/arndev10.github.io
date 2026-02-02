'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/contexts/LanguageContext'

const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-navy-950 focus:font-medium focus:rounded"
      >
        Skip to content
      </a>
      <button
        type="button"
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        className="fixed top-6 right-6 z-50 font-mono text-sm px-4 py-2 rounded border border-navy-500 text-navy-300 hover:text-accent hover:border-accent bg-navy-950/90 backdrop-blur-sm transition-colors"
        aria-label={language === 'es' ? 'Versión en inglés' : 'Spanish version'}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </button>
      <Sidebar />
      <main
        id="main-content"
        className="min-h-screen pl-[80px] lg:pl-[100px] pr-6 lg:pr-12 py-12 lg:py-24"
      >
        <div className="max-w-[700px] mx-auto">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}
