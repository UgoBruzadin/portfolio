const GH = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const BlogIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
)

const PaperIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const HFIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <text x="1" y="17" fontSize="13" fontWeight="700" fontFamily="system-ui,sans-serif">HF</text>
  </svg>
)

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

function getLinks(project) {
  if (project.private) {
    return [{
      href: `mailto:ugobruzadin@gmail.com?subject=Request access: ${project.name}`,
      label: 'Request access',
      Icon: LockIcon,
      private: true,
    }]
  }
  const links = []
  if (project.githubUrl) links.push({ href: project.githubUrl, label: 'GitHub', Icon: GH })
  if (project.blog) links.push({ href: project.blog, label: 'Blog', Icon: BlogIcon })
  // legacy: if link isn't the github url and no explicit blog field, treat as blog
  if (project.link && project.link !== project.githubUrl && !project.blog) {
    links.push({ href: project.link, label: 'Blog', Icon: BlogIcon })
  }
  if (project.paper) links.push({ href: project.paper, label: 'Paper', Icon: PaperIcon })
  if (project.huggingface) links.push({ href: project.huggingface, label: 'HuggingFace', Icon: HFIcon })
  return links
}

// Icon-only row for the card header
export function ProjectLinkIcons({ project, className = '' }) {
  const links = getLinks(project)
  if (!links.length) return null
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
          title={label}
          className="text-slate-400 hover:text-neural-400 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

// Pill row for the modal header
export function ProjectLinkPills({ project, className = '' }) {
  const links = getLinks(project)
  if (!links.length) return null
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-neural-400 hover:text-neural-500 transition-colors shrink-0"
        >
          <Icon />
          {label}
        </a>
      ))}
    </div>
  )
}
