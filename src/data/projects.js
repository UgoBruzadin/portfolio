/**
 * @typedef {{name:string,repo:string,image?:string,summary:string,tags:string[],why?:string,problem?:string,approach?:string,results?:string,stack?:string[],role?:string,github?:string,paper?:string,blog?:string,huggingface?:string,demo?:string,link?:string,private?:boolean,featured:boolean,highlight?:boolean}} Project
 */

/** @type {Project[]} */
export const projects = [
    {
        name: 'Storm Outage Risk',
        repo: 'storm-outage-risk',
        image: 'storm-outage-risk.jpg',
        summary: 'County-level power-outage risk model for the 216 counties of Missouri and Illinois: a DuckDB + dbt warehouse of public outage, weather and place data, a tracked model benchmark, and an interactive dashboard.',
        tags: ['dbt', 'DuckDB', 'SQL', 'XGBoost', 'Geospatial', 'MLflow', 'Python'],
        why: 'The same storm knocks out power in some counties and not others. Separating what the weather does from what the place does is the question utilities and emergency planners care about.',
        problem: 'Outages are rare (about 0.5% of 6-hour county blocks start a ≥ 5% outage) and persistent, so a model can look accurate by predicting "still out". The useful and hard target is the onset of a new outage.',
        approach: 'dbt pipeline on DuckDB (47 tests, a 3.5M-row modeling table) joining DOE EAGLE-I outage records, NOAA HRRR storm ingredients and storm reports, USFS tree canopy and Census housing into 6-hour county blocks. Scored new outages separately from ongoing ones; trained on 2020–2024, chose settings on 2024 over five seeds, and tested once on 2025 and on unseen counties. Compared feature groups and official NWS warnings and SPC outlooks in an MLflow-tracked benchmark.',
        results: 'Onset PR-AUC for ≥ 5% outages: 0.106 on the next year vs a 0.009 climatology baseline, and 0.086 on unseen counties. That is 2.4× NWS warnings plus SPC outlooks (not yet a fair race: the model sees the weather during the block, the forecasts did not), and 1 in 7 of the riskiest 1% of calm county-blocks become a ≥ 5% outage (26× the base rate). More years of storms helped more than any feature; place data helps for known counties, not new ones; tree canopy has a small but consistent effect (−2 to −3%).',
        stack: ['Python', 'SQL', 'dbt', 'DuckDB', 'XGBoost', 'LightGBM', 'scikit-learn', 'MLflow', 'GeoPandas', 'Streamlit', 'Docker'],
        github: 'https://github.com/UgoBruzadin/storm-outage-risk',
        demo: 'https://ugobruzadin.github.io/storm-outage-risk/',
        featured: true,
        highlight: true
    },

    {
        name: "Drought, Irrigation & US Corn Yield",
        repo: 'usda-crop-yield-geospatial',
        image: 'corn-drought-irrigation.png',
        summary: "How much does summer drought cut US corn yield, and how much does irrigation protect against it? 29,120 county-years of USDA, NOAA and Census data joined and tested in PostgreSQL/PostGIS, with a regression analysis and an interactive Streamlit app.",
        tags: ["SQL", "PostgreSQL", "PostGIS", "DuckDB", "Geospatial", "Regression", "Streamlit", "Python"],
        why: "Drought is the largest source of year-to-year loss in US corn, and irrigation is the main defence against it. Quantifying how much irrigation protects, and where, needs yield, weather and irrigation data that live in different agencies with different keys.",
        problem: "USDA yield and irrigation statistics, NOAA county climate and Census boundaries use different codes, grains and formats (long-format survey tables with suppressed cells, fixed-width climate records keyed by alphabetical state codes, shapefiles). Naive county averages also misstate national yield by 7-16%.",
        approach: "A layered PostgreSQL/PostGIS warehouse (raw, staging, core with keys and constraints, analysis, exports) built from public files in under 10 seconds, with SQL tests that check the pipeline against independent totals (production, official national yield, national irrigated acres). Yield anomalies against each county's own trend, then two designs: drought x irrigation across counties, and irrigated vs non-irrigated fields within the same county and year. DuckDB copies the export views to Parquet for a Streamlit app with a clickable county map.",
        results: "In severe drought, rainfed counties lose 22% of trend yield and mostly irrigated counties 5%; within the same county, dryland fields lose 53% and irrigated fields 4%. Irrigation removes nearly all of the drought loss (4.7% per PDSI unit for rainfed corn) but only half of the heat loss, and only once more than ~30% of a county's corn is irrigated.",
        stack: ["PostgreSQL", "PostGIS", "SQL", "DuckDB", "Docker", "Python", "pandas", "GeoPandas", "statsmodels", "Streamlit", "Plotly"],
        github: 'https://github.com/UgoBruzadin/usda-crop-yield-geospatial',
        featured: true
    },

    {
        name: 'SEA-AD Single-Cell Tutorial (Python)',
        repo: 'sea-ad-python-scanpy',
        image: 'sea-ad-tutorial.svg',
        summary: "A hands-on scanpy teaching series on the Allen Institute's SEA-AD Alzheimer's cortex multiome data — QC, integration, clustering, annotation, and differential expression, each notebook paired with homework and worked solutions.",
        tags: ['scanpy', 'Python', 'Single-Cell', 'AnnData', "Alzheimer's Disease", 'Tutorial'],
        why: "Built to actually learn single-cell analysis hands-on in Jupyter Notebooks — each notebook teaches a concept, demonstrates it on real data, then leaves homework to work through.",
        problem: "Single-cell genomics has a real learning curve (AnnData structure, QC conventions, batch correction, marker-based annotation, differential expression) that's hard to absorb from a finished pipeline alone.",
        approach: '6-notebook progression in scanpy — AnnData basics, QC/filtering, normalization + Harmony integration + Leiden/UMAP, marker-gene annotation validated against ground truth, differential expression by AD pathology group, and a bonus intro to the paired ATAC data — each with a real worked example plus homework and a separate solutions notebook.',
        results: "152,212 QC-passed nuclei across 8 donors, 35 Leiden clusters, 90.2% marker-based annotation agreement with SEA-AD's reference labels. Differential expression between AD pathology groups (52,454 excitatory nuclei) found 10,422/36,601 genes significant, with the top hits' direction confirmed at pseudobulk (donor) level.",
        stack: ['Python', 'scanpy', 'AnnData', 'Harmony', 'Jupyter'],
        github: 'https://github.com/UgoBruzadin/sea-ad-python-scanpy',
        featured: true
    },

    {
        name: 'CLIP Semantic Axis Geometry',
        repo: 'clip-semantic-axis-geometry',
        image: 'clip-axis.png',
        summary: "Probes CLIP ViT-L/14's representational geometry along category, perceptual, and spatial semantic axes — revealing strongly anisotropic alignment (category encoded ~6× more discriminatively than spatial) with direct consequences for EEG-to-image decoding.",
        tags: ['CLIP', 'Vision-Language', 'EEG', 'Representation Geometry'],
        why: "EEG-to-image decoders target CLIP's shared embedding space as a bridge between neural signals and visual content, but CLIP encodes some semantic dimensions far more reliably than others — which bounds what any decoder can recover regardless of neural signal quality.",
        problem: "CLIP was trained on web image-caption pairs that emphasise object identity over spatial relations or fine perceptual attributes, so its representational geometry is non-uniform and largely uncharacterised across distinct semantic axes and levels of descriptive detail.",
        approach: '2-factor design crossing semantic axis (category / perceptual / spatial) with granularity (G1–G4) over 200 THINGS-EEG2 images and 3,600 axis-isolated captions. Measured discriminability, within/between ratio, incremental gain and signal-to-noise with 10k-sample bootstrap CIs, Wilcoxon signed-rank, Holm-Bonferroni correction and a mixed-effects model.',
        results: 'Alignment is strongly anisotropic — category ≫ perceptual ≫ spatial (all pairwise p < 0.001). Added detail yields diminishing but never negative returns; spatial is the only fragile axis (SNR < 1 — wording moves the embedding more than meaning), motivating alternative models for spatial EEG decoding.',
        stack: ['Python', 'PyTorch', 'CLIP', 'scikit-learn', 'statsmodels'],
        github: 'https://github.com/UgoBruzadin/clip-semantic-axis-geometry',
        paper: 'https://github.com/UgoBruzadin/clip-semantic-axis-geometry/blob/main/docs/writeup.pdf',
        featured: true
    },

    {
        name: 'PhysREVE',
        repo: 'PhysREVE',
        image: 'physreve.png',
        summary: 'Physics-informed adapter that injects leadfield-derived electrode similarity into a frozen EEG foundation model, achieving +14.8% cross-subject improvement with a single learnable scalar.',
        tags: ['EEG', 'BCI', 'Physics-Informed ML', 'PyTorch'],
        why: 'EEG statistics vary substantially across subjects (skull geometry, electrode placement), but the biophysical forward model does not — physics provides a subject-invariant prior that pretrained models lack.',
        problem: 'Pretrained EEG foundation models overfit to per-subject statistics; cross-subject generalisation remains a bottleneck even with large backbones like REVE (30M params).',
        approach: 'Derive electrode similarity matrix B_sim from the EEG leadfield (Maxwell forward model), inject it as a channel-mixing residual into a frozen REVE backbone. Only one scalar α is learned — the 30M backbone parameters never change.',
        results: '+14.8% cross-subject balanced accuracy (0.338 → 0.388) on BCI Competition IV 2a, 4-class motor imagery, 9-subject LOSO. Physics prior beats scalp-geometry baseline in all 5 frequency bands on 109-subject PhysioNet validation.',
        stack: ['Python', 'PyTorch', 'MNE-Python', 'NumPy'],
        github: 'https://github.com/UgoBruzadin/PhysREVE',
        featured: true
    },

    {
        name: 'Syn2Emo',
        repo: 'Syn2Emo',
        image: 'syn2emo.png',
        summary: 'Benchmarks multimodal LLMs as synthetic emotion annotators, achieving r = 0.814 correlation with human ratings — enabling scalable affective labeling without costly lab studies.',
        tags: ['LLM', 'Affective Computing', 'Python', 'Benchmarking'],
        why: 'Open emotion datasets total only ~3,500 images — far too small for modern deep learning; human labeling is slow and expensive.',
        problem: 'Fine-grained dimensional emotion ratings (valence, arousal, discrete emotions) are scarce; categorical datasets like EmoSet (118K images) lack the psychological depth neuroscience requires.',
        approach: 'Calibrated multimodal LLM prompts (GPT-4o, Llama-4-Maverick, Gemma-3-27B) to predict viewer emotional responses as structured JSON, benchmarked against gold-standard NAPS human ratings across 510 images.',
        results: 'GPT-4o achieved avg. Pearson r = 0.814 (RMSE 1.504); all three frontier models scored within 0.013 of each other, with r > 0.85 on happiness, sadness, fear, and disgust.',
        stack: ['Python', 'GPT-4o', 'Llama', 'Gemma', 'OpenAI API'],
        private: true,
        github: 'https://github.com/UgoBruzadin/Syn2Emo',
        featured: true
    },

    {
        name: 'NOVA',
        repo: 'NOVA-affect-decoding',
        image: 'nova.png',
        summary: 'A large-scale EEG-affect dataset and decoding framework featuring 3,408 strictly curated video-evoked trials to model complex human emotional states.',
        tags: ['EEG', 'Affective Computing', 'BCI', 'Signal Processing'],
        why: 'Human intelligence and cognition are fundamentally shaped by emotion, yet neural affective decoding remains notoriously fragile due to experimental noise and weak stimulus validation.',
        problem: 'Existing emotion-EEG datasets suffer from low trial counts and loose experimental controls, causing deep learning models to overfit to transient noise or experimental artifacts rather than genuine affective states.',
        approach: 'Developed a rigorous 3-stage stimulus curation pipeline to isolate 408 highly reliable emotion-evoking video clips across 6 categories (Anger, Sadness, Fear, Disgust, Happiness, Neutral). Built a highly expressive Power Spectral Density (PSD) feature space (~6,231 features across 31 channels) to map full spectral fingerprints during continuous 1-5 minute trials.',
        results: 'Constructed one of the largest robust EEG-emotion corpuses in the field (3,408 paired trials across 24 diverse participants). Achieved state-of-the-art single-subject decoding accuracy of up to 75% on a challenging six-way classification task using baseline ridge models, proving the exceptional signal clarity and label quality of the dataset.',
        stack: ['Python', 'Pytorch', 'MNE-Python', 'Scikit-Learn', 'NumPy'],
        blog: 'https://www.alljoined.com/blog/introducing-nova',
        featured: true
    },

    {
        name: 'ENIGMA',
        repo: 'ENIGMA',
        image: 'enigma.jpg',
        summary: 'Unified lightweight EEG-to-image model for multi-subject visual decoding. Transactions on Machine Learning Research (TMLR), in press 2026; poster at the NeurIPS 2025 Foundation Models for the Brain and Body Workshop.',
        tags: ['EEG', 'Deep Learning', 'BCI', 'TMLR'],
        why: 'Enables visual decoding from brain signals across multiple subjects with a single lightweight model.',
        problem: 'Existing models overfit to single subjects and require massive compute.',
        approach: 'Cross-modal alignment between EEG embeddings and visual latent spaces (CLIP).',
        results: 'Outperforms prior per-subject models; generalized across subjects in held-out evaluations.',
        stack: ['PyTorch', 'CLIP', 'Python'],
        role: 'My role: preprocessing and cross-subject alignment pipeline; ablation studies and model evaluation.',
        blog: 'https://www.alljoined.com/blog/introducing-enigma',
        github: 'https://github.com/Alljoined/ENIGMA',
        paper: 'https://arxiv.org/abs/2602.10361',
        featured: true,
        highlight: true
    },

    {
        name: 'Alljoined-1.6M',
        repo: 'Alljoined-1.6M',
        image: 'alljoined1.6m.png',
        summary: 'Large-scale EEG-image dataset with 1.6 million visual stimulus trials for affordable BCI research.',
        tags: ['EEG', 'Dataset', 'BCI', 'Open Science'],
        why: 'Large-scale benchmark data is critical for training generalizable BCI models.',
        problem: 'Existing EEG datasets are too small for robust cross-subject generalization.',
        approach: 'Systematic data collection across many participants with standardized preprocessing.',
        results: 'arXiv preprint (2025); enabling new SOTA benchmarks in EEG decoding.',
        stack: ['Python', 'MATLAB', 'LSL'],
        role: 'My role: built and maintained the scalable data pipeline (raw ingestion to validated features) and GPU-cluster training infrastructure.',
        blog: 'https://www.alljoined.com/blog/introducing-alljoined-1-6m',
        github: 'https://github.com/Alljoined/Alljoined-1.6M',
        huggingface: 'https://huggingface.co/datasets/Alljoined/Alljoined-1.6M',
        paper: 'https://arxiv.org/abs/2508.18571',
        featured: true,
        highlight: true
    },

    {
        name: 'Novel Neural Correlates of Consciousness',
        repo: 'IB-ERP-cluster-analysis',
        image: 'blindness.png',
        summary: 'Novel neural signatures of inattentional blindness identified using cluster analysis of ERP data and time-frequency.',
        tags: ['Deep Learning', 'EEG', 'CNN', 'Consciousness'],
        why: 'Inattentional blindness is a clinically relevant conscious state that lacks reliable neural biomarkers.',
        problem: 'Traditional ERP analyses fail to capture complex spatiotemporal patterns predictive of conscious awareness in inattentional blindness.',
        approach: 'Analysis of two large EEG datasets with cluster analysis for spatiotemporal decoding of conscious states.',
        results: 'Identified a novel neural correlate of consciousness (VAP) that outperforms traditional ERP components in predicting awareness across tasks.',
        stack: ['Python', 'Scikit-Learn'],
        github: 'https://github.com/UgoBruzadin/IB-ERP-cluster-analysis',
        featured: true
    },

    {
        name: 'Triangulation Project',
        repo: 'Triangulation_Project',
        image: 'triangulation.png',
        summary: 'Machine learning framework for decoding neural correlates of consciousness from EEG/ERP data.',
        tags: ['EEG', 'ML', 'Consciousness', 'Python'],
        why: 'Identifying neural signatures of conscious awareness requires robust cross-task decoding.',
        problem: 'ERP-based decoding rarely generalizes across tasks and time windows.',
        approach: 'Temporal generalization with parallelized moving-window cross-validation.',
        results: '134% speedup in analysis; novel signatures identified (VAP, inattentional blindness correlates).',
        stack: ['Python', 'Scikit-Learn', 'TensorFlow', 'SQL'],
        github: 'https://github.com/UgoBruzadin/Triangulation_Project',
        featured: true,
        highlight: true
    },

    {
        name: 'QuickLab',
        repo: 'QuickLab',
        image: 'quicklab.png',
        summary: 'Open-source EEGLAB plugin for high-speed EEG preprocessing and visualization.',
        tags: ['MATLAB', 'EEG', 'Open Source', 'Tool'],
        why: 'EEG preprocessing pipelines are slow and hard to audit — QuickLab makes them fast and transparent.',
        problem: 'Standard EEGLAB workflows are slow for large multi-session datasets.',
        approach: 'Parallelized MATLAB processing with a streamlined GUI.',
        results: '~500% improvement in processing speed; hosted in the official EEGLAB repository.',
        stack: ['MATLAB', 'EEGLAB'],
        github: 'https://github.com/UgoBruzadin/QuickLab',
        featured: true,
        highlight: true
    }
]

export default projects
