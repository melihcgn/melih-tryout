'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Project = {
  title: string
  type: 'Individual' | 'Group'
  duration: string
  description: string[]
  github?: string
}

const projects: Project[] = [
  {
    title: 'Myth Party',
    type: 'Individual',
    duration: 'Feb 2023 – Present',
    description: [
      'C#-based party game using mythical objects and human psychology in Unity.',
      'Currently in alpha stage.'
    ],
    github: 'https://github.com/melihcgn/Myth_Party_game_old' // Optional
  },
  {
    title: 'Research on Femicides in Turkey',
    type: 'Group',
    duration: 'Apr 2023 – May 2023',
    description: [
      'Programmed web scraping, data visualization and cleaning with Python.',
      'Formed hypotheses and conducted analysis based on the collected data.'
    ],
    github: 'https://github.com/melihcgn/Sabanci/blob/main/CS412-Machine_Learning.zip'
  },
  {
    title: 'Drugland',
    type: 'Group',
    duration: 'Sep 2022 – Jan 2023',
    description: [
      'MySQL-based web project to facilitate pharmaceutical sales.',
      'Developed with PHP, MySQL, HTML, CSS using Xilinx as IDE.',
      'Completed under tight time constraints with 3 collaborators.'
    ],
    github: 'https://github.com/melihcgn/Sabanci/tree/main/DrugLand'
  },
  {
    title: 'Lightbulb',
    type: 'Group',
    duration: 'Feb 2022 – May 2022',
    description: [
      'Flutter-based social app inspired by Instagram.',
      'Practiced Flutter and Android Studio, collaborated via Git.'
    ],
    github: 'https://github.com/melihcgn/Sabanci/tree/main/Lightbulb_Project'
  }
]

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 sm:px-8 py-16 space-y-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground mt-2">Some of the notable projects I&apos;ve worked on</p>
      </div>

      <div className="gap-10 grid grid-cols-2">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border border-border rounded-xl p-5 shadow-sm bg-muted/20"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-muted-foreground">
                {proj.type} Project — {proj.duration}
              </p>
            </div>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-muted-foreground">
              {proj.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {proj.github && (
              <Link
                href={proj.github}
                target="_blank"
                className="inline-flex items-center gap-1 text-blue-500 hover:underline mt-3"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}
