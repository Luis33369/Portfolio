"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Github, Linkedin, Twitter } from "lucide-react"
//TODO: Remove the built and center the personal info
export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border grid place-items-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links - Mobile Only */}
          <div className="flex gap-6 md:hidden">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm font-mono">
              Designed & Built by{" "}
              <a href="#" className="text-primary hover:underline">
                {personalInfo.name}
              </a>
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}
