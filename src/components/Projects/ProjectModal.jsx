import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { ProjectLinkPills } from './ProjectLinks'

const BASE = import.meta.env.BASE_URL

const rows = [
  { label: 'Why it matters', key: 'why' },
  { label: 'Problem', key: 'problem' },
  { label: 'Approach', key: 'approach' },
  { label: 'Results', key: 'results' },
]

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h2>
                  <ProjectLinkPills project={project} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{project.summary}</p>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {project.image && (
              <div className="mb-6 flex justify-center">
                <img
                  src={project.image.startsWith('http') ? project.image : `${BASE}projects/${project.image}`}
                  alt={project.name}
                  className="max-h-60 w-full max-w-xl rounded-xl object-contain border border-slate-200 dark:border-slate-700"
                />
              </div>
            )}

            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            )}

            {project.why && (
              <div className="space-y-4 mb-6">
                {rows.map(({ label, key }) =>
                  project[key] ? (
                    <div key={key}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-neural-500 dark:text-neural-400 mb-1">
                        {label}
                      </dt>
                      <dd className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {project[key]}
                      </dd>
                    </div>
                  ) : null
                )}
              </div>
            )}

            {project.stack && (
              <div className="mb-6">
                <dt className="text-xs font-semibold uppercase tracking-wider text-neural-500 dark:text-neural-400 mb-2">
                  Tech Stack
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.stack.map(s => (
                    <span key={s} className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
