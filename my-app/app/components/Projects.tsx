'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Autochords',
    description: 'An app that personalizes music chords for your own voice.',
    link: 'https://github.com/Dhravya/autochords.co',
  },
  {
    name: 'Virtual Keyboard',
    description: 'A hands free keyboard using Computer Vision.',
    link: 'https://github.com/sreedharsreeram/virtual-keyboard',
  },
  {
    name: 'Cricket Game Prediction',
    description: 'Predicting the outcome of cricket games using Machine Learning (In the works).',
    link: 'https://github.com/sreedharsreeram/ipl-game-prediction',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-gray-700 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="flex flex-col md:flex-row items-center justify-between p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.open(project.link, '_blank')}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-2 md:mb-0 tracking-tight text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p
                className={`text-center md:text-right transition-opacity duration-300 font-light text-gray-600 dark:text-gray-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-100'
                }`}
              >
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
