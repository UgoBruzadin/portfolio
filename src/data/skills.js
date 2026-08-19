/**
 * @typedef {{name:string,roles:string[]}} Skill
 * @typedef {{group:string,items:Skill[]}} SkillGroup
 */

/** @type {SkillGroup[]} */
export const skills = [
    {
        group: 'Programming & Tools',
        items: [
            { name: 'Python', roles: ['data-science', 'ml-research'] },
            { name: 'PyTorch', roles: ['ml-research'] },
            { name: 'TensorFlow', roles: ['ml-research'] },
            { name: 'Scikit-Learn', roles: ['data-science'] },
            { name: 'MATLAB', roles: ['neuroscience'] },
            { name: 'SQL', roles: ['data-analytics'] },
            { name: 'JavaScript', roles: ['data-analytics'] }
        ]
    },

    {
        group: 'Neural Data & BCI',
        items: [
            { name: 'EEG/MEG Decoding', roles: ['neuroscience', 'ml-research'] },
            { name: 'Lab Streaming Layer (LSL)', roles: ['neuroscience'] },
            { name: 'Time–Frequency Analysis', roles: ['neuroscience'] }
        ]
    },

    {
        group: 'Machine Learning',
        items: [
            { name: 'CNNs', roles: ['ml-research'] },
            { name: 'Transformers', roles: ['ml-research'] },
            { name: 'Self-Supervised Learning', roles: ['ml-research'] }
        ]
    },

    {
        group: 'Infrastructure',
        items: [
            { name: 'Docker', roles: ['data-science'] },
            { name: 'SLURM', roles: ['data-science'] },
            { name: 'AWS', roles: ['data-science'] }
        ]
    }
]

export default skills
