"use client"

import { PROJECTS } from "./constants"
import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, Code } from "lucide-react"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'

// Enhanced Markdown component with animations
const MotionMarkdown = ({ children }: { children: string }) => {
  // Define reusable animations
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Custom components for ReactMarkdown with motion
  const components = {
    // Links with hover animations
    a: ({ node, ...props }: any) => (
      <motion.a 
        className="text-accent hover:underline" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        {...props} 
      />
    ),
    
    // Strong/bold text with highlight
    strong: ({ node, ...props }: any) => (
      <motion.strong 
        className="font-semibold text-accent" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        {...props} 
      />
    ),
    
    // Code blocks with pop animation
    code: ({ node, ...props }: any) => (
      <motion.code 
        className="px-1.5 py-0.5 bg-secondary/50 rounded text-xs font-mono" 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ backgroundColor: "rgba(var(--sakura-pink), 0.2)" }}
        {...props} 
      />
    ),
    
    // List container with stagger effect
    ul: ({ node, ...props }: any) => (
      <motion.ul
        className="space-y-2"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        {...props}
      />
    ),
    
    // List items with sequenced fade-in
    li: ({ node, ...props }: any) => (
      <motion.li
        className="flex items-start"
        variants={{
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.3 }}
        {...props}
      />
    ),
    
    // Paragraphs with subtle fade in
    p: ({ node, ...props }: any) => (
      <motion.p 
        {...props}
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="mb-2"
      />
    )
  };

  return (
    <ReactMarkdown components={components}>
      {children}
    </ReactMarkdown>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-[10%] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-4 sakura-border">
          <Folder className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">Featured Work</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 sakura-text-glow">Freelance work and Projects</h2>
        <p className="text-muted-foreground max-w-2xl sakura-highlight">
          Here is a project I've worked on, as a freelance gig majorly.
        </p>
      </motion.div>

      <div className="space-y-12">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-card border border-40 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 sakura-card"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent z-10"></div>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="h-full w-full">
                <Image
                  src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent/10 z-10 flex items-center justify-center"
              >
                <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  <Code className="h-6 w-6 text-accent" />
                </div>
              </motion.div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 sakura-text-glow">{project.title}</h3>
              <div className="text-muted-foreground mb-4">
                <MotionMarkdown>
                  {project.description}
                </MotionMarkdown>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.links && project.links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + index * 0.05 }}
                    whileHover={{
                      backgroundColor: "rgba(var(--sakura-pink), 0.2)",
                      color: "rgb(var(--sakura-pink))",
                      transition: { duration: 0.2 },
                    }}
                    className="text-xs px-2 py-1 bg-secondary/50 text-foreground rounded-full font-mono flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.text}
                  </motion.a>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                {project.links && project.links.some(link => link.text.toLowerCase().includes("github") || link.text.toLowerCase().includes("source")) && (
                  <motion.a
                    href={project.links.find(link => link.text.toLowerCase().includes("github") || link.text.toLowerCase().includes("source"))?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    aria-label="View GitHub repository"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                )}
                {project.links && project.links.some(link => link.text.toLowerCase().includes("website") || link.text.toLowerCase().includes("play")) && (
                  <motion.a
                    href={project.links.find(link => link.text.toLowerCase().includes("website") || link.text.toLowerCase().includes("play"))?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    aria-label="View live project"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}