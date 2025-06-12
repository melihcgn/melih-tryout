// components/AboutSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import profileImg from "../../public/MelihCaganAri-Photo.jpg"
export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 py-16 gap-10"
    >
      {/* Left: Profile Photo */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-128 h-128 relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={profileImg} // place your photo here
            alt="Melih Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right: About Text */}
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I’m a software engineer with a passion for crafting creative and scalable digital experiences. With a strong focus on frontend and game development, I enjoy building modern, fast, and accessible user interfaces that are both engaging and impactful.
        </p>
        <p className="text-lg text-muted-foreground">
          I have hands-on experience with technologies like Next.js, React, Unity, and Firebase, and I thrive in both professional and personal projects that challenge my skills and creativity.
        </p>
        <p className="text-lg text-muted-foreground">
          More than just writing code, I’m driven by a deeper purpose — to contribute meaningfully to society through technology. Whether it’s through thoughtful design, impactful projects, or team collaboration, I’m always looking for ways to make a positive difference.
        </p>
        <p className="text-lg text-muted-foreground">
          I’m currently open to opportunities where I can grow, collaborate, and build user-centric products that have real-world impact.        </p>
      </div>
    </motion.section>
  )
}






