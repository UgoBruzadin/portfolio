import { profile } from './profile'
import { experience } from './experience'
import { projects } from './projects'
import { publications } from './publications'
import { teaching } from './teaching'
import { education } from './education'
import { skills } from './skills'
import { awards } from './awards'

export { profile } from './profile'
export { experience } from './experience'
export { projects } from './projects'
export { publications } from './publications'
export { teaching } from './teaching'
export { education } from './education'
export { skills } from './skills'
export { awards } from './awards'
export const featuredProjects = projects.filter(p => p.featured)

export default {
    profile,
    experience,
    projects,
    publications,
    teaching,
    education,
    skills,
    awards
}
