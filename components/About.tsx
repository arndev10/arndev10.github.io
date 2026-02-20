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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-navy-200 text-sm font-semibold mb-2 font-mono">
              {language === 'es' ? 'Operaciones & Gestión' : 'Operations & Management'}
            </p>
            <ul className="space-y-1 font-mono text-sm text-navy-400">
              {[
                language === 'es' ? 'Coordinación cross-funcional' : 'Cross-functional coordination',
                language === 'es' ? 'Gestión de proveedores' : 'Vendor & procurement mgmt',
                language === 'es' ? 'KPIs & monitoreo de riesgo' : 'KPIs & risk monitoring',
                'Agile / Scrum / Kanban',
                language === 'es' ? 'Comunicación con stakeholders' : 'Stakeholder communication',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-navy-200 text-sm font-semibold mb-2 font-mono">
              {language === 'es' ? 'Tecnología & Automatización' : 'Technology & Automation'}
            </p>
            <ul className="space-y-1 font-mono text-sm text-navy-400">
              {[
                'Python / FastAPI / SQLAlchemy',
                'TypeScript / React / Next.js',
                'n8n / workflow automation',
                'CI/CD / Git / Docker',
                language === 'es' ? 'IA / LLMs / data pipelines' : 'AI / LLMs / data pipelines',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-accent">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
