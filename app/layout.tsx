import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnold Torres Larriega | PMP® Project Manager | Process Automation & AI',
  description: 'PMP®-certified Project Manager with 6+ years leading operational, logistics, and technical projects. Automation, AI integration, full-stack development. Open to international relocation.',
  keywords: 'Project Manager, PMP, Process Automation, AI, Operational Coordination, Full-Stack Developer, Logistics, Supply Chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
