import { profile } from './profile.js'
import { experience } from './experience.js'
import { projects } from './projects.js'
import { publications } from './publications.js'
import { teaching } from './teaching.js'
import { education } from './education.js'
import { skills } from './skills.js'
import { awards } from './awards.js'

export { profile } from './profile.js'
export { experience } from './experience.js'
export { projects } from './projects.js'
export { publications } from './publications.js'
export { teaching } from './teaching.js'
export { education } from './education.js'
export { skills } from './skills.js'
export { awards } from './awards.js'
export const featuredProjects = projects.filter(p => p.featured)

export default {
    profile,
    experience,
    projects,
    publications,
    teaching,
    education,
    skills,
    awards,
}
