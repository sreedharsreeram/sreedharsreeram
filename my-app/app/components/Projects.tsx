'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  name: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    name: "Autochords",
    description: "An app that personalizes music chords for your own voice.",
    link: "https://github.com/Dhravya/autochords.com"
  },
  {
    name: "Virtual Keyboard",
    description: "A hands free keyboard using Computer Vision.",
    link: "https://github.com/sreedharsreeram/virtual-keyboardb"
  },
  {
    name: "Cricket Game Prediction",
    description: "Predicting the outcome of cricket games using Machine Learning (In the works).",
    link: "https://github.com/sreedharsreeram/ipl-game-prediction"
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          My Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="flex flex-col md:flex-row items-center justify-between p-6 border border-gray-200 rounded-xl shadow-md bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.open(project.link, '_blank')}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-2 md:mb-0 tracking-tight text-gray-800">
                {project.name}
              </h3>
              <p className={`text-center md:text-right transition-opacity duration-300 font-light text-gray-600 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

