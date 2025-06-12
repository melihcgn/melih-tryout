// components/SkillsSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 sm:px-8 py-16 space-y-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-muted-foreground mt-2">Technical and soft skills I bring to the table</p>
      </div>

      {/* Programming Languages */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-muted-foreground">
          <li>Next.js (Professional)</li>
          <li>Tailwind CSS (Professional)</li>
          <li>HTML (Advanced)</li>
          <li>CSS (Advanced)</li>
          <li>Python (Advanced)</li>
          <li>C++ (Advanced)</li>
          <li>Flutter (Novice)</li>
          <li>Tcl (Novice)</li>
          <li>MySQL (Intermediate)</li>
          <li>PHP (Novice)</li>
          <li>C# (Intermediate)</li>
        </ul>
      </div>

      {/* Tools & IDEs */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Tools & IDEs</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-muted-foreground">
          <li>Visual Studio</li>
          <li>Spyder</li>
          <li>Microsoft Office</li>
          <li>Android Studio</li>
          <li>Xilinx</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
        <p className="text-muted-foreground">
          Teamwork, leadership, decision-making, problem-solving, corporate communication
        </p>
      </div>
    </motion.section>
  )
}
