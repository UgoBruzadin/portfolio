import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGithubProjects } from '../../hooks/useGithubProjects'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'

const BASE = import.meta.env.BASE_URL

function ProjectFigure({ project }) {
  const [imgError, setImgError] = useState(false)
  const src = project.image
    ? (project.image.startsWith('http') ? project.image : `${BASE}projects/${project.image}`)
    : null

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
      <div className="h-32 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <ProjectFigure project={project} />
      </div>

      {/* Metadata */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 ml-2 shrink-0">
            {project.stars > 0 && (
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {project.stars}
              </div>
            )}
            {(project.link || project.githubUrl) && (
              project.private ? (
                <a
                  href={`mailto:ugobruzadin@gmail.com?subject=Request access: ${project.name}`}
                  onClick={e => e.stopPropagation()}
                  title="Private — request access"
                  className="text-slate-400 hover:text-neural-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </a>
              ) : (
                <a
                  href={project.githubUrl || project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  title="View on GitHub"
                  className="text-slate-400 hover:text-neural-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )
            )}
          </div>
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
  const [showOthers, setShowOthers] = useState(false)
  const scrollRef = useRef(null)

  const featured = repos.featured ?? []
  const others = repos.others ?? []

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

      {/* More repos dropdown */}
      {others.length > 0 && (
        <div className="mt-8">
          <button
            onClick={() => setShowOthers(!showOthers)}
            className="btn-ghost w-full justify-center"
          >
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${showOthers ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showOthers ? 'Hide' : `${others.length} more repos on GitHub`}
          </button>

          <AnimatePresence initial={false}>
            {showOthers && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  {others.map((p, i) => (
                    <ProjectCard
                      key={p.name}
                      project={p}
                      index={i}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
