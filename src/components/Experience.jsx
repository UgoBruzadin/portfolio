import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/resume'

function ExperienceItem({ item, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-neural-400 border-2 border-white dark:border-[#080d1a]" />

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-neural-500 dark:group-hover:text-neural-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.company} · {item.location}
            </p>
          </div>
          <span className="text-xs font-mono text-neural-500 dark:text-neural-400 whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 mt-2">
          <span>{open ? 'collapse' : 'expand'}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-2"
          >
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="text-neural-400 mt-1 shrink-0">›</span>
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading">Experience</h2>
      <div className="space-y-8">
        {experience.map((item, i) => (
          <ExperienceItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
