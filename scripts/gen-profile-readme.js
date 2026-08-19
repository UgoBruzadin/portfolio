// Regenerates the GitHub profile README (UgoBruzadin/UgoBruzadin) from this
// repo's data layer, so the profile page and the portfolio never drift apart.
// The profile repo is expected as a sibling directory; override with
// PROFILE_README_REPO=/path/to/UgoBruzadin if it lives elsewhere.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const data = await import('../src/data/index.js')
const { profile, projects, education, publications, experience, skills } = data.default

const targetDir = process.env.PROFILE_README_REPO || path.resolve(__dirname, '..', '..', 'UgoBruzadin')
const targetFile = path.join(targetDir, 'README.md')

function buildReadme() {
    const lines = []
    lines.push(`# 👋 Hi there, I'm ${profile.name}`)
    lines.push('')
    lines.push(`[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Site-blue?style=for-the-badge&logo=react)](https://ugobruzadin.github.io/portfolio/)`)
    lines.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](${profile.linkedin})`)
    lines.push(`[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:${profile.email})`)
    lines.push('')
    lines.push(`> ${profile.headline} • ${profile.location} • ${profile.availability}`)
    lines.push('')
    lines.push(profile.summary)
    lines.push('')

    lines.push('## 🔬 Featured Research & Projects')
    lines.push('')
    const highlights = projects.filter(p => p.highlight)
    for (const p of highlights) {
        const link = p.paper || p.github || p.blog || p.link
        lines.push(`### **${p.name}**`)
        lines.push(`*${p.summary}*`)
        if (p.role) lines.push(p.role)
        const refs = []
        if (p.github) refs.push(`[GitHub](${p.github})`)
        if (p.paper) refs.push(`[Paper](${p.paper})`)
        if (p.blog) refs.push(`[Blog Post](${p.blog})`)
        if (refs.length) lines.push(refs.join(' • '))
        lines.push('')
    }

    lines.push('## 💼 Current Work')
    lines.push('')
    for (const e of experience.filter(e => e.current)) {
        lines.push(`**${e.title}** @ ${e.org} (${e.display || e.period || ''})`)
        if (e.summary) lines.push(`${e.summary}`)
        lines.push('')
    }

    lines.push('## 🛠️ Technical Skills')
    lines.push('')
    for (const [group, items] of Object.entries(skills)) {
        lines.push(`**${group}:** ${items.join(', ')}`)
        lines.push('')
    }

    lines.push('## 📚 Recent Publications')
    lines.push('')
    for (const p of publications) {
        lines.push(`- *"${p.title}"* — ${p.venue}${p.link ? ` — [link](${p.link})` : ''}`)
    }
    lines.push('')

    lines.push('## 🎓 Education')
    lines.push('')
    for (const e of education) {
        lines.push(`- **${e.degree}, ${e.field || ''}** — ${e.school} (${e.year})`)
    }
    lines.push('')

    lines.push('## 🤝 Let\'s Connect')
    lines.push('')
    lines.push(`- [📧 Email](mailto:${profile.email})`)
    lines.push(`- [💼 LinkedIn](${profile.linkedin})`)
    lines.push(`- [🌐 Portfolio](https://ugobruzadin.github.io/portfolio/)`)
    lines.push('')

    // Personal flourishes — not sourced from portfolio data, kept static here.
    lines.push('## 🎯 Fun Facts')
    lines.push('')
    lines.push('- **Pronouns:** He/Him/His')
    lines.push('- **Fun fact:** Recent dad who loves spending time with my kid! Also a hardcore gamer who enjoys disconnecting to touch grass in the wild.')
    lines.push('')
    lines.push('---')
    lines.push('')
    lines.push('⭐ **Check out my [interactive portfolio](https://ugobruzadin.github.io/portfolio/)** for detailed project showcases, experience timeline, and publications!')

    return lines.join('\n') + '\n'
}

if (!fs.existsSync(targetDir)) {
    console.error(`Profile README repo not found at ${targetDir}. Set PROFILE_README_REPO to override.`)
    process.exit(1)
}

fs.writeFileSync(targetFile, buildReadme(), 'utf8')
console.log(`${targetFile} generated from src/data`)
