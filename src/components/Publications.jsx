import { motion } from 'framer-motion'
import { publications } from '../data/resume'

export default function Publications() {
  return (
    <section id="publications">
      <h2 className="section-heading">Publications & Presentations</h2>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 items-start"
          >
            <div className="shrink-0 mt-1">
              <span className="font-mono text-xs text-neural-500 dark:text-neural-400">{pub.year}</span>
            </div>
            <div>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neural-500 dark:hover:text-neural-400 transition-colors"
                  >
                    {pub.title} ↗
                  </a>
                ) : (
                  pub.title
                )}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{pub.venue}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
