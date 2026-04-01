import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Publications from './components/Publications'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen">
      <Nav dark={dark} setDark={setDark} />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-24">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Publications />
      </main>
      <Footer />
    </div>
  )
}
