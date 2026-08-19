/**
 * @typedef {{id:string,title:string,org:string,start?:string,end?:string,current?:boolean,display?:string,details?:string,roles:string[]}} TeachingItem
 */

/** @type {TeachingItem[]} */
export const teaching = [
    {
        id: 'maryville-adjunct-teach',
        title: 'Adjunct Faculty (Statistics; Tests & Measurements)',
        org: 'Maryville University',
        start: '2026-08',
        current: true,
        display: 'Aug 2026 – Present',
        year: 'Aug 2026 – Present',
        details: 'Adjunct appointment teaching statistics and measurement topics.',
        roles: ['data-science']
    },

    {
        id: 'webster-vap',
        title: 'Visiting Assistant Professor',
        org: 'Webster University',
        start: '2021-08',
        end: '2023-05',
        display: 'Aug 2021 – May 2023',
        year: 'Aug 2021 – May 2023',
        details: 'Instructor of Record for 26 sections across 9 courses (Biopsychology, Statistics, Psychological Laboratory, and more); supervised a senior thesis.',
        roles: ['data-science']
    },

    {
        id: 'siu-instructor',
        title: 'Instructor of Record',
        org: 'Southern Illinois University',
        start: '2017-08',
        end: '2021-05',
        display: 'Aug 2017 – May 2021',
        year: 'Aug 2017 – May 2021',
        details: 'Instructor of Record for 9 three-credit courses (Sensation and Perception, Cognitive Psychology, Effects of Recreational Drugs).',
        roles: ['neuroscience']
    },

    {
        id: 'siu-ta',
        title: 'Teaching Assistant',
        org: 'Southern Illinois University',
        start: '2015-01',
        end: '2020-07',
        display: 'Jan 2015 – Jul 2020',
        year: 'Jan 2015 – Jul 2020',
        details: 'TA for 13 course sections, including Introduction to Psychology, Careers in Psychology, and Psychology of Learning.',
        roles: ['neuroscience']
    }
]

export default teaching
