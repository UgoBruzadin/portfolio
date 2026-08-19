/**
 * @typedef {{name:string,roles:string[]}} Skill
 * @typedef {{group:string,items:Skill[]}} SkillGroup
 */

/** @type {{[category:string]: string[]}} */
export const skills = {
    'Programming & Tools': [
        'Python',
        'R',
        'PyTorch',
        'TensorFlow',
        'Scikit-Learn',
        'MATLAB',
        'SQL',
        'JavaScript'
    ],
    'Neural Data & BCI': [
        'EEG/MEG Decoding',
        'Lab Streaming Layer (LSL)',
        'Time–Frequency Analysis'
    ],
    'Machine Learning': [
        'CNNs',
        'Transformers',
        'Self-Supervised Learning'
    ],
    'Infrastructure': [
        'Docker',
        'SLURM',
        'AWS',
        'Databricks',
    ]
}

export default skills
