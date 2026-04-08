import { useEffect, useState } from 'react'
import { fetchRepos, fetchPortfolioJson } from '../api/github'
import { featuredProjects } from '../data/resume'

export function useGithubProjects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetchRepos(),
      Promise.all(featuredProjects.map(p => fetchPortfolioJson(p.repo))),
    ])
      .then(([repoList, portfolioData]) => {
        // Merge: YAML base → portfolio.json override → GitHub API stats
        const featuredWithStats = featuredProjects.map((p, i) => {
          const match = repoList.find(r => r.name.toLowerCase() === p.repo.toLowerCase())
          const portfolio = portfolioData[i] ?? {}
          return {
            ...p,
            ...portfolio,
            repo: p.repo,
            stars: match?.stargazers_count ?? 0,
            githubUrl: match?.html_url ?? p.link,
            language: match?.language ?? null,
          }
        })

        // Add non-featured GitHub repos (excluding featured ones and forks)
        const featuredRepos = new Set(featuredProjects.map(p => p.repo.toLowerCase()))
        const others = repoList
          .filter(r => !featuredRepos.has(r.name.toLowerCase()))
          .map(r => ({
            name: r.name,
            repo: r.name,
            summary: r.description || 'No description provided.',
            tags: r.language ? [r.language] : [],
            stars: r.stargazers_count,
            githubUrl: r.html_url,
            link: r.html_url,
            language: r.language,
            auto: true,
          }))

        setRepos({ featured: featuredWithStats, others })
      })
      .finally(() => setLoading(false))
  }, [])

  return { repos, loading }
}
