'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

const projects = [
  {
    name: 'ESSAR-V1',
    descriptionEs: 'Los equipos de proyecto generaban reportes Excel manualmente, consumiendo horas por semana. Construí un sistema de automatización que procesa datos estructurados, genera reportes y elimina cuellos de botella manuales — reduciendo tiempos de procesamiento de horas a minutos.',
    descriptionEn: 'Project teams spent hours per week generating Excel reports manually. I built an automation system that processes structured data, generates reports, and eliminates manual bottlenecks — reducing processing time from hours to minutes.',
    tech: ['Python', 'pandas', 'openpyxl', 'PyInstaller'],
    github: 'https://github.com/arndev10/ESSAR-V1',
    youtube: 'https://www.youtube.com/watch?v=utC-tqRLgiE',
  },
  {
    name: 'Control Fit App v1',
    descriptionEs: 'Necesitaba una plataforma integrada para rastrear composición corporal, hábitos y progreso físico con datos reales — no solo una app genérica. Diseñé y desarrollé un sistema full-stack con registros diarios, análisis de fotos y dashboards en tiempo real.',
    descriptionEn: 'I needed an integrated platform to track body composition, habits, and physical progress with real data — not just a generic app. I designed and built a full-stack system with daily logging, photo analysis, and real-time dashboards.',
    tech: ['FastAPI', 'Next.js 14', 'TypeScript', 'SQLAlchemy'],
    github: 'https://github.com/arndev10/Control-fit-app-v1',
  },
  {
    name: 'WhatsApp Audio Transcriber v2',
    descriptionEs: 'Los mensajes de voz de WhatsApp son difíciles de buscar y revisar. Construí un transcriptor que convierte audio a texto con IA — v1 era local con Whisper, v2 está desplegada en la nube con Render + Vercel para acceso desde cualquier dispositivo.',
    descriptionEn: 'WhatsApp voice messages are hard to search and review. I built a transcriber that converts audio to text with AI — v1 ran locally with Whisper, v2 is cloud-deployed on Render + Vercel for access from any device.',
    tech: ['FastAPI', 'React 18', 'Whisper', 'Render', 'Vercel'],
    github: 'https://github.com/arndev10/transcribir-audios-v2',
  },
  {
    name: 'PDF to MP3 Book Converter',
    descriptionEs: 'Quería "leer" libros PDF durante el commute sin depender de servicios de suscripción. Creé un conversor offline que transforma PDFs completos en archivos MP3 usando text-to-speech local — sin APIs, sin costos recurrentes.',
    descriptionEn: 'I wanted to "read" PDF books during my commute without relying on subscription services. I created an offline converter that transforms full PDFs into MP3 files using local text-to-speech — no APIs, no recurring costs.',
    tech: ['Python', 'PyPDF2', 'Flask', 'ffmpeg'],
    github: 'https://github.com/arndev10/PDF-a-MP3-Conversor-de-Libros',
  },
  {
    name: 'Music.io v1',
    descriptionEs: 'Herramienta web interactiva para explorar teoría musical y analizar escalas. Construida como ejercicio de desarrollo frontend con TypeScript, enfocada en visualización musical clara.',
    descriptionEn: 'Interactive web tool for exploring music theory and analyzing scales. Built as a frontend development exercise with TypeScript, focused on clear musical visualization.',
    tech: ['TypeScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/arndev10/Music.io-v1',
  },
]

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects

  return (
    <section id="projects" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">04.</span>
        {t.title}
      </h2>
      <p className="text-navy-300 text-sm mb-8 max-w-[600px]">{t.subtitle}</p>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative p-6 rounded bg-navy-800/30 border border-navy-600/50 hover:border-navy-500 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-navy-50 font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed mb-4">
                  {language === 'es' ? project.descriptionEs : project.descriptionEn}
                </p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-navy-400">
                  {project.tech.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 flex flex-col gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-mono text-sm flex items-center gap-1"
                  aria-label={`${project.name} - GitHub`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t.viewGitHub}
                </a>
                {'youtube' in project && (project as { youtube?: string }).youtube && (
                  <a
                    href={(project as { youtube?: string }).youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 font-mono text-sm flex items-center gap-1"
                    aria-label={`${project.name} - YouTube`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    {language === 'es' ? 'Ver en YouTube →' : 'Watch on YouTube →'}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
