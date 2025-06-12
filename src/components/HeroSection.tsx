"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
]

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 4000) // 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-fit overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Background"
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-semibold drop-shadow-lg">
          Frontend Developer & Song Writer
        </h1>
      </div>

      <div className="absolute inset-0 bg-black/30 z-5" />
    </section>
  )
}

export default HeroSection
