"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function SocialSidebar() {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-6 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={personalInfo.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 right-6 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all font-mono text-xs [writing-mode:vertical-rl]"
        >
          {personalInfo.email}
        </a>
      </motion.div>
    </>
  )
}
