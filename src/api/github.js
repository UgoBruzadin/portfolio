export async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/UgoBruzadin/repos?per_page=100&sort=updated')
  if (!res.ok) return []
  const data = await res.json()
  return data.filter(repo => !repo.fork)
}

export async function fetchPortfolioJson(repoName, username = 'UgoBruzadin') {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/main/portfolio.json`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function fetchRepoStats(githubUrl) {
  try {
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/)
    if (!match) return null
    const res = await fetch(`https://api.github.com/repos/${match[1]}/${match[2]}`)
    if (!res.ok) return null
    const data = await res.json()
    return { stars: data.stargazers_count, language: data.language }
  } catch {
    return null
  }
}
