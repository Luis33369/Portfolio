"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2"
        >
          {personalInfo.name}.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
        >
          {personalInfo.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed"
        >
          I'm a {personalInfo.title.toLowerCase()} specializing in building exceptional digital experiences. Currently
          focused on creating accessible, human-centered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6"
        >
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
