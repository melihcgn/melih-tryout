"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(24, 24, 27, 0.5)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full flex justify-between px-6 py-4 z-50 h-14 items-center ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <section className="navigation-buttons flex flex-row gap-8 text-sm sm:text-base">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#work-experience" className="hover:underline">Work Experience</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </section>
      <ModeToggle />
    </motion.nav>
  )
}
