import { motion } from 'framer-motion'

const BASE = import.meta.env.BASE_URL

export default function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={onClick}
      className="card cursor-pointer hover:border-neural-400/60 dark:hover:border-neural-400/40 hover:shadow-lg hover:shadow-neural-400/5 transition-all duration-200 group"
    >
      <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
        {project.image ? (
          <img
            src={project.image.startsWith('http') ? project.image : `${BASE}projects/${project.image}`}
            alt={project.name}
            className="h-32 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-32 w-full flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 text-slate-500">
            <div className="text-center">
              <div className="text-sm font-semibold">{project.name || project.title}</div>
              <div className="text-xs mt-1">{project.subtitle || project.summary || ''}</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-400 group-hover:text-neural-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          {project.auto && (
            <span className="text-xs text-slate-400 font-mono">auto</span>
          )}
        </div>
        {project.stars > 0 && (
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {project.stars}
          </div>
        )}
      </div>

      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-neural-600 dark:group-hover:text-neural-400 transition-colors">
        {project.name}
      </h3>

      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
        {project.summary}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      {project.why && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 text-xs text-neural-500 dark:text-neural-400 flex items-center gap-1">
          <span>View details</span>
          <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </motion.div>
  )
}
