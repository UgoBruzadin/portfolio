import { motion } from 'framer-motion'
import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-neural-100 dark:hover:bg-neural-900/40 hover:text-neural-700 dark:hover:text-neural-300 transition-colors duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
