/**
 * @typedef {{id:string,title:string,subtitle?:string,blurb?:string,contribution?:string,year?:number,roles:string[],links?:Object,featured?:boolean}} Project
 */

/** @type {Project[]} */
export const projects = [
    {
        id: 'enigma',
        repo: 'ENIGMA',
        title: 'ENIGMA: EEG-to-Image in 15 Minutes',
        subtitle: 'Unified lightweight EEG-to-image model',
        blurb: 'Cross-modal alignment between EEG embeddings and visual latent spaces enabling multi-subject image reconstruction.',
        contribution: 'Preprocessing and cross-subject alignment pipeline; ablation studies and model evaluation.',
        year: 2026,
        roles: ['ml-research', 'data-science', 'neuroscience'],
        links: {
            paper: 'https://arxiv.org/abs/2602.10361',
            repo: 'https://github.com/Alljoined/ENIGMA',
            notes: 'TMLR (Transactions on Machine Learning Research) — in press (2026); NeurIPS 2025 workshop poster'
        },
        featured: true
    },

    {
        id: 'alljoined-1.6m',
        repo: 'Alljoined-1.6M',
        title: 'Alljoined-1.6M',
        subtitle: 'A million-trial EEG–image dataset for affordable BCI research',
        blurb: 'Large-scale visual-stimulus EEG dataset enabling robust cross-subject decoding benchmarks.',
        contribution: 'Data curation and preprocessing pipelines; dataset release coordination.',
        year: 2025,
        roles: ['data-science', 'ml-research', 'neuroscience'],
        links: {
            paper: 'https://arxiv.org/abs/2508.18571',
            repo: 'https://github.com/Alljoined/Alljoined-1.6M',
            huggingface: 'https://huggingface.co/datasets/Alljoined/Alljoined-1.6M'
        },
        featured: true
    },

    {
        id: 'triangulation',
        repo: 'Triangulation_Project',
        title: 'Triangulation Project',
        subtitle: 'Framework for consciousness decoding',
        blurb: 'Temporal generalization and parallelized moving-window cross-validation for EEG analyses.',
        contribution: 'Implemented cross-validation framework and performance optimizations.',
        year: 2024,
        roles: ['ml-research', 'neuroscience'],
        links: { repo: 'https://github.com/UgoBruzadin/Triangulation_Project' },
        featured: false
    },

    {
        id: 'quicklab',
        repo: 'QuickLab',
        title: 'QuickLab',
        subtitle: 'EEG preprocessing & visualization EEGLAB plugin',
        blurb: 'High-speed, auditable preprocessing for multi-session EEG data.',
        contribution: 'Implemented parallelized MATLAB processing and streamlined GUIs.',
        year: 2022,
        roles: ['neuroscience', 'data-science'],
        links: { repo: 'https://github.com/UgoBruzadin/QuickLab' },
        featured: false
    },

    {
        id: 'physreve',
        repo: 'PhysREVE',
        title: 'PhysREVE',
        subtitle: 'Physics-informed EEG adapter',
        blurb: 'Injects leadfield-derived electrode similarity into a frozen EEG foundation model to improve cross-subject performance.',
        contribution: 'Developed physics prior and integration into pretrained backbones.',
        year: 2025,
        roles: ['ml-research', 'neuroscience'],
        links: { repo: 'https://github.com/UgoBruzadin/PhysREVE' },
        featured: false
    }
]

export default projects
