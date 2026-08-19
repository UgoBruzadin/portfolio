/**
 * @typedef {{id:string,title:string,org:string,location?:string,start:string,end?:string,current?:boolean,display?:string,bullets:string[],roles:string[]}} ExperienceItem
 */

/** @type {ExperienceItem[]} */
export const experience = [
    {
        id: 'neuroleap-advisor',
        title: 'Data Science Advisor',
        org: 'NeuroLeap Corp.',
        company: 'NeuroLeap Corp.',
        location: 'Costa Mesa, CA (remote)',
        start: '2026-07',
        current: true,
        display: 'Jul 2026 – Present',
        period: 'Jul 2026 – Present',
        bullets: [
            'Advising on data strategy, model evaluation, and reproducible ML pipelines (role: part-time, advisory).'
        ],
        roles: ['data-science', 'ml-research']
    },

    {
        id: 'chapman-postdoc',
        title: 'Postdoctoral Fellow & Visiting Scholar',
        org: 'Brain Institute, Chapman University',
        company: 'Chapman University',
        location: 'Orange, CA (remote/visiting)',
        start: '2023-09',
        current: true,
        display: 'Sep 2023 – Present',
        period: 'Sep 2023 – Present',
        bullets: [
            'Computational models decoding conscious perception from EEG and related multimodal signals.'
        ],
        roles: ['ml-research', 'neuroscience']
    },

    {
        id: 'maryville-adjunct',
        title: 'Adjunct Faculty (Statistics; Tests & Measurements)',
        org: 'Maryville University',
        company: 'Maryville University',
        location: 'St. Louis, MO',
        start: '2026-08',
        current: true,
        display: 'Aug 2026 – Present',
        period: 'Aug 2026 – Present',
        bullets: ['Teaching statistics courses; adjunct faculty appointment.'],
        roles: ['data-science']
    },

    {
        id: 'alljoined-ndsr',
        title: 'Neural Data Scientist & ML Researcher',
        org: 'Alljoined Inc.',
        company: 'Alljoined Inc.',
        location: 'San Francisco, CA (remote)',
        start: '2025-04',
        end: '2026-06',
        current: false,
        display: 'Apr 2025 – Jun 2026',
        period: 'Apr 2025 – Jun 2026',
        bullets: [
            'Built end-to-end ML pipelines for multimodal EEG-image datasets; designed cross-modal alignment models.'
        ],
        roles: ['ml-research', 'data-science', 'neuroscience']
    },

    {
        id: 'alljoined-consult',
        title: 'Machine Learning Consultant',
        org: 'Alljoined Inc.',
        company: 'Alljoined Inc.',
        location: 'San Francisco, CA (remote)',
        start: '2025-02',
        end: '2025-03',
        current: false,
        display: 'Feb 2025 – Mar 2025',
        period: 'Feb 2025 – Mar 2025',
        bullets: ['Short-term ML consulting for EEG-to-image reconstruction experiments.'],
        roles: ['ml-research']
    },

    {
        id: 'webster-visiting',
        title: 'Visiting Assistant Professor',
        org: 'Webster University',
        company: 'Webster University',
        location: 'St. Louis, MO',
        start: '2021-08',
        end: '2023-05',
        current: false,
        display: 'Aug 2021 – May 2023',
        period: 'Aug 2021 – May 2023',
        bullets: ['Course instruction and curriculum development.'],
        roles: ['data-science']
    },

    {
        id: 'siu-instructor',
        title: 'Instructor of Record',
        org: 'Southern Illinois University',
        company: 'Southern Illinois University',
        location: 'Carbondale, IL',
        start: '2017-08',
        end: '2021-05',
        current: false,
        display: 'Aug 2017 – May 2021',
        period: 'Aug 2017 – May 2021',
        bullets: ['Led lab and course instruction in cognitive neuroscience methods.'],
        roles: ['neuroscience']
    },

    {
        id: 'siu-grad',
        title: 'Graduate Researcher (Integrative Neuroscience Lab; Cognition & Vision Labs)',
        org: 'Southern Illinois University',
        company: 'Southern Illinois University',
        location: 'Carbondale, IL',
        start: '2014-08',
        end: '2023-07',
        current: false,
        display: 'Aug 2014 – Jul 2023',
        period: 'Aug 2014 – Jul 2023',
        bullets: [
            'EEG studies, QuickLab development, and multimodal experimental pipelines.'
        ],
        roles: ['neuroscience', 'bioinformatics']
    }
]
