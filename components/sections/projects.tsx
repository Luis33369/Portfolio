"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Folder, X } from "lucide-react"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">03.</span>
            Some Things I've Built
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects - Redesigned as clickable cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => toggleProject(project.id)}
              >
                {/* Project Image - Always visible */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle overlay on hover when collapsed */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    expandedProject === project.id ? "bg-transparent" : "bg-black/10 group-hover:bg-black/20"
                  }`}
                />

                {/* Project title badge - visible when collapsed */}
                <AnimatePresence>
                  {expandedProject !== project.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="bg-card/95 backdrop-blur-sm px-4 py-3 rounded-lg border border-border">
                        <p className="text-primary font-mono text-xs mb-1">Featured Project</p>
                        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">Click to view details</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded overlay with full info */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-card/95 backdrop-blur-sm p-6 flex flex-col"
                    >
                      {/* Close button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedProject(null)
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Close project details"
                      >
                        <X className="h-4 w-4 text-foreground" />
                      </button>

                      <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground flex-1">{project.description}</p>

                      <div className="mt-4">
                        <ul className="flex flex-wrap gap-2 text-sm font-mono text-muted-foreground mb-4">
                          {project.tech.map((tech) => (
                            <li key={tech} className="bg-muted px-2 py-1 rounded text-xs">
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-5 w-5" />
                            <span className="text-sm">Code</span>
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                              aria-label={`View ${project.title} live`}
                            >
                              <ExternalLink className="h-5 w-5" />
                              <span className="text-sm">Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-center text-xl font-bold text-foreground mb-8">Other Noteworthy Projects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Folder className="h-10 w-10 text-primary" />
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`View ${project.title} live`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                      <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
