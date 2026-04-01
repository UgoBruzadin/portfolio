import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Ugo Bruzadin Nunes
        </span>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-neural-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-400 hover:text-neural-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-slate-400 hover:text-neural-400 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
