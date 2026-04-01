import { motion } from 'framer-motion'
import { education, awards } from '../data/resume'

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-heading">Education</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card"
          >
            <div className="text-xs font-mono text-neural-500 dark:text-neural-400 mb-1">{ed.year}</div>
            <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-1">{ed.degree}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{ed.school}</div>
            <div className="text-xs text-slate-400 dark:text-slate-500">{ed.location}</div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wider">
        Honors & Awards
      </h3>
      <div className="space-y-3">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="text-neural-400 mt-0.5">◆</span>
            <div>
              <div className="text-sm text-slate-800 dark:text-slate-200">{a.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{a.org} · {a.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
