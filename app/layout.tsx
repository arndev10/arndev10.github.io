import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnold Torres Larriega | PMP® Certified Project Manager & Full-Stack Developer',
  description: 'PMP® Certified Project Manager with 6+ years of experience. Specialized in Python automation, full-stack development, and transforming business requirements into technical solutions.',
  keywords: 'Project Manager, PMP, Full-Stack Developer, Python Automation, PMI, Software Development',
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
