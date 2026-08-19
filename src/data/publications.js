/**
 * @typedef {{id:string,title:string,venue:string,year:number,link?:string,roles:string[]}} Publication
 */

/** @type {Publication[]} */
export const publications = [
    {
        id: 'enigma-paper',
        title: 'ENIGMA: A Unified Lightweight EEG-to-Image Model for Multi-Subject Visual Decoding',
        venue: 'Transactions on Machine Learning Research (TMLR) — in press',
        year: 2026,
        link: 'https://arxiv.org/abs/2602.10361',
        roles: ['ml-research', 'neuroscience']
    },

    {
        id: 'alljoined-1.6m-paper',
        title: 'Alljoined-1.6M: A Million-Trial EEG-Image Dataset for Evaluating Affordable BCIs',
        venue: 'arXiv preprint',
        year: 2025,
        link: 'https://arxiv.org/abs/2508.18571',
        roles: ['data-science', 'ml-research']
    },

    {
        id: 'two-not-one',
        title: 'Two, Not One: Electrophysiological Correlates of Consciousness in a No-Report Paradigm',
        venue: 'ASSC 2025 — poster',
        year: 2025,
        roles: ['neuroscience']
    },

    {
        id: 'vap-talk',
        title: 'Visual Awareness Positivity: A Novel Neural Correlate of Consciousness',
        venue: 'Vision Sciences Society (VSS) 2025 — talk',
        year: 2025,
        roles: ['neuroscience']
    }
]

export default publications
