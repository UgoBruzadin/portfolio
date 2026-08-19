# Portfolio content audit

This audit lists every biographical claim found in the site source (`src/`, `index.html`) and `README.md`, with file+line references and a status relative to the Canonical Facts provided.

Legend: **WRONG** = contradicts canonical facts; **STALE** = was true but no longer; **UNVERIFIED** = not in canonical facts and needs confirmation.

-- Files scanned: [README.md](README.md), [index.html](index.html), [Untitled-1.html](Untitled-1.html), [src/data/resume.yaml](src/data/resume.yaml), [src/data/resume.yaml.bak](src/data/resume.yaml.bak), key components in `src/components/`.

1) README.md
- Claim: "San Francisco, CA • 10+ years..." — [README.md](README.md#L9)
  - Status: WRONG (canonical: St. Louis, MO)

- Claim: "Currently at Alljoined" — [README.md](README.md#L11)
  - Status: WRONG (canonical: Alljoined role ended Jun 2026; current roles include NeuroLeap Advisor (Jul 2026–Present), Chapman Postdoc (Sep 2023–Present), Adjunct Maryville (Aug 2026–Present))

- Claim: ENIGMA described as "Submitted to CVPR 2026" — [README.md](README.md#L16)
  - Status: WRONG (canonical: ENIGMA — Transactions on Machine Learning Research, in press 2026; NeurIPS 2025 workshop poster)

- Claim: Alljoined-1.6M "Published on OpenArxiv 2025" — [README.md](README.md#L22)
  - Status: WRONG (canonical: arXiv preprint arXiv:2508.18571 — describe as arXiv preprint)

- Claim: Triangulation Project "134% speedup" — [README.md](README.md#L27)
  - Status: STALE/Wording mismatch (canonical: Triangulation is 2.3× faster; present text uses 134% — convert to multiplier)

- Claim: QuickLab "~500% improvement" — [README.md](README.md#L37)
  - Status: STALE/Wording mismatch (canonical: ~6× faster — prefer multiplier)

- Claim: Professional Experience lists "Neural Data Scientist @ Alljoined (2025–Present)" — [README.md](README.md#L41)
  - Status: WRONG (canonical: role ended Jun 2026)

- Claim: Postdoctoral Fellow @ Chapman University (2023–2025) — [README.md](README.md#L46)
  - Status: PARTLY STALE/UNVERIFIED (canonical: Postdoc & Visiting Scholar Sep 2023 – Present)

- Claim: Education lists degrees as "Ph.D. Cognitive Neuroscience" etc — [README.md](README.md#L63)
  - Status: WRONG/Wording: canonical degree names are in Psychology (Cognitive Neuroscience). Use exact degree names from brief.

- Claim: Publications list ENIGMA as "CVPR 2026 Submission" — [README.md](README.md#L69)
  - Status: WRONG (see above)

2) src/data/resume.yaml (primary data source)
- Claim: `profile.location: Chicago, IL / Remote` — [src/data/resume.yaml](src/data/resume.yaml#L9)
  - Status: WRONG (canonical: St. Louis, MO)

- Claim: `profile.summary` mentions PhD in Cognitive Neuroscience and "10+ years" — [src/data/resume.yaml](src/data/resume.yaml#L14)
  - Status: MATCH for "10+ years" and PhD mention, but degree naming should be exact (see Education section). Degree phrasing needs to be 'Ph.D., Psychology (Cognitive Neuroscience)'.

- Claim: Experience entry "Neural Data Scientist — Alljoined — location: San Francisco, CA — period: April 2025 – Present" — [src/data/resume.yaml](src/data/resume.yaml#L26-L27)
  - Status: WRONG (end date should be Jun 2026; not current)

- Claim: Postdoctoral Fellow / Visiting Scholar — Chapman University — period: "September 2023 – May 2025 / May 2025 – Present" — [src/data/resume.yaml](src/data/resume.yaml#L57)
  - Status: AMBIGUOUS / UNVERIFIED (canonical: Sep 2023 – Present; the YAML split is confusing and should be normalized to an ISO start and `current: true`)

- Claim: QuickLab "improving processing speed by ~500%" — [src/data/resume.yaml](src/data/resume.yaml#L82)
  - Status: STALE/Wording mismatch (canonical: ~6× faster)

- Claim: Featured project `ENIGMA` summary: "Submitted to CVPR 2026" — [src/data/resume.yaml](src/data/resume.yaml#L173)
  - Status: WRONG (canonical: in press 2026 at Transactions on Machine Learning Research; NeurIPS workshop poster 2025)

- Claim: `Alljoined-1.6M` results: "Published on OpenArxiv 2025" — [src/data/resume.yaml](src/data/resume.yaml#L191)
  - Status: WRONG (canonical: arXiv preprint — label as arXiv preprint and include arXiv ID)

- Claim: Triangulation Project results: "134% speedup" — [src/data/resume.yaml](src/data/resume.yaml#L209)
  - Status: STALE/Wording mismatch (canonical: 2.3× faster)

- Claim: Publications block lists ENIGMA as "CVPR Conference Submission" and Alljoined-1.6M as "OpenArxiv" — [src/data/resume.yaml](src/data/resume.yaml#L350-L356)
  - Status: WRONG (both venue labels must be updated per canonical facts: ENIGMA → Transactions on Machine Learning Research (in press, 2026); Alljoined-1.6M → arXiv preprint (2025), arXiv:2508.18571)

3) src/data/resume.yaml.bak
- Contains multiple duplicate/outdated claims mirroring `resume.yaml` including `location: San Francisco, CA` and `ENIGMA: Submitted to CVPR 2026` — [src/data/resume.yaml.bak](src/data/resume.yaml.bak#L9,src/data/resume.yaml.bak#L136)
  - Status: WRONG / STALE (same updates required)

4) src/components/Hero.jsx
- Uses `profile.location` and `profile.summary` from `src/data/resume` — [src/components/Hero.jsx](src/components/Hero.jsx#L64-L75)
  - Status: DATA-SOURCE (this component reads from the YAML source; update to consume the new JS data layer once created). No hardcoded contradictions here but depends on `resume.yaml` being corrected.

5) Untitled-1.html
- Contains duplicated placeholder code, older versions of components, hardcoded name and links, and comments for future work — [Untitled-1.html](Untitled-1.html#L136-L184)
  - Status: UNVERIFIED / Likely Dead Weight — appears to be an old scratch/notes file not used by the build. Recommend keeping for now but remove after confirmation; flag for deletion.

6) index.html
- Title/meta describe "Neural Data Scientist" and name — [index.html](index.html#L9-L12)
  - Status: OK but will reflect `profile` changes after data-layer update.

Other notes and TODOs found (UNVERIFIED items):
- Exact `profile.name` string differs across files: `Ugo Bruzadin Guenther-Nunes, PhD` (resume.yaml) vs canonical `Ugo Bruzadin Nunes, PhD`. Please confirm preferred legal/display name. (Found in [src/data/resume.yaml](src/data/resume.yaml#L3) and backup.)
- Missing canonical items that must be added to data layer: `Data Science Advisor, NeuroLeap Corp., Costa Mesa CA (remote), Jul 2026 – Present` and `Adjunct Faculty, Maryville University, Aug 2026 – Present` — currently not present anywhere (UNVERIFIED because absent).
- Publications: need canonical venue details and arXiv IDs for Alljoined-1.6M (arXiv:2508.18571) and correct ENIGMA venue (TMLR, in press 2026). Replace incorrect labels like "OpenArxiv" and "CVPR Submission".
- Metrics wording: prefer multiplier form (e.g., "~6× faster", "2.3× faster") per canonical brief.

Summary / Immediate actions recommended
- Update `src/data/resume.yaml` (or replace with new `src/data/*.js` modules) to match canonical facts exactly: location → St. Louis, MO; add NeuroLeap and Maryville roles; fix Alljoined end date (Jun 2026) and mark as not current; fix publication venues and labels; convert percentage metrics to multipliers; correct degree naming to exact text in canonical facts.
- Create new data layer `src/data/*.js` as requested; replace imports (e.g. `src/data/resume.js`) so components import from `src/data/index.js` barrel.
- Leave `Untitled-1.html` untouched for now but confirm whether it's safe to delete.

I will proceed to implement the data layer files (Task 2) next and then refactor components (Task 3). Before I change any content marked UNVERIFIED I will pause for your confirmation of the missing items (name variant, NeuroLeap role details if you want additional links, and any other missing facts).
