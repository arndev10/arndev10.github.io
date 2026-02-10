'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

const projects = [
  {
    name: 'Control Fit App v1',
    descriptionEs: 'Aplicación full-stack para seguimiento de fitness: grasa corporal, peso y progreso. Registros diarios, análisis de fotos, comidas trampa y feedback semanal con IA.',
    descriptionEn: 'Full-stack fitness tracking: body fat, weight, and progress. Daily logs, photo analysis, cheat meal tracking, and AI-driven weekly feedback.',
    tech: ['FastAPI', 'Next.js 14', 'TypeScript', 'SQLAlchemy'],
    github: 'https://github.com/arndev10/Control-fit-app-v1',
  },
  {
    name: 'PDF to MP3 Converter',
    descriptionEs: 'Convierte libros PDF en MP3 (~40 min por archivo) con TTS local. Sin APIs ni suscripción, totalmente offline.',
    descriptionEn: 'Converts PDF books into MP3s (~40 min per file) using local TTS. No APIs, no subscription, fully offline.',
    tech: ['Python', 'PyPDF2', 'Flask', 'ffmpeg'],
    github: 'https://github.com/arndev10/PDF-a-MP3-Conversor-de-Libros',
  },
  {
    name: 'WhatsApp Audio Transcriber',
    descriptionEs: 'Transcribe audios de WhatsApp a texto con Whisper local. Multi-formato (OGG, OPUS, MP3, WAV), opcional GPU, 100% privado.',
    descriptionEn: 'Transcribes voice messages to text with local Whisper. Multi-format (OGG, OPUS, MP3, WAV), optional GPU, fully private.',
    tech: ['FastAPI', 'React 18', 'Whisper', 'PyTorch'],
    github: 'https://github.com/arndev10/Transcribir-audios',
  },
  {
    name: 'Music.io v1',
    descriptionEs: 'Aplicación web para descubrir, reproducir y gestionar música. Construida con TypeScript y herramientas front-end modernas.',
    descriptionEn: 'Web app for browsing, streaming, and managing music. Built with modern TypeScript and front-end tooling.',
    tech: ['TypeScript'],
    github: 'https://github.com/arndev10/Music.io-v1',
  },
  {
    name: 'arndev10.github.io',
    descriptionEs: 'Portfolio personal y showcase de proyectos en GitHub Pages. Perfil, habilidades y proyectos destacados en un solo sitio.',
    descriptionEn: 'Personal portfolio and project showcase on GitHub Pages. Profile, skills, and featured work in a single site.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/arndev10/arndev10.github.io',
  },
  {
    name: 'ESSAR-V1',
    descriptionEs: 'Aplicación en Python para procesamiento de datos, reportes y automatización de flujos. Análisis estructurado y exportación.',
    descriptionEn: 'Python app for data processing, reporting, and workflow automation. Structured analysis and export.',
    tech: ['Python'],
    github: 'https://github.com/arndev10/ESSAR-V1',
  },
]

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects

  return (
    <section id="projects" className="py-20">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-navy-50 mb-6 font-mono after:content-[''] after:flex-1 after:h-px after:max-w-[200px] after:bg-navy-500">
        <span className="text-accent">03.</span>
        {t.title}
      </h2>
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-accent hover:text-accent/80 font-mono text-sm flex items-center gap-1"
                aria-label={`${project.name} - GitHub`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.viewGitHub}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
