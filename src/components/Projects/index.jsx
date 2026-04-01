import { useState } from 'react'
import { useGithubProjects } from '../../hooks/useGithubProjects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Filters from './Filters'

const ALL_TAGS = ['EEG', 'Deep Learning', 'BCI', 'MATLAB', 'Open Source', 'Dataset', 'ML', 'Consciousness']

export default function Projects() {
  const { repos, loading } = useGithubProjects()
  const [selected, setSelected] = useState(null)
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const featured = repos.featured ?? []
  const others = repos.others ?? []

  const filtered = active === 'All'
    ? featured
    : featured.filter(p => p.tags.some(t => t === active))

  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>

      <Filters tags={ALL_TAGS} active={active} setActive={setActive} />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-3 w-3/4" />
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.name}
                project={p}
                index={i}
                onClick={() => setSelected(p)}
              />
            ))}
          </div>

          {others.length > 0 && (
            <div className="mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-ghost mb-4"
              >
                {showAll ? 'Hide' : `Show ${others.length} more repos`}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${showAll ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showAll && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {others.map((p, i) => (
                    <ProjectCard
                      key={p.name}
                      project={p}
                      index={i}
                      onClick={() => setSelected(p)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
