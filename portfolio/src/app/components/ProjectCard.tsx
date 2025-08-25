"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github?: string
  live?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, github, live, tags }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-40"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
              aria-label="View GitHub repository"
            >
              <Github size={18} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 p-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-300"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-secondary/50 text-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

