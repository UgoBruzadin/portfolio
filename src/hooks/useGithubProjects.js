import { useEffect, useState } from 'react'
import { fetchRepos, fetchPortfolioJson, fetchRepoStats } from '../api/github'
import { featuredProjects } from '../data/resume'

export function useGithubProjects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetchRepos(),
      Promise.all(featuredProjects.map(p => fetchPortfolioJson(p.repo))),
    ])
      .then(async ([repoList, portfolioData]) => {
        // Merge: YAML base → portfolio.json override → GitHub API stats
        const featuredWithStats = await Promise.all(featuredProjects.map(async (p, i) => {
          const portfolio = portfolioData[i] ?? {}
          const githubUrl = p.github ?? portfolio.github ?? null
          const match = repoList.find(r => r.name.toLowerCase() === p.repo.toLowerCase())

          // For external repos not in the personal list, fetch stats individually
          const externalStats = (githubUrl && !match) ? await fetchRepoStats(githubUrl) : null

          return {
            ...p,
            ...portfolio,
            repo: p.repo,
            stars: match?.stargazers_count ?? externalStats?.stars ?? 0,
            githubUrl: githubUrl ?? match?.html_url ?? null,
            language: match?.language ?? externalStats?.language ?? null,
          }
        }))

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
