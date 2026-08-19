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
        details: 'Undergraduate and graduate-level instruction.',
        roles: ['data-science']
    },

    {
        id: 'siu-instructor',
        title: 'Instructor of Record / Lab Facilitator',
        org: 'Southern Illinois University',
        start: '2017-08',
        end: '2023-07',
        display: 'Aug 2017 – Jul 2023',
        year: 'Aug 2017 – Jul 2023',
        details: 'Multiple course sections and lab instruction across programs.',
        roles: ['neuroscience']
    }
]

export default teaching
