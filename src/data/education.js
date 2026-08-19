/**
 * @typedef {{id:string,degree:string,field?:string,school:string,location?:string,year:string,roles:string[]}} EducationItem
 */

/** @type {EducationItem[]} */
export const education = [
    {
        id: 'phd-siu',
        degree: 'Ph.D.',
        field: 'Psychology (Cognitive Neuroscience)',
        school: 'Southern Illinois University, Carbondale',
        location: 'Carbondale, IL',
        year: '2023',
        roles: ['neuroscience']
    },

    {
        id: 'ma-siu',
        degree: 'M.A.',
        field: 'Psychology (Cognitive Neuroscience)',
        school: 'Southern Illinois University, Carbondale',
        location: 'Carbondale, IL',
        year: '2018',
        roles: ['neuroscience']
    },

    {
        id: 'ba-pucsp',
        degree: 'B.A.',
        field: 'Psychology',
        school: 'Pontifícia Universidade Católica de São Paulo',
        location: 'São Paulo, Brazil',
        year: '2012',
        roles: ['neuroscience']
    }
]

export default education
