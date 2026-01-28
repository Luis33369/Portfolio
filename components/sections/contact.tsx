"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

// EmailJS credentials - these are safe to expose on client-side as they only allow sending emails
const EMAILJS_SERVICE_ID = "service_y2v1mv7"
const EMAILJS_TEMPLATE_ID = "template_y7pqj4t"
const EMAILJS_PUBLIC_KEY = "ie_5PzocRfvq1oOCZ"

export function ContactSection() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      formRef.current?.reset()
    } catch (err) {
      setError("Failed to send message. Please try again or email me directly.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
            best to get back to you!
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary/10 border border-primary/30 rounded-lg p-8"
            >
              <p className="text-primary font-semibold text-lg">Thanks for reaching out! I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="bg-card" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-card resize-none"
                />
              </div>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg p-3"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
