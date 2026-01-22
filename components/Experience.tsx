'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  const highlights = [
    {
      metric: '7',
      label: t.metrics.projects,
      description: t.descriptions.projects
    },
    {
      metric: '99.5%',
      label: t.metrics.reduction,
      description: t.descriptions.reduction
    },
    {
      metric: '$1.5M+',
      label: t.metrics.value,
      description: t.descriptions.value
    },
    {
      metric: '6+',
      label: t.metrics.years,
      description: t.descriptions.years
    }
  ]

  const experience = [
    {
      title: language === 'es' ? 'Project Manager' : 'Project Manager',
      company: 'MSI Americas',
      period: 'Oct 2023 – Oct 2025',
      location: language === 'es' ? 'Lima, Perú' : 'Lima, Perú',
      achievements: language === 'es' ? [
        'Lideré 7 proyectos simultáneos en telecomunicaciones, logística, pruebas de señal de campo y desarrollo de software',
        'Implementé metodologías ágiles e híbridas adaptadas a cada cliente',
        'Negocié y gestioné stakeholders incluyendo Huawei, Nokia, Claro, Entel y Starlink',
        'Actué como Data Translator para iniciativas de migración a la nube',
        'Diseñé e implementé automatizaciones reduciendo tareas repetitivas en 99.5%'
      ] : [
        'Led 7 simultaneous projects in telecommunications, logistics, field signal testing, and software development',
        'Implemented Agile and hybrid methodologies adapted to each client',
        'Negotiated and managed stakeholders including Huawei, Nokia, Claro, Entel, and Starlink',
        'Acted as Data Translator for cloud migration initiatives',
        'Designed and implemented automations reducing repetitive tasks by 99.5%'
      ]
    },
    {
      title: language === 'es' ? 'Project Manager Freelancer' : 'Project Manager Freelancer',
      company: 'JA&DE Ingenieros S.A / A&M Ingeniería y Proyectos SAC',
      period: 'Feb 2022 - Oct 2023',
      location: language === 'es' ? 'Lima, Perú' : 'Lima, Perú',
      achievements: language === 'es' ? [
        'Implementé Scrum y Kanban para seguimiento de proyectos',
        'Mitigué riesgos operativos y financieros',
        'Gestioné proyectos conforme a estándares internacionales',
        'Usé análisis de datos para toma de decisiones estratégicas'
      ] : [
        'Implemented Scrum and Kanban for project tracking',
        'Mitigated operational and financial risks',
        'Managed projects under international standards',
        'Used data analysis for strategic decision-making'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg p-6 shadow-lg text-center border border-gray-800"
            >
              <div className="text-4xl font-bold mb-2">{item.metric}</div>
              <div className="text-lg font-semibold mb-2">{item.label}</div>
              <div className="text-sm text-blue-100">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-gray-300">
                  <p className="font-medium">{exp.period}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-white">
                    <span className="text-blue-400 mr-2 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.stakeholderTitle}
          </h3>
          <p className="text-lg text-white mb-6">
            {t.stakeholderDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Huawei', 'Nokia', 'Claro', 'Entel', 'Starlink'].map((company) => (
              <span
                key={company}
                className="bg-gray-800 px-6 py-2 rounded-full font-semibold text-white shadow-sm border border-gray-700"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
