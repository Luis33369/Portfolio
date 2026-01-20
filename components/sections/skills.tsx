"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { skills } from "@/lib/data"
import { Code, Server, Wrench } from "lucide-react"

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tools: Wrench,
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg mr-2">02.</span>
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground capitalize">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
