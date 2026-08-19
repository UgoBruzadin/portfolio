/**
 * @typedef {{id:string,title:string,org:string,location?:string,start:string,end?:string,current?:boolean,display?:string,summary?:string,bullets:string[],roles:string[]}} ExperienceItem
 */

/** @type {ExperienceItem[]} */
export const experience = [
    {
        id: 'neuroleap-advisor',
        title: 'Neuroscience Advisor',
        org: 'NeuroLeap Corp.',
        company: 'NeuroLeap Corp.',
        location: 'Costa Mesa, CA (remote)',
        start: '2026-07',
        current: true,
        display: 'Jul 2026 – Present',
        period: 'Jul 2026 – Present',
        summary: 'Part-time advisory role on neural data processing and neurodiagnostic protocols for neurodevelopmental conditions in childhood.',
        bullets: [],
        roles: ['neuroscience', 'ml-research']
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
        summary: 'Identifying novel neural patterns predictive of conscious states across multiple tasks using advanced statistics, cluster analysis, machine learning, and neural networks.',
        bullets: [
            'Manage a cross-university, multi-laboratory project (Chapman, Reed College, Tel Aviv), including clinical data collection (Unix, Git, SQL), personnel training, bi-monthly presentations, grant writing, and manuscript writing.',
            'Designed a 3D deep convolutional neural network (Keras, TensorFlow, Scikit-Learn) to classify conscious states from EEG signals, outperforming baseline models (XGBoost, SVM, Random Forest) by up to 12.48%.',
            'Developed a temporal generalization function that performs moving-window, stratified group cross-validation using parallel computing — 134% faster and more customizable than the MNE-Python baseline.',
            'Dataset: 3 EEG systems, 212 participants, 3 tasks, 4,000+ hours of EEG, 5+ TB of data.',
            'Awarded the Templeton World Charity Foundation Grant #30266 ($229,948) for "Triangulating Neural Correlates of Consciousness" (Director: Michael Pitts, Reed College).'
        ],
        roles: ['ml-research', 'neuroscience']
    },

    {
        id: 'maryville-adjunct',
        title: 'Adjunct Instructor (Statistics; Tests & Measurements)',
        org: 'Maryville University',
        company: 'Maryville University',
        location: 'St. Louis, MO',
        start: '2026-08',
        current: true,
        display: 'Aug 2026 – Present',
        period: 'Aug 2026 – Present',
        summary: 'Adjunct faculty appointment teaching statistics and measurement courses.',
        bullets: [],
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
        summary: 'Built and maintained end-to-end ML pipelines for large-scale multimodal EEG-image datasets, from raw sensor ingestion through cross-modal decoding models.',
        bullets: [
            'Built and equipped the company’s in-house EEG research laboratory (32-channel rig with a real-time streaming stack); designed ML-focused experiments (image, video, and mental-imagery paradigms), wrote all data-collection protocols, and trained research assistants.',
            'Directed large-scale experimental loops on CLIP-based EEG-to-image frameworks — systematically testing layer freezing, alternative loss targets, and hyperparameter tuning to optimize latent-space alignment — and ran multi-stage ablation matrices to isolate performance variables.',
            'Improved cross-subject decoding accuracy up to 12% by engineering artifact-rejection, normalization, and feature-standardization pipelines robust to heterogeneous, non-stationary EEG; ran exploratory data analysis to surface distribution shifts, missingness, artifacts, and cohort biases across sessions and participants.',
            'Implemented supervised and self-supervised decoding models (PyTorch, Scikit-Learn) and conducted systematic failure analysis across noise regimes and edge cases; engineered parallelized bootstrapping and moving-window cross-validation to evaluate model stability and mitigate overfitting.',
            'Built and maintained the scalable experimental pipeline for a 1.6M+ trial multimodal dataset, from raw sensor ingestion to validated features; scaled training across GPU clusters (SLURM) with optimized batching and memory usage.',
            'Implemented LLM-driven semantic labeling workflows to scale creation of structured visual-stimulus datasets for cross-modal EEG decoding.',
            'Co-authored two works from this effort: the Alljoined-1.6M dataset — the largest consumer-grade EEG–vision dataset (arXiv preprint) — and ENIGMA, a state-of-the-art multi-subject EEG-to-image model presented as a poster at the NeurIPS 2025 Foundation Models for the Brain and Body Workshop.',
            'Partnered with engineering and product teams to translate exploratory findings and complex time-series analytics into production-ready demos used for fundraising and stakeholder presentations.',
            'Spearheaded an image-to-emotion and emotion-to-preference generalization initiative (EEG-to-image and EEG-to-video) — owning experimental design, ML modeling, and product integration for an AI-driven neuromarketing product.'
        ],
        roles: ['ml-research', 'data-science', 'neuroscience', 'bioinformatics']
    },

    {
        id: 'alljoined-consult',
        title: 'Machine Learning Neuroscience Consultant',
        org: 'Alljoined Inc.',
        company: 'Alljoined Inc.',
        location: 'San Francisco, CA (remote)',
        start: '2025-02',
        end: '2025-03',
        current: false,
        display: 'Feb 2025 – Mar 2025',
        period: 'Feb 2025 – Mar 2025',
        summary: 'Short-term ML consulting engagement on EEG-based visual image reconstruction via EEG-to-CLIP feature alignment.',
        bullets: [
            'Designed and implemented an ML pipeline for EEG-based visual image reconstruction via EEG-to-CLIP feature alignment, reaching up to 70% accuracy on raw data (Git, PyTorch, Scikit-Learn, SLURM, AWS) in a multidisciplinary team.',
            'Led end-to-end EEG and mental-imagery experiment design and multi-device hardware synchronization (PsychoPy, C++, Lab Streaming Layer), aligning data capture with model-training requirements.',
            'Built automated feature-quality assessment and signal-to-noise metrics to neutralize real-world sensor noise and improve downstream model performance.'
        ],
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
        summary: 'Course instruction and curriculum development across psychology and statistics courses, plus undergraduate thesis advising.',
        bullets: [
            'Instructor of Record for 26 course sections across 9 courses, including Biopsychology, Careers in Psychology, Drugs and Chemical Dependency, Psychological Laboratory, Psychology and Ethics, Introduction to Measurements and Statistics, Introduction to Psychology, and Introduction to Research Methods (in-person, online, and asynchronous formats).',
            'Supervised a student’s senior thesis; taught in-person, online, and overload sections.',
            'Developed and updated course curricula with current research and materials.',
            'Collaborated with Dr. Andrew Elvington to provide Biopsychology students with a cadaver-based brain-dissection and hands-on neuroanatomy lab.',
            'Advised a senior thesis on the effects of pink noise on sleep and anxiety; developed an app for remote participant exposure and data collection (published: Wagganer & Bruzadin Nunes, Journal of Sleep Research, under review).',
            'Twice awarded the President’s Student/Faculty Collaborative Research Grant (Aug 2022, Jan 2023).'
        ],
        roles: ['data-science', 'neuroscience']
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
        summary: 'Led lab and course instruction in cognitive neuroscience methods, from syllabus design through online course delivery.',
        bullets: [
            'Instructor of Record for 9 three-credit courses, including Sensation and Perception (4×), Cognitive Psychology, and Effects of Recreational Drugs (4×).',
            'Developed and delivered in-person and online courses; managed teaching assistants for grading and student communication.',
            'Designed syllabi, quizzes, exams, and research reports; adapted Cognitive Psychology to a fully online format (Zoom).',
            'Updated course content with current research and interactive assignments, including YouTube reports and in-person/online experiments.'
        ],
        roles: ['neuroscience']
    },

    {
        id: 'siu-ta',
        title: 'Teaching Assistant',
        org: 'Southern Illinois University',
        company: 'Southern Illinois University',
        location: 'Carbondale, IL',
        start: '2015-01',
        end: '2020-07',
        current: false,
        display: 'Jan 2015 – Jul 2020',
        period: 'Jan 2015 – Jul 2020',
        summary: 'Supported course instruction and grading across large undergraduate psychology courses.',
        bullets: [
            'TA for 13 three-credit courses/sections, including Introduction to Psychology (7×), Careers in Psychology (3×), Psychology of Learning, and Effects of Recreational Drugs.',
            'Graded assignments, exams, and papers; assisted with syllabus development and classroom activities.',
            'Provided student support via office hours and email; proctored exams and supported in-person and online sessions.'
        ],
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
        summary: 'Graduate research across three SIU labs — Integrative Neuroscience, Cognition, and Vision — spanning EEG, mental imagery, and visual-tracking studies.',
        bullets: [
            'Integrative Neuroscience Lab (Advisor: Dr. David Gilbert, May 2018 – Jul 2023) — EEG research on the short- and long-term neurocognitive effects of tobacco, bupropion, and nicotine during a spatial working-memory task (128-channel EEG; 116 participants across 12 longitudinal sessions; 8+ TB).',
            'Key findings: tobacco significantly slows brain frequency and power even after 66 days of abstinence, irrespective of treatment (sLORETA, cluster analysis); bupropion diverges from tobacco and the nicotine patch in parietal and prefrontal theta, alpha, and beta activity (GLM, rmMANOVA).',
            'Collected and managed longitudinal EEG and behavioral data; trained and supervised undergraduate research assistants who ran experimental sessions and performed first-pass analysis.',
            'Built and maintained the lab’s EEG preprocessing, plotting, and analysis software — authoring QuickLab (~500% faster preprocessing; integrated CUDA-ICA for parallel computation) and the Inverse ICA plugin.',
            'Implemented a Random Forest model to decode gender, age, and smoking status from EEG signals (Python, Scikit-Learn).',
            'Developed an HTML/JavaScript experiment (5 tasks and questionnaires) with SQL-backed data capture into R, collecting from 100+ participants online and in person.',
            'Cognition Lab (Advisor: Dr. Reza Habib, Aug 2016 – Aug 2018) — behavioral research on mental imagery, mental rotation, and visual working memory; designed and programmed browser-based behavioral experiments (JavaScript, HTML5, CSS) and collected and analyzed behavioral data in R.',
            'Vision Lab (Advisor: Dr. Matthew Schlesinger, Aug 2014 – Aug 2016) — investigated whether mental rotation and manual object-tracking share a common underlying mechanism; collected and analyzed visual-tracking and behavioral data (E-Prime, SPSS).'
        ],
        roles: ['neuroscience', 'bioinformatics']
    }
]

export default experience
