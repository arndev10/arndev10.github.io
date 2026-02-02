'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">01.</span>
        {t.title}
      </h2>
      <div className="space-y-4 text-navy-300 leading-relaxed">
        <p
          className="text-navy-300"
          dangerouslySetInnerHTML={{ __html: t.description }}
        />
        <p
          className="text-navy-300"
          dangerouslySetInnerHTML={{ __html: t.specialization }}
        />
        <p className="text-navy-300">
          {language === 'es' ? 'Algunas tecnologías con las que trabajo:' : 'Some technologies I work with:'}
        </p>
        <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-navy-400">
          {[
            'Python',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'FastAPI',
            'SQL',
            'PMI / Agile',
            'Scrum',
            'IA expert',
          ].map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              <span className="text-accent">▹</span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
