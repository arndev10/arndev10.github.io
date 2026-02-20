'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

const experience = [
  {
    titleKey: 'fsd',
    company: 'Freelance',
    period: '2026 – Present',
    location: 'Lima, Perú',
    achievementsKey: 'fullstack',
    tech: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'AI/LLMs'],
  },
  {
    titleKey: 'pm',
    company: 'MSI Americas',
    period: 'Oct 2023 – Oct 2025',
    location: 'Lima, Perú',
    achievementsKey: 'msi',
    tech: ['Python', 'Agile', 'Stakeholder Mgmt', 'Automation'],
  },
  {
    titleKey: 'pmFreelance',
    company: 'JA&DE Ingenieros S.A / A&M Ingeniería',
    period: 'Feb 2022 – Oct 2023',
    location: 'Lima, Perú',
    achievementsKey: 'freelance',
    tech: ['Scrum', 'Kanban', 'Risk Mgmt', 'Data Analysis'],
  },
]

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  const titles: Record<string, string> = {
    fsd: language === 'es' ? 'Full Stack Developer' : 'Full Stack Developer',
    pm: language === 'es' ? 'Project Manager' : 'Project Manager',
    pmFreelance: language === 'es' ? 'Project Manager Freelancer' : 'Project Manager Freelancer',
  }

  const achievements: Record<string, string[]> = {
    fullstack:
      language === 'es'
        ? [
            'Desarrollo de aplicaciones web full-stack con React, Next.js, TypeScript y Python',
            'Integración de IA y automatización en soluciones de producción',
            'Diseño e implementación de APIs REST con FastAPI y bases de datos',
          ]
        : [
            'Full-stack web application development with React, Next.js, TypeScript, and Python',
            'AI integration and automation in production solutions',
            'REST API design and implementation with FastAPI and databases',
          ],
    msi:
      language === 'es'
        ? [
            'Lideré 7 proyectos simultáneos en telecomunicaciones, logística, pruebas de señal y desarrollo de software',
            'Implementé metodologías ágiles e híbridas adaptadas a cada cliente',
            'Diseñé e implementé automatizaciones reduciendo tareas repetitivas en ~99%',
          ]
        : [
            'Led 7 simultaneous projects in telecommunications, logistics, field signal testing, and software development',
            'Implemented Agile and hybrid methodologies adapted to each client',
            'Designed and implemented automations reducing repetitive tasks by ~99%',
          ],
    freelance:
      language === 'es'
        ? [
            'Implementé Scrum y Kanban para seguimiento de proyectos',
            'Mitigué riesgos operativos y financieros',
            'Gestioné proyectos conforme a estándares internacionales',
          ]
        : [
            'Implemented Scrum and Kanban for project tracking',
            'Mitigated operational and financial risks',
            'Managed projects under international standards',
          ],
  }

  return (
    <section id="experience" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">02.</span>
        {t.title}
      </h2>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-navy-600">
            <div className="absolute -left-[9px] top-0 w-3 h-3 rounded-full bg-accent" />
            <div className="mb-2 flex flex-wrap items-baseline gap-2">
              <h3 className="text-navy-50 font-semibold">
                {titles[exp.titleKey]} · <span className="text-accent">{exp.company}</span>
              </h3>
              <span className="font-mono text-xs text-navy-400">{exp.period}</span>
            </div>
            <p className="text-navy-400 text-sm mb-4">{exp.location}</p>
            <ul className="space-y-2 text-navy-300 text-sm mb-4">
              {achievements[exp.achievementsKey].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 rounded bg-navy-800/80 text-navy-300 border border-navy-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://drive.google.com/file/d/1b94Q2qcyLXALaZD2jpbM2ijKFKnItoSq/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 font-mono text-sm text-accent hover:underline"
      >
        {language === 'es' ? 'Ver currículum completo →' : 'View Full Résumé →'}
      </a>
    </section>
  )
}
