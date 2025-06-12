"use client"

import { StaticImageData } from "next/image"
import Image from "next/image"
import { motion } from 'framer-motion'
import mgaLogo from "../../public/mga-logo.png"
import giniLogo from "../../public/ginitalent-logo.png"
import bincomLogo from "../../public/bincomdevcenter-logo.png"
import dresdenLogo from "../../public/dresden-logo.jpg"
import defaultLogo from "../../public/default-logo.png"
type WorkExperience = {
  company: string
  role: string
  logo: StaticImageData
  location: string
  duration: string
  description: string[]
}

const experiences: WorkExperience[] = [
  {
    company: "MGA Soft",
    role: "Software Developer",
    logo: mgaLogo,
    location: "Istanbul, Turkey",
    duration: "Mar 2025 - Current",
    description: [
      "Developing the front end of web products using Next.js and Tailwind CSS.",
      "Implementing corresponding controllers to support functionality.",
      "Worked on-site as a full-time employee, contributing to product development and team collaboration."
    ]
  },
  {
    company: "Bincom Dev Center",
    role: "Mobile App/Frontend Developer Volunteer",
    logo: bincomLogo,
    location: "Lagos, Nigeria",
    duration: "Nov 2024 - Mar 2025",
    description: [
      "Voluntarily working on the products of Bincom, also learning via Udemy lessons.",
      "Joining daily standups, contributing to personal and knowledge development."
    ]
  },
  {
    company: "Gini Talent",
    role: "SEO Expert",
    logo: giniLogo,
    location: "Istanbul, Turkey",
    duration: "Oct 2024 - Apr 2025",
    description: [
      "Freelance job researching and reporting defects in the query responses of Yandex.",
      "Improved English proficiency while performing the tasks."
    ]
  },
  {
    company: "Dresden Vision",
    role: "Frontend Developer Intern",
    logo: dresdenLogo,
    location: "Sydney, Australia",
    duration: "June 2023 - July 2024",
    description: [
      "Designed UI for optometrists to use in the company.",
      "Shared new ideas and participated in daily meetings."
    ]
  },
  {
    company: "StoryDump",
    role: "Project Manager, Game Developer",
    logo: defaultLogo,
    location: "Ankara, Turkey",
    duration: "June 2022 - Sep 2022",
    description: [
      "Contributed to the development of the hyper-casual game project called 'Lizzie'.",
      "Designed and maintained the GDD and other project documentation.",
      "Organized the team and assigned tasks."
    ]
  }
]

export default function WorkExperienceSection() {
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
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground mt-2">Works I&apos;ve been involved in</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={60}
                height={60}
                className="rounded-md object-contain bg-white p-1 dark:bg-zinc-700"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{exp.company} • {exp.location}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.duration}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-700 dark:text-zinc-200">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
