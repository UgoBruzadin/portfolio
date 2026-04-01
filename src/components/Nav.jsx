import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Publications', href: '#publications' },
]

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#080d1a]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-neural-500 hover:text-neural-400 transition-colors"
        >
          ugo.bruzadin
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-neural-500 dark:hover:text-neural-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? (
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </motion.header>
  )
}
