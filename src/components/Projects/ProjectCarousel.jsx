import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useGithubProjects } from '../../hooks/useGithubProjects'
import ProjectModal from './ProjectModal'

const BASE = import.meta.env.BASE_URL

function ProjectFigure({ project }) {
  const [imgError, setImgError] = useState(false)
  const src = project.image ? `${BASE}projects/${project.image}` : null

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={project.name}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover"
      />
    )
  }

  // Placeholder — EEG-style decorative pattern
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <svg viewBox="0 0 260 80" className="w-48 opacity-30 dark:opacity-20">
        <polyline
          points="0,40 20,40 30,15 40,65 50,40 80,40 90,20 100,60 110,40 140,40 150,25 160,55 170,40 200,40 210,18 220,62 230,40 260,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-neural-500"
        />
      </svg>
      <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tracking-wider">
        {project.name}
      </span>
    </div>
  )
}

function CarouselCard({ project, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`
        snap-center shrink-0 w-72 sm:w-80 cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
        bg-white dark:bg-slate-800/60
        ${active
          ? 'border-neural-400 shadow-xl shadow-neural-400/10 scale-[1.02]'
          : 'border-slate-200 dark:border-slate-700/50 opacity-80 hover:opacity-100 hover:border-neural-400/50'}
      `}
    >
      {/* Figure */}
      <div className="h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <ProjectFigure project={project} />
      </div>

      {/* Metadata */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {project.name}
          </h3>
          {project.stars > 0 && (
            <div className="flex items-center gap-1 text-xs text-slate-400 ml-2 shrink-0">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {project.stars}
            </div>
          )}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {project.summary}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectCarousel() {
  const { repos, loading } = useGithubProjects()
  const [selected, setSelected] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  const featured = repos.featured ?? []

  const scrollTo = useCallback((index) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll('[data-card]')
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
    setActiveIndex(index)
  }, [])

  const prev = () => scrollTo(Math.max(0, activeIndex - 1))
  const next = () => scrollTo(Math.min(featured.length - 1, activeIndex + 1))

  if (loading) {
    return (
      <section id="projects">
        <div className="flex gap-5 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 animate-pulse">
              <div className="h-44 bg-slate-200 dark:bg-slate-700" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id="projects">
      <div className="flex items-center justify-between mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-heading mb-0"
        >
          Projects
        </motion.h2>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-neural-400 dark:hover:border-neural-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous project"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={activeIndex === featured.length - 1}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-neural-400 dark:hover:border-neural-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next project"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel track — bleeds past the container edge */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featured.map((project, i) => (
          <div key={project.name} data-card>
            <CarouselCard
              project={project}
              active={i === activeIndex}
              onClick={() => { setActiveIndex(i); setSelected(project) }}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-200 ${
              i === activeIndex
                ? 'w-4 h-1.5 bg-neural-400'
                : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 hover:bg-neural-300'
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
