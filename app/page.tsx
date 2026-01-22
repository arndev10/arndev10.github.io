'use client'

import dynamic from 'next/dynamic'

const LanguageToggle = dynamic(() => import('@/components/LanguageToggle'), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>
      <div className="container mx-auto px-6 py-8 max-w-7xl pt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <Navigation />
            <Hero />
            <Projects />
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
