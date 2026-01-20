import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
