"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { personalInfo, skills } from "@/lib/data"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">{personalInfo.bio}</p>
              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-foreground mb-2 capitalize">{category}</h3>
                    <ul className="space-y-1">
                      {items.slice(0, 4).map((skill) => (
                        <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">▹</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  // src="/professional-developer-portrait.png"
                  src="/IMG_0810.jpeg"
                  alt={`${personalInfo.name} profile photo`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
