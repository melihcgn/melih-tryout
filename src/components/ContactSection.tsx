"use client"

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="mb-8 text-lg">
          Feel free to reach out for opportunities, collaborations, or just to say hi!
        </p>

        <div className="mb-8 space-y-2 text-base">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="melihcaganari@gmail.com"
              className="underline hover:text-blue-500"
            >
              melihcaganari@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+905533466849" className="underline hover:text-blue-500">
              +90 553 346 6849
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/melihcaganari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/melihcgn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/melih_cgn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  )
}
