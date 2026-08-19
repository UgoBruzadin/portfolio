import { motion } from 'framer-motion'
import { publications } from '../data/resume'

const BASE = import.meta.env.BASE_URL

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
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                {pub.venue}{pub.authorPosition ? ` · ${pub.authorPosition}` : ''}
              </p>
              {pub.role && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">{pub.role}</p>
              )}
              {pub.pdf && (
                <a
                  href={`${BASE}${pub.pdf}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-neural-500 dark:text-neural-400 hover:text-neural-600 dark:hover:text-neural-300 mt-1.5 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {pub.pdfLabel || 'View PDF'}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
