"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { WORK_EX } from "./constants";

export default function Work() {
  return (
    <section id="work" className="py-20 px-[10%] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-4">
          <Briefcase className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">Professional Journey</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl">
          My professional journey has equipped me with diverse skills in
          full-stack development, blockchain technologies, and cloud
          infrastructure.
        </p>
      </motion.div>

      <div className="space-y-12">
        {WORK_EX.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Timeline dot and line */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-accent"
              />

              {/* Vertical timeline line */}
              {index < WORK_EX.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "calc(100% + 3rem)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  className="hidden md:block absolute left-[7px] top-4 w-0.5 bg-accent/30"
                  style={{ transformOrigin: "top" }}
                />
              )}

              {/* Date and location - desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                className="hidden md:block w-48 pt-0 pr-8 text-right"
              >
                <div className="font-mono text-accent">{job.period}</div>
                <div className="flex items-center justify-end text-muted-foreground text-sm mt-1">
                  <MapPin className="h-3 w-3 ml-1" />
                  <span>{job.location}</span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                whileHover={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                }}
                className="flex-1 bg-card border border-40 rounded-lg p-6 ml-0 md:ml-8 transition-all duration-300"
              >
                <h3 className="text-xl font-bold">{job.company}</h3>
                <div className="text-accent font-mono mb-2">{job.role}</div>

                {/* Date and location - mobile */}
                <div className="md:hidden flex items-center text-muted-foreground text-sm mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-4">{job.period}</span>
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{job.location}</span>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <h4 className="font-mono text-accent mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.1 + 0.4,
                      }}
                      className="flex items-start"
                    >
                      <span className="inline-block w-2 h-2 bg-accent rounded-full mt-1.5 mr-2"></span>
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
