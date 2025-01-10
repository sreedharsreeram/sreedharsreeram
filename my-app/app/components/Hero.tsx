import { ArrowDownIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in tracking-tight">
        Sreeram Sreedhar
      </h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in animation-delay-200 font-light">
        Welcome to my website! For a pdf copy of my resume, please check out this <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">link</a>
      </p>
      <a
        href="#about"
        className="animate-bounce mt-8"
        aria-label="Scroll to About section"
      >
        <ArrowDownIcon className="w-8 h-8" />
      </a>
    </section>
  )
}

