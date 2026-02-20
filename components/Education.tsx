'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const education = [
  {
    degree: { es: 'Ingeniería Industrial', en: 'Industrial Engineering' },
    institution: 'Universidad Ricardo Palma',
    period: '2013 – 2019',
    location: 'Lima, Perú',
  },
]

const certifications = [
  {
    name: 'Project Management Professional (PMP®)',
    issuer: 'PMI',
    year: '2023',
    note: { es: 'Renovado', en: 'Renewed' },
  },
  {
    name: 'Generative AI for Project Managers',
    issuer: 'PMI',
    year: '',
    note: null,
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '',
    note: null,
  },
  {
    name: 'Disciplined Agile',
    issuer: 'PMI',
    year: '',
    note: null,
  },
]

export default function Education() {
  const { language } = useLanguage()

  return (
    <section id="education" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">03.</span>
        {language === 'es' ? 'Educación y Certificaciones' : 'Education & Certifications'}
      </h2>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-navy-600">
            <div className="absolute -left-[9px] top-0 w-3 h-3 rounded-full bg-accent" />
            <div className="mb-1 flex flex-wrap items-baseline gap-2">
              <h3 className="text-navy-50 font-semibold">
                {language === 'es' ? edu.degree.es : edu.degree.en} · <span className="text-accent">{edu.institution}</span>
              </h3>
              <span className="font-mono text-xs text-navy-400">{edu.period}</span>
            </div>
            <p className="text-navy-400 text-sm">{edu.location}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-navy-200 text-sm font-semibold mb-4 font-mono">
          {language === 'es' ? 'Certificaciones Profesionales' : 'Professional Certifications'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded bg-navy-800/30 border border-navy-600/50"
            >
              <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <p className="text-navy-100 text-sm font-medium">{cert.name}</p>
                <p className="text-navy-400 text-xs font-mono">
                  {cert.issuer}
                  {cert.year && ` · ${cert.year}`}
                  {cert.note && ` · ${language === 'es' ? cert.note.es : cert.note.en}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.credly.com/users/arnold-torres-larriega/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 font-mono text-sm text-accent hover:underline"
        >
          {language === 'es' ? 'Ver todas las insignias en Credly →' : 'View all badges on Credly →'}
        </a>
      </div>
    </section>
  )
}
