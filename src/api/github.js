export async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/UgoBruzadin/repos?per_page=100&sort=updated')
  if (!res.ok) return []
  const data = await res.json()
  return data.filter(repo => !repo.fork)
}
