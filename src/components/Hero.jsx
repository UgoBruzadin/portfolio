import { motion } from 'framer-motion'
import { profile } from '../data/resume'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section id="top" className="pt-8 pb-4">
      {/* EEG-style decorative signal line */}
      <div className="mb-10 overflow-hidden h-8 opacity-30 dark:opacity-20">
        <svg viewBox="0 0 800 32" className="w-full eeg-pulse" preserveAspectRatio="none">
          <polyline
            points="0,16 60,16 80,4 100,28 120,16 180,16 200,2 220,30 240,16 300,16 320,8 340,24 360,16 420,16 440,6 460,26 480,16 540,16 560,10 580,22 600,16 660,16 680,4 700,28 720,16 800,16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-neural-400"
          />
        </svg>
      </div>

      <div className="space-y-6">
        <motion.div {...fadeUp(0)}>
          <span className="font-mono text-sm text-neural-500 dark:text-neural-400 tracking-widest uppercase">
            Neural Data Scientist
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
        >
          Ugo Bruzadin Nunes
          <span className="text-neural-400">.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap gap-3"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-ghost"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profile.location}
        </motion.div>
      </div>
    </section>
  )
}
