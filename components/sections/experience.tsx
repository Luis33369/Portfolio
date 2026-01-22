"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { experience } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">04.</span>
            Where I've Worked
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experience.map((job, index) => (
                <button
                  key={job.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="flex-1 min-h-[300px]">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`${activeTab === index ? "block" : "hidden"} md:pl-6`}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {job.role}{" "}
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      @ {job.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mb-4">{job.period}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <li key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
