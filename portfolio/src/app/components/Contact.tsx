"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-[10%] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 text-muted-foreground mb-4 sakura-border">
          <MessageSquare className="h-4 w-4 mr-2 text-accent" />
          <span className="text-sm font-mono">Get In Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 sakura-text-glow">
          Contact Me
        </h2>
        <p className="text-muted-foreground max-w-2xl sakura-highlight">
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 gap-12">
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 font-mono sakura-text-glow">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label
                htmlFor="name"
                className="block text-muted-foreground mb-2 font-mono text-sm"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-secondary/20 border-40 focus:border-accent transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-muted-foreground mb-2 font-mono text-sm"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-secondary/20 border-40 focus:border-accent transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label
                htmlFor="message"
                className="block text-muted-foreground mb-2 font-mono text-sm"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-secondary/20 border-40 focus:border-accent transition-all duration-300 resize-none"
                placeholder="How can I help you?"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/80 text-accent-foreground w-full relative overflow-hidden sakura-button"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                {isSubmitting ? (
                  <>
                    Sending<span className="animate-pulse">...</span>
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/30 border border-accent/30 text-accent p-3 rounded-md font-mono text-sm sakura-border"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 font-mono sakura-text-glow">
            Connect With Me
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-40 rounded-lg p-6 sakura-card"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm mb-6 bg-secondary/30 p-4 rounded-md"
            >
              <div className="terminal-prompt">cd contact-info</div>
              <div className="terminal-prompt">ls -la</div>
              <div className="mt-2">Displaying contact information...</div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-accent" />,
                  title: "Email",
                  text: "richikchanda1999@gmail.com",
                  href: "mailto:richikchanda1999@gmail.com",
                },
                {
                  icon: <Github className="h-5 w-5 text-accent" />,
                  title: "GitHub",
                  text: "github.com/richikchanda1999",
                  href: "https://github.com/richikchanda1999",
                },
                {
                  icon: <Linkedin className="h-5 w-5 text-accent" />,
                  title: "LinkedIn",
                  text: "linkedin.com/in/richikchanda1999",
                  href: "https://linkedin.com/in/richikchanda1999",
                },
                {
                  icon: <Twitter className="h-5 w-5 text-accent" />,
                  title: "X (formerly Twitter)",
                  text: "x.com/richik_chanda",
                  href: "https://x.com/richik_chanda",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-10 h-10 rounded-md bg-secondary/30 flex items-center justify-center group-hover:bg-accent/10 sakura-border"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="text-foreground font-mono">
                      {item.title}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
