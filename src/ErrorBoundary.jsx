import { Component } from 'react'

const BASE = import.meta.env.BASE_URL

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Portfolio crashed:', error, info)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-sm space-y-4">
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Under construction
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            This page hit a snag. In the meantime, here's how to reach me directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href={`${BASE}Ugo_Bruzadin_Nunes_CV.pdf`} target="_blank" rel="noreferrer" className="btn-ghost">
              Download CV
            </a>
            <a href="https://github.com/UgoBruzadin" target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ugonunes" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
            <a href="mailto:ugobruzadin@gmail.com" className="btn-ghost">
              Email
            </a>
          </div>
        </div>
      </div>
    )
  }
}
