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
    tech: ['Python', 'Agile/SCRUM', 'Stakeholder Mgmt', 'Automation', 'Data Analysis'],
  },
  {
    titleKey: 'pmFreelance',
    company: 'JA&DE Ingenieros S.A / A&M Ingeniería',
    period: 'Feb 2022 – Oct 2023',
    location: 'Lima, Perú',
    achievementsKey: 'freelance',
    tech: ['Scrum', 'Kanban', 'KPI Dashboards', 'Risk Analysis'],
  },
  {
    titleKey: 'freight',
    company: 'Tristar Transit',
    period: 'Oct 2019 – Jun 2021',
    location: 'Los Angeles, California',
    achievementsKey: 'tristar',
    tech: ['Logistics', 'TMS', 'CRM', 'Operations'],
  },
]

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  const titles: Record<string, string> = {
    fsd: language === 'es' ? 'Full Stack Developer' : 'Full Stack Developer',
    pm: language === 'es' ? 'Project Manager' : 'Project Manager',
    pmFreelance: language === 'es' ? 'Project Manager Freelancer' : 'Project Manager Freelancer',
    freight: language === 'es' ? 'Freight Coordinator' : 'Freight Coordinator',
  }

  const achievements: Record<string, string[]> = {
    fullstack:
      language === 'es'
        ? [
            'Desarrollo de aplicaciones web full-stack: fitness tracker, transcriptor de audio con IA, conversor PDF a MP3',
            'Integración de modelos de IA (Whisper, LLMs) en flujos de producción con FastAPI y React',
            'Deploy en cloud (Render + Vercel) y CI/CD con GitHub Actions',
          ]
        : [
            'Full-stack web app development: fitness tracker, AI audio transcriber, PDF to MP3 converter',
            'AI model integration (Whisper, LLMs) into production workflows with FastAPI and React',
            'Cloud deployment (Render + Vercel) and CI/CD with GitHub Actions',
          ],
    msi:
      language === 'es'
        ? [
            'Gestioné 7 proyectos concurrentes en telecomunicaciones, logística y operaciones de campo',
            'Construí sistemas de automatización que redujeron el esfuerzo operativo repetitivo en un 99%',
            'Coordiné equipos de campo, proveedores y tiempos de procurement bajo SLAs estrictos de clientes',
          ]
        : [
            'Managed 7 concurrent projects across telecom, logistics, and field service operations',
            'Built workflow automation systems that reduced repetitive operational effort by 99%',
            'Coordinated field teams, vendors, and procurement timelines under strict client SLAs',
          ],
    freelance:
      language === 'es'
        ? [
            'Implementé frameworks Scrum/Kanban para equipos operativos y técnicos en entornos de ingeniería',
            'Diseñé dashboards de KPIs y sistemas de tracking para mejorar la visibilidad de procesos en flujos logísticos',
            'Realicé análisis de riesgo operativo y financiero para mantener rentabilidad y estabilidad en entregas',
          ]
        : [
            'Implemented Scrum/Kanban frameworks for operational and technical teams in engineering environments',
            'Designed KPI dashboards and tracking systems to improve process visibility across logistics workflows',
            'Conducted operational and financial risk analysis to maintain project profitability and delivery stability',
          ],
    tristar:
      language === 'es'
        ? [
            'Coordinación end-to-end de cargas en entornos logísticos de alto volumen, optimizando tiempos de entrega y cumplimiento regulatorio',
            'Uso de TMS (Transportation Management Systems) y CRM para tracking de envíos y optimización de operaciones',
          ]
        : [
            'Managed end-to-end freight coordination in high-volume logistics environments, optimizing delivery timelines and ensuring regulatory compliance',
            'Utilized TMS (Transportation Management Systems) and CRM tools to track shipments and streamline operations',
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
