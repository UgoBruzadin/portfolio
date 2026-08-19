import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = await import('../src/data/index.js')
const { profile, projects, education, publications } = data.default

function buildReadme() {
    const lines = []
    lines.push(`# ${profile.name}`)
    lines.push('')
    lines.push(`${profile.links.github} • ${profile.contact.email} • ${profile.links.linkedin}`)
    lines.push('')
    lines.push(`${profile.bio[0]}`)
    lines.push('')
    lines.push('## Current roles')
    lines.push('')
    // find current roles from experience
    const ex = data.default.experience.filter(e => e.current)
    for (const e of ex) {
        lines.push(`- ${e.title}, ${e.org} — ${e.display || e.period || ''}`)
    }
    lines.push('')
    lines.push('## Featured projects')
    lines.push('')
    for (const p of projects.filter(p => p.featured)) {
        lines.push(`- ${p.title} — ${p.links?.paper || p.links?.repo || ''}`)
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
    for (const p of publications.slice(0, 4)) {
        lines.push(`- ${p.title} — ${p.venue} (${p.year})${p.link ? `; ${p.link}` : ''}`)
    }

    return lines.join('\n')
}

const out = buildReadme()
fs.writeFileSync(path.resolve(__dirname, '..', 'README.md'), out, 'utf8')
console.log('README.md generated from src/data')
