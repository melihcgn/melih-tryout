import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <section id="hero" className="h-screen flex items-center justify-center"><HeroSection></HeroSection></section>
      <section id="about" className="min-h-screen"><AboutSection></AboutSection></section>
      <section id="skills" className="min-h-screen"><SkillsSection /></section>
      <section id="projects" className="min-h-screen"><ProjectsSection></ProjectsSection></section>
      <section id="work-experience" className="min-h-screen"><WorkExperienceSection></WorkExperienceSection></section>
      <section id="contact" className="min-h-fit"><ContactSection></ContactSection></section>
    </div>
  )
}

