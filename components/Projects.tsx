'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects

  const projects = [
    {
      name: 'Control Fit App v1',
      type: language === 'es' ? 'Aplicación Full-Stack de Seguimiento Fitness' : 'Full-Stack Fitness Tracking Application',
      description: language === 'es' 
        ? 'Una aplicación web completa para monitorear grasa corporal, peso y progreso físico. Incluye registros diarios, análisis de fotos, seguimiento de comidas trampa y generación de feedback semanal con IA.'
        : 'A comprehensive web application for monitoring body fat, weight, and physical progress. Features daily logs, photo analysis, cheat meal tracking, and AI-powered weekly feedback generation.',
      features: language === 'es' ? [
        'Registro diario de peso, sueño, entrenamiento y calorías',
        'Análisis de fotos corporales con gestión de metadatos',
        'Feedback semanal automatizado usando análisis de tendencias',
        'Versionado de perfiles y gestión de datos históricos'
      ] : [
        'Daily weight, sleep, training, and calorie tracking',
        'Body photo analysis with metadata management',
        'Weekly automated feedback using trend analysis',
        'Profile versioning and historical data management'
      ],
      tech: ['FastAPI', 'Next.js 14', 'TypeScript', 'SQLAlchemy'],
      github: 'https://github.com/arndev10/Control-fit-app-v1',
      highlight: language === 'es' 
        ? 'Construido siguiendo estándares PMI con desarrollo MVP iterativo'
        : 'Built following PMI standards with iterative MVP development'
    },
    {
      name: 'PDF to MP3 Converter',
      type: language === 'es' ? 'Herramienta de Conversión de Libros Offline' : 'Offline-First Book Conversion Tool',
      description: language === 'es'
        ? 'Una aplicación que convierte libros PDF en múltiples archivos de audio MP3 (~40 minutos cada uno) usando procesamiento TTS local. Completamente offline, sin costos de API, sin internet requerido.'
        : 'An application that converts PDF books into multiple MP3 audio files (~40 minutes each) using local TTS processing. Completely offline, no API costs, no internet required.',
      features: language === 'es' ? [
        'Extracción de texto PDF y división inteligente',
        'Generación TTS local usando voces del sistema',
        'Conversión a MP3 con configuraciones optimizadas',
        'Interfaz web y soporte CLI'
      ] : [
        'PDF text extraction and intelligent splitting',
        'Local TTS generation using system voices',
        'MP3 conversion with optimized settings',
        'Web interface and CLI support'
      ],
      tech: ['Python', 'PyPDF2', 'Flask', 'ffmpeg'],
      github: 'https://github.com/arndev10/PDF-A-MP3',
      highlight: language === 'es'
        ? 'MVP enfocado en resolver una necesidad real (accesibilidad offline)'
        : 'MVP focused on solving a real need (offline accessibility)'
    },
    {
      name: 'WhatsApp Audio Transcriber',
      type: language === 'es' ? 'Servicio de Transcripción de Audio Local' : 'Local Audio Transcription Service',
      description: language === 'es'
        ? 'MVP de una aplicación web para transcribir audios de WhatsApp a texto usando Whisper AI local. 100% procesamiento local, cero costos de API, privacidad completa.'
        : 'MVP of a web application for transcribing WhatsApp audios to text using local Whisper AI. 100% local processing, zero API costs, complete privacy.',
      features: language === 'es' ? [
        'Soporte multi-formato de audio (OGG, OPUS, MP3, WAV, M4A, FLAC)',
        'Detección automática de idioma',
        'Soporte de aceleración GPU (CUDA)',
        'UI moderna y responsive'
      ] : [
        'Multi-format audio support (OGG, OPUS, MP3, WAV, M4A, FLAC)',
        'Automatic language detection',
        'GPU acceleration support (CUDA)',
        'Modern responsive UI'
      ],
      tech: ['FastAPI', 'React 18', 'Whisper AI', 'PyTorch'],
      github: 'https://github.com/arndev10/whatsapp-audio-transcriber',
      highlight: language === 'es'
        ? 'Construido para resolver preocupaciones de privacidad y costo'
        : 'Built to solve privacy and cost concerns'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-lg text-blue-400 font-semibold mb-4">
                    {project.type}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors inline-block border border-gray-600"
                >
                  {t.viewGitHub}
                </a>
              </div>

              <p className="text-white mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-gray-700 rounded-lg p-4 mb-6 border border-gray-600">
                <p className="text-sm font-semibold text-blue-300 mb-2">
                  {t.approach}
                </p>
                <p className="text-blue-400">{project.highlight}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">{t.features}</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-white">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">{t.technologies}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
