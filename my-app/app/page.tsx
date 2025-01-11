import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import DarkModeToggle from './components/DarkModeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <DarkModeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

