import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

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
                  {(project.link || project.githubUrl) && (
                    project.private ? (
                      <a
                        href={`mailto:ugobruzadin@gmail.com?subject=Request access: ${project.name}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-neural-400 hover:text-neural-500 transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Private — request access
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl || project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-neural-400 hover:text-neural-500 transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View on GitHub
                      </a>
                    )
                  )}
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
