import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = await import('../src/data/index.js')
const { profile, projects, education, publications, experience } = data.default

function buildReadme() {
    const lines = []
    lines.push(`# ${profile.name}`)
    lines.push('')
    lines.push(`[Live portfolio](https://ugobruzadin.github.io/portfolio/) • ${profile.email} • ${profile.github} • ${profile.linkedin}`)
    lines.push('')
    lines.push(profile.summary)
    lines.push('')
    lines.push('## Current roles')
    lines.push('')
    for (const e of experience.filter(e => e.current)) {
        lines.push(`- ${e.title}, ${e.org} — ${e.display || e.period || ''}`)
    }
    lines.push('')
    lines.push('## Featured projects')
    lines.push('')
    for (const p of projects.filter(p => p.featured)) {
        const link = p.github || p.paper || p.blog || p.link || ''
        lines.push(`- ${p.name} — ${p.summary}${link ? ` ([link](${link}))` : ''}`)
    }
    lines.push('')
    lines.push('## Education')
    lines.push('')
    for (const e of education) {
        lines.push(`- ${e.degree}, ${e.field || ''} — ${e.school} (${e.year})`)
    }
    lines.push('')
    lines.push('## Selected publications')
    lines.push('')
    for (const p of publications) {
        lines.push(`- ${p.title} — ${p.venue} (${p.year})${p.link ? `; ${p.link}` : ''}`)
    }

    return lines.join('\n') + '\n'
}

const out = buildReadme()
fs.writeFileSync(path.resolve(__dirname, '..', 'README.md'), out, 'utf8')
console.log('README.md generated from src/data')
