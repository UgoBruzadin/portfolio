/**
 * @typedef {Object} Links
 * @property {string} github
 * @property {string} linkedin
 * @property {string} email
 */

/**
 * Profile single-source-of-truth
 * @type {{name:string,headline:string,location:string,citizenship:string[],contact:{email:string},links:Links,bio:string[]}}
 */
export const profile = {
    name: 'Ugo Bruzadin Nunes, PhD',
    headline: 'Neural Data Scientist • ML Research • Applied Analytics',
    location: 'St. Louis, MO',
    citizenship: ['United States', 'Brazil'],
    contact: { email: 'ugobruzadin@gmail.com' },
    links: {
        github: 'https://github.com/UgoBruzadin',
        linkedin: 'https://linkedin.com/in/ugonunes',
        email: 'mailto:ugobruzadin@gmail.com'
    },
    bio: [
        'Data scientist and computational neuroscientist with 10+ years of experience building reproducible multimodal pipelines and machine learning models for neural data.',
        'Work spans experimental design, feature engineering, and scalable model training with an emphasis on interpretability and reproducibility.'
    ]
}
